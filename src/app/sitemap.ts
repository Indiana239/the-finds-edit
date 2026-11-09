import type { MetadataRoute } from "next";
import { getCategories, getGuides } from "@/data/content";
import { locales, siteConfig } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  // English homepage is canonical at /; Indonesian homepage stays at /id/.
  const routes: MetadataRoute.Sitemap = [
    { url: `${siteConfig.url}/`, changeFrequency: "weekly", priority: 1 },
  ];

  for (const locale of locales) {
    routes.push(
      ...(locale === "id" ? [{ url: `${siteConfig.url}/id/`, changeFrequency: "weekly" as const, priority: 1 }] : []),
      { url: `${siteConfig.url}/${locale}/guides/`, changeFrequency: "weekly", priority: 0.8 },
      { url: `${siteConfig.url}/${locale}/about/`, changeFrequency: "yearly", priority: 0.4 },
      { url: `${siteConfig.url}/${locale}/affiliate-disclosure/`, changeFrequency: "yearly", priority: 0.3 },
      { url: `${siteConfig.url}/${locale}/privacy/`, changeFrequency: "yearly", priority: 0.3 },
    );

    for (const category of getCategories(locale)) {
      routes.push({ url: `${siteConfig.url}/${locale}/categories/${category.slug}/`, changeFrequency: "weekly", priority: 0.7 });
    }

    for (const guide of getGuides(locale)) {
      routes.push({
        url: `${siteConfig.url}/${locale}/guides/${guide.slug}/`,
        ...(guide.publishedAt ? { lastModified: new Date(`${guide.publishedAt}T00:00:00Z`) } : {}),
        changeFrequency: "monthly",
        priority: 0.7,
      });
    }
  }

  return routes;
}
