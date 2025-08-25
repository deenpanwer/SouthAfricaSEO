
// src/components/ui/case-study-card.tsx
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge'; // RE-ADDED shadcn Badge
import { Quote } from 'lucide-react';

// REMOVED: Chakra UI imports
// import { Tag, Stat, StatLabel, StatNumber, StatGroup } from '@chakra-ui/react';

type CaseStudyCardProps = {
  clientName: string;
  clientAvatar: string;
  industry: string;
  quote: string;
  results: string[]; // REVERTED: results type to string array
};

export const CaseStudyCard: React.FC<CaseStudyCardProps> = ({
  clientName,
  clientAvatar,
  industry,
  quote,
  results,
}) => {
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
            {/* REVERTED TO SHADCN BADGE */}
            <Badge variant="secondary" className="mt-1">{industry}</Badge>
          </div>
        </div>
      </CardHeader>
      <CardContent className="flex-grow flex flex-col justify-between">
        <blockquote className="text-lg italic border-l-2 pl-4 text-muted-foreground relative">
          <Quote className="absolute -left-2 top-0 h-6 w-6 text-primary/20 -translate-y-1/2" />
          {quote}
        </blockquote>
        {/* REVERTED TO SIMPLE P TAGS */}
        <div className="mt-4 space-y-1">
          {results.map((result, index) => (
            <p key={index} className="text-sm font-medium flex items-center">
              <span className="text-green-500 mr-2">✔</span> {result}
            </p>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
