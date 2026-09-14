import type { MetadataRoute } from "next";
import { getServiceSlugs } from "@/lib/services";
import { absoluteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: absoluteUrl("/"),
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: absoluteUrl("/services"),
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: absoluteUrl("/contact"),
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: absoluteUrl("/articles"),
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.75,
    },
    {
      url: absoluteUrl("/qualifications"),
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];

  const serviceRoutes: MetadataRoute.Sitemap = getServiceSlugs().map(
    (slug) => ({
      url: absoluteUrl(`/services/${slug}`),
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.85,
    }),
  );

  return [...staticRoutes, ...serviceRoutes];
}
