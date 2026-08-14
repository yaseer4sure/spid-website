import { defineEnableDraftMode } from "next-sanity/draft-mode";
import { previewClient } from "@/sanity/client";

export const { GET } = defineEnableDraftMode({
  client: previewClient(),
});
