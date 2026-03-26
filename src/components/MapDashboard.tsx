'use client';

import * as React from 'react';
import Map, { Marker, NavigationControl } from 'react-map-gl/mapbox';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Beef } from 'lucide-react';

export function MapDashboard({ markers = [] }: { markers?: any[] }) {
  // If no markers, default to Kaduna
  const initLng = markers.length > 0 ? markers[0].lng : 7.4383;
  const initLat = markers.length > 0 ? markers[0].lat : 10.5105;

  return (
    <Map
      mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_TOKEN || "pk.eyJ1IjoiZHVtbXl0b2tlbiIsImEiOiJjbXhxemV4M3MwMHRsMmxxMzBnMHhjYnpqIn0.dummy"}
      initialViewState={{
        longitude: initLng,
        latitude: initLat,
        zoom: 12
      }}
      mapStyle="mapbox://styles/mapbox/satellite-streets-v12"
      style={{ width: '100%', height: '100%' }}
    >
      {markers.map((m, i) => (
        <Marker key={m.id || i} longitude={m.lng} latitude={m.lat} anchor="bottom">
          <div 
            className="bg-[#004D40] text-white p-2 rounded-full shadow-lg border-2 border-[#76FF03] flex items-center justify-center animate-bounce hover:scale-110 transition-transform cursor-pointer"
            title={m.name}
          >
            <Beef size={24} />
          </div>
        </Marker>
      ))}
      <NavigationControl position="bottom-right" />
    </Map>
  );
}
