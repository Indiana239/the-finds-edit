import Link from "next/link";

export default function LandingNotFound() {
  return (
    <main className="language-landing min-h-screen">
      <div className="language-landing__top"><span className="brand-mark"><span className="brand-mark__symbol">f.</span><span className="brand-mark__name">The Finds Edit</span></span></div>
      <div className="language-landing__content">
        <p className="eyebrow">404 · NOT FOUND</p>
        <h1>This page<br /><em>isn't here.</em></h1>
        <p className="language-landing__intro">The page may have moved, or the address may be incorrect.</p>
        <div className="language-choice">
          <Link className="language-choice__link" href="/"><strong>English home ↗</strong></Link>
          <Link className="language-choice__link" href="/id/"><strong>Beranda Indonesia ↗</strong></Link>
        </div>
      </div>
      <p className="language-landing__foot">THE FINDS EDIT</p>
    </main>
  );
}
