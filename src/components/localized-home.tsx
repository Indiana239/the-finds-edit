import Link from "next/link";
import { ArticleCard } from "@/components/article-card";
import { CategoryCard } from "@/components/category-card";
import { EditorialImage } from "@/components/editorial-image";
import { getCategories, getGuides } from "@/data/content";
import { getLocaleCopy } from "@/lib/i18n";
import type { Locale } from "@/types/content";

export function LocalizedHome({ locale }: { locale: Locale }) {
  const copy = getLocaleCopy(locale);
  const categories = getCategories(locale);
  const guides = getGuides(locale);
  const isEnglish = locale === "en";

  return (
    <>
      <section className="page-container">
        <div className="hero">
          <div className="hero__copy">
            <p className="eyebrow">{copy.heroEyebrow}</p>
            <h1 className="hero__title">{copy.heroTitleA}<br /><em>{copy.heroTitleB}</em></h1>
            <p className="hero__description">{copy.heroDescription}</p>
            <div className="hero__links">
              <Link className="text-link" href={`/${locale}/categories/${categories[0].slug}/`}>{copy.explore} ↗</Link>
              <Link className="text-link" href={`/${locale}/guides/`}>{copy.guides} ↗</Link>
            </div>
          </div>
          <div className="hero__visual">
            <div className="hero__image" role="img" aria-label={isEnglish ? "Beauty and everyday products arranged in natural light" : "Produk kecantikan dan kebutuhan harian dalam cahaya alami"} />
            <div className="hero__shape" aria-hidden="true" />
            <div className="hero__image-label">{isEnglish ? "A little more considered." : "Dipilih dengan pertimbangan."}</div>
          </div>
        </div>
        <div className="intro-strip"><span>BEAUTY & SELF-CARE</span><span>HOME & KITCHEN</span><span>EVERYDAY ESSENTIALS</span></div>
      </section>

      <section className="page-container section-block">
        <div className="section-head">
          <div className="section-head__copy">
            <p className="section-kicker">{copy.categoriesEyebrow}</p>
            <h2 className="section-heading">{copy.categoriesTitle}</h2>
            <p>{copy.categoriesIntro}</p>
          </div>
          <Link className="text-link" href={`/${locale}/guides/`}>{copy.browse} ↗</Link>
        </div>
        <div className="category-grid">{categories.map((category) => <CategoryCard key={category.slug} category={category} locale={locale} />)}</div>
      </section>

      <section className="feature-band">
        <EditorialImage src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1400&q=85" alt={isEnglish ? "A warm, practical home kitchen" : "Dapur rumah yang hangat dan fungsional"} className="feature-band__image" />
        <div className="feature-band__copy">
          <p className="eyebrow">{copy.featuredEyebrow}</p>
          <h2>{copy.featuredTitle}</h2>
          <p>{copy.featuredDescription}</p>
          <Link className="text-link" href={`/${locale}/about/`}>{copy.featuredLink} ↗</Link>
        </div>
      </section>

      <section className="page-container section-block">
        <div className="section-head">
          <div className="section-head__copy">
            <p className="section-kicker">{isEnglish ? "NOTES FOR BETTER CHOICES" : "CATATAN UNTUK PILIHAN LEBIH BAIK"}</p>
            <h2 className="section-heading">{copy.latest}</h2>
            <p>{copy.latestIntro}</p>
          </div>
          <Link className="text-link" href={`/${locale}/guides/`}>{isEnglish ? "View all" : "Lihat semua"} ↗</Link>
        </div>
        <div className="article-grid">{guides.slice(0, 6).map((guide) => <ArticleCard key={guide.slug} guide={guide} locale={locale} />)}</div>
      </section>
    </>
  );
}
