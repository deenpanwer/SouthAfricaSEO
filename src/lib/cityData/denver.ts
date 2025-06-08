
import type { CityPageData } from '@/types';
import { Search, Settings, Users, Briefcase, Mail, BarChart2, TrendingUp, Lightbulb, ShieldCheck } from 'lucide-react';
import { CONTACT_DETAILS } from '@/lib/constants.tsx';
import { GENERIC_CITY_HERO_IMAGE_SRC, GENERIC_OFFICE_LOCATION_IMAGE_SRC } from '@/lib/cityConstants';

export const denverData: CityPageData = {
  slug: 'denver',
  cityName: 'Denver',
  heroData: {
    pageTitle: 'Denver SEO Agency | TRAC - Expert SEO Services in Denver, CO',
    metaDescription: 'TRAC provides expert SEO services for Denver businesses. Drive organic traffic, improve rankings, and achieve growth in the Denver market. Get your free SEO consultation!',
    heroTitle: 'Denver SEO Agency',
    heroSubtitle: 'Reach New Heights in Denver with Our SEO',
    heroDescription: 'TRAC helps Denver businesses improve their search engine visibility and attract more customers through targeted SEO strategies. We specialize in local SEO, technical optimization, and content marketing for the Denver area.',
    heroImage: { src: GENERIC_CITY_HERO_IMAGE_SRC, alt: 'SEO Services in Denver, CO', dataAiHint: 'Denver city mountains' },
    heroVideoUrl: 'https://www.youtube.com/embed/JBPmDzL-Xek',
    formTitle: 'Free Denver SEO Proposal!',
  },
  resultsHeadline: 'SEO Success for Denver\'s Mile High Businesses',
  readyToGrowHeadline: 'Elevate Your Denver Business with SEO?',
  servicesSectionHeadline: 'Denver SEO Services Tailored for You',
  servicesSectionSubheadline: 'Custom SEO solutions to help your Denver business stand out online.',
  services: [
    { icon: Search, title: 'Local SEO for Denver', description: 'Optimize for Denver local search to attract customers in your area.' },
    { icon: Settings, title: 'Denver Website SEO Optimization', description: 'Improve your Denver website\'s technical SEO for better rankings.' },
    { icon: Mail, title: 'Content Strategy for Denver SEO', description: 'Create SEO-friendly content that resonates with the Denver audience.' },
    { icon: BarChart2, title: 'Denver SEO Analytics', description: 'Track your SEO performance and ROI in the Denver market.' },
  ],
  whyChooseSectionHeadline: 'Why TRAC for Denver SEO?',
  whyChooseIntro: 'TRAC offers specialized SEO strategies for businesses in Denver, Colorado.',
  whyChooseParagraph1: 'Our Denver SEO team understands the unique aspects of the Mile High City market.',
  whyChooseParagraph2: 'We focus on ethical and effective SEO to deliver lasting results for Denver clients.',
  whyChoosePoints: [
    { icon: 'TrendingUp', title: 'Denver SEO Growth', description: 'Increase your search visibility and leads in Denver.' },
    { icon: 'Lightbulb', title: 'Targeted Denver SEO', description: 'SEO strategies built for the Denver, CO audience.' },
    { icon: 'ShieldCheck', title: 'Proven Denver SEO', description: 'Reliable SEO services that drive results in Denver.' },
  ],
  awards: {
    clutch: { headline: 'Top Denver SEO Agency - Clutch 2024', text: 'Recognized for leading SEO services in Denver.' },
    upcity: { headline: 'Denver SEO Excellence - UpCity 2024', text: 'Awarded for impactful SEO in Denver.' },
  },
  location: {
    officeImageUrl: GENERIC_OFFICE_LOCATION_IMAGE_SRC,
    addressLines: ['606 SEO Pkwy', 'Suite 60', 'Denver, CO 80201'],
    phone: CONTACT_DETAILS.phone,
    email: CONTACT_DETAILS.email,
  },
  bottomFormTitle: 'Get Your Denver SEO Plan',
};
