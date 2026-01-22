"use client";

import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import PointingArrow from '@/components/ui/pointing-arrow';
import FloatingPaths from '@/components/ui/floating-paths';
import Image from "next/image";
 // Add this import

import 'react-international-phone/style.css';
import logoStripHome from '../../../public/home/logostriphome.png';
import { Button } from '../ui/button';
import { Check } from 'lucide-react'; // Import Check icon

declare const fbq: any; // Assuming fbq is globally available as in the HomeHeroSection

function Hero({ onFormSuccess }: { onFormSuccess: () => void }) {

  // MoneyBackGuaranteePill Component
  const MoneyBackGuaranteePill = () => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.0, duration: 0.5 }}
      className="mt-4 inline-flex items-center space-x-2 bg-gray-50 border border-gray-200 text-gray-700 text-sm font-semibold px-4 py-1.5 rounded-full shadow-sm"
    >
      <div className="flex items-center justify-center w-5 h-5 rounded-full bg-white border border-yellow-400 text-yellow-500">
        <Check className="h-4 w-4" />
      </div>
      <span>Money Back Guarantee</span>
    </motion.div>
  );

  const title = "The Best Deal in SEO.";
  const words = title.split(" ");
  const formButtonRef = useRef<HTMLButtonElement>(null);

  return (

    <div className="w-full bg-white text-black py-16 md:py-24 lg:py-32 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
          <FloatingPaths position={1} />
          <FloatingPaths position={-1} />
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        
        {/* Centered Text Content */}
        <div className="flex flex-col items-center text-center gap-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 tracking-tight">
              {words.map((word, wordIndex) => (
                  <span
                      key={wordIndex}
                      className="inline-block mr-3 last:mr-0"
                  >
                      {word.split("").map((letter, letterIndex) => (
                          <motion.span
                              key={`${wordIndex}-${letterIndex}`}
                              initial={{ y: 50, opacity: 0 }}
                              animate={{ y: 0, opacity: 1 }}
                              transition={{
                                  delay: wordIndex * 0.1 + letterIndex * 0.03,
                                  type: "spring",
                                  stiffness: 120,
                                  damping: 20,
                              }}
                              className="inline-block text-transparent bg-clip-text 
                              bg-gradient-to-r from-neutral-900 to-neutral-700/80"
                          >
                              {letter}
                          </motion.span>
                      ))}
                  </span>
              ))}
          </h1>
          <motion.p 
            className="text-lg leading-relaxed tracking-tight text-gray-700 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            Your next big SEO breakthrough is just a conversation away. Discover how our AI-powered strategies deliver unparalleled returns and propel your business to the top.
          </motion.p>
          <MoneyBackGuaranteePill />
        </div>

        {/* Form Container Below Text */}
        <motion.div 
            className="mt-12 w-full max-w-lg mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.5 }}
        >
           <div className="bg-gray-200 rounded-[2rem] p-1">
             <div className="w-full bg-gray-50 border border-gray-200 rounded-[1.75rem] p-8 shadow-lg flex flex-col justify-center items-center h-full space-y-6">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-900">Ready to Skyrocket Your SEO?</h3>
                  <p className="text-gray-600 mt-2">
                    Connect with our AI SEO experts. We're just a call away from crafting your high-return strategy.
                  </p>
                </div>
                <div>
                  <Button ref={formButtonRef} onClick={onFormSuccess} className="w-full bg-blue-600 text-white font-semibold py-3 px-6 rounded-md hover:bg-blue-700 transition-colors" size="lg">
                    Book a Free AI SEO Consultation
                  </Button>
                </div>
                {/* Logo Strip */}
                <div className="mt-8">
                  <Image src="/ai-seo-for-gemini-chatgpt-claude-perplexity.png" alt="AI SEO Brands" width={250} height={22} data-ai-hint="award badges" className="mx-auto" />
                </div>
              </div>
          </div>
        </motion.div>
        <PointingArrow targetRef={formButtonRef} />
      </div>
    </div>
  );
}

export { Hero };

    