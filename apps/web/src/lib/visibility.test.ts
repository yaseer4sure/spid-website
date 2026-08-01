import { describe, expect, it } from "vitest";
import {
  isPublicMetric,
  isPublicPartner,
  isPublicProgramme,
  isPublicTestimonial,
} from "./visibility";

describe("public visibility guards", () => {
  it("excludes unverified metrics even when public is selected", () => {
    expect(
      isPublicMetric({ isPublic: true, verificationStatus: "unverified" }),
    ).toBe(false);
    expect(
      isPublicMetric({ isPublic: true, verificationStatus: "verified" }),
    ).toBe(true);
  });
  it("excludes pending or prospective partners", () => {
    expect(
      isPublicPartner({
        isPublic: true,
        approvalStatus: "pending",
        relationshipStatus: "active",
      }),
    ).toBe(false);
    expect(
      isPublicPartner({
        isPublic: true,
        approvalStatus: "approved",
        relationshipStatus: "prospective",
      }),
    ).toBe(false);
  });
  it("requires testimonial approval and consent", () => {
    expect(
      isPublicTestimonial({
        isPublic: true,
        approvalStatus: "approved",
        consentConfirmed: false,
      }),
    ).toBe(false);
  });
  it("always excludes IICARE and drafts", () => {
    expect(isPublicProgramme({ slug: "iicare", status: "active" })).toBe(false);
    expect(
      isPublicProgramme({
        _id: "drafts.programme-cpi4cg",
        slug: "cpi4cg",
        status: "pilot",
      }),
    ).toBe(false);
  });
});
