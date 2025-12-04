import React from 'react';
import { Hero } from '@/components/all-inclusive-seo/hero';
import { LogoCloud } from '@/components/all-inclusive-seo/logo-cloud';
import { AllInclusiveFeatures } from '@/components/all-inclusive-seo/AllInclusiveFeatures';
import ProblemAgitation from '@/components/all-inclusive-seo/problem-agitation';
import SolutionSection from '@/components/all-inclusive-seo/solution-section';
import HowItWorksSection from '@/components/all-inclusive-seo/how-it-works-section'; // New import
import CoreFeaturesSection from '@/components/all-inclusive-seo/CoreFeaturesSection';
import PricingSection from '@/components/all-inclusive-seo/PricingSection';
import ROICalculator from '@/components/all-inclusive-seo/ROICalculator';
import ComparisonTable from '@/components/all-inclusive-seo/ComparisonTable';
import GrowthRoadmap from '@/components/all-inclusive-seo/GrowthRoadmap';
import CallToActionSection from '@/components/all-inclusive-seo/CallToActionSection';
import TestimonialSection from '@/components/all-inclusive-seo/TestimonialSection';
import ExitIntentModal from '@/components/all-inclusive-seo/ExitIntentModal';

const AllInclusiveSeoPage = () => {
  return (
    <main className="min-h-screen w-full flex-col bg-white overflow-x-hidden">
      <Hero />
      <LogoCloud className="py-12 px-4 sm:px-8 lg:px-16" />
      {/* <AllInclusiveFeatures /> work on it add back in the future to show all the things given in package */}
      <ProblemAgitation />
      <SolutionSection /> {/* New component */}
      <HowItWorksSection /> {/* New component */}
      <CoreFeaturesSection /> {/* Core Features Section */}
      <PricingSection /> {/* Pricing Section */}
      <ComparisonTable /> {/* Comparison Table Section */}
      <ROICalculator /> {/* ROI Calculator Section */}
      <GrowthRoadmap /> {/* Growth Roadmap Section */}
      <CallToActionSection /> {/* Call To Action Section */}
      <TestimonialSection /> {/* Testimonial Section */}
      <ExitIntentModal /> {/* Exit-Intent Modal */}
      {/* The rest of the components will be added here */}
    </main>
  );
};

export default AllInclusiveSeoPage;