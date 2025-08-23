import React from 'react';
import dynamic from 'next/dynamic';
import { HeroBanner } from '@/components/automations/HeroBanner';
import { AnimatedUseCaseCards } from '@/components/automations/AnimatedUseCaseCards';
import { SectorGrid } from '@/components/automations/SectorGrid';
import { ContentTeaserGrid } from '@/components/automations/ContentTeaserGrid';
import { MissionCTA } from '@/components/automations/MissionCTA';

const AutomationsHomePage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <HeroBanner />
      <AnimatedUseCaseCards />
      <SectorGrid />
      <ContentTeaserGrid />
      <MissionCTA />
      {/* Add more sections and components here as per the plan */}
    </div>
  );
};

export default AutomationsHomePage;
