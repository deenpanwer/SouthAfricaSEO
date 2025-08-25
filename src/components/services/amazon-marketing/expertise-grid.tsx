
// src/components/services/amazon-marketing/expertise-grid.tsx
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Award, ShieldCheck, Users, Lightbulb } from 'lucide-react'; // Example icons

type ExpertiseItem = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

type ExpertiseGridProps = {
  items: ExpertiseItem[];
};

export const ExpertiseGrid: React.FC<ExpertiseGridProps> = ({ items }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map((item, index) => (
        <Card key={index} className="h-full">
          <CardHeader>
            <div className="mb-4 text-primary">{item.icon}</div>
            <CardTitle>{item.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">{item.description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
