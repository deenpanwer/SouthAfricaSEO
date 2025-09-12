
'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import type { AiSeoHeroData } from '@/types/aiSeo';
import { Breadcrumb } from '@/components/layout/Breadcrumb';

interface AiSeoHeroSectionProps {
  cityName: string;
  heroData: AiSeoHeroData;
}

export function AiSeoHeroSection({ cityName, heroData }: AiSeoHeroSectionProps) {
    
  const breadcrumbItems = [
    { name: 'Home', href: '/' },
    { name: heroData.pageTitle, href: `/ai-seo/${heroData.pageTitle.toLowerCase().replace(/ /g, '-')}` }
  ];

  return (
    <section className="relative py-16 md:py-20 bg-lime-50 overflow-hidden">
      {/* Decorative background shapes */}
      <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2">
        <div className="w-96 h-96 bg-lime-200/50 rounded-full opacity-50 blur-3xl"></div>
      </div>
      <div className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2">
        <div className="w-96 h-96 bg-lime-200/50 rounded-full opacity-50 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4">
          {heroData.heroTitle}
        </h1>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          {heroData.heroSubtitle}
        </p>

        <div className="max-w-2xl mx-auto bg-white p-4 rounded-lg shadow-lg border border-gray-200">
          <form className="flex flex-col sm:flex-row gap-2">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <Input
                type="text"
                placeholder={heroData.formPlaceholder}
                className="w-full pl-10 h-12"
              />
            </div>
            <Button type="submit" size="lg" className="bg-orange-500 hover:bg-orange-600 text-white h-12">
              {heroData.formButtonText}
            </Button>
          </form>
        </div>
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mt-8">
        <Breadcrumb items={breadcrumbItems} />
      </div>
    </section>
  );
}
