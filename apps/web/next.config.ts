import type { NextConfig } from "next";
import {
  frameAncestors,
  studioOriginForBuild,
} from "./src/lib/contentSecurityPolicy";

const trustedFrameAncestors = frameAncestors(
  studioOriginForBuild(
    process.env.NEXT_PUBLIC_SANITY_STUDIO_URL,
    process.env.VERCEL === "1",
  ),
);

const nextConfig: NextConfig = {
  poweredByHeader: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        pathname: "/images/**",
      },
    ],
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
          {
            key: "Content-Security-Policy",
            value: `frame-ancestors ${trustedFrameAncestors}`,
          },
        ],
      },
    ];
  },
};
export default nextConfig;
