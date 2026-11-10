export const voicesFromTheWard = {
  slug: "voices-from-the-ward",
  title: "Voices from the Ward",
  subtitle:
    "Climate Vulnerability, Awareness, and Governance in Sabon Gari LGA, Kaduna State",
  description: "A Quantitative and Geospatial Assessment",
  category: "Research Report",
  organisationAuthor:
    "Sustainable Participatory Development and Climate Resilience Initiative (SPiD)",
  programme:
    "Community-led Participatory Initiative for Climate Governance (CPI4CG)",
  publicationDate: "2026-07-01",
  publicationDateLabel: "July 2026",
  fieldworkPeriod: "November–December 2025",
  location: "Sabon Gari LGA, Kaduna State",
  approvalStatus: "pendingApproval" as const,
  landingPath: "/insights/voices-from-the-ward",
  readerPath: "/insights/voices-from-the-ward/read",
  reportPath: "/research/voices-from-the-ward/report.html",
  pdfPath:
    "/research/voices-from-the-ward/voices-from-the-ward-spid-research-report.pdf",
  posterPath: "/images/research/voices-from-the-ward-summary.jpg",
  summary:
    "A household survey and geospatial assessment examining climate vulnerability, awareness, adaptation and governance across all eleven wards of Sabon Gari LGA.",
  executiveSummary: [
    "Between November and December 2025, SPiD surveyed 365 households across all eleven wards of Sabon Gari LGA and complemented the survey with a geospatial assessment of land degradation using satellite-derived Trends.Earth data.",
    "The evidence describes a community that is exposed, aware and willing, but under-resourced, under-informed about institutional pathways and largely excluded from formal climate governance.",
  ],
  methodology: [
    "Cross-sectional quantitative household survey administered face-to-face by trained enumerators using digital data collection and GPS capture.",
    "Geospatial assessment of land degradation and land-cover change using Trends.Earth and satellite imagery.",
    "Descriptive analysis of 365 valid interviews, with 361 GPS geopoints. Planned focus groups and key-informant interviews were not implemented and are not represented as completed methods.",
  ],
  findings: [
    {
      value: "365",
      label: "valid household interviews",
      source: "Methodology, sections 4.2–4.5",
    },
    {
      value: "11",
      label: "wards covered",
      source: "Methodology, sections 4.2–4.3",
    },
    {
      value: "80%",
      label: "had heard of climate change",
      source: "Results, section 6.1",
    },
    {
      value: "99%",
      label: "would join climate initiatives in the next six months",
      source: "Executive Summary and section 6.6",
    },
    {
      value: "36%",
      label: "average household income lost to climate-related hazards",
      source: "Results, section 6.3 and Voices from the Ward summary poster",
    },
  ],
  recommendations: [
    "Establish or formalise inclusive ward climate committees linked to traditional leadership.",
    "Prioritise flood control, drainage, waste management and accessible climate contact points.",
    "Use radio-first, advisory-rich early warning services and practical capacity building.",
    "Support community-led adaptation through targeted finance, land restoration and periodic evidence re-measurement.",
  ],
} as const;

export const voicesFromTheWardIsApproved =
  voicesFromTheWard.approvalStatus === ("approved" as string);
