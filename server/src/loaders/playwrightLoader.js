import { chromium } from "playwright";
import { Document } from "@langchain/core/documents";

export async function loadWebsite(url) {
  const browser = await chromium.launch({
    headless: true,
  });

  const page = await browser.newPage();

  await page.goto(url, {
    waitUntil: "networkidle",
  });

  const pageContent = await page.locator("body").innerText();

  const title = await page.title();

  await browser.close();

  return [
    new Document({
      pageContent,
      metadata: {
        source: url,
        title,
      },
    }),
  ];
}