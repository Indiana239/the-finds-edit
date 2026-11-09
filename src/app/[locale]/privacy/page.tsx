import { notFound } from "next/navigation";
import { isLocale } from "@/lib/i18n";
import { siteConfig } from "@/lib/site";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const en = locale !== "id";
  return {
    title: en ? "Privacy Policy" : "Kebijakan Privasi",
    description: en ? "Privacy information for visitors." : "Informasi privasi bagi pengunjung.",
    alternates: { canonical: `${siteConfig.url}/${locale}/privacy/`, languages: { en: `${siteConfig.url}/en/privacy/`, id: `${siteConfig.url}/id/privacy/` } },
  };
}export default async function PrivacyPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) notFound();
  const en = rawLocale === "en";
  return (
    <div className="page-container">
      <article className="prose-page">
        <p className="eyebrow">YOUR PRIVACY MATTERS</p>
        <h1>{en ? "Privacy policy" : "Kebijakan privasi"}</h1>
        {en ? <>
          <p>This is a starter privacy notice, not a final legal document. Before launch, update it to describe the actual data collected by the website, analytics tools, cookies, embedded services, contact channels, and affiliate tracking.</p>
          <h2>Information and analytics</h2>
          <p>If analytics or advertising tools are enabled, explain what data they collect, the purpose, retention period, and how visitors can manage consent or preferences where required.</p>
          <h2>External websites</h2>
          <p>Links to retailers and other external websites are governed by those websites' own privacy policies and terms.</p>
          <h2>Contact</h2>
          <p>Add a monitored contact email before publishing this policy.</p>
        </> : <>
          <p>Ini adalah draft pemberitahuan privasi, bukan dokumen hukum final. Sebelum peluncuran, sesuaikan dengan data yang benar-benar dikumpulkan website, alat analitik, cookie, layanan tertanam, kanal kontak, dan pelacakan afiliasi.</p>
          <h2>Informasi dan analitik</h2>
          <p>Jika alat analitik atau periklanan diaktifkan, jelaskan data yang dikumpulkan, tujuannya, masa penyimpanan, serta cara pengunjung mengelola persetujuan atau preferensi bila diwajibkan.</p>
          <h2>Website eksternal</h2>
          <p>Tautan ke retailer dan website eksternal lainnya mengikuti kebijakan privasi serta ketentuan masing-masing website.</p>
          <h2>Kontak</h2>
          <p>Tambahkan alamat email kontak yang aktif sebelum kebijakan ini dipublikasikan.</p>
        </>}
      </article>
    </div>
  );
}
