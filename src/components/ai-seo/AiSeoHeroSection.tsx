'use client';

import { Input } from '@/components/ui/input';
import { Search, Home } from 'lucide-react';
import type { AiSeoHeroData } from '@/types/aiSeo';
import Link from 'next/link';
import { AiSeoHeroForm } from './AiSeoHeroForm';

interface AiSeoHeroSectionProps {
  cityName: string;
}

export function AiSeoHeroSection({ cityName, heroData }: AiSeoHeroSectionProps) {
    
  const breadcrumbItems = [
    { name: 'Home', href: '/' },
    { name: `${cityName} AI SEO Company`, href: `/${cityName.toLowerCase().replace(/ /g, '-')}-ai-seo-company` }
  ];

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.traconomics.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": `${cityName} AI SEO Company`,
        "item": `https://www.traconomics.com/${cityName.toLowerCase().replace(/ /g, '-')}-ai-seo-company`
      }
    ]
  };

  return (
    <section className="relative py-16 md:py-20 bg-[#F8FFF8] overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {/* Decorative background shapes */}
      <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/3">
        <div className="w-[400px] h-[400px] bg-lime-200/50 rounded-full opacity-50 blur-3xl" />
      </div>
      <div className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/3">
        <div className="w-[400px] h-[400px] bg-lime-200/50 rounded-full opacity-50 blur-3xl" />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4">
          {heroData.heroTitle}
        </h1>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          {heroData.heroSubtitle}
        </p>

        <AiSeoHeroForm cityName={cityName} />
        
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mt-8">
        <nav className="flex justify-center" aria-label="Breadcrumb">
          <ol className="inline-flex items-center space-x-1 md:space-x-2">
            {breadcrumbItems.map((item, index) => (
              <li key={index} className="inline-flex items-center">
                {index > 0 && <span className="text-gray-400 mx-2">/</span>}
                <Link href={item.href} className={`inline-flex items-center text-sm font-medium ${index === breadcrumbItems.length - 1 ? 'text-gray-500' : 'text-gray-700 hover:text-orange-600'}`}>
                  {index === 0 && <Home className="w-4 h-4 mr-2" />}
                  {item.name}
                </Link>
              </li>
            ))}
          </ol>
        </nav>
      </div>
    </section>
  );
}