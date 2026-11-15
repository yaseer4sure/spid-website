import { describe, expect, it } from "vitest";
import { navItems, resolveNavigationItems } from "./navigation";

describe("resolveNavigationItems", () => {
  it("restores Home first when published navigation omits it", () => {
    expect(
      resolveNavigationItems([
        { label: "About", href: "/about", visible: true },
        { label: "Our Work", href: "/our-work", visible: true },
      ]),
    ).toEqual([
      { label: "Home", href: "/" },
      { label: "About", href: "/about" },
      { label: "Our Work", href: "/our-work" },
    ]);
  });

  it("does not duplicate an editor-provided Home destination", () => {
    const resolved = resolveNavigationItems([
      { label: "Start", href: "/", visible: true },
      { label: "About", href: "/about", visible: true },
      { label: "Hidden", href: "/hidden", visible: false },
    ]);

    expect(resolved).toEqual([
      { label: "Home", href: "/" },
      { label: "About", href: "/about" },
    ]);
  });

  it("uses the complete approved fallback when CMS navigation is empty", () => {
    expect(resolveNavigationItems([])).toEqual(navItems);
  });
});
