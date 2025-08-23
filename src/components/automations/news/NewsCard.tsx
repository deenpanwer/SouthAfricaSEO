"use client";

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface NewsCardProps {
  news: {
    id: string;
    title: string;
    description: string;
    date: string;
    image: string;
    author: string;
    tags: string[];
  };
}

export const NewsCard = ({ news }: NewsCardProps) => {
  return (
    <motion.div
      className="bg-card rounded-lg shadow-lg border border-ph-border overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
    >
      <Link href={`/automations/news/${news.id}`}>
        <div className="relative w-full h-48">
          <Image
            src={news.image}
            alt={news.title}
            fill
            style={{ objectFit: 'cover' }}
            className="rounded-t-lg"
          />
        </div>
        <div className="p-6">
          <h3 className="text-xl font-semibold text-white mb-2 line-clamp-2">
            {news.title}
          </h3>
          <p className="text-ph-light-gray text-sm mb-4 line-clamp-3">
            {news.description}
          </p>
          <div className="flex items-center justify-between text-xs text-ph-light-gray">
            <span>By {news.author}</span>
            <span>{new Date(news.date).toLocaleDateString()}</span>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            {news.tags.map((tag) => (
              <span
                key={tag}
                className="bg-accent/20 text-accent text-xs px-2 py-1 rounded-full"
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
