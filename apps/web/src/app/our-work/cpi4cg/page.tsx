import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { EmptyState } from "@/components/feedback/States";
import { InsightCard } from "@/components/content/Cards";
import { getProgramme } from "@/sanity/content";

export const metadata: Metadata = {
  title: "CPI4CG",
  description:
    "Community-led participatory climate governance in Sabon Gari LGA, Kaduna State.",
  alternates: { canonical: "/our-work/cpi4cg" },
};

export default async function Cpi4cgPage() {
  const programme = await getProgramme("cpi4cg");
  if (!programme) notFound();
  return (
    <>
      <div className="container">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Our Work", href: "/our-work" },
            { label: "CPI4CG" },
          ]}
        />
      </div>
      <header className="page-hero">
        <div className="container">
          <p className="eyebrow">{programme.acronym} · Pilot initiative</p>
          <h1 className="h1">{programme.title}</h1>
          <p className="lead">{programme.summary}</p>
        </div>
      </header>
      <section className="section">
        <div className="container grid-2">
          <div>
            <p className="eyebrow">Programme overview</p>
            <h2 className="h2">Local knowledge in climate decisions</h2>
            <p>
              CPI4CG centres community knowledge and participation in local
              climate governance through participatory research, consultation,
              validation and policy engagement.
            </p>
            <p>
              The pilot is based in Sabon Gari Local Government Area, Kaduna
              State, Nigeria. Expected outcomes are presented as
              expectations—not completed impact.
            </p>
          </div>
          <aside className="facts" aria-label="Programme facts">
            <div>
              <strong>Status</strong>
              <p>Pilot</p>
            </div>
            <div>
              <strong>Location</strong>
              <p>{programme.locations?.[0]?.label}</p>
            </div>
            <div>
              <strong>Focus</strong>
              <p>Participatory climate governance</p>
            </div>
          </aside>
        </div>
      </section>
      <section className="section mist">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Methodology</p>
            <h2 className="h2">A participatory evidence process</h2>
          </div>
          <div className="method-list">
            {programme.methodologySteps?.map((step) => (
              <article className="method" key={step.title}>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Evidence</p>
            <h2 className="h2">Only verified figures appear publicly</h2>
          </div>
          {programme.impactMetrics?.length ? (
            <div className="grid-3">
              {programme.impactMetrics.map((metric) => (
                <article className="card" key={metric._id}>
                  <strong>
                    {metric.displayValueOverride || metric.numericValue}
                  </strong>
                  <p>{metric.label}</p>
                  <small>{metric.publicContext}</small>
                </article>
              ))}
            </div>
          ) : (
            <EmptyState title="No verified programme metrics are public yet">
              <p>
                Candidate figures described in the project documents remain
                excluded until evidence governance is complete.
              </p>
            </EmptyState>
          )}
        </div>
      </section>
      <section className="section sand">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Related insight</p>
            <h2 className="h2">Programme learning and evidence</h2>
          </div>
          {programme.relatedInsights?.length ? (
            programme.relatedInsights.map((item) => (
              <InsightCard key={item._id} insight={item} />
            ))
          ) : (
            <p>Related editorial content is being prepared.</p>
          )}
        </div>
      </section>
      <section className="section">
        <div className="container deep cta-panel">
          <h2 className="h2">Partner on community-led climate governance</h2>
          <p>
            Connect with SPiD about technical collaboration, research, programme
            support or responsible scale.
          </p>
          <ButtonLink href="/contact?type=partnership" variant="warm">
            Start a partnership enquiry
          </ButtonLink>{" "}
          <Link href="/get-involved">See all engagement pathways</Link>
        </div>
      </section>
    </>
  );
}
