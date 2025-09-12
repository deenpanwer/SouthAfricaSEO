import type { LucideIcon } from 'lucide-react';

export interface AiSeoHeroData {
  pageTitle: string;
  metaDescription: string;
  heroTitle: string;
  heroSubtitle: string;
  formPlaceholder: string;
  formButtonText: string;
}

export interface AiSeoProblemSolutionItem {
  problem: string;
  solution: string;
}

export interface AiSeoServiceItem {
  icon: string; // Icon name as string
  title: string;
  description: string;
}

export interface AiSeoProcessStep {
  title: string;
  description: string;
}

export interface AiSeoResult {
  metric: string;
  value: string;
}

export interface AiSeoTestimonial {
  quote: string;
  author: string;
  company: string;
}

export interface AiSeoTechnology {
  name: string;
  description: string;
}

export interface AiSeoFaqItem {
  question: string;
  answer: string;
}

export interface AiSeoFinalCta {
    headline: string;
    description: string;
    ctaText: string;
}

export interface AiSeoCityPageData {
  slug: string;
  cityName: string;
  heroData: AiSeoHeroData;
  problemSolutionData: {
    headline: string;
    items: AiSeoProblemSolutionItem[];
  };
  servicesData: {
    headline: string;
    items: AiSeoServiceItem[];
  };
  processData: {
    headline: string;
    steps: AiSeoProcessStep[];
  };
  resultsData: {
    headline: string;
    stats: AiSeoResult[];
    testimonials: AiSeoTestimonial[];
  };
  technologyData: {
    headline: string;
    items: AiSeoTechnology[];
  };
  faqData: {
    headline: string;
    items: AiSeoFaqItem[];
  };
  finalCtaData: AiSeoFinalCta;
}