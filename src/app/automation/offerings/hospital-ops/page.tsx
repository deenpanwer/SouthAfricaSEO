'use client';

import React from 'react';
import { motion } from 'framer-motion';

const HospitalOpsPage: React.FC = () => {
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
        Hospital Operations & Healthcare Analytics
      </motion.h1>
      <motion.p
        className="mt-4 text-lg md:text-xl leading-relaxed text-center max-w-4xl mx-auto mb-12"
        variants={itemVariants}
      >
        Improve hospital efficiency and patient outcomes with advanced analytics and operational insights. Our Hospital Operations & Healthcare Analytics solutions empower healthcare providers to optimize resource utilization, enhance patient care, and drive better health outcomes through data-driven decision-making.
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
          Key Features
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div className="bg-ph-dark-gray p-8 rounded-lg shadow-lg" variants={itemVariants}>
            <h3 className="text-2xl font-bold mb-4">Patient Flow Optimization</h3>
            <p className="text-lg text-ph-light-gray">
              Analyze patient journeys, identify bottlenecks, and optimize patient flow from admission to discharge, reducing wait times and improving satisfaction.
            </p>
          </motion.div>
          <motion.div className="bg-ph-dark-gray p-8 rounded-lg shadow-lg" variants={itemVariants}>
            <h3 className="text-2xl font-bold mb-4">Resource Management & Staffing</h3>
            <p className="text-lg text-ph-light-gray">
              Optimize allocation of beds, operating rooms, and medical equipment, and forecast staffing needs to ensure efficient resource utilization and reduce costs.
            </p>
          </motion.div>
          <motion.div className="bg-ph-dark-gray p-8 rounded-lg shadow-lg" variants={itemVariants}>
            <h3 className="text-2xl font-bold mb-4">Clinical Analytics & Outcome Prediction</h3>
            <p className="text-lg text-ph-light-gray">
              Leverage AI to analyze clinical data, predict patient outcomes, identify high-risk patients, and support evidence-based medical decisions.
            </p>
          </motion.div>
          <motion.div className="bg-ph-dark-gray p-8 rounded-lg shadow-lg" variants={itemVariants}>
            <h3 className="text-2xl font-bold mb-4">Revenue Cycle Management</h3>
            <p className="text-lg text-ph-light-gray">
              Optimize billing, claims processing, and revenue collection with AI-driven insights, improving financial health and reducing administrative burden.
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
          Transforming Healthcare Through Data
        </h2>
        <motion.p
          className="mt-4 text-lg md:text-xl leading-relaxed max-w-4xl mx-auto mb-12"
          variants={itemVariants}
        >
          Our Hospital Operations & Healthcare Analytics solutions provide healthcare organizations with the tools to deliver higher quality care, improve operational efficiency, and achieve sustainable growth.
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

export default HospitalOpsPage;