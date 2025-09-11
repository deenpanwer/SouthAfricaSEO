
'use client';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import type { AiSeoFaqItem } from '@/types/aiSeo';

interface AiSeoFaqSectionProps {
  headline: string;
  items: AiSeoFaqItem[];
}

export function AiSeoFaqSection({ headline, items }: AiSeoFaqSectionProps) {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
        <h2 className="text-3xl font-bold text-center mb-12">{headline}</h2>
        <Accordion type="single" collapsible className="w-full">
          {items.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left text-lg font-semibold">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
