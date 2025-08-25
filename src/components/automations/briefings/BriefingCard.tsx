"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { format } from 'date-fns';

interface BriefingCardProps {
  briefing: {
    id: string;
    slug: string;
    title: string;
    description: string;
    publicationDate: string;
    image: string;
    author: string;
    tags: string[];
  };
}

export const BriefingCard = ({ briefing }: BriefingCardProps) => {
  return (
    <motion.div
      className="bg-card rounded-lg shadow-lg border border-ph-border overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
    >
      <Link href={`/automations/briefings/${briefing.slug}`}>
        <div className="relative w-full h-48">
          <Image
            src={briefing.image}
            alt={briefing.title}
            fill
            style={{ objectFit: 'cover' }}
            className="rounded-t-lg"
          />
        </div>
        <div className="p-6">
          <h3 className="text-xl font-semibold text-white mb-2 line-clamp-2">
            {briefing.title}
          </h3>
          <p className="text-ph-light-gray text-sm mb-4 line-clamp-3">
            {briefing.description}
          </p>
          <div className="flex items-center justify-between text-xs text-ph-light-gray">
            <span>By {briefing.author}</span>
            <span>
              {briefing.publicationDate
                ? format(briefing.publicationDate, 'MMMM dd, yyyy')
                : ''}
            </span>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            {briefing.tags.map((tag) => (
              <span
                key={tag}
                className="bg-primary/20 text-primary text-xs px-2 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </Link>
    </motion.div>
  );
};
