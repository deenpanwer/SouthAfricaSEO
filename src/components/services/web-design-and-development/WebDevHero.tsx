
'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

interface WebDevHeroProps {
  headline: string;
  subHeadline: string;
  description: string;
  ctaText: string;
  ctaLink: string;
  videoBackgroundUrl?: string; // Optional video background
  imageBackgroundUrl?: string; // Optional image background (fallback/placeholder)
}

export function WebDevHero({ headline, subHeadline, description, ctaText, ctaLink, videoBackgroundUrl, imageBackgroundUrl }: WebDevHeroProps) {
  return (
    <section className="relative h-screen flex items-center justify-center text-white overflow-hidden">
      {videoBackgroundUrl && (
        <video
          className="absolute inset-0 object-cover w-full h-full z-0"
          src={videoBackgroundUrl}
          autoPlay
          loop
          muted
          playsInline
          crossOrigin="anonymous"
        />
      )}
      <div className="absolute inset-0 bg-black bg-opacity-60 z-10"></div> {/* Overlay */}
      <div className="relative z-20 text-center px-4">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4">
          {headline}
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
          {subHeadline}
        </p>
        <p className="text-lg mb-10 max-w-4xl mx-auto">
          {description}
        </p>
        <Button size="lg" asChild className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6 rounded-full shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105">
          <Link href={ctaLink}>{ctaText}</Link>
        </Button>
      </div>
    </section>
  );
}
