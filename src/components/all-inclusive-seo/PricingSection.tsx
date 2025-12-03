// src/components/all-inclusive-seo/PricingSection.tsx
import React from 'react';
import { PricingModule, PricingPlan } from '@/components/ui/pricing-module';
import { Check } from 'lucide-react';

const pricingPlans: PricingPlan[] = [
  {
    id: 'basic',
    name: 'Basic Plan',
    description: 'Perfect for small businesses starting with SEO.',
    icon: <Check className="h-6 w-6 text-[#CD7F32]" />, // Bronze
    priceMonthly: 300,
    priceYearly: 300 * 12, // Calculate yearly
    users: '1 domain full SEO',
    features: [
      { label: 'Automated Keyword Tracking', included: true, tickColorClass: 'text-[#CD7F32]' },
      { label: 'Basic AI Content Briefs', included: true, tickColorClass: 'text-[#CD7F32]' },
      { label: 'On-Page Optimization', included: true, tickColorClass: 'text-[#CD7F32]' },
      { label: 'Automated Backlink Monitoring', included: true, tickColorClass: 'text-[#CD7F32]' },
      { label: 'Real-time Reporting Dashboard', included: true, tickColorClass: 'text-[#CD7F32]' },
      { label: 'Competitor Analysis', included: true, tickColorClass: 'text-[#CD7F32]' },
      { label: 'Dedicated Account Manager', included: false },
      { label: 'Advanced AI Content Generation', included: false },
    ],
    recommended: false,
  },
  {
    id: 'standard',
    name: 'Standard Plan',
    description: 'Ideal for growing businesses needing comprehensive SEO.',
    icon: <Check className="h-6 w-6 text-[#C0C0C0]" />, // Silver
    priceMonthly: 650,
    priceYearly: 650 * 12, // Calculate yearly
    users: '2 domains full SEO',
    features: [
      { label: 'Automated Keyword Tracking', included: true, tickColorClass: 'text-[#C0C0C0]' },
      { label: 'Standard AI Content Briefs & Generation', included: true, tickColorClass: 'text-[#C0C0C0]' },
      { label: 'On-Page Optimization', included: true, tickColorClass: 'text-[#C0C0C0]' },
      { label: 'Automated Backlink Monitoring', included: true, tickColorClass: 'text-[#C0C0C0]' },
      { label: 'Real-time Reporting Dashboard', included: true, tickColorClass: 'text-[#C0C0C0]' },
      { label: 'Competitor Analysis', included: true, tickColorClass: 'text-[#C0C0C0]' },
      { label: 'Dedicated Account Manager', included: true, tickColorClass: 'text-[#C0C0C0]' },
      { label: 'Advanced AI Content Generation', included: false },
    ],
    recommended: false, // Standard is not recommended now
  },
  {
    id: 'premium',
    name: 'Premium Plan',
    description: 'For large enterprises requiring full-scale SEO solutions.',
    icon: <Check className="h-6 w-6 text-[#FFD700]" />, // Gold
    priceMonthly: 1400,
    priceYearly: 1400 * 12, // Calculate yearly
    users: '3 domains full SEO',
    features: [
      { label: 'Automated Keyword Tracking', included: true, tickColorClass: 'text-[#FFD700]' },
      { label: 'Advanced AI Content Briefs & Generation', included: true, tickColorClass: 'text-[#FFD700]' },
      { label: 'On-Page Optimization', included: true, tickColorClass: 'text-[#FFD700]' },
      { label: 'Automated Backlink Monitoring', included: true, tickColorClass: 'text-[#FFD700]' },
      { label: 'Real-time Reporting Dashboard', included: true, tickColorClass: 'text-[#FFD700]' },
      { label: 'Competitor Analysis', included: true, tickColorClass: 'text-[#FFD700]' },
      { label: 'Dedicated Account Manager', included: true, tickColorClass: 'text-[#FFD700]' },
      { label: 'Advanced AI Content Generation', included: true, tickColorClass: 'text-[#FFD700]' },
    ],
    recommended: true, // Premium is now recommended
  },
  {
    id: 'custom',
    name: 'Custom Plan',
    description: 'Tailored SEO solutions for unique business needs.',
    icon: <Check className="h-6 w-6 text-[#800080]" />, // Purple
    priceMonthly: 0, // No fixed price
    priceYearly: 0, // No fixed price, will be overridden by customPriceDisplay
    customPriceDisplay: 'Contact Us', // Display "Contact Us" instead of 0
    users: 'Custom domain full SEO',
    features: [
      { label: 'All features from Premium Plan', included: true, tickColorClass: 'text-[#800080]' }, // Changed from Gold to Premium
      { label: 'Dedicated Support Team', included: true, tickColorClass: 'text-[#800080]' },
      { label: 'Enterprise-level Integrations', included: true, tickColorClass: 'text-[#800080]' },
      { label: 'Personalized Strategy Development', included: true, tickColorClass: 'text-[#800080]' },
      { label: 'On-demand Consulting', included: true, tickColorClass: 'text-[#800080]' },
      { label: 'Advanced Analytics & Custom Reporting', included: true, tickColorClass: 'text-[#800080]' }
    ],
    recommended: false,
  },
];

const PricingSection: React.FC = () => {
  return (
    <div className="py-16">
      <PricingModule
        title="Choose Your All-Inclusive SEO Plan"
        subtitle="Select the perfect plan to boost your online presence and dominate search rankings."
        plans={pricingPlans}
        defaultAnnual={false} // Keeping monthly as default for now
      />
    </div>
  );
};

export default PricingSection;
