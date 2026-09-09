import { useEffect, useRef, useState } from "react";
import { MapView } from "@/components/Map";

export type StoreMapShop = {
  name: string;
  address: string;
};

type StoreMapProps = {
  shop: StoreMapShop;
};

export function StoreMap({ shop }: StoreMapProps) {
  const [map, setMap] = useState<google.maps.Map | null>(null);
  const markerRef = useRef<google.maps.marker.AdvancedMarkerElement | null>(null);

  useEffect(() => {
    if (!map || !window.google) return;

    const geocoder = new window.google.maps.Geocoder();
    geocoder.geocode({ address: `${shop.name} ${shop.address}` }, (results, status) => {
      if (status !== "OK" || !results?.[0]) {
        console.error(`Map geocoding failed for ${shop.name}: ${status}`);
        return;
      }

      const location = results[0].geometry.location;
      map.panTo(location);
      map.setZoom(16);

      if (markerRef.current) markerRef.current.map = null;
      markerRef.current = new window.google.maps.marker.AdvancedMarkerElement({
        map,
        position: location,
        title: shop.name,
      });
    });
  }, [map, shop]);

  return (
    <div className="store-map-frame" aria-label={`${shop.name}のGoogleマップ`}>
      <MapView
        className="store-map-canvas"
        initialCenter={{ lat: 35.1837, lng: 136.8656 }}
        initialZoom={9}
        onMapReady={(readyMap) => setMap(readyMap)}
      />
    </div>
  );
}
