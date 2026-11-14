import { draftMode } from "next/headers";
import { approvedSocialLinks, normaliseSocialLinks } from "@/content/social";
import { mergeApprovedPartners } from "@/content/partners";
import { approvedOfficeAddress } from "@/content/organisation";
import { previewClient, publicClient } from "./client";
import {
  fallbackHome,
  fallbackInsight,
  fallbackProgramme,
  type PublicHome,
  type PublicInsight,
  type PublicPartner,
  type PublicProgramme,
} from "./fallback";
import {
  ABOUT_PAGE_QUERY,
  CONTACT_SETTINGS_QUERY,
  CORE_PAGE_QUERY,
  HOME_PAGE_QUERY,
  INSIGHT_BY_SLUG_QUERY,
  PUBLIC_PARTNERS_QUERY,
  PROGRAMME_BY_SLUG_QUERY,
  SITE_SETTINGS_QUERY,
} from "./queries";
import type {
  ABOUT_PAGE_QUERYResult,
  CONTACT_SETTINGS_QUERYResult,
  CORE_PAGE_QUERYResult,
  HOME_PAGE_QUERYResult,
  INSIGHT_BY_SLUG_QUERYResult,
  PUBLIC_PARTNERS_QUERYResult,
  PROGRAMME_BY_SLUG_QUERYResult,
  SITE_SETTINGS_QUERYResult,
} from "./types";

type CompleteHome = Extract<
  NonNullable<HOME_PAGE_QUERYResult>,
  { headline: string }
>;

const publicUtilityQueryOptions = () => ({
  signal: AbortSignal.timeout(3_000),
});

function programmeSummary(
  value: CompleteHome["featuredProgrammes"][number],
): PublicProgramme | null {
  if (!value) return null;
  return { ...value, acronym: value.acronym ?? undefined };
}

function insightSummary(
  value: NonNullable<CompleteHome["featuredInsight"]>,
): PublicInsight {
  return {
    ...value,
    seo: value.seo ? { noIndex: value.seo.noIndex ?? undefined } : undefined,
  };
}

function publicPartner(
  value:
    | NonNullable<CompleteHome["partners"]>[number]
    | PUBLIC_PARTNERS_QUERYResult[number],
): PublicPartner | null {
  if (!value || !value.logoUrl) return null;
  return {
    _id: value._id,
    name: value.name,
    partnerType: value.partnerType,
    logoUrl: value.logoUrl,
    website: value.website ?? undefined,
    summary: value.summary ?? undefined,
    relationshipSummary: value.relationshipSummary ?? undefined,
    featured: value.featured ?? undefined,
    displayOrder: value.displayOrder ?? undefined,
  };
}

function publicPartners(
  values: NonNullable<CompleteHome["partners"]> | PUBLIC_PARTNERS_QUERYResult,
): PublicPartner[] {
  return values
    .map(publicPartner)
    .filter((partner): partner is PublicPartner => partner !== null);
}

function publicHome(value: HOME_PAGE_QUERYResult): PublicHome | null {
  if (!value || typeof value.headline !== "string") return null;
  return {
    ...value,
    valueProposition: value.valueProposition || fallbackHome.valueProposition,
    workPillars: value.workPillars?.length
      ? value.workPillars
      : fallbackHome.workPillars,
    values: value.values?.length ? value.values : fallbackHome.values,
    secondaryAction: value.secondaryAction ?? undefined,
    featuredProgrammes: value.featuredProgrammes
      .map(programmeSummary)
      .filter((programme): programme is PublicProgramme => programme !== null),
    featuredInsight: value.featuredInsight
      ? insightSummary(value.featuredInsight)
      : undefined,
    impactMetrics: value.impactMetrics ?? [],
    partners: publicPartners(value.partners ?? []),
  };
}

function publicProgramme(
  value: PROGRAMME_BY_SLUG_QUERYResult,
): PublicProgramme | null {
  if (!value) return null;
  return {
    ...value,
    acronym: value.acronym ?? undefined,
    tagline: value.tagline ?? undefined,
    overviewText:
      value.overviewText?.filter((item): item is string => item !== null) ??
      undefined,
    whyItMattersText:
      value.whyItMattersText?.filter((item): item is string => item !== null) ??
      undefined,
    locations: value.locations?.map(({ label, country }) => ({
      label,
      country,
    })),
    methodologySteps: value.methodologySteps?.map(({ title, description }) => ({
      title,
      description,
    })),
    milestones: value.milestones ?? undefined,
    expectedOutcomes: value.expectedOutcomes?.map(
      ({ title, description, status }) => ({
        title,
        description,
        status: status || "expected",
      }),
    ),
    frameworkAlignments: value.frameworkAlignments ?? undefined,
    impactMetrics: value.impactMetrics ?? [],
    relatedInsights: value.relatedInsights?.map(insightSummary),
  };
}

