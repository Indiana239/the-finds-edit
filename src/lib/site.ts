export const siteConfig = {
  name: "The Finds Edit",
  tagline: "Thoughtful picks for everyday life.",
  description:
    "Independent, problem-first buying guides for beauty, home, kitchen, and everyday essentials, helping readers compare practical details before they buy.",
  url: (process.env.NEXT_PUBLIC_SITE_URL || "https://example.pages.dev").replace(/\/+$/, ""),
  contactEmail: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "",
  amazonAssociatesActive: process.env.NEXT_PUBLIC_AMAZON_ASSOCIATES_ACTIVE === "true",
};

export const locales = ["en", "id"] as const;
export const defaultLocale = "en" as const;
