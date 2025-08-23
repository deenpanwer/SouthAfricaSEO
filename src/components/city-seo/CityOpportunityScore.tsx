"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { RadialBarChart, RadialBar, Legend, Tooltip, ResponsiveContainer, PolarAngleAxis } from 'recharts';

// Inspired by the multi-layer radial bar chart example
const opportunityData = [
  {
    name: 'Search Volume',
    value: 90,
    fill: '#22c55e', // Green
  },
  {
    name: 'Growth Potential',
    value: 80,
    fill: '#38bdf8', // Sky Blue
  },
  {
    name: 'Low Competition',
    value: 65,
    fill: '#f97316', // Orange
  },
  {
    name: 'Conversion Intent',
    value: 75,
    fill: '#eab308', // Yellow
  },
];

const overallScore = 78;

interface CityOpportunityScoreProps {
  cityName: string;
}

export function CityOpportunityScore({ cityName }: CityOpportunityScoreProps) {
  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            The <span className="text-green-600">{cityName}</span> Digital Opportunity Score
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            We've analyzed the local market to give you a snapshot of the SEO landscape.
          </p>
        </div>

        <div className="relative w-full max-w-3xl mx-auto">
            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className="w-full h-[400px]"
            >
                <ResponsiveContainer width="100%" height="100%">
                    <RadialBarChart
                        cx="50%"
                        cy="50%"
                        innerRadius="20%"
                        outerRadius="100%"
                        barSize={15}
                        data={opportunityData}
                        startAngle={180}
                        endAngle={-180}
                    >
                        <PolarAngleAxis type="number" domain={[0, 100]} tick={false} />
                        <RadialBar
                            minAngle={15}
                            background
                            clockWise
                            dataKey="value"
                        />
                        <Tooltip
                            contentStyle={{ background: '#1f2937', border: 'none', borderRadius: '0.5rem' }}
                            labelStyle={{ color: '#f3f4f6' }}
                        />
                        <Legend iconSize={12} layout="vertical" verticalAlign="middle" align="right" />
                         {/* Central Score Text */}
                        <text x="50%" y="50%" textAnchor="middle" dominantBaseline="middle">
                            <tspan className="text-5xl font-bold fill-gray-800">{overallScore}</tspan>
                            <tspan x="50%" dy="1.6em" className="text-lg font-medium fill-gray-500">/ 100</tspan>
                        </text>
                    </RadialBarChart>
                </ResponsiveContainer>
            </motion.div>
        </div>
         <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-8 text-center text-gray-600 max-w-2xl mx-auto italic">
            Our analysis indicates a strong potential for growth in {cityName}. The high search volume combined with relatively low competition creates a prime environment for a targeted SEO campaign to yield significant results.
        </motion.p>
      </div>
    </section>
  );
}
