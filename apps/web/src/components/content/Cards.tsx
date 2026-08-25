import Link from "next/link";
import { EditorialImage } from "@/components/content/EditorialImage";
import { programmeVisuals } from "@/content/visuals";

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
export function ProgrammeCard({
  programme,
  imagePriority = false,
}: {
  programme: Programme;
  imagePriority?: boolean;
}) {
  const visual =
    programmeVisuals[programme.slug as keyof typeof programmeVisuals];

  return (
    <article className="card programme-card">
      {visual ? (
        <EditorialImage
          src={visual.src}
          alt={visual.alt}
          sizes="(min-width: 768px) 38rem, calc(100vw - 2rem)"
          className="programme-card-image"
          priority={imagePriority}
        />
      ) : null}
      <div className="programme-card-content">
        <p className="eyebrow">
          {programme.acronym || "Programme"} · {programme.status}
        </p>
        <h3>{programme.title}</h3>
        <p>{programme.summary}</p>
        <div className="programme-card-action">
          <Link
            className="button button-primary programme-card-cta"
            href={`/our-work/${programme.slug}`}
          >
            View Programme
          </Link>
        </div>
      </div>
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
