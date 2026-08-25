import type { Metadata } from "next";
import {
  CircleDollarSign,
  GraduationCap,
  Handshake,
  HeartHandshake,
  Microscope,
} from "lucide-react";
import { EditorialImage } from "@/components/content/EditorialImage";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { ButtonLink } from "@/components/ui/ButtonLink";

export const metadata: Metadata = {
  title: "Get Involved",
  description:
    "Support community-led climate action with SPiD through partnership, funding, expertise and research.",
  alternates: { canonical: "/get-involved" },
};
const pathways = [
  [
    "Partner With Us",
    "Build a strategic, technical or implementation collaboration with SPiD.",
    "partnership",
  ],
  [
    "Fund a Program",
    "Support an approved SPiD programme through responsible funding.",
    "funding",
  ],
  [
    "Volunteer Expertise",
    "Contribute relevant technical or professional expertise.",
    "volunteer",
  ],
  [
    "Sponsor Youth Leaders",
    "Help strengthen youth climate leadership and learning opportunities.",
    "funding",
  ],
  [
    "Collaborate on Research",
    "Connect community knowledge, policy questions and responsible research practice.",
    "research",
  ],
] as const;
const pathwayIcons = [
  Handshake,
  CircleDollarSign,
  HeartHandshake,
  GraduationCap,
  Microscope,
] as const;

export default function GetInvolvedPage() {
  return (
    <>
      <div className="container">
        <Breadcrumbs
          items={[{ label: "Home", href: "/" }, { label: "Get Involved" }]}
        />
      </div>
      <header className="page-hero">
        <div className="container page-hero-grid">
          <div>
            <p className="eyebrow">Get Involved</p>
            <h1 className="h1">Support Community-Led Climate Action</h1>
            <p className="lead">
              You can help strengthen local climate resilience in Africa.
            </p>
          </div>
          <EditorialImage
            src="/images/get-involved/collective-climate-action.webp"
            alt="A diverse crowd gathered outdoors in collective action"
            sizes="(min-width: 768px) 44vw, calc(100vw - 2rem)"
            className="page-hero-photo portrait-focus"
            priority
          />
        </div>
      </header>
      <section className="section">
        <div className="container pathways grid-2">
          {pathways.map(([title, body, type], index) => {
            const Icon = pathwayIcons[index];
            return (
              <article className="card value-card" key={title}>
                <Icon className="card-icon" aria-hidden="true" />
                <h2>{title}</h2>
                <p>{body}</p>
                <ButtonLink href={`/contact?type=${type}`} variant="secondary">
                  Start this enquiry
                </ButtonLink>
              </article>
            );
          })}
        </div>
      </section>
      <section className="section mist">
        <div className="container deep cta-panel">
          <h2 className="h2">Take Action Today</h2>
          <p>
            Start a focused conversation about how you or your organisation can
            contribute.
          </p>
          <ButtonLink href="/contact" variant="warm">
            Contact SPiD
          </ButtonLink>
        </div>
      </section>
    </>
  );
}
