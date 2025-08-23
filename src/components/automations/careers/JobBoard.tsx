"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import jobsData from '@/app/automations/lib/jobs/jobs.json';
import Link from 'next/link';

interface Job {
  id: string;
  title: string;
  category: string;
  location: string;
  description: string;
  requirements: string[];
}

interface BadgeSelectorProps {
  categories: string[];
  selectedCategory: string | null;
  onSelectCategory: (category: string | null) => void;
}

export const BadgeSelector = ({ categories, selectedCategory, onSelectCategory }: BadgeSelectorProps) => {
  return (
    <div className="flex flex-wrap gap-3 mb-8 justify-center">
      <button
        onClick={() => onSelectCategory(null)}
        className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300
          ${selectedCategory === null
            ? 'bg-primary text-primary-foreground shadow-lg'
            : 'bg-muted text-muted-foreground hover:bg-muted/80'
          }`}
      >
        All Categories
      </button>
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onSelectCategory(category)}
          className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300
            ${selectedCategory === category
              ? 'bg-primary text-primary-foreground shadow-lg'
              : 'bg-muted text-muted-foreground hover:bg-muted/80'
            }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export const JobBoard = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = Array.from(new Set(jobsData.map(job => job.category)));

  const filteredJobs = selectedCategory
    ? jobsData.filter(job => job.category === selectedCategory)
    : jobsData;

  return (
    <section className="py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-white mb-12">Current Openings</h2>
        <BadgeSelector
          categories={categories}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredJobs.length > 0 ? (
            filteredJobs.map((job) => (
              <motion.div
                key={job.id}
                className="bg-card p-6 rounded-lg border border-ph-border shadow-lg flex flex-col justify-between"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5 }}
              >
                <div>
                  <h3 className="text-2xl font-semibold text-white mb-2">{job.title}</h3>
                  <p className="text-primary text-sm font-medium mb-3">{job.category} - {job.location}</p>
                  <p className="text-ph-light-gray text-sm mb-4 line-clamp-3">{job.description}</p>
                </div>
                <Link href={`/automations/careers/${job.id}`}>
                  <button className="mt-4 w-full bg-accent hover:bg-accent/90 text-accent-foreground py-2 rounded-md text-sm font-semibold transition-colors">
                    View Details
                  </button>
                </Link>
              </motion.div>
            ))
          ) : (
            <p className="col-span-full text-center text-ph-light-gray text-lg">
              No jobs found for this category.
            </p>
          )}
        </div>
      </div>
    </section>
  );
};
