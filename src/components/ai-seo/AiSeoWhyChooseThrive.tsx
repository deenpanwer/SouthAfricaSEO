
'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Info, Target, Users, BookOpen, Star, BarChart2 } from 'lucide-react';
import type { AiSeoWhyChooseData } from '@/types/aiSeo';

const iconMap: { [key: string]: React.ElementType } = {
  Info,
  Target,
  Users,
  BookOpen,
  Star,
  BarChart2,
};

interface AiSeoWhyChooseProps {
  whyChooseData: AiSeoWhyChooseData;
}

export function AiSeoWhyChoose({ whyChooseData }: AiSeoWhyChooseProps) {
  const { mainHeadline, subheadline, ctaText1, sectionHeadline, sectionSubheadline, introParagraph1, introParagraph2, cards, ctaText2 } = whyChooseData;
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-2">{mainHeadline}</h2>
            <p className="text-lg text-gray-600 mb-6">{subheadline}</p>
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-full">
                <Link href="/contact?service=ai-seo">{ctaText1}</Link>
            </Button>
        </div>

        <div className="text-center mb-12 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-2">{sectionHeadline}</h2>
            <p className="text-lg text-gray-600 mb-4">{sectionSubheadline}</p>
            <p className="text-gray-700 mb-2">{introParagraph1}</p>
            <p className="text-gray-700">{introParagraph2}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card, index) => {
            const Icon = iconMap[card.icon];
            return (
              <div key={index} className="rounded-lg shadow-lg overflow-hidden">
                <div className="p-4 flex items-center text-white" style={{ backgroundColor: card.headerColor }}>
                  {Icon && <Icon className="h-6 w-6 mr-3" />}
                  <h3 className="text-lg font-bold">{card.title}</h3>
                </div>
                <div className="p-6 h-full" style={{ backgroundColor: card.bodyColor }}>
                  <p className="text-gray-700 leading-relaxed">{card.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-full">
                <Link href="/contact?service=future-proof-seo">{ctaText2}</Link>
            </Button>
        </div>

      </div>
    </section>
  );
}
