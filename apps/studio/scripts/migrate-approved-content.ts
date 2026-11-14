import {
  createReadStream,
  existsSync,
  mkdirSync,
  writeFileSync,
} from "node:fs";
import path from "node:path";

import type { SanityDocumentStub } from "@sanity/client";
import { getCliClient } from "sanity/cli";

import {
  aboutContent,
  advisoryBoard,
  ayedeContent,
  cpi4cgContent,
  homepageContent,
  impactAreas,
  insightThemes,
  partnerCategories,
  personPortraits,
  team,
} from "../../web/src/content/approved";
import { impactMetrics } from "../../web/src/config/impactMetrics";
import { approvedPartnerManifest } from "../../web/src/content/partnerManifest";
import { voicesFromTheWard } from "../../web/src/content/research/voicesFromTheWard";
import { approvedSocialLinks } from "../../web/src/content/social";

type MigrationDocument = SanityDocumentStub & { _id: string; _type: string };
type AssetResolver = (relativePath: string) => Promise<string>;
type MigrationManifest = {
  status: "backup-complete" | "uploading-assets" | "complete" | "failed";
  dataset: string;
  backupPath: string;
  plannedDocumentIds: string[];
  createdDocumentIds: string[];
  uploadedAssetIds: string[];
  error?: string;
};

const args = new Set(process.argv.slice(2));
const apply = args.has("--apply");
const dataset = process.env.SANITY_STUDIO_DATASET || "production";
const publicRoot = path.resolve(process.cwd(), "../web/public");
const assetPlans = new Set<string>();

if (apply && dataset === "production" && !args.has("--allow-production")) {
  throw new Error("Production writes require --apply --allow-production.");
}

const client = getCliClient({ apiVersion: "2026-11-12" }).withConfig({
  perspective: "raw",
});

const key = (value: string) =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

const blocks = (paragraphs: readonly string[]) =>
  paragraphs.map((text, index) => ({
    _key: `paragraph-${index + 1}`,
    _type: "block",
    style: "normal",
    markDefs: [],
    children: [
      {
        _key: `span-${index + 1}`,
        _type: "span",
        marks: [],
        text,
      },
    ],
  }));

const ref = (_ref: string, _key = key(_ref)) => ({
  _key,
  _type: "reference",
  _ref,
});

function collectReferences(value: unknown, references = new Set<string>()) {
  if (Array.isArray(value)) {
    value.forEach((item) => collectReferences(item, references));
    return references;
  }
  if (!value || typeof value !== "object") return references;

  const record = value as Record<string, unknown>;
  if (typeof record._ref === "string") references.add(record._ref);
  Object.values(record).forEach((item) => collectReferences(item, references));
  return references;
}

async function spidImage(
  resolveAsset: AssetResolver,
  relativePath: string,
  alt: string,
) {
  return {
    _type: "spidImage",
    asset: { _type: "reference", _ref: await resolveAsset(relativePath) },
    alt,
    isDecorative: false,
    usageStatus: "approved",
  };
}

