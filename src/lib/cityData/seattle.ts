
import type { CityPageData } from '@/types';
import { Search, Settings, Users, Briefcase, Mail, BarChart2, TrendingUp, Lightbulb, ShieldCheck } from 'lucide-react';
import { CONTACT_DETAILS } from '@/lib/constants.tsx';

const GENERIC_CITY_HERO_IMAGE_SRC = 'https://placehold.co/800x500.png';
const GENERIC_OFFICE_LOCATION_IMAGE_SRC = 'https://placehold.co/600x400.png';

export const seattleData: CityPageData = {
  slug: 'seattle',
  cityName: 'Seattle',
  heroData: {
    pageTitle: 'Seattle SEO Agency | TRAC - SEO Services Seattle, WA',
    metaDescription: 'TRAC is a Seattle SEO agency helping businesses improve online visibility and drive organic growth. Contact our Seattle SEO experts for a free consultation.',
    heroTitle: 'Seattle SEO Experts',
    heroSubtitle: 'Navigate the Emerald City\'s Search with TRAC SEO',
    heroDescription: 'TRAC offers comprehensive SEO services for businesses in Seattle, Washington. Our tailored strategies focus on improving your search engine rankings, attracting qualified local traffic from the tech-savvy Seattle populace, and increasing your ROI in this innovative market.',
    heroImage: { src: GENERIC_CITY_HERO_IMAGE_SRC, alt: 'SEO Services in Seattle, WA', dataAiHint: 'Seattle space needle' },
    heroVideoUrl: 'https://www.youtube.com/embed/JBPmDzL-Xek',
    formTitle: 'Get Your FREE Seattle SEO Strategy!',
  },
  resultsHeadline: 'Delivering Innovative SEO Results in Seattle',
  readyToGrowHeadline: 'Ready to Elevate Your Seattle SEO?',
  servicesSectionHeadline: 'Customized Seattle SEO Solutions',
  servicesSectionSubheadline: 'Our SEO services are designed to make your Seattle business a leader in organic search, especially within the tech and startup ecosystem.',
  services: [
    { icon: Search, title: 'Seattle Local & Tech SEO', description: 'Dominate local search in Seattle and target the specific needs of the tech industry.' },
    { icon: Settings, title: 'Technical SEO for Seattle Websites', description: 'Optimize your website\'s technical health for peak SEO performance in Seattle\'s competitive online space.' },
    { icon: Mail, title: 'Seattle SEO Content Marketing', description: 'Create compelling, authoritative content that ranks in Seattle and converts savvy visitors.' },
    { icon: Briefcase, title: 'B2B & SaaS SEO Seattle', description: 'Specialized SEO for Seattle\'s booming B2B and SaaS sectors.'},
  ],
  whyChooseSectionHeadline: 'TRAC: Your Trusted Seattle SEO Agency',
  whyChooseIntro: 'Partner with TRAC for effective, data-driven SEO services in Seattle.',
  whyChooseParagraph1: 'Our Seattle SEO team has deep knowledge of the local market and its highly competitive tech landscape.',
  whyChooseParagraph2: 'We employ ethical, cutting-edge SEO techniques to deliver sustainable growth for Seattle businesses.',
  whyChoosePoints: [
    { icon: 'TrendingUp', title: 'Seattle Search Growth', description: 'Improve your organic rankings and lead generation in Seattle.' },
    { icon: 'Lightbulb', title: 'Strategic Seattle SEO', description: 'Targeted SEO campaigns for the Seattle, WA audience.' },
    { icon: 'ShieldCheck', title: 'Reliable Seattle SEO Partner', description: 'Transparent and results-oriented SEO services in Seattle.' },
  ],
  awards: {
    clutch: { headline: 'Top Seattle SEO Agency - Clutch 2024', text: 'Recognized for excellence in Seattle SEO.' },
    upcity: { headline: 'Seattle SEO Excellence - UpCity 2024', text: 'Awarded for top-tier SEO services in Seattle.' },
  },
  location: {
    officeImageUrl: GENERIC_OFFICE_LOCATION_IMAGE_SRC,
    addressLines: ['2020 SEO Needle Way', 'Suite 200', 'Seattle, WA 98101'],
    phone: CONTACT_DETAILS.phone,
    email: CONTACT_DETAILS.email,
  },
  bottomFormTitle: 'Request Your Seattle SEO Consultation',
};
