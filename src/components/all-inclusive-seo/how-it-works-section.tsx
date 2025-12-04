'use client';

import React from "react";
import { motion } from "framer-motion";
import { FocusCards } from "@/components/ui/focus-cards"; 

const HowItWorksSection = () => {
  const cards = [
    {
      title: "1. Your Custom Blueprint",
      content: (
        <p className="text-sm text-gray-700">
          We start by analyzing your website, competitors, and industry to create a personalized SEO blueprint. This isn't a generic report; it's an actionable game plan that outlines the exact path to your growth.
        </p>
      ),
    },
    {
      title: "2. Foundation & Quick Wins",
      content: (
        <p className="text-sm text-gray-700">
          We immediately tackle the foundational work and low-hanging fruit. This includes critical technical fixes, on-page optimizations, and setting up your tracking infrastructure so we can measure everything from day one.
        </p>
      ),
    },
    {
      title: "3. Content & Authority Building",
      content: (
        <p className="text-sm text-gray-700">
          We create and publish high-quality, relevant content that targets your ideal customers. Simultaneously, we build your site's authority with high-quality, relevant backlinks that tell search engines you're a leader in your space.
        </p>
      ),
    },
    {
      title: "4. Transparent Reporting & Growth",
      content: (
        <p className="text-sm text-gray-700">
          You get 24/7 access to a live dashboard showing your progress—no confusing jargon. We continuously monitor what’s working, refine our strategy, and keep pushing your growth forward.
        </p>
      ),
    },
  ];

  return (
    <section className="relative w-full bg-white py-20 lg:py-32">
      <div className="absolute top-0 left-0 w-full h-10 bg-gradient-to-b from-black to-transparent pointer-events-none z-10" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 max-w-4xl mx-auto"
          >
            Your Path to Ranking: Simple & Transparent
          </motion.h2>
          <motion.p
            className="text-lg text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            No black boxes. Here’s exactly how we get you results, step-by-step.
          </motion.p>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <FocusCards cards={cards.map(card => ({
              title: card.title,
              content: card.content
          }))} />
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
