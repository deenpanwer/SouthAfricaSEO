"use client";

import React, { Suspense } from 'react';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import Image from 'next/image';
import type { LucideIcon } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';

const FOUNDER_DETAILS = {
  name: "Kaayf",
  title: "Founder & CEO",
  imageUrl: "/trac_logo.jpeg" // Test path
};

const CityTeamPlain3D = dynamic(() => import('./CityTeamPlain3D'), {
  ssr: false,
  loading: () => (
    <div className="absolute inset-0 bg-gray-900 animate-pulse" /> // Pulsing fallback
  ),
});

/*
// A simple shader for the background
function Particles() {
  const meshRef = useRef<any>();

  const particleCount = 5000;
  const positions = new Float32Array(particleCount * 3);

  for (let i = 0; i < particleCount; i++) {
    positions[i * 3 + 0] = (Math.random() - 0.5) * 10;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 10;
  }

  useFrame((state, delta) => {
    if (meshRef.current) {
        meshRef.current.rotation.x += delta * 0.05;
        meshRef.current.rotation.y += delta * 0.05;
    }
  });

  return (
    <points ref={meshRef}>
      <bufferGeometry attach="geometry">
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial attach="material" size={0.005} color="#888888" />
    </points>
  );
}
*/

interface CityTeamProps {
    cityName: string;
    teamSectionHeadline: string;
    teamSectionDescription: string;
    founderBio: string;
}

export function CityTeam({
    cityName,
    teamSectionHeadline,
    teamSectionDescription,
    founderBio,
}: CityTeamProps) {
  return (
    <section className="relative py-12 md:py-20 bg-gray-900 text-white overflow-hidden">
      <div className="absolute inset-0 z-0">
        <CityTeamPlain3D />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            {teamSectionHeadline.replace('[CityName]', cityName)}
          </h2>
          <p className="mt-4 text-lg text-gray-400 max-w-3xl mx-auto">
            {teamSectionDescription}
          </p>
        </div>

        <div className="flex justify-center">
            <Dialog>
                <DialogTrigger asChild>
                    <motion.div
                        whileHover={{ scale: 1.05, y: -10 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                        className="cursor-pointer text-center"
                    >
                        <div className="relative w-48 h-48 mx-auto rounded-full overflow-hidden border-4 border-gray-700 shadow-lg">
                            <Image
                                src={FOUNDER_DETAILS.imageUrl}
                                alt={FOUNDER_DETAILS.name}
                                layout="fill"
                                objectFit="cover"
                                className="filter grayscale hover:filter-none transition-all duration-500"
                            />
                        </div>
                        <h3 className="mt-6 text-2xl font-bold text-white">{FOUNDER_DETAILS.name}</h3>
                        <p className="text-orange-400">{FOUNDER_DETAILS.title}</p>
                    </motion.div>
                </DialogTrigger>
                <DialogContent className="bg-gray-800 text-white border-gray-700">
                    <DialogHeader>
                        <DialogTitle className="text-2xl text-orange-500">{
                            FOUNDER_DETAILS.name
                        } - <span className='text-white'>{FOUNDER_DETAILS.title}</span></DialogTitle>
                    </DialogHeader>
                    <div className="mt-4">
                        <p className="text-gray-300">{founderBio}</p>
                    </div>
                </DialogContent>
            </Dialog>
        </div>
      </div>
    </section>
  );
}
