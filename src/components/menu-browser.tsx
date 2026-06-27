"use client";

import { ChevronDown, ShoppingBag } from "lucide-react";
import { useMemo, useState } from "react";
import { ProductCard } from "@/components/product-card";
import { categories, products, type ProductCategory } from "@/lib/mock-data";

type Availability = "All Items" | "Available" | "Sold Out";

export function MenuBrowser() {
  const [category, setCategory] = useState<ProductCategory>("Rice Meals");
  const [availability, setAvailability] = useState<Availability>("All Items");
  const [sort, setSort] = useState("default");
  const [bagCount, setBagCount] = useState(2);

  const filtered = useMemo(() => {
    let items = products.filter((product) => product.category === category || category === "Best Seller");
    if (availability === "Available") items = items.filter((product) => product.available);
    if (availability === "Sold Out") items = items.filter((product) => !product.available);
    if (sort === "low") items = [...items].sort((a, b) => a.price - b.price);
    if (sort === "high") items = [...items].sort((a, b) => b.price - a.price);
    return items.length ? items : products.slice(0, 8);
  }, [availability, category, sort]);

  const animationKey = `${category}-${availability}-${sort}`;

  return (
    <div className="grid min-h-[calc(100dvh-68px)] w-full grid-cols-[210px_minmax(0,1fr)]">
      <aside className="sticky top-[68px] h-[calc(100dvh-68px)] self-start overflow-y-auto border-r border-border bg-white" aria-label="Menu filters">
        <div className="border-b border-border px-5 py-4">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand/70">Categories</p>
          <h2 className="mt-1 text-lg font-bold">Menu</h2>
        </div>
        <div className="grid gap-1 p-2">
          {categories.map((item) => (
            <button key={item} onClick={() => setCategory(item)} className={`min-h-11 shrink-0 cursor-pointer rounded-lg border-l-4 px-3 text-left text-sm transition-all duration-200 ${category === item ? "border-brand bg-brand-tint font-semibold text-brand shadow-sm" : "border-transparent text-copy hover:border-brand-blush hover:bg-brand-tint hover:shadow-sm"}`}>
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

      <main className="relative min-w-0 bg-background px-6 pb-20">
        <div key={`${animationKey}-heading`} className="menu-panel-enter flex flex-wrap items-center justify-between gap-3 border-b border-border py-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand/70">Cooked to order</p>
            <h1 className="mt-1 text-lg font-bold">{category} <span className="text-muted">({filtered.length})</span></h1>
          </div>
          <label className="relative transition duration-200 focus-within:-translate-y-0.5">
            <span className="sr-only">Sort meals</span>
            <select value={sort} onChange={(event) => setSort(event.target.value)} className="h-10 appearance-none rounded-lg border border-border bg-white py-2 pl-4 pr-10 text-sm shadow-sm transition focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand-tint">
              <option value="default">Sort by: Default</option>
              <option value="low">Price: Low to High</option>
              <option value="high">Price: High to Low</option>
            </select>
            <ChevronDown className="pointer-events-none absolute right-3 top-1/2 size-4 -translate-y-1/2 text-muted" />
          </label>
        </div>
        <div key={animationKey} className="menu-grid-enter grid grid-cols-5 gap-4 py-5">
          {filtered.map((product) => (
            <div key={product.id} className="menu-card-enter">
              <ProductCard product={product} menuDense onAdd={() => setBagCount((count) => count + 1)} />
            </div>
          ))}
        </div>
        <a key={bagCount} href="/cart" className="bag-bump fixed bottom-5 right-8 z-30 inline-flex min-h-12 items-center gap-2 rounded-full bg-brand px-5 text-sm font-semibold text-white shadow-xl transition hover:-translate-y-0.5 hover:bg-brand-deep hover:shadow-2xl">
          <ShoppingBag className="size-4" /> My Bag ({bagCount})
        </a>
      </main>
    </div>
  );
}
