import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import {
  impactMetrics,
  impactMetricsStatus,
  impactMetricsVerification,
  shouldRevealImpactValues,
} from "@/config/impactMetrics";
import { Impact3DChart } from "./Impact3DChart";

afterEach(cleanup);

describe("Impact3DChart", () => {
  it("renders all configured illustrative indicators and values", () => {
    render(<Impact3DChart status={impactMetricsStatus} revealValues />);

    for (const metric of Object.values(impactMetrics)) {
      expect(screen.getByText(metric.label)).toBeInTheDocument();
    }
    expect(screen.getByText("25")).toBeInTheDocument();
    expect(screen.getByText("5,000+")).toBeInTheDocument();
    expect(screen.getByText("8")).toBeInTheDocument();
    expect(screen.getByText("4")).toBeInTheDocument();
    expect(
      screen.getByText("Illustrative figures — pending verification"),
    ).toBeInTheDocument();
  });

  it("reflects a value changed in the supplied central configuration", () => {
    render(
      <Impact3DChart
        status="illustrative"
        revealValues
        metrics={{
          ...impactMetrics,
          communitiesReached: {
            ...impactMetrics.communitiesReached,
            value: 31,
          },
        }}
      />,
    );

    expect(screen.getByText("31")).toBeInTheDocument();
    expect(screen.queryByText("25")).not.toBeInTheDocument();
  });

  it("uses a stable pending state for missing values", () => {
    render(
      <Impact3DChart
        status="illustrative"
        revealValues
        metrics={{
          communitiesReached: {
            ...impactMetrics.communitiesReached,
            value: null,
          },
        }}
      />,
    );

    expect(screen.getByText("Communities Reached")).toBeInTheDocument();
    expect(screen.getByText("—")).toBeInTheDocument();
    expect(screen.getByText("Value pending")).toBeInTheDocument();
  });

  it("withholds illustrative numbers from production rendering", () => {
    const revealValues = shouldRevealImpactValues({
      status: impactMetricsStatus,
      verification: impactMetricsVerification,
      nodeEnv: "production",
      vercelEnv: "production",
    });

    expect(revealValues).toBe(false);
    render(
      <Impact3DChart
        status={impactMetricsStatus}
        revealValues={revealValues}
      />,
    );

    expect(screen.queryByText("5,000+")).not.toBeInTheDocument();
    expect(
      screen.getByText("Impact figures withheld pending verification"),
    ).toBeInTheDocument();
  });

  it("requires complete evidence metadata before verified values display", () => {
    expect(
      shouldRevealImpactValues({
        status: "verified",
        verification: impactMetricsVerification,
        nodeEnv: "production",
        vercelEnv: "production",
      }),
    ).toBe(false);

    const revealVerifiedValues = shouldRevealImpactValues({
      status: "verified",
      verification: {
        reportingPeriod: "2026",
        geography: "Nigeria",
        evidenceSource: "Approved monitoring report",
        evidenceOwner: "SPiD M&E Manager",
        approvedBy: "Authorised SPiD reviewer",
        approvedAt: "2026-11-04",
      },
      nodeEnv: "production",
      vercelEnv: "production",
    });

    expect(revealVerifiedValues).toBe(true);
    render(
      <Impact3DChart status="verified" revealValues={revealVerifiedValues} />,
    );
    expect(screen.queryByText(/pending verification/i)).not.toBeInTheDocument();
  });
});
