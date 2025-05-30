
import Image from 'next/image';
import type { CityHeroData } from '@/types';
import { CityHeroForm } from './CityHeroForm';
import { CheckCircle } from 'lucide-react';

interface CityHeroSectionProps {
  cityData: CityHeroData;
  cityName: string;
}

export function CityHeroSection({ cityData, cityName }: CityHeroSectionProps) {
  const { heroTitle, heroSubtitle, heroDescription, heroImage, formTitle } = cityData;

  const benefits = [
    "Increase Your Leads",
    "Drive Website Traffic",
    "Improve Your ROI"
  ];

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-green-700 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left Column: Form */}
          <div className="lg:order-2">
            <CityHeroForm cityName={cityName} formTitle={formTitle} />
          </div>

          {/* Right Column: Text Content & Image/Video Placeholder */}
          <div className="lg:order-1 text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight mb-4">
              {heroTitle}
            </h1>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-yellow-400 mb-6">
              {heroSubtitle}
            </h2>
            <p className="text-base sm:text-lg text-green-100 mb-6 leading-relaxed">
              {heroDescription}
            </p>
            <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg mb-8 mx-auto lg:mx-0 max-w-xl">
              <Image
                src={heroImage.src}
                alt={heroImage.alt}
                data-ai-hint={heroImage.dataAiHint}
                layout="fill"
                objectFit="cover"
              />
              {/* Play button overlay if it were a video */}
              {/* <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30">
                <PlayCircle className="h-20 w-20 text-white opacity-80 hover:opacity-100 transition-opacity cursor-pointer" />
              </div> */}
            </div>
             <ul className="space-y-2 text-left max-w-md mx-auto lg:mx-0">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-center text-green-50">
                  <CheckCircle className="h-5 w-5 text-yellow-400 mr-2 flex-shrink-0" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
