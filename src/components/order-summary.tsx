import type { ReactNode } from "react";
import { formatPrice } from "@/lib/mock-data";

export interface SummaryItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

export function OrderSummary({ items, total, action, compact = false }: { items: SummaryItem[]; total: number; action?: ReactNode; compact?: boolean }) {
  return (
    <aside className="surface-card sticky top-24 rounded-xl p-5" aria-labelledby="summary-title">
      <div className="flex items-center justify-between border-b border-border pb-4">
        <h2 id="summary-title" className="text-base font-bold">Order Summary</h2>
        <span className="rounded-full bg-brand-tint px-3 py-1 text-xs font-semibold text-brand">{items.length} items</span>
      </div>
      <dl className={`grid ${compact ? "gap-2" : "gap-3"} py-5 text-sm`}>
        {items.map((item) => (
          <div key={item.id} className="interactive-row flex justify-between gap-6 rounded-lg px-2 py-2">
            <dt className="text-copy">{item.name} x{item.quantity}</dt>
            <dd className="shrink-0 font-medium tabular-nums">{formatPrice(item.price * item.quantity)}</dd>
          </div>
        ))}
      </dl>
      <div className="flex items-center justify-between rounded-xl border border-brand-blush bg-brand-tint px-4 py-3">
        <span className="font-bold">Total</span>
        <strong className="text-xl font-bold text-brand tabular-nums">{formatPrice(total)}</strong>
      </div>
      {action && <div className="mt-7">{action}</div>}
    </aside>
  );
}
