
import type { LucideIcon } from 'lucide-react';

export interface AiSeoHeroData {
  pageTitle: string;
  metaDescription: string;
  heroTitle: string;
  heroSubtitle: string;
  formPlaceholder: string;
  formButtonText: string;
  formTitle: string;
}

export interface AiSeoVisibilityData {
  headline: string;
  subheadline: string;
  description1: string;
  description2: string;
  resultsHeadline: string;
  finalDescription: string;
  ctaText: string;
}

export interface AiSeoWhyNeedData {
  headline: string;
  subheadline: string;
  paragraphs: string[];
  ctaText: string;
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

export interface AiSeoIntroData {
  topHeadline: string;
  topSubheadline: string;
  topDescription: string[];
  risksHeadline: string;
  risks: string[];
  risksFollowup: string;
  bottomHeadline: string;
  bottomDescription: string[];
}

export interface AiSeoComparisonItem {
  source: string;
  overview: {
    title: string;
    description: string;
  };
  capabilities: {
    title: string;
    points: string[];
  };
}

export interface AiSeoWhyChooseCard {
    icon: string;
    title: string;
    description: string;
    headerColor: string;
    bodyColor: string;
}

export interface AiSeoWhyChooseData {
    mainHeadline: string;
    subheadline: string;
    ctaText1: string;
    sectionHeadline: string;
    sectionSubheadline: string;
    introParagraph1: string;
    introParagraph2: string;
    cards: AiSeoWhyChooseCard[];
    ctaText2: string;
}

export interface AiSeoCityPageData {
  slug: string;
  cityName: string;
  heroData: AiSeoHeroData;
  visibilityData: AiSeoVisibilityData;
  whyNeedData: AiSeoWhyNeedData;
  introData: AiSeoIntroData;
  comparisonData: {
    headline: string;
    ctaText: string;
    items: AiSeoComparisonItem[];
  };
  whyChooseData: AiSeoWhyChooseData;
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

// AI SEO Form Types
export interface AiSeoHeroFormValues {
  website?: string;
  city: string;
  formType: string;
}
export interface AiSeoSgeFormValues {
  firstName?: string;
  lastName?: string;
  company?: string;
  website?: string;
  email?: string;
  phone?: string;
  services?: string;
  budget?: string;
  howDidYouHear?: string;
  businessInfo?: string;
  city: string;
  formType: string;
}
