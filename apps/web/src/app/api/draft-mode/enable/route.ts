import { defineEnableDraftMode } from "next-sanity/draft-mode";
import { previewClient } from "@/sanity/client";

export async function GET(request: Request) {
  const secret = new URL(request.url).searchParams.get("sanity-preview-secret");
  if (!secret) return new Response("Invalid secret", { status: 401 });

  let client: ReturnType<typeof previewClient>;
  try {
    client = previewClient();
  } catch {
    return new Response("Invalid secret", { status: 401 });
  }

  const handler = defineEnableDraftMode({ client });

  return handler.GET(request);
}
