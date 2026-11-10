import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CalendarDays,
  Download,
  MapPin,
  UsersRound,
} from "lucide-react";
import { PublicationCover } from "@/components/content/PublicationCover";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { ButtonLink } from "@/components/ui/ButtonLink";
import {
  voicesFromTheWard,
  voicesFromTheWardIsApproved,
} from "@/content/research/voicesFromTheWard";

export const metadata: Metadata = {
  title: `${voicesFromTheWard.title} | Research Report`,
  description: voicesFromTheWard.summary,
  alternates: { canonical: voicesFromTheWard.landingPath },
  robots: voicesFromTheWardIsApproved
    ? undefined
    : { index: false, follow: false },
  openGraph: {
    title: voicesFromTheWard.title,
    description: voicesFromTheWard.summary,
    type: "article",
    publishedTime: voicesFromTheWard.publicationDate,
    images: [
      {
        url: voicesFromTheWard.posterPath,
        alt: "Voices from the Ward research summary poster",
      },
    ],
  },
};

export default function VoicesFromTheWardPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Report",
    name: voicesFromTheWard.title,
    headline: voicesFromTheWard.subtitle,
    datePublished: voicesFromTheWard.publicationDate,
    author: {
      "@type": "Organization",
      name: voicesFromTheWard.organisationAuthor,
    },
    spatialCoverage: voicesFromTheWard.location,
    isPartOf: { "@type": "Project", name: voicesFromTheWard.programme },
  };
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />
      <div className="container">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Insights", href: "/insights" },
            { label: voicesFromTheWard.title },
          ]}
        />
      </div>
      <header className="page-hero">
        <div className="container publication-hero">
          <div>
            <p className="eyebrow">{voicesFromTheWard.category}</p>
            <h1 className="h1">{voicesFromTheWard.title}</h1>
            <p className="lead">{voicesFromTheWard.subtitle}</p>
            <p>{voicesFromTheWard.description}</p>
            <p className="publication-review-note">
              Publication approval pending · stakeholder review copy
            </p>
            <div className="hero-actions">
              <ButtonLink href={voicesFromTheWard.readerPath}>
                Read Full Report
              </ButtonLink>
              <a
                className="button button-secondary"
                href={voicesFromTheWard.pdfPath}
                download
              >
                <Download aria-hidden="true" /> Download PDF
              </a>
            </div>
          </div>
          <PublicationCover />
        </div>
      </header>
      <section className="section">
        <div className="container publication-facts">
          <div>
            <CalendarDays aria-hidden="true" />
            <strong>Published</strong>
            <span>{voicesFromTheWard.publicationDateLabel}</span>
          </div>
          <div>
            <MapPin aria-hidden="true" />
            <strong>Study area</strong>
            <span>{voicesFromTheWard.location}</span>
          </div>
          <div>
            <UsersRound aria-hidden="true" />
            <strong>Evidence base</strong>
            <span>365 valid household interviews</span>
          </div>
        </div>
      </section>
      <section className="section mist">
        <div className="container grid-2">
          <div>
            <p className="eyebrow">Executive summary</p>
            <h2 className="h2">Community evidence for climate governance</h2>
            {voicesFromTheWard.executiveSummary.map((x) => (
              <p key={x}>{x}</p>
            ))}
          </div>
          <div>
            <p className="eyebrow">Research methodology</p>
            <h2 className="h2">Quantitative and geospatial assessment</h2>
            <ul className="check-list">
              {voicesFromTheWard.methodology.map((x) => (
                <li key={x}>{x}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Key findings</p>
            <h2 className="h2">Evidence from Sabon Gari LGA</h2>
          </div>
          <div className="research-findings">
            {voicesFromTheWard.findings.map((x) => (
              <article className="card" key={x.label}>
                <strong>{x.value}</strong>
                <h3>{x.label}</h3>
                <p>{x.source}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section mist">
        <div className="container grid-2">
          <div>
            <p className="eyebrow">Policy recommendations</p>
            <h2 className="h2">From evidence to locally led action</h2>
            <ul className="check-list">
              {voicesFromTheWard.recommendations.map((x) => (
                <li key={x}>{x}</li>
              ))}
            </ul>
          </div>
          <div className="card">
            <p className="eyebrow">Full-report access</p>
            <h2>Read the complete publication</h2>
            <p>
              The full reader preserves the report’s charts, tables, field
              photographs, references, annexes, sortable tables and print
              presentation.
            </p>
            <Link className="text-link" href={voicesFromTheWard.readerPath}>
              Open full report <ArrowRight aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container deep cta-panel">
          <p className="eyebrow warm-eyebrow">Related programme</p>
          <h2 className="h2">CPI4CG</h2>
          <p>
            This research was produced through SPiD’s Community-led
            Participatory Initiative for Climate Governance.
          </p>
          <ButtonLink href="/our-work/cpi4cg" variant="warm">
            Explore CPI4CG
          </ButtonLink>
        </div>
      </section>
    </>
  );
}
