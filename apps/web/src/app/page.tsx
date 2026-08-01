import { ButtonLink } from "@/components/ui/ButtonLink";
import { InsightCard, ProgrammeCard } from "@/components/content/Cards";
import { EmptyState } from "@/components/feedback/States";
import { getHome } from "@/sanity/content";

const pillars = [
  [
    "Build Climate Leadership",
    "Equip young people, grassroots leaders, communities and institutions with climate-governance capability.",
  ],
  [
    "Co-Create Local Solutions",
    "Bring lived experience, local knowledge and practical evidence into climate-resilient interventions.",
  ],
  [
    "Influence Policy and Governance",
    "Translate grassroots evidence into dialogue, policy engagement and accountable climate decisions.",
  ],
  [
    "Strengthen Green Livelihoods",
    "Support inclusive pathways connected to climate entrepreneurship, resilience and Africa’s green economy.",
  ],
];

export default async function HomePage() {
  const home = await getHome();
  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">
              Sustainable Participatory Development and Climate Resilience
              Initiative
            </p>
            <h1 className="display">{home.headline}</h1>
            <p className="lead">{home.subheadline}</p>
            <div className="hero-actions">
              <ButtonLink
                href={home.primaryAction?.href || "/contact?type=partnership"}
              >
                {home.primaryAction?.label || "Partner With Us"}
              </ButtonLink>
              <ButtonLink
                href={home.secondaryAction?.href || "/get-involved"}
                variant="warm"
              >
                {home.secondaryAction?.label ||
                  "Support Community Climate Action"}
              </ButtonLink>
            </div>
          </div>
          <div
            className="hero-visual"
            role="img"
            aria-label="Temporary abstract programme-media placeholder; not documentary evidence"
          >
            <p className="eyebrow" style={{ color: "var(--color-sun-400)" }}>
              Temporary media area
            </p>
            <p>
              Approved SPiD photography will replace this visibly marked
              development treatment before production publication.
            </p>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">What SPiD does</p>
            <h2 className="h2">
              Community knowledge, leadership and evidence in climate action
            </h2>
            <p className="lead">
              SPiD works so communities—especially young people, women and
              underrepresented groups—participate as leaders and co-creators.
            </p>
          </div>
          <div className="pillars">
            {pillars.map(([title, text]) => (
              <article className="pillar" key={title}>
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section mist">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Featured programmes</p>
            <h2 className="h2">From local evidence to climate leadership</h2>
          </div>
          <div className="grid-2">
            {home.featuredProgrammes?.map((programme) => (
              <ProgrammeCard key={programme._id} programme={programme} />
            ))}
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Impact evidence</p>
            <h2 className="h2">Evidence before decoration</h2>
          </div>
          {home.impactMetrics?.length ? (
            <div className="grid-3">
              {home.impactMetrics.map((metric) => (
                <article className="card" key={metric._id}>
                  <strong className="h2">
                    {metric.displayValueOverride || metric.numericValue}
                  </strong>
                  <h3>{metric.label}</h3>
                  <p>{metric.publicContext}</p>
                </article>
              ))}
            </div>
          ) : (
            <EmptyState title="Verified public metrics are being prepared">
              <p>
                Candidate figures remain private until their reporting periods,
                geography, evidence sources and verification records are
                approved.
              </p>
            </EmptyState>
          )}
        </div>
      </section>
      {home.featuredInsight && (
        <section className="section sand">
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow">Featured insight</p>
              <h2 className="h2">Evidence and learning</h2>
            </div>
            <InsightCard insight={home.featuredInsight} />
          </div>
        </section>
      )}
      <section className="section">
        <div className="container deep cta-panel">
          <p className="eyebrow" style={{ color: "var(--color-sun-400)" }}>
            Work with SPiD
          </p>
          <h2 className="h2">Build locally led climate action with us</h2>
          <p>
            Explore partnership, programme funding, research collaboration and
            volunteer-expertise pathways.
          </p>
          <ButtonLink href="/get-involved" variant="warm">
            Explore ways to get involved
          </ButtonLink>
        </div>
      </section>
    </>
  );
}
