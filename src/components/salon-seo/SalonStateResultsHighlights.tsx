
"use client";

import Image from 'next/image';
import type { Testimonial } from '@/types';
import { TrendingUp, Users, Sparkles, CalendarCheck } from 'lucide-react';

const salonTestimonials: Testimonial[] = [
  {
    id: '1',
    name: "Marci Wiersma",
    company: "Broker – About Roatan Real Estate",
    quote: "Thrive is a much-needed blessing and exceeded our expectations in every way. They are honest, straightforward, they take care of ALL your needs quickly, they are reliable, you can count on them and most of all, they do everything they say they will do, no BS.",
    highlightedQuote: "They do everything they say...no BS",
    avatarUrl: "/home/marci-wiersma.webp",
    
    alt: "Marci Wiersma"
  },
  {
    id: '2',
    name: "Whitney Wells Lewis",
    company: "Practice Manager – PARC Urology",
    quote: "These guys are incredible. They've helped us to grow our business and now the biggest problem we seem to come across is having too much business - which is the ideal problem to have. We are right where we wanted to be and Thrive made that possible. Thanks guys!",
    highlightedQuote: "These guys are incredible",
    avatarUrl: "/home/whitney-wells-lewis.webp",
    
    alt: "Whitney Wells Lewis"
  },
  {
    id: '3',
    name: "Chad Montgomery",
    company: "CEO – Accurate Leak and Line",
    quote: "Working with the Thrive team has been a most pleasant experience! Their dedication and passion for what they do is exemplified by their unrivaled customer support and attentiveness to the specific needs of our business. We look forward to a long-lasting and prosperous relationship!",
    highlightedQuote: "Unrivaled customer support",
    avatarUrl: "/home/chad-montgomery.webp",
    
    alt: "Chad Montgomery"
  },
];

interface SalonStateResultsHighlightsProps {
  headline: string;
  stateName: string;
}

const salonResults = [
    { metric: "Avg. Increase in Online Bookings", value: "+50%", icon: CalendarCheck },
    { metric: "Avg. Growth in Local Search Visibility", value: "+70%", icon: Users },
    { metric: "Avg. Rise in New Client Inquiries", value: "+40%", icon: Sparkles }
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