function publicInsight(
  value: INSIGHT_BY_SLUG_QUERYResult,
): PublicInsight | null {
  if (!value) return null;
  return {
    ...value,
    seo: value.seo ? { noIndex: value.seo.noIndex ?? undefined } : undefined,
    relatedProgrammes: value.relatedProgrammes?.map((programme) => ({
      ...programme,
      acronym: programme.acronym ?? undefined,
    })),
  };
}

async function clientForRequest(stega = true) {
  const includeDrafts = (await draftMode()).isEnabled;
  if (!includeDrafts) return { client: publicClient, includeDrafts };

  const client = previewClient();
  return {
    client: stega ? client : client.withConfig({ stega: false }),
    includeDrafts,
  };
}
export async function getHome(): Promise<PublicHome> {
  const { client, includeDrafts } = await clientForRequest();
  const home = client
    ? publicHome(await client.fetch(HOME_PAGE_QUERY, { includeDrafts })) ||
      fallbackHome
    : fallbackHome;
  return { ...home, partners: mergeApprovedPartners(home.partners) };
}

export async function getSiteSettings() {
  const client = publicClient;
  if (!client)
    return {
      socialLinks: approvedSocialLinks,
      officeAddress: approvedOfficeAddress,
      navigation: null,
      footer: null,
    };
  try {
    const settings: SITE_SETTINGS_QUERYResult = await client.fetch(
      SITE_SETTINGS_QUERY,
      {},
      publicUtilityQueryOptions(),
    );
    const officeAddress = settings?.settings?.officeAddress?.filter(Boolean);
    return {
      socialLinks: normaliseSocialLinks(settings?.settings?.socialLinks),
      officeAddress: officeAddress?.length
        ? officeAddress
        : approvedOfficeAddress,
      navigation: settings?.navigation ?? null,
      footer: settings?.footer ?? null,
    };
  } catch {
    return {
      socialLinks: approvedSocialLinks,
      officeAddress: approvedOfficeAddress,
      navigation: null,
      footer: null,
    };
  }
}

export async function getAboutContent() {
  const { client, includeDrafts } = await clientForRequest();
  if (!client) return null;
  return (await client.fetch(ABOUT_PAGE_QUERY, {
    includeDrafts,
  })) as ABOUT_PAGE_QUERYResult;
}

export async function getCorePage(pageKey: string) {
  const { client, includeDrafts } = await clientForRequest();
  if (!client) return null;
  return (await client.fetch(CORE_PAGE_QUERY, {
    pageKey,
    includeDrafts,
  })) as CORE_PAGE_QUERYResult;
}

export async function getContactSettings() {
  const { client } = await clientForRequest();
  if (!client) return null;
  try {
    return (await client.fetch(
      CONTACT_SETTINGS_QUERY,
      {},
      publicUtilityQueryOptions(),
    )) as CONTACT_SETTINGS_QUERYResult;
  } catch {
    return null;
  }
}

export async function getPublicPartners(): Promise<PublicPartner[]> {
  const { client, includeDrafts } = await clientForRequest(false);
  if (!client) return mergeApprovedPartners([]);
  try {
    const partners: PUBLIC_PARTNERS_QUERYResult = await client.fetch(
      PUBLIC_PARTNERS_QUERY,
      { includeDrafts },
      publicUtilityQueryOptions(),
    );
    return mergeApprovedPartners(publicPartners(partners));
  } catch {
    return mergeApprovedPartners([]);
  }
}
export async function getProgramme(
  slug: string,
): Promise<PublicProgramme | null> {
  const { client, includeDrafts } = await clientForRequest();
  if (!client) return slug === "cpi4cg" ? fallbackProgramme : null;
  const programme = publicProgramme(
    await client.fetch(PROGRAMME_BY_SLUG_QUERY, { slug, includeDrafts }),
  );
  return programme || (slug === "cpi4cg" ? fallbackProgramme : null);
}
export async function getInsight(slug: string): Promise<PublicInsight | null> {
  return getInsightWithStega(slug, true);
}

export async function getInsightMetadata(
  slug: string,
): Promise<PublicInsight | null> {
  return getInsightWithStega(slug, false);
}

async function getInsightWithStega(
  slug: string,
  stega: boolean,
): Promise<PublicInsight | null> {
  const { client, includeDrafts } = await clientForRequest(stega);
  if (!client) return slug === fallbackInsight.slug ? fallbackInsight : null;
  const insight = publicInsight(
    await client.fetch(INSIGHT_BY_SLUG_QUERY, { slug, includeDrafts }),
  );
  return insight || (slug === fallbackInsight.slug ? fallbackInsight : null);
}
