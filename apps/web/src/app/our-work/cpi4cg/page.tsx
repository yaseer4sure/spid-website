import type { Metadata } from "next";
import {
  ClipboardList,
  GraduationCap,
  Handshake,
  Landmark,
  MapPin,
  MessagesSquare,
  Search,
  UsersRound,
} from "lucide-react";
import { EditorialImage } from "@/components/content/EditorialImage";
import { PublicationFeature } from "@/components/content/PublicationFeature";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { cpi4cgContent } from "@/content/approved";
import { getProgramme } from "@/sanity/content";

export const metadata: Metadata = {
  title: "CPI4CG",
  description:
    "Community-led participatory climate governance in Sabon Gari LGA, Kaduna State.",
  alternates: { canonical: "/our-work/cpi4cg" },
};

const methodIcons = [
  ClipboardList,
  UsersRound,
  Search,
  MessagesSquare,
  Landmark,
  GraduationCap,
  Handshake,
  Landmark,
] as const;

export default async function Cpi4cgPage() {
  const programme = await getProgramme("cpi4cg");
  const overview = programme?.overviewText?.length
    ? programme.overviewText
    : [...cpi4cgContent.overview];
  const why = programme?.whyItMattersText?.join(" ") || cpi4cgContent.why;
  const methods = programme?.methodologySteps?.length
    ? programme.methodologySteps.map(
        ({ title, description }) => [title, description] as const,
      )
    : cpi4cgContent.methods;
  const outcomes = programme?.expectedOutcomes?.length
    ? programme.expectedOutcomes.map(({ title }) => title)
    : [...cpi4cgContent.expectedOutcomes];
  const alignments = programme?.frameworkAlignments?.length
    ? programme.frameworkAlignments
        .map((item) =>
          typeof item === "object" && item && "title" in item
            ? String(item.title)
            : "",
        )
        .filter(Boolean)
    : [...cpi4cgContent.alignments];
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
        <div className="container page-hero-grid">
          <div>
            <p className="eyebrow">CPI4CG · Pilot initiative</p>
            <h1 className="h1">{programme?.title || cpi4cgContent.title}</h1>
            <p className="lead">
              {programme?.summary || cpi4cgContent.summary}
            </p>
          </div>
          <EditorialImage
            src="/images/programmes/cpi4cg/community-climate-dialogue.jpeg"
            alt="Two men discussing community issues during an outdoor interview"
            sizes="(min-width: 768px) 44vw, calc(100vw - 2rem)"
            className="page-hero-photo project-photo"
            priority
          />
        </div>
      </header>
      <section className="section">
        <div className="container grid-2">
          <div>
            <p className="eyebrow">Programme overview</p>
            <h2 className="h2">Community evidence in climate decisions</h2>
            {overview.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <aside className="facts" aria-label="Programme facts">
            <div>
              <ClipboardList className="fact-icon" aria-hidden="true" />
              <strong>Status</strong>
              <p>Pilot implementation</p>
            </div>
            <div>
              <MapPin className="fact-icon" aria-hidden="true" />
              <strong>Location</strong>
              <p>Sabon Gari LGA, Kaduna State</p>
            </div>
            <div>
              <UsersRound className="fact-icon" aria-hidden="true" />
              <strong>Focus</strong>
              <p>Participatory climate governance</p>
            </div>
          </aside>
        </div>
      </section>
      <section className="section mist">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Research &amp; Publications</p>
            <h2 className="h2">Evidence generated through CPI4CG</h2>
            <p>
              Voices from the Ward presents the programme’s completed
              quantitative household survey and geospatial assessment. Planned
              qualitative work is clearly identified in the report as a future
              evidence need.
            </p>
          </div>
          <PublicationFeature compact />
        </div>
      </section>
      <section className="section mist">
        <div className="container split-feature">
          <div className="stacked-content">
            <p className="eyebrow">Why the project matters</p>
            <h2 className="h2">Decisions grounded in lived experience</h2>
            <p>{why}</p>
            <EditorialImage
              src="/images/programmes/cpi4cg/participatory-research-session.jpeg"
              alt="Women participating in a small indoor community discussion"
              sizes="(min-width: 768px) 42vw, calc(100vw - 2rem)"
              className="section-photo compact-photo portrait-focus"
            />
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
            {methods.map(([title, description], index) => {
              const Icon = methodIcons[index];
              return (
                <article className="method" key={title}>
                  <Icon className="method-icon" aria-hidden="true" />
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
        <div className="container split-feature">
          <div>
            <p className="eyebrow">Stakeholder collaboration</p>
            <h2 className="h2">Local relationships and technical support</h2>
            <p>
              The pilot works with local government, district heads, community
              leaders and volunteers. Technical collaboration with Nest Africa
              AI Innovation Lab supports digital tools and data analysis.
            </p>
            <EditorialImage
              src="/images/programmes/cpi4cg/local-stakeholder-dialogue.jpeg"
              alt="Community stakeholders seated around a table during a group discussion"
              sizes="(min-width: 768px) 42vw, calc(100vw - 2rem)"
              className="section-photo compact-photo"
            />
          </div>
          <div>
            <p className="eyebrow">Expected outcomes</p>
            <h2 className="h2">What the programme aims to enable</h2>
            <ul className="check-list">
              {outcomes.map((outcome) => (
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
            {alignments.map((alignment) => (
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
          <ButtonLink
            href={programme?.primaryAction?.href || "/contact?type=partnership"}
            variant="warm"
          >
            {programme?.primaryAction?.label || "Start a partnership enquiry"}
          </ButtonLink>
        </div>
      </section>
    </>
  );
}
