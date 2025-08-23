'use client';

import React from 'react';
import { motion } from 'framer-motion';

const ImpactStudy3Page: React.FC = () => {
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
        Impact Study 3: AI in Defense and Security
      </motion.h1>
      <motion.p
        className="mt-4 text-lg md:text-xl leading-relaxed text-center max-w-4xl mx-auto mb-12"
        variants={itemVariants}
      >
        This case study explores the application of our advanced AI solutions in military combat and national security, demonstrating how our technology enhances threat detection, improves strategic decision-making, and strengthens defense capabilities.
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
          Modern defense and security operations face increasingly complex and rapidly evolving threats. Traditional methods of intelligence analysis and threat assessment are often overwhelmed by the sheer volume and velocity of data, leading to potential delays in response and missed opportunities.
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
          We deployed a specialized AI platform, similar to Palantir Gotham, tailored for defense and intelligence applications. Our solution provided:
        </motion.p>
        <motion.ul
          className="list-disc list-inside ml-4 mt-4 text-lg md:text-xl leading-relaxed"
          variants={itemVariants}
        >
          <li>Real-time intelligence fusion from diverse sources (e.g., satellite imagery, signals intelligence, open-source data).</li>
          <li>AI-powered threat detection and anomaly identification.</li>
          <li>Predictive analysis for anticipating adversary movements and intentions.</li>
          <li>Secure, collaborative environment for joint operations and intelligence sharing.</li>
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
          The implementation of our AI solution resulted in significant enhancements:
        </motion.p>
        <motion.ul
          className="list-disc list-inside ml-4 mt-4 text-lg md:text-xl leading-relaxed"
          variants={itemVariants}
        >
          <li><strong>50% faster</strong> threat identification and assessment.</li>
          <li><strong>Improved accuracy</strong> in intelligence analysis, reducing false positives.</li>
          <li>Enhanced situational awareness for commanders in complex operational theaters.</li>
          <li>Strengthened national security through proactive threat mitigation.</li>
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
          Securing the Nation with Advanced AI
        </h2>
        <motion.p
          className="mt-4 text-lg md:text-xl leading-relaxed max-w-4xl mx-auto mb-12"
          variants={itemVariants}
        >
          This case study demonstrates the transformative power of AI in defense and national security, enabling organizations to stay ahead of evolving threats and protect critical assets. Contact us to learn how our solutions can empower your mission.
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

export default ImpactStudy3Page;