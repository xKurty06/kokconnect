import type { Metadata } from "next";
import { CheckoutClient } from "@/components/checkout-client";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = { title: "Checkout" };

export default function CheckoutPage() {
  return <div className="min-h-dvh bg-background"><SiteHeader /><main className="mx-auto max-w-[1320px] px-8 py-8"><h1 className="text-3xl font-bold">Payment &amp; Order Confirmation</h1><div className="mt-6"><CheckoutClient /></div></main></div>;
}
