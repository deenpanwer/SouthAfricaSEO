'use client';

import React from 'react';
import { motion } from 'framer-motion';

const BlogPost2Page: React.FC = () => {
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
        Blog Post 2: Ethical AI and Its Implications
      </motion.h1>
      <motion.p
        className="mt-4 text-lg md:text-xl leading-relaxed text-center max-w-4xl mx-auto mb-12"
        variants={itemVariants}
      >
        Exploring the ethical considerations in AI development and deployment, and our commitment to responsible AI practices. As AI becomes more integrated into our lives, addressing its ethical implications is paramount.
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
          The Growing Importance of Ethical AI
        </motion.h2>
        <motion.p
          className="mt-4 text-lg md:text-xl leading-relaxed"
          variants={itemVariants}
        >
          The rapid advancement of artificial intelligence brings with it profound ethical questions. How do we ensure fairness in AI algorithms? How do we protect privacy when AI systems process vast amounts of data? What are the societal impacts of AI-driven automation? These are critical questions that require careful consideration and proactive solutions.
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
          Our Commitment to Responsible AI
        </motion.h2>
        <motion.p
          className="mt-4 text-lg md:text-xl leading-relaxed"
          variants={itemVariants}
        >
          At [Your Company Name], we are deeply committed to the responsible development and deployment of AI. Our ethical AI framework is built on principles of transparency, accountability, fairness, and privacy. We conduct rigorous ethical reviews of our AI systems, engage in open dialogue with stakeholders, and prioritize the well-being of individuals and society.
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
          Key Ethical Considerations
        </motion.h2>
        <motion.ul
          className="list-disc list-inside ml-4 mt-4 text-lg md:text-xl leading-relaxed"
          variants={itemVariants}
        >
          <li><strong>Bias and Fairness:</strong> Ensuring AI algorithms do not perpetuate or amplify existing societal biases.</li>
          <li><strong>Transparency and Explainability:</strong> Making AI decisions understandable and auditable.</li>
          <li><strong>Privacy and Data Security:</strong> Protecting sensitive information processed by AI systems.</li>
          <li><strong>Human Oversight and Control:</strong> Maintaining meaningful human control over AI systems, especially in critical applications.</li>
          <li><strong>Societal Impact:</strong> Assessing and mitigating the broader societal implications of AI, including employment and social equity.</li>
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
          Building a Future of Trustworthy AI
        </h2>
        <motion.p
          className="mt-4 text-lg md:text-xl leading-relaxed max-w-4xl mx-auto mb-12"
          variants={itemVariants}
        >
          By prioritizing ethical considerations, we aim to build AI systems that are not only powerful and innovative but also trustworthy and beneficial for all. We believe that responsible AI is the foundation for a sustainable and equitable technological future.
        </motion.p>
        <a
          href="/contact"
          className="px-8 py-3 bg-ph-accent text-white font-bold rounded-full hover:bg-blue-600 transition-colors inline-block"
        >
          Learn More About Our Approach
        </a>
      </motion.section>
    </motion.div>
  );
};

export default BlogPost2Page;