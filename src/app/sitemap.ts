import { MetadataRoute } from "next";
import { SITE } from "@/lib/content/site";
import { AVAILABLE_COMPARISONS } from "@/lib/content/bank-comparisons";
import { CARD_TIERS } from "@/lib/content/card-tiers";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE.url;
  const lastModified = new Date(SITE.lastUpdated);

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: "monthly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/review`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/open-account`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/cards/compare`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/vitality-money`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/about`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  const comparisonPages: MetadataRoute.Sitemap = AVAILABLE_COMPARISONS.map(
    (bank) => ({
      url: `${baseUrl}/vs/${bank}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })
  );

  const cardPages: MetadataRoute.Sitemap = CARD_TIERS.map((tier) => ({
    url: `${baseUrl}/cards/${tier.slug}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticPages, ...comparisonPages, ...cardPages];
}
