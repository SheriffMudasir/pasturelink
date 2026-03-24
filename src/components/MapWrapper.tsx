'use client';

import dynamic from 'next/dynamic';

const MapClient = dynamic(
  () => import('./MapDashboard').then((mod) => mod.MapDashboard),
  { ssr: false }
);

export function MapWrapper() {
  return <MapClient />;
}
