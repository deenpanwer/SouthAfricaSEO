"use client";

import React from 'react';
import { motion } from 'framer-motion';

const useCases = [
  {
    title: "Predictive Defense Analytics",
    description: "AI models for real-time threat assessment and strategic resource deployment.",
    icon: "/images/automations/icons/defense.svg", // Placeholder
  },
  {
    title: "National Resource Optimization",
    description: "Leveraging AI to optimize energy, water, and agricultural resource distribution.",
    icon: "/images/automations/icons/resources.svg", // Placeholder
  },
  {
    title: "Smart City Infrastructure",
    description: "AI-driven solutions for urban planning, traffic management, and public safety.",
    icon: "/images/automations/icons/city.svg", // Placeholder
  },
  {
    title: "Cybersecurity & Intelligence",
    description: "Advanced AI for anomaly detection, threat intelligence, and secure communication.",
    icon: "/images/automations/icons/cyber.svg", // Placeholder
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
              className="bg-card p-8 rounded-lg shadow-lg border border-ph-border flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Placeholder for Icon */}
              <div className="w-16 h-16 mb-6 bg-primary/20 rounded-full flex items-center justify-center">
                <img src={useCase.icon} alt={useCase.title} className="w-8 h-8 text-primary" />
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
