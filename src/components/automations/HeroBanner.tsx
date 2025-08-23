import React from 'react';
import AutomationHeroPlain3D from './AutomationHeroPlain3D';

export const HeroBanner = () => {
  return (
    <section className="relative min-h-[800px] flex items-center justify-center text-center overflow-hidden">
      {/* Background Animations/Particles - Placeholder */}
      <div className="absolute inset-0 z-0">
        <AutomationHeroPlain3D />
      </div>

      {/* Full-screen overlay for text readability */}
      <div className="absolute inset-0 z-[1] bg-black/30"></div>

      <div className="relative z-10 p-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-4 animate-fade-in-up" style={{ fontWeight: 900, textShadow: '1px 1px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 0px 1px 0 #000, 0px -1px 0 #000, 1px 0px 0 #000, -1px 0px 0 #000' }}>
          Pakistan's #1 <span className="text-primary">AI Research Lab</span> & <span className="text-secondary">Agency</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-8 animate-fade-in-up animation-delay-200">
          Driving national transformation through cutting-edge artificial intelligence for government, military, and industry.
        </p>
        <div className="flex justify-center space-x-4 animate-fade-in-up animation-delay-400">
          <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-full text-lg font-semibold shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105">
            Explore Our Work
          </button>
          <button className="bg-transparent border-2 border-ph-border text-white hover:bg-ph-border px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 ease-in-out transform hover:scale-105">
            Contact Us
          </button>
        </div>
      </div>

      {/* Quote at the bottom with blurred background */}
      <div className="absolute bottom-8 p-6 md:p-8 max-w-5xl mx-auto shadow-xl border border-ph-border rounded-lg bg-black/30 backdrop-blur-md text-center z-20">
        <p className="text-lg md:text-xl italic text-ph-light-gray">
          "The future of Pakistan is intertwined with its mastery of artificial intelligence."
        </p>
      </div>
    </section>
  );
};
