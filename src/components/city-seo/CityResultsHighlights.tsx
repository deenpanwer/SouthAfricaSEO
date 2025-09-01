
"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import type { Testimonial } from '@/types';
import { Star } from 'lucide-react';

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

interface CityResultsHighlightsProps {
  headline: string;
}

export const cityTestimonials: Testimonial[] = [
  { id: '1', name: "Marci Wiersma", company: "Broker – About Roatan Real Estate", quote: "Trac is a much-needed blessing and exceeded our expectations in every way. They are honest, straightforward, they take care of ALL your needs quickly, they are reliable, you can count on them and most of all, they do everything they say they will do, no BS.", highlightedQuote: "They do everything they say...no BS", avatarUrl: "/home/marci-wiersma.webp", dataAiHint: "Marci Wiersma photo", rating: 5 },
  { id: '2', name: "Whitney Wells Lewis", company: "Practice Manager – PARC Urology", quote: "These guys are incredible. They've helped us to grow our business and now the biggest problem we seem to come across is having too much business - which is the ideal problem to have. We are right where we wanted to be and Trac made that possible. Thanks guys!", highlightedQuote: "These guys are incredible", avatarUrl: "/home/whitney-wells-lewis.webp", dataAiHint: "Whitney Wells Lewis photo", rating: 5 },
  { id: '3', name: "Chad Montgomery", company: "CEO – Accurate Leak and Line", quote: "Working with the Trac team has been a most pleasant experience! Their dedication and passion for what they do is exemplified by their unrivaled customer support and attentiveness to the specific needs of our business. We look forward to a long-lasting and prosperous relationship!", highlightedQuote: "Unrivaled customer support", avatarUrl: "/home/chad-montgomery.webp", dataAiHint: "Chad Montgomery photo", rating: 5 },
];

export function CityResultsHighlights({ headline }: CityResultsHighlightsProps) {
  const [isModalOpen1, setIsModalOpen1] = useState(false);
  const [isModalOpen2, setIsModalOpen2] = useState(false);

  return (
    <section className="py-12 md:py-16 bg-white text-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-10">{headline}</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {/* First Client Block */}
          <div className="border border-gray-200 rounded-lg shadow-md overflow-hidden">
            <div className="relative aspect-[16/7] cursor-pointer group" onClick={() => setIsModalOpen1(true)}>
              <Image
                src="/home/Client-Farah-Law-Firm.webp"
              alt="A law firm's case results, including a 664% increase in qualified leads and a 360% increase in conversion rate."
                layout="fill"
                objectFit="cover"
                data-ai-hint="business results graph"
              />
              <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-10 flex items-center justify-center transition-opacity">
              </div>
            </div>
            <Modal isOpen={isModalOpen1} onClose={() => setIsModalOpen1(false)}>
              <iframe
                className="w-full aspect-video"
                src="https://www.youtube.com/embed/--5lHRSfLZg?rel=0&showinfo=0&autoplay=1"
                frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen>
              </iframe>
            </Modal>
            <div className="bg-yellow-800 p-3">
              <h3 className="font-semibold text-gray-800 text-center text-sm">"The results speak for themselves"</h3>
            </div>
            <div className="p-6 grid grid-cols-2 gap-4 text-center">
              <div>
                <p className="text-4xl font-bold text-green-600">+664%</p>
                <p className="text-sm text-gray-600 uppercase">CLIENT LEADS</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-green-600">+360%</p>
                <p className="text-sm text-gray-600 uppercase">CONVERSION RATE</p>
              </div>
            </div>
          </div>

          {/* Second Client Block */}
          <div className="border border-gray-200 rounded-lg shadow-md overflow-hidden">
            <div className="relative aspect-[16/7] cursor-pointer group" onClick={() => setIsModalOpen2(true)}>
              <Image
               src="/home/Client-Natiowide-Construction.webp"
              alt="A construction firm's case results, including an 800% increase in client leads and a 22-point increase in domain authority."
                layout="fill"
                objectFit="cover"
                data-ai-hint="marketing success chart"
              />
              <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-10 flex items-center justify-center transition-opacity">
              </div>
            </div>
            <Modal isOpen={isModalOpen2} onClose={() => setIsModalOpen2(false)}>
              <iframe
                className="w-full aspect-video"
                src="https://www.youtube.com/embed/0cWlf1BmUMw?rel=0&showinfo=0&autoplay=1"
                frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
            </Modal>
            <div className="bg-yellow-800 p-3">
              <h3 className="font-semibold text-gray-800 text-center text-sm">"TRAC goes above and beyond"</h3>
            </div>
            <div className="p-6 grid grid-cols-2 gap-4 text-center">
              <div>
                <p className="text-4xl font-bold text-green-600">+800%</p>
                <p className="text-sm text-gray-600 uppercase">CLIENT LEADS</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-green-600">+640%</p>
                <p className="text-sm text-gray-600 uppercase">CONVERSION RATE</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <Link href="/case-studies">
            <button className="bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600 transition duration-300">
              View All Case Studies
            </button>
          </Link>
        </div>

        {/* Testimonials Section (Integrated from CityPageTestimonials.tsx) */}
        <div className="mt-16 pt-16 border-t border-gray-200">
          <h2 className="text-3xl font-bold text-center mb-2">But Don’t Take Our Word For It</h2>
          <p className="text-center text-gray-600 mb-10 max-w-xl mx-auto">
            Hear directly from clients who have experienced growth with TRAC.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {cityTestimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white p-6 rounded-lg shadow-md text-center">
                <Image
                  src={testimonial.avatarUrl}
                  alt={testimonial.name}
                  width={80}
                  height={80}
                  className="rounded-full mx-auto mb-4 border-2 border-yellow-400"
                  data-ai-hint={testimonial.dataAiHint || "client photo"}
                />
                <h3 className="font-semibold text-lg mb-0.5">{testimonial.name}</h3>
                <p className="text-xs text-gray-500 mb-3">{testimonial.company}</p>
                <div className="flex justify-center mb-3">
                  {[...Array(testimonial.rating || 5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <div className="bg-yellow-800 p-2 rounded-md mb-3">
                  <p className="text-gray-800 italic font-semibold text-sm">"{testimonial.highlightedQuote}"</p>
                </div>
                <blockquote className="text-gray-600 italic text-sm leading-relaxed mb-3">
                  "{testimonial.quote}"
                </blockquote>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
