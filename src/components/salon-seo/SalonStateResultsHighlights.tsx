
"use client";

import Image from 'next/image';
import type { Testimonial } from '@/types';
import { TrendingUp, Users, Sparkles, CalendarCheck } from 'lucide-react';

const salonTestimonials: Testimonial[] = [
  { id: '1', name: "Jessica L.", company: "NYC Glam Studio, NY", quote: "TRAC helped us get noticed in a very competitive market. Our online bookings for bridal services have tripled!", highlightedQuote: "Bridal bookings tripled!", avatarUrl: "https://placehold.co/100x100.png", dataAiHint: "salon owner portrait" },
  { id: '2', name: "Maria R.", company: "Atlanta Beauty Haven, GA", quote: "Our spa services are now ranking on the first page for local searches. TRAC's team is fantastic to work with.", highlightedQuote: "First page for spa services!", avatarUrl: "https://placehold.co/100x100.png", dataAiHint: "spa therapist" },
  { id: '3', name: "Chloe T.", company: "Upstate Style Bar, NY", quote: "We've seen a steady increase in new clients since starting SEO with TRAC. They really understand the beauty industry.", highlightedQuote: "Steady increase in new clients!", avatarUrl: "https://placehold.co/100x100.png", dataAiHint: "happy salon client" },
];

interface SalonStateResultsHighlightsProps {
  headline: string;
  stateName: string;
}

const salonResults = [
    { metric: "Avg. Increase in Online Bookings", value: "+50%", icon: CalendarCheck, dataAiHint: "booking calendar chart" },
    { metric: "Avg. Growth in Local Search Visibility", value: "+70%", icon: Users, dataAiHint: "local search graph" },
    { metric: "Avg. Rise in New Client Inquiries", value: "+40%", icon: Sparkles, dataAiHint: "client growth icon" }
];

export function SalonStateResultsHighlights({ headline, stateName }: SalonStateResultsHighlightsProps) {
  return (
    <section className="py-12 md:py-16 bg-background text-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-10 text-primary">{headline.replace('[StateName]', stateName)}</h2>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {salonResults.map((result, index) => (
            <div key={index} className="border border-border rounded-lg shadow-lg overflow-hidden text-center p-6 bg-card">
              <result.icon className="h-12 w-12 text-accent mx-auto mb-4" />
              <p className="text-4xl font-bold text-primary mb-2">{result.value}</p>
              <p className="text-sm text-muted-foreground uppercase">{result.metric}</p>
              <p className="text-xs text-muted-foreground/80 mt-1">For {stateName} Salons & Spas</p>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-12 border-t border-border">
          <h2 className="text-3xl font-bold text-center mb-2 text-primary">Hear From Salons We've Helped Glow in {stateName} & Beyond</h2>
          <p className="text-center text-muted-foreground mb-10 max-w-xl mx-auto">
            Real stories from salon and spa owners who have enhanced their business with TRAC's SEO expertise.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {salonTestimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-card p-6 rounded-lg shadow-xl text-center">
                <Image
                  src={testimonial.avatarUrl}
                  alt={testimonial.name}
                  width={80}
                  height={80}
                  className="rounded-full mx-auto mb-4 border-2 border-accent"
                  data-ai-hint={testimonial.dataAiHint || "salon professional"}
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
