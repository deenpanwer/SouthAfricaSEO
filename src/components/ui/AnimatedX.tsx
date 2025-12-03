// src/components/ui/AnimatedX.tsx
"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';

interface AnimatedXProps {
  className?: string;
}

export const AnimatedX: React.FC<AnimatedXProps> = ({ className }) => {
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
      className={className}
    >
      <X className="h-5 w-5 text-red-500" />
    </motion.div>
  );
};
