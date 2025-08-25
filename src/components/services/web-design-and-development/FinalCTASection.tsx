
import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

interface FinalCTASectionProps {
  headline: string;
  description: string;
  ctaText: string;
  ctaLink: string;
}

export function FinalCTASection({ headline, description, ctaText, ctaLink }: FinalCTASectionProps) {
  return (
    <section className="py-16 md:py-24 bg-primary text-primary-foreground text-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          {headline}
        </h2>
        <p className="text-lg mb-8 max-w-3xl mx-auto">
          {description}
        </p>
        <Button size="lg" asChild className="bg-primary-foreground hover:bg-primary-foreground/90 text-primary text-lg px-8 py-6 rounded-full shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105">
          <Link href={ctaLink}>{ctaText}</Link>
        </Button>
      </div>
    </section>
  );
}
