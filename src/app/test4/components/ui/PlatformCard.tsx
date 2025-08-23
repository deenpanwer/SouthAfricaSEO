
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
    <div className="relative w-full aspect-[16/9] min-h-[60vh] md:min-h-[70vh] group bg-ph-black">
       <Image
        src={platform.imageUrl}
        alt={platform.title}
        layout="fill"
        objectFit="cover"
        className="transition-transform duration-500 ease-in-out group-hover:scale-105 opacity-50 group-hover:opacity-70"
        data-ai-hint={platform.dataAiHint}
      />
      <div className="absolute inset-0 flex items-start justify-start p-6 md:p-8">
        <div 
          className="bg-black/60 backdrop-blur-sm p-6 md:p-8 border border-ph-border/50 text-ph-white max-w-md"
        >
          <p className="text-xs uppercase tracking-widest text-ph-light-gray">{platform.category}</p>
          <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mt-2 leading-tight text-ph-white">{platform.description}</h3>
          <Link href={platform.link} className="text-sm font-semibold text-ph-accent hover:underline mt-4 inline-flex items-center group/link">
            Learn More <ArrowRight className="w-4 h-4 ml-1.5 transition-transform group-hover/link:translate-x-1" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PlatformCard;
