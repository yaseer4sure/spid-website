import type { Metadata } from "next";
import {
  Landmark,
  MessageCircle,
  Newspaper,
  Search,
  UsersRound,
} from "lucide-react";
import { EditorialImage } from "@/components/content/EditorialImage";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { PublicationFeature } from "@/components/content/PublicationFeature";
import { insightThemes } from "@/content/approved";
import { insightVisuals } from "@/content/visuals";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Knowledge, evidence and community voices from SPiD's climate work.",
  alternates: { canonical: "/insights" },
};

const insightIcons = [Landmark, MessageCircle, Search, UsersRound, Newspaper];

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
            {insightThemes.map((theme, index) => {
              const Icon = insightIcons[index];
              const visual = insightVisuals[index];
              return (
                <article className="card insight-theme-card" key={theme}>
                  <EditorialImage
                    src={visual.src}
                    alt={visual.alt}
                    sizes="(min-width: 768px) 25rem, calc(100vw - 2rem)"
                    className="insight-card-image"
                    priority={index === 0}
                  />
                  <div className="insight-card-content">
                    <Icon className="card-icon" aria-hidden="true" />
                    <h3>{theme}</h3>
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
            <p className="eyebrow">Featured publication</p>
            <h2 className="h2">Research grounded in community evidence</h2>
          </div>
          <PublicationFeature />
        </div>
      </section>
      <section className="section">
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
