
import type { CityPageData } from '@/types';
import { Search, Settings, Users, Briefcase, Mail, BarChart2, TrendingUp, Lightbulb, ShieldCheck } from 'lucide-react';
import { CONTACT_DETAILS } from '@/lib/constants.tsx';

const GENERIC_CITY_HERO_IMAGE_SRC = 'https://placehold.co/800x500.png';
const GENERIC_OFFICE_LOCATION_IMAGE_SRC = 'https://placehold.co/600x400.png';

export const miamiData: CityPageData = {
  slug: 'miami',
  cityName: 'Miami',
  heroData: {
    pageTitle: 'Miami SEO Agency | TRAC - SEO Services Miami, FL',
    metaDescription: 'TRAC is a Miami SEO agency helping businesses improve online visibility and drive organic growth. Contact our Miami SEO experts for a free consultation.',
    heroTitle: 'Miami SEO Experts',
    heroSubtitle: 'Make Waves in Miami with TRAC SEO',
    heroDescription: 'TRAC offers comprehensive SEO services for businesses in Miami, Florida. Our tailored strategies focus on improving your search engine rankings, attracting qualified local and international traffic, and increasing your ROI in the vibrant Miami market.',
    heroImage: { src: GENERIC_CITY_HERO_IMAGE_SRC, alt: 'SEO Services in Miami, FL', dataAiHint: 'Miami beach business' },
    heroVideoUrl: 'https://www.youtube.com/embed/JBPmDzL-Xek',
    formTitle: 'Get Your FREE Miami SEO Strategy!',
  },
  resultsHeadline: 'Delivering Hot SEO Results in Miami',
  readyToGrowHeadline: 'Ready to Heat Up Your Miami SEO?',
  servicesSectionHeadline: 'Customized Miami SEO Solutions',
  servicesSectionSubheadline: 'Our SEO services are designed to make your Miami business a leader in organic search, attracting diverse audiences.',
  services: [
    { icon: Search, title: 'Miami Local & Multilingual SEO', description: 'Dominate local search in Miami and target multilingual audiences.' },
    { icon: Settings, title: 'Technical SEO for Miami Websites', description: 'Optimize your website\'s technical health for peak SEO performance in Miami.' },
    { icon: Mail, title: 'Miami SEO Content Marketing', description: 'Create compelling content that ranks in Miami and converts visitors.' },
    { icon: Briefcase, title: 'Luxury & Tourism SEO Miami', description: 'Specialized SEO for Miami\'s luxury brands, tourism, and real estate sectors.'},
  ],
  whyChooseSectionHeadline: 'TRAC: Your Trusted Miami SEO Agency',
  whyChooseIntro: 'Partner with TRAC for effective, data-driven SEO services in Miami.',
  whyChooseParagraph1: 'Our Miami SEO team has deep knowledge of the local and international market influences.',
  whyChooseParagraph2: 'We employ ethical, cutting-edge SEO techniques to deliver sustainable growth for Miami businesses.',
  whyChoosePoints: [
    { icon: 'TrendingUp', title: 'Miami Search Growth', description: 'Improve your organic rankings and lead generation in Miami.' },
    { icon: 'Lightbulb', title: 'Strategic Miami SEO', description: 'Targeted SEO campaigns for the Miami, FL audience.' },
    { icon: 'ShieldCheck', title: 'Reliable Miami SEO Partner', description: 'Transparent and results-oriented SEO services in Miami.' },
  ],
  awards: {
    clutch: { headline: 'Top Miami SEO Agency - Clutch 2024', text: 'Recognized for excellence in Miami SEO.' },
    upcity: { headline: 'Miami SEO Excellence - UpCity 2024', text: 'Awarded for top-tier SEO services in Miami.' },
  },
  location: {
    officeImageUrl: GENERIC_OFFICE_LOCATION_IMAGE_SRC,
    addressLines: ['1212 SEO Ave', 'Suite 120', 'Miami, FL 33101'],
    phone: CONTACT_DETAILS.phone,
    email: CONTACT_DETAILS.email,
  },
  bottomFormTitle: 'Request Your Miami SEO Consultation',
};
