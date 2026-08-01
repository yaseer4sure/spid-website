import type { MetadataRoute } from "next";
export default function sitemap(): MetadataRoute.Sitemap {
  const base =
    process.env.NEXT_PUBLIC_SITE_URL || "https://spidclimateresilience.org";
  return ["", "/our-work/cpi4cg", "/get-involved", "/contact"].map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date("2026-07-30"),
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.8,
  }));
}
