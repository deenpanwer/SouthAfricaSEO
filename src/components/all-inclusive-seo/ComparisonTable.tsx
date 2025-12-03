// src/components/all-inclusive-seo/ComparisonTable.tsx
"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { AnimatedCheck } from '@/components/ui/AnimatedCheck';
import { AnimatedX } from '@/components/ui/AnimatedX';
import { cn } from '@/lib/utils'; // Assuming cn is available for utility classes

// --- Data Structures ---
interface ComparisonData {
  feature: string;
  aiSeo: React.ReactNode | string;
  traditionalAgency: React.ReactNode | string;
  doingItYourself: React.ReactNode | string;
}

interface ComparisonColumn {
  id: 'aiSeo' | 'traditionalAgency' | 'doingItYourself';
  name: string;
  subheading: string;
  highlightColor?: string; // e.g., 'blue', 'green', 'purple' for custom glow
}

// --- Column Definitions ---
const columnHeaders: ComparisonColumn[] = [
  { id: 'aiSeo', name: 'AI SEO (Our Solution)', subheading: 'The Future of Growth', highlightColor: 'blue' },
  { id: 'traditionalAgency', name: 'Traditional Agency', subheading: 'Standard Approach' },
  { id: 'doingItYourself', name: 'Doing It Yourself', subheading: 'Time & Effort Intensive' },
];

// --- Comparison Data ---
const comparisonData: ComparisonData[] = [
  {
    feature: 'Automated Keyword Research',
    aiSeo: <AnimatedCheck />,
    traditionalAgency: <AnimatedCheck />,
    doingItYourself: <AnimatedX />,
  },
  {
    feature: 'AI Content Briefs & Generation',
    aiSeo: <AnimatedCheck />,
    traditionalAgency: 'Limited AI Tools',
    doingItYourself: <AnimatedX />,
  },
  {
    feature: 'On-Page Optimization Engine',
    aiSeo: <AnimatedCheck />,
    traditionalAgency: <AnimatedCheck />,
    doingItYourself: 'Manual & Basic',
  },
  {
    feature: 'Automated Backlink Monitoring',
    aiSeo: <AnimatedCheck />,
    traditionalAgency: 'Manual Reporting',
    doingItYourself: 'Basic Tools',
  },
  {
    feature: 'Real-time Reporting Dashboard',
    aiSeo: <AnimatedCheck />,
    traditionalAgency: <AnimatedCheck />,
    doingItYourself: 'Fragmented',
  },
  {
    feature: 'Cost-Effectiveness',
    aiSeo: 'High (Automated Savings)',
    traditionalAgency: 'Moderate to Low',
    doingItYourself: 'Variable (High Time Cost)',
  },
  {
    feature: 'Speed of Implementation',
    aiSeo: 'Very Fast',
    traditionalAgency: 'Moderate',
    doingItYourself: 'Slow',
  },
  {
    feature: 'Scalability',
    aiSeo: 'Excellent (AI-driven)',
    traditionalAgency: 'Limited',
    doingItYourself: 'Poor',
  },
  {
    feature: 'Dedicated Support',
    aiSeo: <AnimatedCheck />,
    traditionalAgency: <AnimatedCheck />,
    doingItYourself: <AnimatedX />,
  },
  {
    feature: 'Innovation & Updates',
    aiSeo: 'Continuous (AI-led)',
    traditionalAgency: 'Periodic',
    doingItYourself: 'Self-researched',
  },
];

