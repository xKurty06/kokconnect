import { AlertCircle, Check } from "lucide-react";
import type { Metadata } from "next";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { ButtonLink } from "@/components/ui/button";
import { formatPrice } from "@/lib/mock-data";

export const metadata: Metadata = { title: "Order Tracking" };
const steps = ["Order Placed", "Preparing Meal", "Out for Delivery", "Delivered"];

export default function TrackingPage() {
  return (
    <div className="min-h-dvh bg-background">
      <SiteHeader />
      <main className="polished-page mx-auto max-w-[1320px] px-8 py-8">
        <p className="flex items-center gap-2 rounded-xl border border-brand-blush bg-brand-tint p-4 text-sm font-medium text-brand"><AlertCircle className="size-4" />Refresh the page to check for the latest status update.</p>
        <section className="surface-card mt-8 rounded-xl p-6">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand/70">Status preview</p>
              <h1 className="mt-1 text-xl font-bold">Order #KK-0045 Status Tracking</h1>
              <p className="mt-1 text-sm text-muted">Estimated Delivery: 25–35 mins (Placed at 12:45 PM Today)</p>
            </div>
            <span className="rounded-full bg-gold-tint px-4 py-2 text-sm font-semibold text-gold-deep">25–35 mins</span>
          </div>
          <ol className="mt-8 grid grid-cols-4" aria-label="Order progress">
            {steps.map((step, index) => (
              <li key={step} className="relative flex flex-col items-center gap-2 text-center">
                <span className={`relative z-10 grid size-10 place-items-center rounded-full font-bold ${index === 0 ? "bg-success text-white" : index === 1 ? "status-pulse bg-brand text-white" : "bg-border text-muted"}`}>{index === 0 ? <Check className="size-5" /> : index + 1}</span>
                {index < steps.length - 1 && <span className="absolute left-1/2 top-5 h-0.5 w-full border-t-2 border-dashed border-muted/70" />}
                <span className={`text-sm ${index === 1 ? "font-bold text-ink" : "text-muted"}`}>{step}</span>
              </li>
            ))}
          </ol>
        </section>
        <section className="surface-card mt-8 rounded-xl p-6">
          <h2 className="border-b border-border pb-4 text-lg font-bold">Your Order Summary</h2>
          <div className="grid gap-2 py-5 text-sm">
            <p className="interactive-row flex justify-between rounded-lg px-3 py-2"><span>Crispy Fried Chicken x2</span><span>{formatPrice(180)}</span></p>
            <p className="interactive-row flex justify-between rounded-lg px-3 py-2"><span>Pork Sisig x1</span><span>{formatPrice(120)}</span></p>
            <p className="interactive-row flex justify-between rounded-lg px-3 py-2"><span>Extra Rice x3</span><span>{formatPrice(60)}</span></p>
          </div>
          <div className="flex flex-wrap items-center justify-between gap-4 rounded-xl border border-brand-blush bg-brand-tint px-4 py-3">
            <span className="text-sm text-brand">Payment method: Cash on Delivery</span>
            <strong className="text-lg text-brand">Total Amount: {formatPrice(360)}</strong>
          </div>
          <ButtonLink href="/" variant="ghost" className="mt-5">Back to Home</ButtonLink>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
