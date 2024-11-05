const { test, expect } = require("@playwright/test");

test("check example.com title", async ({ page }) => {
  // Go to example.com
  await page.goto("https://example.com");

  // Get the title of the page
  const title = await page.title();

  // Log the title to the console
  console.log(title); // Should log "Example Domain"

  // Assert that the title is correct
  expect(title).toBe("Example Domain");
});
