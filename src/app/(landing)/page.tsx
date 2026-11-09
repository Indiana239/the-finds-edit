import type { Metadata } from "next";
import { LocalizedHome } from "@/components/localized-home";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Thoughtful finds for everyday living",
  description: "Considered guides to beauty, home, kitchen, and everyday essentials, with practical context to help you choose with confidence.",
  alternates: { canonical: `${siteConfig.url}/` },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    title: "Thoughtful finds for everyday living",
    description: "Considered guides to beauty, home, kitchen, and everyday essentials.",
    url: siteConfig.url,
    siteName: siteConfig.name,
  },
};

export default function RootHomePage() {
  return <LocalizedHome locale="en" />;
}
