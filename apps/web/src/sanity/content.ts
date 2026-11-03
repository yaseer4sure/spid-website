import { draftMode } from "next/headers";
import { approvedSocialLinks, normaliseSocialLinks } from "@/content/social";
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
  HOME_PAGE_QUERY,
  INSIGHT_BY_SLUG_QUERY,
  PUBLIC_PARTNERS_QUERY,
  PROGRAMME_BY_SLUG_QUERY,
  SITE_SETTINGS_QUERY,
} from "./queries";
import type {
  HOME_PAGE_QUERYResult,
  INSIGHT_BY_SLUG_QUERYResult,
  PUBLIC_PARTNERS_QUERYResult,
  PROGRAMME_BY_SLUG_QUERYResult,
  SITE_SETTINGS_QUERYResult,
} from "./types";

export const approvedOfficeAddress = [
  "43A, Ruwan Godiya Street,",
  "Opposite Gwandu, Unguwar Sarki,",
  "Kaduna State, Nigeria.",
] as const;

type CompleteHome = Extract<
  NonNullable<HOME_PAGE_QUERYResult>,
  { headline: string }
>;

const publicUtilityQueryOptions = () => ({
  signal: AbortSignal.timeout(3_000),
});

function programmeSummary(
  value: CompleteHome["featuredProgrammes"][number],
): PublicProgramme {
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
  if (!value.logoUrl) return null;
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
    secondaryAction: value.secondaryAction ?? undefined,
    featuredProgrammes: value.featuredProgrammes.map(programmeSummary),
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
    overview: value.overview ?? undefined,
    whyItMatters: value.whyItMatters ?? undefined,
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
  if (!(await draftMode()).isEnabled) return publicClient;

  const client = previewClient();
  return stega ? client : client.withConfig({ stega: false });
}
export async function getHome(): Promise<PublicHome> {
  const client = await clientForRequest();
  if (!client) return fallbackHome;
  return publicHome(await client.fetch(HOME_PAGE_QUERY)) || fallbackHome;
}

export async function getSiteSettings() {
  const client = await clientForRequest(false);
  if (!client)
    return {
      socialLinks: approvedSocialLinks,
      officeAddress: approvedOfficeAddress,
    };
  try {
    const settings: SITE_SETTINGS_QUERYResult = await client.fetch(
      SITE_SETTINGS_QUERY,
      {},
      publicUtilityQueryOptions(),
    );
    const officeAddress = settings?.officeAddress?.filter(Boolean);
    return {
      socialLinks: normaliseSocialLinks(settings?.socialLinks),
      officeAddress: officeAddress?.length
        ? officeAddress
        : approvedOfficeAddress,
    };
  } catch {
    return {
      socialLinks: approvedSocialLinks,
      officeAddress: approvedOfficeAddress,
    };
  }
}

export async function getPublicPartners(): Promise<PublicPartner[]> {
  const client = await clientForRequest(false);
  if (!client) return [];
  try {
    const partners: PUBLIC_PARTNERS_QUERYResult = await client.fetch(
      PUBLIC_PARTNERS_QUERY,
      {},
      publicUtilityQueryOptions(),
    );
    return publicPartners(partners);
  } catch {
    return [];
  }
}
export async function getProgramme(
  slug: string,
): Promise<PublicProgramme | null> {
  const client = await clientForRequest();
  if (!client) return slug === "cpi4cg" ? fallbackProgramme : null;
  const programme = publicProgramme(
    await client.fetch(PROGRAMME_BY_SLUG_QUERY, { slug }),
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
  const client = await clientForRequest(stega);
  if (!client) return slug === fallbackInsight.slug ? fallbackInsight : null;
  const insight = publicInsight(
    await client.fetch(INSIGHT_BY_SLUG_QUERY, { slug }),
  );
  return insight || (slug === fallbackInsight.slug ? fallbackInsight : null);
}
