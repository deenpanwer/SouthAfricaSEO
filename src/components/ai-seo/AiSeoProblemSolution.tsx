
'use client';
import { motion } from 'framer-motion';
import { AlertTriangle, CheckCircle } from 'lucide-react';
import type { AiSeoProblemSolutionItem } from '@/types/aiSeo';

interface AiSeoProblemSolutionProps {
  headline: string;
  items: AiSeoProblemSolutionItem[];
}

export function AiSeoProblemSolution({ headline, items }: AiSeoProblemSolutionProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">{headline}</h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {items.map((item, index) => (
            <motion.div key={index} variants={itemVariants} className="space-y-4">
              <div className="bg-destructive/10 border border-destructive/20 p-6 rounded-lg">
                <div className="flex items-start gap-4">
                  <AlertTriangle className="h-6 w-6 text-destructive flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-destructive mb-1">The Problem</h3>
                    <p className="text-muted-foreground">{item.problem}</p>
                  </div>
                </div>
              </div>
              <div className="bg-primary/10 border border-primary/20 p-6 rounded-lg">
                <div className="flex items-start gap-4">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-primary mb-1">The AI Solution</h3>
                    <p className="text-muted-foreground">{item.solution}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
