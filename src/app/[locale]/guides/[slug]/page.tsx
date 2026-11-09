import Link from "next/link";
import { notFound } from "next/navigation";
import { EditorialImage } from "@/components/editorial-image";
import { AffiliateProductCard } from "@/components/affiliate-product-card";
import { getGuide, getGuides } from "@/data/content";
import { isLocale } from "@/lib/i18n";
import { locales, siteConfig } from "@/lib/site";
import type { Guide, Locale } from "@/types/content";

export function generateStaticParams() {
  return locales.flatMap((locale) => getGuides(locale).map((guide) => ({ locale, slug: guide.slug })));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale: rawLocale, slug } = await params;
  if (!isLocale(rawLocale)) return {};
  const locale = rawLocale as Locale;
  const guide = getGuide(locale, slug);
  if (!guide) return {};
  const guideIndex = getGuides(locale).findIndex((item) => item.slug === slug);
  const enGuide = getGuides("en")[guideIndex];
  const idGuide = getGuides("id")[guideIndex];
  const canonical = `${siteConfig.url}/${locale}/guides/${slug}/`;

  return {
    title: guide.seoTitle || guide.title,
    description: guide.seoDescription || guide.excerpt,
    alternates: {
      canonical,
      languages: {
        en: `${siteConfig.url}/en/guides/${enGuide?.slug || slug}/`,
        id: `${siteConfig.url}/id/guides/${idGuide?.slug || slug}/`,
      },
    },
    openGraph: {
      title: guide.seoTitle || guide.title,
      description: guide.seoDescription || guide.excerpt,
      type: "article",
      url: canonical,
      images: [{ url: guide.image, alt: guide.imageAlt }],
      publishedTime: guide.publishedAt,
      authors: guide.author ? [guide.author] : undefined,
    },
    twitter: { card: "summary_large_image", title: guide.seoTitle || guide.title, description: guide.seoDescription || guide.excerpt, images: [guide.image] },
  };
}

function RichParagraph({ text }: { text: string }) {
  // Use [product name](https://... "paid") for an affiliate link.
  // Ordinary source links remain normal editorial citations.
  const parts = text.split(/(\[[^\]]+\]\(https?:\/\/[^ )]+(?:\s+"paid")?\))/g);
  return (
    <p>
      {parts.map((part, index) => {
        const match = part.match(/^\[([^\]]+)\]\((https?:\/\/[^ )]+)(?:\s+"(paid)")?\)$/);
        if (!match) return <span key={index}>{part}</span>;
        const isPaidLink = match[3] === "paid";
        return (
          <span key={`${match[2]}-${index}`}>
            <a href={match[2]} target="_blank" rel={isPaidLink ? "sponsored nofollow noopener" : "noopener noreferrer"}>{match[1]}</a>
            {isPaidLink ? <small className="affiliate-inline-disclosure"> (paid link; we may earn a commission)</small> : null}
          </span>
        );
      })}
    </p>
  );
}

function serializeJsonLd(value: unknown) {
  return JSON.stringify(value).replace(/</g, "\\u003c");
}

function getRelatedGuides(guide: Guide, locale: Locale) {
  const all = getGuides(locale);
  const slugs = guide.related || [];
  const bySlug = slugs.map((slug) => all.find((item) => item.slug === slug)).filter((item): item is Guide => Boolean(item));
  return bySlug.slice(0, 3);
}

