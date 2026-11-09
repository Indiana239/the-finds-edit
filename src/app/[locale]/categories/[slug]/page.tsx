import Link from "next/link";
import { notFound } from "next/navigation";
import { ArticleCard } from "@/components/article-card";
import { EditorialImage } from "@/components/editorial-image";
import { getCategories, getCategory, getGuidesForCategory } from "@/data/content";
import { isLocale } from "@/lib/i18n";
import { locales, siteConfig } from "@/lib/site";
import type { Locale } from "@/types/content";

export function generateStaticParams() {
  return locales.flatMap((locale) => getCategories(locale).map((category) => ({ locale, slug: category.slug })));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale: rawLocale, slug } = await params;
  if (!isLocale(rawLocale)) return {};
  const locale = rawLocale as Locale;
  const category = getCategory(locale, slug);
  if (!category) return {};
  const index = getCategories(locale).findIndex((item) => item.slug === slug);
  const enSlug = getCategories("en")[index]?.slug;
  const idSlug = getCategories("id")[index]?.slug;
  return {
    title: category.title,
    description: category.description,
    alternates: {
      canonical: `${siteConfig.url}/${locale}/categories/${slug}/`,
      languages: { en: `${siteConfig.url}/en/categories/${enSlug}/`, id: `${siteConfig.url}/id/categories/${idSlug}/` },
    },
  };
}

export default async function CategoryPage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale: rawLocale, slug } = await params;
  if (!isLocale(rawLocale)) notFound();
  const locale = rawLocale as Locale;
  const category = getCategory(locale, slug);
  if (!category) notFound();
  const guides = getGuidesForCategory(locale, slug);
  const isEnglish = locale === "en";

  return (
    <>
      <section className="page-container">
        <div className="page-hero">
          <p className="eyebrow">{category.eyebrow}</p>
          <h1 className="page-hero__title">{category.title}</h1>
          <p className="page-hero__description">{category.description}</p>
        </div>
        <div className="content-section">
          <div className="section-head">
            <div className="section-head__copy">
              <p className="section-kicker">{isEnglish ? "EDITORIAL GUIDES" : "PANDUAN EDITORIAL"}</p>
              <h2 className="section-heading">{isEnglish ? "Ideas to explore" : "Ide untuk dijelajahi"}</h2>
            </div>
            <Link className="text-link" href={`/${locale}/guides/`}>{isEnglish ? "All guides" : "Semua panduan"} ↗</Link>
          </div>
          {guides.length ? <div className="article-grid">{guides.map((guide) => <ArticleCard key={guide.slug} guide={guide} locale={locale} />)}</div> : <div className="empty-state">{isEnglish ? "New guides are being prepared." : "Panduan baru sedang disiapkan."}</div>}
        </div>
      </section>
    </>
  );
}
