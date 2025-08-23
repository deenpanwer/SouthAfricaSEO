"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const perks = [
  "Competitive Salary & Benefits",
  "Cutting-Edge Research Opportunities",
  "National Impact Projects",
  "Professional Development & Training",
  "Flexible Work Arrangements",
  "Health & Wellness Programs",
  "Collaborative & Innovative Environment",
  "State-of-the-Art Facilities",
];

export const PerkMatrix = () => {
  return (
    <section className="py-20 px-6 md:px-12 bg-ph-dark-gray">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-white mb-12">Perks & Benefits</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {perks.map((perk, index) => (
            <motion.div
              key={index}
              className="bg-card p-6 rounded-lg border border-ph-border shadow-lg flex items-start space-x-4"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <CheckCircle className="text-primary flex-shrink-0 mt-1" size={24} />
              <p className="text-ph-light-gray text-lg font-medium">{perk}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
