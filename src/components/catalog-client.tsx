"use client";

import Link from "next/link";
import { ShoppingBag } from "lucide-react";
import { useMemo, useState } from "react";
import { ProductCard } from "@/components/product-card";
import { categories, products, type ProductCategory } from "@/lib/mock-data";

const DESKTOP_CONTAINER = "mx-auto w-full max-w-[1280px] px-6";

export function CatalogClient() {
  const [category, setCategory] = useState<ProductCategory>("Best Seller");
  const [bagCount, setBagCount] = useState(3);
  const visible = useMemo(() => {
    const matches = products.filter((product) => product.category === category);
    return (matches.length >= 6 ? matches : products).slice(0, 6);
  }, [category]);

  return (
    <section className="min-h-0 flex-1 overflow-hidden bg-white py-3" aria-labelledby="browse-heading">
      <div className={`${DESKTOP_CONTAINER} flex h-full min-h-0 flex-col`}>
        <div className="flex shrink-0 items-center justify-between gap-4">
          <h2 id="browse-heading" className="text-2xl font-bold leading-tight">
            Browse by Category
          </h2>
          <Link href="/cart" className="inline-flex min-h-10 items-center gap-2 rounded-full bg-brand px-5 text-sm font-semibold text-white shadow-lg">
            <ShoppingBag className="size-4" /> My Bag ({bagCount})
          </Link>
        </div>

        <div className="mt-2 flex shrink-0 gap-2 overflow-hidden" role="tablist" aria-label="Meal categories">
          {categories.map((item) => (
            <button
              key={item}
              type="button"
              role="tab"
              aria-selected={category === item}
              onClick={() => setCategory(item)}
              className={`min-h-9 shrink-0 cursor-pointer rounded-full border px-4 text-sm ${
                category === item ? "border-brand bg-brand font-semibold text-white" : "border-border bg-white text-copy hover:border-brand-blush"
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        <div className="mt-3 flex shrink-0 items-center gap-3">
          <h3 className="font-bold leading-tight">Today&apos;s Picks</h3>
          <span className="rounded-full bg-gold-tint px-3 py-1 text-xs font-semibold text-gold">Best Sellers</span>
          <Link href="/menu" className="ml-auto text-sm font-bold text-brand underline underline-offset-4">
            View more
          </Link>
        </div>

        <div className="mt-2 grid shrink-0 grid-cols-6 items-start gap-3 overflow-hidden">
          {visible.map((product) => (
            <ProductCard key={product.id} product={product} compact onAdd={() => setBagCount((count) => count + 1)} />
          ))}
        </div>
      </div>
    </section>
  );
}