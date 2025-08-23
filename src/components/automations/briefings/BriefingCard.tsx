"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface BriefingCardProps {
  briefing: {
    id: string;
    title: string;
    description: string;
    date: string;
    image: string;
    category: string;
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
      <Link href={`/automations/briefings/${briefing.id}`}>
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
          <span className="text-sm font-semibold text-accent uppercase mb-2 block">
            {briefing.category}
          </span>
          <h3 className="text-xl font-semibold text-white mb-2 line-clamp-2">
            {briefing.title}
          </h3>
          <p className="text-ph-light-gray text-sm mb-4 line-clamp-3">
            {briefing.description}
          </p>
          <div className="flex items-center justify-between text-xs text-ph-light-gray">
            <span>{new Date(briefing.date).toLocaleDateString()}</span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};
