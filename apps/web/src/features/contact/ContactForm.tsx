"use client";

import {
  contactSchema,
  enquiryTypes,
  flattenContactErrors,
} from "@spid/validation";
import Script from "next/script";
import { FormEvent, useRef, useState } from "react";

type Errors = Record<string, string[] | undefined>;
const labels: Record<(typeof enquiryTypes)[number], string> = {
  general: "General enquiry",
  partnership: "Partnership",
  funding: "Funding",
  research: "Research collaboration",
  volunteer: "Volunteer expertise",
  media: "Media enquiry",
};

export function ContactForm({
  initialType = "general",
}: {
  initialType?: string;
}) {
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");
  const [message, setMessage] = useState("");
  const summaryRef = useRef<HTMLDivElement>(null);
  const selected = enquiryTypes.includes(
    initialType as (typeof enquiryTypes)[number],
  )
    ? initialType
    : "general";
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const payload = {
      enquiryType: data.get("enquiryType"),
      name: data.get("name"),
      email: data.get("email"),
      organisation: data.get("organisation"),
      message: data.get("message"),
      consent: data.get("consent") === "on",
      company: data.get("company"),
      turnstileToken: data.get("cf-turnstile-response") ?? "",
      sourcePage: window.location.pathname,
    };
    const parsed = contactSchema.safeParse(payload);
    if (!parsed.success) {
      setErrors(flattenContactErrors(parsed.error));
      setStatus("error");
      setMessage("Check the highlighted fields.");
      requestAnimationFrame(() => summaryRef.current?.focus());
      return;
    }
    setErrors({});
    setStatus("sending");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(parsed.data),
      });
      const result = (await response.json()) as {
        ok: boolean;
        message: string;
        errors?: Errors;
      };
      setMessage(result.message);
      setErrors(result.errors || {});
      setStatus(result.ok ? "success" : "error");
      if (result.ok) form.reset();
      requestAnimationFrame(() => summaryRef.current?.focus());
    } catch {
      setMessage("We could not send your enquiry. Please try again.");
      setStatus("error");
      requestAnimationFrame(() => summaryRef.current?.focus());
    }
  }
  const error = (name: string) => errors[name]?.[0];
  return (
    <>
      <Script
        src="https://challenges.cloudflare.com/turnstile/v0/api.js"
        strategy="afterInteractive"
      />
      <form className="contact-form" onSubmit={submit} noValidate>
        {status !== "idle" && status !== "sending" && (
          <div
            ref={summaryRef}
            tabIndex={-1}
            className={status === "error" ? "error-summary" : "alert"}
            role={status === "error" ? "alert" : "status"}
          >
            <strong>
              {status === "success" ? "Enquiry received" : "There is a problem"}
            </strong>
            <p>{message}</p>
          </div>
        )}
        <div className="field">
          <label htmlFor="enquiryType">
            Enquiry type <span aria-hidden="true">*</span>
          </label>
          <select
            id="enquiryType"
            name="enquiryType"
            defaultValue={selected}
            required
          >
            {enquiryTypes.map((value) => (
              <option key={value} value={value}>
                {labels[value]}
              </option>
            ))}
          </select>
          {error("enquiryType") && (
            <span className="field-error">{error("enquiryType")}</span>
          )}
        </div>
        <div className="field">
          <label htmlFor="name">
            Name <span aria-hidden="true">*</span>
          </label>
          <input
            id="name"
            name="name"
            autoComplete="name"
            required
            aria-invalid={Boolean(error("name"))}
            aria-describedby={error("name") ? "name-error" : undefined}
          />
          {error("name") && (
            <span id="name-error" className="field-error">
              {error("name")}
            </span>
          )}
        </div>
        <div className="field">
          <label htmlFor="email">
            Email <span aria-hidden="true">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            aria-invalid={Boolean(error("email"))}
          />
          {error("email") && (
            <span className="field-error">{error("email")}</span>
          )}
        </div>
        <div className="field">
          <label htmlFor="organisation">
            Organisation <span>(optional)</span>
          </label>
          <input
            id="organisation"
            name="organisation"
            autoComplete="organization"
          />
          {error("organisation") && (
            <span className="field-error">{error("organisation")}</span>
          )}
        </div>
        <div className="field">
          <label htmlFor="message">
            How would you like to engage? <span aria-hidden="true">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            required
            aria-invalid={Boolean(error("message"))}
          />
          {error("message") && (
            <span className="field-error">{error("message")}</span>
          )}
        </div>
        <div className="honeypot" aria-hidden="true">
          <label htmlFor="company">Leave blank</label>
          <input id="company" name="company" tabIndex={-1} autoComplete="off" />
        </div>
        <label>
          <input type="checkbox" name="consent" required /> I agree that SPiD
          may use these details to respond to this enquiry.{" "}
          <span aria-hidden="true">*</span>
        </label>
        {error("consent") && (
          <span className="field-error">{error("consent")}</span>
        )}
        <div
          className="cf-turnstile"
          data-sitekey={
            process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY ||
            "1x00000000000000000000AA"
          }
          data-theme="light"
        />
        {error("turnstileToken") && (
          <span className="field-error">{error("turnstileToken")}</span>
        )}
        <button
          className="button button-primary"
          type="submit"
          disabled={status === "sending"}
        >
          {status === "sending" ? "Sending…" : "Send enquiry"}
        </button>
      </form>
    </>
  );
}
