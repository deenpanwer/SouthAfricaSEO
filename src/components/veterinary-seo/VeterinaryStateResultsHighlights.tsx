
"use client";

import Image from 'next/image';
import type { Testimonial } from '@/types';
import { TrendingUp, Users, HeartHandshake, Stethoscope } from 'lucide-react';

const vetTestimonials: Testimonial[] = [
  { id: '1', name: "Dr. Emily Carter", company: "Happy Paws Clinic, CA", quote: "TRAC's SEO services helped us reach so many more pet owners in our community. Our appointment bookings have significantly increased!", highlightedQuote: "Appointment bookings increased!", avatarUrl: "https://placehold.co/100x100.png", dataAiHint: "smiling veterinarian" },
  { id: '2', name: "John Miller", company: "Sunshine Animal Hospital, FL", quote: "Since working with TRAC, our online visibility for emergency vet services has skyrocketed. They truly understand the local market.", highlightedQuote: "Visibility skyrocketed!", avatarUrl: "https://placehold.co/100x100.png", dataAiHint: "vet with dog" },
  { id: '3', name: "Dr. Sarah Chen", company: "Advanced Pet Care, CA", quote: "The team at TRAC is knowledgeable and responsive. They've helped us attract clients for our specialized veterinary services.", highlightedQuote: "Attracted specialized clients!", avatarUrl: "https://placehold.co/100x100.png", dataAiHint: "vet professional" },
];

interface VeterinaryStateResultsHighlightsProps {
  headline: string;
  stateName: string;
}

const vetResults = [
    { metric: "Avg. Increase in New Patient Calls", value: "+45%", icon: TrendingUp, dataAiHint: "phone call graph" },
    { metric: "Avg. Growth in Local Map Visibility", value: "+60%", icon: Users, dataAiHint: "map pin chart" },
    { metric: "Avg. Rise in Online Appointment Bookings", value: "+30%", icon: HeartHandshake, dataAiHint: "calendar booking icon" }
];

export function VeterinaryStateResultsHighlights({ headline, stateName }: VeterinaryStateResultsHighlightsProps) {
  return (
    <section className="py-12 md:py-16 bg-background text-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-10 text-primary">{headline.replace('[StateName]', stateName)}</h2>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {vetResults.map((result, index) => (
            <div key={index} className="border border-border rounded-lg shadow-lg overflow-hidden text-center p-6 bg-card">
              <result.icon className="h-12 w-12 text-accent mx-auto mb-4" />
              <p className="text-4xl font-bold text-primary mb-2">{result.value}</p>
              <p className="text-sm text-muted-foreground uppercase">{result.metric}</p>
              <p className="text-xs text-muted-foreground/80 mt-1">For {stateName} Veterinary Clinics</p>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-12 border-t border-border">
          <h2 className="text-3xl font-bold text-center mb-2 text-primary">Hear From Vets We've Helped in {stateName} & Beyond</h2>
          <p className="text-center text-muted-foreground mb-10 max-w-xl mx-auto">
            Real stories from veterinary practices that have grown with TRAC's SEO expertise.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {vetTestimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-card p-6 rounded-lg shadow-xl text-center">
                <Image
                  src={testimonial.avatarUrl}
                  alt={testimonial.name}
                  width={80}
                  height={80}
                  className="rounded-full mx-auto mb-4 border-2 border-accent"
                  data-ai-hint={testimonial.dataAiHint || "veterinarian photo"}
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
