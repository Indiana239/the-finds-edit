import { notFound } from "next/navigation";
import { GuideSearch } from "@/components/guide-search";
import { getGuides } from "@/data/content";
import { isLocale } from "@/lib/i18n";
import type { Locale } from "@/types/content";
import { siteConfig } from "@/lib/site";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return {
    title: locale === "id" ? "Panduan" : "Guides",
    description: locale === "id" ? "Panduan editorial dan perbandingan produk." : "Editorial guides and thoughtful product comparisons.",
    alternates: { canonical: `${siteConfig.url}/${locale}/guides/`, languages: { en: `${siteConfig.url}/en/guides/`, id: `${siteConfig.url}/id/guides/` } },
  };
}

export default async function GuidesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) notFound();
  const locale = rawLocale as Locale;
  const isEnglish = locale === "en";
  const guides = getGuides(locale);
  return (
    <div className="page-container">
      <header className="page-hero">
        <p className="eyebrow">{isEnglish ? "THE READING ROOM" : "RUANG BACA"}</p>
        <h1 className="page-hero__title">{isEnglish ? "Guides for considered choices." : "Panduan untuk memilih dengan pertimbangan."}</h1>
        <p className="page-hero__description">{isEnglish ? "Practical context, clear comparisons, and useful details to help you decide what is right for your everyday life." : "Konteks praktis, perbandingan yang jelas, dan detail berguna untuk membantu menentukan pilihan yang sesuai dengan keseharian."}</p>
      </header>
      <section className="content-section">
        <GuideSearch guides={guides} locale={locale} />
      </section>
    </div>
  );
}
