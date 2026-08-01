import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { ContactForm } from "@/features/contact/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact SPiD about partnerships, funding, research, volunteer expertise or media enquiries.",
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
          <h1 className="h1">Start a conversation with SPiD</h1>
          <p className="lead">
            Choose the enquiry type that best matches how you would like to
            engage.
          </p>
        </div>
      </header>
      <section className="section">
        <div className="container contact-layout">
          <ContactForm initialType={type} />
          <aside className="card">
            <h2>Before you send</h2>
            <p>SPiD is based in Nigeria and works across Africa.</p>
            <p>
              The official public email and response-time commitment require
              final organisational confirmation and are therefore not published
              as facts here.
            </p>
            <p>
              No submission is stored in a website database or sent to
              analytics.
            </p>
          </aside>
        </div>
      </section>
    </>
  );
}
