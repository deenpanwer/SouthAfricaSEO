
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

type StatCardProps = {
  title: string;
  value: string;
  progress: number;
  icon?: React.ReactNode;
};

export const StatCard: React.FC<StatCardProps> = ({ title, value, progress, icon }) => {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        {icon}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        <p className="text-xs text-muted-foreground">Based on historical client data.</p>
        <Progress value={progress} className="mt-2" />
      </CardContent>
    </Card>
  );
};
