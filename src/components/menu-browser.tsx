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

  return (
    <div className="grid min-h-[calc(100dvh-68px)] w-full grid-cols-[210px_minmax(0,1fr)]">
      <aside className="sticky top-[68px] h-[calc(100dvh-68px)] self-start overflow-y-auto border-r border-border bg-white" aria-label="Menu filters">
        <div className="border-b border-border px-5 py-4 text-lg font-bold">Menu</div>
        <div className="grid">
          {categories.map((item) => (
            <button key={item} onClick={() => setCategory(item)} className={`min-h-11 shrink-0 cursor-pointer border-l-4 px-4 text-left text-sm ${category === item ? "border-brand bg-brand-tint font-semibold text-brand" : "border-transparent text-copy hover:bg-brand-tint"}`}>
              {item}
            </button>
          ))}
        </div>
        <p className="px-5 pb-2 pt-7 text-xs italic text-muted">Availability</p>
        <div className="grid">
          {(["All Items", "Available", "Sold Out"] as Availability[]).map((item) => (
            <button key={item} onClick={() => setAvailability(item)} className={`min-h-11 cursor-pointer border-l-4 px-5 text-left text-sm ${availability === item ? "border-brand bg-brand font-semibold text-white" : "border-transparent text-copy hover:bg-brand-tint"}`}>{item}</button>
          ))}
        </div>
      </aside>

      <main className="relative min-w-0 bg-background px-7 pb-24">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border py-4">
          <h1 className="text-lg font-bold">{category} <span className="text-muted">({filtered.length})</span></h1>
          <label className="relative">
            <span className="sr-only">Sort meals</span>
            <select value={sort} onChange={(event) => setSort(event.target.value)} className="h-11 appearance-none rounded-lg border border-border bg-white py-2 pl-4 pr-10 text-sm">
              <option value="default">Sort by: Default</option>
              <option value="low">Price: Low to High</option>
              <option value="high">Price: High to Low</option>
            </select>
            <ChevronDown className="pointer-events-none absolute right-3 top-1/2 size-4 -translate-y-1/2 text-muted" />
          </label>
        </div>
        <div className="grid grid-cols-4 gap-5 py-7">
          {filtered.map((product) => <ProductCard key={product.id} product={product} onAdd={() => setBagCount((count) => count + 1)} />)}
        </div>
        <a href="/cart" className="fixed bottom-5 right-8 z-30 inline-flex min-h-12 items-center gap-2 rounded-full bg-brand px-5 text-sm font-semibold text-white shadow-xl">
          <ShoppingBag className="size-4" /> My Bag ({bagCount})
        </a>
      </main>
    </div>
  );
}
