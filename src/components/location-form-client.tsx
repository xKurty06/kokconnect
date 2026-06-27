"use client";

import { AlertCircle, ChevronDown } from "lucide-react";
import { useState } from "react";
import { InteractiveMap, type MapPosition } from "@/components/map/interactive-map";
import { ButtonLink } from "@/components/ui/button";

const DEFAULT_MAP_POSITION: MapPosition = [14.195484, 120.88143];
const formatPosition = (position: MapPosition) => `Lat: ${position[0].toFixed(6)}, Lon: ${position[1].toFixed(6)}`;

export function LocationFormClient() {
  const [mapPosition, setMapPosition] = useState<MapPosition>(DEFAULT_MAP_POSITION);

  return (
    <div className="mt-6 grid grid-cols-2 gap-8">
      <div className="surface-card overflow-hidden rounded-2xl p-3">
        <InteractiveMap
          value={mapPosition}
          onChange={setMapPosition}
          popupTitle="Selected delivery location"
          className="min-h-[620px] rounded-xl border-[14px] border-[#e7ede5]"
        />
      </div>
      <form className="surface-card rounded-xl p-6" action="#">
        <h2 className="text-xl font-bold">Delivery Location Details</h2>
        <p className="mt-1 text-sm text-muted">Choose the map location, then add a clear building, unit, or landmark reference.</p>
        <div className="mt-6 grid gap-5">
          <label className="grid gap-2 text-sm font-semibold">
            Selected Coordinates
            <input readOnly value={formatPosition(mapPosition)} className="form-field h-12 rounded-lg px-4 font-normal text-copy" />
          </label>
          <label className="grid gap-2 text-sm font-semibold">
            Building / Street Name / Block &amp; Lot
            <input placeholder="e.g. Unit 204, Villa Lucia Subdivision" className="form-field h-12 rounded-lg px-4 font-normal placeholder:text-muted" />
          </label>
          <label className="relative grid gap-2 text-sm font-semibold">
            Select Dorm / Landmark
            <select className="form-select h-12 appearance-none rounded-lg px-4 pr-10 font-normal text-muted">
              <option>Select or type your dorm / landmark</option>
              <option>CvSU Dormitory Building 3</option>
              <option>Main Gate</option>
            </select>
            <ChevronDown className="absolute bottom-4 right-4 size-4 text-muted" />
          </label>
          <label className="grid gap-2 text-sm font-semibold">
            Delivery Notes (Optional)
            <textarea rows={3} placeholder="e.g. Near the blue gate, 2nd floor room 3" className="form-area resize-none rounded-lg p-4 font-normal placeholder:text-muted" />
          </label>
          <p className="flex items-center gap-2 rounded-lg border border-brand-blush bg-brand-tint p-3 text-sm font-medium text-brand">
            <AlertCircle className="size-4 shrink-0" />
            The coordinate field updates when you choose a new map location.
          </p>
          <ButtonLink href="/order-tracking" className="w-full">Confirm Address</ButtonLink>
        </div>
      </form>
    </div>
  );
}
