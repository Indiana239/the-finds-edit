import { notFound } from "next/navigation";
import { LocalizedHome } from "@/components/localized-home";
import { isLocale } from "@/lib/i18n";
import type { Locale } from "@/types/content";
import { siteConfig } from "@/lib/site";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const isEnglish = locale === "en";
  return {
    title: isEnglish ? "Thoughtful finds for everyday living" : "Temuan menarik untuk keseharian",
    description: isEnglish
      ? "Considered guides to beauty, home, kitchen, and everyday essentials."
      : "Panduan pilihan produk kecantikan, rumah, dapur, dan kebutuhan sehari-hari.",
    alternates: {
      canonical: isEnglish ? `${siteConfig.url}/` : `${siteConfig.url}/id/`,
      languages: {
        "x-default": `${siteConfig.url}/`,
        en: `${siteConfig.url}/`,
        id: `${siteConfig.url}/id/`,
      },
    },
    robots: { index: true, follow: true },
  };
}

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) notFound();
  return <LocalizedHome locale={rawLocale as Locale} />;
}
