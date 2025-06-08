
import type { CityPageData } from '@/types';
import { Search, Settings, Users, Briefcase, Mail, BarChart2, TrendingUp, Lightbulb, ShieldCheck } from 'lucide-react';
import { CONTACT_DETAILS } from '@/lib/constants.tsx';

const GENERIC_CITY_HERO_IMAGE_SRC = 'https://placehold.co/800x500.png';
const GENERIC_OFFICE_LOCATION_IMAGE_SRC = 'https://placehold.co/600x400.png';

export const lasVegasData: CityPageData = {
  slug: 'las-vegas',
  cityName: 'Las Vegas',
  heroData: {
    pageTitle: 'Las Vegas SEO Agency | TRAC - SEO Services Las Vegas, NV',
    metaDescription: 'TRAC is a Las Vegas SEO agency helping businesses improve online visibility and drive organic growth. Contact our Las Vegas SEO experts for a free consultation.',
    heroTitle: 'Las Vegas SEO Experts',
    heroSubtitle: 'Win Big in Las Vegas with TRAC SEO',
    heroDescription: 'TRAC offers comprehensive SEO services for businesses in Las Vegas, Nevada. Our tailored strategies focus on improving your search engine rankings, attracting qualified local and tourist traffic, and increasing your ROI in the dynamic Las Vegas market.',
    heroImage: { src: GENERIC_CITY_HERO_IMAGE_SRC, alt: 'SEO Services in Las Vegas, NV', dataAiHint: 'Las Vegas strip' },
    heroVideoUrl: 'https://www.youtube.com/embed/JBPmDzL-Xek',
    formTitle: 'Get Your FREE Las Vegas SEO Strategy!',
  },
  resultsHeadline: 'Delivering High-Roller SEO Results in Las Vegas',
  readyToGrowHeadline: 'Ready to Hit the SEO Jackpot in Las Vegas?',
  servicesSectionHeadline: 'Customized Las Vegas SEO Solutions',
  servicesSectionSubheadline: 'Our SEO services are designed to make your Las Vegas business a leader in organic search, attracting both locals and tourists.',
  services: [
    { icon: Search, title: 'Las Vegas Local & Tourism SEO', description: 'Dominate local search in Las Vegas and target tourist queries.' },
    { icon: Settings, title: 'Technical SEO for Las Vegas Websites', description: 'Optimize your website\'s technical health for peak SEO performance in Las Vegas.' },
    { icon: Mail, title: 'Las Vegas SEO Content Marketing', description: 'Create compelling content that ranks in Las Vegas and converts visitors.' },
    { icon: Briefcase, title: 'Hospitality & Entertainment SEO Las Vegas', description: 'Specialized SEO for Las Vegas hotels, shows, and attractions.'},
  ],
  whyChooseSectionHeadline: 'TRAC: Your Trusted Las Vegas SEO Agency',
  whyChooseIntro: 'Partner with TRAC for effective, data-driven SEO services in Las Vegas.',
  whyChooseParagraph1: 'Our Las Vegas SEO team has deep knowledge of the local market, including the tourism sector.',
  whyChooseParagraph2: 'We employ ethical, cutting-edge SEO techniques to deliver sustainable growth for Las Vegas businesses.',
  whyChoosePoints: [
    { icon: 'TrendingUp', title: 'Las Vegas Search Growth', description: 'Improve your organic rankings and lead generation in Las Vegas.' },
    { icon: 'Lightbulb', title: 'Strategic Las Vegas SEO', description: 'Targeted SEO campaigns for the Las Vegas, NV audience.' },
    { icon: 'ShieldCheck', title: 'Reliable Las Vegas SEO Partner', description: 'Transparent and results-oriented SEO services in Las Vegas.' },
  ],
  awards: {
    clutch: { headline: 'Top Las Vegas SEO Agency - Clutch 2024', text: 'Recognized for excellence in Las Vegas SEO.' },
    upcity: { headline: 'Las Vegas SEO Excellence - UpCity 2024', text: 'Awarded for top-tier SEO services in Las Vegas.' },
  },
  location: {
    officeImageUrl: GENERIC_OFFICE_LOCATION_IMAGE_SRC,
    addressLines: ['1010 SEO Blvd', 'Suite 100', 'Las Vegas, NV 89101'],
    phone: CONTACT_DETAILS.phone,
    email: CONTACT_DETAILS.email,
  },
  bottomFormTitle: 'Request Your Las Vegas SEO Consultation',
};
