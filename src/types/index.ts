
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
  website: string;
  phoneNumber: string;
  name?: string; // Optional name field
}

export interface ContactFormValues {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  website?: string; // Added website to main contact form as well
  service: string;
  message: string;
}

