"use client";

import React from 'react';
import { motion } from 'framer-motion';

const quotes = [
  {
    quote: "At AILab, we're not just building AI; we're building the future of Pakistan. The impact here is tangible.",
    author: "Dr. Fatima Zahra",
    title: "Lead AI Scientist",
  },
  {
    quote: "The collaborative environment and the sheer scale of challenges we tackle make every day exciting.",
    author: "Ahmed Khan",
    title: "Senior Software Engineer",
  },
  {
    quote: "Working on projects that directly contribute to national security and development is incredibly rewarding.",
    author: "Sana Ali",
    title: "Policy Analyst",
  },
];

export const CultureQuoteSlider = () => {
  return (
    <section className="py-20 px-6 md:px-12 bg-black">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-white mb-12">Our Culture & Values</h2>
        <div className="relative overflow-hidden">
          {/* This would typically be a slider component (e.g., using react-slick or a custom one) */}
          {/* For now, displaying them statically */}
          <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
            {quotes.map((item, index) => (
              <motion.div
                key={index}
                className="bg-card p-8 rounded-lg border border-ph-border shadow-lg text-center"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <p className="text-xl italic text-ph-light-gray mb-4">"{item.quote}"</p>
                <p className="text-white font-semibold">{item.author}</p>
                <p className="text-primary text-sm">{item.title}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
