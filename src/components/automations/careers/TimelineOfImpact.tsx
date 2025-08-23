"use client";

import React from 'react';
import { motion } from 'framer-motion';

const timelineEvents = [
  {
    year: "Year 1",
    title: "Foundational Research & Development",
    description: "Contribute to core AI research, developing foundational models and algorithms for national applications.",
  },
  {
    year: "Year 2-3",
    title: "Pilot Programs & Strategic Deployments",
    description: "See your work deployed in pilot projects with government agencies, military units, or key enterprises.",
  },
  {
    year: "Year 4-5+",
    title: "National Scale Impact & Leadership",
    description: "Lead initiatives that transform sectors, influence national policy, and position Pakistan as an AI leader.",
  },
];

export const TimelineOfImpact = () => {
  return (
    <section className="py-20 px-6 md:px-12 bg-black">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-white mb-12">Your Impact & Growth</h2>
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-ph-border hidden md:block"></div>

          {timelineEvents.map((event, index) => (
            <motion.div
              key={index}
              className="flex flex-col md:flex-row items-center md:items-start justify-center md:justify-between mb-16 last:mb-0"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <div className="md:w-5/12 text-right md:pr-12">
                {index % 2 === 0 && (
                  <div className="text-primary text-2xl font-bold mb-2 md:mb-0">{event.year}</div>
                )}
              </div>
              <div className="relative z-10 w-8 h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0 md:mx-0 mx-auto mb-4 md:mb-0">
                <span className="text-white text-sm font-bold">{index + 1}</span>
              </div>
              <div className="md:w-5/12 text-left md:pl-12">
                {index % 2 !== 0 && (
                  <div className="text-primary text-2xl font-bold mb-2 md:mb-0">{event.year}</div>
                )}
                <h3 className="text-2xl font-semibold text-white mb-2 text-center md:text-left">{event.title}</h3>
                <p className="text-ph-light-gray text-base text-center md:text-left">{event.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
