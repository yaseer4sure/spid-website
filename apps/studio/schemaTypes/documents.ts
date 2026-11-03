import { defineArrayMember, defineField, defineType } from "sanity";

const slug = defineField({
  name: "slug",
  title: "Slug",
  type: "slug",
  options: { source: "title", maxLength: 96 },
  validation: (rule) => rule.required(),
});
const summary = defineField({
  name: "summary",
  title: "Summary",
  type: "text",
  rows: 4,
  validation: (r) => r.required().min(80).max(300),
});
const reviewed = defineField({
  name: "lastReviewedAt",
  title: "Last reviewed",
  type: "date",
});
const internalNotes = defineField({
  name: "internalNotes",
  title: "Internal notes",
  type: "text",
});
const seo = defineField({ name: "seo", title: "SEO", type: "seo" });
const title = defineField({
  name: "title",
  title: "Title",
  type: "string",
  validation: (r) => r.required().max(100),
});

export const documentTypes = [
  defineType({
    name: "siteSettings",
    title: "Site settings",
    type: "document",
    fields: [
      defineField({
        name: "organisationName",
        title: "Organisation name",
        type: "string",
        validation: (r) => r.required(),
      }),
      defineField({
        name: "shortName",
        title: "Short name",
        type: "string",
        validation: (r) => r.required(),
      }),
      defineField({
        name: "tagline",
        title: "Tagline",
        type: "string",
        validation: (r) => r.required(),
      }),
      defineField({
        name: "publicEmail",
        title: "Public email",
        type: "email",
      }),
      defineField({
        name: "locationStatement",
        title: "Location statement",
        type: "string",
      }),
      defineField({
        name: "socialLinks",
        title: "Social links",
        type: "array",
        of: [{ type: "socialLink" }],
      }),
      defineField({
        name: "siteTitle",
        title: "Site title",
        type: "string",
        validation: (r) => r.required(),
      }),
      defineField({
        name: "defaultMetaDescription",
        title: "Default description",
        type: "text",
        validation: (r) => r.required(),
      }),
      defineField({ name: "siteUrl", title: "Site URL", type: "url" }),
      reviewed,
      internalNotes,
    ],
  }),
  defineType({
    name: "navigation",
    title: "Navigation",
    type: "document",
    fields: [
      defineField({
        name: "items",
        title: "Items",
        type: "array",
        validation: (r) => r.required().max(7),
        of: [
          defineArrayMember({
            type: "object",
            fields: [
              defineField({
                name: "label",
                title: "Label",
                type: "string",
                validation: (r) => r.required(),
              }),
              defineField({
                name: "href",
                title: "Path",
                type: "string",
                validation: (r) => r.required().regex(/^\/(?!\/)/),
              }),
              defineField({
                name: "visible",
                title: "Visible",
                type: "boolean",
                initialValue: true,
              }),
            ],
          }),
        ],
      }),
      defineField({
        name: "primaryAction",
        title: "Primary action",
        type: "callToAction",
        validation: (r) => r.required(),
      }),
      reviewed,
      internalNotes,
    ],
  }),
  defineType({
    name: "footer",
    title: "Footer",
    type: "document",
    fields: [
      defineField({
        name: "positioningStatement",
        title: "Positioning statement",
        type: "text",
        validation: (r) => r.required(),
      }),
      defineField({
        name: "newsletterEnabled",
        title: "Newsletter enabled",
        type: "boolean",
        initialValue: false,
      }),
      defineField({
        name: "copyrightText",
        title: "Copyright text",
        type: "string",
      }),
      reviewed,
    ],
  }),
  defineType({
    name: "homepage",
    title: "Homepage",
    type: "document",
    fields: [
      defineField({ name: "eyebrow", title: "Eyebrow", type: "string" }),
      defineField({
        name: "headline",
        title: "Headline",
        type: "string",
        validation: (r) => r.required(),
      }),
      defineField({
        name: "subheadline",
        title: "Subheadline",
        type: "text",
        validation: (r) => r.required(),
      }),
      defineField({
        name: "heroImage",
        title: "Hero image",
        type: "spidImage",
      }),
      defineField({
        name: "primaryAction",
        title: "Primary action",
        type: "callToAction",
        validation: (r) => r.required(),
      }),
      defineField({
        name: "secondaryAction",
        title: "Secondary action",
        type: "callToAction",
      }),
      defineField({
        name: "introduction",
        title: "Introduction",
        type: "simplePortableText",
      }),
      defineField({
        name: "featuredProgrammes",
        title: "Featured programmes",
        type: "array",
        of: [{ type: "reference", to: [{ type: "programme" }] }],
        validation: (r) => r.required().min(2).max(3),
      }),
      defineField({
        name: "impactMetrics",
        title: "Impact metrics",
        type: "array",
        of: [{ type: "reference", to: [{ type: "impactMetric" }] }],
        validation: (r) => r.max(4),
      }),
      defineField({
        name: "featuredInsight",
        title: "Featured insight",
        type: "reference",
        to: [{ type: "insight" }],
      }),
      defineField({
        name: "partners",
        title: "Partners",
        type: "array",
        of: [{ type: "reference", to: [{ type: "partner" }] }],
      }),
      seo,
      reviewed,
    ],
  }),
  defineType({
    name: "contactSettings",
    title: "Contact settings",
    type: "document",
    fields: [
      defineField({
        name: "pageHeading",
        title: "Page heading",
        type: "string",
        validation: (r) => r.required(),
      }),
      defineField({
        name: "pageIntroduction",
        title: "Introduction",
        type: "text",
        validation: (r) => r.required(),
      }),
      defineField({
        name: "publicEmail",
        title: "Public email",
        type: "email",
      }),
      defineField({
        name: "locationStatement",
        title: "Location statement",
        type: "string",
      }),
      defineField({
        name: "privacyNotice",
        title: "Privacy notice",
        type: "simplePortableText",
      }),
      defineField({
        name: "successHeading",
        title: "Success heading",
        type: "string",
        validation: (r) => r.required(),
      }),
      defineField({
        name: "successMessage",
        title: "Success message",
        type: "text",
        validation: (r) => r.required(),
      }),
      defineField({
        name: "failureMessage",
        title: "Failure message",
        type: "text",
        validation: (r) => r.required(),
      }),
      defineField({
        name: "directEmailFallback",
        title: "Fallback email",
        type: "email",
      }),
      reviewed,
    ],
  }),
  defineType({
    name: "page",
    title: "Page",
    type: "document",
    fields: [
      defineField({
        name: "pageKey",
        title: "Page key",
        type: "string",
        options: {
          list: [
            "about",
            "ourStory",
            "approach",
            "team",
            "governance",
            "ourWork",
            "impact",
            "insights",
            "partners",
            "getInvolved",
            "contact",
            "privacyPolicy",
            "terms",
            "accessibility",
          ],
        },
      }),
      title,
      slug,
      summary,
      defineField({ name: "body", title: "Body", type: "portableText" }),
      defineField({
        name: "primaryAction",
        title: "Primary action",
        type: "callToAction",
      }),
      seo,
      reviewed,
      internalNotes,
    ],
  }),
  defineType({
    name: "programme",
    title: "Programme",
    type: "document",
    groups: [
      "overview",
      "delivery",
      "evidence",
      "relationships",
      "actions",
      "seo",
      "internal",
    ].map((name) => ({ name, title: name[0].toUpperCase() + name.slice(1) })),
    fields: [
      title,
      defineField({
        name: "acronym",
        title: "Acronym",
        type: "string",
        group: "overview",
      }),
      slug,
      defineField({
        name: "programmeType",
        title: "Programme type",
        type: "string",
        options: {
          list: [
            "programme",
            "project",
            "fellowship",
            "initiative",
            "research",
            "campaign",
          ],
        },
        validation: (r) => r.required(),
        group: "overview",
      }),
      defineField({
        name: "status",
        title: "Status",
        type: "string",
        options: {
          list: [
            "draftDevelopment",
            "pilot",
            "active",
            "completed",
            "paused",
            "upcoming",
            "archived",
          ],
        },
        validation: (r) => r.required(),
        group: "overview",
      }),
      defineField({
        name: "applicationStatus",
        title: "Application status",
        type: "string",
        options: {
          list: ["notApplicable", "comingSoon", "open", "closed", "rolling"],
        },
        initialValue: "notApplicable",
        group: "overview",
      }),
      summary,
      defineField({
        name: "heroImage",
        title: "Hero image",
        type: "spidImage",
        group: "overview",
      }),
      defineField({
        name: "featured",
        title: "Featured",
        type: "boolean",
        initialValue: false,
        group: "overview",
      }),
      defineField({
        name: "overview",
        title: "Overview",
        type: "portableText",
        group: "overview",
      }),
      defineField({
        name: "whyItMatters",
        title: "Why it matters",
        type: "portableText",
        group: "overview",
      }),
      defineField({
        name: "locations",
        title: "Locations",
        type: "array",
        of: [{ type: "location" }],
        group: "overview",
      }),
      defineField({
        name: "methodologySteps",
        title: "Methodology",
        type: "array",
        of: [{ type: "methodologyStep" }],
        group: "delivery",
      }),
      defineField({
        name: "milestones",
        title: "Milestones",
        type: "array",
        of: [{ type: "milestone" }],
        group: "delivery",
      }),
      defineField({
        name: "expectedOutcomes",
        title: "Expected outcomes",
        type: "array",
        of: [{ type: "expectedOutcome" }],
        group: "delivery",
      }),
      defineField({
        name: "impactMetrics",
        title: "Impact metrics",
        type: "array",
        of: [{ type: "reference", to: [{ type: "impactMetric" }] }],
        group: "evidence",
      }),
      defineField({
        name: "relatedInsights",
        title: "Related insights",
        type: "array",
        of: [{ type: "reference", to: [{ type: "insight" }] }],
        group: "evidence",
      }),
      defineField({
        name: "frameworkAlignments",
        title: "Framework alignments",
        type: "array",
        of: [{ type: "frameworkAlignment" }],
        group: "evidence",
      }),
      defineField({
        name: "partners",
        title: "Partners",
        type: "array",
        of: [{ type: "reference", to: [{ type: "partner" }] }],
        group: "relationships",
      }),
      defineField({
        name: "primaryAction",
        title: "Primary action",
        type: "callToAction",
        validation: (r) => r.required(),
        group: "actions",
      }),
      seo,
      reviewed,
      internalNotes,
    ],
    preview: {
      select: { title: "title", subtitle: "status", media: "heroImage" },
    },
  }),
  defineType({
    name: "insight",
    title: "Insight",
    type: "document",
    fields: [
      defineField({
        name: "contentType",
        title: "Content type",
        type: "string",
        options: {
          list: [
            "blog",
            "policyBrief",
            "pressRelease",
            "communityStory",
            "research",
            "programmeUpdate",
          ],
        },
        validation: (r) => r.required(),
      }),
      title,
      slug,
      summary,
      defineField({
        name: "featuredImage",
        title: "Featured image",
        type: "spidImage",
      }),
      defineField({
        name: "featured",
        title: "Featured",
        type: "boolean",
        initialValue: false,
      }),
      defineField({
        name: "publishedAt",
        title: "Published at",
        type: "datetime",
        validation: (r) => r.required(),
      }),
      defineField({
        name: "organisationAuthor",
        title: "Organisation author",
        type: "string",
        validation: (r) => r.required(),
      }),
      defineField({
        name: "body",
        title: "Body",
        type: "portableText",
        validation: (r) => r.required(),
      }),
      defineField({
        name: "relatedProgrammes",
        title: "Related programmes",
        type: "array",
        of: [{ type: "reference", to: [{ type: "programme" }] }],
      }),
      defineField({
        name: "primaryResource",
        title: "Primary resource",
        type: "reference",
        to: [{ type: "resource" }],
        hidden: ({ parent }) =>
          parent?.contentType !== "policyBrief" &&
          parent?.contentType !== "research",
      }),
      defineField({
        name: "consentConfirmed",
        title: "Consent confirmed",
        type: "boolean",
        initialValue: false,
        hidden: ({ parent }) => parent?.contentType !== "communityStory",
      }),
      seo,
      reviewed,
      internalNotes,
    ],
    validation: (rule) =>
      rule.custom((value) =>
        value?.contentType !== "communityStory" || value.consentConfirmed
          ? true
          : "Community stories require confirmed consent.",
      ),
    preview: {
      select: {
        title: "title",
        subtitle: "contentType",
        media: "featuredImage",
      },
    },
  }),
  defineType({
    name: "person",
    title: "Person",
    type: "document",
    fields: [
      defineField({
        name: "fullName",
        title: "Full name",
        type: "string",
        validation: (r) => r.required(),
      }),
      defineField({ name: "roleTitle", title: "Role title", type: "string" }),
      defineField({
        name: "personType",
        title: "Person types",
        type: "array",
        of: [{ type: "string" }],
        options: {
          list: [
            "leadership",
            "staff",
            "communityManager",
            "adviser",
            "author",
            "facilitator",
            "volunteer",
          ],
        },
        validation: (r) => r.required(),
      }),
      defineField({
        name: "shortBiography",
        title: "Short biography",
        type: "text",
      }),
      defineField({
        name: "biography",
        title: "Biography",
        type: "portableText",
      }),
      defineField({ name: "portrait", title: "Portrait", type: "spidImage" }),
      defineField({ name: "email", title: "Private email", type: "email" }),
      defineField({
        name: "publicEmail",
        title: "Public email",
        type: "email",
      }),
      defineField({
        name: "isPublic",
        title: "Public",
        type: "boolean",
        initialValue: false,
      }),
      reviewed,
      internalNotes,
    ],
  }),
  defineType({
    name: "partner",
    title: "Partner",
    type: "document",
    fields: [
      defineField({
        name: "name",
        title: "Name",
        type: "string",
        validation: (r) => r.required(),
      }),
      defineField({
        name: "slug",
        title: "Slug",
        type: "slug",
        options: { source: "name", maxLength: 96 },
      }),
      defineField({
        name: "partnerType",
        title: "Partner types",
        type: "array",
        of: [{ type: "string" }],
        options: {
          list: [
            "communityOrganisation",
            "government",
            "academic",
            "research",
            "civilSociety",
            "privateSector",
            "technical",
            "developmentPartner",
            "philanthropic",
            "media",
          ],
        },
        validation: (r) => r.required(),
      }),
      defineField({ name: "logo", title: "Logo", type: "image" }),
      defineField({ name: "website", title: "Website", type: "url" }),
      defineField({
        name: "summary",
        title: "Public summary",
        type: "text",
        rows: 3,
        validation: (r) => r.max(300),
      }),
      defineField({
        name: "relationshipSummary",
        title: "Public relationship summary",
        type: "text",
        rows: 3,
        validation: (r) => r.max(300),
      }),
      defineField({
        name: "relatedProgrammes",
        title: "Related programmes",
        type: "array",
        of: [{ type: "reference", to: [{ type: "programme" }] }],
      }),
      defineField({
        name: "relationshipStatus",
        title: "Relationship status",
        type: "string",
        options: { list: ["active", "completed", "prospective", "historical"] },
        initialValue: "prospective",
        validation: (r) => r.required(),
      }),
      defineField({
        name: "approvalStatus",
        title: "Approval status",
        type: "string",
        options: { list: ["pending", "approved", "restricted"] },
        initialValue: "pending",
        validation: (r) => r.required(),
      }),
      defineField({
        name: "featured",
        title: "Featured",
        type: "boolean",
        initialValue: false,
      }),
      defineField({
        name: "isPublic",
        title: "Public",
        type: "boolean",
        initialValue: false,
      }),
      defineField({
        name: "displayOrder",
        title: "Display order",
        type: "number",
        validation: (r) => r.integer().min(0),
      }),
      defineField({
        name: "internalOwner",
        title: "Internal relationship owner",
        type: "string",
        validation: (r) => r.required(),
      }),
      reviewed,
      internalNotes,
    ],
    validation: (rule) =>
      rule.custom((value) => {
        if (!value?.isPublic) return true;
        if (value.approvalStatus !== "approved")
          return "Public partners must be approved.";
        if (!["active", "completed"].includes(String(value.relationshipStatus)))
          return "Public partners must have an active or completed relationship.";
        const logo = value.logo as { asset?: unknown } | undefined;
        if (!logo?.asset)
          return "Add an approved logo before making a partner public.";
        if (!value.lastReviewedAt)
          return "Record the review date before making a partner public.";
        return true;
      }),
    preview: {
      select: {
        title: "name",
        approval: "approvalStatus",
        relationship: "relationshipStatus",
        media: "logo",
      },
      prepare: ({ title, approval, relationship, media }) => ({
        title,
        subtitle: `${approval || "pending"} · ${relationship || "prospective"}`,
        media,
      }),
    },
  }),
  defineType({
    name: "impactMetric",
    title: "Impact metric",
    type: "document",
    fields: [
      title,
      defineField({
        name: "numericValue",
        title: "Numeric value",
        type: "number",
      }),
      defineField({
        name: "displayValueOverride",
        title: "Display override",
        type: "string",
      }),
      defineField({
        name: "label",
        title: "Label",
        type: "string",
        validation: (r) => r.required(),
      }),
      defineField({
        name: "publicContext",
        title: "Public context",
        type: "text",
        validation: (r) => r.required(),
      }),
      defineField({
        name: "featured",
        title: "Featured",
        type: "boolean",
        initialValue: false,
      }),
      defineField({
        name: "reportingPeriod",
        title: "Reporting period",
        type: "reportingPeriod",
        validation: (r) => r.required(),
      }),
      defineField({
        name: "locations",
        title: "Locations",
        type: "array",
        of: [{ type: "location" }],
        validation: (r) => r.required().min(1),
      }),
      defineField({
        name: "evidenceSourceType",
        title: "Evidence source type",
        type: "string",
        validation: (r) => r.required(),
      }),
      defineField({
        name: "evidenceSourceReference",
        title: "Evidence source reference",
        type: "text",
        validation: (r) => r.required(),
      }),
      defineField({
        name: "evidenceOwner",
        title: "Evidence owner",
        type: "string",
        validation: (r) => r.required(),
      }),
      defineField({
        name: "verificationStatus",
        title: "Verification status",
        type: "string",
        options: {
          list: ["unverified", "underReview", "verified", "withdrawn"],
        },
        initialValue: "unverified",
        validation: (r) => r.required(),
      }),
      defineField({ name: "verifiedBy", title: "Verified by", type: "string" }),
      defineField({
        name: "verifiedAt",
        title: "Verified at",
        type: "datetime",
      }),
      defineField({
        name: "isPublic",
        title: "Public",
        type: "boolean",
        initialValue: false,
      }),
      internalNotes,
    ],
    validation: (rule) =>
      rule.custom((value) => {
        if (value?.isPublic && value.verificationStatus !== "verified")
          return "Only verified metrics may be public.";
        if (
          value?.verificationStatus === "verified" &&
          (!value.verifiedBy || !value.verifiedAt)
        )
          return "Verified metrics require verifier and date.";
        return true;
      }),
  }),
  defineType({
    name: "resource",
    title: "Resource",
    type: "document",
    fields: [
      title,
      slug,
      defineField({
        name: "resourceType",
        title: "Resource type",
        type: "string",
        options: {
          list: [
            "policyBrief",
            "report",
            "researchPaper",
            "toolkit",
            "mediaKit",
            "governanceDocument",
            "dataset",
            "presentation",
            "other",
          ],
        },
        validation: (r) => r.required(),
      }),
      defineField({ name: "file", title: "File", type: "file" }),
      summary,
      defineField({
        name: "publishedAt",
        title: "Published at",
        type: "datetime",
      }),
      defineField({
        name: "organisationAuthor",
        title: "Organisation author",
        type: "string",
      }),
      defineField({
        name: "isPublic",
        title: "Public",
        type: "boolean",
        initialValue: false,
      }),
      seo,
      reviewed,
      internalNotes,
    ],
  }),
  defineType({
    name: "theme",
    title: "Theme",
    type: "document",
    fields: [
      title,
      slug,
      defineField({ name: "description", title: "Description", type: "text" }),
      defineField({ name: "colourKey", title: "Colour key", type: "string" }),
      defineField({
        name: "active",
        title: "Active",
        type: "boolean",
        initialValue: true,
      }),
      defineField({
        name: "displayOrder",
        title: "Display order",
        type: "number",
      }),
    ],
  }),
  defineType({
    name: "testimonial",
    title: "Testimonial",
    type: "document",
    fields: [
      defineField({
        name: "quote",
        title: "Quote",
        type: "text",
        validation: (r) => r.required(),
      }),
      defineField({
        name: "speakerName",
        title: "Speaker name",
        type: "string",
        validation: (r) => r.required(),
      }),
      defineField({ name: "role", title: "Role", type: "string" }),
      defineField({
        name: "organisation",
        title: "Organisation",
        type: "string",
      }),
      defineField({
        name: "consentConfirmed",
        title: "Consent confirmed",
        type: "boolean",
        initialValue: false,
      }),
      defineField({
        name: "approvalStatus",
        title: "Approval status",
        type: "string",
        options: { list: ["pending", "approved", "withdrawn"] },
        initialValue: "pending",
      }),
      defineField({
        name: "isPublic",
        title: "Public",
        type: "boolean",
        initialValue: false,
      }),
      reviewed,
      internalNotes,
    ],
    validation: (rule) =>
      rule.custom((value) =>
        value?.isPublic &&
        (value.approvalStatus !== "approved" || !value.consentConfirmed)
          ? "Public testimonials require approval and consent."
          : true,
      ),
  }),
];
