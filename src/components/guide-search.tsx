"use client";

import { useMemo, useState } from "react";
import { ArticleCard } from "@/components/article-card";
import type { Guide, Locale } from "@/types/content";
import { getLocaleCopy } from "@/lib/i18n";

export function GuideSearch({ guides, locale }: { guides: Guide[]; locale: Locale }) {
  const [query, setQuery] = useState("");
  const copy = getLocaleCopy(locale);
  const filtered = useMemo(() => {
    const normalized = query.trim().toLocaleLowerCase(locale);
    if (!normalized) return guides;
    return guides.filter((guide) => [guide.title, guide.excerpt, guide.categoryLabel].join(" ").toLocaleLowerCase(locale).includes(normalized));
  }, [guides, locale, query]);

  return (
    <>
      <div className="guide-toolbar">
        <input
          className="guide-search"
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder={copy.searchPlaceholder}
          aria-label={copy.searchPlaceholder}
        />
        <span className="guide-count">{filtered.length} {copy.searchCount}</span>
      </div>
      {filtered.length ? (
        <div className="article-grid">{filtered.map((guide) => <ArticleCard key={guide.slug} guide={guide} locale={locale} />)}</div>
      ) : (
        <div className="empty-state">{copy.noResults}</div>
      )}
    </>
  );
}
