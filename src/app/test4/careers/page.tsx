
"use client";

import React from 'react';
import { motion } from 'framer-motion';

const CareersPage: React.FC = () => {
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
        className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-center"
        variants={itemVariants}
      >
        Join Our Mission: Shape the Future of AI in Pakistan
      </motion.h1>
      <motion.p
        className="mt-4 text-lg md:text-xl leading-relaxed text-center max-w-4xl mx-auto mb-12"
        variants={itemVariants}
      >
        At [Your Company Name], we're not just building software; we're building the future. As the #1 AI lab in Pakistan, we tackle some of the most complex and impactful challenges using artificial intelligence, machine learning, natural language processing, and advanced automation.
      </motion.p>

      <motion.section
        className="mt-16"
        variants={sectionVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.h2
          className="text-3xl md:text-4xl lg:text-5xl font-bold mb-10 text-center"
          variants={itemVariants}
        >
          Why Join Us?
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <motion.div className="bg-ph-dark-gray p-8 rounded-lg shadow-lg" variants={itemVariants}>
            <h3 className="text-2xl font-bold mb-4">Impactful Work</h3>
            <p className="text-lg text-ph-light-gray">
              Work on projects that truly matter, from transforming government operations to enhancing national security and revolutionizing industries across Pakistan.
            </p>
          </motion.div>
          <motion.div className="bg-ph-dark-gray p-8 rounded-lg shadow-lg" variants={itemVariants}>
            <h3 className="text-2xl font-bold mb-4">Cutting-Edge Technology</h3>
            <p className="text-lg text-ph-light-gray">
              Be at the forefront of AI innovation, leveraging the latest advancements in machine learning, NLP, and automation to solve real-world problems.
            </p>
          </motion.div>
          <motion.div className="bg-ph-dark-gray p-8 rounded-lg shadow-lg" variants={itemVariants}>
            <h3 className="text-2xl font-bold mb-4">Growth & Development</h3>
            <p className="text-lg text-ph-light-gray">
              We invest in our people. With mentorship programs, continuous learning opportunities, and a culture of responsibility, you'll grow personally and professionally.
            </p>
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        className="mt-16"
        variants={sectionVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.h2
          className="text-3xl md:text-4xl lg:text-5xl font-bold mb-10 text-center"
          variants={itemVariants}
        >
          Our Culture
        </motion.h2>
        <motion.p
          className="mt-4 text-lg md:text-xl leading-relaxed text-center max-w-4xl mx-auto"
          variants={itemVariants}
        >
          We foster a collaborative and dynamic environment where innovation thrives. We believe in augmenting human intelligence, and that starts with empowering our team members. You'll find autonomy, challenging problems, and a supportive community here.
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
          className="text-3xl md:text-4xl lg:text-5xl font-bold mb-10 text-center"
          variants={itemVariants}
        >
          Who We Look For
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div className="bg-ph-dark-gray p-8 rounded-lg shadow-lg" variants={itemVariants}>
            <h3 className="text-2xl font-bold mb-4">Students & Early Talent</h3>
            <p className="text-lg text-ph-light-gray">
              Kickstart your career with our internship programs and fellowships. Gain hands-on experience, work on real projects, and be mentored by industry leaders.
            </p>
          </motion.div>
          <motion.div className="bg-ph-dark-gray p-8 rounded-lg shadow-lg" variants={itemVariants}>
            <h3 className="text-2xl font-bold mb-4">Experienced Professionals</h3>
            <p className="text-lg text-ph-light-gray">
              Bring your expertise to a team that values innovation and impact. Lead complex projects, mentor rising talent, and drive the next generation of AI solutions.
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
          Ready to Make an Impact?
        </motion.h2>
        <motion.p
          className="mt-4 text-lg md:text-xl leading-relaxed max-w-4xl mx-auto mb-12"
          variants={itemVariants}
        >
          We are always looking for passionate and talented individuals to join our growing team. Explore our current openings and apply today to help us build a smarter future for Pakistan.
        </motion.p>
        <motion.a
          href="#"
          className="px-8 py-3 bg-ph-accent text-white font-bold rounded-full hover:bg-blue-600 transition-colors inline-block"
          variants={itemVariants}
        >
          View Open Positions
        </motion.a>
      </motion.section>
    </motion.div>
  );
};

export default CareersPage;
