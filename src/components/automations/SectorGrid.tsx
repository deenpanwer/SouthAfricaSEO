"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image'; // Import Next.js Image component

const sectors = [
  {
    title: "Government of Pakistan",
    description: "Policy transformation, digital governance, and public sector efficiency through AI.",
    icon: "https://tse2.mm.bing.net/th/id/OIP.LS1aKR8HQ-RPQJv_znja6QHaHT?pid=Api&P=0&h=220", // Placeholder
  },
  {
    title: "Pakistan Armed Forces",
    description: "Defense tech, AI modernization, and strategic intelligence for national security.",
    icon: "https://tse2.mm.bing.net/th/id/OIP.f3eB8NZAg6aHQoASKGp7DwHaHw?pid=Api&P=0&h=220", // Placeholder
  },
  {
    title: "Large Pakistani Enterprises",
    description: "Digital transformation, productivity enhancement, and competitive advantage with AI.",
    icon: "https://tse1.mm.bing.net/th/id/OIP.7teuSDt4rGO7OdduakV0tgHaHa?pid=Api&P=0&h=220", // Placeholder
  },
];

export const SectorGrid = () => {
  return (
    <section className="py-20 px-6 md:px-12 bg-black">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-white mb-16">
          Who We Serve
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {sectors.map((sector, index) => (
            <motion.div
              key={index}
              className="bg-card p-8 rounded-lg shadow-lg border border-ph-border flex flex-col items-center text-center transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Placeholder for Icon */}
              <div className="relative w-24 h-24 mb-6 bg-secondary/20 rounded-lg flex items-center justify-center overflow-hidden">
                <Image src={sector.icon} alt={sector.title} fill style={{ objectFit: 'contain' }} className="p-2" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{sector.title}</h3>
              <p className="text-ph-light-gray text-sm">{sector.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
