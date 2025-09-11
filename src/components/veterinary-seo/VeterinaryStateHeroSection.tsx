
'use client'

import Image from 'next/image';
import type { VeterinaryStateHeroData } from '@/types';
import { VeterinaryStateHeroForm } from './VeterinaryStateHeroForm';
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

interface VeterinaryStateHeroSectionProps {
  stateData: VeterinaryStateHeroData;
  stateName: string;
}

export function VeterinaryStateHeroSection({ stateData, stateName }: VeterinaryStateHeroSectionProps) {
  const { heroTitle, heroSubtitle, heroDescription, heroImage, formTitle, heroVideoUrl } = stateData;
  const [expanded, setExpanded] = useState(false);
  const [showVideo, setShowVideo] = useState(false);

  const sentences = heroDescription.split('. ');
  const initialDescription = sentences.slice(0, 4).join('. ') + (sentences.length > 4 ? '.' : '');
  const fullDescription = heroDescription;

  useEffect(() => {
    setExpanded(false);
  }, [heroDescription]);

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-primary/10 text-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="lg:order-2">
            <VeterinaryStateHeroForm stateName={stateName} formTitle={formTitle.replace('[StateName]', stateName)} />
          </div>
          <div className="lg:order-1 text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight mb-4 text-primary">
              {heroTitle.replace('[StateName]', stateName)}
            </h1>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-accent mb-6">
              {heroSubtitle.replace('[StateName]', stateName)}
            </h2>
            <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg mb-8 mx-auto lg:mx-0 max-w-xl cursor-pointer group" onClick={() => setShowVideo(true)}>
              <Image
                src={heroImage.src}
                alt={heroImage.alt.replace('[StateName]', stateName)}
                width={600}
                height={400}
                layout="responsive"
                priority
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
                title={`TRAC Veterinary SEO for ${stateName}`}
              ></iframe>
            </Modal>
            <div className="text-base sm:text-lg text-muted-foreground mb-4 leading-relaxed">
              <p>{expanded ? fullDescription.replace(/\[StateName\]/g, stateName) : initialDescription.replace(/\[StateName\]/g, stateName)}</p>
            </div>
            {sentences.length > 4 && (
              <button
                onClick={() => setExpanded(!expanded)}
                className="text-primary font-semibold hover:underline mb-6"
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
