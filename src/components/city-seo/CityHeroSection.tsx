'use client'

import Image from 'next/image';
import type { CityHeroData } from '@/types';
import { CityHeroForm } from './CityHeroForm';
import { useState, useRef } from 'react';
import { Breadcrumb } from '@/components/layout/Breadcrumb';

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
interface CityHeroSectionProps { // Changed CityPageData to CityHeroData
  cityData: CityHeroData;
  cityName: string;
}

export function CityHeroSection({ cityData, cityName }: CityHeroSectionProps) {
  const { heroTitle, heroSubtitle, heroDescription, heroImage, formTitle, heroVideoUrl } = cityData;
  const [expanded, setExpanded] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  // const videoRef = useRef<HTMLIFrameElement>(null); // This ref is not used anymore
  
  const characterLimit = 350; // Adjust this number to show more or less text initially
  const fullDescription = heroDescription;
  const initialDescription = heroDescription.length > characterLimit
    ? heroDescription.substring(0, characterLimit).split(' ').slice(0, -1).join(' ') + '...'
    : heroDescription;

  // Function to render text with markdown-like parsing
  const renderDescription = (text: string) => {
    const paragraphs = text.split('\n\n');

    return paragraphs.map((paragraph, pIndex) => {
      // Handle Vertical Names (lines starting with - **)
      if (paragraph.startsWith('- **') && paragraph.endsWith('**')) {
        const verticalName = paragraph.substring(4, paragraph.length - 2);
        return <h4 key={`p-${pIndex}`} className={pIndex > 0 ? 'mt-4 font-semibold text-xl' : 'font-semibold text-xl'}>{verticalName}</h4>;
      }

      // Handle Links (URLs and [text](url))
      const parts = paragraph.split(/(\s+)/); // Split by whitespace, keeping whitespace
      const renderedParts = parts.map((part, partIndex) => {
        // Simple URL detection
        if (part.startsWith('http://') || part.startsWith('https://')) {
          return <a key={`p${pIndex}-part${partIndex}`} href={part} className="text-orange-500 hover:text-orange-600" target="_blank" rel="noopener noreferrer">{part}</a>;
        }
        // Basic [text](url) detection (can be enhanced)
        const markdownLinkMatch = part.match(/.*\[(.*?)\].*\((.*?)\)/);
        if (markdownLinkMatch) {
          return <a key={`p${pIndex}-part${partIndex}`} href={markdownLinkMatch[2]} className="text-orange-500 hover:text-orange-600" target="_blank" rel="noopener noreferrer">{markdownLinkMatch[1]}</a>;
        }
        return part;
      });
      return <p key={`p-${pIndex}`} className={pIndex > 0 ? 'mt-4' : ''}>{renderedParts}</p>;
    });
  };

  // Check if description is long enough to require "Read More"
  const needsReadMore = heroDescription.length > characterLimit;

  const breadcrumbItems = [
    { name: 'Home', href: '/' },
    { name: `${cityName} SEO Service Agency`, href: '#' },
  ];

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-green-700 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb items={breadcrumbItems} />
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left Column: Form */}
          <div className="lg:order-2">
            <CityHeroForm cityName={cityName} formTitle={formTitle} />
          </div>

          {/* Right Column: Text Content & Image/Video Placeholder */}
          <div className="lg:order-1 text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight mb-6">
              {heroTitle}
            </h1>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-yellow-400 mb-8">
              {heroSubtitle}
            </h2>
            {/* Image that triggers video */}
            {/* Always show image, it will open the modal */}
            <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg mb-8 mx-auto lg:mx-0 max-w-xl cursor-pointer" onClick={() => setShowVideo(true)}>
              <Image
                src={typeof heroImage === 'string' ? heroImage : heroImage.src}
                alt={typeof heroImage === 'string' ? `${cityName} city image to play video` : heroImage.alt}
                width={600}
                height={400}
                layout="responsive"
              />
              {/* Play button overlay - optional */}
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30"></div>
              {/* You can add a Play icon here if desired */}
            </div>
            {/* Video Modal */}
            <Modal isOpen={showVideo} onClose={() => setShowVideo(false)}>
              <iframe
                className="w-full aspect-video"
                src={`${heroVideoUrl}?rel=0&showinfo=0&autoplay=1`} // Ensure autoplay is enabled when opened
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="TRAC Video"
              ></iframe>
            </Modal>

            {/* Description and Read More */}
            <div className="text-base sm:text-lg text-green-100 mb-4 leading-relaxed">
              {expanded ? renderDescription(fullDescription) : (
                <p>{initialDescription}</p>
              )}
            </div>
            {needsReadMore && (
              <button
                onClick={() => setExpanded(!expanded)} // This correctly toggles the expanded state
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
