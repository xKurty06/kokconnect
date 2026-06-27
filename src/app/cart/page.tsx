import type { Metadata } from "next";
import { CartClient } from "@/components/cart-client";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = { title: "Your Bag" };

export default function CartPage() {
  return (
    <div className="min-h-dvh bg-background">
      <SiteHeader />
      <main className="polished-page mx-auto max-w-[1320px] px-8 py-8">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand/70">Review items</p>
        <h1 className="mt-1 text-3xl font-bold">Your Bag</h1>
        <p className="mt-1 text-sm text-muted">Check your selected meals before continuing.</p>
        <div className="mt-6"><CartClient /></div>
      </main>
    </div>
  );
}
