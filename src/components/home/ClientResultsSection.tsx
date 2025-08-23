"use client";

import Image from "next/image";
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { useState } from 'react';
import { Button } from "../ui/button";
import clientFarahLawFirm from '../../../public/home/Client-Farah-Law-Firm.webp';
import clientNationwideConstruction from '../../../public/home/Client-Natiowide-Construction.webp';

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


export const ClientResultsSection = () => {
  const [isModalOpen1, setIsModalOpen1] = useState(false);
  const [isModalOpen2, setIsModalOpen2] = useState(false);


  return (
  <section className="py-16 lg:py-24 bg-white">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">Our Clients Get Real Results</h2>
      <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
       Trac is a full-service SEO company. We provide a wide array of services to clients of all industries. Our services include consulting and management for a variety of tactics including SEO, PPC, copywriting, and CRO. We also offer expert web design and development. Don’t just partner with any agency; work with a company you can trust.
      </p>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="border border-gray-200 rounded-lg shadow-lg overflow-hidden">
          <div className="cursor-pointer" onClick={() => setIsModalOpen1(true)}>
            <Image
              src={clientFarahLawFirm}
              alt="A law firm's case results, including a 664% increase in qualified leads and a 360% increase in conversion rate."
              width={600}
              height={300}
              className="w-full"
              data-ai-hint="Client testimonial image 1"
            />
          </div>
          <Modal isOpen={isModalOpen1} onClose={() => setIsModalOpen1(false)}>
            <iframe
              className="w-full aspect-video"
              src="https://www.youtube.com/embed/--5lHRSfLZg?rel=0&showinfo=0&autoplay=1"
              frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
          </Modal>
          <div className="bg-yellow-400 p-4">
            <h3 className="font-semibold text-gray-800">"The results speak for themselves"</h3>
          </div>
          <div className="p-6 grid grid-cols-2 gap-4">
            <div>
              <p className="text-4xl font-bold text-green-600">+664%</p>
              <p className="text-sm text-gray-500">QUALIFIED LEADS</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-green-600">+360%</p>
              <p className="text-sm text-gray-500">CONVERSION RATE</p>
            </div>
          </div>
          <div className="p-6 border-t border-gray-200">
            <p className="text-sm text-gray-600 mb-2">B2B LAW FIRM SEES EXPONENTIAL GROWTH IN CASE INQUIRIES.</p>
            <Link href="/case-studies/the-farah-law-firm" className="text-sm font-semibold text-orange-500 hover:text-orange-600">View Full Case Study <ChevronRight className="inline w-4 h-4" /></Link>
          </div>
        </div>
        <div className="border border-gray-200 rounded-lg shadow-lg overflow-hidden">
           <div className="cursor-pointer" onClick={() => setIsModalOpen2(true)}>
            <Image
              src="/home/Client-Natiowide-Construction.webp"
              alt="A construction firm's case results, including an 800% increase in client leads and a 22-point increase in domain authority."
              width={600}
              height={300}
              className="w-full"
              data-ai-hint="Client testimonial image 2"
            />
          </div>
           <Modal isOpen={isModalOpen2} onClose={() => setIsModalOpen2(false)}>
            <iframe
              className="w-full aspect-video"
              src="https://www.youtube.com/embed/0cWlf1BmUMw?rel=0&showinfo=0&autoplay=1"
              frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
          </Modal>
          <div className="bg-yellow-400 p-4">
            <h3 className="font-semibold text-gray-800">"TRAC goes above and beyond"</h3>
          </div>
          <div className="p-6 grid grid-cols-2 gap-4">
            <div>
              <p className="text-4xl font-bold text-green-600">+800%</p>
              <p className="text-sm text-gray-500">CLIENT LEADS</p>
            </div>
            <div>
               <p className="text-4xl font-bold text-green-600">+22</p>
              <p className="text-sm text-gray-500">DOMAIN AUTHORITY</p>
            </div>
          </div>
          <div className="p-6 border-t border-gray-200">
            <p className="text-sm text-gray-600 mb-2">CONSTRUCTION FIRM BUILDS DOMINANT LOCAL PRESENCE.</p>
            <Link href="/case-studies/nationwide-construction" className="text-sm font-semibold text-orange-500 hover:text-orange-600">View Full Case Study <ChevronRight className="inline w-4 h-4" /></Link>
          </div>
        </div>
      </div>
      <div className="text-center mt-12">
        <Button asChild className="bg-orange-500 text-white font-semibold py-3 px-8 rounded-md hover:bg-orange-600 transition-colors text-lg">
          <Link href="/contact">WORK WITH A TRUSTED SEO COMPANY</Link>
        </Button>
      </div>
    </div>
  </section>
  );
};
