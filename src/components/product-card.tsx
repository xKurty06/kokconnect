"use client";

import Image from "next/image";
import { Check, Timer } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import type { Product } from "@/lib/mock-data";
import { formatPrice } from "@/lib/mock-data";
import { Button } from "@/components/ui/button";

export function ProductCard({
  product,
  compact = false,
  menuDense = false,
  onAdd,
}: {
  product: Product;
  compact?: boolean;
  menuDense?: boolean;
  onAdd?: (product: Product) => void;
}) {
  const [added, setAdded] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  function handleAdd() {
    if (!product.available) return;
    onAdd?.(product);
    setAdded(true);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => setAdded(false), 950);
  }

  return (
    <article className="group relative min-w-0 overflow-hidden rounded-xl bg-white shadow-[0_4px_12px_rgba(0,0,0,0.07)] ring-1 ring-black/[0.03] transition duration-200 ease-out hover:-translate-y-1 hover:shadow-[0_14px_30px_rgba(0,0,0,0.12)]">
      <span className="absolute inset-x-0 top-0 z-10 h-1 origin-left scale-x-0 bg-gradient-to-r from-gold-warm via-brand-vivid to-brand transition-transform duration-300 group-hover:scale-x-100" />

      <div
        className={`relative grid place-items-center overflow-hidden bg-border ${
          compact ? "aspect-[4/3]" : menuDense ? "aspect-[5/3]" : "aspect-[3/2]"
        }`}
      >
        <Image
          src={product.image}
          alt={`${product.name} meal`}
          fill
          sizes={menuDense ? "260px" : "320px"}
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.055]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-70 transition-opacity duration-300 group-hover:opacity-100" />

        {!compact && (
          <span className={`absolute right-3 top-3 inline-flex items-center gap-1 rounded-full bg-white/95 font-semibold text-brand shadow-sm ring-1 ring-black/5 backdrop-blur ${menuDense ? "px-2 py-0.5 text-[10px]" : "px-2.5 py-1 text-[11px]"}`}>
            <Timer className="size-3" />
            {product.prepTime}
          </span>
        )}

        {!product.available && (
          <span className="absolute inset-0 grid place-items-center bg-ink/65 text-sm font-semibold text-white">
            Sold Out
          </span>
        )}
      </div>

      <div className="grid gap-1.5 p-2.5">
        <div className="flex min-w-0 items-start justify-between gap-2">
          <h3 className="truncate text-sm font-bold text-ink">{product.name}</h3>
          {!compact && <span className="shrink-0 rounded-full bg-gold-tint px-2 py-0.5 text-[10px] font-semibold text-gold-deep">Fresh</span>}
        </div>
        <p className="text-sm font-bold text-brand">{formatPrice(product.price)}</p>

        <Button
          className={`${menuDense ? "mt-1 min-h-9" : "mt-1 min-h-9"} w-full py-2 text-sm ${added ? "bg-success border-success text-white hover:bg-success" : ""}`}
          disabled={!product.available}
          onClick={handleAdd}
          aria-live="polite"
        >
          {added ? (
            <>
              <Check className="size-4" /> Added
            </>
          ) : product.available ? (
            "Add to Bag"
          ) : (
            "Unavailable"
          )}
        </Button>
      </div>
    </article>
  );
}
