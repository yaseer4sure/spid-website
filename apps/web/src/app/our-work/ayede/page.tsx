import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { ayedeContent } from "@/content/approved";

export const metadata: Metadata = {
  title: "AYEDE 4 Climate Action",
  description:
    "The African Youth Expert Development for Climate Action Fellowship builds the next generation of African climate leaders.",
  alternates: { canonical: "/our-work/ayede" },
};

export default function AyedePage() {
  return (
    <>
      <div className="container">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Our Work", href: "/our-work" },
            { label: "AYEDE 4 Climate Action" },
          ]}
        />
      </div>
      <header className="page-hero">
        <div className="container">
          <p className="eyebrow">AYEDE 4 Climate Action</p>
          <h1 className="h1">{ayedeContent.title}</h1>
          <p className="lead">{ayedeContent.supportingLine}</p>
        </div>
      </header>
      <section className="section">
        <div className="container grid-2">
          <div>
            <p className="eyebrow">Programme overview</p>
            <h2 className="h2">African youth leadership for climate action</h2>
          </div>
          <div className="prose">
            {ayedeContent.overview.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>
      <section className="section mist">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Fellowship approach</p>
            <h2 className="h2">
              Learning, mentorship and practical development
            </h2>
          </div>
          <div className="grid-3">
            {ayedeContent.approach.map((item) => (
              <article className="card" key={item}>
                <h3>{item}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Programme reach</p>
            <h2 className="h2">AYEDE 4 Climate Action in numbers</h2>
          </div>
          <div className="metric-grid">
            {ayedeContent.metrics.map(([value, label]) => (
              <article className="card metric-card" key={label}>
                <strong>{value}</strong>
                <p>{label}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container deep cta-panel">
          <h2 className="h2">
            Invest in the next generation of African climate leaders
          </h2>
          <p>
            Partner with SPiD to strengthen youth climate leadership, learning
            and networks.
          </p>
          <ButtonLink href="/contact?type=partnership" variant="warm">
            Partner With Us
          </ButtonLink>
        </div>
      </section>
    </>
  );
}
