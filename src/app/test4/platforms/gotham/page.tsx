'use client';

import React from 'react';
import { motion } from 'framer-motion';

const GothamPage: React.FC = () => {
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
        Palantir Gotham
      </motion.h1>
      <motion.p
        className="mt-4 text-lg md:text-xl leading-relaxed text-center max-w-4xl mx-auto mb-12"
        variants={itemVariants}
      >
        Palantir Gotham is an AI-ready operating system primarily used for defense and intelligence, aiding in decision-making for operators. It is designed to help military and counter-terrorism analysts make sense of vast and complex datasets, enabling them to identify patterns, anticipate threats, and respond effectively in critical situations.
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
            <h3 className="text-2xl font-bold mb-4">Data Integration & Fusion</h3>
            <p className="text-lg text-ph-light-gray">
              Integrate disparate data sources, including intelligence reports, sensor data, and operational logs, into a unified analytical environment.
            </p>
          </motion.div>
          <motion.div className="bg-ph-dark-gray p-8 rounded-lg shadow-lg" variants={itemVariants}>
            <h3 className="text-2xl font-bold mb-4">Advanced Analytics & AI</h3>
            <p className="text-lg text-ph-light-gray">
              Leverage AI and machine learning algorithms to uncover hidden patterns, detect anomalies, and generate predictive insights from complex data.
            </p>
          </motion.div>
          <motion.div className="bg-ph-dark-gray p-8 rounded-lg shadow-lg" variants={itemVariants}>
            <h3 className="text-2xl font-bold mb-4">Collaborative Environment</h3>
            <p className="text-lg text-ph-light-gray">
              Enable secure collaboration among analysts, allowing them to share insights, build common operating pictures, and make collective decisions.
            </p>
          </motion.div>
          <motion.div className="bg-ph-dark-gray p-8 rounded-lg shadow-lg" variants={itemVariants}>
            <h3 className="text-2xl font-bold mb-4">Operational Decision Support</h3>
            <p className="text-lg text-ph-light-gray">
              Provide real-time intelligence and actionable recommendations to support critical decision-making in dynamic operational environments.
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
          Empowering Defense and Intelligence
        </h2>
        <p className="mt-4 text-lg md:text-xl leading-relaxed max-w-4xl mx-auto mb-12">
          Palantir Gotham is trusted by defense and intelligence organizations worldwide to enhance their capabilities, protect national security, and ensure operational superiority.
        </p>
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

export default GothamPage;