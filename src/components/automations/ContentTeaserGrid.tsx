"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const contentItems = [
  {
    type: "Blog",
    title: "How Pakistan Can Build AI-Powered Military Drone Systems",
    description: "Exploring the strategic implications and technical pathways for advanced drone integration.",
    link: "/automations/blog/ai-powered-military-drones",
    image: "/images/automations/content/drone-systems.jpg", // Placeholder
  },
  {
    type: "News",
    title: "Google & Oracle Invited to Build Data Centers in Pakistan",
    description: "A landmark move signaling Pakistan's commitment to digital infrastructure.",
    link: "/automations/news/google-oracle-data-centers",
    image: "/images/automations/content/data-center.jpg", // Placeholder
  },
  {
    type: "Case Study",
    title: "Russia’s Military AI Doctrine: Reshaping the Eastern Front",
    description: "An in-depth analysis of autonomous systems in modern warfare.",
    link: "/automations/case-studies/russia-military-ai",
    image: "/images/automations/content/russia-ai.jpg", // Placeholder
  },
];

export const ContentTeaserGrid = () => {
  return (
    <section className="py-20 px-6 md:px-12 bg-ph-dark-gray">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-white mb-16">
          Featured Insights & Analysis
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {contentItems.map((item, index) => (
            <motion.div
              key={index}
              className="bg-card rounded-lg shadow-lg border border-ph-border overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link href={item.link}>
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <span className="text-sm font-semibold text-primary uppercase mb-2 block">
                    {item.type}
                  </span>
                  <h3 className="text-xl font-semibold text-white mb-3 line-clamp-2">
                    {item.title}
                  </h3>
                  <p className="text-ph-light-gray text-sm line-clamp-3">
                    {item.description}
                  </p>
                  <span className="mt-4 inline-block text-primary hover:text-primary/80 transition-colors text-sm font-medium">
                    Read More &rarr;
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
