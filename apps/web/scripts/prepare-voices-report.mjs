import { createHash } from "node:crypto";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { chromium } from "@playwright/test";

const webRoot = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  "..",
);
const source = path.join(
  webRoot,
  "src/content/research/voices-from-the-ward/Voices from the Ward.html",
);
const outputDirectory = path.join(
  webRoot,
  "public/research/voices-from-the-ward",
);
const publicHtml = path.join(outputDirectory, "report.html");
const publicPdf = path.join(
  outputDirectory,
  "voices-from-the-ward-spid-research-report.pdf",
);
const original = await readFile(source, "utf8");
const sourceHash = createHash("sha256").update(original).digest("hex");
const prepared = original
  .replace("<html>", '<html lang="en">')
  .replace(
    /<link rel="preconnect" href="https:\/\/fonts\.(?:googleapis|gstatic)\.com"[^>]*>\s*/g,
    "",
  )
  .replace(/<link[^>]+href="https:\/\/fonts\.googleapis\.com[^>]*>\s*/g, "");
await mkdir(outputDirectory, { recursive: true });
await writeFile(publicHtml, prepared, "utf8");
const browser = await chromium.launch({ headless: true });
try {
  const page = await browser.newPage({
    viewport: { width: 1440, height: 1000 },
  });
  await page.goto(pathToFileURL(publicHtml).href, { waitUntil: "load" });
  await page.emulateMedia({ media: "print" });
  await page.pdf({
    path: publicPdf,
    format: "A4",
    printBackground: true,
    preferCSSPageSize: true,
    margin: { top: "0", right: "0", bottom: "0", left: "0" },
  });
} finally {
  await browser.close();
}
const afterHash = createHash("sha256")
  .update(await readFile(source, "utf8"))
  .digest("hex");
if (afterHash !== sourceHash)
  throw new Error(
    "The authoritative source report changed during preparation.",
  );
console.log(JSON.stringify({ sourceHash, publicHtml, publicPdf }, null, 2));
