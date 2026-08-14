import { expect, test } from "@playwright/test";

test("homepage to CPI4CG to insight to engagement and form", async ({
  page,
}) => {
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
  await page.getByRole("link", { name: "Read insight" }).click();
  await expect(
    page.getByText("Non-production development placeholder"),
  ).toBeVisible({ timeout: 60_000 });
  await page.getByRole("link", { name: "Get involved", exact: true }).click();
  await page.getByRole("link", { name: "Start this enquiry" }).first().click();
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
