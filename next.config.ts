import type { NextConfig } from "next";

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

export default nextConfig;
