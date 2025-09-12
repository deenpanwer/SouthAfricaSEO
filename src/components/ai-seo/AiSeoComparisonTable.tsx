
'use client';
import React from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import type { AiSeoComparisonItem } from '@/types/aiSeo';

interface AiSeoComparisonTableProps {
  headline: string;
  items: AiSeoComparisonItem[];
  ctaText: string;
}

const CheckmarkIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0 mr-2 mt-1">
    <circle cx="10" cy="10" r="10" fill="#D1FAE5"/>
    <path d="M6.5 10.5L9 13L13.5 8.5" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export function AiSeoComparisonTable({ headline, items, ctaText }: AiSeoComparisonTableProps) {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">{headline}</h2>
        
        {/* Desktop Table View */}
        <div className="hidden md:block border border-gray-200 rounded-lg overflow-hidden">
          <div className="grid grid-cols-3 bg-gray-50 font-semibold text-gray-700 uppercase text-sm tracking-wider">
            <div className="px-6 py-4 text-left bg-[#E6F4EA]">AI Source</div>
            <div className="px-6 py-4 text-left bg-[#E3F2FD] border-l border-gray-200">Overview</div>
            <div className="px-6 py-4 text-left bg-[#E3F2FD] border-l border-gray-200">Thrive's Capabilities</div>
          </div>
          <div className="divide-y divide-gray-200">
            {items.map((item, index) => (
              <div key={index} className="grid grid-cols-3">
                <div className="px-6 py-4 font-bold text-center self-center bg-[#F0FAF4]">{item.source}</div>
                <div className="px-6 py-4 border-l border-gray-200">
                  <h4 className="font-semibold text-gray-800 mb-2">{item.overview.title}</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.overview.description}</p>
                </div>
                <div className="px-6 py-4 border-l border-gray-200">
                  <p className="text-sm text-gray-600 mb-2">{item.capabilities.title}</p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    {item.capabilities.points.map((point, pIndex) => (
                      <li key={pIndex} className="flex items-start"><CheckmarkIcon /><span>{point}</span></li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Card View */}
        <div className="md:hidden space-y-4">
          {items.map((item, index) => (
            <div key={index} className="border border-gray-200 rounded-lg overflow-hidden shadow-md">
               <h3 className="text-lg font-bold text-gray-800 bg-[#E6F4EA] p-4">{item.source}</h3>
               <div className="p-4 border-t border-gray-200">
                   <h4 className="font-semibold text-gray-700 mb-2">{item.overview.title}</h4>
                   <p className="text-sm text-gray-600 leading-relaxed">{item.overview.description}</p>
               </div>
               <div className="p-4 bg-gray-50 border-t border-gray-200">
                   <h4 className="font-semibold text-gray-700 mb-2">{item.capabilities.title}</h4>
                   <ul className="space-y-2 text-sm text-gray-600">
                     {item.capabilities.points.map((point, pIndex) => (
                       <li key={pIndex} className="flex items-start"><CheckmarkIcon /><span>{point}</span></li>
                     ))}
                   </ul>
               </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white font-bold">
                <Link href="/contact?service=ai-seo-strategy">
                    {ctaText}
                </Link>
            </Button>
        </div>
      </div>
    </section>
  );
}
