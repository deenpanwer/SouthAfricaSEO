
'use client';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BrainCircuit, FileText, Link, Gauge, ShieldCheck, LineChart, LucideIcon } from 'lucide-react';
import type { AiSeoServiceItem } from '@/types/aiSeo';

const iconMap: { [key: string]: LucideIcon } = {
  BrainCircuit,
  FileText,
  Link,
  Gauge,
  ShieldCheck,
  LineChart,
};

interface AiSeoServiceGridProps {
  headline: string;
  items: AiSeoServiceItem[];
}

export function AiSeoServiceGrid({ headline, items }: AiSeoServiceGridProps) {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">{headline}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((service, index) => {
            const Icon = iconMap[service.icon];
            return (
              <Card key={index} className="flex flex-col text-center items-center shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  {Icon && <Icon className="h-10 w-10 text-primary mx-auto mb-4" />}
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
