'use client';

import React from 'react';
import { motion } from 'framer-motion';

const ImpactStudy2Page: React.FC = () => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const itemVariants = {
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
        className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-center uppercase"
        variants={itemVariants}
      >
        Impact Study 2: Enterprise Data Integration
      </motion.h1>
      <motion.p
        className="mt-4 text-lg md:text-xl leading-relaxed text-center max-w-4xl mx-auto mb-12"
        variants={itemVariants}
      >
        This case study provides a deep dive into how our Foundry-like platform enabled a large enterprise to integrate disparate data sources and gain actionable insights, transforming their operational efficiency and strategic decision-making.
      </motion.p>

      <motion.section
        className="mt-16"
        variants={sectionVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.h2
          className="text-3xl md:text-4xl lg:text-5xl font-bold mb-10"
          variants={itemVariants}
        >
          The Challenge
        </motion.h2>
        <motion.p
          className="mt-4 text-lg md:text-xl leading-relaxed"
          variants={itemVariants}
        >
          The enterprise struggled with data silos, inconsistent data formats, and a lack of a unified view across its various departments and systems. This fragmentation hindered their ability to perform comprehensive analysis, identify trends, and make timely, data-driven decisions.
        </motion.p>
      </motion.section>

      <motion.section
        className="mt-16"
        variants={sectionVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.h2
          className="text-3xl md:text-4xl lg:text-5xl font-bold mb-10"
          variants={itemVariants}
        >
          Our Solution
        </motion.h2>
        <motion.p
          className="mt-4 text-lg md:text-xl leading-relaxed"
          variants={itemVariants}
        >
          We implemented a robust data integration platform, similar to Palantir Foundry, that provided:
        </motion.p>
        <motion.ul
          className="list-disc list-inside ml-4 mt-4 text-lg md:text-xl leading-relaxed"
          variants={itemVariants}
        >
          <li>Automated data ingestion and transformation from diverse sources.</li>
          <li>A unified data ontology for consistent data modeling.</li>
          <li>Advanced analytical tools and AI/ML capabilities for deep insights.</li>
          <li>Collaborative workspaces for cross-departmental data exploration.</li>
        </motion.ul>
      </motion.section>

      <motion.section
        className="mt-16"
        variants={sectionVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.h2
          className="text-3xl md:text-4xl lg:text-5xl font-bold mb-10"
          variants={itemVariants}
        >
          Results & Impact
        </motion.h2>
        <motion.p
          className="mt-4 text-lg md:text-xl leading-relaxed"
          variants={itemVariants}
        >
          The implementation of our data integration solution yielded significant benefits:
        </motion.p>
        <motion.ul
          className="list-disc list-inside ml-4 mt-4 text-lg md:text-xl leading-relaxed"
          variants={itemVariants}
        >
          <li><strong>30% improvement</strong> in data analysis turnaround time.</li>
          <li><strong>15% increase</strong> in operational efficiency across key business units.</li>
          <li>Enhanced ability to identify market opportunities and mitigate risks.</li>
          <li>Improved cross-functional collaboration and data-driven decision-making.</li>
        </motion.ul>
      </motion.section>

      <motion.section
        className="mt-16 text-center"
        variants={sectionVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-10">
          Unlocking the Full Potential of Enterprise Data
        </h2>
        <motion.p
          className="mt-4 text-lg md:text-xl leading-relaxed max-w-4xl mx-auto mb-12"
          variants={itemVariants}
        >
          This case study demonstrates how a unified data platform can empower large enterprises to transform their operations, drive innovation, and achieve a competitive edge in today's complex business landscape.
        </motion.p>
        <a
          href="/contact"
          className="px-8 py-3 bg-ph-accent text-white font-bold rounded-full hover:bg-blue-600 transition-colors inline-block"
        >
          Request a Consultation
        </a>
      </motion.section>
    </motion.div>
  );
};

export default ImpactStudy2Page;