
import type { Metadata } from 'next';
import { SaphireHeader } from './components/Header';
import { SaphireFooter } from './components/Footer';
import { CartProvider } from './context/CartContext';
import { Toaster } from "@/components/ui/toaster"; // Main toaster is in root, can be removed if no saphire-specific toasts are planned

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
    // Apply SaphireFans specific styling and font here
    // The main <html> and <body> are provided by src/app/layout.tsx
    <div className="font-poppins bg-slate-100 text-slate-800 flex flex-col min-h-screen">
      <CartProvider>
        <SaphireHeader />
        <main className="flex-grow container mx-auto p-4 sm:p-6 md:p-8">
          {children}
        </main>
        <SaphireFooter />
        {/* The global Toaster from src/app/layout.tsx will handle toasts unless specific context needed here */}
      </CartProvider>
    </div>
  );
}
