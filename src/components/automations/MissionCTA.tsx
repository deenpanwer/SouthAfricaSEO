import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export const MissionCTA = () => {
  return (
    <section className="py-20 px-6 md:px-12 bg-black text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-6">
          Join the Mission
        </h2>
        <p className="text-lg text-ph-light-gray mb-8">
          Be a part of Pakistan's technological revolution. We're looking for brilliant minds to shape the future of AI.
        </p>
        <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-full text-lg font-semibold shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105">
          <Link href="/automations/careers">View Open Positions</Link>
        </Button>
      </div>
    </section>
  );
};
