
"use client";

import Image from 'next/image';
import type { Testimonial } from '@/types';
import { TrendingUp, Users, Wrench, Settings } from 'lucide-react';

const autoRepairTestimonials: Testimonial[] = [
  { id: '1', name: "Tom B.", company: "Keystone Auto Care, PA", quote: "TRAC's SEO work has brought a steady flow of new customers to our shop. We're busier than ever!", highlightedQuote: "Busier than ever!", avatarUrl: "https://placehold.co/100x100.png", dataAiHint: "mechanic portrait" },
  { id: '2', name: "Maria G.", company: "Buckeye Car Repairs, OH", quote: "Our rankings for specific repair services like 'brake repair Columbus' have significantly improved thanks to TRAC.", highlightedQuote: "Rankings significantly improved!", avatarUrl: "https://placehold.co/100x100.png", dataAiHint: "auto shop owner" },
  { id: '3', name: "Kevin S.", company: "Philly Tune-Up, PA", quote: "The team is professional and delivers on their promises. Our online presence is much stronger now.", highlightedQuote: "Online presence stronger!", avatarUrl: "https://placehold.co/100x100.png", dataAiHint: "satisfied customer" },
];

interface AutoRepairStateResultsHighlightsProps {
  headline: string;
  stateName: string;
}

const autoRepairResults = [
    { metric: "Avg. Increase in Repair Bookings", value: "+40%", icon: TrendingUp, dataAiHint: "booking increase chart" },
    { metric: "Avg. Growth in Local Search Calls", value: "+55%", icon: Users, dataAiHint: "phone call increase" },
    { metric: "Avg. Improvement in Service Keyword Rankings", value: "+30%", icon: Wrench, dataAiHint: "keyword ranking graph" }
];

export function AutoRepairStateResultsHighlights({ headline, stateName }: AutoRepairStateResultsHighlightsProps) {
  return (
    <section className="py-12 md:py-16 bg-background text-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-10 text-primary">{headline.replace('[StateName]', stateName)}</h2>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {autoRepairResults.map((result, index) => (
            <div key={index} className="border border-border rounded-lg shadow-lg overflow-hidden text-center p-6 bg-card">
              <result.icon className="h-12 w-12 text-accent mx-auto mb-4" />
              <p className="text-4xl font-bold text-primary mb-2">{result.value}</p>
              <p className="text-sm text-muted-foreground uppercase">{result.metric}</p>
              <p className="text-xs text-muted-foreground/80 mt-1">For {stateName} Auto Repair Shops</p>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-12 border-t border-border">
          <h2 className="text-3xl font-bold text-center mb-2 text-primary">Hear From Shops We've Helped in {stateName} & Beyond</h2>
          <p className="text-center text-muted-foreground mb-10 max-w-xl mx-auto">
            Real stories from auto repair businesses that have grown their customer base with TRAC's SEO expertise.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {autoRepairTestimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-card p-6 rounded-lg shadow-xl text-center">
                <Image
                  src={testimonial.avatarUrl}
                  alt={testimonial.name}
                  width={80}
                  height={80}
                  className="rounded-full mx-auto mb-4 border-2 border-accent"
                  data-ai-hint={testimonial.dataAiHint || "mechanic shop staff"}
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
