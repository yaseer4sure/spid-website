import { describe, expect, it } from "vitest";
import { approvedSocialLinks, normaliseSocialLinks } from "./social";

describe("social link configuration", () => {
  it("provides all four owner-approved destinations as fallbacks", () => {
    expect(normaliseSocialLinks(undefined)).toEqual(approvedSocialLinks);
  });

  it("accepts supported secure CMS links and ignores unsupported platforms", () => {
    const links = normaliseSocialLinks([
      { platform: "linkedin", url: "https://linkedin.com/company/spid" },
      { platform: "unknown", url: "https://example.com" },
      { platform: "x", url: "http://insecure.example.com" },
    ]);

    expect(links.find((link) => link.platform === "linkedin")?.url).toBe(
      "https://linkedin.com/company/spid",
    );
    expect(links).toHaveLength(4);
    expect(links.some((link) => link.url === "https://example.com")).toBe(
      false,
    );
  });
});
