
'use client';
import { Server, BrainCircuit, Database } from 'lucide-react';
import type { AiSeoTechnology } from '@/types/aiSeo';

interface AiSeoTechnologyShowcaseProps {
  headline: string;
  items: AiSeoTechnology[];
}

export function AiSeoTechnologyShowcase({ headline, items }: AiSeoTechnologyShowcaseProps) {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">{headline}</h2>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((tech, index) => (
            <div key={index} className="text-center p-6 bg-card rounded-lg shadow-md border border-border">
              <div className="flex justify-center mb-4">
                <div className="bg-primary/10 p-4 rounded-full">
                  <BrainCircuit className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">{tech.name}</h3>
              <p className="text-muted-foreground">{tech.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
