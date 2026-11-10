import Link from "next/link";
import Image from "next/image";
import { voicesFromTheWard } from "@/content/research/voicesFromTheWard";

export function PublicationCover({ linked = false }: { linked?: boolean }) {
  const cover = (
    <div className="publication-cover">
      <Image
        src={voicesFromTheWard.posterPath}
        alt="Voices from the Ward research summary poster with study methodology, findings and recommendations"
        fill
        sizes="(min-width: 1024px) 22rem, (min-width: 768px) 36vw, 85vw"
        className="publication-cover-image"
      />
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
