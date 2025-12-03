// src/components/ui/AnimatedNumber.tsx
"use client";

import { motion, useSpring, useTransform } from "framer-motion";
import React from "react";

interface AnimatedNumberProps {
  value: number;
  direction?: "up" | "down";
  speed?: number; // Not directly used by Framer Motion's useSpring for this effect, but kept for interface consistency
  decimals?: number;
  prefix?: string;
  suffix?: string;
}

export function AnimatedNumber({
  value,
  decimals = 0,
  prefix = "",
  suffix = "",
}: AnimatedNumberProps) {
  const spring = useSpring(0, { mass: 1, stiffness: 200, damping: 20 });
  const display = useTransform(spring, (current) => {
    // Format the number with locale-specific thousands separators and specified decimals
    const formattedNumber = current.toLocaleString('en-US', {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals,
      useGrouping: true, // Ensure thousands separators are used
    });
    return `${prefix}${formattedNumber}${suffix}`;
  });

  React.useEffect(() => {
    spring.set(value);
  }, [spring, value]);

  return <motion.span>{display}</motion.span>;
}