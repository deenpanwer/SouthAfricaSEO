
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Quote } from 'lucide-react';

type CaseStudyCardProps = {
  clientName: string;
  clientAvatar: string;
  industry: string;
  quote: string;
  results: { label: string; value: string }[];
};

export const CaseStudyCard = ({
  clientName,
  clientAvatar,
  industry,
  quote,
  results,
}: CaseStudyCardProps) => {
  return (
    <Card className="h-full flex flex-col">
      <CardHeader className="pb-2">
        <div className="flex items-center space-x-4">
          <Avatar>
            <AvatarImage src={clientAvatar} alt={clientName} />
            <AvatarFallback>{clientName.split(' ').map(n => n[0]).join('')}</AvatarFallback>
          </Avatar>
          <div>
            <CardTitle>{clientName}</CardTitle>
            {/* Replaced Chakra Tag with a simple div with Tailwind classes */}
            <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-orange-100 text-orange-800 mt-1">
              {industry}
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent className="flex-grow flex flex-col justify-between">
        <blockquote className="text-lg italic border-l-2 pl-4 text-muted-foreground relative">
          <Quote className="absolute -left-2 top-0 h-6 w-6 text-primary/20 -translate-y-1/2" />
          {quote}
        </blockquote>
        {/* Replaced StatGroup with a div with Tailwind grid classes */}
        <div className="mt-4 grid grid-cols-2 gap-4">
          {results.map((result, index) => (
            // Replaced Stat, StatLabel, StatNumber with divs and Tailwind classes
            <div key={index} className="flex flex-col">
              <div className="text-sm text-muted-foreground">{result.label}</div>
              <div className="text-2xl font-bold">{result.value}</div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
