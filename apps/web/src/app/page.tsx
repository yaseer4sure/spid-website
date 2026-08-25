import {
  GraduationCap,
  Handshake,
  Landmark,
  Leaf,
  Lightbulb,
  Scale,
  ShieldCheck,
  Sprout,
  Users,
} from "lucide-react";
import { ProgrammeCard } from "@/components/content/Cards";
import { EditorialImage } from "@/components/content/EditorialImage";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { homepageContent } from "@/content/approved";
import { getHome } from "@/sanity/content";

const pillarIcons = [GraduationCap, Lightbulb, Landmark, Sprout] as const;
const valueIcons = [
  Users,
  Scale,
  Leaf,
  ShieldCheck,
  Lightbulb,
  Handshake,
] as const;

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
          <EditorialImage
            src="/images/home/african-community-climate-leadership.webp"
            alt="A community gathering outdoors with a speaker addressing the group"
            sizes="(min-width: 1024px) 42vw, calc(100vw - 2rem)"
            className="hero-photo"
            priority
          />
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="split-feature">
            <div className="section-heading">
              <p className="eyebrow">Who we are</p>
              <h2 className="h2">Locally rooted climate action</h2>
              <p className="lead">{homepageContent.valueProposition}</p>
              <div className="hero-actions">
                <ButtonLink href="/our-work" variant="secondary">
                  Explore Our Work
                </ButtonLink>
              </div>
            </div>
            <EditorialImage
              src="/images/home/community-technology-collaboration.webp"
              alt="Community members collaborating around a laptop in Rwanda"
              sizes="(min-width: 768px) 45vw, calc(100vw - 2rem)"
              className="section-photo"
            />
          </div>
          <div className="pillars">
            {homepageContent.pillars.map(([title, description], index) => {
              const Icon = pillarIcons[index];
              return (
                <article className="pillar" key={title}>
                  <Icon className="semantic-icon" aria-hidden="true" />
                  <div>
                    <h3>{title}</h3>
                    <p>{description}</p>
                  </div>
                </article>
              );
            })}
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
            {homepageContent.values.map(([title, description], index) => {
              const Icon = valueIcons[index];
              return (
                <article className="card value-card" key={title}>
                  <Icon className="card-icon" aria-hidden="true" />
                  <h3>{title}</h3>
                  <p>{description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>
      <section className="section mist">
        <div className="container split-feature split-feature-reverse">
          <EditorialImage
            src="/images/home/climate-resilient-farming.webp"
            alt="Farmers working together in a green agricultural landscape"
            sizes="(min-width: 768px) 48vw, calc(100vw - 2rem)"
            className="section-photo"
          />
          <div>
            <p className="eyebrow">Impact and evidence</p>
            <h2 className="h2">Measuring What Matters</h2>
            <p className="lead">
              We measure impact not only by outputs—but by shifts in power,
              participation, and resilience.
            </p>
            <ButtonLink href="/impact" variant="secondary">
              Explore our approach to impact
            </ButtonLink>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container split-feature">
          <div>
            <p className="eyebrow">Insights</p>
            <h2 className="h2">Knowledge. Evidence. Community Voices.</h2>
            <p className="lead">
              Research, policy analysis and learning that connect local climate
              realities with wider decisions.
            </p>
            <ButtonLink href="/insights" variant="secondary">
              Read Our Latest Insights
            </ButtonLink>
          </div>
          <EditorialImage
            src="/images/insights/research-findings.webp"
            alt="Students discussing research together in a library"
            sizes="(min-width: 768px) 45vw, calc(100vw - 2rem)"
            className="section-photo"
          />
        </div>
      </section>
      <section className="section">
        <div className="container cta-media-panel">
          <EditorialImage
            src="/images/home/collective-community-action.webp"
            alt="A large community gathering representing collective action"
            sizes="(min-width: 768px) 42vw, calc(100vw - 2rem)"
            className="cta-photo"
          />
          <div className="deep cta-panel">
            <p className="eyebrow warm-eyebrow">Work with SPiD</p>
            <h2 className="h2">Build locally led climate action with us</h2>
            <p>
              Partner, fund a programme, sponsor youth leaders, contribute
              expertise or collaborate on research.
            </p>
            <ButtonLink href="/get-involved" variant="warm">
              Take Action Today
            </ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
