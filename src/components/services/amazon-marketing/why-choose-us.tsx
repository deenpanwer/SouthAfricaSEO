
// src/components/services/amazon-marketing/why-choose-us.tsx
import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { ExpertiseGrid } from '@/components/services/amazon-marketing/expertise-grid';
// No Kbd import needed, using Tailwind CSS for styling
import { DefinitionTooltip } from '@/components/ui/definition-tooltip';
import { Award, ShieldCheck, Users, Lightbulb } from 'lucide-react'; // Icons for ExpertiseGrid

export const WhyChooseUs = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">
          Why Partner With Us for Amazon Success?
        </h2>
        <ExpertiseGrid
          items={[
            {
              icon: <Award className="h-8 w-8" />,
              title: "Certified Amazon Experts",
              description: "Our team holds official Amazon certifications, ensuring top-tier knowledge and strategies."
            },
            {
              icon: <ShieldCheck className="h-8 w-8" />,
              title: "Data-Driven Decisions",
              description: "Every strategy is backed by in-depth data analysis, not guesswork, for optimal ROI."
            },
            {
              icon: <Users className="h-8 w-8" />,
              title: "Client-Centric Approach",
              description: "Your success is our priority. We offer personalized strategies and transparent communication."
            },
            {
              icon: <Lightbulb className="h-8 w-8" />,
              title: "Innovative Strategies",
              description: "We stay ahead of Amazon's evolving algorithms and trends to keep you competitive."
            },
          ]}
        />

        <h2 className="text-3xl font-bold text-center mt-24 mb-8">
          Frequently Asked Questions
        </h2>
        <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
          <AccordionItem value="item-1">
            <AccordionTrigger>What is Amazon A+ Content?</AccordionTrigger>
            <AccordionContent>
              Amazon A+ Content (formerly Enhanced Brand Content) allows brand owners to modify product descriptions of branded ASINs. It helps showcase your brand story and product features with enhanced images and text placements. To access it, you typically need to be registered with <DefinitionTooltip term="Amazon Brand Registry" definition="A program that helps brand owners protect their intellectual property on Amazon and provides access to enhanced selling tools.">Amazon Brand Registry</DefinitionTooltip>.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>How do you handle Amazon PPC bidding?</AccordionTrigger>
            <AccordionContent>
              We employ a dynamic bidding strategy, constantly adjusting bids based on performance data, competitor activity, and your target <DefinitionTooltip term="ACOS" definition="Advertising Cost of Sale (ACOS) is a metric that measures the efficiency of your Amazon PPC campaigns. It's calculated by dividing total ad spend by total sales generated from ads.">ACOS</DefinitionTooltip> or <DefinitionTooltip term="TACOS" definition="Total Advertising Cost of Sale (TACOS) is a broader metric that considers both ad sales and organic sales influenced by ads, providing a more holistic view of ad campaign impact.">TACOS</DefinitionTooltip>. We use both manual and automated strategies for optimal results.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>What is the Amazon Buy Box?</AccordionTrigger>
            <AccordionContent>
              The Buy Box is the white box on the right side of the Amazon product detail page where customers can add items for purchase. Winning the Buy Box is crucial for sales. Factors include price, shipping speed, seller performance, and inventory availability. You can often check your Buy Box eligibility by pressing <span className="inline-flex items-center rounded border bg-muted px-1 font-mono text-[0.8em] text-muted-foreground">Ctrl</span> + <span className="inline-flex items-center rounded border bg-muted px-1 font-mono text-[0.8em] text-muted-foreground">Shift</span> + <span className="inline-flex items-center rounded border bg-muted px-1 font-mono text-[0.8em] text-muted-foreground">I</span> in your browser to open developer tools and inspect the page elements.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
};
