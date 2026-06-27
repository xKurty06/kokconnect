"use client";

import Link from "next/link";
import { Check, ChevronDown, Search, ShoppingBag, X } from "lucide-react";
import { useMemo, useState } from "react";
import { ProductCard } from "@/components/product-card";
import { categories, products, type ProductCategory } from "@/lib/mock-data";

type Availability = "All Items" | "Available" | "Sold Out";
type SortOption = "default" | "low" | "high";

const sortOptions: { value: SortOption; label: string; helper: string }[] = [
  { value: "default", label: "Default", helper: "Recommended order" },
  { value: "low", label: "Price: Low to High", helper: "Budget first" },
  { value: "high", label: "Price: High to Low", helper: "Premium first" },
];

export function MenuBrowser({ initialSearchQuery = "" }: { initialSearchQuery?: string }) {
  const cleanInitialSearch = initialSearchQuery.trim();
  const [category, setCategory] = useState<ProductCategory>("Rice Meals");
  const [availability, setAvailability] = useState<Availability>("All Items");
  const [sort, setSort] = useState<SortOption>("default");
  const [sortOpen, setSortOpen] = useState(false);
  const [bagCount, setBagCount] = useState(2);
  const searchQuery = cleanInitialSearch.toLowerCase();
  const selectedSort = sortOptions.find((option) => option.value === sort) ?? sortOptions[0];

  const filtered = useMemo(() => {
    let items = searchQuery
      ? products.filter((product) => {
          const searchable = `${product.name} ${product.category}`.toLowerCase();
          return searchable.includes(searchQuery);
        })
      : products.filter((product) => product.category === category || category === "Best Seller");

    if (availability === "Available") items = items.filter((product) => product.available);
    if (availability === "Sold Out") items = items.filter((product) => !product.available);
    if (sort === "low") items = [...items].sort((a, b) => a.price - b.price);
    if (sort === "high") items = [...items].sort((a, b) => b.price - a.price);
    return items;
  }, [availability, category, searchQuery, sort]);

  const animationKey = `${category}-${availability}-${sort}-${searchQuery}`;
  const heading = searchQuery ? `Search results for “${cleanInitialSearch}”` : category;

  return (
    <div className="grid min-h-[calc(100dvh-68px)] w-full grid-cols-[210px_minmax(0,1fr)]">
      <aside className="sticky top-[68px] h-[calc(100dvh-68px)] self-start overflow-y-auto border-r border-border bg-white" aria-label="Menu filters">
        <div className="border-b border-border px-5 py-4">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand/70">Categories</p>
          <h2 className="mt-1 text-lg font-bold">Menu</h2>
        </div>
        <div className="grid gap-1 p-2">
          {categories.map((item) => (
            <button key={item} onClick={() => setCategory(item)} className={`min-h-11 shrink-0 cursor-pointer rounded-lg border-l-4 px-3 text-left text-sm transition-all duration-200 ${!searchQuery && category === item ? "border-brand bg-brand-tint font-semibold text-brand shadow-sm" : "border-transparent text-copy hover:border-brand-blush hover:bg-brand-tint hover:shadow-sm"}`}>
              {item}
            </button>
          ))}
        </div>
        <p className="px-5 pb-2 pt-6 text-xs font-semibold uppercase tracking-[0.14em] text-muted">Availability</p>
        <div className="grid gap-1 px-2">
          {(["All Items", "Available", "Sold Out"] as Availability[]).map((item) => (
            <button key={item} onClick={() => setAvailability(item)} className={`min-h-11 cursor-pointer rounded-lg border-l-4 px-3 text-left text-sm transition-all duration-200 ${availability === item ? "border-brand bg-brand font-semibold text-white shadow-sm" : "border-transparent text-copy hover:border-brand-blush hover:bg-brand-tint hover:shadow-sm"}`}>{item}</button>
          ))}
        </div>
      </aside>

      <main className="relative min-w-0 overflow-visible bg-background px-6 pb-20">
        <div key={`${animationKey}-heading`} className="menu-panel-enter relative z-40 flex flex-wrap items-center justify-between gap-3 border-b border-border bg-background py-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand/70">Cooked to order</p>
            <h1 className="mt-1 text-lg font-bold">{heading} <span className="text-muted">({filtered.length})</span></h1>
            {searchQuery && (
              <Link href="/menu" className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-brand hover:text-brand-deep">
                <X className="size-3" /> Clear search
              </Link>
            )}
          </div>
          <div className="flex items-center gap-3">
            {searchQuery && (
              <span className="inline-flex items-center gap-2 rounded-full border border-brand-blush bg-white px-3 py-2 text-xs font-semibold text-brand shadow-sm">
                <Search className="size-3.5" /> {cleanInitialSearch}
              </span>
            )}
            <div
              className="relative min-w-[230px]"
              onBlur={(event) => {
                if (!event.currentTarget.contains(event.relatedTarget)) setSortOpen(false);
              }}
            >
              <button
                type="button"
                onClick={() => setSortOpen((open) => !open)}
                className={`flex h-11 w-full cursor-pointer items-center justify-between gap-3 rounded-xl border bg-white px-4 text-left text-sm shadow-sm transition hover:-translate-y-0.5 hover:border-brand-blush hover:shadow-md ${sortOpen ? "border-brand-blush ring-4 ring-brand/10" : "border-border"}`}
                aria-haspopup="listbox"
                aria-expanded={sortOpen}
              >
                <span>
                  <span className="block text-[11px] font-bold uppercase tracking-[0.14em] text-brand/70">Sort by</span>
                  <span className="block font-semibold text-ink">{selectedSort.label}</span>
                </span>
                <ChevronDown className={`size-4 shrink-0 text-muted transition-transform duration-200 ${sortOpen ? "rotate-180" : ""}`} />
              </button>

              {sortOpen && (
                <div className="menu-panel-enter absolute right-0 top-[calc(100%+8px)] z-[70] w-full overflow-hidden rounded-xl border border-border bg-white p-1 shadow-[0_18px_45px_rgba(17,17,17,0.16)] ring-1 ring-black/5" role="listbox" aria-label="Sort meals">
                  {sortOptions.map((option) => {
                    const active = option.value === sort;
                    return (
                      <button
                        key={option.value}
                        type="button"
                        onClick={() => {
                          setSort(option.value);
                          setSortOpen(false);
                        }}
                        className={`flex w-full cursor-pointer items-center gap-3 rounded-lg px-3 py-2.5 text-left transition ${active ? "bg-brand-tint text-brand" : "text-copy hover:bg-background hover:text-ink"}`}
                        role="option"
                        aria-selected={active}
                      >
                        <span className={`grid size-5 shrink-0 place-items-center rounded-full border ${active ? "border-brand bg-brand text-white" : "border-border bg-white"}`}>
                          {active && <Check className="size-3" />}
                        </span>
                        <span className="min-w-0">
                          <span className="block text-sm font-semibold">{option.label}</span>
                          <span className="block text-xs text-muted">{option.helper}</span>
                        </span>
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </div>

        {filtered.length > 0 ? (
          <div key={animationKey} className="menu-grid-enter relative z-0 grid grid-cols-5 gap-4 py-5">
            {filtered.map((product) => (
              <div key={product.id} className="menu-card-enter">
                <ProductCard product={product} menuDense onAdd={() => setBagCount((count) => count + 1)} />
              </div>
            ))}
          </div>
        ) : (
          <div className="menu-panel-enter relative z-0 mt-6 rounded-xl border border-dashed border-border bg-white p-10 text-center shadow-sm">
            <p className="text-lg font-bold">No meals found</p>
            <p className="mt-2 text-sm text-muted">Try another keyword or clear the search.</p>
            <Link href="/menu" className="mt-5 inline-flex min-h-11 items-center justify-center rounded-full bg-brand px-5 text-sm font-semibold text-white hover:bg-brand-deep">
              Clear Search
            </Link>
          </div>
        )}

        <a key={bagCount} href="/cart" className="bag-bump fixed bottom-5 right-8 z-30 inline-flex min-h-12 items-center gap-2 rounded-full bg-brand px-5 text-sm font-semibold text-white shadow-xl transition hover:-translate-y-0.5 hover:bg-brand-deep hover:shadow-2xl">
          <ShoppingBag className="size-4" /> My Bag ({bagCount})
        </a>
      </main>
    </div>
  );
}
