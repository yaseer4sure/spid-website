import { EmptyState } from "@/components/feedback/States";
export default function PartnersPage() {
  return (
    <>
      <header className="page-hero">
        <div className="container">
          <p className="eyebrow">Partners</p>
          <h1 className="h1">Collaboration built on clear roles</h1>
          <p className="lead">
            SPiD works with communities and institutions through responsible,
            purpose-led partnerships.
          </p>
        </div>
      </header>
      <section className="section">
        <div className="container">
          <EmptyState title="Approved partner profiles are being prepared">
            <p>
              Pending and prospective organisations are not displayed as current
              partners.
            </p>
          </EmptyState>
        </div>
      </section>
    </>
  );
}
