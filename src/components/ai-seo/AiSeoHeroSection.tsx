
'use client';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import Link from 'next/link';
import type { AiSeoHeroData } from '@/types/aiSeo';

interface AiSeoHeroSectionProps {
  cityName: string;
  heroData: AiSeoHeroData;
}

export function AiSeoHeroSection({ cityName, heroData }: AiSeoHeroSectionProps) {
  return (
    <section className="relative bg-gray-900 text-white py-20 md:py-32 text-center overflow-hidden">
      <div className="absolute inset-0 bg-grid-slate-800 [mask-image:linear-gradient(to_bottom,white_10%,transparent_90%)]"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-extrabold !leading-tight mb-6"
        >
          {heroData.heroTitle.replace('[CityName]', cityName)}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg sm:text-xl text-gray-300 mb-8 max-w-3xl mx-auto"
        >
          {heroData.heroSubtitle.replace('[CityName]', cityName)}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Button size="lg" asChild>
            <Link href="/contact?service=ai-seo">Get Your Free AI Analysis</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
