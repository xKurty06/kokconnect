"use client";

import L from "leaflet";
import { useMemo } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

// TODO: Verify the precise storefront coordinates for Kuya Kok's in Bancod 3, Indang, Cavite.
const BUSINESS_POSITION: [number, number] = [14.195484, 120.88143];

export function LeafletMap() {
  const markerIcon = useMemo(
    () =>
      L.divIcon({
        className: "kuya-kok-map-marker",
        html: '<span aria-hidden="true"></span>',
        iconSize: [38, 48],
        iconAnchor: [19, 46],
        popupAnchor: [0, -42],
      }),
    [],
  );

  return (
    <MapContainer center={BUSINESS_POSITION} zoom={16} scrollWheelZoom className="h-full min-h-[inherit] w-full" aria-label="Interactive map showing Kuya Kok's Griddle and Grill">
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={BUSINESS_POSITION} icon={markerIcon}>
        <Popup>
          <strong>Kuya Kok&apos;s Griddle and Grill</strong>
          <br />Bancod 3, Indang, Cavite
        </Popup>
      </Marker>
    </MapContainer>
  );
}
