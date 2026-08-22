import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { getInsight, getInsightMetadata } from "@/sanity/content";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const insight = await getInsightMetadata((await params).slug);
  if (!insight) return {};
  return {
    title: insight.title,
    description: insight.summary,
    robots: insight.seo?.noIndex ? "noindex, nofollow" : undefined,
    alternates: { canonical: `/insights/${insight.slug}` },
  };
}

export default async function InsightPage({ params }: Props) {
  const insight = await getInsight((await params).slug);
  if (!insight) notFound();
  return (
    <>
      <div className="container">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Insights", href: "/insights" },
            { label: insight.title },
          ]}
        />
      </div>
      <header className="page-hero">
        <div className="container">
          <p className="eyebrow">
            {insight.contentType.replace(/([A-Z])/g, " $1")}
          </p>
          <h1 className="h1">{insight.title}</h1>
          <p className="lead">{insight.summary}</p>
          <p>
            By {insight.organisationAuthor} ·{" "}
            <time dateTime={insight.publishedAt}>
              {new Intl.DateTimeFormat("en-GB", { dateStyle: "long" }).format(
                new Date(insight.publishedAt),
              )}
            </time>
          </p>
        </div>
      </header>
      <article className="section">
        <div className="container prose">
          <h2>Why local evidence matters</h2>
          <p>
            Participatory climate governance depends on community knowledge
            being gathered carefully, interpreted responsibly and brought into
            dialogue with institutions and policy processes.
          </p>
          <p>
            SPiD uses this principle to connect community participation with
            research, programme learning and policy engagement.
          </p>
          <h2>Connected to CPI4CG</h2>
          <p>
            The CPI4CG pilot uses participatory methods including household
            surveys, focus group discussions, key informant interviews,
            consultations, validation and evidence-based advocacy.
          </p>
          <ButtonLink href="/our-work/cpi4cg" variant="secondary">
            View the CPI4CG programme
          </ButtonLink>
        </div>
      </article>
      <section className="section mist">
        <div className="container cta-panel">
          <h2 className="h2">Turn evidence into collaboration</h2>
          <p>Explore research, programme and partnership pathways with SPiD.</p>
          <ButtonLink href="/get-involved">Get involved</ButtonLink>
        </div>
      </section>
    </>
  );
}
