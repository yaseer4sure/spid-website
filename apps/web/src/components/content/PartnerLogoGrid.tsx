import Image from "next/image";
import type { PublicPartner } from "@/sanity/fallback";

export function PartnerLogoGrid({
  partners,
  compact = false,
}: {
  partners: PublicPartner[];
  compact?: boolean;
}) {
  return (
    <div
      className={`partner-logo-grid${compact ? " partner-logo-grid-compact" : ""}`}
    >
      {partners.map((partner) => {
        const content = (
          <>
            <div className="partner-logo-frame">
              <Image
                src={partner.logoUrl}
                alt={`${partner.name} logo`}
                width={320}
                height={160}
                sizes="(min-width: 1024px) 16rem, (min-width: 640px) 40vw, calc(100vw - 4rem)"
              />
            </div>
            <div className="partner-card-copy">
              <h3>{partner.name}</h3>
              {!compact && partner.summary ? <p>{partner.summary}</p> : null}
              {!compact && partner.relationshipSummary ? (
                <p className="partner-relationship">
                  {partner.relationshipSummary}
                </p>
              ) : null}
            </div>
          </>
        );

        return partner.website ? (
          <a
            className="card partner-logo-card"
            href={partner.website}
            target="_blank"
            rel="noopener noreferrer"
            key={partner._id}
            aria-label={`${partner.name} website (opens in a new tab)`}
          >
            {content}
          </a>
        ) : (
          <article className="card partner-logo-card" key={partner._id}>
            {content}
          </article>
        );
      })}
    </div>
  );
}
