
'use client';

import React, { useState, useRef, useEffect, useCallback } from 'react';
import PlatformCard from './ui/PlatformCard';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const platforms = [
    {
      title: "Gotham",
      category: "Platform",
      description: "An AI-ready operating system for global defense and intelligence.",
      imageUrl: "https://placehold.co/1200x800.png?text=Gotham+Platform",
      dataAiHint: "defense system interface",
      link: "/automation/platforms/gotham",
    },
    {
      title: "Foundry",
      category: "Platform",
      description: "An ontology-powered operating system for the modern enterprise.",
      imageUrl: "https://placehold.co/1200x800.png?text=Foundry+Platform",
      dataAiHint: "enterprise data graph",
      link: "/automation/platforms/foundry",
    },
    {
      title: "AIP",
      category: "Platform",
      description: "Activate large language models and other AI on private networks.",
      imageUrl: "https://placehold.co/1200x800.png?text=AIP+Platform",
      dataAiHint: "ai model network",
      link: "/automation/platforms/aip",
    },
     {
      title: "Apollo",
      category: "Platform",
      description: "Continuous delivery system for deploying software across all environments.",
      imageUrl: "https://placehold.co/1200x800.png?text=Apollo+Platform",
      dataAiHint: "software deployment pipeline",
      link: "/automation/platforms/apollo",
    },
  ];

const AUTOPLAY_INTERVAL = 7000; // 7 seconds

const HomepagePlatformsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const advanceSlide = useCallback((direction: 'next' | 'prev') => {
    setCurrentIndex(prevIndex => {
      let newIndex;
      if (direction === 'next') {
        newIndex = (prevIndex + 1) % platforms.length;
      } else {
        newIndex = (prevIndex - 1 + platforms.length) % platforms.length;
      }
      return newIndex;
    });
  }, []);

  useEffect(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => advanceSlide('next'), AUTOPLAY_INTERVAL);
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [currentIndex, advanceSlide]);

  const handleNavClick = (index: number) => {
    setCurrentIndex(index);
  };
  
  const handlePrevClick = () => advanceSlide('prev');
  const handleNextClick = () => advanceSlide('next');

  return (
    <section className="py-12 md:py-20 bg-ph-whitest-gray text-ph-black w-full overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Top Navigation */}
        <div className="flex items-center justify-between flex-wrap gap-4 mb-8 border-b border-gray-200 pb-4">
          <div className="flex items-center justify-center flex-wrap gap-2">
            {platforms.map((platform, index) => (
              <button
                key={index}
                onClick={() => handleNavClick(index)}
                className={`relative px-5 py-2 text-sm font-semibold rounded-md transition-colors duration-300 overflow-hidden
                  ${currentIndex === index
                    ? 'bg-white text-ph-black shadow-sm'
                    : 'bg-transparent text-gray-500 hover:bg-white/60'
                  }`}
              >
                <span>{platform.title}</span>
                {currentIndex === index && (
                  <motion.div
                    className="absolute bottom-0 left-0 h-0.5 bg-ph-accent/50 shadow-lg"
                    initial={{ width: '0%' }}
                    animate={{ width: '100%' }}
                    transition={{ duration: AUTOPLAY_INTERVAL / 1000, ease: 'linear' }}
                    key={currentIndex} // Re-trigger animation when index changes
                  />
                )}
              </button>
            ))}
          </div>
          <a href="/automation/platforms" className="text-sm font-semibold text-gray-600 hover:text-ph-black">
            See All →
          </a>
        </div>

        {/* Horizontal Scroller */}
        <div className="relative">
          {/* Previous Button */}
          <button onClick={handlePrevClick} className="absolute left-0 top-1/2 -translate-y-1/2 z-20 p-2 text-gray-400 hover:text-ph-black transition-colors rounded-full bg-white/50 hover:bg-white shadow-md">
            <ChevronLeft className="w-6 h-6"/>
          </button>
          {/* Next Button */}
          <button onClick={handleNextClick} className="absolute right-0 top-1/2 -translate-y-1/2 z-20 p-2 text-gray-400 hover:text-ph-black transition-colors rounded-full bg-white/50 hover:bg-white shadow-md">
            <ChevronRight className="w-6 h-6"/>
          </button>
          
           <div className="overflow-hidden">
             <motion.div
              className="flex"
              animate={{ x: `-${currentIndex * 100}%` }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {platforms.map((platform, index) => (
                <div key={index} className="w-full flex-shrink-0 px-1 md:px-2">
                  <PlatformCard platform={platform} />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomepagePlatformsSection;
