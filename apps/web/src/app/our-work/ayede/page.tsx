import type { Metadata } from "next";
import {
  ClipboardCheck,
  FileText,
  GraduationCap,
  Map,
  Network,
  RadioTower,
  UsersRound,
  UserRoundCheck,
  Video,
} from "lucide-react";
import { EditorialImage } from "@/components/content/EditorialImage";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { ayedeContent } from "@/content/approved";

export const metadata: Metadata = {
  title: "AYEDE 4 Climate Action",
  description:
    "The African Youth Expert Development for Climate Action Fellowship builds the next generation of African climate leaders.",
  alternates: { canonical: "/our-work/ayede" },
};

const approachIcons = [
  Video,
  GraduationCap,
  UserRoundCheck,
  UsersRound,
  ClipboardCheck,
  Network,
] as const;
const metricIcons = [RadioTower, GraduationCap, Map, FileText] as const;

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
        <div className="container page-hero-grid">
          <div>
            <p className="eyebrow">AYEDE 4 Climate Action</p>
            <h1 className="h1">{ayedeContent.title}</h1>
            <p className="lead">{ayedeContent.supportingLine}</p>
          </div>
          <EditorialImage
            src="/images/programmes/ayede/youth-climate-learning.jpeg"
            alt="AYEDE 4 Climate Action fellows onboarding presentation"
            sizes="(min-width: 768px) 44vw, calc(100vw - 2rem)"
            className="page-hero-photo project-photo ayede-hero-photo"
            priority
          />
        </div>
      </header>
      <section className="section">
        <div className="container split-feature">
          <div>
            <p className="eyebrow">Programme overview</p>
            <h2 className="h2">African youth leadership for climate action</h2>
            <EditorialImage
              src="/images/programmes/ayede/collaborative-project-learning.jpeg"
              alt="Online AYEDE programme walkthrough showing learning, mentorship and project components"
              sizes="(min-width: 768px) 42vw, calc(100vw - 2rem)"
              className="section-photo compact-photo"
            />
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
            {ayedeContent.approach.map((item, index) => {
              const Icon = approachIcons[index];
              return (
                <article className="card" key={item}>
                  <Icon className="card-icon" aria-hidden="true" />
                  <h3>{item}</h3>
                </article>
              );
            })}
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
            {ayedeContent.metrics.map(([value, label], index) => {
              const Icon = metricIcons[index];
              return (
                <article className="card metric-card" key={label}>
                  <Icon className="metric-icon" aria-hidden="true" />
                  <strong>{value}</strong>
                  <p>{label}</p>
                </article>
              );
            })}
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
