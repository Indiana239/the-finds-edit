import { notFound } from "next/navigation";
import { isLocale } from "@/lib/i18n";
import { siteConfig } from "@/lib/site";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const en = locale !== "id";
  return {
    title: en ? "Affiliate Disclosure" : "Pengungkapan Afiliasi",
    description: en ? "How affiliate relationships and commissions are disclosed." : "Informasi hubungan afiliasi dan pengungkapan komisi secara transparan.",
    alternates: { canonical: `${siteConfig.url}/${locale}/affiliate-disclosure/`, languages: { en: `${siteConfig.url}/en/affiliate-disclosure/`, id: `${siteConfig.url}/id/affiliate-disclosure/` } },
  };
}

export default async function AffiliateDisclosurePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) notFound();
  const en = rawLocale === "en";
  const amazonActive = siteConfig.amazonAssociatesActive;

  return (
    <div className="page-container">
      <article className="prose-page">
        <p className="eyebrow">{en ? "TRANSPARENCY FIRST" : "TRANSPARANSI ADALAH PRIORITAS"}</p>
        <h1>{en ? "Affiliate disclosure" : "Pengungkapan afiliasi"}</h1>
        {en ? <>
          <p>{amazonActive ? "Some links on the English section may be affiliate links. If you purchase through them, the site may earn a commission. This does not change the price you pay." : "The English section does not currently contain active Amazon affiliate links. Affiliate links will only be added when the programme setup is complete and the links can be disclosed properly."}</p>
          <h2>Amazon Associates</h2>
          {amazonActive
            ? <p><strong>As an Amazon Associate I earn from qualifying purchases.</strong></p>
            : <p>The required Amazon Associate statement will be displayed clearly on the site once the Amazon Associates relationship is active.</p>}
          <p>Amazon links will be identified near the recommendation with a clear label such as “paid link”. Product information, prices, availability, images, and other Amazon content will only be displayed in ways permitted by the current Associates Program policies and applicable tools or licences.</p>
          <h2>Editorial independence</h2>
          <p>Commission availability does not determine whether a product is recommended. We explain the criteria behind a recommendation, distinguish researched information from hands-on experience, and do not claim to have tested an item unless we actually have.</p>
        </> : <>
          <p>The Indonesian section does not currently contain active affiliate links. If links are added after the relevant programme is set up, some outbound links may generate a commission for the website. Any commercial relationship will be disclosed clearly near the relevant recommendation.</p>
          <h2>Shopee Affiliate</h2>
          <p>Shopee links will only be added after the current official terms have been checked, including the rules on linking to other e-commerce platforms and using an Indonesian-language section on a bilingual domain. Written confirmation from Shopee Affiliate Support is recommended before activating links.</p>
          <h2>Editorial independence</h2>
          <p>Commission availability does not determine whether a product is recommended. We distinguish researched information from hands-on experience and do not claim to have tested an item unless we actually have.</p>
        </>}
        <p><strong>{en ? "Please note:" : "Catatan:"}</strong> {en ? "Affiliate programme terms may change. This page should be reviewed against each programme's current terms before any links are added." : "Ketentuan program afiliasi dapat berubah. Halaman ini perlu diperiksa kembali berdasarkan ketentuan terbaru sebelum tautan ditambahkan."}</p>
      </article>
    </div>
  );
}
