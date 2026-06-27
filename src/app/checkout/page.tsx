import type { Metadata } from "next";
import { CheckoutClient } from "@/components/checkout-client";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = { title: "Checkout" };

export default function CheckoutPage() {
  return (
    <div className="min-h-dvh bg-background">
      <SiteHeader />
      <main className="polished-page mx-auto max-w-[1320px] px-8 py-8">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand/70">Secure frontend preview</p>
        <h1 className="mt-1 text-3xl font-bold">Payment &amp; Order Confirmation</h1>
        <p className="mt-1 text-sm text-muted">Confirm the order details and preferred payment option.</p>
        <div className="mt-6"><CheckoutClient /></div>
      </main>
      <SiteFooter />
    </div>
  );
}