async function buildDocuments(
  resolveAsset: AssetResolver,
): Promise<MigrationDocument[]> {
  const partnerIds = approvedPartnerManifest.map(([id]) => `partner-${id}`);
  const homepage = {
    _id: "homepage",
    _type: "homepage",
    eyebrow:
      "Sustainable Participatory Development and Climate Resilience Initiative",
    headline: homepageContent.headline,
    subheadline: homepageContent.subheadline,
    valueProposition: homepageContent.valueProposition,
    heroImage: await spidImage(
      resolveAsset,
      "images/home/african-community-climate-leadership.JPG",
      "A group gathered in front of a SPiD participatory dialogue banner",
    ),
    primaryAction: {
      _type: "callToAction",
      label: "Partner With Us",
      href: "/contact?type=partnership",
      style: "primary",
    },
    secondaryAction: {
      _type: "callToAction",
      label: "Support Community Climate Action",
      href: "/get-involved",
      style: "warm",
    },
    introduction: blocks([homepageContent.valueProposition]),
    workPillars: homepageContent.pillars.map(([title, description], index) => ({
      _key: `pillar-${index + 1}`,
      _type: "methodologyStep",
      title,
      description,
    })),
    values: homepageContent.values.map(([title, description], index) => ({
      _key: `value-${index + 1}`,
      _type: "methodologyStep",
      title,
      description,
    })),
    featuredProgrammes: [ref("programme-cpi4cg"), ref("programme-ayede")],
    partners: partnerIds.map((id) => ref(id)),
    lastReviewedAt: "2026-11-12",
  } satisfies MigrationDocument;

  const pages: MigrationDocument[] = [
    {
      _id: "page-about",
      _type: "page",
      pageKey: "about",
      title: "Community-rooted climate action",
      slug: { _type: "slug", current: "about" },
      summary: aboutContent.introduction[0],
      eyebrow: "Who We Are",
      introductionParagraphs: [...aboutContent.introduction],
      vision: aboutContent.vision,
      mission: aboutContent.mission,
      whyParagraphs: [...aboutContent.why],
      theoryOfChange: [...aboutContent.theoryOfChange],
      approaches: aboutContent.approaches.map(
        ([title, description], index) => ({
          _key: `approach-${index + 1}`,
          _type: "methodologyStep",
          title,
          description,
        }),
      ),
      frameworks: [...aboutContent.frameworks],
      body: blocks(aboutContent.introduction),
    },
    {
      _id: "page-our-work",
      _type: "page",
      pageKey: "ourWork",
      title: "Our Work",
      slug: { _type: "slug", current: "our-work" },
      summary:
        "Explore SPiD programmes advancing community-led climate governance and youth climate leadership.",
      body: blocks([
        "SPiD works with communities and young climate leaders to strengthen locally led climate action.",
      ]),
    },
    {
      _id: "page-impact",
      _type: "page",
      pageKey: "impact",
      title: "Measuring What Matters",
      slug: { _type: "slug", current: "impact" },
      summary:
        "We measure impact not only by outputs—but by shifts in power, participation, and resilience.",
      listItems: [...impactAreas],
      body: blocks([
        "We measure impact not only by outputs—but by shifts in power, participation, and resilience.",
      ]),
    },
    {
      _id: "page-insights",
      _type: "page",
      pageKey: "insights",
      title: "Knowledge. Evidence. Community Voices.",
      slug: { _type: "slug", current: "insights" },
      summary:
        "Explore climate policy analysis, community stories, research findings, youth perspectives and programme updates.",
      listItems: [...insightThemes],
      body: blocks([
        "SPiD shares evidence and community knowledge that can inform locally led climate action.",
      ]),
    },
    {
      _id: "page-partners",
      _type: "page",
      pageKey: "partners",
      title: "Partnerships That Drive Climate Action",
      slug: { _type: "slug", current: "partners" },
      summary:
        "SPiD works across communities, research, government and the private sector to strengthen locally led climate action.",
      listItems: [...partnerCategories],
      body: blocks([
        "Our collaborative approach connects local leadership, evidence, implementation and institutional support.",
      ]),
    },
    {
      _id: "page-get-involved",
      _type: "page",
      pageKey: "getInvolved",
      title: "Support Community-Led Climate Action",
      slug: { _type: "slug", current: "get-involved" },
      summary: "You can help strengthen local climate resilience in Africa.",
      listItems: [
        "Partner With Us",
        "Fund a Program",
        "Volunteer Expertise",
        "Sponsor Youth Leaders",
        "Collaborate on Research",
      ],
      body: blocks([
        "Partner, fund a programme, contribute expertise, sponsor youth leaders or collaborate on research.",
      ]),
    },
    {
      _id: "page-contact",
      _type: "page",
      pageKey: "contact",
      title: "Let's Build Climate Resilience Together",
      slug: { _type: "slug", current: "contact" },
      summary:
        "Tell us how you would like to partner, contribute or collaborate.",
      body: blocks([
        "Use the secure enquiry form to contact SPiD about partnership, funding, research, volunteering or media.",
      ]),
    },
  ];

  const programmes: MigrationDocument[] = [
    {
      _id: "programme-cpi4cg",
      _type: "programme",
      title: cpi4cgContent.title,
      acronym: "CPI4CG",
      slug: { _type: "slug", current: "cpi4cg" },
      programmeType: "initiative",
      status: "pilot",
      applicationStatus: "notApplicable",
      featured: true,
      summary: cpi4cgContent.summary,
      heroImage: await spidImage(
        resolveAsset,
        "images/programmes/cpi4cg/community-climate-dialogue.jpeg",
        "Two men discussing community issues during an outdoor interview",
      ),
      overview: blocks(cpi4cgContent.overview),
      whyItMatters: blocks([cpi4cgContent.why]),
      locations: [
        {
          _key: "sabon-gari",
          _type: "location",
          label: "Sabon Gari LGA, Kaduna State",
          country: "Nigeria",
          stateOrRegion: "Kaduna State",
          localGovernment: "Sabon Gari",
        },
      ],
      methodologySteps: cpi4cgContent.methods.map(
        ([title, description], index) => ({
          _key: `method-${index + 1}`,
          _type: "methodologyStep",
          title,
          description,
        }),
      ),
      milestones: cpi4cgContent.milestones.map(([value, label], index) => ({
        _key: `milestone-${index + 1}`,
        _type: "milestone",
        title: `${value} ${label}`,
        description: `Approved CPI4CG milestone: ${value} ${label}.`,
        status: "achieved",
      })),
      expectedOutcomes: cpi4cgContent.expectedOutcomes.map(
        (description, index) => ({
          _key: `outcome-${index + 1}`,
          _type: "expectedOutcome",
          title: description,
          description,
          status: "expected",
        }),
      ),
      frameworkAlignments: cpi4cgContent.alignments.map((title, index) => ({
        _key: `framework-${index + 1}`,
        _type: "frameworkAlignment",
        title,
        description: "Approved CPI4CG framework alignment.",
      })),
      partners: [ref("partner-nest-africa")],
      primaryAction: {
        _type: "callToAction",
        label: "Start a partnership enquiry",
        href: "/contact?type=partnership",
        style: "primary",
      },
    },
    {
      _id: "programme-ayede",
      _type: "programme",
      title: ayedeContent.title,
      acronym: "AYEDE",
      slug: { _type: "slug", current: "ayede" },
      programmeType: "fellowship",
      status: "active",
      applicationStatus: "closed",
      featured: true,
      tagline: ayedeContent.supportingLine,
      summary:
        "AYEDE 4 Climate Action builds the knowledge, skills and networks young Africans need to lead effective climate action.",
      heroImage: await spidImage(
        resolveAsset,
        "images/programmes/ayede/youth-climate-learning.jpeg",
        "AYEDE 4 Climate Action fellows onboarding presentation",
      ),
      overview: blocks(ayedeContent.overview),
      methodologySteps: ayedeContent.approach.map((title, index) => ({
        _key: `approach-${index + 1}`,
        _type: "methodologyStep",
        title,
        description: title,
      })),
      milestones: ayedeContent.metrics.map(([value, label], index) => ({
        _key: `metric-${index + 1}`,
        _type: "milestone",
        title: `${value} ${label}`,
        description: `Approved AYEDE programme figure: ${value} ${label}.`,
        status: "achieved",
      })),
      primaryAction: {
        _type: "callToAction",
        label: "Partner With Us",
        href: "/contact?type=partnership",
        style: "primary",
      },
    },
    {
      _id: "drafts.programme-iicare",
      _type: "programme",
      title:
        "Integrated Initiative for Climate Adaptation and Resilience Empowerment",
      acronym: "IICARE",
      slug: { _type: "slug", current: "iicare" },
      programmeType: "initiative",
      status: "draftDevelopment",
      applicationStatus: "notApplicable",
      featured: false,
      summary:
        "Draft programme record. Approved public programme content is not yet available.",
      primaryAction: {
        _type: "callToAction",
        label: "Contact SPiD",
        href: "/contact",
        style: "secondary",
      },
    },
  ];

  const people: MigrationDocument[] = await Promise.all(
    [
      ...team.map(([fullName, roleTitle], displayOrder) => ({
        fullName,
        roleTitle,
        personType:
          displayOrder === 0
            ? ["leadership", "staff"]
            : roleTitle === "Community Manager"
              ? ["staff", "communityManager"]
              : ["staff"],
        displayOrder,
      })),
      ...advisoryBoard.map((fullName, index) => ({
        fullName,
        roleTitle: "Advisory Board",
        personType: ["adviser"],
        displayOrder: team.length + index,
      })),
    ].map(async (person) => ({
      _id: `person-${key(person.fullName)}`,
      _type: "person",
      ...person,
      portrait: await spidImage(
        resolveAsset,
        personPortraits[person.fullName].replace(/^\//, ""),
        `${person.fullName}, SPiD ${person.roleTitle}`,
      ),
      isPublic: true,
      lastReviewedAt: "2026-11-12",
    })),
  );

  const partners: MigrationDocument[] = await Promise.all(
    approvedPartnerManifest.map(
      async ([id, name, partnerType, filename], index) => ({
        _id: `partner-${id}`,
        _type: "partner",
        name,
        slug: { _type: "slug", current: key(name) },
        partnerType: [
          partnerType === "Government agency"
            ? "government"
            : partnerType === "Private sector actor"
              ? "privateSector"
              : partnerType === "Technical organisation"
                ? "technical"
                : "civilSociety",
        ],
        logo: {
          _type: "image",
          asset: {
            _type: "reference",
            _ref: await resolveAsset(`images/partners/${filename}`),
          },
        },
        relationshipStatus: "active",
        approvalStatus: "approved",
        featured: true,
        isPublic: true,
        displayOrder: index + 1,
        internalOwner: "SPiD — relationship owner assignment pending",
        lastReviewedAt: "2026-11-12",
      }),
    ),
  );

  const metrics: MigrationDocument[] = Object.entries(impactMetrics).map(
    ([metricKey, metric]) => ({
      _id: `drafts.impact-${metricKey}`,
      _type: "impactMetric",
      title: metric.label,
      numericValue: metric.value,
      displayValueOverride:
        metric.value === null
          ? undefined
          : `${metric.value.toLocaleString()}${metric.suffix}`,
      label: metric.label,
      publicContext:
        "Owner-approved organisational value. Reporting period, geography, evidence source and evidence owner remain pending; this draft is not public.",
      featured: false,
      verificationStatus: "unverified",
      isPublic: false,
    }),
  );

  const themes: MigrationDocument[] = [
    "Climate Governance",
    "Youth Climate Leadership",
    "Community-Led Adaptation",
    "Climate Justice",
    "Green Livelihoods",
    "Nature-Based Solutions",
    "Climate-Resilient Agriculture",
    "Research and Policy",
  ].map((title, displayOrder) => ({
    _id: `theme-${key(title)}`,
    _type: "theme",
    title,
    slug: { _type: "slug", current: key(title) },
    active: true,
    displayOrder,
  }));

  const reportResource: MigrationDocument = {
    _id: "drafts.resource-voices-from-the-ward",
    _type: "resource",
    title: voicesFromTheWard.title,
    slug: { _type: "slug", current: voicesFromTheWard.slug },
    resourceType: "report",
    summary: voicesFromTheWard.summary,
    publishedAt: `${voicesFromTheWard.publicationDate}T00:00:00.000Z`,
    organisationAuthor: voicesFromTheWard.organisationAuthor,
    isPublic: false,
    internalNotes:
      "Publication approval remains pending. The version-controlled HTML and PDF stay authoritative until approval.",
  };
  const reportInsight: MigrationDocument = {
    _id: "drafts.insight-voices-from-the-ward",
    _type: "insight",
    contentType: "research",
    title: voicesFromTheWard.title,
    slug: { _type: "slug", current: voicesFromTheWard.slug },
    summary: voicesFromTheWard.summary,
    featured: true,
    publishedAt: `${voicesFromTheWard.publicationDate}T00:00:00.000Z`,
    organisationAuthor: voicesFromTheWard.organisationAuthor,
    body: blocks([
      ...voicesFromTheWard.executiveSummary,
      ...voicesFromTheWard.methodology,
      ...voicesFromTheWard.recommendations,
    ]),
    relatedProgrammes: [ref("programme-cpi4cg")],
    primaryResource: ref("drafts.resource-voices-from-the-ward"),
    seo: { _type: "seo", noIndex: true, noFollow: true },
    internalNotes:
      "Organisation-supplied report; public publication approval pending.",
  };

  return [
    {
      _id: "siteSettings",
      _type: "siteSettings",
      organisationName:
        "Sustainable Participatory Development and Climate Resilience Initiative",
      shortName: "SPiD",
      tagline: homepageContent.headline,
      locationStatement: "Nigeria | Working Across Africa",
      officeAddress: [
        "43A, Ruwan Godiya Street,",
        "Opposite Gwandu, Unguwar Sarki,",
        "Kaduna State, Nigeria.",
      ],
      socialLinks: approvedSocialLinks.map((link) => ({
        _key: link.platform,
        _type: "socialLink",
        ...link,
      })),
      siteTitle: "SPiD | Locally Led Climate Action",
      defaultMetaDescription:
        "SPiD advances community-rooted, youth-driven climate resilience across Nigeria and Africa.",
      lastReviewedAt: "2026-11-12",
    },
    {
      _id: "mainNavigation",
      _type: "navigation",
      items: [
        ["About", "/about"],
        ["Our Work", "/our-work"],
        ["Impact", "/impact"],
        ["Insights", "/insights"],
        ["Partners", "/partners"],
        ["Get Involved", "/get-involved"],
        ["Contact", "/contact"],
      ].map(([label, href]) => ({
        _key: key(label),
        label,
        href,
        visible: true,
      })),
      primaryAction: {
        _type: "callToAction",
        label: "Partner With Us",
        href: "/contact?type=partnership",
        style: "primary",
      },
      lastReviewedAt: "2026-11-12",
    },
    {
      _id: "siteFooter",
      _type: "footer",
      positioningStatement:
        "Locally led, youth-driven climate resilience across Nigeria and Africa.",
      newsletterEnabled: false,
      lastReviewedAt: "2026-11-12",
    },
    {
      _id: "contactSettings",
      _type: "contactSettings",
      pageHeading: "Let's Build Climate Resilience Together",
      pageIntroduction:
        "Tell us how you would like to partner, contribute or collaborate.",
      locationStatement: "Nigeria | Working Across Africa",
      successHeading: "Enquiry received",
      successMessage: "Thank you. Your enquiry has been sent to the SPiD team.",
      failureMessage: "We could not send your enquiry. Please try again later.",
      lastReviewedAt: "2026-11-12",
    },
    homepage,
    ...pages,
    ...programmes,
    ...people,
    ...partners,
    ...metrics,
    ...themes,
    reportResource,
    reportInsight,
  ];
}

async function main() {
  const dryResolver: AssetResolver = async (relativePath) => {
    assetPlans.add(relativePath);
    if (!existsSync(path.join(publicRoot, relativePath))) {
      throw new Error(`Missing approved asset: ${relativePath}`);
    }
    return `image-dry-run-${key(relativePath)}`;
  };
  const planned = await buildDocuments(dryResolver);
  const ids = planned.map(({ _id }) => _id);
  const idSet = new Set(ids);
  const duplicateDocumentIds = ids.filter(
    (id, index) => ids.indexOf(id) !== index,
  );
  const invalidReferences = [
    ...new Set(planned.flatMap((document) => [...collectReferences(document)])),
  ].filter(
    (reference) =>
      !reference.startsWith("image-dry-run-") && !idSet.has(reference),
  );
  const existing = await client.fetch<
    Array<{
      _id: string;
      _type: string;
      slug?: { current?: string };
      name?: string;
      pageKey?: string;
    }>
  >(`*[_id in $ids]{_id,_type,slug,name,pageKey}`, { ids });
  const existingById = new Map(
    existing.map((document) => [document._id, document]),
  );
  const typeConflicts = planned.filter((document) => {
    const current = existingById.get(document._id);
    return current && current._type !== document._type;
  });
  const counts = planned.reduce<Record<string, number>>((result, document) => {
    result[document._type] = (result[document._type] || 0) + 1;
    return result;
  }, {});
  const report = {
    mode: apply ? "apply" : "dry-run",
    dataset,
    plannedDocuments: planned.length,
    createDocuments: planned.filter(({ _id }) => !existingById.has(_id)).length,
    protectedExistingDocuments: existing.length,
    typeConflicts: typeConflicts.map(({ _id }) => _id),
    duplicateDocumentIds,
    invalidReferences,
    documentCounts: counts,
    assetUploads: assetPlans.size,
    missingAssets: [] as string[],
    safeguards: {
      iicareDraftOnly: ids.includes("drafts.programme-iicare"),
      impactMetricsDraftOnly: metricsAreDraftOnly(planned),
      researchApprovalPending: ids.includes(
        "drafts.insight-voices-from-the-ward",
      ),
      noOverwrite: true,
    },
  };

  if (!apply) {
    console.log(JSON.stringify(report, null, 2));
    return;
  }
  if (typeConflicts.length) {
    throw new Error(
      `Refusing write because ${typeConflicts.length} target IDs conflict.`,
    );
  }
  if (duplicateDocumentIds.length || invalidReferences.length) {
    throw new Error(
      "Refusing write because the migration plan contains duplicate IDs or unresolved references.",
    );
  }

  const missingIds = ids.filter((id) => !existingById.has(id));
  if (!missingIds.length) {
    console.log(
      JSON.stringify(
        { ...report, createdDocuments: 0, noWriteRequired: true },
        null,
        2,
      ),
    );
    return;
  }

  const backupDirectory = path.resolve(process.cwd(), "../../backups/sanity");
  mkdirSync(backupDirectory, { recursive: true });
  const backup = await client.fetch<MigrationDocument[]>("*[]");
  const backupPath = path.join(
    backupDirectory,
    `production-before-approved-content-${new Date().toISOString().replace(/[:.]/g, "-")}.json`,
  );
  writeFileSync(backupPath, JSON.stringify(backup, null, 2), "utf8");

  const manifestPath = path.join(
    backupDirectory,
    `approved-content-migration-${new Date().toISOString().replace(/[:.]/g, "-")}.json`,
  );
  const manifest: MigrationManifest = {
    status: "backup-complete",
    dataset,
    backupPath,
    plannedDocumentIds: ids,
    createdDocumentIds: [],
    uploadedAssetIds: [],
  };
  const persistManifest = () =>
    writeFileSync(manifestPath, JSON.stringify(manifest, null, 2), "utf8");
  persistManifest();

  const uploadCache = new Map<string, string>();
  const uploadResolver: AssetResolver = async (relativePath) => {
    const cached = uploadCache.get(relativePath);
    if (cached) return cached;
    const absolutePath = path.join(publicRoot, relativePath);
    const asset = await client.assets.upload(
      "image",
      createReadStream(absolutePath),
      {
        filename: path.basename(absolutePath),
      },
    );
    uploadCache.set(relativePath, asset._id);
    manifest.status = "uploading-assets";
    manifest.uploadedAssetIds = [...new Set(uploadCache.values())];
    persistManifest();
    return asset._id;
  };
  try {
    const resolved = await buildDocuments(uploadResolver);
    const missing = resolved.filter(({ _id }) => !existingById.has(_id));
    let transaction = client.transaction();
    for (const document of missing) transaction = transaction.create(document);
    await transaction.commit();
    manifest.status = "complete";
    manifest.createdDocumentIds = missing.map(({ _id }) => _id);
    persistManifest();
    console.log(
      JSON.stringify(
        {
          ...report,
          createdDocuments: missing.length,
          backupPath,
          manifestPath,
        },
        null,
        2,
      ),
    );
  } catch (error: unknown) {
    manifest.status = "failed";
    manifest.error =
      error instanceof Error ? error.message : "Unknown migration failure";
    persistManifest();
    throw new Error(
      `Migration failed after backup. Review ${manifestPath} before retrying or rolling back.`,
    );
  }
}

function metricsAreDraftOnly(documents: MigrationDocument[]) {
  return documents
    .filter(({ _type }) => _type === "impactMetric")
    .every(
      ({ _id, isPublic, verificationStatus }) =>
        _id.startsWith("drafts.") &&
        isPublic === false &&
        verificationStatus === "unverified",
    );
}

const keepAlive = setInterval(() => undefined, 1_000);
void main()
  .catch((error: unknown) => {
    console.error(error instanceof Error ? error.message : "Migration failed.");
    process.exitCode = 1;
  })
  .finally(() => clearInterval(keepAlive));
