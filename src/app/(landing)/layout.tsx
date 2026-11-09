import type { ReactNode } from "react";
import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { siteConfig } from "@/lib/site";
import "@/app/globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: { default: siteConfig.name, template: `%s | ${siteConfig.name}` },
  description: siteConfig.description,
  robots: { index: true, follow: true },
};

export default function LandingRootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="site-shell">
          <a className="skip-link" href="#main-content">Skip to content</a>
          <SiteHeader locale="en" />
          <main id="main-content">{children}</main>
          <SiteFooter locale="en" />
        </div>
      </body>
    </html>
  );
}
