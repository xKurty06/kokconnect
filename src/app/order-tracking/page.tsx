import { AlertCircle, Check, Circle } from "lucide-react";
import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { ButtonLink } from "@/components/ui/button";
import { formatPrice } from "@/lib/mock-data";

export const metadata: Metadata = { title: "Order Tracking" };
const steps = ["Order Placed", "Preparing Meal", "Out for Delivery", "Delivered"];

export default function TrackingPage() {
  return (
    <div className="min-h-dvh bg-background"><SiteHeader /><main className="mx-auto max-w-[1320px] px-8 py-8">
      <p className="flex items-center gap-2 rounded-lg border border-brand-blush bg-brand-tint p-4 text-sm font-medium text-brand"><AlertCircle className="size-4" />Refresh the page to check for the latest status update.</p>
      <section className="mt-8 rounded-xl bg-white p-6 shadow-[0_4px_14px_rgba(0,0,0,0.08)]"><h1 className="text-lg font-bold">Order #KK-0045 Status Tracking</h1><p className="mt-1 text-sm text-muted">Estimated Delivery: 25–35 mins (Placed at 12:45 PM Today)</p>
        <ol className="mt-8 grid grid-cols-4" aria-label="Order progress">{steps.map((step, index) => <li key={step} className="relative flex flex-col items-center gap-2 text-center"><span className={`relative z-10 grid size-10 place-items-center rounded-full font-bold ${index === 0 ? "bg-success text-white" : index === 1 ? "bg-brand text-white" : "bg-border text-muted"}`}>{index === 0 ? <Check className="size-5" /> : index + 1}</span>{index < steps.length - 1 && <span className="absolute left-1/2 top-5 h-0.5 w-full border-t-2 border-dashed border-muted/70" />}<span className={`text-sm ${index === 1 ? "font-bold text-ink" : "text-muted"}`}>{step}</span></li>)}</ol>
      </section>
      <section className="mt-8 rounded-xl bg-white p-6 shadow-[0_4px_14px_rgba(0,0,0,0.08)]"><h2 className="border-b border-border pb-4 text-lg font-bold">Your Order Summary</h2><div className="grid gap-3 py-5 text-sm"><p className="flex justify-between"><span>Crispy Fried Chicken x2</span><span>{formatPrice(180)}</span></p><p className="flex justify-between"><span>Pork Sisig x1</span><span>{formatPrice(120)}</span></p><p className="flex justify-between"><span>Extra Rice x3</span><span>{formatPrice(60)}</span></p></div><div className="flex flex-wrap items-center justify-between gap-4 border-t border-border pt-5"><span className="text-sm text-muted">Paid via Cash on Delivery</span><strong className="text-lg text-brand">Total Amount: {formatPrice(360)}</strong></div><ButtonLink href="/" variant="ghost" className="mt-5">Contact Support / Courier</ButtonLink></section>
    </main></div>
  );
}
