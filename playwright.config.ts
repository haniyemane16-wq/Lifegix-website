import { defineConfig } from "@playwright/test";

// Deze suite draait met opzet tegen de ECHTE live site (geen lokale build),
// want lokaal/CI bouwen zonder de productie-secrets (Anthropic, Notion, Mollie)
// test niets zinnigs van de dingen die hier gecontroleerd worden. Dat maakt
// deze suite meteen ook een vorm van monitoring: als lifegix.nl zelf kapot is,
// faalt de scheduled run in .github/workflows/smoke.yml.
export default defineConfig({
  testDir: "./e2e",
  timeout: 30_000,
  retries: 1,
  use: {
    baseURL: process.env.SMOKE_BASE_URL ?? "https://lifegix.nl",
  },
});
