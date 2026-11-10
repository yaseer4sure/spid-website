import { expect, test } from "@playwright/test";

test("homepage to CPI4CG to engagement and form", async ({ page }) => {
  test.setTimeout(120_000);
  await page.route("https://challenges.cloudflare.com/**", (route) =>
    route.abort(),
  );
  await page.goto("/");
  await expect(
    page.getByRole("heading", {
      name: "Locally Led. Youth Driven. Climate Resilient.",
    }),
  ).toBeVisible();
  await page.getByRole("link", { name: "View Programme" }).first().click();
  await expect(page).toHaveURL(/\/our-work\/cpi4cg$/);
  await expect(page.getByText("368")).toBeVisible();
  await page.getByRole("link", { name: "Start a partnership enquiry" }).click();
  await expect(page).toHaveURL(/\/contact\?type=partnership$/);
  await expect(page.getByLabel("Enquiry type")).toHaveValue("partnership", {
    timeout: 60_000,
  });
  await expect(
    page.getByRole("heading", { name: "Nigeria | Working Across Africa" }),
  ).toBeVisible();
  await page.getByLabel("Name").fill("Amina Bello");
  await page.getByLabel("Email").fill("amina@example.org");
  await page
    .getByLabel("How would you like to engage?")
    .fill(
      "We would like to discuss a responsible climate-governance partnership.",
    );
  await page
    .getByLabel(
      "I agree that SPiD may use these details to respond to this enquiry.",
    )
    .check();
  await page.getByRole("button", { name: "Send enquiry" }).click();
  await expect(page.getByText("Complete the anti-spam check.")).toBeVisible();
});

test("development insight remains noindex and is not promoted", async ({
  page,
}) => {
  await page.goto("/insights");
  await expect(
    page.getByRole("heading", {
      name: "Knowledge. Evidence. Community Voices.",
    }),
  ).toBeVisible();
  await expect(page.getByRole("link", { name: "Read insight" })).toHaveCount(0);
  await page.goto("/insights/participatory-climate-governance-local-evidence");
  await expect(page.locator('meta[name="robots"]')).toHaveAttribute(
    "content",
    /noindex, nofollow/,
  );
});

test("draft content stays out of public discovery", async ({
  page,
  request,
}) => {
  const iicare = await request.get("/our-work/iicare");
  expect(iicare.status()).toBe(404);

  const sitemap = await (await request.get("/sitemap.xml")).text();
  expect(sitemap).not.toContain("/our-work/iicare");
  expect(sitemap).not.toContain(
    "/insights/participatory-climate-governance-local-evidence",
  );

  await page.goto("/our-work");
  await expect(page.getByText("IICARE", { exact: true })).toHaveCount(0);
});

test("mobile navigation exposes the core journey", async ({
  page,
}, testInfo) => {
  test.skip(testInfo.project.name !== "mobile");
  await page.goto("/");
  await page.getByRole("button", { name: "Menu" }).click();
  await expect(
    page
      .getByLabel("Mobile navigation")
      .getByRole("link", { name: "Get Involved" }),
  ).toBeVisible();
  await page.getByRole("button", { name: "Close" }).click();
});

test("Draft Mode cannot be enabled without a valid Presentation secret", async ({
  request,
}) => {
  const response = await request.get("/api/draft-mode/enable", {
    maxRedirects: 0,
  });

  expect(response.status()).toBe(401);
  expect(await response.text()).toBe("Invalid secret");
});

