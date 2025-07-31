
'use client';

import React from 'react';
import { motion } from 'framer-motion';

const PrivacyPolicyPage: React.FC = () => {
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
        Privacy Policy
      </motion.h1>
      <motion.p
        className="mt-4 text-lg md:text-xl leading-relaxed mb-8"
        variants={itemVariants}
      >
        Your privacy is important to us. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website [Your Website URL], including any other media form, media channel, mobile website, or mobile application related or connected thereto (collectively, the “Site”). Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the Site.
      </motion.p>

      <motion.h2
        className="text-3xl md:text-4xl lg:text-5xl font-bold mt-8 mb-4"
        variants={itemVariants}
      >
        1. Collection of Your Information
      </motion.h2>
      <motion.p
        className="mt-4 text-lg md:text-xl leading-relaxed"
        variants={itemVariants}
      >
        We may collect information about you in a variety of ways. The information we may collect on the Site includes:
      </motion.p>
      <motion.h3
        className="text-2xl md:text-3xl font-bold mt-6 mb-3"
        variants={itemVariants}
      >
        Personal Data
      </motion.h3>
      <motion.p
        className="mt-4 text-lg md:text-xl leading-relaxed"
        variants={itemVariants}
      >
        Personally identifiable information, such as your name, shipping address, email address, and telephone number, and demographic information, such as your age, gender, hometown, and interests, that you voluntarily give to us when you register with the Site or when you choose to participate in various activities related to the Site, such as online chat and message boards.
      </motion.p>
      <motion.h3
        className="text-2xl md:text-3xl font-bold mt-6 mb-3"
        variants={itemVariants}
      >
        Derivative Data
      </motion.h3>
      <motion.p
        className="mt-4 text-lg md:text-xl leading-relaxed"
        variants={itemVariants}
      >
        Information our servers automatically collect when you access the Site, such as your IP address, your browser type, your operating system, your access times, and the pages you have viewed directly before and after accessing the Site.
      </motion.p>

      <motion.h2
        className="text-3xl md:text-4xl lg:text-5xl font-bold mt-8 mb-4"
        variants={itemVariants}
      >
        2. Use of Your Information
      </motion.h2>
      <motion.p
        className="mt-4 text-lg md:text-xl leading-relaxed"
        variants={itemVariants}
      >
        Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Site to:
      </motion.p>
      <motion.ul
        className="list-disc list-inside ml-4 mt-4 text-lg md:text-xl leading-relaxed"
        variants={itemVariants}
      >
        <li>Create and manage your account.</li>
        <li>Email you regarding your account or order.</li>
        <li>Enable user-to-user communications.</li>
        <li>Generate a personal profile about you to make your visit to the Site more personalized.</li>
        <li>Increase the efficiency and operation of the Site.</li>
        <li>Monitor and analyze usage and trends to improve your experience with the Site.</li>
        <li>Notify you of updates to the Site.</li>
        <li>Offer new products, services, mobile applications, and/or recommendations to you.</li>
        <li>Perform other business activities as needed.</li>
      </motion.ul>

      <motion.h2
        className="text-3xl md:text-4xl lg:text-5xl font-bold mt-8 mb-4"
        variants={itemVariants}
      >
        3. Disclosure of Your Information
      </motion.h2>
      <motion.p
        className="mt-4 text-lg md:text-xl leading-relaxed"
        variants={itemVariants}
      >
        We may share information we have collected about you in certain situations. Your information may be disclosed as follows:
      </motion.p>
      <motion.h3
        className="text-2xl md:text-3xl font-bold mt-6 mb-3"
        variants={itemVariants}
      >
        By Law or to Protect Rights
      </motion.h3>
      <motion.p
        className="mt-4 text-lg md:text-xl leading-relaxed"
        variants={itemVariants}
      >
        If we believe the release of information about you is necessary to respond to legal process, to investigate or remedy potential violations of our policies, or to protect the rights, property, or safety of others, we may share your information as permitted or required by any applicable law, rule, or regulation.
      </motion.p>
      <motion.h3
        className="text-2xl md:text-3xl font-bold mt-6 mb-3"
        variants={itemVariants}
      >
        Third-Party Service Providers
      </motion.h3>
      <motion.p
        className="mt-4 text-lg md:text-xl leading-relaxed"
        variants={itemVariants}
      >
        We may share your information with third parties that perform services for us or on our behalf, including data analysis, email delivery, hosting services, customer service, and marketing assistance.
      </motion.p>

      <motion.h2
        className="text-3xl md:text-4xl lg:text-5xl font-bold mt-8 mb-4"
        variants={itemVariants}
      >
        4. Security of Your Information
      </motion.h2>
      <motion.p
        className="mt-4 text-lg md:text-xl leading-relaxed"
        variants={itemVariants}
      >
        We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.
      </motion.p>

      <motion.h2
        className="text-3xl md:text-4xl lg:text-5xl font-bold mt-8 mb-4"
        variants={itemVariants}
      >
        5. Contact Us
      </motion.h2>
      <motion.p
        className="mt-4 text-lg md:text-xl leading-relaxed"
        variants={itemVariants}
      >
        If you have questions or comments about this Privacy Policy, please contact us at: info@youraiautomation.com
      </motion.p>
    </motion.div>
  );
};

export default PrivacyPolicyPage;
