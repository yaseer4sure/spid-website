import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";
import type { SocialLink, SocialPlatform } from "@/content/social";
import { socialLabels } from "@/content/social";

const icons: Record<SocialPlatform, typeof FaInstagram> = {
  instagram: FaInstagram,
  x: FaXTwitter,
  linkedin: FaLinkedinIn,
  facebook: FaFacebookF,
};

export function SocialLinks({
  links,
  labelled = false,
  ariaLabel = "SPiD social media",
}: {
  links: SocialLink[];
  labelled?: boolean;
  ariaLabel?: string;
}) {
  return (
    <nav aria-label={ariaLabel}>
      <ul className={`social-links${labelled ? " social-links-labelled" : ""}`}>
        {links.map((link) => {
          const Icon = icons[link.platform];
          const label = socialLabels[link.platform];
          return (
            <li key={link.platform}>
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`SPiD on ${label} (opens in a new tab)`}
              >
                <Icon aria-hidden="true" />
                {labelled ? <span>{label}</span> : null}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
