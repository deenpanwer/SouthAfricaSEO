
'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { STATS_DATA, APP_NAME } from '@/lib/constants.tsx';
import { motion, useMotionValue, useSpring, useInView, useTransform } from 'framer-motion';
import { useEffect, useRef } from 'react';
import type { StatItem } from '@/types';

function NumberTicker({ value }: { value: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  const numericValueMatch = value.match(/\d+(\.\d+)?/);
  const numericValue = numericValueMatch ? parseFloat(numericValueMatch[0]) : 0;
  const nonNumericSuffix = value.replace(/\d+(\.\d+)?/, '');

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { damping: 100, stiffness: 1000 });

  useEffect(() => {
    if (inView) {
      motionValue.set(numericValue);
    }
  }, [motionValue, numericValue, inView]);

  const displayValue = useTransform(springValue, (v: number) => {
    // Check if the original value string contained a decimal
    if (value.includes('.')) {
      return `${v.toFixed(1)}${nonNumericSuffix}`;
    }
    return `${Math.round(v)}${nonNumericSuffix}`;
  });
  return <motion.span ref={ref}>{displayValue}</motion.span>;
}
export function StatsSection() {
  if (!STATS_DATA || STATS_DATA.length === 0) {
    return null;
  }

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            {APP_NAME} by the Numbers
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Our track record speaks for itself. We deliver tangible results that drive growth.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
          {STATS_DATA.map((stat: StatItem, index: number) => (
            <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
              <CardHeader className="pb-2">
                <stat.icon className="h-10 w-10 text-primary mx-auto mb-3" />
                <CardTitle className="text-3xl md:text-4xl font-bold text-primary">
 <NumberTicker value={stat.value} />
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm md:text-base text-muted-foreground font-medium">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
