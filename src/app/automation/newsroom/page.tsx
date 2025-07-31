
'use client';

import React from 'react';
import Card from '../components/ui/Card';
import { motion } from 'framer-motion';

const NewsroomPage: React.FC = () => {
  const pressReleases = [
    {
      title: "[Your Company Name] Partners with Leading Government Agency for AI Integration",
      description: "A landmark partnership to deploy advanced AI solutions for enhanced public services.",
      imageUrl: "/automation/news-gov-partnership.jpg",
      link: "/newsroom/press-release-1",
    },
    {
      title: "[Your Company Name] Named #1 AI Lab in Pakistan",
      description: "Recognized for our innovative contributions and leadership in the artificial intelligence landscape.",
      imageUrl: "/automation/news-ai-lab.jpg",
      link: "/newsroom/press-release-2",
    },
  ];

  const mediaCoverage = [
    {
      title: "How [Your Company Name] is Revolutionizing Data Analytics in Pakistan",
      description: "Featured in Tech Magazine Pakistan for our groundbreaking work in data integration and insights.",
      imageUrl: "/automation/news-tech-magazine.jpg",
      link: "/newsroom/media-coverage-1",
    },
    {
      title: "AI in Defense: An Interview with [Your CEO Name]",
      description: "Our CEO discusses the critical role of AI in national security on National TV.",
      imageUrl: "/automation/news-ceo-interview.jpg",
      link: "/newsroom/media-coverage-2",
    },
  ];

  const thoughtLeadership = [
    {
      title: "The Ethical Imperatives of AI Development",
      description: "A white paper exploring the responsible development and deployment of artificial intelligence.",
      imageUrl: "/automation/news-ethics-paper.jpg",
      link: "/newsroom/thought-leadership-1",
    },
    {
      title: "Predictive Analytics for Supply Chain Resilience",
      description: "Our latest research on leveraging AI to build robust and adaptive supply chains.",
      imageUrl: "/automation/news-supply-chain-research.jpg",
      link: "/newsroom/thought-leadership-2",
    },
  ];

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
        Newsroom
      </motion.h1>

      <motion.section
        className="mb-16"
        variants={sectionVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.h2
          className="text-3xl md:text-4xl lg:text-5xl font-bold mb-10"
          variants={itemVariants}
        >
          Press Releases
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {pressReleases.map((item, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card
                title={item.title}
                description={item.description}
                imageUrl={item.imageUrl}
                link={item.link}
              />
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section
        className="mb-16"
        variants={sectionVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.h2
          className="text-3xl md:text-4xl lg:text-5xl font-bold mb-10"
          variants={itemVariants}
        >
          Media Coverage
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {mediaCoverage.map((item, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card
                title={item.title}
                description={item.description}
                imageUrl={item.imageUrl}
                link={item.link}
              />
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.h2
          className="text-3xl md:text-4xl lg:text-5xl font-bold mb-10"
          variants={itemVariants}
        >
          Thought Leadership
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {thoughtLeadership.map((item, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card
                title={item.title}
                description={item.description}
                imageUrl={item.imageUrl}
                link={item.link}
              />
            </motion.div>
          ))}
        </div>
      </motion.section>
    </motion.div>
  );
};

export default NewsroomPage;
