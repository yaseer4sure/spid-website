export type PublicMetric = {
  _id: string;
  numericValue?: number | null;
  displayValueOverride?: string | null;
  label: string;
  publicContext: string;
};

export type PublicProgramme = {
  _id: string;
  title: string;
  acronym?: string;
  slug: string;
  summary: string;
  status: string;
  overview?: unknown[];
  whyItMatters?: unknown[];
  locations?: Array<{ label: string; country: string }>;
  methodologySteps?: Array<{ title: string; description: string }>;
  milestones?: unknown[];
  expectedOutcomes?: Array<{
    title: string;
    description: string;
    status: string;
  }>;
  frameworkAlignments?: unknown[];
  primaryAction?: { label: string; href: string; style: string };
  impactMetrics?: PublicMetric[];
  relatedInsights?: PublicInsight[];
};

export type PublicInsight = {
  _id: string;
  title: string;
  slug: string;
  summary: string;
  contentType: string;
  publishedAt: string;
  organisationAuthor?: string;
  body?: unknown[];
  seo?: { noIndex?: boolean };
  relatedProgrammes?: PublicProgramme[];
};

export type PublicHome = {
  headline: string;
  subheadline: string;
  primaryAction?: { label: string; href: string; style: string };
  secondaryAction?: { label: string; href: string; style: string };
  featuredProgrammes: PublicProgramme[];
  featuredInsight?: PublicInsight;
  impactMetrics: PublicMetric[];
};

export const fallbackInsight: PublicInsight = {
  _id: "insight-cpi4cg-learning",
  title: "What participatory climate governance asks of local evidence",
  slug: "participatory-climate-governance-local-evidence",
  summary:
    "A programme note on how community knowledge can inform climate governance and policy engagement.",
  contentType: "programmeUpdate",
  publishedAt: "2026-07-30T00:00:00.000Z",
  organisationAuthor: "SPiD",
  body: [],
  seo: { noIndex: true },
  relatedProgrammes: [
    {
      _id: "programme-cpi4cg",
      title: "Community-led Participatory Initiative for Climate Governance",
      acronym: "CPI4CG",
      slug: "cpi4cg",
      summary:
        "A community-led climate-governance initiative piloted in Sabon Gari Local Government Area, Kaduna State.",
      status: "pilot",
    },
  ],
};
export const fallbackProgramme: PublicProgramme = {
  _id: "programme-cpi4cg",
  title: "Community-led Participatory Initiative for Climate Governance",
  acronym: "CPI4CG",
  slug: "cpi4cg",
  summary:
    "A community-led initiative strengthening inclusive climate governance through local evidence, participation and dialogue.",
  status: "pilot",
  overview: [],
  whyItMatters: [],
  locations: [{ label: "Sabon Gari LGA, Kaduna State", country: "Nigeria" }],
  methodologySteps: [
    "Household surveys",
    "Focus group discussions",
    "Key informant interviews",
    "Community consultation",
    "Stakeholder dialogue",
    "Validation workshops",
    "Evidence-based advocacy",
  ].map((title) => ({
    title,
    description: "A participatory method within the CPI4CG pilot.",
  })),
  milestones: [],
  expectedOutcomes: [
    {
      title: "More inclusive climate governance",
      description:
        "Community evidence informs dialogue and climate-governance priorities.",
      status: "expected",
    },
  ],
  frameworkAlignments: [],
  primaryAction: {
    label: "Partner on community-led climate governance",
    href: "/contact?type=partnership",
    style: "primary",
  },
  impactMetrics: [],
  relatedInsights: [],
};
fallbackProgramme.relatedInsights = [fallbackInsight];
export const fallbackHome: PublicHome = {
  headline: "Locally Led. Youth Driven. Climate Resilient.",
  subheadline:
    "Building climate resilience across Africa through participatory development, inclusive leadership, and community-driven sustainability solutions.",
  primaryAction: {
    label: "Partner With Us",
    href: "/contact?type=partnership",
    style: "primary",
  },
  secondaryAction: {
    label: "Support Community Climate Action",
    href: "/get-involved",
    style: "warm",
  },
  featuredProgrammes: [
    fallbackProgramme,
    {
      _id: "programme-ayede",
      title: "AYEDE 4 Climate Action Fellowship",
      acronym: "AYEDE",
      slug: "ayede",
      summary:
        "Building the next generation of African climate leaders through learning, mentorship, peer exchange and practical project development.",
      status: "active",
    },
  ],
  featuredInsight: undefined,
  impactMetrics: [],
};
