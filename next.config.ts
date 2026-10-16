import type { NextConfig } from "next";
import { withSentryConfig } from "@sentry/nextjs/config";

const nextConfig: NextConfig = {
  compress: true,
  compiler: {
    // Tijdelijk alles aan voor debugging abonnement
    removeConsole: false,
  },
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 60 * 60 * 24 * 30,
  },
  experimental: {
    staleTimes: {
      dynamic: 60,
      static: 300,
    },
  },
};

export default withSentryConfig(nextConfig, {
  org: process.env.SENTRY_ORG,
  project: process.env.SENTRY_PROJECT,
  // Zonder SENTRY_AUTH_TOKEN slaat de plugin het uploaden van source maps
  // gewoon over (met een waarschuwing) — breekt de build niet.
  authToken: process.env.SENTRY_AUTH_TOKEN,
  silent: true,
});
