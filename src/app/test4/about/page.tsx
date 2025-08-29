
"use client";

import React from 'react';
import { motion } from 'framer-motion';

const AboutPage: React.FC = () => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.2 } },
  };

  return (
    <motion.div
      className="container mx-auto px-6 py-24"
      variants={sectionVariants}
      initial="hidden"
      animate="show"
    >
      <motion.h1
        className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-center"
        variants={textVariants}
      >
        About Us: Empowering Decisions with AI
      </motion.h1>
      <motion.p
        className="mt-4 text-lg md:text-xl leading-relaxed text-center max-w-4xl mx-auto mb-8"
        variants={textVariants}
      >
        We are the #1 AI lab in Pakistan, dedicated to building software that empowers organizations to effectively integrate their data, decisions, and operations. Our mission is to augment human intelligence, not replace it, by providing cutting-edge AI, machine learning, and natural language processing solutions.
      </motion.p>
      <motion.p
        className="mt-4 text-lg md:text-xl leading-relaxed text-center max-w-4xl mx-auto mb-8"
        variants={textVariants}
      >
        Our approach is rooted in mission-driven engineering. We assemble expert teams in distributed systems, big data processing, user experience design, and data science. Our engineers work directly with clients to deploy products, integrate diverse data sources, optimize workflows, and rapidly achieve operational results.
      </motion.p>
      <motion.p
        className="mt-4 text-lg md:text-xl leading-relaxed text-center max-w-4xl mx-auto"
        variants={textVariants}
      >
        We believe in forging long-term partnerships, helping public institutions, commercial enterprises, and non-profit organizations unlock the true value of their data. Our technology connects data, analytics, and operational execution, enabling data-driven decisions and sophisticated insights to transform operations and address critical challenges.
      </motion.p>
    </motion.div>
  );
};

export default AboutPage;
