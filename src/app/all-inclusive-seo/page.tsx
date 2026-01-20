"use client";

import React, { useState } from 'react';
import { Hero } from '@/components/all-inclusive-seo/hero';
import { LogoCloud } from '@/components/all-inclusive-seo/logo-cloud';
import { AllInclusiveFeatures } from '@/components/all-inclusive-seo/AllInclusiveFeatures';
import ProblemAgitation from '@/components/all-inclusive-seo/problem-agitation';
import SolutionSection from '@/components/all-inclusive-seo/solution-section';
import HowItWorksSection from '@/components/all-inclusive-seo/how-it-works-section';
import CoreFeaturesSection from '@/components/all-inclusive-seo/CoreFeaturesSection';
import PricingSection from '@/components/all-inclusive-seo/PricingSection';
import ROICalculator from '@/components/all-inclusive-seo/ROICalculator';
import ComparisonTable from '@/components/all-inclusive-seo/ComparisonTable';
import GrowthRoadmap from '@/components/all-inclusive-seo/GrowthRoadmap';
import CallToActionSection from '@/components/all-inclusive-seo/CallToActionSection';
import TestimonialSection from '@/components/all-inclusive-seo/TestimonialSection';
import ExitIntentModal from '@/components/all-inclusive-seo/ExitIntentModal';
import { CalendlyModal } from '@/components/all-inclusive-seo/CalendlyModal';

const AllInclusiveSeoPage = () => {
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);

  const handleFormSuccess = () => {
    setIsCalendlyOpen(true);
  };

  return (
    <main className="min-h-screen w-full flex-col bg-white overflow-x-hidden">
      {/* Google tag (gtag.js) */}
      <script async src="https://www.googletagmanager.com/gtag/js?id=AW-17668221650"></script>
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17668221650');
          `,
        }}
      />
      <Hero onFormSuccess={handleFormSuccess} />
      <LogoCloud className="py-12 px-4 sm:px-8 lg:px-16" />
      {/* <AllInclusiveFeatures /> work on it add back in the future to show all the things given in package */}
      <ProblemAgitation />
      <SolutionSection />
      <HowItWorksSection />
      <CoreFeaturesSection />
      <PricingSection />
      <ComparisonTable />
      <ROICalculator />
      <GrowthRoadmap />
      <CallToActionSection onFormSuccess={handleFormSuccess} />
      <TestimonialSection />
      <ExitIntentModal onFormSuccess={handleFormSuccess} />
      <CalendlyModal
        isOpen={isCalendlyOpen}
        onOpenChange={setIsCalendlyOpen}
      />
    </main>
  );
};

export default AllInclusiveSeoPage;