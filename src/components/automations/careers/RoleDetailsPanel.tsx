"use client";

import React from 'react';
import { motion } from 'framer-motion';

interface Job {
  id: string;
  title: string;
  category: string;
  location: string;
  description: string;
  requirements: string[];
}

interface RoleDetailsPanelProps {
  job: Job;
}

export const RoleDetailsPanel = ({ job }: RoleDetailsPanelProps) => {
  return (
    <motion.div
      className="bg-card p-8 rounded-lg border border-ph-border shadow-lg"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-4xl font-bold text-white mb-4">{job.title}</h1>
      <p className="text-primary text-lg font-medium mb-6">{job.category} - {job.location}</p>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-white mb-3">Job Description</h2>
        <p className="text-ph-light-gray text-base leading-relaxed">{job.description}</p>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-white mb-3">Key Requirements</h2>
        <ul className="list-disc list-inside text-ph-light-gray text-base space-y-2">
          {job.requirements.map((req, index) => (
            <li key={index}>{req}</li>
          ))}
        </ul>
      </div>

      <button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-3 rounded-md text-lg font-semibold shadow-lg transition-colors">
        Apply Now
      </button>
    </motion.div>
  );
};
