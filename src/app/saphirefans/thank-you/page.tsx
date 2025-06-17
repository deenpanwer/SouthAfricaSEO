
import type { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { CheckCircle, Package } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Order Confirmed | SaphireFans Pakistan',
  description: 'Thank you for your SaphireFans order. Your industrial fan purchase is confirmed.',
  robots: { // Good practice to noindex thank you pages if they don't offer unique SEO value
    index: false,
    follow: true,
  }
};

export default function ThankYouPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-200px)] text-center py-12 px-4">
      <CheckCircle className="h-20 w-20 text-green-500 mb-6" />
      <h1 className="text-3xl md:text-4xl font-bold text-slate-700 mb-4">Thank You For Your Order!</h1>
      <p className="text-lg text-slate-600 mb-3 max-w-md">
        Your SaphireFans industrial fan order has been successfully placed (simulated).
      </p>
      <p className="text-md text-slate-500 mb-8 max-w-md">
        You would typically receive an order confirmation email shortly with your order details. For now, this page confirms your simulated transaction.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Button asChild className="bg-sky-600 hover:bg-sky-700 text-white">
          <Link href="/saphirefans">
            <Package className="mr-2 h-5 w-5" /> Continue Shopping
          </Link>
        </Button>
        {/* Optionally, add a link to view order details if that feature were implemented */}
      </div>
    </div>
  );
}
