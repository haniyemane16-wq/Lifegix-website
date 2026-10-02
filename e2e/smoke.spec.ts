import { test, expect } from "@playwright/test";

// Deze suite raakt met opzet NOOIT het contactformulier, de bestelflow of
// betalingen aan: die sturen echte e-mails, maken echte Mollie-transacties en
// Notion CRM-entries aan. Dat willen we niet elke keer dat deze suite draait
// (meerdere keren per dag, zie .github/workflows/smoke.yml). Alleen read-only
// paden en de kapsalon-chatbot (goedkope Haiku-call) worden hier getest.

test("homepage laadt en toont de juiste titel", async ({ page }) => {
  await page.goto("/");
  await expect(page).toHaveTitle(/Lifegix/);
});

test("privacy- en voorwaardenpagina's zijn bereikbaar", async ({ page }) => {
  const privacy = await page.goto("/privacy");
  expect(privacy?.status()).toBe(200);

  const voorwaarden = await page.goto("/voorwaarden");
  expect(voorwaarden?.status()).toBe(200);
});

test("kapsalon davines demo laadt", async ({ page }) => {
  await page.goto("/demo/kapsalon");
  await expect(page).toHaveTitle(/Kapsalon Davines/);
});

test("kapsalon chatbot API beantwoordt een normale vraag", async ({ request }) => {
  const res = await request.post("/api/demo/kapsalon-chat", {
    data: {
      messages: [{ role: "user", content: "Wat kost knippen voor dames?" }],
    },
  });
  expect(res.status()).toBe(200);
  const body = await res.json();
  expect(body.message).toBeTruthy();
  expect(body.message.length).toBeGreaterThan(0);
});

test("subdomein kapsalondavines.lifegix.nl routeert naar de juiste pagina", async ({
  page,
}) => {
  // Regressietest voor een eerder gevonden bug: de proxy herschreef
  // /api/demo/kapsalon-chat op het subdomein naar een niet-bestaand pad,
  // waardoor de chatbot daar volledig stuk was (404).
  const res = await page.goto("https://kapsalondavines.lifegix.nl/");
  expect(res?.status()).toBe(200);
  await expect(page).toHaveTitle(/Kapsalon Davines/);
});
