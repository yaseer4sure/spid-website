import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { voicesFromTheWard } from "@/content/research/voicesFromTheWard";

export const metadata: Metadata = {
  title: `Read ${voicesFromTheWard.title}`,
  robots: { index: false, follow: false },
};

export default function ReportReaderPage() {
  return (
    <main className="report-reader">
      <div className="report-reader-bar">
        <Link href={voicesFromTheWard.landingPath}>
          <ArrowLeft aria-hidden="true" /> Back to publication
        </Link>
        <a
          href={voicesFromTheWard.reportPath}
          target="_blank"
          rel="noopener noreferrer"
        >
          Open reader in a new tab <ExternalLink aria-hidden="true" />
        </a>
      </div>
      <iframe
        title={`Full report: ${voicesFromTheWard.title}`}
        src={voicesFromTheWard.reportPath}
        sandbox="allow-scripts allow-modals"
      />
    </main>
  );
}
