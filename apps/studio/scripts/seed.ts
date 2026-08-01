import { createClient, type SanityDocumentStub } from "@sanity/client";

const args = new Set(process.argv.slice(2));
const dataset = process.env.SANITY_STUDIO_DATASET || "production";
if (dataset === "production" && !args.has("--allow-production")) {
  throw new Error(
    "Refusing to seed the production dataset without --allow-production.",
  );
}

const token = process.env.SANITY_API_WRITE_TOKEN;
if (!token) throw new Error("SANITY_API_WRITE_TOKEN is required for seeding.");

const client = createClient({
  projectId: process.env.SANITY_STUDIO_PROJECT_ID || "",
  dataset,
  apiVersion: "2026-07-30",
  token,
  useCdn: false,
});

const blocks = (text: string) => [
  {
    _key: crypto.randomUUID(),
    _type: "block",
    style: "normal",
    markDefs: [],
    children: [{ _key: crypto.randomUUID(), _type: "span", marks: [], text }],
  },
];

const documents: Array<SanityDocumentStub & { _id: string }> = [
  {
    _id: "siteSettings",
    _type: "siteSettings",
    organisationName:
      "Sustainable Participatory Development and Climate Resilience Initiative",
    shortName: "SPiD",
    tagline: "Locally Led. Youth Driven. Climate Resilient.",
    siteTitle: "SPiD | Locally Led Climate Action",
    defaultMetaDescription:
      "SPiD advances community-rooted, youth-driven climate resilience across Nigeria and Africa.",
  },
  {
    _id: "mainNavigation",
    _type: "navigation",
    items: [
      "About",
      "Our Work",
      "Impact",
      "Insights",
      "Partners",
      "Get Involved",
      "Contact",
    ].map((label) => ({
      _key: label,
      label,
      href: `/${label.toLowerCase().replaceAll(" ", "-")}`,
      visible: true,
    })),
    primaryAction: {
      _type: "callToAction",
      label: "Partner With Us",
      href: "/contact?type=partnership",
      style: "primary",
    },
  },
  {
    _id: "siteFooter",
    _type: "footer",
    positioningStatement: "Locally led, youth-driven climate resilience.",
    newsletterEnabled: false,
  },
  {
    _id: "contactSettings",
    _type: "contactSettings",
    pageHeading: "Contact SPiD",
    pageIntroduction:
      "Choose the enquiry type that best matches how you would like to engage.",
    successHeading: "Enquiry received",
    successMessage: "Thank you. Your enquiry has been sent to the SPiD team.",
    failureMessage:
      "We could not send your enquiry. Please use the published contact email.",
    lastReviewedAt: "2026-07-30",
  },
  {
    _id: "drafts.programme-iicare",
    _type: "programme",
    title:
      "Integrated Initiative for Climate Adaptation and Resilience Empowerment",
    acronym: "IICARE",
    slug: { current: "iicare" },
    programmeType: "initiative",
    status: "draftDevelopment",
    featured: false,
    applicationStatus: "notApplicable",
    summary: "Draft programme record. Not approved for publication.",
    primaryAction: {
      _type: "callToAction",
      label: "Contact SPiD",
      href: "/contact",
      style: "secondary",
    },
  },
  {
    _id: "programme-cpi4cg",
    _type: "programme",
    title: "Community-led Participatory Initiative for Climate Governance",
    acronym: "CPI4CG",
    slug: { current: "cpi4cg" },
    programmeType: "initiative",
    status: "pilot",
    featured: true,
    applicationStatus: "notApplicable",
    summary:
      "A community-led climate-governance initiative piloted in Sabon Gari Local Government Area, Kaduna State.",
    overview: blocks(
      "CPI4CG centres community knowledge and participation in local climate governance through participatory research, consultation, validation and policy engagement.",
    ),
    whyItMatters: blocks(
      "Climate decisions are stronger when lived experience and local knowledge shape priorities, evidence and action.",
    ),
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
    methodologySteps: [
      "Household surveys",
      "Focus group discussions",
      "Key informant interviews",
      "Community consultation",
      "Stakeholder dialogue",
      "Validation workshops",
      "Evidence-based advocacy",
    ].map((title, index) => ({
      _key: String(index),
      _type: "methodologyStep",
      title,
      description: "Approved participatory method within the CPI4CG pilot.",
    })),
    expectedOutcomes: [
      {
        _key: "inclusive",
        _type: "expectedOutcome",
        title: "More inclusive climate governance",
        description:
          "Community evidence informs dialogue and climate-governance priorities.",
        status: "expected",
      },
    ],
    primaryAction: {
      _type: "callToAction",
      label: "Partner on community-led climate governance",
      href: "/contact?type=partnership",
      style: "primary",
    },
  },
  {
    _id: "programme-ayede",
    _type: "programme",
    title: "AYEDE 4 Climate Action Fellowship",
    acronym: "AYEDE",
    slug: { current: "ayede" },
    programmeType: "fellowship",
    status: "active",
    featured: true,
    applicationStatus: "closed",
    summary:
      "SPiD’s youth climate-leadership fellowship combines expert sessions, self-paced learning, mentorship, peer collaboration and practical assignments.",
    primaryAction: {
      _type: "callToAction",
      label: "Explore ways to support youth leaders",
      href: "/get-involved",
      style: "primary",
    },
  },
  {
    _id: "insight-cpi4cg-learning",
    _type: "insight",
    contentType: "programmeUpdate",
    title: "What participatory climate governance asks of local evidence",
    slug: { current: "participatory-climate-governance-local-evidence" },
    summary:
      "A development-only editorial placeholder outlining the CPI4CG approach. It requires editorial approval before production publication.",
    featured: true,
    publishedAt: "2026-07-30T00:00:00.000Z",
    organisationAuthor: "SPiD",
    body: blocks(
      "Development placeholder: approved source content for a full insight is not yet available. This record demonstrates the relationship between programme evidence and editorial publishing without asserting programme results.",
    ),
    relatedProgrammes: [
      { _type: "reference", _ref: "programme-cpi4cg", _key: "cpi4cg" },
    ],
    seo: { _type: "seo", noIndex: true },
  },
  {
    _id: "homepage",
    _type: "homepage",
    headline: "Locally Led. Youth Driven. Climate Resilient.",
    subheadline:
      "SPiD strengthens participatory development and climate resilience by building community capacity, amplifying local voices and advancing locally driven solutions.",
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
    introduction: blocks(
      "SPiD links lived experience, local knowledge, evidence, leadership and policy engagement so communities help shape climate decisions and sustainable development pathways.",
    ),
    featuredProgrammes: [
      { _type: "reference", _ref: "programme-cpi4cg", _key: "cpi4cg" },
      { _type: "reference", _ref: "programme-ayede", _key: "ayede" },
    ],
    featuredInsight: { _type: "reference", _ref: "insight-cpi4cg-learning" },
  },
];

let transaction = client.transaction();
for (const document of documents)
  transaction = transaction.createOrReplace(document);
await transaction.commit();
console.log(`Seeded ${documents.length} controlled records into ${dataset}.`);
