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
  await page.getByRole("link", { name: "View programme" }).first().click();
  await expect(page).toHaveURL(/\/our-work\/cpi4cg$/);
  await expect(page.getByText("368")).toBeVisible();
  await page.getByRole("link", { name: "Start a partnership enquiry" }).click();
  await expect(page).toHaveURL(/\/contact\?type=partnership$/);
  await expect(page.getByLabel("Enquiry type")).toHaveValue("partnership", {
    timeout: 60_000,
  });
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
