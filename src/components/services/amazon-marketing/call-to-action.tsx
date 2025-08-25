
// src/components/services/amazon-marketing/call-to-action.tsx
import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export const CallToAction = () => {
  return (
    <section className="py-16 bg-primary text-primary-foreground text-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-extrabold mb-4">
          Ready to Dominate Amazon?
        </h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          Don't let your products get lost in the marketplace. Partner with Amazon experts who deliver real results.
        </p>
        <Button size="lg" variant="secondary" asChild>
          <Link href="/contact?service=Amazon-Consultation">Schedule Your Free Consultation</Link>
        </Button>
      </div>
    </section>
  );
};
