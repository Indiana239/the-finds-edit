"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BrandMark } from "@/components/brand-mark";
import { getCategories, getGuides } from "@/data/content";
import { getLocaleCopy } from "@/lib/i18n";
import type { Locale } from "@/types/content";

function alternateLocalePath(pathname: string, currentLocale: Locale, targetLocale: Locale) {
  const segments = pathname.split("/").filter(Boolean);
  if (segments[0] !== currentLocale) return `/${targetLocale}/`;

  if (segments[1] === "guides" && segments[2]) {
    const currentIndex = getGuides(currentLocale).findIndex((guide) => guide.slug === segments[2]);
    const translated = currentIndex >= 0 ? getGuides(targetLocale)[currentIndex] : undefined;
    return translated ? `/${targetLocale}/guides/${translated.slug}/` : `/${targetLocale}/guides/`;
  }

  if (segments[1] === "categories" && segments[2]) {
    const currentIndex = getCategories(currentLocale).findIndex((category) => category.slug === segments[2]);
    const translated = currentIndex >= 0 ? getCategories(targetLocale)[currentIndex] : undefined;
    return translated ? `/${targetLocale}/categories/${translated.slug}/` : `/${targetLocale}/categories/`;
  }

  return `/${targetLocale}/${segments.slice(1).join("/")}${segments.length > 1 ? "/" : ""}`;
}

export function SiteHeader({ locale }: { locale: Locale }) {
  const copy = getLocaleCopy(locale);
  const pathname = usePathname() || `/${locale}/`;
  const englishHref = locale === "en" ? pathname : alternateLocalePath(pathname, locale, "en");
  const indonesianHref = locale === "id" ? pathname : alternateLocalePath(pathname, locale, "id");
  const paths = locale === "en"
    ? { beauty: "/en/categories/beauty-self-care/", home: "/en/categories/home-kitchen/", lifestyle: "/en/categories/lifestyle/", guides: "/en/guides/", about: "/en/about/" }
    : { beauty: "/id/categories/kecantikan-perawatan-diri/", home: "/id/categories/rumah-dapur/", lifestyle: "/id/categories/lifestyle/", guides: "/id/guides/", about: "/id/about/" };

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <BrandMark href={locale === "en" ? "/" : "/id/"} />
        <nav className="site-nav" aria-label={locale === "en" ? "Main navigation" : "Navigasi utama"}>
          <Link href={paths.beauty}>{copy.nav.beauty}</Link>
          <Link href={paths.home}>{copy.nav.home}</Link>
          <Link href={paths.lifestyle}>{copy.nav.lifestyle}</Link>
          <Link href={paths.guides}>{copy.nav.guides}</Link>
          <Link href={paths.about}>{copy.nav.about}</Link>
        </nav>
        <nav className="header-actions language-switch" aria-label={locale === "en" ? "Choose language" : "Pilih bahasa"}>
          <Link href={englishHref} aria-current={locale === "en" ? "page" : undefined}>EN</Link>
          <span aria-hidden="true">/</span>
          <Link href={indonesianHref} aria-current={locale === "id" ? "page" : undefined}>ID</Link>
        </nav>
      </div>
    </header>
  );
}
