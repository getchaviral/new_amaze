import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,

  // The client logo wall includes one SVG (Royal Canin). next/og-style SVG
  // responses are served with a `script-src 'none'` CSP header, so they cannot
  // execute script — see the Next.js images config docs.
  images: {
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",

    // No source photograph is wider than ~1672px, yet `sizes` was letting the
    // two home-page carousels request 3840px. Vercel's optimizer began
    // answering INVALID_IMAGE_OPTIMIZE_REQUEST for the heaviest of them, which
    // blanked a slide in production. Capping the generated widths keeps every
    // request at or below the real source size — and stops a ~550px slot
    // pulling down a 700KB file it will never display.
    deviceSizes: [320, 480, 640, 750, 828, 1080, 1200, 1280],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
  },

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
