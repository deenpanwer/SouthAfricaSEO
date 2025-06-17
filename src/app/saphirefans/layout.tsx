
import type { Metadata } from 'next';
import { SaphireHeader } from './components/Header';
import { SaphireFooter } from './components/Footer';
import { CartProvider } from './context/CartContext';
// Toaster is in RootLayout and global styles are applied in RootLayout's body tag

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
    // This div applies SaphireFans specific styling and font.
    // The main <html> and <body> are provided by src/app/layout.tsx (RootLayout)
    // The Poppins font variable is available from RootLayout.
    <div className="font-poppins bg-slate-100 text-slate-800 flex flex-col min-h-screen">
      <CartProvider>
        <SaphireHeader />
        <main className="flex-grow container mx-auto p-4 sm:p-6 md:p-8">
          {children}
        </main>
        <SaphireFooter />
        {/* Global Toaster is in RootLayout; no need for a separate one here unless specifically required */}
      </CartProvider>
    </div>
  );
}
