'use client';

import React from 'react';
import Card from './ui/Card';
import { motion } from 'framer-motion';

const HomepageBlogSection: React.FC = () => {
  const posts = [
    {
      title: "Blog Post 1: The Future of AI in Pakistan",
      description: "An in-depth look at the burgeoning AI landscape in Pakistan and our role as a leading AI lab.",
      imageUrl: "https://tse1.mm.bing.net/th/id/OIP.eUUpZVsMF8yAHi6uW44f5gHaD-?pid=Api&P=0&h=220",
      link: "/automation/blog/blog-post-1",
    },
    {
      title: "Blog Post 2: Ethical AI and Its Implications",
      description: "Exploring the ethical considerations in AI development and deployment, and our commitment to responsible AI practices.",
      imageUrl: "https://tse1.mm.bing.net/th/id/OIP.eUUpZVsMF8yAHi6uW44f5gHaD-?pid=Api&P=0&h=220",
      link: "/automation/blog/blog-post-2",
    },
    {
      title: "Blog Post 3: AI in Action - Real-World Applications",
      description: "Showcasing practical applications of AI across various industries and how our solutions are making a tangible impact.",
      imageUrl: "https://tse1.mm.bing.net/th/id/OIP.eUUpZVsMF8yAHi6uW44f5gHaD-?pid=Api&P=0&h=220",
      link: "/automation/blog/blog-post-3",
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
    <section className="py-24 bg-ph-black">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-16 uppercase"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          Latest Insights from Our Blog
        </motion.h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          {posts.map((post, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card
                title={post.title}
                description={post.description}
                imageUrl={post.imageUrl}
                link={post.link}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HomepageBlogSection;