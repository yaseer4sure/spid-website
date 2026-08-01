import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { presentationTool } from "sanity/presentation";
import { structureTool } from "sanity/structure";
import { resolve } from "./presentation/resolve";
import { schemaTypes, templates } from "./schemaTypes";
import { singletonActions, singletonTypes, structure } from "./structure";

const projectId = process.env.SANITY_STUDIO_PROJECT_ID || "missing-project-id";
const dataset = process.env.SANITY_STUDIO_DATASET || "production";
const previewOrigin =
  process.env.SANITY_STUDIO_PREVIEW_ORIGIN || "http://localhost:3000";

export default defineConfig({
  name: "spid",
  title: "SPiD Content",
  projectId,
  dataset,
  basePath: "/",
  schema: {
    types: schemaTypes,
    templates: (previous) => [
      ...previous.filter(
        (template) => !singletonTypes.has(template.schemaType),
      ),
      ...templates,
    ],
  },
  document: {
    actions: (previous, context) =>
      singletonTypes.has(context.schemaType)
        ? previous.filter(({ action }) => singletonActions.has(action || ""))
        : previous,
  },
  plugins: [
    structureTool({ structure }),
    presentationTool({
      previewUrl: {
        origin: previewOrigin,
        previewMode: {
          enable: "/api/draft-mode/enable",
          disable: "/api/draft-mode/disable",
        },
      },
      resolve,
    }),
    visionTool(),
  ],
});
