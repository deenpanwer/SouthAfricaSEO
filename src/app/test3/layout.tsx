
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import { Toaster } from "@/components/ui/toaster";
import { EnviroHeader } from './components/EnviroHeader';
import { EnviroFooter } from './components/EnviroFooter';
import './globals.css';

const poppins = Poppins({
  variable: '--font-poppins',
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
});

export const metadata: Metadata = {
  title: {
    default: 'EnviroPainting | Eco-Friendly Painting Services',
    template: '%s | EnviroPainting',
  },
  description: 'Premium, eco-friendly residential and commercial painting services. Quality craftsmanship with a conscience.',
};

export default function EnviroPaintingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`${poppins.variable} font-sans bg-enviro-background text-enviro-text antialiased flex flex-col min-h-screen overflow-hidden`}>
      <EnviroHeader />
      <main className="flex-grow">{children}</main>
      <EnviroFooter />
      <Toaster />
    </div>
  );
}
