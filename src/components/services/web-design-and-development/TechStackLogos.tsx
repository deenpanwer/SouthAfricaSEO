
import React from 'react';
import Image from 'next/image';

interface TechLogo {
  name: string;
  logoUrl: string;
}

interface TechStackLogosProps {
  headline: string;
  description: string;
  logos: TechLogo[];
}

export function TechStackLogos({ headline, description, logos }: TechStackLogosProps) {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          {headline}
        </h2>
        <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
          {description}
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {logos.map((logo, index) => (
            <div key={index} className="flex flex-col items-center">
              <Image
                src={logo.logoUrl}
                alt={logo.name}
                width={80}
                height={80}
                objectFit="contain"
                className="h-16 w-16 md:h-20 md:w-20 grayscale hover:grayscale-0 transition-all duration-300"
              />
              <p className="mt-2 text-sm font-medium text-gray-700">{logo.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
