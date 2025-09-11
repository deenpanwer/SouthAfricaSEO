
'use client';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import type { AiSeoFinalCta } from '@/types/aiSeo';

interface AiSeoFinalCTAProps {
  finalCtaData: AiSeoFinalCta;
}

export function AiSeoFinalCTA({ finalCtaData }: AiSeoFinalCTAProps) {
  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          {finalCtaData.headline}
        </h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          {finalCtaData.description}
        </p>
        <Button size="lg" variant="secondary" asChild>
          <Link href="/contact?service=ai-seo">{finalCtaData.ctaText}</Link>
        </Button>
      </div>
    </section>
  );
}
