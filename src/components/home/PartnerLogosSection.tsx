"use client";

import Image from 'next/image';
import { useMemo } from 'react';
import { CLIENT_LOGOS } from '@/lib/constants.tsx';
import type { ClientLogo } from '@/types';

export const PartnerLogosSection = () => {
  if (!CLIENT_LOGOS || CLIENT_LOGOS.length === 0) {
    return null;
  }

  const duplicatedLogos = useMemo(() => [...CLIENT_LOGOS, ...CLIENT_LOGOS], []);

  return (
    <section className="py-12 md:py-16 bg-secondary/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-2xl font-semibold text-foreground mb-10">
          Trusted by Innovative Businesses Across the Nation
        </h2>
        <div
          className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]">
          <ul
            className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-scroll-left">
            {duplicatedLogos.map((logo: ClientLogo, index: number) => (
                <li key={index}>
                    <Image
                        src={logo.imageUrl}
                        alt={`${logo.name} logo`}
                        width={120}
                        height={48}
                        data-ai-hint={logo.dataAiHint}
                        className="object-contain h-12 w-auto grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                    />
                </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
