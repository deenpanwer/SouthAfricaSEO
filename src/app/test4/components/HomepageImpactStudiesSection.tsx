'use client';

import React from 'react';
import Card from './ui/Card';
import { motion } from 'framer-motion';

const HomepageImpactStudiesSection: React.FC = () => {
  const studies = [
    {
      title: "Impact Study 1: AI in Government Operations",
      description: "Detailed case study on how our AI solutions transformed government operations, leading to increased efficiency and transparency.",
      imageUrl: "https://tse1.mm.bing.net/th/id/OIP.eUUpZVsMF8yAHi6uW44f5gHaD-?pid=Api&P=0&h=220",
      link: "/impact-studies/impact-study-1",
    },
    {
      title: "Impact Study 2: Enterprise Data Integration",
      description: "A deep dive into how our Foundry-like platform enabled a large enterprise to integrate disparate data sources and gain actionable insights.",
      imageUrl: "https://tse1.mm.bing.net/th/id/OIP.eUUpZVsMF8yAHi6uW44f5gHaD-?pid=Api&P=0&h=220",
      link: "/impact-studies/impact-study-2",
    },
    {
      title: "Impact Study 3: AI in Defense and Security",
      description: "Case study on the application of our AI solutions in military combat and national security, enhancing threat detection and strategic decision-making.",
      imageUrl: "https://tse1.mm.bing.net/th/id/OIP.eUUpZVsMF8yAHi6uW44f5gHaD-?pid=Api&P=0&h=220",
      link: "/impact-studies/impact-study-3",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section className="py-24 bg-ph-dark-gray">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-16 uppercase"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          Our Impact in Action
        </motion.h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          {studies.map((study, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card
                title={study.title}
                description={study.description}
                imageUrl={study.imageUrl}
                link={study.link}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HomepageImpactStudiesSection;
