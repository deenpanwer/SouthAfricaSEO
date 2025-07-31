import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import { Providers } from "./providers";
import Header from "./components/Header";
import VideoBackground from "./components/VideoBackground";

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
    <div className="relative min-h-screen bg-ph-black">
      <VideoBackground />
      {/* Minimal overlay (already part of VideoBackground) */}
      <Providers>
        <Header />
        <div className="relative z-20 min-h-screen pt-16">
          {/* pt-16 to account for fixed header height */}
          {children}
        </div>
        <Footer />
      </Providers>
    </div>
  );
}
