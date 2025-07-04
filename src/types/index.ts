
import type { LucideIcon } from 'lucide-react';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import { ReactNode } from 'react';

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
  [x: string]: ReactNode;
  id: string;
  name: string;
  company: string;
  avatarUrl: string;
  dataAiHint?: string;
  quote: string;
  location?: string;
  rating?: number;
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

export interface FAQItem {
  question: string;
  answer: string;
}

// City Specific Page Types
export interface CityHeroData {
  pageTitle: string; // For <title> tag
  metaDescription: string;
  heroTitle: string; // e.g., "Portland Digital Marketing Agency"
  heroSubtitle: string;
  heroDescription: string;
 heroImage: string | {
 src: string;
 alt: string;
 dataAiHint?: string;
 };
  heroVideoUrl: string;
  formTitle: string;
}

export interface CityServiceItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface CityWhyChooseItem {
  icon: string; // Changed from LucideIcon to string
  title: string;
  description: string;
}

export interface CityAwardData {
  headline: string;
  text: string;
}

export interface CityLocationData {
  officeImageUrl: string;
  streetAddress: string; // New: Single string for street address
  addressLocality: string; // New: City
  addressRegion: string; // New: State or region
  postalCode: string; // New: Postal code
  addressCountry: string; // New: Country
  phone: string;
  email: string;
}

export interface CityPageData {
  slug: string;
  cityName: string;
  heroData: CityHeroData;
  resultsHeadline: string;
  readyToGrowHeadline: string;
  servicesSectionHeadline: string;
  servicesSectionSubheadline: string;
  services: CityServiceItem[];
  whyChooseSectionHeadline: string;
  whyChooseIntro: string;
  whyChooseParagraph1: string;
  whyChooseParagraph2: string;
  whyChoosePoints: CityWhyChooseItem[];
  awards: {
    clutch: CityAwardData;
    upcity: CityAwardData;
  };
  location: CityLocationData;
  bottomFormTitle: string;
  faqData: FAQItem[];
  faqSectionHeadline: string; // New: Headline for the FAQ section
  metaKeywords: string[];
}

export interface CityHeroFormValues {
  website?: string;
  phoneNumber: string;
  city: string;
  formType: string;
}

export interface CityBottomFormValues {
  website?: string;
  phoneNumber: string;
  message?: string;
  city: string;
  formType: string;
}

// --- Base State Page Data Structure (to be extended or used by specific verticals) ---
interface BaseStateHeroData {
  pageTitle: string;
  metaDescription: string;
  heroTitle: string;
  heroSubtitle: string;
  heroDescription: string;
  heroImage: {
    src: string;
    alt: string;
    dataAiHint?: string;
  };
  heroVideoUrl: string;
  formTitle: string;
}

interface BaseStateServiceItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface BaseStateWhyChooseItem {
  icon: string; // Icon name as string
  title: string;
  description: string;
}

interface BaseStateAwardData {
  headline: string;
  text: string;
}

interface BaseStateCoverageData {
  mainHeadline: string;
  points: string[];
  mapImageUrl?: string;
  mapImageAlt?: string;
}

interface BaseStatePageData {
  slug: string;
  stateName: string;
  heroData: BaseStateHeroData; // Will be specialized
  resultsHeadline: string;
  readyToGrowHeadline: string;
  servicesSectionHeadline: string;
  servicesSectionSubheadline: string;
  services: BaseStateServiceItem[]; // Will be specialized
  whyChooseSectionHeadline: string;
  whyChooseIntro: string;
  whyChooseParagraph1: string;
  whyChooseParagraph2: string;
  whyChoosePoints: BaseStateWhyChooseItem[]; // Will be specialized
  awards: {
    clutch: BaseStateAwardData;
    upcity: BaseStateAwardData;
  };
  coverageData: BaseStateCoverageData;
  bottomFormTitle: string;
}

interface BaseStateHeroFormValues {
  website?: string;
  phoneNumber: string;
  state: string;
  formType: string;
}

interface BaseStateBottomFormValues {
  website?: string;
  phoneNumber: string;
  message?: string;
  state: string;
  formType: string;
}

// Landscaping State Specific Page Types
export interface LandscapingStateHeroData extends BaseStateHeroData {}
export interface LandscapingStateServiceItem extends BaseStateServiceItem {}
export interface LandscapingStateWhyChooseItem extends BaseStateWhyChooseItem {}
export interface LandscapingStateAwardData extends BaseStateAwardData {}
export interface LandscapingStateCoverageData extends BaseStateCoverageData {}
export interface LandscapingStatePageData extends BaseStatePageData {
  heroData: LandscapingStateHeroData;
  services: LandscapingStateServiceItem[];
  whyChoosePoints: LandscapingStateWhyChooseItem[];
  awards: {
    clutch: LandscapingStateAwardData;
    upcity: LandscapingStateAwardData;
  };
  coverageData: LandscapingStateCoverageData;
}
export interface LandscapingStateHeroFormValues extends BaseStateHeroFormValues {}
export interface LandscapingStateBottomFormValues extends BaseStateBottomFormValues {}

