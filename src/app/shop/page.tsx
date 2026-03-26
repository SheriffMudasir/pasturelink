'use client';

import { useState } from 'react';
import { marketplaceProducts } from '@/lib/mockData';
import { InterswitchPayButton } from '@/components/InterswitchPayButton';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function ShopPage() {
  return (
    <main className="min-h-screen bg-[#E8F5E9] p-8">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="text-center space-y-4 pt-12">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-[#004D40] tracking-tight">Marketplace</h1>
          <p className="text-xl text-[#004D40]/80 font-medium max-w-2xl mx-auto">
            Directly purchase premium, verified livestock from trusted herders.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {marketplaceProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </main>
  );
}

function ProductCard({ product }: { product: any }) {
  const [quantity, setQuantity] = useState(1);

  const increase = () => setQuantity(prev => (prev < product.stockRemaining ? prev + 1 : prev));
  const decrease = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1));

  return (
    <Card className="overflow-hidden shadow-lg border-0 hover:shadow-xl transition-shadow bg-white flex flex-col">
      <div 
        className="h-64 w-full bg-cover bg-center"
        style={{ backgroundImage: `url(${product.image})` }}
      />
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <CardTitle className="text-2xl font-bold text-[#004D40]">{product.name}</CardTitle>
          <span className="bg-[#E8F5E9] text-[#004D40] px-3 py-1 rounded-full text-sm font-semibold">
            {product.stockRemaining} in stock
          </span>
        </div>
        <CardDescription className="text-gray-500 font-medium mt-2">{product.description}</CardDescription>
        <div className="flex gap-4 mt-2 text-sm font-semibold text-gray-600">
          <span>Weight: {product.weight}</span>
          <span>Age: {product.age}</span>
        </div>
      </CardHeader>
      <CardContent className="flex-grow flex flex-col justify-end mt-4">
         <div className="flex justify-between items-center mb-4">
           <p className="text-3xl font-black text-[#004D40]">₦{product.priceNaira.toLocaleString()}</p>
           
           <div className="flex items-center gap-3 bg-gray-100 rounded-lg p-1">
             <Button variant="ghost" size="sm" onClick={decrease} className="h-8 w-8 p-0">-</Button>
             <span className="font-bold w-4 text-center">{quantity}</span>
             <Button variant="ghost" size="sm" onClick={increase} className="h-8 w-8 p-0">+</Button>
           </div>
         </div>
      </CardContent>
      <CardFooter className="pt-0">
        <InterswitchPayButton 
          amountNaira={product.priceNaira * quantity} 
          customerEmail="test@kwara.ng"
          itemType="MARKETPLACE"
          itemId={product.id}
          buttonText={`Checkout ₦${(product.priceNaira * quantity).toLocaleString()}`}
        />
      </CardFooter>
    </Card>
  );
}