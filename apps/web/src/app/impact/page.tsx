import { EmptyState } from "@/components/feedback/States";
export default function ImpactPage() {
  return (
    <>
      <header className="page-hero">
        <div className="container">
          <p className="eyebrow">Impact</p>
          <h1 className="h1">Evidence with context</h1>
          <p className="lead">
            SPiD publishes impact metrics only after their period, geography,
            source and verification are complete.
          </p>
        </div>
      </header>
      <section className="section">
        <div className="container">
          <EmptyState title="Verified public metrics are being prepared">
            <p>
              Candidate figures remain private and do not appear as decorative
              counters.
            </p>
          </EmptyState>
        </div>
      </section>
    </>
  );
}
