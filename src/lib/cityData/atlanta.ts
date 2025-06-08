
import type { CityPageData } from '@/types';
import { Search, Settings, Mail, BarChart2, TrendingUp, Lightbulb, ShieldCheck } from 'lucide-react';
import { CONTACT_DETAILS } from '@/lib/constants.tsx';

const GENERIC_CITY_HERO_IMAGE_SRC = 'https://placehold.co/800x500.png';
const GENERIC_OFFICE_LOCATION_IMAGE_SRC = 'https://placehold.co/600x400.png';

export const atlantaData: CityPageData = {
  slug: 'atlanta',
  cityName: 'Atlanta',
  heroData: {
    pageTitle: 'Atlanta SEO Experts | TRAC - Drive Growth in Atlanta, GA',
    metaDescription: 'TRAC offers leading SEO services for Atlanta businesses. Increase your website traffic, get more leads, and dominate Atlanta search results. Contact us for a free SEO consultation!',
    heroTitle: 'Atlanta SEO Agency: Propelling Your Business to the Forefront',
    heroSubtitle: 'Unlock Atlanta\'s Market with Powerful, Data-Driven SEO Strategies',
    heroDescription: 'TRAC provides expert SEO services for Atlanta businesses looking to significantly enhance their online footprint and drive sustainable growth. We focus on creating custom SEO campaigns that generate high-quality organic traffic and deliver measurable results in the competitive Atlanta market. Our team dives deep into understanding your business, target audience, and specific goals within Atlanta to craft strategies that truly perform. From local SEO optimization targeting Atlanta neighborhoods to comprehensive technical audits and engaging content marketing, we cover all aspects of search engine optimization. We are committed to transparency, providing clear insights into your campaign\'s progress and the ROI achieved. Partner with TRAC to navigate the complexities of Atlanta SEO and establish a dominant online presence in Georgia\'s vibrant capital.',
    heroImage: { src: GENERIC_CITY_HERO_IMAGE_SRC, alt: 'SEO Services in Atlanta, GA', dataAiHint: 'Atlanta city business' },
    heroVideoUrl: 'https://www.youtube.com/embed/JBPmDzL-Xek',
    formTitle: 'Free Atlanta SEO Analysis!',
  },
  resultsHeadline: 'Proven SEO Results for Atlanta Businesses',
  readyToGrowHeadline: 'Boost Your Atlanta SEO Performance?',
  servicesSectionHeadline: 'Atlanta-Focused SEO Services',
  servicesSectionSubheadline: 'Our SEO experts craft data-driven strategies to enhance your online visibility and connect with customers in Atlanta.',
  services: [
    { icon: Search, title: 'Atlanta Local SEO & GMB Optimization', description: 'Improve your local search rankings in Atlanta and connect with more customers in your service area. We optimize your Google Business Profile and local listings for maximum impact.' },
    { icon: Settings, title: 'Technical SEO for Atlanta Websites', description: 'Optimize your site\'s technical aspects, including speed, mobile-friendliness, and schema markup, for better performance in Atlanta search results and enhanced user experience.' },
    { icon: Mail, title: 'Atlanta SEO Content Strategy & Creation', description: 'Develop high-quality, authoritative content that engages Atlanta users, addresses their pain points, and improves search engine rankings for relevant keywords.' },
    { icon: BarChart2, title: 'SEO Analytics & Reporting for Atlanta', description: 'Track your Atlanta SEO progress with detailed, transparent reports and insights. We focus on metrics that matter, like organic traffic, conversions, and keyword improvements.' },
  ],
  whyChooseSectionHeadline: 'Why TRAC for Atlanta SEO?',
  whyChooseIntro: 'TRAC is your dedicated partner for achieving SEO success in the dynamic and competitive Atlanta market. We bring local expertise and proven strategies.',
  whyChooseParagraph1: 'We understand the unique SEO challenges and opportunities present in Atlanta. Our tailored strategies are designed to help your business grow by reaching the right audience with the right message, ensuring you stand out from the competition.',
  whyChooseParagraph2: 'Our commitment is to ethical, white-hat SEO practices and delivering measurable results for our Atlanta clients. We believe in building long-term partnerships based on trust, transparency, and consistent performance.',
  whyChoosePoints: [
    { icon: 'TrendingUp', title: 'Atlanta SEO Growth & ROI', description: 'Increase organic visibility, generate more qualified leads, and achieve a strong return on investment with our targeted Atlanta SEO campaigns.' },
    { icon: 'Lightbulb', title: 'Atlanta Market SEO Expertise', description: 'Leverage SEO strategies specifically designed for the Atlanta, GA audience, considering local search trends and consumer behavior.' },
    { icon: 'ShieldCheck', title: 'Reliable & Transparent Atlanta SEO', description: 'Experience transparent communication and effective SEO services that build sustainable online success for your Atlanta business.' },
  ],
  awards: {
    clutch: { headline: 'Clutch Top SEO Firm in Atlanta 2024', text: 'Recognized by Clutch for consistent SEO excellence and client satisfaction in the Atlanta metropolitan area.' },
    upcity: { headline: 'UpCity Atlanta SEO Leader 2024', text: 'Awarded by UpCity for delivering top-tier SEO results and strategic insights to businesses in Atlanta.' },
  },
  location: {
    officeImageUrl: GENERIC_OFFICE_LOCATION_IMAGE_SRC,
    addressLines: ['202 SEO Blvd', 'Suite 20', 'Atlanta, GA 30301'],
    phone: CONTACT_DETAILS.phone,
    email: CONTACT_DETAILS.email,
  },
  bottomFormTitle: 'Get Your Atlanta SEO Strategy',
};
