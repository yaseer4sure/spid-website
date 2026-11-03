export const socialPlatforms = [
  "instagram",
  "x",
  "linkedin",
  "facebook",
] as const;

export type SocialPlatform = (typeof socialPlatforms)[number];

export type SocialLink = {
  platform: SocialPlatform;
  url: string;
};

export const socialLabels: Record<SocialPlatform, string> = {
  instagram: "Instagram",
  x: "X",
  linkedin: "LinkedIn",
  facebook: "Facebook",
};

export const approvedSocialLinks: SocialLink[] = [
  {
    platform: "instagram",
    url: "https://www.instagram.com/spidclimateresilience?vrfl=eGljbmZyNHhsYTQ4",
  },
  { platform: "x", url: "https://x.com/spid_org" },
  {
    platform: "linkedin",
    url: "https://www.linkedin.com/company/spidclimateresilience/",
  },
  {
    platform: "facebook",
    url: "https://www.facebook.com/share/19gaDUHJZ1/",
  },
];

export function normaliseSocialLinks(
  links:
    | Array<{ platform?: string | null; url?: string | null }>
    | null
    | undefined,
): SocialLink[] {
  const configured = new Map(
    links
      ?.filter(
        (link): link is { platform: SocialPlatform; url: string } =>
          socialPlatforms.includes(link.platform as SocialPlatform) &&
          typeof link.url === "string" &&
          link.url.startsWith("https://"),
      )
      .map((link) => [link.platform, link]) ?? [],
  );

  return approvedSocialLinks.map(
    (fallback) => configured.get(fallback.platform) ?? fallback,
  );
}
