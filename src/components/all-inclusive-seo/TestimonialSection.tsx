// src/components/all-inclusive-seo/TestimonialSection.tsx
"use client";

import React from 'react';
import { TestimonialCarousel } from '@/components/ui/testimonial-carousel';

interface Testimonial {
  company: string;
  avatar: string;
  name: string;
  role: string;
  review: string;
}

const testimonials: Testimonial[] = [
  {
    company: 'Vercel',
    avatar: 'vercel-founder-avatar.png', // Placeholder
    name: 'Guillermo Rauch',
    role: 'CEO & Founder, Vercel',
    review: "The AI SEO strategies implemented by this team are truly revolutionary. Our organic traffic saw an unprecedented surge, directly impacting our conversion rates. A game-changer for any modern business.",
  },
  {
    company: 'Stripe',
    avatar: 'stripe-founder-avatar.png', // Placeholder
    name: 'Patrick Collison',
    role: 'CEO & Co-founder, Stripe',
    review: "We operate in a highly competitive digital landscape. Their data-driven approach and AI insights provided a distinct advantage, optimizing our online presence far beyond traditional methods.",
  },
  {
    company: 'Gar y Tan',
    avatar: 'gary-tan-avatar.png', // Placeholder
    name: 'Gary Tan',
    role: 'President & CEO, Y Combinator',
    review: "As an investor, I look for innovation. This AI SEO solution delivers exactly that – scalable, intelligent, and incredibly effective. It's an essential tool for startups looking to dominate search.",
  },
  {
    company: 'Clerk',
    avatar: 'clerk-founder-avatar.png', // Placeholder
    name: 'Brice Stacey',
    role: 'Co-founder, Clerk',
    review: "Integrating their AI SEO platform felt like unlocking a cheat code for growth. The clarity, speed, and tangible results have made a profound impact on our customer acquisition strategy.",
  },
];

const TestimonialSection: React.FC = () => {
  return (
    <section className="py-20 bg-gray-100 text-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-5xl font-extrabold text-center mb-12 tracking-tight leading-tight">
          What Our <span className="text-blue-600">Visionary</span> Clients Say
        </h2>
        <TestimonialCarousel
          testimonials={testimonials}
          companyLogoPath="/public/logos/" // Assuming logos are in public/logos/
          avatarPath="/public/avatars/"   // Assuming avatars are in public/avatars/
        />
      </div>
    </section>
  );
};

export default TestimonialSection;
