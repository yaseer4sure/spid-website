"use client";
import { useEffect } from "react";
import { ErrorState } from "@/components/feedback/States";
export default function ErrorPage({
  error,
}: {
  error: Error & { digest?: string };
}) {
  useEffect(() => {
    console.error(error.digest || "route_error");
  }, [error]);
  return (
    <section className="section">
      <div className="container">
        <ErrorState />
      </div>
    </section>
  );
}
