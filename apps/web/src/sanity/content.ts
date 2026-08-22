import { draftMode } from "next/headers";
import { previewClient, publicClient } from "./client";
import {
  fallbackHome,
  fallbackInsight,
  fallbackProgramme,
  type PublicHome,
  type PublicInsight,
  type PublicProgramme,
} from "./fallback";
import {
  HOME_PAGE_QUERY,
  INSIGHT_BY_SLUG_QUERY,
  PROGRAMME_BY_SLUG_QUERY,
} from "./queries";
import type {
  HOME_PAGE_QUERYResult,
  INSIGHT_BY_SLUG_QUERYResult,
  PROGRAMME_BY_SLUG_QUERYResult,
} from "./types";

type CompleteHome = Extract<
  NonNullable<HOME_PAGE_QUERYResult>,
  { headline: string }
>;

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
