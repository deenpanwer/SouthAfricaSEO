// src/components/ui/AnimatedCheck.tsx
"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

interface AnimatedCheckProps {
  className?: string;
}

export const AnimatedCheck: React.FC<AnimatedCheckProps> = ({ className }) => {
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
      className={className}
    >
      <Check className="h-5 w-5 text-green-500" />
    </motion.div>
  );
};
