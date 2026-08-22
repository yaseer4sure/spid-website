import type { Metadata } from "next";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { partnerCategories } from "@/content/approved";

export const metadata: Metadata = {
  title: "Partners",
  description: "Explore strategic partnership pathways with SPiD.",
  alternates: { canonical: "/partners" },
};

export default function PartnersPage() {
  return (
    <>
      <header className="page-hero">
        <div className="container">
          <p className="eyebrow">Partners</p>
          <h1 className="h1">Collaboration for stronger climate action</h1>
          <p className="lead">
            SPiD builds cross-sector relationships around shared purpose, clear
            roles and community-rooted outcomes.
          </p>
        </div>
      </header>
      <section className="section">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Who we work with</p>
            <h2 className="h2">Partnership across sectors</h2>
          </div>
          <div className="grid-3">
            {partnerCategories.map((category) => (
              <article className="card value-card" key={category}>
                <h3>{category}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section mist">
        <div className="container cta-panel">
          <h2 className="h2">Become a Strategic Partner</h2>
          <p>
            Bring funding, research, technical expertise or implementation
            capacity to locally led climate action.
          </p>
          <ButtonLink href="/contact?type=partnership">
            Become a Strategic Partner
          </ButtonLink>
        </div>
      </section>
    </>
  );
}
