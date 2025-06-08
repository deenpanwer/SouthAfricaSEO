
import type { CityPageData } from '@/types';
import { Search, Settings, Users, Briefcase, Mail, BarChart2, TrendingUp, Lightbulb, ShieldCheck } from 'lucide-react';
import { CONTACT_DETAILS } from '@/lib/constants.tsx';

const GENERIC_CITY_HERO_IMAGE_SRC = 'https://placehold.co/800x500.png';
const GENERIC_OFFICE_LOCATION_IMAGE_SRC = 'https://placehold.co/600x400.png';

export const jacksonvilleData: CityPageData = {
  slug: 'jacksonville',
  cityName: 'Jacksonville',
  heroData: {
    pageTitle: 'Jacksonville SEO Company | TRAC - SEO Services Jacksonville, FL',
    metaDescription: 'TRAC is a Jacksonville SEO company helping businesses improve search rankings and drive organic traffic. Contact our Jacksonville SEO experts for a free quote.',
    heroTitle: 'Jacksonville SEO Company',
    heroSubtitle: 'Shine Online in Jacksonville with TRAC SEO',
    heroDescription: 'TRAC provides expert SEO services for Jacksonville businesses. Our tailored strategies are designed to boost your online visibility, attract local customers, and drive growth in the Jacksonville market.',
    heroImage: { src: GENERIC_CITY_HERO_IMAGE_SRC, alt: 'SEO Services in Jacksonville, FL', dataAiHint: 'Jacksonville city beach' },
    heroVideoUrl: 'https://www.youtube.com/embed/JBPmDzL-Xek',
    formTitle: 'Free Jacksonville SEO Audit!',
  },
  resultsHeadline: 'SEO Success for Jacksonville Businesses',
  readyToGrowHeadline: 'Grow Your Jacksonville Business with SEO?',
  servicesSectionHeadline: 'Jacksonville SEO Services',
  servicesSectionSubheadline: 'Our SEO solutions are customized for the Jacksonville, Florida market.',
  services: [
    { icon: Search, title: 'Jacksonville Local SEO', description: 'Improve your local search presence in Jacksonville.' },
    { icon: Settings, title: 'Technical SEO for Jacksonville Sites', description: 'Optimize your website for Jacksonville search engines.' },
    { icon: Mail, title: 'Content Strategy for Jacksonville', description: 'Create content that targets Jacksonville audiences and boosts SEO.' },
    { icon: BarChart2, title: 'Jacksonville SEO Reporting', description: 'Track your SEO results in Jacksonville with transparent analytics.' },
  ],
  whyChooseSectionHeadline: 'TRAC: Your Jacksonville SEO Partner',
  whyChooseIntro: 'Choose TRAC for effective SEO strategies in Jacksonville.',
  whyChooseParagraph1: 'We understand the Jacksonville market and deliver SEO results.',
  whyChooseParagraph2: 'Our ethical SEO practices ensure long-term success for Jacksonville clients.',
  whyChoosePoints: [
    { icon: 'TrendingUp', title: 'Jacksonville SEO Growth', description: 'Increase visibility and leads in Jacksonville.' },
    { icon: 'Lightbulb', title: 'Local Jacksonville SEO', description: 'SEO for the Jacksonville, FL audience.' },
    { icon: 'ShieldCheck', title: 'Trusted Jacksonville SEO', description: 'Reliable SEO services in Jacksonville.' },
  ],
  awards: {
    clutch: { headline: 'Top Jacksonville SEO Agency - Clutch 2024', text: 'Recognized for SEO in Jacksonville.' },
    upcity: { headline: 'Jacksonville SEO Excellence - UpCity 2024', text: 'Awarded for SEO services in Jacksonville.' },
  },
  location: {
    officeImageUrl: GENERIC_OFFICE_LOCATION_IMAGE_SRC,
    addressLines: ['808 SEO Dr', 'Suite 80', 'Jacksonville, FL 32201'],
    phone: CONTACT_DETAILS.phone,
    email: CONTACT_DETAILS.email,
  },
  bottomFormTitle: 'Get Your Jacksonville SEO Proposal',
};
