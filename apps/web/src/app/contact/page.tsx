import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { ContactForm } from "@/features/contact/ContactForm";

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
  const type = (await searchParams).type;
  return (
    <>
      <div className="container">
        <Breadcrumbs
          items={[{ label: "Home", href: "/" }, { label: "Contact" }]}
        />
      </div>
      <header className="page-hero">
        <div className="container">
          <p className="eyebrow">Contact and partnership enquiries</p>
          <h1 className="h1">Let&apos;s Build Climate Resilience Together</h1>
          <p className="lead">
            Tell us how you would like to partner, contribute or collaborate.
          </p>
        </div>
      </header>
      <section className="section">
        <div className="container contact-layout">
          <ContactForm initialType={type} />
          <aside className="card value-card">
            <p className="eyebrow">SPiD</p>
            <h2>Nigeria | Working Across Africa</h2>
            <p>
              Email:{" "}
              <a href="mailto:info@spidinitiative.org">
                info@spidinitiative.org
              </a>
            </p>
            <p>
              Use this form for partnership, funding, research, volunteer
              expertise and general enquiries.
            </p>
            <p>
              We collect only the information needed to respond to your enquiry.
            </p>
          </aside>
        </div>
      </section>
    </>
  );
}
