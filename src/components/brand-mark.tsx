import Link from "next/link";

export function BrandMark({ href = "/" }: { href?: string }) {
  return (
    <Link href={href} className="brand-mark" aria-label="The Finds Edit home">
      <span className="brand-mark__symbol" aria-hidden="true">f.</span>
      <span>
        <span className="brand-mark__name">The Finds Edit</span>
        <span className="brand-mark__descriptor">Thoughtful everyday discoveries</span>
      </span>
    </Link>
  );
}
