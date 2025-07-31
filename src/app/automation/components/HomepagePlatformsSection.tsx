'use client';

import React, { useState, useRef, useEffect } from 'react';
import Card from './ui/Card'; // Assuming Card component is still useful for individual platform display
import { motion } from 'framer-motion';
// Import necessary styles for react-slick. You might need to install it: npm install react-slick slick-carousel
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HomepagePlatformsSection: React.FC = () => {
  const platforms = [
    {
      title: "Palantir Gotham",
      description: "An AI-ready operating system primarily used for defense and intelligence, aiding in decision-making for operators.",
      imageUrl: "/automation/gotham.jpg",
      link: "/platforms/gotham",
    },
    {
      title: "Palantir Foundry",
      description: "An ontology-powered operating system for enterprises, focusing on data integration, analysis, and operational operational workflows in commercial and civil government sectors.",
      imageUrl: "/automation/foundry.jpg",
      link: "/platforms/foundry",
    },
    {
      title: "Palantir Apollo",
      description: "A continuous delivery system that deploys, monitors, and secures software across diverse environments, including multi-cloud, on-premise, and edge devices.",
      imageUrl: "/automation/apollo.jpg",
      link: "/platforms/apollo",
    },
    {
      title: "Palantir Artificial Intelligence Platform (AIP)",
      description: "Enables the activation and control of large language models (LLMs) and other AI on private networks, integrating AI into operational decision-making.",
      imageUrl: "/automation/aip.jpg",
      link: "/platforms/aip",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const navRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });

  // Effect for animating the black strip indicator below the active navigation item
  useEffect(() => {
    const activeNavItem = navRefs.current[currentSlide];
    if (activeNavItem) {
      setIndicatorStyle({
        left: activeNavItem.offsetLeft,
        width: activeNavItem.offsetWidth,
      });
    }
  }, [currentSlide]);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Changed to show multiple slides
    slidesToScroll: 1, // Changed to scroll one slide at a time
    autoplay: true,
    autoplaySpeed: 5000, // Slide every 5 seconds
    // Removed fade: true for horizontal sliding
    beforeChange: (oldIndex: number, newIndex: number) => setCurrentSlide(newIndex),
    // You can add more settings here like arrows, responsive breakpoints, etc.
     responsive: [ // Added responsive settings
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      }
    ]
  };

  // Function to handle navigation item click
  const handleNavClick = (index: number) => {
    setCurrentSlide(index);
    // Optionally, you can add logic here to manually go to the slide using slider ref if needed
  };

  return (
    <section className="py-24 bg-gray-100"> {/* Changed background to light gray */}
      <div className="w-full"> {/* Removed container mx-auto px-6 */}
        {/* Removed "OUR CORE PLATFORMS" title */}

        {/* Platform Navigation and See All Button */}
        <div className="flex items-center justify-center mb-8 relative"> {/* Removed bg-white and p-2 */}
          {platforms.map((platform, index) => (
            <div
              key={index}
              ref={el => { navRefs.current[index] = el; }} // Corrected ref callback
              className={`px-4 py-2 cursor-pointer text-gray-600 bg-white relative overflow-hidden 
                ${currentSlide === index ? '!text-ph-black font-semibold' : ''} 
                transition-colors duration-300
                ${index < platforms.length - 1 ? 'mr-1' : ''} // Added margin right for spacing
              `} // Styled navigation items with white background, removed rounded-md
              onClick={() => handleNavClick(index)}
            >
              {/* Simplify title for button */}
              {platform.title.replace('Palantir ', '').replace('(AIP)', '').trim()}

              {/* Animated Time Indicator */}
              {currentSlide === index && (
                <motion.div
                  key={currentSlide} // Key to restart animation
                  className="absolute bottom-0 left-0 h-full w-0 bg-gray-300" // Changed indicator height to full and added initial width
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: settings.autoplaySpeed / 1000, ease: "linear" }}
                />
              )}
            </div>
          ))}
          {/* Animated Indicator Strip - This was the old indicator below the nav, removing or repurposing if needed */}
          {/* <motion.div
            className="absolute bottom-0 h-0.5 bg-ph-black"
            style={{ left: indicatorStyle.left, width: indicatorStyle.width }}
            transition={{ duration: 0.3 }}
          /> */}
          <a href="/platforms" className="ml-4 px-4 py-2 bg-gray-200 text-ph-dark-gray font-semibold rounded-md">See All</a> {/* Styled See All button */}
        </div>

        {/* Carousel */} 
        <Slider {...settings}>
          {platforms.map((platform, index) => (
            <div key={index} className="px-2"> {/* Added padding for spacing between slides */} 
              <a href={platform.link}>
                <div className="rounded-lg overflow-hidden border border-gray-300 relative min-h-[400px]"> {/* Adjusted border color and added min-height */}
                  <img src={platform.imageUrl} alt={platform.title} className="w-full h-auto object-cover" onLoad={() => console.log(`Image loaded: ${platform.imageUrl}`)} onError={() => console.error(`Error loading image: ${platform.imageUrl}`)} />
                  {/* Removed platform title overlay - assuming title is in the image */}
                </div>
              </a>
            </div>
          ))}
        </Slider>

      </div>
    </section>
  );
};

export default HomepagePlatformsSection;