import Link from "next/link";
import { EditorialImage } from "@/components/editorial-image";
import type { Category, Locale } from "@/types/content";

export function CategoryCard({ category, locale }: { category: Category; locale: Locale }) {
  return (
    <Link className="category-card" href={`/${locale}/categories/${category.slug}/`}>
      <div className="category-card__frame">
        <EditorialImage src={category.image} alt={category.title} className="category-card__image" />
      </div>
      <p className="category-card__eyebrow">{category.eyebrow}</p>
      <h3 className="category-card__title">{category.title}</h3>
      <p className="category-card__description">{category.description}</p>
      <span className="category-card__arrow">{locale === "en" ? "Explore category" : "Jelajahi kategori"} ↗</span>
    </Link>
  );
}
