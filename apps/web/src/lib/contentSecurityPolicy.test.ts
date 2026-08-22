import { describe, expect, it } from "vitest";
import { frameAncestors, studioOriginForBuild } from "./contentSecurityPolicy";

describe("frameAncestors", () => {
  it("allows the deployed and local Sanity Studio origins", () => {
    expect(frameAncestors("https://spid-website-studio.vercel.app")).toBe(
      "'self' http://localhost:3333 https://spid-website-studio.vercel.app",
    );
  });

  it("does not allow wildcard or malformed origins", () => {
    const malformedValue = frameAncestors("*");
    const wildcardValue = frameAncestors("https://*.vercel.app");

    expect(malformedValue).toBe("'self' http://localhost:3333");
    expect(wildcardValue).toBe("'self' http://localhost:3333");
  });

  it("uses only the origin portion of the configured Studio URL", () => {
    expect(frameAncestors("https://studio.example.org/path?ignored=true")).toBe(
      "'self' http://localhost:3333 https://studio.example.org",
    );
  });

  it("prevents a Vercel build without a deployed Studio origin", () => {
    expect(() => studioOriginForBuild(undefined, true)).toThrow(
      "NEXT_PUBLIC_SANITY_STUDIO_URL",
    );
    expect(() => studioOriginForBuild("http://localhost:3333", true)).toThrow(
      "NEXT_PUBLIC_SANITY_STUDIO_URL",
    );
    expect(
      studioOriginForBuild("https://spid-website-studio.vercel.app", true),
    ).toBe("https://spid-website-studio.vercel.app");
  });
});
