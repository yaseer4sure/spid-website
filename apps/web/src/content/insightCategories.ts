import { insightThemes } from "./approved";

export const insightCategories = [
  {
    label: insightThemes[0],
    slug: "climate-policy-analysis",
    description:
      "Analysis connecting community climate priorities with policy and governance processes.",
  },
  {
    label: insightThemes[1],
    slug: "community-stories",
    description:
      "Approved stories and perspectives grounded in community experience.",
  },
  {
    label: insightThemes[2],
    slug: "research-reports",
    heading: "Research Reports",
    description:
      "Research findings and evidence produced through SPiD's programmes.",
  },
  {
    label: insightThemes[3],
    slug: "youth-perspectives",
    description:
      "Approved perspectives from young climate leaders and practitioners.",
  },
  {
    label: insightThemes[4],
    slug: "programme-updates",
    description: "Verified learning and updates from SPiD programmes.",
  },
] as const;

export function getInsightCategory(slug: string) {
  return insightCategories.find((category) => category.slug === slug);
}
