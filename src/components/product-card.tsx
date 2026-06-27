import Image from "next/image";
import { Timer } from "lucide-react";
import type { Product } from "@/lib/mock-data";
import { formatPrice } from "@/lib/mock-data";
import { Button } from "@/components/ui/button";

export function ProductCard({
  product,
  compact = false,
  onAdd,
}: {
  product: Product;
  compact?: boolean;
  onAdd?: (product: Product) => void;
}) {
  return (
    <article className="group min-w-0 overflow-hidden rounded-xl bg-white shadow-[0_4px_12px_rgba(0,0,0,0.07)]">
      <div
        className={`relative grid place-items-center overflow-hidden bg-border ${
          compact ? "aspect-[4/3]" : "aspect-[3/2]"
        }`}
      >
        <Image
          src={product.image}
          alt={`${product.name} meal`}
          fill
          sizes="320px"
          className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
        />

        {!compact && (
          <span className="absolute right-3 top-3 inline-flex items-center gap-1 rounded-full bg-brand-tint px-2.5 py-1 text-[11px] font-semibold text-brand">
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
        <h3 className="truncate text-sm font-bold text-ink">{product.name}</h3>
        <p className="text-sm font-bold text-brand">{formatPrice(product.price)}</p>

        <Button
          className="mt-1 w-full min-h-9 py-2 text-sm"
          disabled={!product.available}
          onClick={() => onAdd?.(product)}
        >
          {product.available ? "Add to Bag" : "Unavailable"}
        </Button>
      </div>
    </article>
  );
}