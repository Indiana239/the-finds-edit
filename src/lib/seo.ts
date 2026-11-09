import { siteConfig } from "@/lib/site";
import type { Locale } from "@/types/content";

export function localizedAlternates(locale: Locale, path: string) {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return {
    canonical: `${siteConfig.url}/${locale}${normalizedPath}`,
    languages: {
      en: `${siteConfig.url}/en${normalizedPath}`,
      id: `${siteConfig.url}/id${normalizedPath}`,
    },
  };
}
