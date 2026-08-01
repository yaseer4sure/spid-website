import Link from "next/link";

type Programme = {
  _id: string;
  title: string;
  acronym?: string | null;
  slug: string;
  summary: string;
  status: string;
};
type Insight = {
  _id: string;
  title: string;
  slug: string;
  summary: string;
  contentType: string;
  publishedAt: string;
};
export function ProgrammeCard({ programme }: { programme: Programme }) {
  return (
    <article className="card">
      <p className="eyebrow">
        {programme.acronym || "Programme"} · {programme.status}
      </p>
      <h3>{programme.title}</h3>
      <p>{programme.summary}</p>
      <Link href={`/our-work/${programme.slug}`}>
        View programme <span aria-hidden="true">→</span>
      </Link>
    </article>
  );
}
export function InsightCard({ insight }: { insight: Insight }) {
  return (
    <article className="card">
      <p className="eyebrow">
        {insight.contentType.replace(/([A-Z])/g, " $1")}
      </p>
      <h3>{insight.title}</h3>
      <p>{insight.summary}</p>
      <Link href={`/insights/${insight.slug}`}>
        Read insight <span aria-hidden="true">→</span>
      </Link>
    </article>
  );
}
