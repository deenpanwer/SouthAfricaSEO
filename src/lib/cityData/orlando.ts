
import type { CityPageData } from '@/types';
import { Search, Settings, Users, Briefcase, Mail, BarChart2, TrendingUp, Lightbulb, ShieldCheck } from 'lucide-react';
import { CONTACT_DETAILS } from '@/lib/constants.tsx';
import { GENERIC_CITY_HERO_IMAGE_SRC, GENERIC_OFFICE_LOCATION_IMAGE_SRC } from '@/lib/cityConstants';

export const orlandoData: CityPageData = {
  slug: 'orlando',
  cityName: 'Orlando',
  heroData: {
    pageTitle: 'Orlando SEO Company | TRAC - SEO Services Orlando, FL',
    metaDescription: 'TRAC is an Orlando SEO company helping businesses improve search rankings and drive organic traffic. Contact our Orlando SEO experts for a free quote.',
    heroTitle: 'Orlando SEO Company',
    heroSubtitle: 'Unlock Magical SEO Results in Orlando with TRAC',
    heroDescription: 'TRAC provides expert SEO services for Orlando businesses. Our tailored strategies are designed to boost your online visibility, attract local and tourist customers, and drive growth in the Orlando market.',
    heroImage: { src: GENERIC_CITY_HERO_IMAGE_SRC, alt: 'SEO Services in Orlando, FL', dataAiHint: 'Orlando theme park' },
    heroVideoUrl: 'https://www.youtube.com/embed/JBPmDzL-Xek',
    formTitle: 'Free Orlando SEO Audit!',
  },
  resultsHeadline: 'SEO Success for Orlando Businesses',
  readyToGrowHeadline: 'Grow Your Orlando Business with SEO?',
  servicesSectionHeadline: 'Orlando SEO Services',
  servicesSectionSubheadline: 'Our SEO solutions are customized for the Orlando, Florida market, focusing on tourism and local business growth.',
  services: [
    { icon: Search, title: 'Orlando Local & Tourism SEO', description: 'Improve your local and tourist search presence in Orlando.' },
    { icon: Settings, title: 'Technical SEO for Orlando Sites', description: 'Optimize your website for Orlando search engines and user experience.' },
    { icon: Mail, title: 'Content Strategy for Orlando', description: 'Create content that targets Orlando audiences, including visitors, and boosts SEO.' },
    { icon: BarChart2, title: 'Orlando SEO Reporting', description: 'Track your SEO results in Orlando with transparent analytics.' },
  ],
  whyChooseSectionHeadline: 'TRAC: Your Orlando SEO Partner',
  whyChooseIntro: 'Choose TRAC for effective SEO strategies in Orlando.',
  whyChooseParagraph1: 'We understand the Orlando market, especially tourism, and deliver SEO results.',
  whyChooseParagraph2: 'Our ethical SEO practices ensure long-term success for Orlando clients.',
  whyChoosePoints: [
    { icon: 'TrendingUp', title: 'Orlando SEO Growth', description: 'Increase visibility and leads in Orlando.' },
    { icon: 'Lightbulb', title: 'Local Orlando SEO', description: 'SEO for the Orlando, FL audience and tourist sector.' },
    { icon: 'ShieldCheck', title: 'Trusted Orlando SEO', description: 'Reliable SEO services in Orlando.' },
  ],
  awards: {
    clutch: { headline: 'Top Orlando SEO Agency - Clutch 2024', text: 'Recognized for SEO in Orlando.' },
    upcity: { headline: 'Orlando SEO Excellence - UpCity 2024', text: 'Awarded for SEO services in Orlando.' },
  },
  location: {
    officeImageUrl: GENERIC_OFFICE_LOCATION_IMAGE_SRC,
    addressLines: ['1515 SEO Dr', 'Suite 150', 'Orlando, FL 32801'],
    phone: CONTACT_DETAILS.phone,
    email: CONTACT_DETAILS.email,
  },
  bottomFormTitle: 'Get Your Orlando SEO Proposal',
};
