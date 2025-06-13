
'use client'

import Image from 'next/image';
import type { LandscapingStateHeroData } from '@/types';
import { LandscapingStateHeroForm } from './LandscapingStateHeroForm';
import { useState, useEffect } from 'react';

const Modal = ({ isOpen, onClose, children }: { isOpen: boolean; onClose: () => void; children: React.ReactNode }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50" onClick={onClose}>
      <div className="relative w-full max-w-3xl mx-auto p-4" onClick={(e) => e.stopPropagation()}>
        <button className="absolute top-0 right-0 m-4 text-white text-2xl" onClick={onClose}>&times;</button>
        {children}
      </div>
    </div>
  );
};
interface LandscapingStateHeroSectionProps {
  stateData: LandscapingStateHeroData;
  stateName: string;
}

export function LandscapingStateHeroSection({ stateData, stateName }: LandscapingStateHeroSectionProps) {
  const { heroTitle, heroSubtitle, heroDescription, heroImage, formTitle, heroVideoUrl } = stateData;
  const [expanded, setExpanded] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  
  const sentences = heroDescription.split('. ');
  const initialDescription = sentences.slice(0, 4).join('. ') + (sentences.length > 4 ? '.' : '');
  const fullDescription = heroDescription;

  // Reset expanded state if heroDescription changes (e.g., navigating between state pages)
  useEffect(() => {
    setExpanded(false);
  }, [heroDescription]);

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-green-700 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="lg:order-2">
            <LandscapingStateHeroForm stateName={stateName} formTitle={formTitle} />
          </div>

          <div className="lg:order-1 text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight mb-4">
              {heroTitle}
            </h1>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-yellow-400 mb-6">
              {heroSubtitle}
            </h2>
            
            <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg mb-8 mx-auto lg:mx-0 max-w-xl cursor-pointer group" onClick={() => setShowVideo(true)}>
              <Image
                src={heroImage.src}
                alt={heroImage.alt}
                width={600}
                height={400}
                layout="responsive"
                data-ai-hint={heroImage.dataAiHint || "landscaping service"}
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 group-hover:bg-opacity-10 transition-opacity">
                 <svg className="h-16 w-16 text-white opacity-75 group-hover:opacity-100 transition-opacity" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                </svg>
              </div>
            </div>
            
            <Modal isOpen={showVideo} onClose={() => setShowVideo(false)}>
              <iframe
                className="w-full aspect-video"
                src={`${heroVideoUrl}?rel=0&showinfo=0&autoplay=1`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="TRAC Landscaping SEO Video"
              ></iframe>
            </Modal>

            <div className="text-base sm:text-lg text-green-100 mb-4 leading-relaxed">
              <p>{expanded ? fullDescription : initialDescription}</p>
            </div>
            {sentences.length > 4 && (
              <button
                onClick={() => setExpanded(!expanded)}
                className="text-yellow-400 font-semibold hover:underline mb-6"
              >
                {expanded ? 'Read Less' : 'Read More'}
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
