export type ImpactMetricStatus = "illustrative" | "verified";

export type ImpactMetricConfig = {
  label: string;
  value: number | null;
  suffix: string;
};

export type ImpactMetricVerification = {
  reportingPeriod: string | null;
  geography: string | null;
  evidenceSource: string | null;
  evidenceOwner: string | null;
  approvedBy: string | null;
  approvedAt: string | null;
};

export const impactMetrics = {
  communitiesReached: {
    label: "Communities Reached",
    value: 25,
    suffix: "",
  },
  peopleImpacted: {
    label: "People Impacted",
    value: 5000,
    suffix: "+",
  },
  projectsImplemented: {
    label: "Projects Implemented",
    value: 8,
    suffix: "",
  },
  pipelineProjects: {
    label: "Pipeline Projects",
    value: 4,
    suffix: "",
  },
} satisfies Record<string, ImpactMetricConfig>;

export const impactMetricsStatus: ImpactMetricStatus = "illustrative";

/**
 * Complete these fields from approved organisational evidence before changing
 * the status to verified. Matching governed Sanity records must also pass the
 * existing public impact-metric publication guard.
 */
export const impactMetricsVerification: ImpactMetricVerification = {
  reportingPeriod: null,
  geography: null,
  evidenceSource: null,
  evidenceOwner: null,
  approvedBy: null,
  approvedAt: null,
};

export function hasCompleteImpactVerification(
  verification: ImpactMetricVerification,
) {
  return Object.values(verification).every(
    (value) => typeof value === "string" && value.trim().length > 0,
  );
}

export function shouldRevealImpactValues({
  status,
  verification,
  nodeEnv,
  vercelEnv,
}: {
  status: ImpactMetricStatus;
  verification: ImpactMetricVerification;
  nodeEnv: string | undefined;
  vercelEnv: string | undefined;
}) {
  if (status === "verified") {
    return hasCompleteImpactVerification(verification);
  }

  return nodeEnv === "development" || vercelEnv === "preview";
}
