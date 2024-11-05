import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "./tests",
  timeout: 30000, // 30 seconds per test
  use: {
    headless: false, // Run in headless mode for CI
    baseURL: "http://localhost:3000", // Your app's base URL
  },
});
