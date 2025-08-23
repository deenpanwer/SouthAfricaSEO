'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  return (
    <> {/* Use a fragment to return multiple elements */}
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 text-ph-white`}
      >
        <div className="container mx-auto px-6 py-3">
          <div
            className="flex justify-between items-center bg-ph-header-blur px-6 py-3 rounded-xl"
            style={{ backdropFilter: 'blur(10px)' }}
          >
          <div className="text-2xl font-bold text-gray-500">
            <Link href="/automation">AUTOMATION</Link>
          </div>

          {/* CTA Button and Hamburger Menu Toggle */}
          <div className="flex items-center space-x-6">
            <Link
              href="/automation/contact"
              className={`hidden md:flex items-center px-4 py-2 border transition-colors duration-300
                  bg-white text-ph-dark-gray hover:bg-gray-200 hover:text-ph-dark-gray
                  rounded-md font-semibold`}
            >
              Get Started
            </Link>
            <button
              onClick={toggleMobileMenu}
              className="focus:outline-none" // Hamburger visible on all screen sizes
            >
              <div
                className={`hamburger hamburger--emphatic ${
                  isMobileMenuOpen ? 'is-active' : ''
                }`}
              >
                <span className="hamburger-box">
                  <span className="hamburger-inner"></span>
                </span>
              </div>
            </button>
          </div>
          </div>
        </div>
      </header>

      {/* Full-Screen Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-ph-menu-overlay" // Dark overlay with potential transparency
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={toggleMobileMenu} // Close menu when clicking outside
          />
        )}
      </AnimatePresence>

      {/* Full-Screen Menu Content */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 shadow-xl bg-ph-menu-bg overflow-y-auto" // Full-screen menu content
            initial={{ opacity: 0 }} // Fade in/out animation for content
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="container mx-auto px-6 py-12"> {/* Add padding for content */}
              <div className="flex flex-col space-y-8 text-ph-white text-2xl mt-10"> {/* Add top margin to avoid close button */}
                {/* Navigation Sections and Links - Customize this based on your site structure */}
                <div>
                  <h3 className="text-gray-400 text-sm font-semibold uppercase mb-4">Navigation</h3>
                  <nav className="flex flex-col space-y-4">
                    <Link href="/automation/platforms" className="text-white hover:text-gray-400" onClick={toggleMobileMenu}>Platforms</Link>
                    <Link href="/automation/offerings" className="text-white hover:text-gray-400" onClick={toggleMobileMenu}>Offerings</Link>
                    <Link href="/automation/impact-studies" className="text-white hover:text-gray-400" onClick={toggleMobileMenu}>Impact Studies</Link>
                    <Link href="/automation/blog" className="text-white hover:text-gray-400" onClick={toggleMobileMenu}>Blog</Link>
                    <Link href="/automation/about" className="text-white hover:text-gray-400" onClick={toggleMobileMenu}>About</Link>
                    <Link href="/automation/contact" className="text-white hover:text-gray-400" onClick={toggleMobileMenu}>Contact</Link>
                    <Link href="/automation/military" className="text-white hover:text-gray-400" onClick={toggleMobileMenu}>Military</Link>
                  </nav>
                </div>

                {/* Add more sections as needed, e.g., Latest News, Documentation, etc. */}

                <Link
                  href="/automation/contact"
                  className="mt-8 px-4 py-2 border border-ph-white text-ph-white hover:bg-ph-white hover:text-ph-black transition-colors duration-300 rounded-md font-semibold self-start" // Styled Get Started button
                  onClick={toggleMobileMenu}
                >
                  Get Started
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </> // Close the fragment
  );
};

export default Header;
