
'use client';
import { motion } from 'framer-motion';
import type { AiSeoProcessStep } from '@/types/aiSeo';

interface AiSeoProcessVisualProps {
  headline: string;
  steps: AiSeoProcessStep[];
}

export function AiSeoProcessVisual({ headline, steps }: AiSeoProcessVisualProps) {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-16">{headline}</h2>
        <div className="relative max-w-2xl mx-auto">
          <div className="absolute left-1/2 -translate-x-1/2 h-full w-0.5 bg-border" aria-hidden="true" />
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
            className="space-y-16"
          >
            {steps.map((step, index) => {
              const isOdd = index % 2 !== 0;
              const itemVariants = {
                hidden: { opacity: 0, x: isOdd ? 50 : -50 },
                visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
              };

              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className={`flex items-center w-full ${isOdd ? 'md:flex-row-reverse' : ''}`}
                >
                  <div className="w-1/2 md:px-8">
                    <div className={`bg-card p-6 rounded-lg shadow-lg border border-border ${isOdd ? 'md:text-left' : 'md:text-right'}`}>
                      <h3 className="text-xl font-bold text-primary mb-2">{step.title}</h3>
                      <p className="text-muted-foreground">{step.description}</p>
                    </div>
                  </div>
                  <div className="absolute left-1/2 -translate-x-1/2 w-8 h-8 bg-primary rounded-full border-4 border-background flex items-center justify-center font-bold text-primary-foreground">
                    {index + 1}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
