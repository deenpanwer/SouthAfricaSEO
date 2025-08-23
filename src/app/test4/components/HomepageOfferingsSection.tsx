
'use client';

import React from 'react';
import Card from './ui/Card';
import { motion } from 'framer-motion';

const HomepageOfferingsSection: React.FC = () => {
  const offerings = [
    {
      title: "Anti-Money Laundering Solutions",
      description: "Leverage AI to detect and prevent financial crime with advanced analytics.",
      imageUrl: "https://tse1.mm.bing.net/th/id/OIP.eUUpZVsMF8yAHi6uW44f5gHaD-?pid=Api&P=0&h=220",
      link: "/automation/offerings/anti-money-laundering",
    },
    {
      title: "Applied Customer Intelligence",
      description: "Gain deep insights into customer behavior to drive personalized experiences and growth.",
      imageUrl: "https://tse1.mm.bing.net/th/id/OIP.eUUpZVsMF8yAHi6uW44f5gHaD-?pid=Api&P=0&h=220",
      link: "/automation/offerings/customer-intelligence",
    },
    {
      title: "Artificial Intelligence & Machine Learning",
      description: "Develop and deploy cutting-edge AI/ML models for various business needs.",
      imageUrl: "https://tse1.mm.bing.net/th/id/OIP.eUUpZVsMF8yAHi6uW44f5gHaD-?pid=Api&P=0&h=220",
      link: "/automation/offerings/ai-ml",
    },
    {
      title: "Data Protection & Privacy",
      description: "Secure your sensitive data and ensure compliance with robust data protection solutions.",
      imageUrl: "https://tse1.mm.bing.net/th/id/OIP.eUUpZVsMF8yAHi6uW44f5gHaD-?pid=Api&P=0&h=220",
      link: "/automation/offerings/data-protection",
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
    <section className="py-24 bg-black">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-16 uppercase"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          Our Key Offerings
        </motion.h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          {offerings.map((offering, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card
                  title={offering.title}
                  description={offering.description}
                  imageUrl={offering.imageUrl}
                  link={offering.link}
                />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HomepageOfferingsSection;
