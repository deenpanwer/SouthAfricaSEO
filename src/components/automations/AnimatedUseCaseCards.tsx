"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image'; // Import Next.js Image component

const useCases = [
  {
    title: "Predictive Defense Analytics",
    description: "AI models for real-time threat assessment and strategic resource deployment.",
    icon: "https://tse1.mm.bing.net/th/id/OIP.H4vUKruTEGDkz7pbGJcjlQHaH_?pid=Api&P=0&h=220", // Placeholder
  },
  {
    title: "National Resource Optimization",
    description: "Leveraging AI to optimize energy, water, and agricultural resource distribution.",
    icon: "https://tse1.mm.bing.net/th/id/OIP.vpb_mig_F1gpkU0Sm6zOcgHaHa?pid=Api&P=0&h=220", // Placeholder
  },
  {
    title: "Smart City Infrastructure",
    description: "AI-driven solutions for urban planning, traffic management, and public safety.",
    icon: "https://tse3.mm.bing.net/th/id/OIP.2phZHYC2gepLyYwZnKWJfQHaHa?pid=Api&P=0&h=220", // Placeholder
  },
  {
    title: "Cybersecurity & Intelligence",
    description: "Advanced AI for anomaly detection, threat intelligence, and secure communication.",
    icon: "https://tse1.mm.bing.net/th/id/OIP.Eiibgd9ikdDOPddkEYJlNgHaHa?pid=Api&P=0&h=220", // Placeholder
  },
];

export const AnimatedUseCaseCards = () => {
  return (
    <section className="py-20 px-6 md:px-12 bg-ph-dark-gray">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-white mb-16">
          Unlocking Tomorrow's Possibilities
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {useCases.map((useCase, index) => (
            <motion.div
              key={index}
              className="bg-card p-8 rounded-lg shadow-lg border border-ph-border flex flex-col items-center text-center transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Placeholder for Icon */}
              <div className="relative w-24 h-24 mb-6 bg-primary/20 rounded-lg flex items-center justify-center overflow-hidden">
                <Image src={useCase.icon} alt={useCase.title} fill style={{ objectFit: 'contain' }} className="p-2" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{useCase.title}</h3>
              <p className="text-ph-light-gray text-sm">{useCase.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
