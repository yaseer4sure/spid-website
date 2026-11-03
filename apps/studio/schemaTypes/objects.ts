import { defineArrayMember, defineField, defineType } from "sanity";

const requiredString = (name: string, title: string) =>
  defineField({
    name,
    title,
    type: "string",
    validation: (rule) => rule.required(),
  });

export const objectTypes = [
  defineType({
    name: "location",
    title: "Location",
    type: "object",
    fields: [
      requiredString("label", "Public label"),
      requiredString("country", "Country"),
      defineField({
        name: "stateOrRegion",
        title: "State or region",
        type: "string",
      }),
      defineField({
        name: "localGovernment",
        title: "Local government",
        type: "string",
      }),
      defineField({ name: "ward", title: "Ward", type: "string" }),
      defineField({ name: "community", title: "Community", type: "string" }),
      defineField({
        name: "coordinates",
        title: "Coordinates",
        type: "geopoint",
      }),
      defineField({
        name: "publicDescription",
        title: "Public description",
        type: "text",
      }),
    ],
  }),
  defineType({
    name: "spidImage",
    title: "SPiD image",
    type: "image",
    options: { hotspot: true },
    fields: [
      defineField({
        name: "alt",
        title: "Alternative text",
        type: "string",
        validation: (rule) =>
          rule.custom((value, context) => {
            const parent = context.parent as
              | { isDecorative?: boolean }
              | undefined;
            return parent?.isDecorative || value
              ? true
              : "Add alt text or mark the image decorative.";
          }),
      }),
      defineField({
        name: "isDecorative",
        title: "Decorative",
        type: "boolean",
        initialValue: false,
      }),
      defineField({ name: "caption", title: "Caption", type: "text" }),
      defineField({ name: "credit", title: "Credit", type: "string" }),
      defineField({ name: "location", title: "Location", type: "location" }),
      defineField({ name: "dateTaken", title: "Date taken", type: "date" }),
      defineField({
        name: "usageStatus",
        title: "Usage status",
        type: "string",
        options: {
          list: [
            "approved",
            "approvedWithCredit",
            "internalOnly",
            "pendingApproval",
            "restricted",
          ],
        },
        initialValue: "pendingApproval",
        validation: (rule) => rule.required(),
      }),
      defineField({
        name: "consentReference",
        title: "Internal consent reference",
        type: "string",
      }),
    ],
  }),
  defineType({
    name: "reportingPeriod",
    title: "Reporting period",
    type: "object",
    fields: [
      defineField({
        name: "periodType",
        title: "Period type",
        type: "string",
        options: {
          list: [
            "dateRange",
            "asOfDate",
            "calendarYear",
            "cohort",
            "projectPhase",
            "allTime",
          ],
        },
        validation: (rule) => rule.required(),
      }),
      defineField({ name: "startDate", title: "Start date", type: "date" }),
      defineField({ name: "endDate", title: "End date", type: "date" }),
      defineField({ name: "asOfDate", title: "As-of date", type: "date" }),
      defineField({
        name: "labelOverride",
        title: "Public label",
        type: "string",
      }),
    ],
    validation: (rule) =>
      rule.custom((value) => {
        if (!value) return true;
        if (
          value.periodType === "dateRange" &&
          (!value.startDate || !value.endDate)
        )
          return "Date ranges require start and end dates.";
        if (value.startDate && value.endDate && value.endDate < value.startDate)
          return "The end date cannot precede the start date.";
        if (
          ["cohort", "projectPhase"].includes(String(value.periodType)) &&
          !value.labelOverride
        )
          return "Add a clear public label.";
        if (value.periodType === "allTime" && !value.asOfDate)
          return "Add the date through which data is current.";
        return true;
      }),
  }),
  defineType({
    name: "seo",
    title: "SEO",
    type: "object",
    fields: [
      defineField({
        name: "metaTitle",
        title: "Meta title",
        type: "string",
        validation: (r) => r.max(70).warning(),
      }),
      defineField({
        name: "metaDescription",
        title: "Meta description",
        type: "text",
        rows: 3,
        validation: (r) => r.max(180).warning(),
      }),
      defineField({
        name: "canonicalUrl",
        title: "Canonical URL override",
        type: "url",
      }),
      defineField({
        name: "openGraphImage",
        title: "Open Graph image",
        type: "spidImage",
      }),
      defineField({
        name: "noIndex",
        title: "Do not index",
        type: "boolean",
        initialValue: false,
      }),
      defineField({
        name: "noFollow",
        title: "Do not follow",
        type: "boolean",
        initialValue: false,
      }),
      defineField({
        name: "socialTitle",
        title: "Social title",
        type: "string",
      }),
      defineField({
        name: "socialDescription",
        title: "Social description",
        type: "text",
      }),
    ],
  }),
  defineType({
    name: "internalLink",
    title: "Internal link",
    type: "object",
    fields: [
      defineField({
        name: "reference",
        title: "Destination",
        type: "reference",
        to: [
          { type: "page" },
          { type: "programme" },
          { type: "insight" },
          { type: "person" },
          { type: "resource" },
        ],
        validation: (r) => r.required(),
      }),
      defineField({
        name: "labelOverride",
        title: "Label override",
        type: "string",
      }),
      defineField({
        name: "anchor",
        title: "Anchor",
        type: "string",
        validation: (r) => r.regex(/^[a-z0-9-]*$/),
      }),
    ],
  }),
  defineType({
    name: "externalLink",
    title: "External link",
    type: "object",
    fields: [
      defineField({
        name: "url",
        title: "URL",
        type: "url",
        validation: (r) => r.required().uri({ scheme: ["http", "https"] }),
      }),
      requiredString("label", "Label"),
      defineField({
        name: "openInNewTab",
        title: "Open in new tab",
        type: "boolean",
        initialValue: false,
      }),
    ],
  }),
  defineType({
    name: "callToAction",
    title: "Call to action",
    type: "object",
    fields: [
      requiredString("label", "Label"),
      defineField({
        name: "href",
        title: "Internal path or secure URL",
        type: "string",
        validation: (r) => r.required(),
      }),
      defineField({
        name: "style",
        title: "Style",
        type: "string",
        options: { list: ["primary", "secondary", "text", "warm"] },
        initialValue: "primary",
        validation: (r) => r.required(),
      }),
      defineField({
        name: "analyticsKey",
        title: "Analytics key",
        type: "string",
      }),
    ],
  }),
  defineType({
    name: "socialLink",
    title: "Social link",
    type: "object",
    fields: [
      defineField({
        name: "platform",
        title: "Platform",
        type: "string",
        options: {
          list: [
            { title: "Instagram", value: "instagram" },
            { title: "X", value: "x" },
            { title: "LinkedIn", value: "linkedin" },
            { title: "Facebook", value: "facebook" },
          ],
        },
        validation: (rule) => rule.required(),
      }),
      defineField({
        name: "url",
        title: "URL",
        type: "url",
        validation: (r) => r.required().uri({ scheme: ["https"] }),
      }),
    ],
  }),
  ...[
    "quickFact",
    "methodologyStep",
    "milestone",
    "expectedOutcome",
    "frameworkAlignment",
  ].map((name) =>
    defineType({
      name,
      title: name.replace(/([A-Z])/g, " $1"),
      type: "object",
      fields: [
        requiredString("title", "Title"),
        defineField({
          name: "description",
          title: "Description",
          type: "text",
          validation: (r) => r.required(),
        }),
        defineField({ name: "date", title: "Date", type: "date" }),
        defineField({ name: "status", title: "Status", type: "string" }),
      ],
    }),
  ),
  defineType({
    name: "simplePortableText",
    title: "Simple rich text",
    type: "array",
    of: [
      defineArrayMember({
        type: "block",
        styles: [{ title: "Normal", value: "normal" }],
        marks: {
          decorators: [
            { title: "Strong", value: "strong" },
            { title: "Emphasis", value: "em" },
          ],
          annotations: [
            {
              name: "link",
              type: "object",
              fields: [
                defineField({ name: "href", title: "URL", type: "url" }),
              ],
            },
          ],
        },
      }),
    ],
  }),
  defineType({
    name: "portableText",
    title: "Rich text",
    type: "array",
    of: [
      defineArrayMember({
        type: "block",
        styles: [
          { title: "Normal", value: "normal" },
          { title: "Heading 2", value: "h2" },
          { title: "Heading 3", value: "h3" },
          { title: "Heading 4", value: "h4" },
          { title: "Quote", value: "blockquote" },
        ],
      }),
      defineArrayMember({ type: "spidImage" }),
    ],
  }),
];
