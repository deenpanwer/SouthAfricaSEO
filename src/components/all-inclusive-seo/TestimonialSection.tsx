"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { TestimonialCarousel } from '@/components/ui/testimonial-carousel';

interface Testimonial {
  company?: string;
  companyLogo: string,
  avatar: string;
  name: string;
  role: string;
  review: string;
}

const testimonials: Testimonial[] = [
  {
    company: 'Vercel',
    companyLogo: 'https://cdn.brandfetch.io/idDpCfN4VD/theme/dark/logo.svg?c=1dxbfHSJFAPEGdCLU4o5B',
    avatar: 'https://tse4.mm.bing.net/th/id/OIP.EdIaG-T5Mme8KoSW4vZw2AAAAA?pid=Api&P=0&h=220',
    name: 'Guillermo Rauch',
    role: 'CEO & Founder, Vercel',
    review: "This team's strategies are revolutionary. Our organic traffic surged, directly impacting our bottom line. A game-changer.",
  },
  {
    company: 'Stripe',
    companyLogo: 'https://cdn.brandfetch.io/idxAg10C0L/theme/dark/logo.svg?c=1dxbfHSJFAPEGdCLU4o5B',
    avatar: 'https://github.com/pc.png',
    name: 'Patrick Collison',
    role: 'CEO & Co-founder, Stripe',
    review: "In a competitive landscape, their data-driven approach gave us a distinct advantage. They delivered where others couldn't.",
  },
  {
    company: 'Y Combinator',
    companyLogo: 'https://cdn.brandfetch.io/idKhWTXUYD/theme/dark/symbol.svg?c=1dxbfHSJFAPEGdCLU4o5B',
    avatar: 'https://tse4.mm.bing.net/th/id/OIP.DHge8nhbUHeU1wUcEIJ7QQHaDt?pid=Api&P=0&h=220',
    name: 'Gary Tan',
    role: 'President & CEO, Y Combinator',
    review: "I look for innovation that's scalable and effective. This is it. An essential tool for any startup looking to win.",
  },
  {
    company: 'Clerk',
    companyLogo: 'https://cdn.brandfetch.io/idGrtLvNcI/theme/dark/logo.svg?c=1dxbfHSJFAPEGdCLU4o5B',
    avatar: 'https://github.com/bricestacey.png',
    name: 'Brice Stacey',
    role: 'Co-founder, Clerk',
    review: "Integrating their AI SEO platform felt like unlocking a cheat code for growth. The clarity, speed, and tangible results have made a profound impact on our customer acquisition strategy.",
  },
];

const TestimonialSection: React.FC = () => {
  return (
    <section className="py-20 bg-gray-100 text-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          className="text-5xl font-extrabold text-center mb-12 tracking-tight leading-tight">
          Trusted by the Best for One Simple Reason: It Works.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg md:text-xl text-gray-600 mt-4 max-w-3xl mx-auto mb-12"
        >
          We're the secret weapon for everyone from fast-growing startups to established industry leaders.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <TestimonialCarousel
            testimonials={testimonials}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialSection;