
'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import type { AiSeoVisibilityData } from '@/types/aiSeo';

interface AiSeoVisibilitySectionProps {
  visibilityData: AiSeoVisibilityData;
}

export function AiSeoVisibilitySection({ visibilityData }: AiSeoVisibilitySectionProps) {
  const {
    headline,
    subheadline,
    description1,
    description2,
    resultsHeadline,
    finalDescription,
    ctaText
  } = visibilityData;

  const finalDescriptionParts = finalDescription.split('\n\n');

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        {/* Top Section: Two-column grid for intro text and image */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center mb-12">
          {/* Left Column: Text Content */}
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-2">{headline}</h2>
            <p className="text-lg text-gray-600 mb-6">{subheadline}</p>

            <div className="space-y-4 text-gray-700">
              <p>{description1}</p>
              <p>{description2}</p>
            </div>
          </div>

          {/* Right Column: Image */}
          <div>
            <div className="relative aspect-[4/3] rounded-lg shadow-lg overflow-hidden">
                <Image
                    src="https://picsum.photos/seed/aiseo1/600/400"
                    alt="AI SEO professional analyzing data"
                    fill
                    className="object-cover"
                    data-ai-hint="woman working on laptop"
                />
            </div>
          </div>
        </div>

        {/* Bottom Section: Single column for stats and final CTA */}
        <div className="max-w-3xl mx-auto text-left">
          <p className="text-gray-700 mb-6">{resultsHeadline}</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-blue-100/60 p-6 rounded-lg text-center">
              <p className="text-4xl font-bold text-blue-600">+117%</p>
              <p className="text-sm font-medium text-blue-800 mt-1">Boost from Gemini</p>
            </div>
            <div className="bg-blue-100/60 p-6 rounded-lg text-center">
              <p className="text-4xl font-bold text-blue-600">+119%</p>
              <p className="text-sm font-medium text-blue-800 mt-1">Increase from ChatGPT</p>
            </div>
          </div>

          <div className="space-y-4 text-gray-700 mb-8">
             {finalDescriptionParts.map((part, index) => (
                <p key={index}>{part}</p>
             ))}
          </div>

          <div className="text-center">
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white font-bold text-lg px-8 py-6">
              {ctaText}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
