import type { Metadata } from "next";
import { HandHeart, HeartHandshake, ShieldCheck, Sprout } from "lucide-react";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { DonationForm } from "@/features/donation/DonationForm";

export const metadata: Metadata = {
  title: "Donate",
  description:
    "Support SPiD's community-led climate action and youth leadership work.",
  alternates: { canonical: "/donate" },
};

const supportAreas = [
  [
    Sprout,
    "Community climate action",
    "Strengthen locally led responses rooted in community priorities.",
  ],
  [
    HeartHandshake,
    "Youth climate leadership",
    "Support learning, mentorship and practical leadership pathways.",
  ],
  [
    HandHeart,
    "Research and participation",
    "Help community evidence reach climate decision-making spaces.",
  ],
] as const;

export default function DonatePage() {
  return (
    <>
      <div className="container">
        <Breadcrumbs
          items={[{ label: "Home", href: "/" }, { label: "Donate" }]}
        />
      </div>
      <header className="page-hero">
        <div className="container donation-hero">
          <p className="eyebrow">Support SPiD</p>
          <h1 className="h1">Back locally led climate action</h1>
          <p className="lead">
            Your support can help communities and young people build the
            knowledge, relationships and practical solutions needed for climate
            resilience.
          </p>
        </div>
      </header>
      <section className="section">
        <div className="container donation-layout">
          <div>
            <div className="section-heading">
              <p className="eyebrow">Where support can contribute</p>
              <h2 className="h2">Climate action grounded in participation</h2>
            </div>
            <div className="donation-support-grid">
              {supportAreas.map(([Icon, title, description]) => (
                <article className="card value-card" key={title}>
                  <Icon className="card-icon" aria-hidden="true" />
                  <h3>{title}</h3>
                  <p>{description}</p>
                </article>
              ))}
            </div>
            <div className="donation-trust">
              <ShieldCheck aria-hidden="true" />
              <div>
                <h3>Responsible giving</h3>
                <p>
                  A secure payment provider and approved donation terms will be
                  configured before online payments are enabled.
                </p>
              </div>
            </div>
          </div>
          <DonationForm />
        </div>
      </section>
      <section className="section mist">
        <div className="container cta-panel">
          <h2 className="h2">Prefer to discuss programme support?</h2>
          <p>
            Contact SPiD about institutional funding or strategic partnership.
          </p>
          <ButtonLink href="/contact?type=funding">
            Start a funding enquiry
          </ButtonLink>
        </div>
      </section>
    </>
  );
}
