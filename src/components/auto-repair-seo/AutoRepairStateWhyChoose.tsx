
'use client';

import type { AutoRepairStateWhyChooseItem } from '@/types';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import React, { ComponentType } from 'react';
import { TrendingUp, Lightbulb, ShieldCheck, Users, Wrench, Settings } from 'lucide-react';

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

interface AutoRepairStateWhyChooseProps {
  stateName: string;
  headline: string;
  intro: string;
  points: AutoRepairStateWhyChooseItem[];
  whyChooseParagraph1: string;
  whyChooseParagraph2: string;
  videoUrl: string;
  videoThumbnailUrl: string;
  videoThumbnailAlt: string;
}

export function AutoRepairStateWhyChoose({ headline, intro, points, whyChooseParagraph1, whyChooseParagraph2, stateName, videoUrl, videoThumbnailUrl, videoThumbnailAlt }: AutoRepairStateWhyChooseProps) {
  const iconMap: { [key: string]: ComponentType<any> } = {
    TrendingUp: TrendingUp,
    Lightbulb: Lightbulb,
    ShieldCheck: ShieldCheck,
    Users: Users,
    Wrench: Wrench,
    Settings: Settings,
  };

  const [isModalOpen, setIsModalOpen] = React.useState(false);

  return (
    <section className="py-12 md:py-16 bg-muted/50 text-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
         <h2 className="text-3xl font-bold mb-4 md:text-4xl text-primary">{headline.replace('[StateName]', stateName)}</h2>
         <p className="text-muted-foreground max-w-2xl mx-auto mb-8">{intro.replace('[StateName]', stateName)}</p>
        </div>
        <div className="flex flex-col md:flex-row items-start md:space-x-8">
          <div className="md:w-1/2 mb-6 md:mb-0 flex flex-col justify-between">
            <div className="mb-8">
              <p className="text-muted-foreground leading-relaxed">{whyChooseParagraph1.replace('[StateName]', stateName)}</p>
            </div>
            <div className="text-center md:text-left">
              <p className="text-primary mb-1 text-xl font-bold">Meet Our Auto Repair SEO Team</p>
              <p className="text-muted-foreground mb-6 text-base">Learn how our SEO specialists can help your {stateName} shop thrive!</p>
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                <Link href="/about">GET TO KNOW US</Link>
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 relative group cursor-pointer" onClick={() => setIsModalOpen(true)}>
            <Image
                src={videoThumbnailUrl}
                alt={videoThumbnailAlt.replace('[StateName]', stateName)}
                width={600} height={338}
                className="rounded-md shadow-lg w-full h-auto object-cover"
                data-ai-hint="auto repair team video"
            />
             <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-20 group-hover:bg-opacity-10 transition-opacity rounded-md">
                <svg className="h-16 w-16 text-white opacity-75 group-hover:opacity-100 transition-opacity" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                </svg>
            </div>
          </div>
           <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
              <iframe className="w-full aspect-video" src={`${videoUrl}?rel=0&showinfo=0&controls=0&autoplay=1`} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen title={`TRAC Auto Repair SEO for ${stateName}`}></iframe>
            </Modal>
        </div>
        <p className="text-muted-foreground mt-8 mb-10 leading-relaxed">{whyChooseParagraph2.replace('[StateName]', stateName)}</p>
        <div className="grid md:grid-cols-3 gap-8 mb-10">
          {points.map((point) => (
            <div key={point.title} className="text-center p-4">
              <div className="flex justify-center mb-3">
                {iconMap[point.icon] && React.createElement(iconMap[point.icon], { className: "h-10 w-10 text-primary" })}
              </div>
              <h3 className="text-lg font-semibold mb-1 text-foreground">{point.title.replace('[StateName]', stateName)}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{point.description.replace('[StateName]', stateName)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
