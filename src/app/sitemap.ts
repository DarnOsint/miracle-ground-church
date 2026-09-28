import type { MetadataRoute } from "next";
import { postDate, postHref, posts, siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteConfig.url,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${siteConfig.url}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    ...posts.map((post) => ({
      url: `${siteConfig.url}${postHref(post)}`,
      lastModified: postDate(post) ?? new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}
