import type { ReactNode } from "react";
import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";
import { notFound } from "next/navigation";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { isLocale } from "@/lib/i18n";
import { locales } from "@/lib/site";
import type { Locale } from "@/types/content";
import "@/app/globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  applicationName: siteConfig.name,
  title: { default: siteConfig.name, template: `%s | ${siteConfig.name}` },
  description: siteConfig.description,
  openGraph: { type: "website", siteName: siteConfig.name, title: siteConfig.name, description: siteConfig.description },
  robots: { index: true, follow: true },
};

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleRootLayout({ children, params }: { children: ReactNode; params: Promise<{ locale: string }> }) {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) notFound();
  const locale = rawLocale as Locale;

  return (
    <html lang={locale}>
      <body>
        <div className="site-shell">
          <a className="skip-link" href="#main-content">Skip to content</a>
          <SiteHeader locale={locale} />
          <main id="main-content">{children}</main>
          <SiteFooter locale={locale} />
        </div>
      </body>
    </html>
  );
}
