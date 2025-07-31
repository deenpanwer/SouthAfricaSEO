
'use client';

import type { CityWhyChooseItem } from '@/types';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image'; // Keep Image import if needed elsewhere, but img tag is used for static image
import { getCityData } from '@/lib/cityConstants';
import React, { ComponentType, Fragment } from 'react';
import { Lightbulb, ShieldCheck, TrendingUp, Search, BarChart2, LineChart, MapPinned, Newspaper } from 'lucide-react';
// Import the Modal component
interface CityWhyChooseProps {
  cityName: string;
  headline: string;
  intro: string;
  points: CityWhyChooseItem[];
  whyChooseParagraph1: string;
  whyChooseParagraph2: string;
}

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



export function CityWhyChoose({ headline, intro, points, whyChooseParagraph1, whyChooseParagraph2, cityName }: CityWhyChooseProps) {
  // Map icon names (strings) to actual LucideIcon components
  const iconMap: { [key: string]: ComponentType<any> } = {
    TrendingUp: TrendingUp,
    Lightbulb: Lightbulb,
    ShieldCheck: ShieldCheck,
    Search: Search,
    BarChart2: BarChart2,
    LineChart: LineChart,
    MapPinned: MapPinned,
    Newspaper: Newspaper,
  };

  const [isModalOpen, setIsModalOpen] = React.useState(false);

  return (
    <section className="py-12 md:py-16 bg-gray-50 text-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
 <h2 className="text-3xl font-bold mb-4 md:text-4xl">{headline}</h2>
 <p className="text-gray-600 max-w-2xl mx-auto mb-8">{intro}</p> {/* Added mb-8 for space below intro */}
        </div>
        <div className="flex flex-col md:flex-row items-start md:space-x-8">
          <div className="md:w-1/2 mb-6 md:mb-0 flex flex-col justify-between">
            <div className="mb-8"> {/* Container for the first paragraph */}
              <p className="text-gray-600 leading-relaxed">{whyChooseParagraph1}</p> {/* Removed mb-4, parent container has mb-8 */}
            </div>
            <div className="text-center md:text-left"> {/* Container for Meet Our Team */}
              <p className="text-green-600 mb-1 text-xl font-bold">Meet Our Team</p> {/* Reduced mb */}
              <p className="text-gray-600 mb-6 text-base">Say Hello to all the Thrivers!</p> {/* Increased mb */}
              <Button asChild size="lg" className="bg-orange-500 hover:bg-orange-600 text-white font-semibold">
                <Link href="/about">GET TO KNOW US</Link>
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 relative group cursor-pointer" onClick={() => setIsModalOpen(true)}>
            <img src="/home/Our-Team.webp" alt="The Trac team" className="rounded-md shadow-lg w-full h-auto" />
             {/* Play button overlay (optional, but good for UX) */}
             <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-20 group-hover:bg-opacity-10 transition-opacity rounded-md">
                <svg className="h-16 w-16 text-white opacity-75 group-hover:opacity-100 transition-opacity" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                </svg>
            </div>
          </div>
           <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
              <iframe className="w-full aspect-video" src="https://www.youtube.com/embed/pmt7OaqS7Rg?rel=0&showinfo=0&controls=0&autoplay=1" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </Modal>
        </div>
        <p className="text-gray-600 mt-8 mb-10 leading-relaxed">{whyChooseParagraph2}</p> {/* mt-8 seems fine based on screenshot */}
        <div className="grid md:grid-cols-3 gap-8 mb-10">
          {points.map((point) => (
            <div key={point.title} className="text-center p-4">
              <div className="flex justify-center mb-3">
                {iconMap[point.icon] && React.createElement(iconMap[point.icon], { className: "h-10 w-10 text-green-600" })}
              </div>
              <h3 className="text-lg font-semibold mb-1">{point.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{point.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
