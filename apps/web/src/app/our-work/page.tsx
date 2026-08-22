import type { Metadata } from "next";
import { ProgrammeCard } from "@/components/content/Cards";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { fallbackHome } from "@/sanity/fallback";

export const metadata: Metadata = {
  title: "Our Work",
  description:
    "Explore SPiD programmes advancing community-led climate governance and youth climate leadership.",
  alternates: { canonical: "/our-work" },
};

export default function OurWorkPage() {
  return (
    <>
      <header className="page-hero">
        <div className="container">
          <p className="eyebrow">Our Work</p>
          <h1 className="h1">
            Programmes rooted in participation and evidence
          </h1>
          <p className="lead">
            SPiD combines community knowledge, youth leadership, research and
            policy engagement to strengthen climate resilience.
          </p>
        </div>
      </header>
      <section className="section">
        <div className="container grid-2">
          {fallbackHome.featuredProgrammes.map((item) => (
            <ProgrammeCard key={item._id} programme={item} />
          ))}
        </div>
      </section>
      <section className="section mist">
        <div className="container cta-panel">
          <h2 className="h2">Collaborate on locally led climate action</h2>
          <p>
            Work with SPiD on programme funding, technical collaboration,
            research and responsible implementation.
          </p>
          <ButtonLink href="/contact?type=partnership">
            Discuss programme collaboration
          </ButtonLink>
        </div>
      </section>
    </>
  );
}
