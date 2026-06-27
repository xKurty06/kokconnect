"use client";

import L from "leaflet";
import { useCallback, useMemo, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer, useMapEvents } from "react-leaflet";
import type { InteractiveMapProps, MapPosition } from "./interactive-map";

const DEFAULT_POSITION: MapPosition = [14.195484, 120.88143];

function MapClickHandler({ onPick }: { onPick: (position: MapPosition) => void }) {
  useMapEvents({
    click(event) {
      onPick([event.latlng.lat, event.latlng.lng]);
    },
  });

  return null;
}

export function LeafletMap({ value, onChange, popupTitle = "Delivery location", popupDescription = "Select a point on the map or move the marker." }: InteractiveMapProps) {
  const [localPosition, setLocalPosition] = useState<MapPosition>(value ?? DEFAULT_POSITION);
  const activePosition = value ?? localPosition;

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

  const updatePosition = useCallback(
    (nextPosition: MapPosition) => {
      setLocalPosition(nextPosition);
      onChange?.(nextPosition);
    },
    [onChange],
  );

  const markerEvents = useMemo(
    () => ({
      dragend(event: L.LeafletEvent) {
        const marker = event.target as L.Marker;
        const next = marker.getLatLng();
        updatePosition([next.lat, next.lng]);
      },
    }),
    [updatePosition],
  );

  return (
    <>
      <MapContainer center={activePosition} zoom={16} scrollWheelZoom className="h-full min-h-[inherit] w-full" aria-label="Editable delivery map">
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <MapClickHandler onPick={updatePosition} />
        <Marker position={activePosition} icon={markerIcon} draggable eventHandlers={markerEvents}>
          <Popup>
            <strong>{popupTitle}</strong>
            <br />
            {popupDescription}
          </Popup>
        </Marker>
      </MapContainer>
      <div className="pointer-events-none absolute left-3 top-3 z-[500] rounded-xl bg-white/95 px-3 py-2 text-xs font-semibold text-copy shadow-lg ring-1 ring-black/5 backdrop-blur">
        Select map point or move marker
      </div>
    </>
  );
}
