
'use client';

import React from 'react';
import { motion } from 'framer-motion';

const MilitaryPage: React.FC = () => {
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
        className="text-4xl md:text-5xl lg:text-6xl font-bold mb-12 text-center"
        variants={itemVariants}
      >
        AI in Military Combat & National Security
      </motion.h1>
      <motion.p
        className="mt-4 text-lg md:text-xl leading-relaxed text-center max-w-4xl mx-auto mb-12"
        variants={itemVariants}
      >
        As the #1 AI lab in Pakistan, we are at the forefront of developing cutting-edge AI solutions for defense and intelligence. Our technology empowers military and national security organizations with data-driven insights, enabling superior decision-making and strategic advantage in complex environments.
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
          Our Capabilities
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <motion.div className="bg-ph-dark-gray p-8 rounded-lg shadow-lg" variants={itemVariants}>
            <h3 className="text-2xl font-bold mb-4">Advanced Data Integration</h3>
            <p className="text-lg text-ph-light-gray">
              Seamlessly integrate vast and disparate datasets from various sources, including intelligence feeds, sensor data, and operational logs, to create a unified operational picture.
            </p>
          </motion.div>
          <motion.div className="bg-ph-dark-gray p-8 rounded-lg shadow-lg" variants={itemVariants}>
            <h3 className="text-2xl font-bold mb-4">AI-Powered Decision Support</h3>
            <p className="text-lg text-ph-light-gray">
              Leverage machine learning and predictive analytics to identify patterns, anticipate threats, and provide actionable intelligence for commanders and operators in real-time.
            </p>
          </motion.div>
          <motion.div className="bg-ph-dark-gray p-8 rounded-lg shadow-lg" variants={itemVariants}>
            <h3 className="text-2xl font-bold mb-4">Secure & Compliant Solutions</h3>
            <p className="text-lg text-ph-light-gray">
              Our platforms are built with the highest security standards, ensuring data integrity and confidentiality. We adhere to stringent national and international security protocols.
            </p>
          </motion.div>
          <motion.div className="bg-ph-dark-gray p-8 rounded-lg shadow-lg" variants={itemVariants}>
            <h3 className="text-2xl font-bold mb-4">Operational Efficiency</h3>
            <p className="text-lg text-ph-light-gray">
              Automate routine tasks, optimize resource allocation, and enhance logistical operations, freeing up human capital for critical decision-making and strategic planning.
            </p>
          </motion.div>
          <motion.div className="bg-ph-dark-gray p-8 rounded-lg shadow-lg" variants={itemVariants}>
            <h3 className="text-2xl font-bold mb-4">Threat Detection & Analysis</h3>
            <p className="text-lg text-ph-light-gray">
              Utilize AI to rapidly detect and analyze emerging threats, identify vulnerabilities, and assess potential impacts, providing a proactive defense posture.
            </p>
          </motion.div>
          <motion.div className="bg-ph-dark-gray p-8 rounded-lg shadow-lg" variants={itemVariants}>
            <h3 className="text-2xl font-bold mb-4">Strategic Planning & Simulation</h3>
            <p className="text-lg text-ph-light-gray">
              Employ AI-driven simulations and scenario planning to evaluate strategic options, predict outcomes, and optimize operational plans before deployment.
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
        <motion.h2
          className="text-3xl md:text-4xl lg:text-5xl font-bold mb-10"
          variants={itemVariants}
        >
          Partner with the Best
        </motion.h2>
        <motion.p
          className="mt-4 text-lg md:text-xl leading-relaxed max-w-4xl mx-auto mb-12"
          variants={itemVariants}
        >
          We are committed to supporting Pakistan's defense and national security objectives with unparalleled AI capabilities. Contact us to learn how our solutions can empower your mission.
        </motion.p>
        <motion.a
          href="/contact"
          className="px-8 py-3 bg-ph-accent text-white font-bold rounded-full hover:bg-blue-600 transition-colors inline-block"
          variants={itemVariants}
        >
          Contact Our Defense Team
        </motion.a>
      </motion.section>
    </motion.div>
  );
};

export default MilitaryPage;
