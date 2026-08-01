import { contactSchema, flattenContactErrors } from "@spid/validation";
import { NextResponse } from "next/server";
import { sendEnquiry, verifyTurnstile } from "@/features/contact/adapters";

export async function POST(request: Request) {
  const requestId = crypto.randomUUID();
  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, requestId, message: "Submit the form using valid data." },
      { status: 400 },
    );
  }
  const parsed = contactSchema.safeParse(payload);
  if (!parsed.success) {
    return NextResponse.json(
      {
        ok: false,
        requestId,
        message: "Check the highlighted fields.",
        errors: flattenContactErrors(parsed.error),
      },
      { status: 422 },
    );
  }
  try {
    const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim();
    if (!(await verifyTurnstile(parsed.data.turnstileToken, ip))) {
      return NextResponse.json(
        {
          ok: false,
          requestId,
          message:
            "The anti-spam check could not be verified. Please try again.",
        },
        { status: 400 },
      );
    }
    await sendEnquiry({
      ...parsed.data,
      requestId,
      submittedAt: new Date().toISOString(),
    });
    return NextResponse.json({
      ok: true,
      requestId,
      message: "Your enquiry has been received.",
    });
  } catch {
    console.error(
      JSON.stringify({
        event: "contact_delivery_failed",
        requestId,
        route: "/api/contact",
      }),
    );
    return NextResponse.json(
      {
        ok: false,
        requestId,
        message:
          "We could not send your enquiry. Please use the published contact address.",
      },
      { status: 502 },
    );
  }
}
