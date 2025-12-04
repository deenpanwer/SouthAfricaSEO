// src/components/all-inclusive-seo/PricingSection.tsx
'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { PricingModule, PricingPlan } from '@/components/ui/pricing-module';
import { Check } from 'lucide-react';

const pricingPlans: PricingPlan[] = [
  {
    id: 'basic',
    name: 'Basic Plan',
    description: 'Get all essential SEO services to kickstart your growth, with a 2-month money-back guarantee.',
    icon: <Check className="h-6 w-6 text-[#CD7F32]" />, // Bronze
    priceMonthly: 300,
    priceYearly: 300 * 12, // Calculate yearly
    users: '1 domain full SEO',
    features: [
      { label: 'Complete On-Page & Technical SEO', included: true, tickColorClass: 'text-[#CD7F32]' },
      { label: 'Strategic Keyword Research & Targeting', included: true, tickColorClass: 'text-[#CD7F32]' },
      { label: 'High-Impact Content Creation', included: true, tickColorClass: 'text-[#CD7F32]' },
      { label: 'Authoritative Link Building', included: true, tickColorClass: 'text-[#CD7F32]' },
      { label: 'Local SEO & Map Pack Domination', included: true, tickColorClass: 'text-[#CD7F32]' },
      { label: 'Proactive Competitor Analysis', included: true, tickColorClass: 'text-[#CD7F32]' },
      { label: 'Future-Proof AI Engine Presence', included: true, tickColorClass: 'text-[#CD7F32]' },
      { label: 'Real-Time, Transparent Reporting', included: true, tickColorClass: 'text-[#CD7F32]' },
      { label: 'Dedicated Account Manager', included: false },
      { label: 'Advanced AI Content Generation', included: false },
      { label: 'Dedicated Support Team', included: false },
      { label: 'Enterprise-level Integrations', included: false },
      { label: 'Personalized Strategy Development', included: false },
      { label: 'On-demand Consulting', included: false },
      { label: 'Advanced Analytics & Custom Reporting', included: false },
    ],
    recommended: false,
  },
  {
    id: 'standard',
    name: 'Standard Plan',
    description: 'Ideal for growing businesses; includes a dedicated account manager and support for 2 domains.',
    icon: <Check className="h-6 w-6 text-[#C0C0C0]" />, // Silver
    priceMonthly: 650,
    priceYearly: 650 * 12, // Calculate yearly
    users: '2 domains full SEO',
    features: [
      { label: 'Complete On-Page & Technical SEO', included: true, tickColorClass: 'text-[#C0C0C0]' },
      { label: 'Strategic Keyword Research & Targeting', included: true, tickColorClass: 'text-[#C0C0C0]' },
      { label: 'High-Impact Content Creation', included: true, tickColorClass: 'text-[#C0C0C0]' },
      { label: 'Authoritative Link Building', included: true, tickColorClass: 'text-[#C0C0C0]' },
      { label: 'Local SEO & Map Pack Domination', included: true, tickColorClass: 'text-[#C0C0C0]' },
      { label: 'Proactive Competitor Analysis', included: true, tickColorClass: 'text-[#C0C0C0]' },
      { label: 'Future-Proof AI Engine Presence', included: true, tickColorClass: 'text-[#C0C0C0]' },
      { label: 'Real-Time, Transparent Reporting', included: true, tickColorClass: 'text-[#C0C0C0]' },
      { label: 'Dedicated Account Manager', included: true, tickColorClass: 'text-[#C0C0C0]' },
      { label: 'Advanced AI Content Generation', included: false },
      { label: 'Dedicated Support Team', included: false },
      { label: 'Enterprise-level Integrations', included: false },
      { label: 'Personalized Strategy Development', included: false },
      { label: 'On-demand Consulting', included: false },
      { label: 'Advanced Analytics & Custom Reporting', included: false },
    ],
    recommended: false,
  },
  {
    id: 'premium',
    name: 'Premium Plan',
    description: 'For large businesses and enterprises seeking advanced AI-powered content and dedicated support across 3 domains.',
    icon: <Check className="h-6 w-6 text-[#FFD700]" />, // Gold
    priceMonthly: 1400,
    priceYearly: 1400 * 12, // Calculate yearly
    users: '3 domains full SEO',
    features: [
      { label: 'Complete On-Page & Technical SEO', included: true, tickColorClass: 'text-[#FFD700]' },
      { label: 'Strategic Keyword Research & Targeting', included: true, tickColorClass: 'text-[#FFD700]' },
      { label: 'High-Impact Content Creation', included: true, tickColorClass: 'text-[#FFD700]' },
      { label: 'Authoritative Link Building', included: true, tickColorClass: 'text-[#FFD700]' },
      { label: 'Local SEO & Map Pack Domination', included: true, tickColorClass: 'text-[#FFD700]' },
      { label: 'Proactive Competitor Analysis', included: true, tickColorClass: 'text-[#FFD700]' },
      { label: 'Future-Proof AI Engine Presence', included: true, tickColorClass: 'text-[#FFD700]' },
      { label: 'Real-Time, Transparent Reporting', included: true, tickColorClass: 'text-[#FFD700]' },
      { label: 'Dedicated Account Manager', included: true, tickColorClass: 'text-[#FFD700]' },
      { label: 'Advanced AI Content Generation', included: true, tickColorClass: 'text-[#FFD700]' },
      { label: 'Dedicated Support Team', included: false },
      { label: 'Enterprise-level Integrations', included: false },
      { label: 'Personalized Strategy Development', included: false },
      { label: 'On-demand Consulting', included: false },
      { label: 'Advanced Analytics & Custom Reporting', included: false },
    ],
    recommended: true,
  },
  {
    id: 'custom',
    name: 'Custom Plan',
    description: 'Tailored enterprise SEO solutions for unique business needs and maximum scale.',
    icon: <Check className="h-6 w-6 text-[#800080]" />, // Purple
    priceMonthly: 0, // No fixed price
    priceYearly: 0, // No fixed price, will be overridden by customPriceDisplay
    customPriceDisplay: 'Contact Us', // Display "Contact Us" instead of 0
    users: 'Custom domain full SEO',
    features: [
      { label: 'Complete On-Page & Technical SEO', included: true, tickColorClass: 'text-[#800080]' },
      { label: 'Strategic Keyword Research & Targeting', included: true, tickColorClass: 'text-[#800080]' },
      { label: 'High-Impact Content Creation', included: true, tickColorClass: 'text-[#800080]' },
      { label: 'Authoritative Link Building', included: true, tickColorClass: 'text-[#800080]' },
      { label: 'Local SEO & Map Pack Domination', included: true, tickColorClass: 'text-[#800080]' },
      { label: 'Proactive Competitor Analysis', included: true, tickColorClass: 'text-[#800080]' },
      { label: 'Future-Proof AI Engine Presence', included: true, tickColorClass: 'text-[#800080]' },
      { label: 'Real-Time, Transparent Reporting', included: true, tickColorClass: 'text-[#800080]' },
      { label: 'Dedicated Account Manager', included: true, tickColorClass: 'text-[#800080]' },
      { label: 'Advanced AI Content Generation', included: true, tickColorClass: 'text-[#800080]' },
      { label: 'Dedicated Support Team', included: true, tickColorClass: 'text-[#800080]' },
      { label: 'Enterprise-level Integrations', included: true, tickColorClass: 'text-[#800080]' },
      { label: 'Personalized Strategy Development', included: true, tickColorClass: 'text-[#800080]' },
      { label: 'On-demand Consulting', included: true, tickColorClass: 'text-[#800080]' },
      { label: 'Advanced Analytics & Custom Reporting', included: true, tickColorClass: 'text-[#800080]' },
    ],
    recommended: false,
  },
];

const PricingSection: React.FC = () => {
  return (
    <div className="py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
        >
      <PricingModule
        title="The Best Deal in SEO. Period."
        subtitle="One simple plan. Every service included. No hidden fees, no upsells, no risk."
        plans={pricingPlans}
        defaultAnnual={false} // Keeping monthly as default for now
      />
        </motion.div>
    </div>
  );
};

export default PricingSection;
