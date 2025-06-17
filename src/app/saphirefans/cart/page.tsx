
"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useCart } from '../context/CartContext';
import { Button } from '@/components/ui/button';
import { Trash2, Plus, Minus, ShoppingBag, Home, ChevronRight } from 'lucide-react';
import type { Metadata } from 'next';

// Metadata can still be defined for static pages or initial load even if page is client component
export const metadata: Metadata = {
  title: 'Your Shopping Cart | SaphireFans Pakistan',
  description: 'Review and manage items in your SaphireFans shopping cart. Proceed to checkout to complete your industrial fan purchase in Pakistan.',
};


export default function CartPage() {
  const { items, removeFromCart, updateQuantity, getCartTotal, clearCart } = useCart();

  const handleQuantityChange = (id: string, currentQuantity: number, change: number) => {
    const newQuantity = currentQuantity + change;
    if (newQuantity < 1) {
      removeFromCart(id); // Or set to 1 if you prefer not to remove automatically
    } else {
      updateQuantity(id, newQuantity);
    }
  };

  const subtotal = getCartTotal();
  // Simple shipping, can be made more complex later
  const shippingCost = subtotal > 0 ? 500 : 0; // Example: PKR 500 shipping, free if cart empty
  const total = subtotal + shippingCost;

  return (
    <div className="space-y-8">
      <nav className="text-sm text-slate-600 mb-6" aria-label="Breadcrumb">
        <ol className="list-none p-0 inline-flex items-center space-x-2">
          <li><Link href="/saphirefans" className="hover:text-sky-600 flex items-center"><Home className="h-4 w-4 mr-1.5" />Home</Link></li>
          <li><ChevronRight className="h-4 w-4 text-slate-400" /></li>
          <li className="font-medium text-sky-700" aria-current="page">Shopping Cart</li>
        </ol>
      </nav>

      <h1 className="text-3xl md:text-4xl font-bold text-slate-700">Your Shopping Cart</h1>

      {items.length === 0 ? (
        <div className="text-center py-12 bg-white rounded-lg shadow-md p-8">
          <ShoppingBag className="h-16 w-16 text-slate-400 mx-auto mb-4" />
          <p className="text-xl text-slate-600 mb-2">Your cart is currently empty.</p>
          <p className="text-slate-500 mb-6">Looks like you haven't added any industrial fans to your cart yet.</p>
          <Button asChild className="bg-sky-600 hover:bg-sky-700 text-white">
            <Link href="/saphirefans">Continue Shopping</Link>
          </Button>
        </div>
      ) : (
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-4">
            {items.map((item) => (
              <div key={item.id} className="bg-white p-4 rounded-lg shadow-md flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <Link href={`/saphirefans/product/${item.slug}`} className="flex-shrink-0">
                  <Image
                    src={item.imageUrl}
                    alt={item.name}
                    width={100}
                    height={100}
                    className="rounded-md object-contain border border-slate-200"
                    data-ai-hint={item.dataAiHint}
                  />
                </Link>
                <div className="flex-grow">
                  <Link href={`/saphirefans/product/${item.slug}`}>
                    <h2 className="text-lg font-semibold text-sky-700 hover:underline">{item.name}</h2>
                  </Link>
                  <p className="text-sm text-slate-500">Unit Price: PKR {item.price.toLocaleString()}</p>
                </div>
                <div className="flex items-center space-x-3 sm:ml-auto mt-3 sm:mt-0">
                  <div className="flex items-center border border-slate-300 rounded-md">
                    <Button variant="ghost" size="icon" onClick={() => handleQuantityChange(item.id, item.quantity, -1)} className="h-8 w-8 text-slate-600 hover:bg-slate-100 rounded-r-none"> <Minus className="h-4 w-4"/> </Button>
                    <span className="w-10 text-center text-sm font-medium">{item.quantity}</span>
                    <Button variant="ghost" size="icon" onClick={() => handleQuantityChange(item.id, item.quantity, 1)} className="h-8 w-8 text-slate-600 hover:bg-slate-100 rounded-l-none"> <Plus className="h-4 w-4"/> </Button>
                  </div>
                  <p className="text-md font-semibold w-24 text-right">PKR {(item.price * item.quantity).toLocaleString()}</p>
                  <Button variant="ghost" size="icon" onClick={() => removeFromCart(item.id)} className="text-red-500 hover:bg-red-50">
                    <Trash2 className="h-5 w-5" />
                    <span className="sr-only">Remove item</span>
                  </Button>
                </div>
              </div>
            ))}
            <div className="mt-6 text-right">
              <Button variant="outline" onClick={clearCart} className="text-red-600 border-red-500 hover:bg-red-50">
                Clear Cart
              </Button>
            </div>
          </div>

          <div className="lg:col-span-1 bg-white p-6 rounded-lg shadow-md space-y-4 h-fit sticky top-24">
            <h2 className="text-2xl font-semibold text-slate-700 border-b pb-3">Order Summary</h2>
            <div className="flex justify-between text-slate-600">
              <span>Subtotal</span>
              <span>PKR {subtotal.toLocaleString()}</span>
            </div>
            <div className="flex justify-between text-slate-600">
              <span>Estimated Shipping (Pakistan)</span>
              <span>PKR {shippingCost.toLocaleString()}</span>
            </div>
            <div className="border-t pt-4 mt-2 flex justify-between text-xl font-bold text-slate-800">
              <span>Total</span>
              <span>PKR {total.toLocaleString()}</span>
            </div>
            <Button asChild size="lg" className="w-full bg-sky-600 hover:bg-sky-700 text-white mt-4">
              <Link href="/saphirefans/checkout">Proceed to Checkout</Link>
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
