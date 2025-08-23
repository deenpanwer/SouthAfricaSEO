'use client';

import React from 'react';
import { motion } from 'framer-motion';

const BlogPost3Page: React.FC = () => {
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
        Blog Post 3: AI in Action - Real-World Applications
      </motion.h1>
      <motion.p
        className="mt-4 text-lg md:text-xl leading-relaxed text-center max-w-4xl mx-auto mb-12"
        variants={itemVariants}
      >
        Showcasing practical applications of AI across various industries and how our solutions are making a tangible impact. From optimizing complex operations to enhancing decision-making, AI is transforming businesses and organizations worldwide.
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
          AI in Healthcare: Improving Patient Outcomes
        </motion.h2>
        <motion.p
          className="mt-4 text-lg md:text-xl leading-relaxed"
          variants={itemVariants}
        >
          In healthcare, AI is revolutionizing diagnostics, drug discovery, and personalized treatment plans. Our solutions help hospitals optimize patient flow, predict disease outbreaks, and analyze vast amounts of medical data to support clinicians in making more accurate and timely decisions, ultimately leading to better patient outcomes.
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
          AI in Finance: Enhancing Security and Efficiency
        </motion.h2>
        <motion.p
          className="mt-4 text-lg md:text-xl leading-relaxed"
          variants={itemVariants}
        >
          Financial institutions are leveraging AI for fraud detection, risk management, and algorithmic trading. Our AI solutions help banks and financial firms identify suspicious transactions in real-time, assess creditworthiness more accurately, and automate complex financial processes, leading to enhanced security and operational efficiency.
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
          AI in Manufacturing: Optimizing Production and Quality
        </motion.h2>
        <motion.p
          className="mt-4 text-lg md:text-xl leading-relaxed"
          variants={itemVariants}
        >
          In manufacturing, AI is driving smart factories and predictive maintenance. Our solutions enable manufacturers to optimize production lines, predict equipment failures before they occur, and ensure quality control through AI-powered computer vision, leading to reduced downtime and increased productivity.
        </motion.p>
      </motion.section>

      <motion.section
        className="mt-16 text-center"
        variants={sectionVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-10">
          The Future is Intelligent
        </h2>
        <motion.p
          className="mt-4 text-lg md:text-xl leading-relaxed max-w-4xl mx-auto mb-12"
          variants={itemVariants}
        >
          These are just a few examples of how AI is being applied in the real world. Our commitment is to continue developing innovative AI solutions that empower organizations across all sectors to achieve their goals and build a more intelligent future.
        </motion.p>
        <a
          href="/contact"
          className="px-8 py-3 bg-ph-accent text-white font-bold rounded-full hover:bg-blue-600 transition-colors inline-block"
        >
          Discover More AI Applications
        </a>
      </motion.section>
    </motion.div>
  );
};

export default BlogPost3Page;