test("official social links and partner pathways are public", async ({
  page,
}) => {
  await page.goto("/");
  await expect(
    page.getByRole("heading", {
      name: "Partnerships That Drive Climate Action",
    }),
  ).toBeVisible();
  await expect(
    page.getByRole("link", { name: "View All Partners" }),
  ).toHaveAttribute("href", "/partners");

  const destinations = [
    [
      "Instagram",
      "https://www.instagram.com/spidclimateresilience?vrfl=eGljbmZyNHhsYTQ4",
    ],
    ["X", "https://x.com/spid_org"],
    ["LinkedIn", "https://www.linkedin.com/company/spidclimateresilience/"],
    ["Facebook", "https://www.facebook.com/share/19gaDUHJZ1/"],
  ] as const;

  for (const [platform, url] of destinations) {
    const link = page.getByRole("link", {
      name: `SPiD on ${platform} (opens in a new tab)`,
    });
    await expect(link).toHaveAttribute("href", url);
    await expect(link).toHaveAttribute("target", "_blank");
    await expect(link).toHaveAttribute("rel", /noopener/);
  }

  await page.goto("/partners");
  await expect(
    page.getByRole("heading", {
      name: "Partnerships That Drive Climate Action",
    }),
  ).toBeVisible();
  await expect(
    page.getByRole("link", { name: "Become a Strategic Partner" }),
  ).toHaveAttribute("href", "/get-involved");
});

test("about purpose, portraits, and footer address remain responsive", async ({
  page,
}, testInfo) => {
  test.skip(testInfo.project.name !== "chromium");
  test.setTimeout(120_000);

  for (const width of [360, 390, 768, 1024, 1280, 1440]) {
    await page.setViewportSize({ width, height: 900 });
    await page.goto("/about");

    await expect(
      page.getByRole("heading", { name: "Our Vision" }),
    ).toBeVisible();
    await expect(
      page.getByRole("heading", { name: "Our Mission" }),
    ).toBeVisible();
    await expect(
      page.getByRole("img", {
        name: "Abdulbasit Salahudeen Mikail, SPiD team member",
      }),
    ).toBeVisible();
    await expect(
      page.getByRole("img", {
        name: "Jecinta Egbim, SPiD Advisory Board member",
      }),
    ).toBeVisible();

    const footer = page.getByRole("contentinfo");
    await expect(footer.getByText("Office Address")).toBeVisible();
    await expect(footer.getByText("43A, Ruwan Godiya Street,")).toBeVisible();
    await expect(
      footer.getByText("Opposite Gwandu, Unguwar Sarki,"),
    ).toBeVisible();
    await expect(footer.getByText("Kaduna State, Nigeria.")).toBeVisible();

    const widths = await page.evaluate(() => ({
      client: document.documentElement.clientWidth,
      scroll: document.documentElement.scrollWidth,
    }));
    expect(widths.scroll).toBeLessThanOrEqual(widths.client);
  }
});

test("owner-approved impact dashboard values render and reflow", async ({
  page,
}, testInfo) => {
  test.skip(testInfo.project.name !== "chromium");
  test.setTimeout(120_000);

  for (const width of [360, 390, 768, 1024, 1280, 1440]) {
    await page.setViewportSize({ width, height: 900 });
    await page.goto("/impact");

    const dashboard = page.getByRole("region", {
      name: "SPiD impact indicators",
    });
    await expect(dashboard).toBeVisible();
    for (const label of [
      "Communities Reached",
      "People Impacted",
      "Projects Implemented",
      "Pipeline Projects",
    ]) {
      await expect(dashboard.getByText(label)).toBeVisible();
    }
    await expect(dashboard.getByText("14")).toBeVisible();
    await expect(dashboard.getByText("6,500+")).toBeVisible();
    await expect(dashboard.getByText(/pending verification/i)).toHaveCount(0);
    await expect(
      page.getByRole("img", {
        name: "A farmer standing in a green agricultural landscape in Nigeria",
      }),
    ).toHaveCount(0);

    const widths = await page.evaluate(() => ({
      client: document.documentElement.clientWidth,
      scroll: document.documentElement.scrollWidth,
    }));
    expect(widths.scroll).toBeLessThanOrEqual(widths.client);
  }
});

test("navigation exposes Home and the non-transactional donation preview", async ({
  page,
}, testInfo) => {
  await page.goto("/about");
  if (testInfo.project.name === "mobile") {
    await page.getByRole("button", { name: "Menu" }).click();
  }
  await expect(
    page.getByRole("link", { name: "Home", exact: true }),
  ).toBeVisible();
  await page
    .getByRole("link", { name: /Donate/ })
    .first()
    .click();
  await expect(page).toHaveURL(/\/donate$/);
  await expect(
    page.getByRole("button", { name: /coming soon/i }),
  ).toBeDisabled();
  await expect(page.getByText(/No payment will be taken/i)).toBeVisible();
});

