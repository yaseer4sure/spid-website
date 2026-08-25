import type { Metadata } from "next";
import {
  BriefcaseBusiness,
  GraduationCap,
  Globe2,
  Landmark,
  UsersRound,
} from "lucide-react";
import { EditorialImage } from "@/components/content/EditorialImage";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { partnerCategories } from "@/content/approved";

export const metadata: Metadata = {
  title: "Partners",
  description: "Explore strategic partnership pathways with SPiD.",
  alternates: { canonical: "/partners" },
};

const partnerIcons = [
  UsersRound,
  GraduationCap,
  Landmark,
  BriefcaseBusiness,
  Globe2,
] as const;

export default function PartnersPage() {
  return (
    <>
      <header className="page-hero">
        <div className="container page-hero-grid">
          <div>
            <p className="eyebrow">Partners</p>
            <h1 className="h1">Collaboration for stronger climate action</h1>
            <p className="lead">
              SPiD builds cross-sector relationships around shared purpose,
              clear roles and community-rooted outcomes.
            </p>
          </div>
          <EditorialImage
            src="/images/partners/cross-sector-community-collaboration.webp"
            alt="A diverse group taking part in an outdoor community meeting"
            sizes="(min-width: 768px) 44vw, calc(100vw - 2rem)"
            className="page-hero-photo"
            priority
          />
        </div>
      </header>
      <section className="section">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Who we work with</p>
            <h2 className="h2">Partnership across sectors</h2>
          </div>
          <div className="grid-3">
            {partnerCategories.map((category, index) => {
              const Icon = partnerIcons[index];
              return (
                <article className="card value-card" key={category}>
                  <Icon className="card-icon" aria-hidden="true" />
                  <h3>{category}</h3>
                </article>
              );
            })}
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
