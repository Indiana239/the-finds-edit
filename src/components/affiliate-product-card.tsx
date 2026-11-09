import type { AffiliateProduct, Locale } from "@/types/content";

export function AffiliateProductCard({ product, locale }: { product: AffiliateProduct; locale: Locale }) {
  const linkLabel = locale === "en" ? "Retailer link to be added" : "Tautan retailer belum ditambahkan";
  const paidLinkLabel = product.marketplace === "amazon"
    ? "View on Amazon"
    : locale === "en" ? "View at retailer" : "Lihat di retailer";
  const commissionNote = locale === "en"
    ? "We may earn a commission if you purchase through this link."
    : "Kami dapat menerima komisi jika kamu membeli melalui tautan ini.";

  return (
    <article className="affiliate-product-card">
      <div className="affiliate-product-card__top">
        <span className="section-kicker">{product.category}</span>
        <span className="affiliate-product-card__status">{product.status === "ready" ? (locale === "en" ? "EDITORIAL SHORTLIST" : "PILIHAN EDITORIAL") : (locale === "en" ? "RESEARCH PLACEHOLDER" : "PLACEHOLDER RISET")}</span>
      </div>
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      {product.affiliateUrl && product.status === "ready" ? (
        <>
          <a className="text-link" href={product.affiliateUrl} target="_blank" rel="sponsored nofollow noopener">
            {paidLinkLabel} ({locale === "en" ? "paid link" : "tautan berbayar"}) ↗
          </a>
          <p className="affiliate-product-card__disclosure">{commissionNote}</p>
        </>
      ) : (
        <span className="affiliate-product-card__disabled" aria-disabled="true">{linkLabel}</span>
      )}
    </article>
  );
}
