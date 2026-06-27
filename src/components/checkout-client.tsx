"use client";

import Link from "next/link";
import { Banknote, CreditCard, Tag } from "lucide-react";
import { useState } from "react";
import { ButtonLink } from "@/components/ui/button";
import { cartItems, formatPrice } from "@/lib/mock-data";

export function CheckoutClient() {
  const [method, setMethod] = useState<"cod" | "opod">("cod");
  const subtotal = 473;
  const total = 458;

  return (
    <div className="grid grid-cols-[700px_340px] items-start gap-8">
      <section className="surface-card rounded-xl p-5" aria-labelledby="checkout-summary-title">
        <div className="flex items-center justify-between border-b border-border pb-4">
          <h2 id="checkout-summary-title" className="font-bold">Order Summary</h2>
          <span className="rounded-full bg-brand-tint px-3 py-1 text-xs font-semibold text-brand">Confirm details</span>
        </div>
        <div className="overflow-x-auto">
          <table className="mt-3 w-full min-w-[560px] text-left text-sm">
            <thead className="text-xs text-muted"><tr><th className="py-3 font-medium">Item</th><th className="py-3 font-medium">Qty</th><th className="py-3 font-medium">Unit Price</th><th className="py-3 font-medium">Subtotal</th></tr></thead>
            <tbody>{cartItems.map((item) => <tr key={item.id} className="interactive-row"><td className="rounded-l-lg py-3 pl-2">{item.name}</td><td>{item.quantity}</td><td>{formatPrice(item.price)}</td><td className="rounded-r-lg pr-2 font-semibold text-brand">{formatPrice(item.price * item.quantity)}</td></tr>)}</tbody>
          </table>
        </div>
        <dl className="ml-auto mt-5 grid max-w-72 gap-2 border-y border-border py-4 text-sm">
          <div className="flex justify-between"><dt className="text-muted">Subtotal Amount</dt><dd>{formatPrice(subtotal)}</dd></div>
          <div className="flex justify-between"><dt className="text-muted">Delivery Surcharge</dt><dd>{formatPrice(25)}</dd></div>
          <div className="flex justify-between"><dt className="text-muted">Voucher Discount</dt><dd className="text-success">- {formatPrice(40)}</dd></div>
        </dl>
        <div className="ml-auto flex max-w-72 justify-between rounded-xl bg-brand-tint px-4 py-3"><strong>Grand Total to Pay</strong><strong className="text-xl text-brand">{formatPrice(total)}</strong></div>

        <fieldset className="mt-5">
          <legend className="font-bold">Select Payment Method</legend>
          <div className="mt-3 grid grid-cols-2 gap-3">
            <label className={`flex min-h-16 cursor-pointer items-center gap-3 rounded-xl border-2 p-4 transition-all duration-200 ${method === "cod" ? "border-brand bg-brand-tint text-brand shadow-[0_10px_22px_rgba(196,24,30,0.10)]" : "border-border bg-background hover:border-brand-blush hover:bg-white"}`}>
              <input type="radio" name="payment" value="cod" checked={method === "cod"} onChange={() => setMethod("cod")} className="sr-only" />
              <Banknote className="size-5" /><span className="font-semibold">Cash on Delivery (COD)</span><span className={`ml-auto size-4 rounded-full border-4 ${method === "cod" ? "border-current" : "border-border"}`} />
            </label>
            <label className={`flex min-h-16 cursor-pointer items-center gap-3 rounded-xl border-2 p-4 transition-all duration-200 ${method === "opod" ? "border-brand bg-brand-tint text-brand shadow-[0_10px_22px_rgba(196,24,30,0.10)]" : "border-border bg-background hover:border-brand-blush hover:bg-white"}`}>
              <input type="radio" name="payment" value="opod" checked={method === "opod"} onChange={() => setMethod("opod")} className="sr-only" />
              <CreditCard className="size-5" /><span className="font-semibold">Online Payment on Delivery</span>
            </label>
          </div>
        </fieldset>
        <label className="mt-5 grid gap-2 text-sm font-medium">Apply Discount Voucher Code<span className="relative"><Tag className="absolute left-4 top-1/2 size-4 -translate-y-1/2 text-muted" /><input className="form-field h-12 w-full rounded-lg pl-10 pr-4 font-normal placeholder:text-muted" placeholder="e.g. KOKSFREEDEL" /></span></label>
        <div className="mt-5 grid grid-cols-[1fr_1.7fr] gap-3"><Link href="/cart" className="inline-flex min-h-12 items-center justify-center rounded-full border border-border bg-white font-semibold text-copy hover:bg-background">← Cancel</Link><ButtonLink href="/checkout/location" className="min-h-12">Confirm and Place Order ({formatPrice(total)})</ButtonLink></div>
      </section>
      <aside className="surface-card rounded-xl p-5">
        <h2 className="border-b border-border pb-4 font-bold">Delivering To</h2>
        <address className="mt-4 space-y-1 rounded-xl bg-background p-4 text-sm not-italic text-copy"><strong className="block text-ink">Juan Dela Paz</strong><p>+63 917 345 6789</p><p>CvSU Dormitory Building 3</p><p>Near Main Gate, Indang, Cavite</p></address>
        <Link href="/checkout/location" className="mt-4 inline-block text-sm font-semibold text-brand hover:text-brand-deep">Change Address</Link>
      </aside>
    </div>
  );
}
