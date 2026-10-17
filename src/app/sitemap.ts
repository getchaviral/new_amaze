import type { MetadataRoute } from "next";
import { SEO_PAGES, SECTORS, SITE } from "@/lib/site";

/**
 * Real XML sitemap. The live site serves the homepage HTML at /sitemap.xml, so
 * Google cannot discover any page today.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const pages: MetadataRoute.Sitemap = Object.keys(SEO_PAGES).map((path) => ({
    url: `${SITE.url}${path === "/" ? "/" : path}`,
    lastModified,
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : 0.8,
  }));

  const sectorPages: MetadataRoute.Sitemap = SECTORS.map((sector) => ({
    url: `${SITE.url}/sectors/${sector.slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...pages, ...sectorPages];
}
