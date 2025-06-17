
import type { Metadata } from 'next';
import { SaphireHeader } from './components/Header';
import { SaphireFooter } from './components/Footer';
import { CartProvider } from './context/CartContext';
import { Toaster } from "@/components/ui/toaster"; // Re-use main toaster

export const metadata: Metadata = {
  title: {
    default: 'SaphireFans Pakistan - Industrial & Commercial Fans',
    template: '%s | SaphireFans Pakistan',
  },
  description: 'High-quality industrial fans, axial fans, centrifugal blowers, and exhaust systems in Pakistan. Durable solutions for factories, warehouses, and commercial spaces.',
  keywords: ['industrial fans Pakistan', 'axial fans', 'centrifugal fans', 'exhaust fans', 'commercial ventilation Pakistan', 'SaphireFans'],
};

export default function SaphireFansLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="font-poppins">
      <body className="bg-slate-100 text-slate-800 flex flex-col min-h-screen font-poppins">
        <CartProvider>
          <SaphireHeader />
          <main className="flex-grow container mx-auto p-4 sm:p-6 md:p-8">
            {children}
          </main>
          <SaphireFooter />
          <Toaster />
        </CartProvider>
      </body>
    </html>
  );
}
