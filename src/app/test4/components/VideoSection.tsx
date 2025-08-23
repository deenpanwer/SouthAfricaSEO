'use client';

import React, { useState } from 'react';
import Modal from './ui/Modal';
import Button from './ui/Button';
import { motion } from 'framer-motion';

const VideoSection: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <motion.section
      className="py-24 bg-black text-white text-center"
      variants={sectionVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-16 uppercase"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          See Our Solutions in Action
        </motion.h2>
        <motion.p
          className="text-lg md:text-xl lg:text-2xl max-w-4xl mx-auto mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Watch this video to understand how our AI and automation platforms are transforming industries and empowering organizations.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Button onClick={openModal} variant="primary">
            Watch Video
          </Button>
        </motion.div>

        <Modal isOpen={isModalOpen} onClose={closeModal}>
          <h3 className="text-2xl font-bold mb-4">Our Solutions Overview</h3>
          <div className="relative" style={{ paddingBottom: '56.25%', height: 0 }}>
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ" // Placeholder YouTube video
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </Modal>
      </div>
    </motion.section>
  );
};

export default VideoSection;
