'use client';

import React from 'react';
import { motion } from 'framer-motion';

const FoundryPage: React.FC = () => {
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
        Palantir Foundry
      </motion.h1>
      <motion.p
        className="mt-4 text-lg md:text-xl leading-relaxed text-center max-w-4xl mx-auto mb-12"
        variants={itemVariants}
      >
        Palantir Foundry is an ontology-powered operating system for enterprises, focusing on data integration, analysis, and operational workflows in commercial and civil government sectors. It transforms raw data into an integrated, actionable asset, enabling organizations to build a true digital twin of their operations.
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
          Key Capabilities
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div className="bg-ph-dark-gray p-8 rounded-lg shadow-lg" variants={itemVariants}>
            <h3 className="text-2xl font-bold mb-4">Data Integration & Management</h3>
            <p className="text-lg text-ph-light-gray">
              Connect to and integrate data from virtually any source, creating a unified and consistent view of your enterprise.
            </p>
          </motion.div>
          <motion.div className="bg-ph-dark-gray p-8 rounded-lg shadow-lg" variants={itemVariants}>
            <h3 className="text-2xl font-bold mb-4">Ontology-Driven Data Modeling</h3>
            <p className="text-lg text-ph-light-gray">
              Build a dynamic, interconnected model of your organization's real-world entities, relationships, and processes.
            </p>
          </motion.div>
          <motion.div className="bg-ph-dark-gray p-8 rounded-lg shadow-lg" variants={itemVariants}>
            <h3 className="text-2xl font-bold mb-4">Advanced Analytics & AI/ML</h3>
            <p className="text-lg text-ph-light-gray">
              Apply sophisticated analytics, machine learning, and AI models directly on your integrated data to uncover insights and drive predictions.
            </p>
          </motion.div>
          <motion.div className="bg-ph-dark-gray p-8 rounded-lg shadow-lg" variants={itemVariants}>
            <h3 className="text-2xl font-bold mb-4">Operational Workflows & Applications</h3>
            <p className="text-lg text-ph-light-gray">
              Build custom applications and operational workflows directly on top of your data, empowering users to act on insights.
            </p>
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        className="mt-16 text-center"
        variants={sectionVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-10">
          Empowering Data-Driven Enterprises
        </h2>
        <motion.p
          className="mt-4 text-lg md:text-xl leading-relaxed max-w-4xl mx-auto mb-12"
          variants={itemVariants}
        >
          Palantir Foundry enables organizations to transform their data into a strategic asset, driving efficiency, innovation, and competitive advantage across all operations.
        </motion.p>
        <a
          href="/contact"
          className="px-8 py-3 bg-ph-accent text-white font-bold rounded-full hover:bg-blue-600 transition-colors inline-block"
        >
          Learn More
        </a>
      </motion.section>
    </motion.div>
  );
};

export default FoundryPage;