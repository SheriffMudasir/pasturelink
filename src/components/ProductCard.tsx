'use client';

import { useState } from 'react';
import InterswitchPayButton from '@/components/InterswitchPayButton';
import { Button } from '@/components/ui/button';

export function ProductCard({ product, userId, userEmail }: { product: any, userId?: string, userEmail?: string }) {
  const [quantity, setQuantity] = useState(1);
  const metadata = product.metadata || {};

  const increase = () => setQuantity(prev => (prev < product.stock ? prev + 1 : prev));
  const decrease = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1));

  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col">
      {/* Compact Image */}
      <div className="relative h-48 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
          style={{ backgroundImage: `url(${product.image_url})` }}
        />
        <div className="absolute top-3 right-3">
          <span className="bg-white/90 backdrop-blur-sm text-[#004D40] px-2.5 py-1 rounded-full text-xs font-bold shadow-sm">
            {product.stock} left
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-lg font-bold text-gray-900 leading-tight">{product.name}</h3>
        <p className="text-gray-500 text-xs mt-1 line-clamp-2">{metadata.description}</p>

        {/* Details Chips */}
        <div className="flex flex-wrap gap-1.5 mt-3">
          {metadata.weight && (
            <span className="bg-gray-50 text-gray-600 px-2 py-0.5 rounded text-[11px] font-medium">
              {metadata.weight}
            </span>
          )}
          {metadata.age && (
            <span className="bg-gray-50 text-gray-600 px-2 py-0.5 rounded text-[11px] font-medium">
              {metadata.age}
            </span>
          )}
          {product.breed && (
            <span className="bg-gray-50 text-gray-600 px-2 py-0.5 rounded text-[11px] font-medium">
              {product.breed}
            </span>
          )}
        </div>

        {/* Price + Quantity */}
        <div className="mt-auto pt-4 space-y-3">
          <div className="flex justify-between items-end">
            <p className="text-2xl font-black text-[#004D40]">₦{product.price_naira.toLocaleString()}</p>
            <div className="flex items-center gap-2 bg-gray-50 rounded-lg px-1">
              <Button variant="ghost" size="sm" onClick={decrease} className="h-7 w-7 p-0 text-base">−</Button>
              <span className="font-bold text-sm w-3 text-center">{quantity}</span>
              <Button variant="ghost" size="sm" onClick={increase} className="h-7 w-7 p-0 text-base">+</Button>
            </div>
          </div>

          <InterswitchPayButton 
            amountNaira={product.price_naira * quantity} 
            customerEmail={userEmail || "customer@pasturelink.ng"}
            productId={product.id}
            userId={userId}
            itemType="MARKETPLACE"
          />
        </div>
      </div>
    </div>
  );
}
