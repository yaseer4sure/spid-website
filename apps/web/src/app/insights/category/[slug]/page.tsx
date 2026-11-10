import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PublicationFeature } from "@/components/content/PublicationFeature";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import {
  getInsightCategory,
  insightCategories,
} from "@/content/insightCategories";

export function generateStaticParams() {
  return insightCategories.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const category = getInsightCategory(slug);
  if (!category) return {};
  const title = "heading" in category ? category.heading : category.label;
  return {
    title: `${title} | Insights`,
    description: category.description,
    alternates: { canonical: `/insights/category/${slug}` },
  };
}

export default async function InsightCategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const category = getInsightCategory(slug);
  if (!category) notFound();
  const title = "heading" in category ? category.heading : category.label;
  const hasResearchReport = category.slug === "research-reports";
  return (
    <>
      <div className="container">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Insights", href: "/insights" },
            { label: title },
          ]}
        />
      </div>
      <header className="page-hero">
        <div className="container">
          <p className="eyebrow">Insights category</p>
          <h1 className="h1">{title}</h1>
          <p className="lead">{category.description}</p>
        </div>
      </header>
      <section className="section">
        <div className="container">
          {hasResearchReport ? (
            <PublicationFeature />
          ) : (
            <div className="card category-empty-state">
              <h2>Nothing published in this category yet</h2>
              <p>
                Approved {category.label.toLowerCase()} will appear here when
                released. SPiD does not publish placeholder articles.
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
