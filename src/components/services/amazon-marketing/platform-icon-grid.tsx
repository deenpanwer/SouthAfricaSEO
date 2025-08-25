
// src/components/services/amazon-marketing/platform-icon-grid.tsx
import React from 'react';
import Image from 'next/image';

type PlatformIconGridProps = {
  icons: { src: string; alt: string }[];
};

export const PlatformIconGrid: React.FC<PlatformIconGridProps> = ({ icons }) => {
  return (
    <div className="grid grid-cols-3 gap-6 mt-8">
      {icons.map((icon, index) => (
        <div key={index} className="flex items-center justify-center p-1 bg-white rounded-lg shadow-sm">
          <Image src={icon.src} alt={icon.alt} width={180} height={180} objectFit="cover" />
        </div>
      ))}
    </div>
  );
};
