
'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface ProcessStep {
  title: string;
  description: string;
  icon?: React.ReactNode; // Optional icon for the step
}

interface InteractiveProcessFlowProps {
  headline: string;
  description: string;
  steps: ProcessStep[];
}

export function InteractiveProcessFlow({ headline, description, steps }: InteractiveProcessFlowProps) {
  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 10 } },
  };

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          {headline}
        </h2>
        <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
          {description}
        </p>
        <div className="relative flex flex-col items-center">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="relative w-full max-w-xl mb-12 last:mb-0"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={itemVariants}
            >
              <div className="flex items-center justify-center md:justify-start">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-xl z-10">
                  {index + 1}
                </div>
                <div className="flex-grow border-t-2 border-gray-200 absolute left-0 right-0 md:left-12 md:right-auto md:w-auto md:relative md:ml-4"></div>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg shadow-md mt-4 md:mt-0 md:ml-16 md:text-left">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
