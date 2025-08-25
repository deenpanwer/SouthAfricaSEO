import React from 'react';
import { JobBoard } from '@/components/automations/careers/JobBoard';
import { CultureQuoteSlider } from '@/components/automations/careers/CultureQuoteSlider';
import { PerkMatrix } from '@/components/automations/careers/PerkMatrix';
import { TimelineOfImpact } from '@/components/automations/careers/TimelineOfImpact';

const CareersPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <h1 className="text-5xl font-bold text-center text-white mb-12">
          Join Our Ethical AI Mission
        </h1>
        <p className="text-lg text-ph-light-gray text-center mb-16">
          Be a part of something bigger. At TRAC, you'll contribute to national transformation through cutting-edge, ethical AI research and development.
        </p>

        <JobBoard />

        <CultureQuoteSlider />
        <PerkMatrix />
        <TimelineOfImpact />
      </div>
    </div>
  );
};

export default CareersPage;
