import Link from "next/link";
import { EditorialImage } from "@/components/editorial-image";
import type { Guide, Locale } from "@/types/content";

export function ArticleCard({ guide, locale }: { guide: Guide; locale: Locale }) {
  const wordCount = guide.sections
    .flatMap((section) => [section.heading, ...section.paragraphs, ...(section.bullets || [])])
    .join(" ")
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;
  const minutes = Math.max(2, Math.ceil(wordCount / (locale === "en" ? 200 : 180)));
  const readingTime = locale === "en" ? `${minutes} MIN READ` : `${minutes} MENIT BACA`;
  const publishedDate = guide.publishedAt || guide.datePublished;
  const publishedLabel = publishedDate
    ? new Intl.DateTimeFormat(locale === "en" ? "en-US" : "id-ID", { day: "numeric", month: "short", year: "numeric" }).format(new Date(`${publishedDate}T12:00:00`))
    : "";

  return (
    <article className="article-card">
      <Link href={`/${locale}/guides/${guide.slug}/`} aria-label={`${locale === "en" ? "Read" : "Baca"}: ${guide.title}`}>
        <EditorialImage src={guide.image} alt={guide.imageAlt} className="article-card__image" />
      </Link>
      <div className="article-card__meta"><span>{guide.categoryLabel}</span>{publishedLabel ? <><span>·</span><span>{publishedLabel}</span></> : null}<span>·</span><span>{readingTime}</span></div>
      <h3 className="article-card__title"><Link href={`/${locale}/guides/${guide.slug}/`}>{guide.title}</Link></h3>
      <p className="article-card__excerpt">{guide.excerpt}</p>
      <Link className="article-card__read" href={`/${locale}/guides/${guide.slug}/`}>{locale === "en" ? "Read the guide" : "Baca panduan"} ↗</Link>
    </article>
  );
}
