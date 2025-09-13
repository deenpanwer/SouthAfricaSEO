
'use client';

import React from 'react';
import Link from 'next/link';
import type { AiSeoWhyNeedData } from '@/types/aiSeo';
import { Button } from '@/components/ui/button';

interface AiSeoWhyNeedSectionProps {
  whyNeedData: AiSeoWhyNeedData;
}

const parseText = (text: string) => {
  const parts = text.split(/(\*\*.*?\*\*|<u>.*?<\/u>)/g);
  return parts.map((part, index) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={index} className="font-bold">{part.slice(2, -2)}</strong>;
    }
    if (part.startsWith('<u>') && part.endsWith('</u>')) {
      return <u key={index}>{part.slice(3, -4)}</u>;
    }
    return part;
  });
};

export function AiSeoWhyNeedSection({ whyNeedData }: AiSeoWhyNeedSectionProps) {
  const { headline, subheadline, paragraphs } = whyNeedData;

  return (
    <section className="py-16 md:py-24" style={{ backgroundColor: '#F8FFF8' }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">
          {headline}
        </h2>
        <p className="text-lg italic text-gray-600 mb-8">
          {subheadline}
        </p>

        <div className="text-left text-gray-700 space-y-6 mb-12">
          {paragraphs.map((paragraph, index) => (
            <p key={index} className="leading-relaxed">
              {parseText(paragraph)}
            </p>
          ))}
        </div>

        <Button asChild size="lg" className="bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-md text-lg px-8 py-6">
          <Link href="/contact">
            {"OPTIMIZE MY WEBSITE FOR SGE"}
          </Link>
        </Button>
      </div>
    </section>
  );
}
