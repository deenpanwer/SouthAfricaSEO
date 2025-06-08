
import type { CityPageData } from '@/types';
import { Search, Settings, Users, Briefcase, Mail, BarChart2, TrendingUp, Lightbulb, ShieldCheck } from 'lucide-react';
import { CONTACT_DETAILS } from '@/lib/constants.tsx';

const GENERIC_CITY_HERO_IMAGE_SRC = 'https://placehold.co/800x500.png';
const GENERIC_OFFICE_LOCATION_IMAGE_SRC = 'https://placehold.co/600x400.png';

export const sanDiegoData: CityPageData = {
  slug: 'san-diego',
  cityName: 'San Diego',
  heroData: {
    pageTitle: 'San Diego SEO Company | TRAC - SEO Services San Diego, CA',
    metaDescription: 'TRAC is a San Diego SEO company helping businesses improve search rankings and drive organic traffic. Contact our San Diego SEO experts for a free quote.',
    heroTitle: 'San Diego SEO Company',
    heroSubtitle: 'Sunny SEO Success in San Diego with TRAC',
    heroDescription: 'TRAC provides expert SEO services for San Diego businesses. Our tailored strategies are designed to boost your online visibility, attract local customers, and drive growth in the beautiful San Diego market.',
    heroImage: { src: GENERIC_CITY_HERO_IMAGE_SRC, alt: 'SEO Services in San Diego, CA', dataAiHint: 'San Diego beach city' },
    heroVideoUrl: 'https://www.youtube.com/embed/JBPmDzL-Xek',
    formTitle: 'Free San Diego SEO Audit!',
  },
  resultsHeadline: 'SEO Success for San Diego Businesses',
  readyToGrowHeadline: 'Grow Your San Diego Business with SEO?',
  servicesSectionHeadline: 'San Diego SEO Services',
  servicesSectionSubheadline: 'Our SEO solutions are customized for the San Diego, California market.',
  services: [
    { icon: Search, title: 'San Diego Local SEO', description: 'Improve your local search presence in San Diego.' },
    { icon: Settings, title: 'Technical SEO for San Diego Sites', description: 'Optimize your website for San Diego search engines.' },
    { icon: Mail, title: 'Content Strategy for San Diego', description: 'Create content that targets San Diego audiences and boosts SEO.' },
    { icon: BarChart2, title: 'San Diego SEO Reporting', description: 'Track your SEO results in San Diego with transparent analytics.' },
  ],
  whyChooseSectionHeadline: 'TRAC: Your San Diego SEO Partner',
  whyChooseIntro: 'Choose TRAC for effective SEO strategies in San Diego.',
  whyChooseParagraph1: 'We understand the San Diego market and deliver SEO results.',
  whyChooseParagraph2: 'Our ethical SEO practices ensure long-term success for San Diego clients.',
  whyChoosePoints: [
    { icon: 'TrendingUp', title: 'San Diego SEO Growth', description: 'Increase visibility and leads in San Diego.' },
    { icon: 'Lightbulb', title: 'Local San Diego SEO', description: 'SEO for the San Diego, CA audience.' },
    { icon: 'ShieldCheck', title: 'Trusted San Diego SEO', description: 'Reliable SEO services in San Diego.' },
  ],
  awards: {
    clutch: { headline: 'Top San Diego SEO Agency - Clutch 2024', text: 'Recognized for SEO in San Diego.' },
    upcity: { headline: 'San Diego SEO Excellence - UpCity 2024', text: 'Awarded for SEO services in San Diego.' },
  },
  location: {
    officeImageUrl: GENERIC_OFFICE_LOCATION_IMAGE_SRC,
    addressLines: ['1919 SEO Coast', 'Suite 190', 'San Diego, CA 92101'],
    phone: CONTACT_DETAILS.phone,
    email: CONTACT_DETAILS.email,
  },
  bottomFormTitle: 'Get Your San Diego SEO Proposal',
};
