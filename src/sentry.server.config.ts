import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: process.env.SENTRY_DSN,
  // Lage sample rate: dit is een klein project, we hoeven niet elke request
  // te tracen — alleen fouten zijn waar we naar op zoek zijn.
  tracesSampleRate: 0.1,
  enabled: !!process.env.SENTRY_DSN,
});
