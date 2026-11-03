import type { Metadata } from "next";
import {
  BriefcaseBusiness,
  GraduationCap,
  Globe2,
  Handshake,
  Landmark,
  UsersRound,
} from "lucide-react";
import { EditorialImage } from "@/components/content/EditorialImage";
import { PartnerLogoGrid } from "@/components/content/PartnerLogoGrid";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { partnerCategories } from "@/content/approved";
import { getPublicPartners } from "@/sanity/content";

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

export default async function PartnersPage() {
  const partners = await getPublicPartners();
  return (
    <>
      <header className="page-hero">
        <div className="container page-hero-grid">
          <div>
            <p className="eyebrow">Partners</p>
            <h1 className="h1">Partnerships That Drive Climate Action</h1>
            <p className="lead">
              SPiD brings communities, public institutions, researchers, funders
              and technical organisations together around shared purpose, clear
              roles and community-rooted climate outcomes.
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
            <p className="eyebrow">Approved relationships</p>
            <h2 className="h2">Organisations working with SPiD</h2>
            <p className="lead">
              Only relationships approved for public display appear in this
              directory.
            </p>
          </div>
          {partners.length > 0 ? (
            <PartnerLogoGrid partners={partners} />
          ) : (
            <div className="partner-empty-state partner-empty-state-wide">
              <Handshake aria-hidden="true" />
              <div>
                <h3>Building responsible climate partnerships</h3>
                <p>
                  Partner profiles will be added after relationship details,
                  logo permissions and public approval are confirmed.
                </p>
              </div>
            </div>
          )}
        </div>
      </section>
      <section className="section mist">
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
      <section className="section">
        <div className="container cta-panel">
          <h2 className="h2">Become a Strategic Partner</h2>
          <p>
            Bring funding, research, technical expertise or implementation
            capacity to locally led climate action.
          </p>
          <ButtonLink href="/get-involved">
            Become a Strategic Partner
          </ButtonLink>
        </div>
      </section>
    </>
  );
}
