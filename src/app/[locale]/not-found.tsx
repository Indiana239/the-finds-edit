import Link from "next/link";

export default function LocaleNotFound() {
  return (
    <div className="page-container">
      <section className="prose-page">
        <p className="eyebrow">404 · NOT FOUND</p>
        <h1>Page not found.</h1>
        <p>The page may have moved, or the address may be incorrect.</p>
        <p><Link className="text-link" href="/">English home ↗</Link>　<Link className="text-link" href="/id/">Beranda Indonesia ↗</Link></p>
      </section>
    </div>
  );
}
