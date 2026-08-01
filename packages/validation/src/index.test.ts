import { describe, expect, it } from "vitest";
import { contactSchema } from "./index";

const valid = {
  enquiryType: "partnership",
  name: "Amina Bello",
  email: "amina@example.org",
  organisation: "Example Foundation",
  message: "We would like to discuss a climate-governance partnership.",
  consent: true,
  turnstileToken: "test-token",
  company: "",
  sourcePage: "/contact",
} as const;

describe("contactSchema", () => {
  it("accepts a valid partnership enquiry", () => {
    expect(contactSchema.safeParse(valid).success).toBe(true);
  });

  it("rejects short messages and missing consent", () => {
    const result = contactSchema.safeParse({
      ...valid,
      message: "Hello",
      consent: false,
    });
    expect(result.success).toBe(false);
  });
});
