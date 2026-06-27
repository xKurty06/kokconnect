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
    <aside className="rounded-xl bg-white p-5 shadow-[0_4px_14px_rgba(0,0,0,0.08)]" aria-labelledby="summary-title">
      <h2 id="summary-title" className="border-b border-border pb-4 text-base font-bold">Order Summary</h2>
      <dl className={`grid ${compact ? "gap-2" : "gap-4"} py-5 text-sm`}>
        {items.map((item) => (
          <div key={item.id} className="flex justify-between gap-6">
            <dt className="text-copy">{item.name} x{item.quantity}</dt>
            <dd className="shrink-0 font-medium tabular-nums">{formatPrice(item.price * item.quantity)}</dd>
          </div>
        ))}
      </dl>
      <div className="flex items-center justify-between border-t border-border pt-5">
        <span className="font-bold">Total</span>
        <strong className="text-xl font-bold text-brand tabular-nums">{formatPrice(total)}</strong>
      </div>
      {action && <div className="mt-7">{action}</div>}
    </aside>
  );
}
