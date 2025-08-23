'use client';

import React from 'react';
import { motion } from 'framer-motion';

const ImpactStudy1Page: React.FC = () => {
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
        Impact Study 1: AI in Government Operations
      </motion.h1>
      <motion.p
        className="mt-4 text-lg md:text-xl leading-relaxed text-center max-w-4xl mx-auto mb-12"
        variants={itemVariants}
      >
        This detailed case study highlights how our cutting-edge AI solutions transformed government operations, leading to unprecedented levels of efficiency, transparency, and improved public service delivery. We partnered with a major government agency to streamline their data processes and enhance decision-making capabilities.
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
          The agency faced significant challenges in managing vast amounts of disparate data, leading to inefficiencies, delayed decision-making, and a lack of real-time insights into critical operations. Manual processes were time-consuming and prone to errors, hindering their ability to serve the public effectively.
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
          We deployed a customized AI platform that integrated data from over 50 different sources, including legacy systems and real-time feeds. Our solution provided:
        </motion.p>
        <motion.ul
          className="list-disc list-inside ml-4 mt-4 text-lg md:text-xl leading-relaxed"
          variants={itemVariants}
        >
          <li>Automated data ingestion and cleansing.</li>
          <li>AI-powered analytics for predictive insights.</li>
          <li>Interactive dashboards for real-time operational visibility.</li>
          <li>Secure, collaborative environment for inter-agency data sharing.</li>
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
          The implementation of our AI solution led to significant improvements:
        </motion.p>
        <motion.ul
          className="list-disc list-inside ml-4 mt-4 text-lg md:text-xl leading-relaxed"
          variants={itemVariants}
        >
          <li><strong>40% reduction</strong> in data processing time.</li>
          <li><strong>25% increase</strong> in operational efficiency.</li>
          <li>Enhanced transparency and accountability in public spending.</li>
          <li>Improved ability to respond to citizen needs and emergencies.</li>
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
          Transforming Government for a Smarter Future
        </h2>
        <motion.p
          className="mt-4 text-lg md:text-xl leading-relaxed max-w-4xl mx-auto mb-12"
          variants={itemVariants}
        >
          This case study demonstrates the power of AI to revolutionize government operations, making them more efficient, transparent, and responsive to the needs of citizens. Contact us to learn how we can help your organization achieve similar transformative results.
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

export default ImpactStudy1Page;