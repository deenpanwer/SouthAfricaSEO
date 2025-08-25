
// src/components/services/amazon-marketing/amazon-metric-display.tsx
import React from 'react';
import { Stat, StatLabel, StatNumber, StatGroup } from '@chakra-ui/react'; // Using Chakra UI Stat
import { Card, CardContent } from '@/components/ui/card'; // Using shadcn Card

type AmazonMetricDisplayProps = {
  metrics: { label: string; value: string }[];
};

export const AmazonMetricDisplay: React.FC<AmazonMetricDisplayProps> = ({ metrics }) => {
  return (
    <Card className="p-6">
      <CardContent className="p-0">
        <StatGroup className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {metrics.map((metric, index) => (
            <Stat key={index} className="text-center">
              <StatLabel fontSize="md" color="gray.500">{metric.label}</StatLabel>
              <StatNumber fontSize="3xl" fontWeight="bold">{metric.value}</StatNumber>
            </Stat>
          ))}
        </StatGroup>
      </CardContent>
    </Card>
  );
};
