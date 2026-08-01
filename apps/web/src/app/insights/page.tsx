import { InsightCard } from "@/components/content/Cards";
import { fallbackInsight } from "@/sanity/fallback";
export default function InsightsPage() {
  return (
    <>
      <header className="page-hero">
        <div className="container">
          <p className="eyebrow">Insights</p>
          <h1 className="h1">Evidence, learning and programme updates</h1>
          <p className="lead">
            One controlled development item is available while approved
            publication content is prepared.
          </p>
        </div>
      </header>
      <section className="section">
        <div className="container">
          <InsightCard insight={fallbackInsight} />
        </div>
      </section>
    </>
  );
}
