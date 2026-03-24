'use client';

import * as React from 'react';
import Map, { Marker, NavigationControl } from 'react-map-gl/mapbox';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Beef } from 'lucide-react';

export function MapDashboard() {
  return (
    <Map
      mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_TOKEN || "pk.eyJ1IjoiZHVtbXl0b2tlbiIsImEiOiJjbXhxemV4M3MwMHRsMmxxMzBnMHhjYnpqIn0.dummy"}
      initialViewState={{
        longitude: 7.4383, // Kaduna Longitude
        latitude: 10.5105, // Kaduna Latitude
        zoom: 12
      }}
      mapStyle="mapbox://styles/mapbox/satellite-streets-v12"
      style={{ width: '100%', height: '100%' }}
    >
      <Marker longitude={7.4383} latitude={10.5105} anchor="bottom">
        <div className="bg-[#004D40] text-white p-2 rounded-full shadow-lg border-2 border-[#76FF03] flex items-center justify-center animate-bounce hover:scale-110 transition-transform cursor-pointer">
          <Beef size={24} />
        </div>
      </Marker>
      <NavigationControl position="bottom-right" />
    </Map>
  );
}
