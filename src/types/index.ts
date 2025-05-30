
import type { LucideIcon } from 'lucide-react';

export interface NavItem {
  href: string;
  label: string;
  icon?: LucideIcon;
}

export interface ServicePackageFeature {
  name: string;
  description: string;
}

export interface ServicePackage {
  name: string;
  price: string;
  description: string;
  icon: LucideIcon;
  features: ServicePackageFeature[];
  cta: string;
}

export interface Testimonial {
  id: string;
  name: string;
  company: string;
  avatarUrl: string;
  dataAiHint?: string;
  quote: string;
  location?: string;
}

export interface CaseStudyResult {
  metric: string;
  value: string;
  icon: LucideIcon;
}
export interface CaseStudy {
  id: string;
  clientName: string;
  industry: string;
  challenge: string;
  solution: string;
  results: CaseStudyResult[];
  imageUrl: string;
  dataAiHint?: string;
  testimonial?: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  imageUrl: string;
  dataAiHint?: string;
  author: string;
  category: string;
  tags: string[];
  content?: string; // Full content for individual blog post page
}

export interface TracLeadFormValues {
  name?: string;
  website?: string;
  phoneNumber: string;
}

export interface ContactFormValues {
  name?: string;
  email?: string;
  company?: string;
  phoneNumber: string;
  website?: string;
  service?: string;
  message?: string;
}

export interface ClientLogo {
  name: string;
  imageUrl: string;
  dataAiHint?: string;
}

export interface StatItem {
  value: string;
  label: string;
  icon: LucideIcon;
}

// City Specific Page Types
export interface CityHeroData {
  pageTitle: string; // For <title> tag
  metaDescription: string;
  heroTitle: string; // e.g., "Portland Digital Marketing Agency"
  heroSubtitle: string;
  heroDescription: string;
  heroImage: {
    src: string;
    alt: string;
    dataAiHint?: string;
  };
  formTitle: string;
}

export interface CityServiceItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface CityWhyChooseItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface CityAwardData {
  headline: string;
  text: string;
  logoUrl?: string; // Optional logo for the award provider (e.g., Clutch, UpCity)
  logoAlt?: string;
}

export interface CityLocationData {
  mapEmbedUrl: string;
  addressLines: string[];
  phone: string;
  email: string;
}

export interface CityPageData {
  slug: string;
  cityName: string;
  heroData: CityHeroData;
  resultsHeadline: string; // e.g., "Our Portland Digital Marketing Clients Get Results"
  // Result percentages can be static in the component or added here if they vary by city
  readyToGrowHeadline: string; // e.g., "Ready to Grow Your Business With Portland Digital Marketing Services?"
  servicesSectionHeadline: string; // e.g., "Portland Digital Marketing Services"
  servicesSectionSubheadline: string;
  services: CityServiceItem[];
  whyChooseSectionHeadline: string; // e.g., "Why Choose TRAC As Your Portland Digital Marketing Company"
  whyChooseIntro: string;
  whyChoosePoints: CityWhyChooseItem[];
  awards: {
    clutch: CityAwardData;
    upcity: CityAwardData;
  };
  location: CityLocationData;
  bottomFormTitle: string;
}

export interface CityHeroFormValues {
  website?: string;
  phoneNumber: string;
  city: string; // To identify which city the lead came from
  formType: string; // e.g., "City Hero Lead Form"
}

export interface CityBottomFormValues {
  website?: string;
  phoneNumber: string;
  message?: string;
  city: string;
  formType: string; // e.g., "City Bottom Contact Form"
}
