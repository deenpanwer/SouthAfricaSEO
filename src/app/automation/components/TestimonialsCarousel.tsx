'use client';

import React from 'react';
import Carousel from '@/components/ui/Carousel';
import { motion } from 'framer-motion';

const TestimonialsCarousel: React.FC = () => {
  const testimonials = [
    {
      quote: "Our operations have been revolutionized. The insights provided by their AI platforms are unparalleled.",
      author: "CEO, Major Government Agency",
    },
    {
      quote: "Their automation solutions have significantly increased our efficiency and reduced operational costs.",
      author: "COO, Leading Enterprise",
    },
    {
      quote: "The expertise in AI for defense is truly world-class. A vital partner for national security.",
      author: "Director, Defense Ministry",
    },
  ];

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.2 } },
  };

  return (
    <motion.section
      className="py-24 bg-ph-dark-gray text-white"
      variants={sectionVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="container mx-auto px-6 text-center">
        <motion.h2
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-16 uppercase" 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          What Our Clients Say
        </motion.h2>
        <Carousel autoplay interval={5000}>
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="p-8 max-w-4xl mx-auto" 
              variants={textVariants}
              initial="hidden"
              animate="show"
            >
              <p className="text-2xl md:text-3xl italic leading-relaxed mb-8">"{
                testimonial.quote
              }"</p> {/* Adjusted font sizes and mb */}
              <p className="text-lg md:text-xl font-semibold">- {testimonial.author}</p> {/* Adjusted font sizes */}
            </motion.div>
          ))}
        </Carousel>
      </div>
    </motion.section>
  );
};

export default TestimonialsCarousel;