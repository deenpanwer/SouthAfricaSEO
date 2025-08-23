import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import { Providers } from "./providers";
import Header from "./components/Header";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Automation",
  description: "Automation services",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen">
      <Providers>
        <Header />
        {/* ADJUST THIS LINE'S PADDING */}
        <div className="z-20 pt-16">
          {/* pt-16 to account for fixed header height */}
          {children}
        </div>
        <Footer />
      </Providers>
    </div>
  );
}
