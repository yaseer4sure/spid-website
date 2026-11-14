import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { draftMode } from "next/headers";
import { VisualEditing } from "next-sanity/visual-editing";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { navItems as fallbackNavItems } from "@/components/layout/navigation";
import { getSiteSettings } from "@/sanity/content";
import "./globals.css";
import "@/components/layout/layout.css";
import "./site.css";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://spidclimateresilience.org";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "SPiD | Locally Led Climate Action",
    template: "%s | SPiD",
  },
  description:
    "SPiD advances community-rooted, youth-driven climate resilience across Nigeria and Africa.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: "SPiD",
    title: "SPiD | Locally Led. Youth Driven. Climate Resilient.",
    description: "Community-rooted climate action across Nigeria and Africa.",
    url: siteUrl,
  },
};

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const [preview, siteSettings] = await Promise.all([
    draftMode().then((mode) => mode.isEnabled),
    getSiteSettings(),
  ]);
  const navigation =
    siteSettings.navigation?.items
      ?.filter((item) => item.visible !== false)
      .map(({ label, href }) => ({ label, href })) || fallbackNavItems;
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main-content">
          Skip to main content
        </a>
        <Header items={navigation} />
        {preview && (
          <div className="preview-banner">
            Draft preview — unpublished content may be visible.{" "}
            <a href="/api/draft-mode/disable">Exit preview</a>
          </div>
        )}
        <main id="main-content">{children}</main>
        <Footer
          socialLinks={siteSettings.socialLinks}
          officeAddress={siteSettings.officeAddress}
          positioningStatement={
            siteSettings.footer?.positioningStatement || undefined
          }
        />
        {preview && <VisualEditing />}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
