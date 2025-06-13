
"use client";

import Image from 'next/image';
import type { Testimonial } from '@/types';
import { TrendingUp, Users, Dumbbell, CalendarCheck } from 'lucide-react';

const gymTestimonials: Testimonial[] = [
  { id: '1', name: "Mark P.", company: "Peak Fitness Colorado, CO", quote: "TRAC's SEO strategy helped us fill our new HIIT classes faster than we imagined. Our local visibility is way up!", highlightedQuote: "HIIT classes filled fast!", avatarUrl: "https://placehold.co/100x100.png", dataAiHint: "fitness instructor" },
  { id: '2', name: "Sarah W.", company: "Desert Strong Gym, AZ", quote: "We've seen a significant increase in membership inquiries since TRAC optimized our website and Google Business Profile.", highlightedQuote: "Membership inquiries up!", avatarUrl: "https://placehold.co/100x100.png", dataAiHint: "gym owner portrait" },
  { id: '3', name: "Alex G.", company: "Zenith Yoga Colorado, CO", quote: "Our specialized yoga workshops are now much easier to find online. TRAC understood our niche and targeted the right audience.", highlightedQuote: "Easier to find workshops!", avatarUrl: "https://placehold.co/100x100.png", dataAiHint: "yoga instructor" },
];

interface GymStateResultsHighlightsProps {
  headline: string;
  stateName: string;
}

const gymResults = [
    { metric: "Avg. Increase in Membership Sign-ups", value: "+30%", icon: Users, dataAiHint: "membership growth chart" },
    { metric: "Avg. Growth in Class Bookings", value: "+45%", icon: CalendarCheck, dataAiHint: "class booking graph" },
    { metric: "Avg. Improvement in Local Fitness Searches", value: "+60%", icon: TrendingUp, dataAiHint: "local search ranking" }
];

export function GymStateResultsHighlights({ headline, stateName }: GymStateResultsHighlightsProps) {
  return (
    <section className="py-12 md:py-16 bg-background text-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-10 text-primary">{headline.replace('[StateName]', stateName)}</h2>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {gymResults.map((result, index) => (
            <div key={index} className="border border-border rounded-lg shadow-lg overflow-hidden text-center p-6 bg-card">
              <result.icon className="h-12 w-12 text-accent mx-auto mb-4" />
              <p className="text-4xl font-bold text-primary mb-2">{result.value}</p>
              <p className="text-sm text-muted-foreground uppercase">{result.metric}</p>
              <p className="text-xs text-muted-foreground/80 mt-1">For {stateName} Gyms & Fitness Centers</p>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-12 border-t border-border">
          <h2 className="text-3xl font-bold text-center mb-2 text-primary">Hear From Fitness Businesses We've Strengthened in {stateName} & Beyond</h2>
          <p className="text-center text-muted-foreground mb-10 max-w-xl mx-auto">
            Real stories from gym and studio owners who have boosted their memberships with TRAC's SEO expertise.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {gymTestimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-card p-6 rounded-lg shadow-xl text-center">
                <Image
                  src={testimonial.avatarUrl}
                  alt={testimonial.name}
                  width={80}
                  height={80}
                  className="rounded-full mx-auto mb-4 border-2 border-accent"
                  data-ai-hint={testimonial.dataAiHint || "fitness professional"}
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
