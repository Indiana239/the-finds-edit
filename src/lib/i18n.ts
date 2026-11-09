import type { Locale } from "@/types/content";

export const localeCopy = {
  en: {
    nav: { beauty: "Beauty", home: "Home & Kitchen", lifestyle: "Lifestyle", guides: "Guides", about: "About" },
    heroEyebrow: "THE EVERYDAY DISCOVERY JOURNAL",
    heroTitleA: "Good finds for",
    heroTitleB: "everyday living.",
    heroDescription: "A thoughtful edit of useful, beautiful, and considered products — with practical guides to help you choose what belongs in your everyday life.",
    explore: "Explore the edit",
    latest: "Latest guides",
    latestIntro: "Useful ideas, considered comparisons, and product guides made to help you make a more confident choice.",
    categoriesEyebrow: "A FEW GOOD PLACES TO START",
    categoriesTitle: "A little something for every day.",
    categoriesIntro: "Browse by the parts of everyday life you want to make a little easier, more useful, or more enjoyable.",
    featuredEyebrow: "THE EDITORIAL APPROACH",
    featuredTitle: "Less noise. More considered choices.",
    featuredDescription: "We bring together practical context, clear criteria, and thoughtfully selected product ideas — so the decision feels easier, not louder.",
    featuredLink: "How we choose",
    guides: "All guides",
    readGuide: "Read guide",
    browse: "Browse category",
    searchPlaceholder: "Search the guides...",
    about: "About the edit",
    disclosure: "Affiliate disclosure",
    privacy: "Privacy policy",
    footerText: "An independent editorial project exploring considered products and everyday essentials.",
    footerExplore: "Explore",
    footerInfo: "Information",
    disclaimer: "Affiliate links are not active in this starter project. Product examples and editorial content must be reviewed before publication.",
    backToGuides: "Back to all guides",
    noResults: "No guides match your search yet.",
    searchCount: "guides",
    readingNote: "A useful starting point, not a substitute for checking the latest product specifications and retailer terms.",
    updatedNote: "Editorial starter content · Review before publishing",
  },
  id: {
    nav: { beauty: "Kecantikan", home: "Rumah & Dapur", lifestyle: "Lifestyle", guides: "Panduan", about: "Tentang" },
    heroEyebrow: "JURNAL TEMUAN SEHARI-HARI",
    heroTitleA: "Temuan menarik untuk",
    heroTitleB: "hari yang lebih baik.",
    heroDescription: "Kurasi produk yang fungsional, menarik, dan layak dipertimbangkan — dilengkapi panduan praktis agar kamu lebih yakin sebelum memilih.",
    explore: "Jelajahi pilihan",
    latest: "Panduan terbaru",
    latestIntro: "Ide praktis, perbandingan yang matang, dan panduan produk untuk membantu kamu mengambil keputusan dengan lebih yakin.",
    categoriesEyebrow: "MULAI DARI SINI",
    categoriesTitle: "Pilihan kecil untuk keseharian.",
    categoriesIntro: "Jelajahi kategori berdasarkan hal-hal yang ingin kamu buat lebih praktis, nyaman, atau menyenangkan.",
    featuredEyebrow: "CARA KAMI MEMILIH",
    featuredTitle: "Lebih sedikit kebisingan. Lebih banyak pertimbangan.",
    featuredDescription: "Kami menggabungkan konteks yang berguna, kriteria yang jelas, dan ide produk yang dipilih dengan pertimbangan — agar proses memilih terasa lebih mudah.",
    featuredLink: "Prinsip editorial kami",
    guides: "Semua panduan",
    readGuide: "Baca panduan",
    browse: "Jelajahi kategori",
    searchPlaceholder: "Cari panduan...",
    about: "Tentang kami",
    disclosure: "Pengungkapan afiliasi",
    privacy: "Kebijakan privasi",
    footerText: "Proyek editorial independen yang membahas produk terpilih dan kebutuhan sehari-hari.",
    footerExplore: "Jelajahi",
    footerInfo: "Informasi",
    disclaimer: "Tautan afiliasi belum aktif dalam project starter ini. Contoh produk dan konten editorial perlu ditinjau sebelum dipublikasikan.",
    backToGuides: "Kembali ke semua panduan",
    noResults: "Belum ada panduan yang sesuai dengan pencarianmu.",
    searchCount: "panduan",
    readingNote: "Panduan awal, bukan pengganti pemeriksaan spesifikasi produk dan ketentuan retailer terbaru.",
    updatedNote: "Konten awal editorial · Tinjau sebelum publikasi",
  },
} satisfies Record<Locale, Record<string, unknown>>;

export function isLocale(value: string): value is Locale {
  return value === "en" || value === "id";
}

export function getLocaleCopy(locale: Locale) {
  return localeCopy[locale] as {
    nav: { beauty: string; home: string; lifestyle: string; guides: string; about: string };
    [key: string]: any;
  };
}
