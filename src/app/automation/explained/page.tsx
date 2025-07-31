
'use client';

import React from 'react';
import { motion } from 'framer-motion';

const ExplainedPage: React.FC = () => {
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
        [Your Company Name] Explained
      </motion.h1>
      <motion.p
        className="mt-4 text-lg md:text-xl leading-relaxed text-center max-w-4xl mx-auto mb-12"
        variants={itemVariants}
      >
        Understanding our approach to AI and automation. We believe in transparency and clarity in everything we do.
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
          Who We Are: A Software Company, Not a Data Company
        </motion.h2>
        <motion.p
          className="mt-4 text-lg md:text-xl leading-relaxed"
          variants={itemVariants}
        >
          At [Your Company Name], we build powerful software platforms that empower organizations to make sense of their data and drive intelligent operations. We do not own or sell our clients' data. Our role is to provide the tools and expertise that enable our clients to unlock the value within their own data, securely and effectively.
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
          Privacy & Civil Liberties: Our Unwavering Commitment
        </motion.h2>
        <motion.p
          className="mt-4 text-lg md:text-xl leading-relaxed"
          variants={itemVariants}
        >
          Protecting privacy and upholding civil liberties are fundamental to our mission. Our platforms are designed with privacy-by-design principles, incorporating robust access controls and data governance frameworks. We work closely with our clients to ensure that our technology is used responsibly and ethically, respecting individual rights and societal values.
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
          Data Control & Security: Empowering Data Owners
        </motion.h2>
        <motion.p
          className="mt-4 text-lg md:text-xl leading-relaxed"
          variants={itemVariants}
        >
          We provide data owners with granular control over their information. Our systems feature purpose-based access controls, allowing clients to define precisely who can access what data, for what purpose, and under what conditions. This ensures that sensitive information remains secure and is used only as intended, minimizing risks and maximizing trust.
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
          AI/ML Safety: Building Responsible Artificial Intelligence
        </motion.h2>
        <motion.p
          className="mt-4 text-lg md:text-xl leading-relaxed"
          variants={itemVariants}
        >
          The safe and ethical development of AI and machine learning is paramount. We are committed to building AI systems that are transparent, fair, and accountable. Our approach includes rigorous testing, continuous monitoring, and a focus on human oversight to ensure that our AI solutions deliver positive outcomes without unintended consequences.
        </motion.p>
      </motion.section>
    </motion.div>
  );
};

export default ExplainedPage;
