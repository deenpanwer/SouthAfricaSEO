
import type { CityPageData } from '@/types';
import { Search, Settings, Users, Briefcase, Mail, BarChart2, TrendingUp, Lightbulb, ShieldCheck } from 'lucide-react';
import { CONTACT_DETAILS } from '@/lib/constants.tsx';

const GENERIC_CITY_HERO_IMAGE_SRC = 'https://placehold.co/800x500.png';
const GENERIC_OFFICE_LOCATION_IMAGE_SRC = 'https://placehold.co/600x400.png';

export const atlantaData: CityPageData = {
  slug: 'atlanta',
  cityName: 'Atlanta',
  heroData: {
    pageTitle: 'Atlanta SEO Experts | TRAC - Drive Growth in Atlanta, GA',
    metaDescription: 'TRAC offers leading SEO services for Atlanta businesses. Increase your website traffic, get more leads, and dominate Atlanta search results. Contact us for a free SEO consultation!',
    heroTitle: 'Atlanta SEO Agency',
    heroSubtitle: 'Unlock Atlanta\'s Market with Powerful SEO',
    heroDescription: 'TRAC provides expert SEO services for Atlanta businesses looking to enhance their online footprint. We focus on creating custom SEO campaigns that drive organic traffic and deliver results in the competitive Atlanta market.',
    heroImage: { src: GENERIC_CITY_HERO_IMAGE_SRC, alt: 'SEO Services in Atlanta, GA', dataAiHint: 'Atlanta city business' },
    heroVideoUrl: 'https://www.youtube.com/embed/JBPmDzL-Xek',
    formTitle: 'Free Atlanta SEO Analysis!',
  },
  resultsHeadline: 'Proven SEO Results for Atlanta Businesses',
  readyToGrowHeadline: 'Boost Your Atlanta SEO Performance?',
  servicesSectionHeadline: 'Atlanta-Focused SEO Services',
  servicesSectionSubheadline: 'Our SEO experts craft data-driven strategies to enhance your online visibility in Atlanta.',
  services: [
    { icon: Search, title: 'Atlanta Local SEO', description: 'Improve your local search rankings in Atlanta and connect with more customers.' },
    { icon: Settings, title: 'Technical SEO for Atlanta Websites', description: 'Optimize your site\'s technical aspects for better performance in Atlanta search results.' },
    { icon: Mail, title: 'Atlanta SEO Content Strategy', description: 'Develop content that engages Atlanta users and improves search engine rankings.' },
    { icon: BarChart2, title: 'SEO Analytics for Atlanta', description: 'Track your Atlanta SEO progress with detailed reports and insights.' },
  ],
  whyChooseSectionHeadline: 'Why TRAC for Atlanta SEO?',
  whyChooseIntro: 'TRAC is your dedicated partner for achieving SEO success in the Atlanta market.',
  whyChooseParagraph1: 'We understand the unique SEO challenges and opportunities in Atlanta. Our tailored strategies help your business grow.',
  whyChooseParagraph2: 'Our commitment is to ethical SEO practices and delivering measurable results for our Atlanta clients.',
  whyChoosePoints: [
    { icon: 'TrendingUp', title: 'Atlanta SEO Growth', description: 'Increase organic visibility and leads in Atlanta.' },
    { icon: 'Lightbulb', title: 'Atlanta Market SEO', description: 'SEO strategies designed for the Atlanta, GA audience.' },
    { icon: 'ShieldCheck', title: 'Reliable Atlanta SEO', description: 'Transparent and effective SEO services for Atlanta businesses.' },
  ],
  awards: {
    clutch: { headline: 'Clutch Top SEO Firm in Atlanta 2024', text: 'Recognized for SEO excellence in Atlanta.' },
    upcity: { headline: 'UpCity Atlanta SEO Leader 2024', text: 'Awarded for delivering top SEO results in Atlanta.' },
  },
  location: {
    officeImageUrl: GENERIC_OFFICE_LOCATION_IMAGE_SRC,
    addressLines: ['202 SEO Blvd', 'Suite 20', 'Atlanta, GA 30301'],
    phone: CONTACT_DETAILS.phone,
    email: CONTACT_DETAILS.email,
  },
  bottomFormTitle: 'Get Your Atlanta SEO Strategy',
};
