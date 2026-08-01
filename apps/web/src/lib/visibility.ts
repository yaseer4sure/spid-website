export type MetricVisibility = {
  isPublic?: boolean;
  verificationStatus?: string;
};
export type PartnerVisibility = {
  isPublic?: boolean;
  approvalStatus?: string;
  relationshipStatus?: string;
};
export type TestimonialVisibility = {
  isPublic?: boolean;
  approvalStatus?: string;
  consentConfirmed?: boolean;
};
export type ProgrammeVisibility = {
  _id?: string;
  slug?: string;
  status?: string;
};

export const isPublicMetric = (metric: MetricVisibility) =>
  metric.isPublic === true && metric.verificationStatus === "verified";
export const isPublicPartner = (partner: PartnerVisibility) =>
  partner.isPublic === true &&
  partner.approvalStatus === "approved" &&
  ["active", "completed"].includes(partner.relationshipStatus || "");
export const isPublicTestimonial = (item: TestimonialVisibility) =>
  item.isPublic === true &&
  item.approvalStatus === "approved" &&
  item.consentConfirmed === true;
export const isPublicProgramme = (programme: ProgrammeVisibility) =>
  !programme._id?.startsWith("drafts.") &&
  programme.slug !== "iicare" &&
  programme.status !== "draftDevelopment";
