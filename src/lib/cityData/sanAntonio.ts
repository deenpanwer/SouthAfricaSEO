
import type { CityPageData } from '@/types';
import { Search, Settings, Users, Briefcase, Mail, BarChart2, TrendingUp, Lightbulb, ShieldCheck } from 'lucide-react';
import { CONTACT_DETAILS } from '@/lib/constants.tsx';
import { GENERIC_CITY_HERO_IMAGE_SRC, GENERIC_OFFICE_LOCATION_IMAGE_SRC } from '@/lib/cityConstants';

export const sanAntonioData: CityPageData = {
  slug: 'san-antonio',
  cityName: 'San Antonio',
  heroData: {
    pageTitle: 'San Antonio SEO Services | TRAC - SEO Experts San Antonio, TX',
    metaDescription: 'TRAC is a San Antonio SEO agency helping businesses improve online visibility and drive organic growth. Contact our San Antonio SEO specialists for a free consultation.',
    heroTitle: 'San Antonio SEO Experts',
    heroSubtitle: 'Remember the Alamo, And Your SEO! - TRAC',
    heroDescription: 'TRAC offers comprehensive SEO services for businesses in San Antonio, Texas. Our tailored strategies focus on improving your search engine rankings, attracting qualified local traffic, and increasing your ROI in the historic San Antonio market.',
    heroImage: { src: GENERIC_CITY_HERO_IMAGE_SRC, alt: 'SEO Services in San Antonio, TX', dataAiHint: 'San Antonio riverwalk' },
    heroVideoUrl: 'https://www.youtube.com/embed/JBPmDzL-Xek',
    formTitle: 'Get Your FREE San Antonio SEO Strategy!',
  },
  resultsHeadline: 'Delivering Historic SEO Results in San Antonio',
  readyToGrowHeadline: 'Ready to Boost Your San Antonio SEO?',
  servicesSectionHeadline: 'Customized San Antonio SEO Solutions',
  servicesSectionSubheadline: 'Our SEO services are designed to make your San Antonio business a leader in organic search.',
  services: [
    { icon: Search, title: 'San Antonio Local SEO Strategy', description: 'Dominate local search in San Antonio and connect with more customers.' },
    { icon: Settings, title: 'Technical SEO for San Antonio Websites', description: 'Optimize your website\'s technical health for peak SEO performance in San Antonio.' },
    { icon: Mail, title: 'San Antonio SEO Content Marketing', description: 'Create compelling content that ranks in San Antonio and converts visitors.' },
    { icon: Briefcase, title: 'Tourism & Heritage SEO San Antonio', description: 'Specialized SEO for San Antonio\'s tourism, historical sites, and cultural attractions.'},
  ],
  whyChooseSectionHeadline: 'TRAC: Your Trusted San Antonio SEO Agency',
  whyChooseIntro: 'Partner with TRAC for effective, data-driven SEO services in San Antonio.',
  whyChooseParagraph1: 'Our San Antonio SEO team has deep knowledge of the local market and its rich heritage.',
  whyChooseParagraph2: 'We employ ethical, cutting-edge SEO techniques to deliver sustainable growth for San Antonio businesses.',
  whyChoosePoints: [
    { icon: 'TrendingUp', title: 'San Antonio Search Growth', description: 'Improve your organic rankings and lead generation in San Antonio.' },
    { icon: 'Lightbulb', title: 'Strategic San Antonio SEO', description: 'Targeted SEO campaigns for the San Antonio, TX audience.' },
    { icon: 'ShieldCheck', title: 'Reliable San Antonio SEO Partner', description: 'Transparent and results-oriented SEO services in San Antonio.' },
  ],
  awards: {
    clutch: { headline: 'Top San Antonio SEO Agency - Clutch 2024', text: 'Recognized for excellence in San Antonio SEO.' },
    upcity: { headline: 'San Antonio SEO Excellence - UpCity 2024', text: 'Awarded for top-tier SEO services in San Antonio.' },
  },
  location: {
    officeImageUrl: GENERIC_OFFICE_LOCATION_IMAGE_SRC,
    addressLines: ['1818 SEO Riverwalk', 'Suite 180', 'San Antonio, TX 78201'],
    phone: CONTACT_DETAILS.phone,
    email: CONTACT_DETAILS.email,
  },
  bottomFormTitle: 'Request Your San Antonio SEO Consultation',
};
