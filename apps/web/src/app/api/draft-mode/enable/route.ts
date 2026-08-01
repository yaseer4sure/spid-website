import { draftMode } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const secret = request.nextUrl.searchParams.get("secret");
  if (
    !process.env.SANITY_PREVIEW_SECRET ||
    secret !== process.env.SANITY_PREVIEW_SECRET
  ) {
    return new NextResponse("Invalid preview request.", { status: 401 });
  }
  (await draftMode()).enable();
  const redirect = request.nextUrl.searchParams.get("redirect");
  return NextResponse.redirect(
    new URL(redirect?.startsWith("/") ? redirect : "/", request.url),
  );
}
