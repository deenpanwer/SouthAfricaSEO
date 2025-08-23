
'use client';

import React from 'react';
import PlatformCard from '../components/ui/PlatformCard'; 
import { motion } from 'framer-motion';

// Using a slightly different structure to match the HomepagePlatformsSection
const platforms = [
  {
    title: "Gotham",
    category: "Platform",
    description: "An AI-ready operating system for global defense and intelligence.",
    largeText: "Gotham",
    link: "/automation/platforms/gotham",
    details: {
      writtenBy: "Alex Karp, CEO",
      published: "2023",
      length: "5 Min Read"
    }
  },
  {
    title: "Foundry",
    category: "Platform",
    description: "An ontology-powered operating system for the modern enterprise.",
    largeText: "Foundry",
    link: "/automation/platforms/foundry",
    details: {
      writtenBy: "Shyam Sankar, CTO",
      published: "2024",
      length: "7 Min Read"
    }
  },
  {
    title: "AIP",
    category: "Platform",
    description: "Activate large language models and other AI on private networks.",
    largeText: "AIP",
    link: "/automation/platforms/aip",
     details: {
      writtenBy: "AI Division",
      published: "2024",
      length: "6 Min Read"
    }
  },
   {
    title: "Apollo",
    category: "Platform",
    description: "Continuous delivery system for deploying software across all environments.",
    largeText: "Apollo",
    link: "/automation/platforms/apollo",
     details: {
      writtenBy: "DevOps Team",
      published: "2023",
      length: "4 Min Read"
    }
  },
];

const PlatformsPage: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <div className="container mx-auto px-6 py-24">
      <motion.h1 
        className="text-4xl md:text-5xl lg:text-6xl font-bold mb-16 text-center uppercase"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Our Platforms
      </motion.h1>
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 gap-10"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        {platforms.map((platform, index) => (
          <motion.div key={index} variants={itemVariants}>
            {/* The isActive prop is not relevant on this page, but we can pass it as false */}
            <PlatformCard platform={platform} isActive={false} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default PlatformsPage;
