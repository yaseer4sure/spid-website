export type LegacyRedirect = {
  source: string;
  destination: string;
  permanent: true;
};

/**
 * Approved one-to-one redirects from the former WordPress information
 * architecture. Routes without a clear equivalent intentionally remain 404s
 * until a content owner approves a destination or an explicit 410 response.
 */
const legacyRoutes: LegacyRedirect[] = [
  { source: "/who-we-are", destination: "/about", permanent: true },
  { source: "/team", destination: "/about", permanent: true },
  { source: "/what-we-do", destination: "/our-work", permanent: true },
  { source: "/programs", destination: "/our-work", permanent: true },
  { source: "/our-works", destination: "/our-work", permanent: true },
  { source: "/initiatives", destination: "/our-work", permanent: true },
  {
    source: "/fellowships",
    destination: "/our-work/ayede",
    permanent: true,
  },
  { source: "/impacts", destination: "/impact", permanent: true },
  { source: "/stories", destination: "/insights", permanent: true },
  {
    source: "/get-involve",
    destination: "/get-involved",
    permanent: true,
  },
  { source: "/volunteer", destination: "/get-involved", permanent: true },
  {
    source: "/partner-with-us",
    destination: "/contact?type=partnership",
    permanent: true,
  },
];

export const legacyRedirects: LegacyRedirect[] = legacyRoutes.flatMap(
  (redirect) => [{ ...redirect, source: `${redirect.source}/` }, redirect],
);

export const trailingSlashRedirect: LegacyRedirect = {
  source: "/:path+/",
  destination: "/:path+",
  permanent: true,
};
