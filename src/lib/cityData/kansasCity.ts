
import type { CityPageData } from '@/types';
import { Search, Settings, Users, Briefcase, Mail, BarChart2, TrendingUp, Lightbulb, ShieldCheck } from 'lucide-react';
import { CONTACT_DETAILS } from '@/lib/constants.tsx';
import { GENERIC_CITY_HERO_IMAGE_SRC, GENERIC_OFFICE_LOCATION_IMAGE_SRC } from '@/lib/cityConstants';

export const kansasCityData: CityPageData = {
  slug: 'kansas-city',
  cityName: 'Kansas City',
  heroData: {
    pageTitle: 'Kansas City SEO Services | TRAC - SEO Experts KC',
    metaDescription: 'TRAC provides expert SEO services for Kansas City businesses. Drive organic traffic, improve rankings, and achieve growth in KC. Get your free SEO consultation!',
    heroTitle: 'Kansas City SEO Agency',
    heroSubtitle: 'Boost Your Brand in Kansas City with SEO',
    heroDescription: 'TRAC helps Kansas City businesses enhance their online visibility and attract more customers through effective SEO strategies. We specialize in local SEO, technical optimization, and content marketing tailored for the Kansas City market.',
    heroImage: { src: GENERIC_CITY_HERO_IMAGE_SRC, alt: 'SEO Services in Kansas City, MO', dataAiHint: 'Kansas City skyline' },
    heroVideoUrl: 'https://www.youtube.com/embed/JBPmDzL-Xek',
    formTitle: 'Free Kansas City SEO Quote!',
  },
  resultsHeadline: 'SEO Success Stories in Kansas City',
  readyToGrowHeadline: 'Elevate Your Kansas City SEO?',
  servicesSectionHeadline: 'Kansas City SEO Services',
  servicesSectionSubheadline: 'Customized SEO solutions to help your Kansas City business thrive online.',
  services: [
    { icon: Search, title: 'Local SEO for Kansas City', description: 'Optimize for Kansas City local search to attract more customers.' },
    { icon: Settings, title: 'Kansas City Website SEO', description: 'Improve your Kansas City website\'s technical SEO for higher rankings.' },
    { icon: Mail, title: 'Content for Kansas City SEO', description: 'Create SEO-friendly content that engages the Kansas City audience.' },
    { icon: BarChart2, title: 'Kansas City SEO Analytics', description: 'Track your SEO performance and ROI in the Kansas City market.' },
  ],
  whyChooseSectionHeadline: 'Why TRAC for Kansas City SEO?',
  whyChooseIntro: 'TRAC offers specialized SEO strategies for businesses in Kansas City.',
  whyChooseParagraph1: 'Our Kansas City SEO team understands the local market and business needs.',
  whyChooseParagraph2: 'We focus on ethical SEO to deliver sustainable results for Kansas City clients.',
  whyChoosePoints: [
    { icon: 'TrendingUp', title: 'Kansas City SEO Growth', description: 'Increase your search visibility and leads in Kansas City.' },
    { icon: 'Lightbulb', title: 'Targeted KC SEO', description: 'SEO strategies built for the Kansas City audience.' },
    { icon: 'ShieldCheck', title: 'Proven KC SEO', description: 'Reliable SEO services that drive results in Kansas City.' },
  ],
  awards: {
    clutch: { headline: 'Top Kansas City SEO Agency - Clutch 2024', text: 'Recognized for leading SEO services in KC.' },
    upcity: { headline: 'Kansas City SEO Excellence - UpCity 2024', text: 'Awarded for impactful SEO in Kansas City.' },
  },
  location: {
    officeImageUrl: GENERIC_OFFICE_LOCATION_IMAGE_SRC,
    addressLines: ['909 SEO Pl', 'Suite 90', 'Kansas City, MO 64101'],
    phone: CONTACT_DETAILS.phone,
    email: CONTACT_DETAILS.email,
  },
  bottomFormTitle: 'Get Your Kansas City SEO Plan',
};
