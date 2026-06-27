"use client";

import dynamic from "next/dynamic";

const LeafletMap = dynamic(() => import("./leaflet-map").then((module) => module.LeafletMap), {
  ssr: false,
  loading: () => <div className="h-full w-full animate-pulse bg-[#dce4da]" aria-label="Loading interactive map" />,
});

export function InteractiveMap({ className = "" }: { className?: string }) {
  return (
    <div className={`relative overflow-hidden bg-[#dce4da] ${className}`}>
      <LeafletMap />
    </div>
  );
}
