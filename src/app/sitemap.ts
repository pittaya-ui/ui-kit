import { MetadataRoute } from "next";

import { getAllComponentDocs } from "@/lib/docs/component-details";
import { getGettingStartedIndex } from "@/lib/docs/getting-start-index";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL!;

  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/docs/components`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/llms.txt`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.7,
    },
  ];

  const componentPages = getAllComponentDocs().map((doc) => ({
    url: `${baseUrl}/docs/components/${doc.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  const gettingStartedPages = getGettingStartedIndex().map((item) => ({
    url: `${baseUrl}/docs/${item.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  return [...staticPages, ...componentPages, ...gettingStartedPages];
}
