// src/components/all-inclusive-seo/GrowthRoadmap.tsx
"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

// Define the structure for each roadmap milestone
interface Milestone {
  month: number;
  title: string;
  description: string;
}

const roadmapMilestones: Milestone[] = [
  {
    month: 1,
    title: 'Foundation & Quick Wins',
    description: 'We conduct a full-scale audit and create your custom game plan. We immediately fix critical issues and capitalize on the easiest wins to get the needle moving from week one.',
  },
  {
    month: 2,
    title: 'Content & Authority Launch',
    description: 'We begin executing your content strategy, publishing high-value articles and pages. We launch our link-building campaigns to start building your site\'s authority and credibility in the eyes of search engines. Your risk-free guarantee period ends here, once you\'ve seen our process in action.',
  },
  {
    month: 3,
    title: 'Scaling & Performance Tracking',
    description: 'We analyze the initial data, double down on what\'s working, and refine our approach. You\'ll see clear progress in your dashboard as we scale content production and link acquisition for sustained growth.',
  },
];

const GrowthRoadmap: React.FC = () => {
  return (
    <section className="py-20 bg-white text-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 tracking-tight text-center">
          Your First <span className="text-blue-500">90 Days</span>: From Zero to Growth Momentum
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg sm:text-xl leading-relaxed tracking-tight text-gray-700 max-w-2xl mx-auto text-center mb-16">
          We don't believe in waiting for results. Our structured 90-day plan is designed to build momentum fast and deliver a clear return on your investment.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {roadmapMilestones.map((milestone, index) => (
            <motion.div
              key={milestone.month}
              className="relative p-1 bg-gradient-to-br from-gray-200 via-gray-100 to-white rounded-[2rem] shadow-xl"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: index * 0.2 + 0.4 }}
            >
              <div className="bg-white rounded-[1.75rem] p-8 h-full flex flex-col justify-between">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-blue-500 text-white text-2xl font-bold mb-6 mx-auto shadow-lg ring-4 ring-blue-100">
                  M{milestone.month}
                </div>
                <h3 className="text-2xl font-bold mb-3 text-gray-900">{milestone.title}</h3>
                <p className="text-gray-700 text-base">{milestone.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GrowthRoadmap;
