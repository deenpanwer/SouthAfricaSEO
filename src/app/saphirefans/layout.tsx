
import type { Metadata } from 'next';
import '../globals.css'; // You might want a separate global CSS for the e-commerce site later

export const metadata: Metadata = {
  title: 'SaphireFans - Your E-commerce Store',
  description: 'Discover amazing products at SaphireFans.',
};

export default function SaphireFansLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {/* Minimal layout for saphirefans.traconomics.com */}
        {/* You can add a specific Header and Footer for saphirefans here */}
        <header className="bg-blue-600 text-white p-4">
          <div className="container mx-auto">
            <h1 className="text-2xl font-bold">SaphireFans E-commerce</h1>
            {/* Basic Nav for SaphireFans can go here */}
          </div>
        </header>
        <main className="flex-grow container mx-auto p-4">
          {children}
        </main>
        <footer className="bg-gray-800 text-white p-4 text-center">
          <p>&copy; {new Date().getFullYear()} SaphireFans. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}
