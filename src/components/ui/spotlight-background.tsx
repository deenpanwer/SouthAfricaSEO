
'use client';

import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface SpotlightBackgroundProps {
  children: React.ReactNode;
  spotlightColor?: string;
  spotlightSize?: number;
  fadeStrength?: number;
  className?: string;
}

export const SpotlightBackground: React.FC<SpotlightBackgroundProps> = ({
  children,
  spotlightColor = 'black',
  spotlightSize = 400,
  fadeStrength = 50,
  className,
}) => {
  const [mousePosition, setMousePosition] = useState({ x: -1000, y: -1000 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePosition({ x: event.clientX - rect.left, y: event.clientY - rect.top });
      }
    };

    const handleMouseLeave = () => {
      setMousePosition({ x: -1000, y: -1000 });
    };

    const currentRef = containerRef.current;
    currentRef?.addEventListener('mousemove', handleMouseMove);
    currentRef?.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      currentRef?.removeEventListener('mousemove', handleMouseMove);
      currentRef?.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  const spotlightStyle = {
    background: `radial-gradient(${spotlightSize}px circle at ${mousePosition.x}px ${mousePosition.y}px, transparent, ${spotlightColor} ${fadeStrength}%)`,
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        'relative w-full overflow-hidden bg-white group',
        className
      )}
    >
      <div className="absolute inset-0 bg-[url(/dotted-pattern.svg)] bg-repeat bg-center" />
      <div
        className="absolute inset-0 z-10 pointer-events-none bg-black"
        style={spotlightStyle}
      />
      <div className="relative z-20">{children}</div>
    </div>
  );
};

export default SpotlightBackground;
