export type Locale = "en" | "id";
export type Marketplace = "amazon" | "shopee";

export type Category = {
  slug: string;
  title: string;
  eyebrow: string;
  description: string;
  image: string;
};

export type GuideSection = {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
};

export type GuideReference = {
  label?: string;
  title?: string;
  url: string;
  context?: string;
};

export type Guide = {
  topicId?: string;
  translationSlug?: string;
  seoTitle?: string;
  seoDescription?: string;
  author?: string;
  publishedAt?: string;
  datePublished?: string;
  dateModified?: string;
  related?: string[];
  relatedTopicIds?: string[];
  sources?: GuideReference[];
  references?: GuideReference[];
  productFocus?: string[];
  affiliateProducts?: AffiliateProduct[];
  slug: string;
  categorySlug: string;
  categoryLabel: string;
  title: string;
  excerpt: string;
  dateLabel: string;
  readTime: string;
  image: string;
  imageAlt: string;
  sections: GuideSection[];
};

export type AffiliateProduct = {
  id: string;
  name: string;
  category: string;
  description: string;
  marketplace: Marketplace;
  affiliateUrl: string | null;
  status: "placeholder" | "ready";
};
