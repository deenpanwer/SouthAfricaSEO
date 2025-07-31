
'use client';

import React from 'react';
import ContactForm from '../components/ui/ContactForm';
import { motion } from 'framer-motion';

const ContactPage: React.FC = () => {
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
        Get in Touch
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <motion.div variants={itemVariants}>
          <h2 className="text-3xl font-bold mb-6">Send us a Message</h2>
          <ContactForm />
        </motion.div>

        <motion.div variants={itemVariants}>
          <h2 className="text-3xl font-bold mb-6">Our Offices</h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold">Headquarters - Pakistan</h3>
              <p className="mt-2 text-lg text-ph-light-gray">
                123 AI Innovation Hub,
                <br />
                Tech City, Islamabad,
                <br />
                Pakistan
              </p>
              <p className="mt-2 text-lg text-ph-light-gray">Phone: +92 123 4567890</p>
              <p className="mt-2 text-lg text-ph-light-gray">Email: info@youraiautomation.com</p>
            </div>
            <div>
              <h3 className="text-xl font-bold">Regional Office - Lahore</h3>
              <p className="mt-2 text-lg text-ph-light-gray">
                456 Data Drive,
                <br />
                Cyber Park, Lahore,
                <br />
                Pakistan
              </p>
              <p className="mt-2 text-lg text-ph-light-gray">Phone: +92 321 9876543</p>
              <p className="mt-2 text-lg text-ph-light-gray">Email: lahore@youraiautomation.com</p>
            </div>
          </div>

          <h2 className="text-3xl font-bold mb-6 mt-12">Find Us on the Map</h2>
          <div className="bg-ph-dark-gray h-64 flex items-center justify-center text-ph-light-gray text-xl border border-ph-border rounded-lg">
            [Map Placeholder - Embed Google Maps or similar here]
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ContactPage;
