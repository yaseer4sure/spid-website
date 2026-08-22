const LOCAL_STUDIO_ORIGIN = "http://localhost:3333";

function trustedOrigin(value: string | undefined): string | null {
  if (!value) return null;

  try {
    const url = new URL(value);
    return (url.protocol === "http:" || url.protocol === "https:") &&
      !url.hostname.includes("*")
      ? url.origin
      : null;
  } catch {
    return null;
  }
}

export function studioOriginForBuild(
  studioUrl: string | undefined,
  isVercelBuild: boolean,
): string | undefined {
  const origin = trustedOrigin(studioUrl) || undefined;

  if (isVercelBuild && (!origin || origin === LOCAL_STUDIO_ORIGIN)) {
    throw new Error(
      "NEXT_PUBLIC_SANITY_STUDIO_URL must contain the deployed Studio origin for Vercel builds.",
    );
  }

  return origin;
}

export function frameAncestors(studioUrl: string | undefined): string {
  return Array.from(
    new Set(
      ["'self'", LOCAL_STUDIO_ORIGIN, trustedOrigin(studioUrl)].filter(
        (origin): origin is string => Boolean(origin),
      ),
    ),
  ).join(" ");
}