test("Voices from the Ward is integrated without changing impact totals", async ({
  page,
  request,
}) => {
  expect(
    (await request.get("/insights/voices-from-the-ward")).ok(),
  ).toBeTruthy();
  await page.goto("/insights/voices-from-the-ward");
  await expect(
    page.getByRole("heading", { name: "Voices from the Ward", level: 1 }),
  ).toBeVisible();
  await expect(page.locator('meta[name="robots"]')).toHaveAttribute(
    "content",
    /noindex, nofollow/,
  );
  await expect(
    page.getByRole("link", { name: "Read Full Report" }),
  ).toHaveAttribute("href", "/insights/voices-from-the-ward/read");
  const report = await request.get(
    "/research/voices-from-the-ward/report.html",
  );
  expect(report.ok()).toBeTruthy();
  expect(await report.text()).toContain("<title>Voices from the Ward</title>");
  expect(
    (
      await request.get(
        "/research/voices-from-the-ward/voices-from-the-ward-spid-research-report.pdf",
      )
    ).ok(),
  ).toBeTruthy();
  for (const route of ["/", "/insights", "/our-work/cpi4cg"]) {
    await page.goto(route);
    await expect(
      page.getByText("Voices from the Ward", { exact: true }).first(),
    ).toBeVisible();
  }
  await page.goto("/impact");
  await expect(
    page.getByRole("heading", { name: "Evidence From the Field" }),
  ).toBeVisible();
  await expect(
    page.getByText(/not SPiD organisation-wide impact totals/),
  ).toBeVisible();
  await expect(
    page.getByRole("region", { name: "SPiD impact indicators" }),
  ).toBeVisible();
  expect(await (await request.get("/sitemap.xml")).text()).not.toContain(
    "voices-from-the-ward",
  );
});

test("publication layouts reflow without horizontal overflow", async ({
  page,
}, testInfo) => {
  test.skip(testInfo.project.name !== "chromium");
  test.setTimeout(120_000);
  for (const width of [360, 390, 768, 1024, 1280, 1440]) {
    await page.setViewportSize({ width, height: 900 });
    for (const route of [
      "/insights/voices-from-the-ward",
      "/impact",
      "/our-work/cpi4cg",
    ]) {
      await page.goto(route);
      const widths = await page.evaluate(() => ({
        client: document.documentElement.clientWidth,
        scroll: document.documentElement.scrollWidth,
      }));
      expect(widths.scroll).toBeLessThanOrEqual(widths.client);
    }
  }
  await page.goto("/insights/voices-from-the-ward/read");
  await expect(
    page.getByTitle("Full report: Voices from the Ward"),
  ).toBeVisible();
  await expect(
    page.getByRole("link", { name: "Back to publication" }),
  ).toBeVisible();
});

test("social and partner layouts reflow without horizontal overflow", async ({
  page,
}, testInfo) => {
  test.skip(testInfo.project.name !== "chromium");

  for (const viewport of [
    { width: 360, height: 800 },
    { width: 768, height: 1024 },
    { width: 1440, height: 900 },
  ]) {
    await page.setViewportSize(viewport);
    for (const route of ["/", "/partners", "/contact"]) {
      await page.goto(route);
      const widths = await page.evaluate(() => ({
        client: document.documentElement.clientWidth,
        scroll: document.documentElement.scrollWidth,
      }));
      expect(widths.scroll).toBeLessThanOrEqual(widths.client);
    }

    await page.goto("/contact");
    const socialTargets = page
      .getByRole("navigation", {
        name: "Connect with SPiD on social media",
      })
      .getByRole("link");
    await expect(socialTargets).toHaveCount(4);
    for (const target of await socialTargets.all()) {
      const box = await target.boundingBox();
      expect(box?.height).toBeGreaterThanOrEqual(44);
      expect(box?.width).toBeGreaterThanOrEqual(44);
    }
  }
});
