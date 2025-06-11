
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
    default: 'TRAC provides strategic business solutions to increase your website traffic, leads, and sales, driving significant growth for your company.',
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
      <head>
        {/* Google Tag Manager */}
        <script dangerouslySetInnerHTML={{ __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-WFVWSV9V');` }} />
        {/* End Google Tag Manager */}
        {/* Meta Pixel Code */}
        <link rel="icon" href="/favicon.ico" />
        <script dangerouslySetInnerHTML={{ __html: `
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '1375388456853322');
          fbq('track', 'PageView');` }} />
        {/* End Meta Pixel Code */}
      </head>
      
      <body className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} ${hkGrotesk.variable} font-sans antialiased flex flex-col min-h-screen`}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WFVWSV9V"
            height="0" width="0" style={{ display: 'none', visibility: 'hidden' }}>
          </iframe>
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        {/* Meta Pixel Code (noscript) */}
        <noscript><img height="1" width="1" style={{ display: 'none' }}
        src="https://www.facebook.com/tr?id=1375388456853322&ev=PageView&noscript=1"
        /></noscript>
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
