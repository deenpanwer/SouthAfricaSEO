"use client";

import React, { Suspense, useRef } from 'react';
// import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Linkedin, Twitter } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';

// const DynamicCityTeamScene = dynamic(() => import('./CityTeamScene'), { ssr: false });
import CityTeamPlain3D from './CityTeamPlain3D';

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

const teamMember = {
  name: "Jane Doe",
  title: "Lead SEO Strategist",
  imageUrl: "/home/marci-wiersma.webp", // Using an existing image as a placeholder
  bio: "Jane is a certified SEO expert with over 8 years of experience helping businesses in [CityName] climb the search rankings. She is passionate about data-driven strategies and building sustainable growth for her clients. When she's not analyzing SERPs, she enjoys hiking near [CityName] and exploring local coffee shops.",
  linkedin: "#",
  twitter: "#",
};

interface CityTeamProps {
    cityName: string;
}

export function CityTeam({ cityName }: CityTeamProps) {
  return (
    <section className="relative py-12 md:py-20 bg-gray-900 text-white overflow-hidden">
      <div className="absolute inset-0 z-0">
        <CityTeamPlain3D />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            Meet Your <span className="text-orange-500">{cityName}</span> Growth Expert
          </h2>
          <p className="mt-4 text-lg text-gray-400 max-w-3xl mx-auto">
            The mind behind your success. A dedicated strategist to elevate your local presence.
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
                            <motion.div className="filter grayscale hover:filter-none transition-all duration-500">
                                <Image
                                    src={teamMember.imageUrl}
                                    alt={teamMember.name}
                                    layout="fill"
                                    objectFit="cover"
                                />
                            </motion.div>
                        </div>
                        <h3 className="mt-6 text-2xl font-bold text-white">{teamMember.name}</h3>
                        <p className="text-orange-400">{teamMember.title}</p>
                    </motion.div>
                </DialogTrigger>
                <DialogContent className="bg-gray-800 text-white border-gray-700">
                    <DialogHeader>
                        <DialogTitle className="text-2xl text-orange-500">{
                            teamMember.name
                        } - <span className='text-white'>{teamMember.title}</span></DialogTitle>
                    </DialogHeader>
                    <div className="mt-4">
                        <p className="text-gray-300">{teamMember.bio.replace(/\[CityName\]/g, cityName)}</p>
                        <div className="mt-6 flex justify-center space-x-4">
                            <a href={teamMember.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-orange-500">
                                <Linkedin size={24} />
                            </a>
                            <a href={teamMember.twitter} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-orange-500">
                                <Twitter size={24} />
                            </a>
                        </div>
                    </div>
                </DialogContent>
            </Dialog>
        </div>
      </div>
    </section>
  );
}
