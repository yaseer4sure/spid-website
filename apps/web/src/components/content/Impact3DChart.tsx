import type { CSSProperties } from "react";
import {
  impactMetrics,
  type ImpactMetricConfig,
  type ImpactMetricStatus,
} from "@/config/impactMetrics";

type Impact3DChartProps = {
  metrics?: Record<string, ImpactMetricConfig>;
  status: ImpactMetricStatus;
  revealValues: boolean;
};

const metricStyles = ["blue", "green", "yellow", "terracotta"] as const;

function formatMetricValue(metric: ImpactMetricConfig) {
  if (metric.value === null || !Number.isFinite(metric.value)) return null;
  return `${metric.value.toLocaleString("en-US")}${metric.suffix}`;
}

export function Impact3DChart({
  metrics = impactMetrics,
  status,
  revealValues,
}: Impact3DChartProps) {
  return (
    <section
      className="impact-dashboard"
      aria-label="SPiD impact indicators"
      data-status={status}
    >
      <div className="impact-dashboard-glow" aria-hidden="true" />
      <div className="impact-dashboard-grid">
        {Object.entries(metrics).map(([key, metric], index) => {
          const value = formatMetricValue(metric);
          const valueIsVisible = revealValues && value !== null;

          return (
            <article
              className={`impact-3d-tile impact-3d-tile-${metricStyles[index % metricStyles.length]}`}
              key={key}
              style={{ "--tile-order": index } as CSSProperties}
            >
              <span className="impact-3d-highlight" aria-hidden="true" />
              <strong className="impact-3d-value">
                {valueIsVisible ? value : "—"}
              </strong>
              <span className="impact-3d-label">{metric.label}</span>
              {!valueIsVisible && (
                <span className="impact-3d-pending">Value pending</span>
              )}
            </article>
          );
        })}
      </div>
      {(status === "illustrative" || !revealValues) && (
        <p className="impact-dashboard-status" role="note">
          {status === "illustrative" && revealValues
            ? "Illustrative figures — pending verification"
            : "Impact figures withheld pending verification"}
        </p>
      )}
    </section>
  );
}
