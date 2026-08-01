import type { Template } from "sanity";
import { documentTypes } from "./documents";
import { objectTypes } from "./objects";

export const schemaTypes = [...objectTypes, ...documentTypes];

const template = (
  id: string,
  title: string,
  schemaType: string,
  value: Record<string, unknown>,
): Template => ({
  id,
  title,
  schemaType,
  value,
});

export const templates = [
  template("programme-cpi4cg", "CPI4CG programme", "programme", {
    title: "Community-led Participatory Initiative for Climate Governance",
    acronym: "CPI4CG",
    slug: { current: "cpi4cg" },
    programmeType: "initiative",
    status: "pilot",
    featured: true,
    applicationStatus: "notApplicable",
  }),
  template("programme-ayede", "AYEDE programme", "programme", {
    title: "AYEDE 4 Climate Action Fellowship",
    acronym: "AYEDE",
    slug: { current: "ayede" },
    programmeType: "fellowship",
    status: "active",
    featured: true,
    applicationStatus: "closed",
  }),
  template("programme-iicare", "IICARE draft", "programme", {
    title:
      "Integrated Initiative for Climate Adaptation and Resilience Empowerment",
    acronym: "IICARE",
    slug: { current: "iicare" },
    programmeType: "initiative",
    status: "draftDevelopment",
    featured: false,
    applicationStatus: "notApplicable",
  }),
  ...[
    "blog",
    "policyBrief",
    "pressRelease",
    "communityStory",
    "research",
    "programmeUpdate",
  ].map((contentType) =>
    template(`insight-${contentType}`, `New ${contentType}`, "insight", {
      contentType,
      featured: false,
      consentConfirmed: false,
    }),
  ),
  template("impact-safe", "Impact metric (unverified)", "impactMetric", {
    verificationStatus: "unverified",
    isPublic: false,
    featured: false,
  }),
  template("partner-safe", "Partner (pending review)", "partner", {
    approvalStatus: "pending",
    relationshipStatus: "prospective",
    isPublic: false,
    featured: false,
  }),
  template("testimonial-safe", "Testimonial (pending consent)", "testimonial", {
    approvalStatus: "pending",
    consentConfirmed: false,
    isPublic: false,
  }),
];
