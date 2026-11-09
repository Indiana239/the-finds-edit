import type { Category, Locale } from "@/types/content";
import { guides as editorialGuides } from "@/data/editorial-guides";

const image = {
  beauty: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=1400&q=85",
  home: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1400&q=85",
  lifestyle: "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?auto=format&fit=crop&w=1400&q=85",
  kitchen: "https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=1400&q=85",
  skincare: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=1400&q=85",
  desk: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1400&q=85",
};

export const categories: Record<Locale, Category[]> = {
  en: [
    { slug: "beauty-self-care", title: "Beauty & self-care", eyebrow: "A LITTLE PERSONAL CARE", description: "Thoughtful beauty tools, skincare essentials, and everyday rituals.", image: image.beauty },
    { slug: "home-kitchen", title: "Home & kitchen", eyebrow: "MADE FOR EVERYDAY", description: "Useful details and considered finds for the spaces you live in.", image: image.home },
    { slug: "lifestyle", title: "Lifestyle essentials", eyebrow: "THE DAILY EDIT", description: "Small upgrades for work, travel, and the in-between moments.", image: image.lifestyle },
  ],
  id: [
    { slug: "kecantikan-perawatan-diri", title: "Kecantikan & perawatan diri", eyebrow: "RAWAT DIRI DENGAN NYAMAN", description: "Beauty tools, kebutuhan skincare, dan ritual sederhana sehari-hari.", image: image.beauty },
    { slug: "rumah-dapur", title: "Rumah & dapur", eyebrow: "UNTUK KESEHARIAN", description: "Pilihan fungsional dan detail kecil untuk ruang tempat kamu beraktivitas.", image: image.home },
    { slug: "lifestyle", title: "Lifestyle essentials", eyebrow: "PILIHAN HARIAN", description: "Temuan praktis untuk bekerja, bepergian, dan berbagai aktivitas.", image: image.lifestyle },
  ],
};

export const guides = editorialGuides;

export function getCategories(locale: Locale) { return categories[locale]; }
export function getGuides(locale: Locale) { return guides[locale]; }
export function getGuide(locale: Locale, slug: string) { return guides[locale].find((guide) => guide.slug === slug); }
export function getCategory(locale: Locale, slug: string) { return categories[locale].find((category) => category.slug === slug); }
export function getGuidesForCategory(locale: Locale, categorySlug: string) { return guides[locale].filter((guide) => guide.categorySlug === categorySlug); }
