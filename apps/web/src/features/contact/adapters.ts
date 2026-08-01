import { Resend } from "resend";

type TurnstileResponse = { success: boolean; "error-codes"?: string[] };
export async function verifyTurnstile(token: string, remoteIp?: string) {
  const secret = process.env.TURNSTILE_SECRET_KEY;
  if (!secret) return process.env.NODE_ENV !== "production";
  const body = new URLSearchParams({ secret, response: token });
  if (remoteIp) body.set("remoteip", remoteIp);
  const response = await fetch(
    "https://challenges.cloudflare.com/turnstile/v0/siteverify",
    { method: "POST", body, cache: "no-store" },
  );
  if (!response.ok) return false;
  return ((await response.json()) as TurnstileResponse).success;
}

type EnquiryEmail = {
  requestId: string;
  enquiryType: string;
  name: string;
  email: string;
  organisation?: string;
  message: string;
  sourcePage?: string;
  submittedAt: string;
};
export async function sendEnquiry(data: EnquiryEmail) {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.CONTACT_FROM_EMAIL;
  const to = process.env.CONTACT_TO_EMAIL;
  if (!apiKey || !from || !to) {
    if (process.env.NODE_ENV === "production")
      throw new Error("Contact delivery is not configured.");
    return { id: "development-noop" };
  }
  const resend = new Resend(apiKey);
  const result = await resend.emails.send({
    from,
    to,
    replyTo: data.email,
    subject: `[SPiD website] ${data.enquiryType} enquiry — ${data.requestId}`,
    text: [
      `Request: ${data.requestId}`,
      `Type: ${data.enquiryType}`,
      `Name: ${data.name}`,
      `Email: ${data.email}`,
      `Organisation: ${data.organisation || "Not supplied"}`,
      `Source: ${data.sourcePage || "Not supplied"}`,
      `Submitted: ${data.submittedAt}`,
      "",
      data.message,
    ].join("\n"),
  });
  if (result.error) throw new Error("Email provider rejected the request.");
  return result.data;
}
