import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Let phones/laptops on the home network open the dev server (e.g. http://192.168.1.20:3000).
  // Dev-only: production builds ignore this.
  allowedDevOrigins: ["192.168.*.*", "10.*.*.*", "*.local"],
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
