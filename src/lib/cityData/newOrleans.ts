
import type { CityPageData } from '@/types';
import { Search, Settings, Users, Briefcase, Mail, BarChart2, TrendingUp, Lightbulb, ShieldCheck } from 'lucide-react';
import { CONTACT_DETAILS } from '@/lib/constants.tsx';

const GENERIC_CITY_HERO_IMAGE_SRC = 'https://placehold.co/800x500.png';
const GENERIC_OFFICE_LOCATION_IMAGE_SRC = 'https://placehold.co/600x400.png';

export const newOrleansData: CityPageData = {
  slug: 'new-orleans',
  cityName: 'New Orleans',
  heroData: {
    pageTitle: 'New Orleans SEO Agency | TRAC - SEO Services NOLA',
    metaDescription: 'TRAC is a New Orleans SEO agency helping businesses improve online visibility and drive organic growth. Contact our NOLA SEO experts for a free consultation.',
    heroTitle: 'New Orleans SEO Experts',
    heroSubtitle: 'March to the Top of Search in NOLA with TRAC SEO',
    heroDescription: 'TRAC offers comprehensive SEO services for businesses in New Orleans, Louisiana. Our tailored strategies focus on improving your search engine rankings, attracting qualified local and tourist traffic, and increasing your ROI in the unique New Orleans market.',
    heroImage: { src: GENERIC_CITY_HERO_IMAGE_SRC, alt: 'SEO Services in New Orleans, LA', dataAiHint: 'New Orleans french quarter' },
    heroVideoUrl: 'https://www.youtube.com/embed/JBPmDzL-Xek',
    formTitle: 'Get Your FREE NOLA SEO Strategy!',
  },
  resultsHeadline: 'Delivering Festive SEO Results in New Orleans',
  readyToGrowHeadline: 'Ready to Jazz Up Your New Orleans SEO?',
  servicesSectionHeadline: 'Customized New Orleans SEO Solutions',
  servicesSectionSubheadline: 'Our SEO services are designed to make your New Orleans business a leader in organic search, attracting both locals and tourists.',
  services: [
    { icon: Search, title: 'NOLA Local & Tourism SEO', description: 'Dominate local search in New Orleans and target tourist queries related to festivals, food, and culture.' },
    { icon: Settings, title: 'Technical SEO for NOLA Websites', description: 'Optimize your website\'s technical health for peak SEO performance in New Orleans.' },
    { icon: Mail, title: 'New Orleans SEO Content Marketing', description: 'Create compelling content that ranks in New Orleans and converts visitors, highlighting local charm.' },
    { icon: Briefcase, title: 'Hospitality & Festival SEO New Orleans', description: 'Specialized SEO for New Orleans hotels, restaurants, tours, and major events.'},
  ],
  whyChooseSectionHeadline: 'TRAC: Your Trusted New Orleans SEO Agency',
  whyChooseIntro: 'Partner with TRAC for effective, data-driven SEO services in New Orleans.',
  whyChooseParagraph1: 'Our New Orleans SEO team has deep knowledge of the local market and its unique cultural drivers.',
  whyChooseParagraph2: 'We employ ethical, creative SEO techniques to deliver sustainable growth for New Orleans businesses.',
  whyChoosePoints: [
    { icon: 'TrendingUp', title: 'New Orleans Search Growth', description: 'Improve your organic rankings and lead generation in NOLA.' },
    { icon: 'Lightbulb', title: 'Strategic NOLA SEO', description: 'Targeted SEO campaigns for the New Orleans, LA audience.' },
    { icon: 'ShieldCheck', title: 'Reliable NOLA SEO Partner', description: 'Transparent and results-oriented SEO services in New Orleans.' },
  ],
  awards: {
    clutch: { headline: 'Top New Orleans SEO Agency - Clutch 2024', text: 'Recognized for excellence in New Orleans SEO.' },
    upcity: { headline: 'New Orleans SEO Excellence - UpCity 2024', text: 'Awarded for top-tier SEO services in NOLA.' },
  },
  location: {
    officeImageUrl: GENERIC_OFFICE_LOCATION_IMAGE_SRC,
    addressLines: ['1414 SEO St', 'Suite 140', 'New Orleans, LA 70112'],
    phone: CONTACT_DETAILS.phone,
    email: CONTACT_DETAILS.email,
  },
  bottomFormTitle: 'Request Your New Orleans SEO Consultation',
};
