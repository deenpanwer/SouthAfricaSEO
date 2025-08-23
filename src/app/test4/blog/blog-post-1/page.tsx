'use client';

import React from 'react';
import { motion } from 'framer-motion';

const BlogPost1Page: React.FC = () => {
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
        Blog Post 1: The Future of AI in Pakistan
      </motion.h1>
      <motion.p
        className="mt-4 text-lg md:text-xl leading-relaxed text-center max-w-4xl mx-auto mb-12"
        variants={itemVariants}
      >
        An in-depth look at the burgeoning AI landscape in Pakistan and our role as a leading AI lab, driving innovation and shaping the future of technology in the region.
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
          Pakistan's Growing AI Ecosystem
        </motion.h2>
        <motion.p
          className="mt-4 text-lg md:text-xl leading-relaxed"
          variants={itemVariants}
        >
          Pakistan is rapidly emerging as a hub for artificial intelligence innovation. With a young, tech-savvy population and increasing investment in digital infrastructure, the country is poised to make significant strides in AI research and development. Universities are introducing specialized AI programs, and a vibrant startup ecosystem is fostering new ideas and applications.
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
          Our Role as a Leading AI Lab
        </motion.h2>
        <motion.p
          className="mt-4 text-lg md:text-xl leading-relaxed"
          variants={itemVariants}
        >
          As the #1 AI lab in Pakistan, we are committed to pushing the boundaries of what's possible with AI. Our team of world-class researchers and engineers are working on groundbreaking projects in machine learning, natural language processing, computer vision, and robotics. We collaborate with government agencies, enterprises, and academic institutions to develop solutions that address real-world challenges and create tangible impact.
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
          Impact on Industries and Society
        </motion.h2>
        <motion.p
          className="mt-4 text-lg md:text-xl leading-relaxed"
          variants={itemVariants}
        >
          The applications of AI in Pakistan are vast and diverse. From optimizing supply chains and enhancing healthcare delivery to improving national security and transforming financial services, AI is set to revolutionize every sector. We are proud to be at the forefront of this transformation, contributing to a smarter, more efficient, and more prosperous Pakistan.
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
          Join the AI Revolution
        </h2>
        <motion.p
          className="mt-4 text-lg md:text-xl leading-relaxed max-w-4xl mx-auto mb-12"
          variants={itemVariants}
        >
          The future of AI in Pakistan is bright, and we invite you to be a part of it. Whether you're a researcher, an engineer, a business leader, or simply an enthusiast, there are countless opportunities to contribute to this exciting field.
        </motion.p>
        <a
          href="/contact"
          className="px-8 py-3 bg-ph-accent text-white font-bold rounded-full hover:bg-blue-600 transition-colors inline-block"
        >
          Contact Us
        </a>
      </motion.section>
    </motion.div>
  );
};

export default BlogPost1Page;