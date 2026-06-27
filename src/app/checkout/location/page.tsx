import Link from "next/link";
import { MapPin } from "lucide-react";
import type { Metadata } from "next";
import { LocationFormClient } from "@/components/location-form-client";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = { title: "Delivery Location" };

export default function LocationPage() {
  return (
    <div className="min-h-dvh bg-background">
      <SiteHeader />
      <main className="polished-page mx-auto max-w-[1320px] px-8 py-8">
        <Link href="/checkout" className="text-sm font-semibold text-muted hover:text-brand">← Back to Your Order</Link>
        <div className="mt-5 flex items-end justify-between gap-5">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand/70">Location details</p>
            <h1 className="mt-1 text-3xl font-bold">Confirm Delivery Location</h1>
            <p className="mt-1 text-sm text-muted">Choose the map location and add a clear delivery reference.</p>
          </div>
          <span className="inline-flex items-center gap-2 rounded-full bg-gold-tint px-4 py-2 text-sm font-semibold text-gold-deep"><MapPin className="size-4" /> Indang / CvSU Area</span>
        </div>
        <LocationFormClient />
      </main>
    </div>
  );
}
