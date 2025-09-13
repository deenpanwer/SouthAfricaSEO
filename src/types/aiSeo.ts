
import type { LucideIcon } from 'lucide-react';

export interface AiSeoHeroData {
  pageTitle: string;
  metaDescription: string;
  heroTitle: string;
  heroSubtitle: string;
  
}

export interface AiSeoVisibilityData {
  headline: string;
  subheadline: string;
  description1: string;
  description2: string;
  resultsHeadline: string;
  finalDescription: string;
}

export interface AiSeoWhyNeedData {
  headline: string;
  subheadline: string;
  paragraphs: string[];
}

export interface AiSeoFaqItem {
  question: string;
  answer: string;
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
}

export interface AiSeoWhyChooseData {
    mainHeadline: string;
    subheadline: string;
    sectionHeadline: string;
    sectionSubheadline: string;
    introParagraph1: string;
    introParagraph2: string;
    cards: AiSeoWhyChooseCard[];
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
    items: AiSeoComparisonItem[];
  };
  whyChooseData: AiSeoWhyChooseData;
  faqData: {
    headline: string;
    items: AiSeoFaqItem[];
  };
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
