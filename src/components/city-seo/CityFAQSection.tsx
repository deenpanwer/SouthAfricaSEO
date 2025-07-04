
"use client";

import type { FAQItem } from '@/types';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

interface CityFAQSectionProps {
  faqData: FAQItem[];
  cityName: string;
}

export function CityFAQSection({ faqData, cityName }: CityFAQSectionProps) {
  if (!faqData || faqData.length === 0) {
    return null;
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': faqData.map(item => ({
      '@type': 'Question',
      'name': item.question.replace(/\[CityName\]/g, cityName),
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': item.answer.replace(/\[CityName\]/g, cityName),
      },
    })),
  };

  return (
    <section className="py-12 md:py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
          Frequently Asked Questions About SEO in {cityName}
        </h2>
        <Accordion type="single" collapsible className="w-full">
          {faqData.map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left text-lg font-semibold text-gray-700 hover:text-green-700">
                {item.question.replace(/\[CityName\]/g, cityName)}
              </AccordionTrigger>
              <AccordionContent className="text-base text-gray-600 leading-relaxed">
                {item.answer.replace(/\[CityName\]/g, cityName)}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
