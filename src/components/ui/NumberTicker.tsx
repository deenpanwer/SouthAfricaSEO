'use client';

import { motion, useInView, useSpring, useTransform, useMotionValue } from 'framer-motion';
import { useEffect, useRef } from 'react';

function NumberTicker({ value }: { value: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  const numericValueMatch = value.match(/(\d+(\.\d+)?)/);
  const numericValue = numericValueMatch ? parseFloat(numericValueMatch[0]) : 0;
  
  const prefix = value.substring(0, value.indexOf(numericValueMatch ? numericValueMatch[0] : ''));
  const suffix = value.substring(value.indexOf(numericValueMatch ? numericValueMatch[0] : '') + (numericValueMatch ? numericValueMatch[0].length : 0));


  const motionValue = useMotionValue(inView ? 0 : numericValue);
  const springValue = useSpring(motionValue, {
    damping: 100,
    stiffness: 100,
  });

  useEffect(() => {
    if (inView) {
      motionValue.set(numericValue);
    }
  }, [motionValue, numericValue, inView]);

  const displayValue = useTransform(springValue, (v: number) => {
    if (value.includes('.')) {
      return v.toFixed(1);
    }
    return Math.round(v).toLocaleString();
  });

  return (
    <span ref={ref}>
      {prefix}
      <motion.span>{displayValue}</motion.span>
      {suffix}
    </span>
  );
}
export { NumberTicker };
