
'use client';

import React, { useState, useRef, useEffect, useCallback } from 'react';
import PlatformCard from './ui/PlatformCard';
import { motion } from 'framer-motion';
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

const AUTOPLAY_INTERVAL = 7000;

const HomepagePlatformsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

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
    resetTimeout();
    timeoutRef.current = setTimeout(() => advanceSlide('next'), AUTOPLAY_INTERVAL);
    return () => resetTimeout();
  }, [currentIndex, advanceSlide]);

  const handleNavClick = (index: number) => {
    setCurrentIndex(index);
  };
  
  const handlePrevClick = () => advanceSlide('prev');
  const handleNextClick = () => advanceSlide('next');

  return (
    <section className="py-12 md:py-20 bg-ph-black text-ph-white w-full overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Top Navigation */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-8 border-b border-ph-border pb-4">
          <div className="flex items-center justify-center flex-wrap gap-2">
            {platforms.map((platform, index) => (
              <button
                key={index}
                onClick={() => handleNavClick(index)}
                className={`px-4 py-1.5 text-sm font-medium rounded-md transition-colors duration-300 ${
                  currentIndex === index
                    ? 'bg-ph-light-gray/20 text-ph-white border border-ph-light-gray/50'
                    : 'bg-transparent text-ph-light-gray hover:bg-ph-dark-gray'
                }`}
              >
                {platform.title}
              </button>
            ))}
          </div>
          <a href="/automation/platforms" className="ml-auto text-sm font-medium text-ph-light-gray hover:text-ph-white border border-ph-border px-3 py-1.5 rounded-md">
            See All
          </a>
        </div>

        {/* Horizontal Scroller */}
        <div className="relative">
           {/* Previous Button */}
          <button onClick={handlePrevClick} className="absolute left-0 top-1/2 -translate-y-1/2 z-20 p-2 text-ph-light-gray hover:text-ph-white transition-colors">
            <ChevronLeft className="w-8 h-8"/>
          </button>
          {/* Next Button */}
          <button onClick={handleNextClick} className="absolute right-0 top-1/2 -translate-y-1/2 z-20 p-2 text-ph-light-gray hover:text-ph-white transition-colors">
            <ChevronRight className="w-8 h-8"/>
          </button>
          
           <div className="overflow-hidden">
            <motion.div
              className="flex"
              animate={{ x: `-${currentIndex * 100}%` }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {platforms.map((platform, index) => (
                <div key={index} className="w-full flex-shrink-0">
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
