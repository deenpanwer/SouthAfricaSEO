'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

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
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled || isMobileMenuOpen ? 'bg-ph-dark-gray' : 'bg-transparent'
      } text-ph-white`}
    >
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <div className="text-2xl font-bold">
          <Link href="/automation">AUTOMATION</Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link href="/automation/platforms" className="hover:text-gray-400">Platforms</Link>
          <Link href="/automation/offerings" className="hover:text-gray-400">Offerings</Link>
          <Link href="/automation/impact-studies" className="hover:text-gray-400">Impact Studies</Link>
          <Link href="/automation/blog" className="hover:text-gray-400">Blog</Link>
          <Link href="/automation/about" className="hover:text-gray-400">About</Link>
          <Link href="/automation/contact" className="hover:text-gray-400">Contact</Link>
          <Link href="/automation/military" className="hover:text-gray-400">Military</Link>
        </nav>

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
            className="focus:outline-none md:hidden"
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

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-black bg-opacity-50 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={toggleMobileMenu} // Close menu when clicking outside
          />
        )}
      </AnimatePresence>

      {/* Mobile Menu Content */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed top-0 left-0 w-64 min-h-screen z-50 shadow-xl md:hidden"
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <motion.div
              className="flex flex-col items-center justify-center flex-grow space-y-8 text-ph-white text-2xl overflow-y-auto bg-ph-dark-gray min-h-screen"
            >
              <nav className="flex flex-col items-center justify-center space-y-8 text-ph-white text-2xl">
                <Link href="/automation/platforms" className="hover:text-gray-400" onClick={toggleMobileMenu}>Platforms</Link>
                <Link href="/automation/offerings" className="hover:text-gray-400" onClick={toggleMobileMenu}>Offerings</Link>
                <Link href="/automation/impact-studies" className="hover:text-gray-400" onClick={toggleMobileMenu}>Impact Studies</Link>
                <Link href="/automation/blog" className="hover:text-gray-400" onClick={toggleMobileMenu}>Blog</Link>
                <Link href="/automation/about" className="hover:text-gray-400" onClick={toggleMobileMenu}>About</Link>
                <Link href="/automation/contact" className="hover:text-gray-400" onClick={toggleMobileMenu}>Contact</Link>
                <Link href="/automation/military" className="hover:text-gray-400" onClick={toggleMobileMenu}>Military</Link>
                <Link
                  href="/automation/contact"
                  className="mt-8 px-4 py-2 border border-ph-white text-ph-white hover:bg-ph-white hover:text-ph-black transition-colors duration-300"
                  onClick={toggleMobileMenu}
                >
                  Get Started
                </Link>
              </nav>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;