
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface Platform {
  category: string;
  title: string;
  description: string;
  imageUrl: string;
  dataAiHint: string;
  link: string;
}

interface PlatformCardProps {
  platform: Platform;
}

const PlatformCard: React.FC<PlatformCardProps> = ({ platform }) => {
  return (
    <div className="relative w-full aspect-[16/9] min-h-[60vh] md:min-h-[70vh] rounded-lg overflow-hidden text-ph-white group">
      <Image
        src={platform.imageUrl}
        alt={platform.title}
        layout="fill"
        objectFit="cover"
        className="transition-transform duration-500 ease-in-out group-hover:scale-105"
        data-ai-hint={platform.dataAiHint}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
      
      <div className="absolute top-0 left-0 p-8">
        <div 
          className="bg-black/40 backdrop-blur-md p-6 rounded-xl border border-white/10 shadow-lg"
        >
          <p className="text-xs uppercase tracking-widest text-ph-light-gray">{platform.category}</p>
          <h3 className="text-2xl md:text-3xl font-bold mt-1 max-w-md">{platform.description}</h3>
          <Link href={platform.link} className="text-sm text-ph-accent hover:underline mt-4 inline-flex items-center">
            Learn More <ArrowRight className="w-4 h-4 ml-1" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PlatformCard;