// Veterinary State Specific Page Types
export interface VeterinaryStateHeroData extends BaseStateHeroData {}
export interface VeterinaryStateServiceItem extends BaseStateServiceItem {}
export interface VeterinaryStateWhyChooseItem extends BaseStateWhyChooseItem {}
export interface VeterinaryStateAwardData extends BaseStateAwardData {}
export interface VeterinaryStateCoverageData extends BaseStateCoverageData {}
export interface VeterinaryStatePageData extends BaseStatePageData {
  heroData: VeterinaryStateHeroData;
  services: VeterinaryStateServiceItem[];
  whyChoosePoints: VeterinaryStateWhyChooseItem[];
  awards: {
    clutch: VeterinaryStateAwardData;
    upcity: VeterinaryStateAwardData;
  };
  coverageData: VeterinaryStateCoverageData;
}
export interface VeterinaryStateHeroFormValues extends BaseStateHeroFormValues {}
export interface VeterinaryStateBottomFormValues extends BaseStateBottomFormValues {}

// Auto Dealer State Specific Page Types
export interface AutoDealerStateHeroData extends BaseStateHeroData {}
export interface AutoDealerStateServiceItem extends BaseStateServiceItem {}
export interface AutoDealerStateWhyChooseItem extends BaseStateWhyChooseItem {}
export interface AutoDealerStateAwardData extends BaseStateAwardData {}
export interface AutoDealerStateCoverageData extends BaseStateCoverageData {}
export interface AutoDealerStatePageData extends BaseStatePageData {
  heroData: AutoDealerStateHeroData;
  services: AutoDealerStateServiceItem[];
  whyChoosePoints: AutoDealerStateWhyChooseItem[];
  awards: {
    clutch: AutoDealerStateAwardData;
    upcity: AutoDealerStateAwardData;
  };
  coverageData: AutoDealerStateCoverageData;
}
export interface AutoDealerStateHeroFormValues extends BaseStateHeroFormValues {}
export interface AutoDealerStateBottomFormValues extends BaseStateBottomFormValues {}

// Auto Repair State Specific Page Types
export interface AutoRepairStateHeroData extends BaseStateHeroData {}
export interface AutoRepairStateServiceItem extends BaseStateServiceItem {}
export interface AutoRepairStateWhyChooseItem extends BaseStateWhyChooseItem {}
export interface AutoRepairStateAwardData extends BaseStateAwardData {}
export interface AutoRepairStateCoverageData extends BaseStateCoverageData {}
export interface AutoRepairStatePageData extends BaseStatePageData {
  heroData: AutoRepairStateHeroData;
  services: AutoRepairStateServiceItem[];
  whyChoosePoints: AutoRepairStateWhyChooseItem[];
  awards: {
    clutch: AutoRepairStateAwardData;
    upcity: AutoRepairStateAwardData;
  };
  coverageData: AutoRepairStateCoverageData;
}
export interface AutoRepairStateHeroFormValues extends BaseStateHeroFormValues {}
export interface AutoRepairStateBottomFormValues extends BaseStateBottomFormValues {}

// Salon State Specific Page Types
export interface SalonStateHeroData extends BaseStateHeroData {}
export interface SalonStateServiceItem extends BaseStateServiceItem {}
export interface SalonStateWhyChooseItem extends BaseStateWhyChooseItem {}
export interface SalonStateAwardData extends BaseStateAwardData {}
export interface SalonStateCoverageData extends BaseStateCoverageData {}
export interface SalonStatePageData extends BaseStatePageData {
  heroData: SalonStateHeroData;
  services: SalonStateServiceItem[];
  whyChoosePoints: SalonStateWhyChooseItem[];
  awards: {
    clutch: SalonStateAwardData;
    upcity: SalonStateAwardData;
  };
  coverageData: SalonStateCoverageData;
}
export interface SalonStateHeroFormValues extends BaseStateHeroFormValues {}
export interface SalonStateBottomFormValues extends BaseStateBottomFormValues {}

// Gym State Specific Page Types
export interface GymStateHeroData extends BaseStateHeroData {}
export interface GymStateServiceItem extends BaseStateServiceItem {}
export interface GymStateWhyChooseItem extends BaseStateWhyChooseItem {}
export interface GymStateAwardData extends BaseStateAwardData {}
export interface GymStateCoverageData extends BaseStateCoverageData {}
export interface GymStatePageData extends BaseStatePageData {
  heroData: GymStateHeroData;
  services: GymStateServiceItem[];
  whyChoosePoints: GymStateWhyChooseItem[];
  awards: {
    clutch: GymStateAwardData;
    upcity: GymStateAwardData;
  };
  coverageData: GymStateCoverageData;
}
export interface GymStateHeroFormValues extends BaseStateHeroFormValues {}
export interface GymStateBottomFormValues extends BaseStateBottomFormValues {}
