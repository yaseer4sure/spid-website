import type { MetadataRoute } from "next";
import {
  voicesFromTheWard,
  voicesFromTheWardIsApproved,
} from "@/content/research/voicesFromTheWard";
import { insightCategories } from "@/content/insightCategories";
export default function sitemap(): MetadataRoute.Sitemap {
  const base =
    process.env.NEXT_PUBLIC_SITE_URL || "https://spidclimateresilience.org";
  const paths = [
    "",
    "/about",
    "/our-work",
    "/our-work/cpi4cg",
    "/our-work/ayede",
    "/impact",
    "/partners",
    "/insights",
    "/get-involved",
    "/contact",
    "/donate",
  ];
  paths.push(
    ...insightCategories.map(({ slug }) => `/insights/category/${slug}`),
  );
  if (voicesFromTheWardIsApproved) paths.push(voicesFromTheWard.landingPath);
  return paths.map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date("2026-08-22"),
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.8,
  }));
}