// --- Spotlight Component (for the AI SEO column) ---
const ColumnSpotlight: React.FC<{ children: React.ReactNode; color: string }> = ({ children, color }) => {
  const spotlightVariants = {
    initial: { boxShadow: `0 0 0px rgba(0,0,0,0)` },
    animate: {
      boxShadow: [
        `0 0 50px rgba(0, 0, 0, 0.1), 0 0 10px ${color}`,
        `0 0 70px rgba(0, 0, 0, 0.2), 0 0 20px ${color}`,
        `0 0 50px rgba(0, 0, 0, 0.1), 0 0 10px ${color}`,
      ],
      transition: {
        duration: 4,
        ease: "easeInOut",
        repeat: Infinity,
      },
    },
  };

  return (
    <motion.div
      className="relative h-full w-full rounded-xl p-0.5" // Inner padding creates the glow visible from outside
      variants={spotlightVariants}
      initial="initial"
      animate="animate"
      style={{ backgroundColor: color === 'blue' ? 'rgba(59, 130, 246, 0.1)' : 'transparent' }} // Subtle background for highlight
    >
      <div className="h-full w-full bg-white rounded-xl relative z-10 p-0.5 overflow-hidden">
        {children}
      </div>
    </motion.div>
  );
};


const ComparisonTable: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50 text-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-5xl font-extrabold text-center mb-6 tracking-tight leading-tight">
          AI SEO <span className="text-blue-600">vs.</span> The Old Way
        </h2>
        <p className="text-center text-xl text-gray-600 mb-16 max-w-3xl mx-auto">
          See why our AI-powered SEO solution is the clear choice for modern businesses seeking exponential growth and efficiency.
        </p>

        {/* --- Comparison Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Feature Column Header (Empty for alignment) */}
          <div className="hidden md:block col-span-1"></div>

          {/* Dynamic Column Headers */}
          {columnHeaders.map((col) => (
            <motion.div
              key={col.id}
              className={cn(
                "col-span-1 p-6 text-center rounded-lg shadow-md",
                col.highlightColor ? `bg-blue-600 text-white` : 'bg-gray-100'
              )}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl font-bold mb-1">{col.name}</h3>
              <p className={col.highlightColor ? 'text-blue-200' : 'text-gray-500'}>{col.subheading}</p>
            </motion.div>
          ))}
        </div>

        {/* --- Comparison Rows --- */}
        <div className="mt-8 space-y-4">
          {comparisonData.map((dataRow, rowIndex) => (
            <motion.div
              key={rowIndex}
              className={cn(
                "grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-8 p-4 rounded-lg items-center",
                rowIndex % 2 === 0 ? 'bg-white' : 'bg-gray-50'
              )}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: rowIndex * 0.1 }}
            >
              {/* Feature Name */}
              <div className="font-semibold text-lg text-gray-800 md:col-span-1 p-2 md:text-left text-center">
                {dataRow.feature}
              </div>

              {/* Comparison Values for each column */}
              {columnHeaders.map((col, colIndex) => {
                const content = dataRow[col.id];
                const isAISeoColumn = col.id === 'aiSeo';

                const cellContent = (
                  <motion.div
                    className={cn(
                      "flex items-center justify-center h-full p-2 text-center",
                      isAISeoColumn ? 'text-blue-700 font-medium' : 'text-gray-700'
                    )}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: rowIndex * 0.1 + 0.3 + colIndex * 0.05 }}
                  >
                    {content}
                  </motion.div>
                );

                return (
                  <div key={col.id} className="col-span-1">
                    {isAISeoColumn && col.highlightColor ? (
                      <ColumnSpotlight color={col.highlightColor === 'blue' ? '#3B82F6' : '#9333EA'}> {/* Using actual Tailwind color codes */}
                        {cellContent}
                      </ColumnSpotlight>
                    ) : (
                      <div className="h-full flex items-center justify-center p-2">
                        {cellContent}
                      </div>
                    )}
                  </div>
                );
              })}
            </motion.div>
          ))}
        </div>

        <p className="mt-16 text-center text-gray-500 text-sm max-w-2xl mx-auto">
          * Note: AI SEO represents our advanced, comprehensive solution, leveraging cutting-edge technology for superior results. Traditional Agency and Doing It Yourself options often come with limitations in speed, scalability, and cost-effectiveness.
        </p>
      </div>
    </section>
  );
};

export default ComparisonTable;
