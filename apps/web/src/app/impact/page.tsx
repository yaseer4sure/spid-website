import type { Metadata } from "next";
import { Landmark, ShieldCheck, Sprout, UsersRound } from "lucide-react";
import { Impact3DChart } from "@/components/content/Impact3DChart";
import {
  impactMetricsStatus,
  impactMetricsVerification,
  shouldRevealImpactValues,
} from "@/config/impactMetrics";
import { impactAreas } from "@/content/approved";

export const metadata: Metadata = {
  title: "Impact",
  description:
    "How SPiD understands and measures shifts in participation, power and climate resilience.",
  alternates: { canonical: "/impact" },
};

const impactIcons = [UsersRound, ShieldCheck, Landmark, Sprout] as const;

export default function ImpactPage() {
  const revealIllustrativeValues = shouldRevealImpactValues({
    status: impactMetricsStatus,
    verification: impactMetricsVerification,
    nodeEnv: process.env.NODE_ENV,
    vercelEnv: process.env.VERCEL_ENV,
  });

  return (
    <>
      <header className="page-hero">
        <div className="container page-hero-grid">
          <div>
            <p className="eyebrow">Impact</p>
            <h1 className="h1">Measuring What Matters</h1>
            <p className="lead">
              We measure impact not only by outputs—but by shifts in power,
              participation, and resilience.
            </p>
          </div>
          <Impact3DChart
            status={impactMetricsStatus}
            revealValues={revealIllustrativeValues}
          />
        </div>
      </header>
      <section className="section">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Impact Areas</p>
            <h2 className="h2">The change SPiD works towards</h2>
          </div>
          <div className="grid-2">
            {impactAreas.map((area, index) => {
              const Icon = impactIcons[index];
              return (
                <article className="card value-card" key={area}>
                  <Icon className="card-icon" aria-hidden="true" />
                  <h3>{area}</h3>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
