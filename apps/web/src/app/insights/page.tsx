import type { Metadata } from "next";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { insightThemes } from "@/content/approved";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Knowledge, evidence and community voices from SPiD's climate work.",
  alternates: { canonical: "/insights" },
};

export default function InsightsPage() {
  return (
    <>
      <header className="page-hero">
        <div className="container">
          <p className="eyebrow">Insights</p>
          <h1 className="h1">Knowledge. Evidence. Community Voices.</h1>
          <p className="lead">
            Research, policy analysis and learning that connect local climate
            realities with wider decisions.
          </p>
        </div>
      </header>
      <section className="section">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">What we publish</p>
            <h2 className="h2">Evidence for action and learning</h2>
          </div>
          <div className="grid-3">
            {insightThemes.map((theme) => (
              <article className="card value-card" key={theme}>
                <h3>{theme}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section mist">
        <div className="container cta-panel">
          <h2 className="h2">Read Our Latest Insights</h2>
          <p>
            Approved publications will appear here as SPiD&apos;s evidence and
            learning are released.
          </p>
          <ButtonLink href="/our-work" variant="secondary">
            Explore Our Work
          </ButtonLink>
        </div>
      </section>
    </>
  );
}
