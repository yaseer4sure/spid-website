import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { approvedSocialLinks } from "@/content/social";
import { SocialLinks } from "./SocialLinks";

describe("SocialLinks", () => {
  it("renders accessible external links for every approved platform", () => {
    render(<SocialLinks links={approvedSocialLinks} labelled />);

    for (const link of approvedSocialLinks) {
      const element = screen.getByRole("link", {
        name: new RegExp(link.platform === "x" ? "X" : link.platform, "i"),
      });
      expect(element).toHaveAttribute("href", link.url);
      expect(element).toHaveAttribute("target", "_blank");
      expect(element).toHaveAttribute("rel", "noopener noreferrer");
    }
  });
});
