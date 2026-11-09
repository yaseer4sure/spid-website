import { PublicationCover } from "./PublicationCover";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { voicesFromTheWard } from "@/content/research/voicesFromTheWard";

export function PublicationFeature({ compact = false }: { compact?: boolean }) {
  return (
    <article
      className={`publication-feature${compact ? " publication-feature-compact" : ""}`}
    >
      <PublicationCover linked />
      <div>
        <p className="eyebrow">{voicesFromTheWard.category}</p>
        <h2 className="h2">{voicesFromTheWard.title}</h2>
        <p className="lead">{voicesFromTheWard.subtitle}</p>
        <p>{voicesFromTheWard.summary}</p>
        <p className="publication-meta">
          {voicesFromTheWard.publicationDateLabel} ·{" "}
          {voicesFromTheWard.location}
        </p>
        <p className="publication-review-note">Publication approval pending</p>
        <ButtonLink href={voicesFromTheWard.landingPath}>
          Explore the Research
        </ButtonLink>
      </div>
    </article>
  );
}
