
'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
  link: string;
  useNextImage?: boolean; // This prop is no longer used but kept for compatibility if needed elsewhere.
}

const Card: React.FC<CardProps> = ({ title, description, imageUrl, link }) => {
  return (
    <motion.div
      className="bg-ph-dark-gray rounded-lg overflow-hidden shadow-lg h-full flex flex-col group"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
    >
      <Link href={link} className="block">
        <div className="relative w-full aspect-video">
          <Image
            src={imageUrl}
            alt={title}
            layout="fill"
            objectFit="cover"
            className="group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold mb-2 group-hover:text-ph-accent transition-colors">{title}</h3>
          <p className="text-ph-light-gray text-sm line-clamp-3">{description}</p>
        </div>
      </Link>
    </motion.div>
  );
};

export default Card;
