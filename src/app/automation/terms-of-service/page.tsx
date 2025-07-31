
'use client';

import React from 'react';
import { motion } from 'framer-motion';

const TermsOfServicePage: React.FC = () => {
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
        Terms of Service
      </motion.h1>
      <motion.p
        className="mt-4 text-lg md:text-xl leading-relaxed mb-8"
        variants={itemVariants}
      >
        Welcome to [Your Website Name]! These terms and conditions outline the rules and regulations for the use of [Your Company Name]'s Website, located at [Your Website URL].
      </motion.p>
      <motion.p
        className="mt-4 text-lg md:text-xl leading-relaxed mb-8"
        variants={itemVariants}
      >
        By accessing this website we assume you accept these terms and conditions. Do not continue to use [Your Website Name] if you do not agree to take all of the terms and conditions stated on this page.
      </motion.p>

      <motion.h2
        className="text-3xl md:text-4xl lg:text-5xl font-bold mt-8 mb-4"
        variants={itemVariants}
      >
        1. Cookies
      </motion.h2>
      <motion.p
        className="mt-4 text-lg md:text-xl leading-relaxed"
        variants={itemVariants}
      >
        We employ the use of cookies. By accessing [Your Website Name], you agreed to use cookies in agreement with the [Your Company Name]'s Privacy Policy.
      </motion.p>

      <motion.h2
        className="text-3xl md:text-4xl lg:text-5xl font-bold mt-8 mb-4"
        variants={itemVariants}
      >
        2. License
      </motion.h2>
      <motion.p
        className="mt-4 text-lg md:text-xl leading-relaxed"
        variants={itemVariants}
      >
        Unless otherwise stated, [Your Company Name] and/or its licensors own the intellectual property rights for all material on [Your Website Name]. All intellectual property rights are reserved. You may access this from [Your Website Name] for your own personal use subjected to restrictions set in these terms and conditions.
      </motion.p>
      <motion.p
        className="mt-4 text-lg md:text-xl leading-relaxed"
        variants={itemVariants}
      >
        You must not:
      </motion.p>
      <motion.ul
        className="list-disc list-inside ml-4 mt-4 text-lg md:text-xl leading-relaxed"
        variants={itemVariants}
      >
        <li>Republish material from [Your Website Name]</li>
        <li>Sell, rent or sub-license material from [Your Website Name]</li>
        <li>Reproduce, duplicate or copy material from [Your Website Name]</li>
        <li>Redistribute content from [Your Website Name]</li>
      </motion.ul>

      <motion.h2
        className="text-3xl md:text-4xl lg:text-5xl font-bold mt-8 mb-4"
        variants={itemVariants}
      >
        3. Hyperlinking to our Content
      </motion.h2>
      <motion.p
        className="mt-4 text-lg md:text-xl leading-relaxed"
        variants={itemVariants}
      >
        The following organizations may link to our Website without prior written approval:
      </motion.p>
      <motion.ul
        className="list-disc list-inside ml-4 mt-4 text-lg md:text-xl leading-relaxed"
        variants={itemVariants}
      >
        <li>Government agencies;</li>
        <li>Search engines;</li>
        <li>News organizations;</li>
        <li>Online directory distributors may link to our Website in the same manner as they hyperlink to the Websites of other listed businesses; and</li>
        <li>System wide Accredited Businesses except soliciting non-profit organizations, charity shopping malls, and charity fundraising groups which may not hyperlink to our Web site.</li>
      </motion.ul>

      <motion.h2
        className="text-3xl md:text-4xl lg:text-5xl font-bold mt-8 mb-4"
        variants={itemVariants}
      >
        4. iFrames
      </motion.h2>
      <motion.p
        className="mt-4 text-lg md:text-xl leading-relaxed"
        variants={itemVariants}
      >
        Without prior approval and written permission, you may not create frames around our Webpages that alter in any way the visual presentation or appearance of our Website.
      </motion.p>

      <motion.h2
        className="text-3xl md:text-4xl lg:text-5xl font-bold mt-8 mb-4"
        variants={itemVariants}
      >
        5. Content Liability
      </motion.h2>
      <motion.p
        className="mt-4 text-lg md:text-xl leading-relaxed"
        variants={itemVariants}
      >
        We shall not be held responsible for any content that appears on your Website. You agree to protect and defend us against all claims that is rising on your Website. No link(s) should appear on any Website that may be interpreted as libelous, obscene or criminal, or which infringes, otherwise violates, or advocates the infringement or other violation of, any third party rights.
      </motion.p>

      <motion.h2
        className="text-3xl md:text-4xl lg:text-5xl font-bold mt-8 mb-4"
        variants={itemVariants}
      >
        6. Reservation of Rights
      </motion.h2>
      <motion.p
        className="mt-4 text-lg md:text-xl leading-relaxed"
        variants={itemVariants}
      >
        We reserve the right to request that you remove all links or any particular link to our Website. You approve to immediately remove all links to our Website upon request. We also reserve the right to amen these terms and conditions and it's linking policy at any time. By continuously linking to our Website, you agree to be bound to and follow these linking terms and conditions.
      </motion.p>

      <motion.h2
        className="text-3xl md:text-4xl lg:text-5xl font-bold mt-8 mb-4"
        variants={itemVariants}
      >
        7. Disclaimer
      </motion.h2>
      <motion.p
        className="mt-4 text-lg md:text-xl leading-relaxed"
        variants={itemVariants}
      >
        To the maximum extent permitted by applicable law, we exclude all representations, warranties and conditions relating to our website and the use of this website. Nothing in this disclaimer will:
      </motion.p>
      <motion.ul
        className="list-disc list-inside ml-4 mt-4 text-lg md:text-xl leading-relaxed"
        variants={itemVariants}
      >
        <li>limit or exclude our or your liability for death or personal injury;</li>
        <li>limit or exclude our or your liability for fraud or fraudulent misrepresentation;</li>
        <li>limit any of our or your liabilities in any way that is not permitted under applicable law; or</li>
        <li>exclude any of our or your liabilities that may not be excluded under applicable law.</li>
      </motion.ul>
      <motion.p
        className="mt-4 text-lg md:text-xl leading-relaxed"
        variants={itemVariants}
      >
        The limitations and prohibitions of liability set in this Section and elsewhere in this disclaimer: (a) are subject to the preceding paragraph; and (b) govern all liabilities arising under the disclaimer, including liabilities arising in contract, in tort and for breach of statutory duty.
      </motion.p>
      <motion.p
        className="mt-4 text-lg md:text-xl leading-relaxed"
        variants={itemVariants}
      >
        As long as the website and the information and services on the website are provided free of charge, we will not be liable for any loss or damage of any nature.
      </motion.p>

      <motion.h2
        className="text-3xl md:text-4xl lg:text-5xl font-bold mt-8 mb-4"
        variants={itemVariants}
      >
        8. Contact Us
      </motion.h2>
      <motion.p
        className="mt-4 text-lg md:text-xl leading-relaxed"
        variants={itemVariants}
      >
        If you have any questions about these Terms of Service, please contact us at: info@youraiautomation.com
      </motion.p>
    </motion.div>
  );
};

export default TermsOfServicePage;
