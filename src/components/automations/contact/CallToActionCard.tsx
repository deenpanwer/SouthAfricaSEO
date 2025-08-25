import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export const CallToActionCard = () => {
  return (
    <div className="bg-card p-8 rounded-lg border border-ph-border shadow-lg text-center">
      <h2 className="text-3xl font-bold text-white mb-4">
        Ready to Transform Your Future?
      </h2>
      <p className="text-lg text-ph-light-gray mb-8">
        Whether you're a government entity, military organization, or a large enterprise, we're here to help you harness the power of AI.
      </p>
      <div className="flex flex-col md:flex-row justify-center gap-4">
        <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-full text-lg font-semibold shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105">
          <Link href="/automations/contact">Schedule a Consultation</Link>
        </Button>
        <Button className="bg-transparent border border-ph-border text-white hover:bg-ph-border px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 ease-in-out transform hover:scale-105">
          <Link href="mailto:traconomics@gmail.com">Email Us Directly</Link>
        </Button>
      </div>
    </div>
  );
};
