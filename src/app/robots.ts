import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";

/**
 * Mirrors the robots.txt specified in the redesign's SEO artboard — on the live
 * site this path currently returns the homepage HTML, which gives crawlers no
 * instructions at all.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/app/", "/_next/"],
      },
    ],
    sitemap: `${SITE.url}/sitemap.xml`,
  };
}
