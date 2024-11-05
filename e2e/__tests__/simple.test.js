const { chromium } = require("playwright");

(async () => {
  const browser = await chromium.launch({ headless: false }); // Set headless: false to see the browser
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto("https://example.com"); // Navigate to a public URL
  const title = await page.title();
  console.log(title); // Log the title to the console
  await browser.close(); // Close the browser
})();
