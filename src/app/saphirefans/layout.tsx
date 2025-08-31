
import type { Metadata } from 'next';
import { SaphireHeader } from './components/Header';
import { SaphireFooter } from './components/Footer';
import { CartProvider } from './context/CartContext';

export const metadata: Metadata = {
  title: {
    default: 'SaphireFans Pakistan - Industrial & Commercial Fans',
    template: '%s | SaphireFans Pakistan',
  },
  description: 'High-quality industrial fans, axial fans, centrifugal blowers, and exhaust systems in Pakistan. Durable solutions for factories, warehouses, and commercial spaces.',
  keywords: ['industrial fans Pakistan', 'axial fans', 'centrifugal fans', 'exhaust fans', 'commercial ventilation Pakistan', 'SaphireFans'],
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "SaphireFans Pakistan",
  "url": "https://saphirefans.traconomics.com",
  "logo": "https://saphirefans.traconomics.com/saphirefans-logo.png", // Replace with actual logo URL if available
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+92-300-1234567", // Placeholder from SaphireFans Contact Page
    "contactType": "Customer Service",
    "areaServed": "PK"
  },
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "123 Industrial Area, S.I.T.E", // Placeholder from SaphireFans Contact Page
    "addressLocality": "Karachi",
    "addressCountry": "PK"
  },
  "sameAs": [ // Add social media links if SaphireFans has its own profiles
    // "https://www.facebook.com/saphirefanspakistan",
    // "https://www.twitter.com/saphirefanspk"
  ]
};

export default function SaphireFansLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="font-poppins bg-slate-100 text-slate-800 flex flex-col min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <CartProvider>
        <SaphireHeader />
        <main className="flex-grow container mx-auto p-4 sm:p-6 md:p-8">
          {children}
        </main>
        <SaphireFooter />
      </CartProvider>
    </div>
  );
}
