
'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, Home } from 'lucide-react';
import type { AiSeoHeroData } from '@/types/aiSeo';
import Link from 'next/link';

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
    <section className="relative py-16 md:py-20 bg-[#F8FFF8] overflow-hidden">
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

        <div className="max-w-2xl mx-auto bg-white/70 backdrop-blur-sm p-4 rounded-lg shadow-lg border border-gray-200">
          <form className="flex flex-col sm:flex-row gap-2">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <Input
                type="text"
                placeholder={heroData.formPlaceholder}
                className="w-full pl-10 h-12 border-gray-300 focus:border-orange-500 focus:ring-orange-500"
              />
            </div>
            <Button type="submit" size="lg" className="bg-orange-500 hover:bg-orange-600 text-white h-12">
              {heroData.formButtonText}
            </Button>
          </form>
        </div>
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
