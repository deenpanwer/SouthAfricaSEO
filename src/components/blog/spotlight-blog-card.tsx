
'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface SpotlightBlogCardProps {
  title: string;
  excerpt: string;
  image: string;
  slug: string;
  className?: string;
}

export const SpotlightBlogCard: React.FC<SpotlightBlogCardProps> = ({
  title,
  excerpt,
  image,
  slug,
  className,
}) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className={cn(
        'bg-gray-200 border border-gray-300 rounded-lg overflow-hidden shadow-lg transition-all duration-300',
        className
      )}
    >
      <Link href={`/blog/${slug}`}>
        <div className="relative h-48 w-full">
          {image && typeof image === 'string' && image.trim() !== '' ? (
            <Image
              src={image}
              alt={title}
              layout="fill"
              objectFit="cover"
              className="group-hover:scale-105 transition-transform duration-300"
            />
          ) : (
            <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-500">No Image</div>
          )}
        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold text-black mb-2">{title}</h3>
          <p className="text-gray-800 text-sm">{excerpt}</p>
        </div>
      </Link>
    </motion.div>
  );
};

export default SpotlightBlogCard;
