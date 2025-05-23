
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
  website?: string; // Now optional
  phoneNumber: string; // Required, will be E.164 format
  name?: string; // Already optional
}

export interface ContactFormValues {
  name?: string; // Now optional
  email?: string; // Now optional
  company?: string; // Already optional
  phoneNumber: string; // Required, will be E.164 format
  website?: string; // Already optional
  service?: string; // Now optional
  message?: string; // Now optional
}
