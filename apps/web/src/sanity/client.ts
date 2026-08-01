import { createClient } from "next-sanity";

export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2026-07-30";
export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
export const hasSanityConfig = Boolean(
  projectId && projectId !== "your-project-id",
);

export const publicClient = hasSanityConfig
  ? createClient({
      projectId: projectId!,
      dataset,
      apiVersion,
      useCdn: true,
      perspective: "published",
    })
  : null;

export function previewClient() {
  const token = process.env.SANITY_API_READ_TOKEN;
  if (!hasSanityConfig || !token)
    throw new Error(
      "Preview requires configured Sanity project and read token.",
    );
  return createClient({
    projectId: projectId!,
    dataset,
    apiVersion,
    useCdn: false,
    token,
    perspective: "drafts",
    stega: true,
  });
}
