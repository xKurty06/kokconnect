"use client";

import Link from "next/link";
import { useHomeBag } from "@/components/home-bag";
import { ProductCard } from "@/components/product-card";
import { products } from "@/lib/mock-data";

const DESKTOP_CONTAINER = "mx-auto w-full max-w-[1560px] px-8";
const todaysPicks = products.slice(0, 6);

export function CatalogClient() {
  const { incrementBag } = useHomeBag();

  return (
    <section
      className="min-h-0 flex-1 overflow-visible py-4"
      aria-labelledby="todays-picks-heading"
    >
      <div
        className={`${DESKTOP_CONTAINER} flex h-full min-h-0 flex-col overflow-visible`}
      >
        <div className="home-picks-header flex shrink-0 items-center gap-3">
          <h2
            id="todays-picks-heading"
            className="text-2xl font-extrabold leading-tight tracking-tight text-ink"
          >
            Today&apos;s Picks
          </h2>
          <span className="rounded-full bg-gold-tint px-3 py-1 text-xs font-semibold text-gold">
            Best Sellers
          </span>
          <Link
            href="/menu"
            className="group ml-auto inline-flex min-h-11 items-center rounded-sm px-1 text-sm font-bold text-brand transition-colors duration-200 hover:text-brand-deep focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
          >
            <span className="relative pb-1">
              View more
              <span
                aria-hidden="true"
                className="absolute inset-x-0 bottom-0 h-0.5 overflow-hidden bg-brand/25"
              >
                <span className="block h-full w-full origin-left scale-x-0 bg-current transition-transform duration-300 ease-out group-hover:scale-x-100 group-focus-visible:scale-x-100" />
              </span>
            </span>
          </Link>
        </div>

        <div className="home-product-grid mt-3 grid shrink-0 grid-cols-6 items-start gap-4 overflow-visible">
          {todaysPicks.map((product) => (
            <div key={product.id} className="menu-card-enter">
              <ProductCard
                product={product}
                compact
                onAdd={incrementBag}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
