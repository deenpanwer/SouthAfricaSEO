
"use client";

import Image from 'next/image';
import { useState } from 'react';
import type { Testimonial } from '@/types'; // Assuming you might use this type
import { TrendingUp, Users, Leaf } from 'lucide-react';

// Placeholder testimonials, ideally these would be specific to landscaping clients
const landscapingTestimonials: Testimonial[] = [
  { id: 'ls1', name: "Sarah Davis", company: "GreenView Landscapes, CA", quote: "TRAC's SEO strategy helped us double our leads for garden design projects!", highlightedQuote: "Doubled our leads!", avatarUrl: "https://placehold.co/100x100.png", dataAiHint: "happy client" },
  { id: 'ls2', name: "Mike Roberts", company: "Texas Lawn Pros, TX", quote: "Our local search rankings have soared since working with TRAC. We're getting calls from all over Dallas.", highlightedQuote: "Rankings soared!", avatarUrl: "https://placehold.co/100x100.png", dataAiHint: "business owner" },
  { id: 'ls3', name: "Linda Chen", company: "Florida Tropical Gardens, FL", quote: "The team understood our niche in tropical landscaping and helped us attract the right customers. Highly recommend!", highlightedQuote: "Attracted right customers!", avatarUrl: "https://placehold.co/100x100.png", dataAiHint: "smiling professional" },
];

interface LandscapingStateResultsHighlightsProps {
  headline: string; // e.g., "SEO Results That Make [StateName] Landscaping Businesses Blossom"
  stateName: string;
}

// Mockup results specific to landscaping
const landscapingResults = [
    { metric: "Avg. Increase in Service Bookings", value: "+150%", icon: TrendingUp, dataAiHint: "growth chart" },
    { metric: "Avg. Improvement in Local Pack Rankings", value: "+75%", icon: Users, dataAiHint: "local map ranking" },
    { metric: "Avg. Rise in Project Leads", value: "+120%", icon: Leaf, dataAiHint: "lead generation icon" }
];

export function LandscapingStateResultsHighlights({ headline, stateName }: LandscapingStateResultsHighlightsProps) {
  return (
    <section className="py-12 md:py-16 bg-white text-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-10">{headline}</h2>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {landscapingResults.map((result, index) => (
            <div key={index} className="border border-gray-200 rounded-lg shadow-md overflow-hidden text-center p-6">
              <result.icon className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <p className="text-4xl font-bold text-green-600 mb-2">{result.value}</p>
              <p className="text-sm text-gray-600 uppercase">{result.metric}</p>
              <p className="text-xs text-gray-500 mt-1">For {stateName} Landscapers</p>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-12 border-t border-gray-200">
          <h2 className="text-3xl font-bold text-center mb-2">Hear From Landscapers We've Helped</h2>
          <p className="text-center text-gray-600 mb-10 max-w-xl mx-auto">
            Real stories from landscaping businesses in {stateName} and beyond who have grown with TRAC's SEO.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {landscapingTestimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-gray-50 p-6 rounded-lg shadow-md text-center">
                <Image
                  src={testimonial.avatarUrl}
                  alt={testimonial.name}
                  width={80}
                  height={80}
                  className="rounded-full mx-auto mb-4 border-2 border-yellow-400"
                  data-ai-hint={testimonial.dataAiHint || "client photo"}
                />
                <h3 className="font-semibold text-lg mb-0.5">{testimonial.name}</h3>
                <p className="text-xs text-gray-500 mb-3">{testimonial.company}</p>
                 <div className="bg-yellow-400 p-2 rounded-md mb-3">
                    <p className="text-gray-800 italic font-semibold text-sm">"{testimonial.highlightedQuote}"</p>
                  </div>
                <blockquote className="text-gray-600 italic text-sm leading-relaxed mb-3">
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