export default async function GuideArticlePage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale: rawLocale, slug } = await params;
  if (!isLocale(rawLocale)) notFound();
  const locale = rawLocale as Locale;
  const guide = getGuide(locale, slug);
  if (!guide) notFound();
  const isEnglish = locale === "en";
  const url = `${siteConfig.url}/${locale}/guides/${slug}/`;
  const related = getRelatedGuides(guide, locale);
  const sources = guide.sources || guide.references || [];
  const articleText = [guide.title, guide.excerpt, ...guide.sections.flatMap((section) => [section.heading, ...section.paragraphs, ...(section.bullets || [])])].join(" ");
  const wordCount = articleText.trim().split(/\s+/).filter(Boolean).length;
  const expectedMarketplace = locale === "en" ? "amazon" : "shopee";
  const publishedDate = guide.publishedAt || guide.datePublished;
  const publishedLabel = publishedDate
    ? new Intl.DateTimeFormat(isEnglish ? "en-US" : "id-ID", { day: "numeric", month: "short", year: "numeric" }).format(new Date(`${publishedDate}T12:00:00`))
    : guide.dateLabel || (isEnglish ? "EDITORIAL GUIDE" : "PANDUAN EDITORIAL");
  const availableRecommendations = (guide.affiliateProducts || []).filter(
    (product) => product.marketplace === expectedMarketplace && product.status === "ready" && Boolean(product.affiliateUrl),
  );
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: guide.title,
    description: guide.seoDescription || guide.excerpt,
    wordCount,
    image: [guide.image],
    inLanguage: isEnglish ? "en-US" : "id-ID",
    datePublished: guide.publishedAt || guide.datePublished,
    dateModified: guide.dateModified || guide.publishedAt || guide.datePublished,
    author: { "@type": "Organization", name: guide.author || siteConfig.name },
    publisher: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
  };
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: isEnglish ? "Home" : "Beranda", item: isEnglish ? siteConfig.url : `${siteConfig.url}/id/` },
      { "@type": "ListItem", position: 2, name: isEnglish ? "Guides" : "Panduan", item: `${siteConfig.url}/${locale}/guides/` },
      { "@type": "ListItem", position: 3, name: guide.title, item: url },
    ],
  };

  return (
    <div className="page-container">
      <div className="article-layout">
        <article>
          <header className="article-header">
            <p className="eyebrow">{guide.categoryLabel}</p>
            <h1 className="article-title">{guide.title}</h1>
            <p className="article-deck">{guide.excerpt}</p>
            <div className="article-byline">
              <span>{publishedLabel}</span>
              <span aria-hidden="true">·</span>
              <span>{guide.readTime}</span>
              {guide.author ? <><span aria-hidden="true">·</span><span>{guide.author}</span></> : null}
            </div>
          </header>
          <EditorialImage src={guide.image} alt={guide.imageAlt} className="article-cover" />
          <div className="article-body">
            {guide.sections.map((section) => (
              <section key={section.heading}>
                <h2>{section.heading}</h2>
                {section.paragraphs.map((paragraph, index) => <RichParagraph key={`${section.heading}-${index}`} text={paragraph} />)}
                {section.bullets ? <ul>{section.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul> : null}
              </section>
            ))}
          </div>

          {availableRecommendations.length > 0 ? (
            <section className="article-recommendations" aria-labelledby="article-recommendations-title">
              <p className="section-kicker">{isEnglish ? "A CONSIDERED SHORTLIST" : "PILIHAN YANG DIPERTIMBANGKAN"}</p>
              <h2 id="article-recommendations-title">{isEnglish ? "Options worth comparing" : "Pilihan yang layak dibandingkan"}</h2>
              <div className="article-recommendations__grid">
                {availableRecommendations.slice(0, 3).map((product) => (
                  <AffiliateProductCard key={product.id} product={product} locale={locale} />
                ))}
              </div>
            </section>
          ) : null}

          {sources.length > 0 ? (
            <section className="article-sources" aria-labelledby="article-sources-title">
              <h2 id="article-sources-title">{isEnglish ? "Sources and further reading" : "Sumber dan bacaan lanjutan"}</h2>
              <ul>{sources.map((source) => <li key={source.url}><a href={source.url} target="_blank" rel="noopener noreferrer">{source.label || source.title || source.url}</a>{source.context ? ` — ${source.context}` : ""}</li>)}</ul>
            </section>
          ) : null}

          {related.length > 0 ? (
            <nav className="related-guides" aria-label={isEnglish ? "Related guides" : "Panduan terkait"}>
              <h2>{isEnglish ? "Keep exploring" : "Baca juga"}</h2>
              <div className="related-guides__list">
                {related.map((item) => (
                  <Link className="related-guides__item" key={item.slug} href={`/${locale}/guides/${item.slug}/`}>
                    <small>{item.categoryLabel}</small><strong>{item.title}</strong>
                  </Link>
                ))}
              </div>
            </nav>
          ) : null}

          <div className="article-disclaimer">
            {isEnglish
              ? "Editorial note: This guide is for general information, not medical advice. We do not claim hands-on product testing unless stated. Check current product labels, manufacturer directions, and retailer terms before purchasing."
              : "Catatan editorial: Panduan ini bersifat informatif dan bukan nasihat medis. Kami tidak mengklaim telah menguji produk secara langsung kecuali dinyatakan. Periksa label produk, petunjuk produsen, dan ketentuan retailer terbaru sebelum membeli."}
          </div>
          <p style={{ marginTop: 25 }}><Link className="text-link" href={`/${locale}/guides/`}>← {isEnglish ? "Back to all guides" : "Kembali ke semua panduan"}</Link></p>
        </article>
        <aside className="article-sidebar">
          <div className="article-sidebar__box">
            <h2>{isEnglish ? "A note on recommendations" : "Catatan rekomendasi"}</h2>
            <p>{isEnglish ? "We explain what to compare and why a product may suit a particular need. We do not claim hands-on testing unless stated." : "Kami menjelaskan hal yang perlu dibandingkan dan alasan sebuah produk mungkin sesuai dengan kebutuhan tertentu. Kami tidak mengklaim telah menguji produk secara langsung jika tidak dinyatakan."}</p>
          </div>
          <div className="article-sidebar__box">
            <h2>{isEnglish ? "Keep exploring" : "Jelajahi lainnya"}</h2>
            <p><Link href={`/${locale}/guides/`}>{isEnglish ? "Browse all editorial guides" : "Lihat semua panduan editorial"} ↗</Link></p>
          </div>
        </aside>
      </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(breadcrumbJsonLd) }} />
    </div>
  );
}
