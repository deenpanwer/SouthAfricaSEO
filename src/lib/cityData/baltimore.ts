
import type { CityPageData } from '@/types';
import { Search, Settings, Users, Briefcase, Mail, BarChart2, TrendingUp, Lightbulb, ShieldCheck } from 'lucide-react';
import { CONTACT_DETAILS } from '@/lib/constants.tsx';

const GENERIC_CITY_HERO_IMAGE_SRC = 'https://placehold.co/800x500.png';
const GENERIC_OFFICE_LOCATION_IMAGE_SRC = 'https://placehold.co/600x400.png';

export const baltimoreData: CityPageData = {
  slug: 'baltimore',
  cityName: 'Baltimore',
  heroData: {
    pageTitle: 'Baltimore SEO Agency | TRAC - SEO Services in Baltimore, MD',
    metaDescription: 'TRAC provides top-tier SEO services for Baltimore businesses. Improve your search rankings, drive organic traffic, and increase sales in Baltimore. Get a free SEO consultation!',
    heroTitle: 'Baltimore SEO Experts',
    heroSubtitle: 'Boost Your Baltimore Business with Strategic SEO',
    heroDescription: 'TRAC helps Baltimore businesses achieve higher search engine rankings and increased online visibility. Our tailored SEO strategies are designed for the Baltimore market, focusing on results that matter.',
    heroImage: { src: GENERIC_CITY_HERO_IMAGE_SRC, alt: 'SEO Services in Baltimore, MD', dataAiHint: 'Baltimore harbor business' },
    heroVideoUrl: 'https://www.youtube.com/embed/JBPmDzL-Xek',
    formTitle: 'Free Baltimore SEO Quote!',
  },
  resultsHeadline: 'SEO Success Stories in Baltimore',
  readyToGrowHeadline: 'Elevate Your Baltimore SEO Strategy?',
  servicesSectionHeadline: 'Baltimore SEO Services',
  servicesSectionSubheadline: 'Comprehensive SEO solutions to grow your Baltimore business\'s online presence.',
  services: [
    { icon: Search, title: 'Local SEO for Baltimore', description: 'Rank higher in Baltimore local searches and attract more customers.' },
    { icon: Settings, title: 'Baltimore Website SEO Audits', description: 'Identify and fix technical SEO issues on your Baltimore-focused website.' },
    { icon: Mail, title: 'Content for Baltimore SEO', description: 'Create content that engages Baltimore audiences and improves SEO.' },
    { icon: BarChart2, title: 'Track Your Baltimore SEO', description: 'Monitor SEO performance with clear, data-driven reports for Baltimore.' },
  ],
  whyChooseSectionHeadline: 'Why Choose TRAC for Baltimore SEO?',
  whyChooseIntro: 'TRAC offers effective, customized SEO strategies for businesses in Baltimore.',
  whyChooseParagraph1: 'Our Baltimore SEO experts understand the local competitive landscape.',
  whyChooseParagraph2: 'We focus on ethical SEO that delivers long-term results for Baltimore clients.',
  whyChoosePoints: [
    { icon: 'TrendingUp', title: 'Baltimore SEO Growth', description: 'Achieve better rankings and more traffic in Baltimore.' },
    { icon: 'Lightbulb', title: 'Targeted Baltimore SEO', description: 'SEO strategies designed for the Baltimore, MD market.' },
    { icon: 'ShieldCheck', title: 'Reliable Baltimore SEO', description: 'Sustainable and effective SEO for Baltimore businesses.' },
  ],
  awards: {
    clutch: { headline: 'Top Baltimore SEO Firm - Clutch 2024', text: 'Recognized for impactful SEO in Baltimore.' },
    upcity: { headline: 'Baltimore SEO Leader - UpCity 2024', text: 'Awarded for premier SEO services in Baltimore.' },
  },
  location: {
    officeImageUrl: GENERIC_OFFICE_LOCATION_IMAGE_SRC,
    addressLines: ['404 SEO St', 'Suite 40', 'Baltimore, MD 21201'],
    phone: CONTACT_DETAILS.phone,
    email: CONTACT_DETAILS.email,
  },
  bottomFormTitle: 'Get Your Baltimore SEO Proposal',
};
