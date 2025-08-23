'use client';

import React from 'react';
import { motion } from 'framer-motion';

const CustomerIntelligencePage: React.FC = () => {
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
        Applied Customer Intelligence
      </motion.h1>
      <motion.p
        className="mt-4 text-lg md:text-xl leading-relaxed text-center max-w-4xl mx-auto mb-12"
        variants={itemVariants}
      >
        Gain deep insights into customer behavior to drive personalized experiences and growth. Our Applied Customer Intelligence solutions empower businesses to understand their customers better, predict their needs, and deliver tailored interactions that foster loyalty and increase revenue.
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
            <h3 className="text-2xl font-bold mb-4">360-Degree Customer View</h3>
            <p className="text-lg text-ph-light-gray">
              Consolidate data from all customer touchpoints – sales, marketing, service, and external sources – to create a comprehensive and unified customer profile.
            </p>
          </motion.div>
          <motion.div className="bg-ph-dark-gray p-8 rounded-lg shadow-lg" variants={itemVariants}>
            <h3 className="text-2xl font-bold mb-4">Behavioral Analytics & Segmentation</h3>
            <p className="text-lg text-ph-light-gray">
              Analyze customer behavior patterns, segment your audience based on preferences and actions, and identify high-value customer groups.
            </p>
          </motion.div>
          <motion.div className="bg-ph-dark-gray p-8 rounded-lg shadow-lg" variants={itemVariants}>
            <h3 className="text-2xl font-bold mb-4">Predictive Personalization</h3>
            <p className="text-lg text-ph-light-gray">
              Utilize AI to predict future customer needs and preferences, enabling proactive and personalized marketing campaigns, product recommendations, and service offerings.
            </p>
          </motion.div>
          <motion.div className="bg-ph-dark-gray p-8 rounded-lg shadow-lg" variants={itemVariants}>
            <h3 className="text-2xl font-bold mb-4">Customer Journey Optimization</h3>
            <p className="text-lg text-ph-light-gray">
              Map and optimize the entire customer journey, identifying pain points and opportunities to enhance satisfaction and loyalty.
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
          Transform Your Customer Relationships
        </h2>
        <motion.p
          className="mt-4 text-lg md:text-xl leading-relaxed max-w-4xl mx-auto mb-12"
          variants={itemVariants}
        >
          Our Applied Customer Intelligence solutions empower you to build stronger, more profitable customer relationships by delivering exceptional and highly relevant experiences.
        </motion.p>
        <a
          href="/contact"
          className="px-8 py-3 bg-ph-accent text-white font-bold rounded-full hover:bg-blue-600 transition-colors inline-block"
        >
          Request a Demo
        </a>
      </motion.section>
    </motion.div>
  );
};

export default CustomerIntelligencePage;