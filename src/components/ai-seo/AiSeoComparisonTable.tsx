
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
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0 mr-2 mt-1">
    <circle cx="8" cy="8" r="8" fill="#D1FAE5"/>
    <path d="M5 8L7 10L11 6" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export function AiSeoComparisonTable({ headline, items, ctaText }: AiSeoComparisonTableProps) {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">{headline}</h2>
        <div className="overflow-hidden border border-gray-200 rounded-lg shadow-md">
          {/* Header for Desktop */}
          <div className="hidden md:grid md:grid-cols-3 bg-gray-50">
            <div className="px-6 py-4 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider bg-[#E6F4EA]">AI Source</div>
            <div className="px-6 py-4 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider bg-[#E3F2FD]">Overview</div>
            <div className="px-6 py-4 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider bg-[#E3F2FD]">Thrive's Capabilities</div>
          </div>
          {/* Content */}
          <div className="md:grid md:grid-cols-3 md:divide-x md:divide-gray-200">
            {items.map((item, index) => (
              <React.Fragment key={index}>
                {/* Mobile View Card */}
                <div className="md:hidden border-b border-gray-200 p-4">
                   <h3 className="text-lg font-bold text-gray-800 bg-[#E6F4EA] -mx-4 -mt-4 p-4 mb-4">{item.source}</h3>
                   <div className="mb-4">
                       <h4 className="font-semibold text-gray-700 mb-2">{item.overview.title}</h4>
                       <p className="text-sm text-gray-600">{item.overview.description}</p>
                   </div>
                   <div>
                       <h4 className="font-semibold text-gray-700 mb-2">{item.capabilities.title}</h4>
                       <ul className="space-y-2 text-sm text-gray-600">
                         {item.capabilities.points.map((point, pIndex) => (
                           <li key={pIndex} className="flex items-start"><CheckmarkIcon /><span>{point}</span></li>
                         ))}
                       </ul>
                   </div>
                </div>
                
                {/* Desktop View Cells */}
                <div className="hidden md:block px-6 py-4 font-semibold text-center self-center bg-[#E6F4EA]">{item.source}</div>
                <div className="hidden md:block px-6 py-4">
                  <h4 className="font-semibold text-gray-700 mb-2">{item.overview.title}</h4>
                  <p className="text-sm text-gray-600">{item.overview.description}</p>
                </div>
                <div className="hidden md:block px-6 py-4">
                  <p className="text-sm text-gray-600 mb-2">{item.capabilities.title}</p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    {item.capabilities.points.map((point, pIndex) => (
                      <li key={pIndex} className="flex items-start"><CheckmarkIcon /><span>{point}</span></li>
                    ))}
                  </ul>
                </div>
              </React.Fragment>
            ))}
          </div>
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
