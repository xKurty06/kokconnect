"use client";

import Link from "next/link";
import Image from "next/image";
import { Minus, Plus } from "lucide-react";
import { useMemo, useState } from "react";
import { OrderSummary, type SummaryItem } from "@/components/order-summary";
import { ButtonLink } from "@/components/ui/button";
import { cartItems, formatPrice } from "@/lib/mock-data";

export function CartClient() {
  const [items, setItems] = useState<SummaryItem[]>(cartItems);
  const total = useMemo(() => items.reduce((sum, item) => sum + item.price * item.quantity, 0), [items]);

  const changeQuantity = (id: string, change: number) => {
    setItems((current) => current.map((item) => item.id === id ? { ...item, quantity: Math.max(1, item.quantity + change) } : item));
  };

  return (
    <div className="grid grid-cols-[1fr_480px] gap-8">
      <section className="surface-card rounded-xl p-5" aria-labelledby="cart-items-title">
        <div className="flex items-center justify-between border-b border-border pb-4">
          <h2 id="cart-items-title" className="font-bold">Items in your cart ({items.length} items)</h2>
          <span className="rounded-full bg-gold-tint px-3 py-1 text-xs font-semibold text-gold-deep">Ready to checkout</span>
        </div>
        <div className="divide-y divide-border">
          {items.map((item) => (
            <article key={item.id} className="interactive-row grid grid-cols-[64px_1fr_auto_auto] items-center gap-4 rounded-xl px-3 py-5">
              <div className="relative size-16 overflow-hidden rounded-xl bg-border shadow-sm">
                <Image src={item.image} alt={`${item.name} thumbnail`} fill sizes="64px" className="object-cover transition duration-300 hover:scale-105" />
              </div>
              <div>
                <h3 className="font-semibold">{item.name}</h3>
                <p className="mt-1 text-sm font-bold text-brand">{formatPrice(item.price)}</p>
              </div>
              <div className="flex items-center gap-2 rounded-full bg-background p-1" aria-label={`Quantity for ${item.name}`}>
                <button onClick={() => changeQuantity(item.id, -1)} className="grid size-9 cursor-pointer place-items-center rounded-full bg-white text-copy shadow-sm hover:bg-brand-tint hover:text-brand" aria-label={`Remove one ${item.name}`}><Minus className="size-4" /></button>
                <span key={item.quantity} className="bag-bump w-8 text-center font-semibold tabular-nums">{item.quantity}</span>
                <button onClick={() => changeQuantity(item.id, 1)} className="grid size-9 cursor-pointer place-items-center rounded-full bg-white text-copy shadow-sm hover:bg-brand-tint hover:text-brand" aria-label={`Add one ${item.name}`}><Plus className="size-4" /></button>
              </div>
              <strong className="tabular-nums text-brand">{formatPrice(item.price * item.quantity)}</strong>
            </article>
          ))}
        </div>
      </section>
      <OrderSummary items={items} total={total} action={<><ButtonLink href="/checkout" className="w-full">Place Order</ButtonLink><Link href="/menu" className="mt-4 block text-center text-sm font-semibold text-brand hover:text-brand-deep">← Continue Shopping</Link></>} />
    </div>
  );
}
