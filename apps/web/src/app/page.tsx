import { ProgrammeCard } from "@/components/content/Cards";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { homepageContent } from "@/content/approved";
import { getHome } from "@/sanity/content";

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
            <h1 className="display">{homepageContent.headline}</h1>
            <p className="lead">{homepageContent.subheadline}</p>
            <div className="hero-actions">
              <ButtonLink href="/contact?type=partnership">
                Partner With Us
              </ButtonLink>
              <ButtonLink href="/get-involved" variant="warm">
                Support Community Climate Action
              </ButtonLink>
            </div>
          </div>
          <div className="hero-visual" aria-hidden="true">
            <div className="hero-mark">
              <strong>Climate action shaped with communities.</strong>
              <span>
                Evidence-led. Inclusive. Rooted in African leadership.
              </span>
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Who we are</p>
            <h2 className="h2">Locally rooted climate action</h2>
            <p className="lead">{homepageContent.valueProposition}</p>
          </div>
          <div className="pillars">
            {homepageContent.pillars.map(([title, description]) => (
              <article className="pillar" key={title}>
                <div>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="hero-actions">
            <ButtonLink href="/our-work" variant="secondary">
              Explore Our Work
            </ButtonLink>
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
            {home.featuredProgrammes.map((programme) => (
              <ProgrammeCard key={programme._id} programme={programme} />
            ))}
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Our values</p>
            <h2 className="h2">Principles that shape how we work</h2>
          </div>
          <div className="values-grid">
            {homepageContent.values.map(([title, description]) => (
              <article className="card value-card" key={title}>
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container deep cta-panel">
          <p className="eyebrow" style={{ color: "var(--color-warm-yellow)" }}>
            Work with SPiD
          </p>
          <h2 className="h2">Build locally led climate action with us</h2>
          <p>
            Partner, fund a programme, sponsor youth leaders, contribute
            expertise or collaborate on research.
          </p>
          <ButtonLink href="/get-involved" variant="warm">
            Take Action Today
          </ButtonLink>
        </div>
      </section>
    </>
  );
}
