import type { AffiliateProduct } from "@/types/content";

// Keep this catalogue Amazon-only. Add a real Special Link only after the Associates account has an assigned
// tag and the product and placement have been checked against the programme rules.
export const amazonProducts: AffiliateProduct[] = [
  { id: "en-beauty-01", name: "Skincare essentials shortlist", category: "Beauty & self-care", description: "A research placeholder for a future product comparison.", marketplace: "amazon", affiliateUrl: null, status: "placeholder" },
  { id: "en-home-01", name: "Kitchen organisation shortlist", category: "Home & kitchen", description: "A research placeholder for a future kitchen buying guide.", marketplace: "amazon", affiliateUrl: null, status: "placeholder" },
  { id: "en-life-01", name: "Workspace accessories shortlist", category: "Lifestyle", description: "A research placeholder for a future workspace guide.", marketplace: "amazon", affiliateUrl: null, status: "placeholder" },
];
