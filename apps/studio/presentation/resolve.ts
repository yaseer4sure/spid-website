import { defineDocuments, defineLocations } from "sanity/presentation";

const pageRoutes: Record<string, string> = {
  about: "/about",
  ourStory: "/about/our-story",
  approach: "/about/approach",
  team: "/about/team",
  governance: "/about/governance",
  ourWork: "/our-work",
  impact: "/impact",
  insights: "/insights",
  partners: "/partners",
  getInvolved: "/get-involved",
  contact: "/contact",
  privacyPolicy: "/privacy-policy",
  terms: "/terms",
  accessibility: "/accessibility",
};

export const resolve = {
  mainDocuments: defineDocuments([
    {
      route: "/",
      filter: '_id in ["homepage", "drafts.homepage"]',
    },
    {
      route: "/our-work/:slug",
      filter: '_type == "programme" && slug.current == $slug',
    },
    {
      route: "/insights/:slug",
      filter: '_type == "insight" && slug.current == $slug',
    },
  ]),
  locations: {
    homepage: defineLocations({
      select: { title: "headline" },
      resolve: (doc) => ({
        locations: [{ title: doc?.title || "Homepage", href: "/" }],
      }),
    }),
    programme: defineLocations({
      select: { title: "title", slug: "slug.current" },
      resolve: (doc) => ({
        locations: doc?.slug
          ? [{ title: doc.title || "Programme", href: `/our-work/${doc.slug}` }]
          : [],
      }),
    }),
    insight: defineLocations({
      select: { title: "title", slug: "slug.current" },
      resolve: (doc) => ({
        locations: doc?.slug
          ? [{ title: doc.title || "Insight", href: `/insights/${doc.slug}` }]
          : [],
      }),
    }),
    page: defineLocations({
      select: { title: "title", pageKey: "pageKey" },
      resolve: (doc) => ({
        locations:
          doc?.pageKey && pageRoutes[doc.pageKey]
            ? [{ title: doc.title || "Page", href: pageRoutes[doc.pageKey] }]
            : [],
      }),
    }),
  },
};
