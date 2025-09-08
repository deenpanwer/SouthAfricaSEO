
"use client";

import { motion } from "framer-motion";
import { CheckCircle, Search, BarChart2, Link2, Edit, TrendingUp } from "lucide-react";
import { RoadmapStep } from '@/types'; // Import RoadmapStep from types

interface CityRoadmapProps {
  cityName: string;
  roadmapSteps: RoadmapStep[]; // New prop for roadmap steps
}

export function CityRoadmap({ cityName, roadmapSteps }: CityRoadmapProps) {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
      },
    },
  };
    const itemVariantsRight = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className="py-12 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Your Path to #1 in <span className="text-green-600">{cityName}</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Our proven SEO roadmap is designed to build sustainable growth and dominate the local search landscape.
          </p>
        </div>

        <div className="relative">
          {/* The vertical line */}
          <div className="absolute left-1/2 -translate-x-1/2 h-full w-0.5 bg-gray-300" aria-hidden="true"></div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
            className="space-y-12"
          >
            {roadmapSteps.map((step, index) => {
              const isOdd = index % 2 !== 0;
              return (
                <motion.div
                  key={index}
                  variants={isOdd ? itemVariantsRight : itemVariants}
                  className={`flex items-center w-full ${isOdd ? 'justify-start' : 'justify-end'}`}
                >
                  <div className={`w-1/2 ${isOdd ? 'pl-8 md:pl-16' : 'pr-8 md:pr-16 text-right'}`}>
                    <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
                      <div className={`flex items-center ${isOdd ? 'justify-start' : 'justify-end'}`}>
                        {/* Render icon based on string name */}
                        {step.icon === "Search" && <Search className="h-8 w-8 text-orange-500 mb-2" />}
                        {step.icon === "CheckCircle" && <CheckCircle className="h-8 w-8 text-orange-500 mb-2" />}
                        {step.icon === "BarChart2" && <BarChart2 className="h-8 w-8 text-orange-500 mb-2" />}
                        {step.icon === "Edit" && <Edit className="h-8 w-8 text-orange-500 mb-2" />}
                        {step.icon === "Link2" && <Link2 className="h-8 w-8 text-orange-500 mb-2" />}
                        {step.icon === "TrendingUp" && <TrendingUp className="h-8 w-8 text-orange-500 mb-2" />}
                      </div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">{step.title}</h3>
                      <p className="text-gray-600">{step.description.replace(/\[CityName\]/g, cityName)}</p>
                    </div>
                  </div>
                  
                  {/* The Node on the timeline */}
                  <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-green-600 rounded-full border-4 border-white"></div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
