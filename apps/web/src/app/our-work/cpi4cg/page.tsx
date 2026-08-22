import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { cpi4cgContent } from "@/content/approved";

export const metadata: Metadata = {
  title: "CPI4CG",
  description:
    "Community-led participatory climate governance in Sabon Gari LGA, Kaduna State.",
  alternates: { canonical: "/our-work/cpi4cg" },
};

export default function Cpi4cgPage() {
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
          <p className="eyebrow">CPI4CG · Pilot initiative</p>
          <h1 className="h1">{cpi4cgContent.title}</h1>
          <p className="lead">{cpi4cgContent.summary}</p>
        </div>
      </header>
      <section className="section">
        <div className="container grid-2">
          <div>
            <p className="eyebrow">Programme overview</p>
            <h2 className="h2">Community evidence in climate decisions</h2>
            {cpi4cgContent.overview.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <aside className="facts" aria-label="Programme facts">
            <div>
              <strong>Status</strong>
              <p>Pilot implementation</p>
            </div>
            <div>
              <strong>Location</strong>
              <p>Sabon Gari LGA, Kaduna State</p>
            </div>
            <div>
              <strong>Focus</strong>
              <p>Participatory climate governance</p>
            </div>
          </aside>
        </div>
      </section>
      <section className="section mist">
        <div className="container grid-2">
          <div>
            <p className="eyebrow">Why the project matters</p>
            <h2 className="h2">Decisions grounded in lived experience</h2>
            <p>{cpi4cgContent.why}</p>
          </div>
          <div>
            <p className="eyebrow">Pilot milestones</p>
            <div className="grid-2">
              {cpi4cgContent.milestones.map(([value, label]) => (
                <article className="card metric-card" key={label}>
                  <strong>{value}</strong>
                  <p>{label}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Community-led approach</p>
            <h2 className="h2">A participatory evidence process</h2>
          </div>
          <div className="method-list">
            {cpi4cgContent.methods.map(([title, description]) => (
              <article className="method" key={title}>
                <div>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section mist">
        <div className="container grid-2">
          <div>
            <p className="eyebrow">Stakeholder collaboration</p>
            <h2 className="h2">Local relationships and technical support</h2>
            <p>
              The pilot works with local government, district heads, community
              leaders and volunteers. Technical collaboration with Nest Africa
              AI Innovation Lab supports digital tools and data analysis.
            </p>
          </div>
          <div>
            <p className="eyebrow">Expected outcomes</p>
            <h2 className="h2">What the programme aims to enable</h2>
            <ul className="check-list">
              {cpi4cgContent.expectedOutcomes.map((outcome) => (
                <li key={outcome}>{outcome}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Framework alignment</p>
            <h2 className="h2">Connected to national and global priorities</h2>
          </div>
          <div className="framework-grid">
            {cpi4cgContent.alignments.map((alignment) => (
              <div className="card framework-card" key={alignment}>
                <strong>{alignment}</strong>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container deep cta-panel">
          <p className="eyebrow" style={{ color: "var(--color-warm-yellow)" }}>
            Get Involved
          </p>
          <h2 className="h2">Partner on community-led climate governance</h2>
          <p>
            Connect with SPiD about technical collaboration, research, programme
            support or responsible scale.
          </p>
          <ButtonLink href="/contact?type=partnership" variant="warm">
            Start a partnership enquiry
          </ButtonLink>
        </div>
      </section>
    </>
  );
}
