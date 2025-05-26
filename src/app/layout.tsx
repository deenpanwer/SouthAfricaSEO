
import type { Metadata } from 'next';
import { Geist, Geist_Mono, Poppins, Host_Grotesk } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const poppins = Poppins({
 variable: '--font-poppins',
  subsets: ['latin'],
  weight: ['400', '700'], // Corrected weights to '400' and '700'
});

const hkGrotesk = Host_Grotesk({
  variable: '--font-hk-grotesk',
 subsets: ['latin'],
 weight: ['400', '700'], // Added weights '400' and '700'
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});


export const metadata: Metadata = {
  title: {
    default: 'TRAC - Amplify Your Revenue & Sales',
    template: '%s | TRAC',
  },
  description: 'TRAC provides strategic business solutions to increase your website traffic, leads, and sales, driving significant growth for your company.',
  keywords: ['business growth', 'sales optimization', 'conversion strategies', 'revenue amplification', 'business consulting'],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} ${hkGrotesk.variable} font-sans antialiased flex flex-col min-h-screen`}>
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
