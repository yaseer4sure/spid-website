import type { MetadataRoute } from "next";
export default function robots(): MetadataRoute.Robots {
  const production = process.env.VERCEL_ENV === "production";
  return {
    rules: production
      ? { userAgent: "*", allow: "/", disallow: ["/api/", "/studio/"] }
      : { userAgent: "*", disallow: "/" },
    sitemap: production
      ? `${process.env.NEXT_PUBLIC_SITE_URL || "https://spidclimateresilience.org"}/sitemap.xml`
      : undefined,
  };
}
