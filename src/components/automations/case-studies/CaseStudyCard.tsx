"use client";

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { format } from 'date-fns';

interface CaseStudyCardProps {
  caseStudy: {
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

export const CaseStudyCard = ({ caseStudy }: CaseStudyCardProps) => {
  return (
    <motion.div
      className="bg-card rounded-lg shadow-lg border border-ph-border overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
    >
      <Link href={`/automations/case-studies/${caseStudy.slug}`}>
        <div className="relative w-full h-48">
          <Image
            src={caseStudy.image}
            alt={caseStudy.title}
            fill
            style={{ objectFit: 'cover' }}
            className="rounded-t-lg"
          />
        </div>
        <div className="p-6">
          <h3 className="text-xl font-semibold text-white mb-2 line-clamp-2">
            {caseStudy.title}
          </h3>
          <p className="text-ph-light-gray text-sm mb-4 line-clamp-3">
            {caseStudy.description}
          </p>
          <div className="flex items-center justify-between text-xs text-ph-light-gray">
            <span>By {caseStudy.author}</span>
            <span>
              {caseStudy.publicationDate
                ? format(caseStudy.publicationDate, 'MMMM dd, yyyy')
                : ''}
            </span>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            {caseStudy.tags.map((tag) => (
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
