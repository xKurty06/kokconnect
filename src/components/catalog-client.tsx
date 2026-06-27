"use client";

import Link from "next/link";
import { ShoppingBag } from "lucide-react";
import { useMemo, useState } from "react";
import { ProductCard } from "@/components/product-card";
import { categories, products, type ProductCategory } from "@/lib/mock-data";

const DESKTOP_CONTAINER = "mx-auto w-full max-w-[1560px] px-8";

export function CatalogClient() {
  const [category, setCategory] = useState<ProductCategory>("Best Seller");
  const [bagCount, setBagCount] = useState(3);
  const visible = useMemo(() => {
    const matches = products.filter((product) => product.category === category);
    return (matches.length >= 6 ? matches : products).slice(0, 6);
  }, [category]);

  return (
    <section className="min-h-0 flex-1 overflow-hidden bg-white py-4" aria-labelledby="browse-heading">
      <div className={`${DESKTOP_CONTAINER} flex h-full min-h-0 flex-col`}>
        <div className="home-catalog-header flex shrink-0 items-center justify-between gap-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand/70">Freshly grilled picks</p>
            <h2 id="browse-heading" className="mt-1 text-2xl font-bold leading-tight">
              Browse by Category
            </h2>
          </div>
          <Link key={bagCount} href="/cart" className="bag-bump inline-flex min-h-10 items-center gap-2 rounded-full bg-brand px-5 text-sm font-semibold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-brand-deep hover:shadow-xl">
            <ShoppingBag className="size-4" /> My Bag ({bagCount})
          </Link>
        </div>

        <div className="home-category-tabs mt-3 flex shrink-0 gap-2 overflow-hidden" role="tablist" aria-label="Meal categories">
          {categories.map((item) => (
            <button
              key={item}
              type="button"
              role="tab"
              aria-selected={category === item}
              onClick={() => setCategory(item)}
              className={`min-h-9 shrink-0 cursor-pointer rounded-full border px-4 text-sm transition-all duration-200 ${
                category === item
                  ? "-translate-y-0.5 border-brand bg-brand font-semibold text-white shadow-[0_8px_18px_rgba(196,24,30,0.18)]"
                  : "border-border bg-white text-copy hover:-translate-y-0.5 hover:border-brand-blush hover:bg-brand-tint"
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        <div className="home-picks-header mt-4 flex shrink-0 items-center gap-3">
          <h3 className="font-bold leading-tight">Today&apos;s Picks</h3>
          <span className="rounded-full bg-gold-tint px-3 py-1 text-xs font-semibold text-gold">Best Sellers</span>
          <Link href="/menu" className="ml-auto text-sm font-bold text-brand underline underline-offset-4 transition hover:text-brand-deep">
            View more
          </Link>
        </div>

        <div key={category} className="home-product-grid mt-3 grid shrink-0 grid-cols-6 items-start gap-4 overflow-hidden">
          {visible.map((product) => (
            <div key={product.id} className="menu-card-enter">
              <ProductCard product={product} compact onAdd={() => setBagCount((count) => count + 1)} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
