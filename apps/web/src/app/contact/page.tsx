import type { Metadata } from "next";
import { Handshake, MapPin, MessageCircle, Search } from "lucide-react";
import { EditorialImage } from "@/components/content/EditorialImage";
import { SocialLinks } from "@/components/content/SocialLinks";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { ContactForm } from "@/features/contact/ContactForm";
import { getSiteSettings } from "@/sanity/content";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact SPiD about partnerships, funding, research or volunteer expertise.",
  alternates: { canonical: "/contact" },
};

export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<{ type?: string }>;
}) {
  const [params, siteSettings] = await Promise.all([
    searchParams,
    getSiteSettings(),
  ]);
  const type = params.type;
  return (
    <>
      <div className="container">
        <Breadcrumbs
          items={[{ label: "Home", href: "/" }, { label: "Contact" }]}
        />
      </div>
      <header className="page-hero">
        <div className="container page-hero-grid">
          <div>
            <p className="eyebrow">Contact and partnership enquiries</p>
            <h1 className="h1">Let&apos;s Build Climate Resilience Together</h1>
            <p className="lead">
              Tell us how you would like to partner, contribute or collaborate.
            </p>
          </div>
          <EditorialImage
            src="/images/contact/community-conversation.png"
            alt="Colourful phone, message, email and location symbols"
            sizes="(min-width: 768px) 44vw, calc(100vw - 2rem)"
            className="page-hero-photo portrait-focus project-photo"
            priority
          />
        </div>
      </header>
      <section className="section">
        <div className="container contact-layout">
          <ContactForm initialType={type} />
          <aside className="card value-card">
            <p className="eyebrow">SPiD</p>
            <h2 className="contact-identity">
              <MapPin aria-hidden="true" /> Nigeria | Working Across Africa
            </h2>
            <ul className="contact-topics">
              <li>
                <Handshake aria-hidden="true" /> Partnership and funding
                enquiries
              </li>
              <li>
                <Search aria-hidden="true" /> Research and evidence enquiries
              </li>
              <li>
                <MessageCircle aria-hidden="true" /> Volunteer expertise and
                general enquiries
              </li>
            </ul>
            <p>
              We collect only the information needed to respond to your enquiry.
            </p>
            <div className="contact-socials">
              <h3>Connect With Us</h3>
              <SocialLinks
                links={siteSettings.socialLinks}
                labelled
                ariaLabel="Connect with SPiD on social media"
              />
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
