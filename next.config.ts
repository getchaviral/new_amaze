import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,

  // The old /category/... pages 404 today. The redesign's SEO artboard asks for
  // permanent redirects so nothing is lost when they come back.
  async redirects() {
    return [
      {
        source: "/category/surfacing",
        destination: "/",
        permanent: true,
      },
      {
        source: "/category/camping",
        destination: "/",
        permanent: true,
      },
    ];
  },
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
