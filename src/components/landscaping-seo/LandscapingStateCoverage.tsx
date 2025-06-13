
import type { LandscapingStateCoverageData } from '@/types';
import Image from 'next/image';
import { MapPin } from 'lucide-react';

interface LandscapingStateCoverageProps {
  coverageData: LandscapingStateCoverageData;
  stateName: string;
}

export function LandscapingStateCoverage({ coverageData, stateName }: LandscapingStateCoverageProps) {
  return (
    <section className="py-12 md:py-16 bg-gray-100 text-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-green-700">{coverageData.mainHeadline.replace('[StateName]', stateName)}</h2>
            <p className="text-gray-700 mb-4">
              Our expert landscaping SEO services are designed to help businesses thrive across {stateName}. We understand the local nuances and target customers effectively in various regions, including:
            </p>
            <ul className="space-y-2 text-gray-700 list-disc list-inside">
              {coverageData.points.map((point, index) => (
                <li key={index} className="flex items-start">
                  <MapPin className="h-5 w-5 text-orange-500 mr-2 mt-1 flex-shrink-0" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-gray-700">
              No matter where your landscaping business is located in {stateName}, TRAC has the SEO strategies to help you grow.
            </p>
          </div>
          {coverageData.mapImageUrl && coverageData.mapImageAlt && (
            <div className="rounded-lg overflow-hidden shadow-md">
              <Image
                src={coverageData.mapImageUrl}
                alt={coverageData.mapImageAlt.replace('[StateName]', stateName)}
                width={600}
                height={400}
                className="object-cover w-full h-full"
                data-ai-hint="state map service area"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
