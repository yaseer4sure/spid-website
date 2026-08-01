import Link from "next/link";
import { fallbackHome } from "@/sanity/fallback";
import { ProgrammeCard } from "@/components/content/Cards";
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
            Only programmes with sufficient approved content appear here.
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
        <div className="container">
          <p>
            IICARE remains a draft CMS record and is not part of this public
            listing.
          </p>
          <Link href="/contact?type=partnership">
            Discuss programme collaboration
          </Link>
        </div>
      </section>
    </>
  );
}
