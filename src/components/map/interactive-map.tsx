"use client";

import dynamic from "next/dynamic";

export type MapPosition = [number, number];

export interface InteractiveMapProps {
  className?: string;
  value?: MapPosition;
  onChange?: (position: MapPosition) => void;
  popupTitle?: string;
  popupDescription?: string;
}

const LeafletMap = dynamic<InteractiveMapProps>(() => import("./leaflet-map").then((module) => module.LeafletMap), {
  ssr: false,
  loading: () => <div className="h-full w-full animate-pulse bg-[#dce4da]" aria-label="Loading interactive map" />,
});

export function InteractiveMap({ className = "", value, onChange, popupTitle, popupDescription }: InteractiveMapProps) {
  return (
    <div className={`relative overflow-hidden bg-[#dce4da] ${className}`}>
      <LeafletMap value={value} onChange={onChange} popupTitle={popupTitle} popupDescription={popupDescription} />
    </div>
  );
}
