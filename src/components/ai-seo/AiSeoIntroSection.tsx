
'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import type { AiSeoIntroData } from '@/types/aiSeo';

const RiskIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0 h-6 w-6 mr-2">
        <circle cx="12" cy="12" r="10" fill="#FFEDD5"/>
        <path d="M15 9L9 15M9 9L15 15" stroke="#F97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);


function parseDescription(text: string) {
    const boldRegex = /\*\*(.*?)\*\*/g;
    const parts = text.split(boldRegex);

    return parts.map((part, index) => {
        if (index % 2 === 1) {
            return <strong key={index} className="font-bold text-foreground">{part}</strong>;
        }
        return part;
    });
}

interface AiSeoIntroSectionProps {
  introData: AiSeoIntroData;
}

export function AiSeoIntroSection({ introData }: AiSeoIntroSectionProps) {
  const { topHeadline, topSubheadline, topDescription, risksHeadline, risks, bottomHeadline, bottomDescription } = introData;

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Top Section */}
        <div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                <Image 
                    src="https://picsum.photos/seed/aiseo2/600/400"
                    alt="A professional analyzing AI data on a tablet"
                    layout="fill"
                    objectFit="cover"
                    data-ai-hint="man using tablet"
                />
            </div>
            <div className="text-gray-700">
              <h2 className="text-3xl font-bold text-gray-800 mb-2">{topHeadline}</h2>
              <p className="text-lg text-gray-600 mb-6">{topSubheadline}</p>
              <div className="space-y-4">
                {topDescription.map((paragraph, index) => (
                    <p key={index}>{parseDescription(paragraph)}</p>
                ))}
              </div>
            </div>
          </div>
          
          <div className="mt-12 max-w-4xl mx-auto">
            <p className="text-sm font-semibold text-gray-600 mb-4">{risksHeadline}</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-4">
              {risks.map((risk, index) => (
                <div key={index} className="flex items-start">
                  <RiskIcon />
                  <span className="text-sm text-gray-600">{risk}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center pt-16 border-t">
          <div className="text-gray-700 md:order-2">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">{bottomHeadline}</h2>
             <div className="space-y-4">
                {bottomDescription.map((paragraph, index) => (
                    <p key={index}>{parseDescription(paragraph)}</p>
                ))}
              </div>
          </div>
          <div className="relative aspect-[4/3] rounded-lg overflow-hidden md:order-1">
              <Image 
                  src="https://picsum.photos/seed/aiseo3/600/400"
                  alt="A smiling woman working on a laptop, representing successful SEO transformation"
                  layout="fill"
                  objectFit="cover"
                  data-ai-hint="woman using laptop"
              />
          </div>
        </div>

      </div>
    </section>
  );
}
