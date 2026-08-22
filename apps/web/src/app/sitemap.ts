import type { MetadataRoute } from "next";
export default function sitemap(): MetadataRoute.Sitemap {
  const base =
    process.env.NEXT_PUBLIC_SITE_URL || "https://spidclimateresilience.org";
  return [
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
  ].map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date("2026-08-22"),
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.8,
  }));
}
