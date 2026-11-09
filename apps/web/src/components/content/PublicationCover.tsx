import Link from "next/link";
import { FileText } from "lucide-react";
import { voicesFromTheWard } from "@/content/research/voicesFromTheWard";

export function PublicationCover({ linked = false }: { linked?: boolean }) {
  const cover = (
    <div
      className="publication-cover"
      aria-label="Voices from the Ward report cover"
    >
      <div className="publication-cover-mark">
        <FileText aria-hidden="true" />
      </div>
      <p>SPiD · CPI4CG</p>
      <h3>{voicesFromTheWard.title}</h3>
      <span>{voicesFromTheWard.subtitle}</span>
      <small>
        {voicesFromTheWard.description} ·{" "}
        {voicesFromTheWard.publicationDateLabel}
      </small>
    </div>
  );
  return linked ? (
    <Link
      className="publication-cover-link"
      href={voicesFromTheWard.landingPath}
    >
      {cover}
    </Link>
  ) : (
    cover
  );
}
