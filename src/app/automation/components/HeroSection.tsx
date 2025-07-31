'use client';

import React from 'react';
import Button from './ui/Button';
import { motion } from 'framer-motion';

const HeroSection: React.FC = () => {
  return (
    <div className="relative min-h-[150vh] w-full flex flex-col items-center text-ph-white overflow-hidden pt-10">
      {/* Content Container */}
      <div className="relative z-20 text-center px-4 pt-80">
        <motion.h1
          className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 drop-shadow-lg uppercase"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          #1 AI RESEARCH LAB & AGENCY
          <br />IN PAKISTAN
        </motion.h1>
      </div>

      {/* Scroll to Explore with Jumping Arrow (Absolute Position) */}
      <motion.div
        className="absolute bottom-40 left-1/2 -translate-x-1/2 flex flex-col items-center animate-flicker z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.5 }}
      >
        <motion.svg
          className="w-6 h-6 text-ph-white mb-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          animate={{ y: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </motion.svg>
        <p className="text-ph-white text-sm">Scroll to Explore</p>
      </motion.div>
    </div>
  );
};

export default HeroSection;