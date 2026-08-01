import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { ButtonLink } from "@/components/ui/ButtonLink";

export const metadata: Metadata = {
  title: "Get Involved",
  description:
    "Explore partnership, programme funding, research collaboration and volunteer-expertise pathways with SPiD.",
  alternates: { canonical: "/get-involved" },
};
const pathways = [
  [
    "Partner with SPiD",
    "For institutions interested in strategic, technical or implementation collaboration.",
    "partnership",
  ],
  [
    "Fund a programme",
    "For funders exploring responsible support for SPiD’s approved programme portfolio.",
    "funding",
  ],
  [
    "Sponsor youth leaders",
    "Support future youth climate-leadership opportunities without implying an open application.",
    "funding",
  ],
  [
    "Collaborate on research",
    "Connect community knowledge, policy questions and responsible research practice.",
    "research",
  ],
  [
    "Volunteer expertise",
    "Offer relevant technical or professional expertise through an enquiry.",
    "volunteer",
  ],
  [
    "Media and speaking",
    "Request approved organisational information or invite SPiD to contribute.",
    "media",
  ],
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
        <div className="container">
          <p className="eyebrow">Work with SPiD</p>
          <h1 className="h1">Choose a clear path to contribute</h1>
          <p className="lead">
            Partnership, funding, research and expertise can strengthen locally
            led climate action when the purpose and responsibilities are clear.
          </p>
        </div>
      </header>
      <section className="section">
        <div className="container pathways grid-2">
          {pathways.map(([title, body, type]) => (
            <article className="card" key={title}>
              <h2>{title}</h2>
              <p>{body}</p>
              <ButtonLink href={`/contact?type=${type}`} variant="secondary">
                Start this enquiry
              </ButtonLink>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
