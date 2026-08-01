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

async function clientForRequest() {
  return (await draftMode()).isEnabled ? previewClient() : publicClient;
}
export async function getHome(): Promise<PublicHome> {
  const client = await clientForRequest();
  return client
    ? ((await client.fetch(HOME_PAGE_QUERY)) as PublicHome | null) ||
        fallbackHome
    : fallbackHome;
}
export async function getProgramme(
  slug: string,
): Promise<PublicProgramme | null> {
  const client = await clientForRequest();
  return client
    ? ((await client.fetch(PROGRAMME_BY_SLUG_QUERY, {
        slug,
      })) as PublicProgramme | null)
    : slug === "cpi4cg"
      ? fallbackProgramme
      : null;
}
export async function getInsight(slug: string): Promise<PublicInsight | null> {
  const client = await clientForRequest();
  return client
    ? ((await client.fetch(INSIGHT_BY_SLUG_QUERY, {
        slug,
      })) as PublicInsight | null)
    : slug === fallbackInsight.slug
      ? fallbackInsight
      : null;
}
