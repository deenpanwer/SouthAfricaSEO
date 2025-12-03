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
    title: 'Audit & Foundation',
    description: 'Comprehensive SEO audit, competitor analysis, keyword strategy development, and technical SEO setup.',
  },
  {
    month: 2,
    title: 'Content Velocity & Authority',
    description: 'AI-driven content brief generation, creation of high-quality, engaging content, and link-building outreach.',
  },
  {
    month: 3,
    title: 'Ranking Growth & Refinement',
    description: 'Continuous on-page optimization, backlink monitoring, performance analysis, and strategy adjustments for sustained growth.',
  },
];

const GrowthRoadmap: React.FC = () => {
  return (
    <section className="py-20 bg-white text-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 tracking-tight text-center">
          Your <span className="text-blue-500">90-Day</span> Growth Roadmap
        </h2>
        <p className="text-lg sm:text-xl leading-relaxed tracking-tight text-gray-700 max-w-2xl mx-auto text-center mb-16">
          A clear, structured path to achieving significant SEO results and business growth.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {roadmapMilestones.map((milestone, index) => (
            <motion.div
              key={milestone.month}
              className="relative p-1 bg-gradient-to-br from-gray-200 via-gray-100 to-white rounded-[2rem] shadow-xl"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
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
