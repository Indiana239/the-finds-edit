import Link from "next/link";
import { BrandMark } from "@/components/brand-mark";
import { getLocaleCopy } from "@/lib/i18n";
import type { Locale } from "@/types/content";
import { siteConfig } from "@/lib/site";

export function SiteFooter({ locale }: { locale: Locale }) {
  const copy = getLocaleCopy(locale);
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div className="footer-top">
          <div>
            <BrandMark href={`/${locale}/`} />
            <p className="footer-brand-copy">{copy.footerText}</p>
          </div>
          <div className="footer-column">
            <h2>{copy.footerExplore}</h2>
            <Link href={`/${locale}/guides/`}>{copy.guides}</Link>
            <Link href={locale === "en" ? "/en/categories/beauty-self-care/" : "/id/categories/kecantikan-perawatan-diri/"}>{copy.nav.beauty}</Link>
            <Link href={locale === "en" ? "/en/categories/home-kitchen/" : "/id/categories/rumah-dapur/"}>{copy.nav.home}</Link>
            <Link href={locale === "en" ? "/en/categories/lifestyle/" : "/id/categories/lifestyle/"}>{copy.nav.lifestyle}</Link>
          </div>
          <div className="footer-column">
            <h2>{copy.footerInfo}</h2>
            <Link href={`/${locale}/about/`}>{copy.about}</Link>
            <Link href={`/${locale}/affiliate-disclosure/`}>{copy.disclosure}</Link>
            <Link href={`/${locale}/privacy/`}>{copy.privacy}</Link>
          </div>
        </div>
        {locale === "en" && siteConfig.amazonAssociatesActive ? (
          <p className="amazon-site-disclosure">As an Amazon Associate I earn from qualifying purchases.</p>
        ) : null}
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} THE FINDS EDIT</span>
          <span>{locale === "en" ? "A considered edit for everyday life." : "Kurasi pilihan untuk keseharian."}</span>
        </div>
      </div>
    </footer>
  );
}
