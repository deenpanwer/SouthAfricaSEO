
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Define a more specific type for the platform data
interface Platform {
  category: string;
  title: string;
  largeText: string;
  link: string;
  details: {
    writtenBy: string;
    published: string;
    length: string;
  };
}

interface CardProps {
  platform: Platform;
  isActive: boolean;
}

const Card: React.FC<CardProps> = ({ platform, isActive }) => {
  return (
    <div className="w-full bg-ph-black min-h-[60vh] md:min-h-[70vh] rounded-lg p-8 md:p-12 flex flex-col justify-between relative overflow-hidden">
      {/* Top Section */}
      <div className="relative z-10">
        <div className="bg-ph-dark-gray inline-block p-4 rounded-lg text-ph-white">
          <p className="text-xs uppercase tracking-widest text-ph-light-gray">{platform.category}</p>
          <h3 className="text-2xl font-semibold mt-1">{platform.title}</h3>
          <a href={platform.link} className="text-sm text-ph-accent hover:underline mt-2 inline-block">Learn More →</a>
        </div>
      </div>
      
      {/* Middle/Center Large Text */}
      <div className="relative z-10 text-center">
        <h1 className="text-7xl md:text-8xl lg:text-9xl font-bold text-ph-white break-words">
          {platform.largeText}
        </h1>
      </div>

      {/* Bottom Section */}
      <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-4 text-ph-light-gray text-xs uppercase tracking-wider">
        <div>
          <p className="font-bold">Scroll to read</p>
        </div>
         <div>
          <p className="text-ph-light-gray/70">Written By</p>
          <p className="font-semibold text-ph-white mt-1">{platform.details.writtenBy}</p>
        </div>
        <div>
          <p className="text-ph-light-gray/70">Published</p>
          <p className="font-semibold text-ph-white mt-1">{platform.details.published}</p>
        </div>
        <div>
          <p className="text-ph-light-gray/70">Length</p>
          <p className="font-semibold text-ph-white mt-1">{platform.details.length}</p>
        </div>
      </div>

      {/* Action buttons (optional, can be added here) */}
      <div className="absolute top-8 right-8 z-10 hidden md:flex space-x-4 text-xs uppercase tracking-widest">
        <button className="text-ph-light-gray hover:text-ph-white transition-colors">PDF ↓</button>
        <button className="text-ph-light-gray hover:text-ph-white transition-colors">Share →</button>
      </div>
    </div>
  );
};

export default Card;
