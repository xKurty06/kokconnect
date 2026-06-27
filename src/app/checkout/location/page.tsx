import Link from "next/link";
import { AlertCircle, ChevronDown } from "lucide-react";
import type { Metadata } from "next";
import { InteractiveMap } from "@/components/map/interactive-map";
import { SiteHeader } from "@/components/site-header";
import { ButtonLink } from "@/components/ui/button";

export const metadata: Metadata = { title: "Delivery Location" };

export default function LocationPage() {
  return (
    <div className="min-h-dvh bg-background">
      <SiteHeader />
      <main className="mx-auto max-w-[1320px] px-8 py-8">
        <Link href="/checkout" className="text-sm text-muted">← Back to Your Order</Link>
        <div className="mt-6 grid grid-cols-2 gap-8">
          <InteractiveMap className="min-h-[620px] rounded-2xl border-[14px] border-[#e7ede5]" />
          <form className="rounded-xl bg-white p-6 shadow-[0_4px_14px_rgba(0,0,0,0.08)]" action="#">
            <h1 className="text-xl font-bold">Delivery Location Details</h1><p className="mt-1 text-sm text-muted">Specify your exact building, unit, or dorm reference point.</p>
            <div className="mt-6 grid gap-5">
              <label className="grid gap-2 text-sm font-semibold">Pinned Location Coordinates (Autofilled)<input readOnly value="Lat: 14.195484, Lon: 120.881430 (Near CvSU Campus)" className="h-12 rounded-lg border-0 bg-background px-4 font-normal text-copy" /></label>
              <label className="grid gap-2 text-sm font-semibold">Building / Street Name / Block &amp; Lot<input placeholder="e.g. Unit 204, Villa Lucia Subdivision" className="h-12 rounded-lg border-0 bg-background px-4 font-normal placeholder:text-muted" /></label>
              <label className="relative grid gap-2 text-sm font-semibold">Select Dorm / Landmark (For Delivery Route Optimization)<select className="h-12 appearance-none rounded-lg border border-border bg-white px-4 pr-10 font-normal text-muted"><option>Select or type your dorm / landmark</option><option>CvSU Dormitory Building 3</option><option>Main Gate</option></select><ChevronDown className="absolute bottom-4 right-4 size-4 text-muted" /></label>
              <label className="grid gap-2 text-sm font-semibold">Delivery Notes (Optional)<textarea rows={3} placeholder="e.g. Near the blue gate, 2nd floor room 3" className="resize-none rounded-lg border-0 bg-background p-4 font-normal placeholder:text-muted" /></label>
              <p className="flex items-center gap-2 rounded-lg border border-brand-blush bg-brand-tint p-3 text-sm font-medium text-brand"><AlertCircle className="size-4 shrink-0" />We currently deliver within Indang and CvSU area only.</p>
              <ButtonLink href="/order-tracking" className="w-full">Confirm Address</ButtonLink>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}
