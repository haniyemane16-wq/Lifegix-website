// Laadt Sentry server-side error-tracking. Zonder SENTRY_DSN gezet, doet
// Sentry.init() niets (geen crash, geen verzonden data) — veilig om te
// deployen voordat die env var bestaat.
export async function register() {
  if (process.env.NEXT_RUNTIME === "nodejs") {
    await import("./sentry.server.config");
  }

  if (process.env.NEXT_RUNTIME === "edge") {
    await import("./sentry.edge.config");
  }
}

export const onRequestError = async (...args: Parameters<typeof import("@sentry/nextjs").captureRequestError>) => {
  const Sentry = await import("@sentry/nextjs");
  Sentry.captureRequestError(...args);
};
