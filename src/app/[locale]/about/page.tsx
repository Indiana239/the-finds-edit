import { notFound } from "next/navigation";
import { isLocale } from "@/lib/i18n";
import { siteConfig } from "@/lib/site";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const en = locale !== "id";
  return {
    title: en ? "About" : "Tentang",
    description: en ? "About the editorial approach behind The Finds Edit." : "Tentang pendekatan editorial The Finds Edit.",
    alternates: { canonical: `${siteConfig.url}/${locale}/about/`, languages: { en: `${siteConfig.url}/en/about/`, id: `${siteConfig.url}/id/about/` } },
  };
}export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) notFound();
  const en = rawLocale === "en";
  return (
    <div className="page-container">
      <article className="prose-page">
        <p className="eyebrow">{en ? "A LITTLE ABOUT US" : "SEDIKIT TENTANG KAMI"}</p>
        <h1>{en ? "A more thoughtful way to find everyday things." : "Cara yang lebih matang untuk menemukan kebutuhan sehari-hari."}</h1>
        {en ? <>
          <p>The Finds Edit is an independent editorial project built around one simple idea: finding a useful product should feel considered, not overwhelming.</p>
          <p>We bring together practical guides, clear comparison criteria, and product ideas across beauty, home, kitchen, and lifestyle. Our goal is to help readers understand what to look for before making a purchase.</p>
          <h2>How we approach recommendations</h2>
          <p>We aim to explain the criteria behind a recommendation, distinguish researched information from hands-on experience, and keep product details current. We do not claim to have tested an item unless we have actually done so.</p>
          <p>This is a working editorial starter. Brand details, contact information, and the full editorial policy should be completed before public launch.</p>
        </> : <>
          <p>The Finds Edit adalah proyek editorial independen yang berangkat dari satu gagasan sederhana: menemukan produk yang berguna seharusnya terasa lebih terarah, bukan membingungkan.</p>
          <p>Kami menyusun panduan praktis, kriteria perbandingan yang jelas, dan ide produk seputar kecantikan, rumah, dapur, serta lifestyle. Tujuannya membantu pembaca memahami hal yang perlu diperhatikan sebelum membeli.</p>
          <h2>Pendekatan rekomendasi</h2>
          <p>Kami berupaya menjelaskan dasar dari sebuah rekomendasi, membedakan informasi hasil riset dengan pengalaman penggunaan langsung, dan menjaga detail produk tetap relevan. Kami tidak mengklaim telah menguji produk jika memang belum melakukannya.</p>
          <p>Ini masih merupakan starter editorial. Detail brand, informasi kontak, dan kebijakan editorial lengkap harus diselesaikan sebelum website dipublikasikan.</p>
        </>}
      </article>
    </div>
  );
}
