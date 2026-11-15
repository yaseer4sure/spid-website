import { describe, expect, it } from "vitest";
import { legacyRedirects, trailingSlashRedirect } from "./legacy-redirects";

describe("legacy WordPress redirects", () => {
  it("uses unique permanent redirects with direct destinations", () => {
    const sources = legacyRedirects.map(({ source }) => source);

    expect(new Set(sources).size).toBe(sources.length);
    expect(legacyRedirects.every(({ permanent }) => permanent)).toBe(true);
    expect(
      legacyRedirects.every(
        ({ source, destination }) =>
          source !== destination &&
          !sources.includes(destination.split("?", 1)[0] || ""),
      ),
    ).toBe(true);
  });

  it("maps established legacy journeys to their approved equivalents", () => {
    expect(legacyRedirects).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          source: "/who-we-are",
          destination: "/about",
        }),
        expect.objectContaining({
          source: "/our-works",
          destination: "/our-work",
        }),
        expect.objectContaining({ source: "/impacts", destination: "/impact" }),
        expect.objectContaining({
          source: "/partner-with-us",
          destination: "/contact?type=partnership",
        }),
      ]),
    );
  });

  it("handles original trailing-slash URLs before canonical normalization", () => {
    expect(legacyRedirects).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          source: "/who-we-are/",
          destination: "/about",
        }),
        expect.objectContaining({
          source: "/partner-with-us/",
          destination: "/contact?type=partnership",
        }),
      ]),
    );
    expect(trailingSlashRedirect).toEqual({
      source: "/:path+/",
      destination: "/:path+",
      permanent: true,
    });
  });

  it("does not redirect unapproved report and default WordPress content", () => {
    const sources = legacyRedirects.map(({ source }) => source);

    expect(sources).not.toContain("/project-reports");
    expect(sources).not.toContain("/annual-reports");
    expect(sources).not.toContain("/financial-reports");
    expect(sources).not.toContain("/roports");
    expect(sources).not.toContain("/blog/hello-world");
    expect(sources).not.toContain("/blog/category/uncategorized");
  });
});
