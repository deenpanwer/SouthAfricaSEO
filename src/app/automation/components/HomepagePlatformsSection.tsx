
'use client';

import React, { useState, useRef, useEffect, useCallback } from 'react';
import PlatformCard from './ui/PlatformCard';
import { motion, useAnimation } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const platforms = [
    {
      title: "Gotham",
      category: "Platform",
      description: "An AI-ready operating system for global defense and intelligence.",
      largeText: "Gotham",
      link: "/automation/platforms/gotham",
      details: {
        writtenBy: "Alex Karp, CEO",
        published: "2023",
        length: "5 Min Read"
      }
    },
    {
      title: "Foundry",
      category: "Platform",
      description: "An ontology-powered operating system for the modern enterprise.",
      largeText: "Foundry",
      link: "/automation/platforms/foundry",
      details: {
        writtenBy: "Shyam Sankar, CTO",
        published: "2024",
        length: "7 Min Read"
      }
    },
    {
      title: "AIP",
      category: "Platform",
      description: "Activate large language models and other AI on private networks.",
      largeText: "AIP",
      link: "/automation/platforms/aip",
       details: {
        writtenBy: "AI Division",
        published: "2024",
        length: "6 Min Read"
      }
    },
     {
      title: "Apollo",
      category: "Platform",
      description: "Continuous delivery system for deploying software across all environments.",
      largeText: "Apollo",
      link: "/automation/platforms/apollo",
       details: {
        writtenBy: "DevOps Team",
        published: "2023",
        length: "4 Min Read"
      }
    },
  ];

const AUTOPLAY_INTERVAL = 7000; // 7 seconds

const HomepagePlatformsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const controls = useAnimation();
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
    controls.set({ width: 0 });
    controls.start({ width: '100%', transition: { duration: AUTOPLAY_INTERVAL / 1000, ease: 'linear' } });
    
    resetTimeout();
    timeoutRef.current = setTimeout(() => advanceSlide('next'), AUTOPLAY_INTERVAL);

    return () => resetTimeout();
  }, [currentIndex, controls, advanceSlide]);

  const handleNavClick = (index: number) => {
    setCurrentIndex(index);
  };
  
  const handlePrevClick = () => advanceSlide('prev');
  const handleNextClick = () => advanceSlide('next');

  return (
    <section className="py-12 md:py-20 bg-ph-dark-gray text-ph-white w-full overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Top Navigation */}
        <div className="flex items-center justify-center mb-8 border-b border-ph-border">
          <div className="flex items-center space-x-4">
            {platforms.map((platform, index) => (
              <div
                key={index}
                className="relative py-3 cursor-pointer"
                onClick={() => handleNavClick(index)}
              >
                <span className={`text-sm font-medium transition-colors ${currentIndex === index ? 'text-ph-white' : 'text-ph-light-gray hover:text-ph-white'}`}>
                  {platform.title}
                </span>
                {currentIndex === index && (
                  <motion.div
                    className="absolute bottom-0 left-0 h-0.5 bg-ph-white"
                    initial={{ width: 0 }}
                    animate={controls}
                  />
                )}
              </div>
            ))}
          </div>
          <a href="/automation/platforms" className="ml-auto text-sm font-medium text-ph-light-gray hover:text-ph-white border border-ph-border px-3 py-1 rounded-md">
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

          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(calc(-${currentIndex * 100}% - ${currentIndex * 2}rem))` }}
          >
            {platforms.map((platform, index) => (
              <div key={index} className="w-full flex-shrink-0" style={{ paddingRight: '2rem' }}>
                <PlatformCard platform={platform} isActive={currentIndex === index} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomepagePlatformsSection;
