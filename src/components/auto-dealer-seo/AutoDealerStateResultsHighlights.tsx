
"use client";

import Image from 'next/image';
import type { Testimonial } from '@/types';
import { TrendingUp, Users, Car, Tag } from 'lucide-react';

// Placeholder testimonials - replace with actual auto dealer testimonials
const autoDealerTestimonials: Testimonial[] = [
  { id: '1', name: "Mike R.", company: "Texas Drive Autos, TX", quote: "TRAC's SEO strategy significantly increased our website leads for used trucks. We're seeing more local buyers than ever!", highlightedQuote: "Increased leads for used trucks!", avatarUrl: "https://placehold.co/100x100.png", dataAiHint: "dealership manager" },
  { id: '2', name: "Linda K.", company: "Michigan Motors, MI", quote: "Our online inventory visibility improved dramatically after partnering with TRAC. Their team is responsive and results-oriented.", highlightedQuote: "Inventory visibility improved!", avatarUrl: "https://placehold.co/100x100.png", dataAiHint: "salesperson portrait" },
  { id: '3', name: "David P.", company: "Lone Star Cars, TX", quote: "We've seen a great ROI from TRAC's SEO services. More online inquiries are converting to showroom visits.", highlightedQuote: "Great ROI from SEO!", avatarUrl: "https://placehold.co/100x100.png", dataAiHint: "happy car buyer" },
];

interface AutoDealerStateResultsHighlightsProps {
  headline: string;
  stateName: string;
}

const autoDealerResults = [
    { metric: "Avg. Increase in Website Leads", value: "+35%", icon: TrendingUp, dataAiHint: "lead generation graph" },
    { metric: "Avg. Growth in Online Inventory Views", value: "+50%", icon: Car, dataAiHint: "car views chart" },
    { metric: "Avg. Rise in Local SEO Rankings", value: "+40%", icon: Users, dataAiHint: "local ranking icon" }
];

export function AutoDealerStateResultsHighlights({ headline, stateName }: AutoDealerStateResultsHighlightsProps) {
  return (
    <section className="py-12 md:py-16 bg-background text-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-10 text-primary">{headline.replace('[StateName]', stateName)}</h2>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {autoDealerResults.map((result, index) => (
            <div key={index} className="border border-border rounded-lg shadow-lg overflow-hidden text-center p-6 bg-card">
              <result.icon className="h-12 w-12 text-accent mx-auto mb-4" />
              <p className="text-4xl font-bold text-primary mb-2">{result.value}</p>
              <p className="text-sm text-muted-foreground uppercase">{result.metric}</p>
              <p className="text-xs text-muted-foreground/80 mt-1">For {stateName} Auto Dealers</p>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-12 border-t border-border">
          <h2 className="text-3xl font-bold text-center mb-2 text-primary">Hear From Dealers We've Helped in {stateName} & Beyond</h2>
          <p className="text-center text-muted-foreground mb-10 max-w-xl mx-auto">
            Real stories from auto dealerships that have accelerated their sales with TRAC's SEO expertise.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {autoDealerTestimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-card p-6 rounded-lg shadow-xl text-center">
                <Image
                  src={testimonial.avatarUrl}
                  alt={testimonial.name}
                  width={80}
                  height={80}
                  className="rounded-full mx-auto mb-4 border-2 border-accent"
                  data-ai-hint={testimonial.dataAiHint || "dealership staff"}
                />
                <h3 className="font-semibold text-lg mb-0.5 text-foreground">{testimonial.name}</h3>
                <p className="text-xs text-muted-foreground mb-3">{testimonial.company}</p>
                 <div className="bg-accent/10 p-2 rounded-md mb-3">
                    <p className="text-primary italic font-semibold text-sm">"{testimonial.highlightedQuote}"</p>
                  </div>
                <blockquote className="text-muted-foreground italic text-sm leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
