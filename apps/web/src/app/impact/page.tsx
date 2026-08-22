import type { Metadata } from "next";
import { impactAreas } from "@/content/approved";

export const metadata: Metadata = {
  title: "Impact",
  description:
    "How SPiD understands and measures shifts in participation, power and climate resilience.",
  alternates: { canonical: "/impact" },
};

export default function ImpactPage() {
  return (
    <>
      <header className="page-hero">
        <div className="container">
          <p className="eyebrow">Impact</p>
          <h1 className="h1">Measuring What Matters</h1>
          <p className="lead">
            We measure impact not only by outputs—but by shifts in power,
            participation, and resilience.
          </p>
        </div>
      </header>
      <section className="section">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Impact Areas</p>
            <h2 className="h2">The change SPiD works towards</h2>
          </div>
          <div className="grid-2">
            {impactAreas.map((area) => (
              <article className="card value-card" key={area}>
                <h3>{area}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
