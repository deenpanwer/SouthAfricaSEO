'use client';

import React from 'react';
import { motion } from 'framer-motion';

const AIMLPage: React.FC = () => {
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
        Artificial Intelligence & Machine Learning
      </motion.h1>
      <motion.p
        className="mt-4 text-lg md:text-xl leading-relaxed text-center max-w-4xl mx-auto mb-12"
        variants={itemVariants}
      >
        Develop and deploy cutting-edge AI/ML models for various business needs. Our Artificial Intelligence and Machine Learning solutions empower organizations to automate complex tasks, extract valuable insights from data, and make intelligent decisions at scale.
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
            <h3 className="text-2xl font-bold mb-4">Custom AI/ML Model Development</h3>
            <p className="text-lg text-ph-light-gray">
              Design, train, and deploy bespoke AI and machine learning models tailored to your specific business challenges and data.
            </p>
          </motion.div>
          <motion.div className="bg-ph-dark-gray p-8 rounded-lg shadow-lg" variants={itemVariants}>
            <h3 className="text-2xl font-bold mb-4">Predictive Analytics & Forecasting</h3>
            <p className="text-lg text-ph-light-gray">
              Leverage advanced algorithms to predict future trends, identify potential risks, and optimize resource allocation.
            </p>
          </motion.div>
          <motion.div className="bg-ph-dark-gray p-8 rounded-lg shadow-lg" variants={itemVariants}>
            <h3 className="text-2xl font-bold mb-4">Natural Language Processing (NLP)</h3>
            <p className="text-lg text-ph-light-gray">
              Extract insights from unstructured text data, automate customer support, and enhance information retrieval with state-of-the-art NLP techniques.
            </p>
          </motion.div>
          <motion.div className="bg-ph-dark-gray p-8 rounded-lg shadow-lg" variants={itemVariants}>
            <h3 className="text-2xl font-bold mb-4">Computer Vision</h3>
            <p className="text-lg text-ph-light-gray">
              Implement AI-powered computer vision solutions for object detection, facial recognition, quality control, and security applications.
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
          Unlock the Power of Intelligent Automation
        </h2>
        <motion.p
          className="mt-4 text-lg md:text-xl leading-relaxed max-w-4xl mx-auto mb-12"
          variants={itemVariants}
        >
          Our AI and Machine Learning solutions are designed to drive innovation, improve operational efficiency, and provide a competitive edge in today's data-driven world.
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

export default AIMLPage;