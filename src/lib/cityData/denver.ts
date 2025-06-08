
import type { CityPageData } from '@/types';
import { Search, Settings, Mail, BarChart2, TrendingUp, Lightbulb, ShieldCheck } from 'lucide-react';
import { CONTACT_DETAILS } from '@/lib/constants.tsx';

const GENERIC_CITY_HERO_IMAGE_SRC = 'https://placehold.co/800x500.png';
const GENERIC_OFFICE_LOCATION_IMAGE_SRC = 'https://placehold.co/600x400.png';

export const denverData: CityPageData = {
  slug: 'denver',
  cityName: 'Denver',
  heroData: {
    pageTitle: 'Denver SEO Agency | TRAC - Expert SEO Services in Denver, CO',
    metaDescription: 'TRAC provides expert SEO services for Denver businesses. Drive organic traffic, improve rankings, and achieve growth in the Denver market. Get your free SEO consultation!',
    heroTitle: 'Denver SEO Agency: Elevating Mile High Businesses',
    heroSubtitle: 'Reach New Peaks in Denver with TRAC\'s Strategic SEO',
    heroDescription: 'TRAC empowers Denver businesses to conquer the digital landscape with specialized SEO services. In the vibrant and competitive Mile High City, standing out online is crucial for growth. We craft tailored SEO strategies that resonate with the Denver audience, driving targeted organic traffic and converting searches into loyal customers. Our approach begins with a deep understanding of your business, the unique Denver market, and your specific objectives, ensuring our SEO efforts are perfectly aligned with your goals. We focus on comprehensive local SEO to capture Denver-specific searches, advanced technical optimization for peak website performance, and compelling content creation that establishes your authority. Furthermore, TRAC is committed to transparent reporting and ethical practices, providing you with clear insights into your campaign\'s success and a sustainable path to online leadership in Denver. Let us help your Denver business thrive.',
    heroImage: { src: GENERIC_CITY_HERO_IMAGE_SRC, alt: 'SEO Services in Denver, CO', dataAiHint: 'Denver city mountains' },
    heroVideoUrl: 'https://www.youtube.com/embed/JBPmDzL-Xek',
    formTitle: 'Free Denver SEO Proposal!',
  },
  resultsHeadline: 'SEO Success for Denver\'s Mile High Businesses',
  readyToGrowHeadline: 'Elevate Your Denver Business with SEO?',
  servicesSectionHeadline: 'Denver SEO Services Tailored for You',
  servicesSectionSubheadline: 'Custom SEO solutions to help your Denver business stand out online.',
  services: [
    { icon: Search, title: 'Local SEO for Denver', description: 'Optimize your online presence to attract customers actively searching for your services in the Denver metropolitan area and specific neighborhoods. We enhance your Google Business Profile and local citations.' },
    { icon: Settings, title: 'Denver Website SEO Optimization', description: 'Improve your Denver-focused website\'s technical SEO aspects, including site speed, mobile-friendliness, and schema markup, to achieve better search engine rankings and user experience.' },
    { icon: Mail, title: 'Content Strategy for Denver SEO', description: 'Create high-quality, SEO-friendly content that addresses the needs of the Denver audience, establishes your authority, and drives organic traffic and conversions.' },
    { icon: BarChart2, title: 'Denver SEO Analytics & Reporting', description: 'Track your SEO performance and ROI in the Denver market with detailed, transparent reports. We focus on metrics that matter for your business growth in Denver.' },
  ],
  whyChooseSectionHeadline: 'Why TRAC for Denver SEO?',
  whyChooseIntro: 'TRAC offers specialized SEO strategies for businesses in Denver, Colorado, focusing on delivering measurable results and sustainable online growth in the Mile High City.',
  whyChooseParagraph1: 'Our Denver SEO team possesses an in-depth understanding of the local market dynamics, including the tech startup scene and the outdoor recreation industry. We tailor our SEO services to leverage these unique aspects, ensuring your Denver business connects effectively with its target audience.',
  whyChooseParagraph2: 'We are committed to ethical, white-hat SEO practices that build long-term value for your Denver business. Our focus is on creating a strong, authoritative online presence that withstands algorithm updates and consistently drives qualified leads and sales in the Denver area.',
  whyChoosePoints: [
    { icon: 'TrendingUp', title: 'Denver SEO Growth & ROI', description: 'Increase your search visibility, organic traffic, and lead generation in Denver with our results-oriented SEO campaigns. We prioritize strategies that deliver a clear return on investment for Denver businesses.' },
    { icon: 'Lightbulb', title: 'Targeted Denver SEO Strategies', description: 'Benefit from SEO strategies specifically built for the Denver, CO audience, considering local search behavior, industry competition, and seasonal trends relevant to the Mile High City.' },
    { icon: 'ShieldCheck', title: 'Proven & Reliable Denver SEO', description: 'Partner with a trusted Denver SEO agency known for transparent communication, reliable service, and a proven track record of driving significant results for businesses in Denver and surrounding areas.' },
  ],
  awards: {
    clutch: { headline: 'Top Denver SEO Agency - Clutch 2024', text: 'Recognized by Clutch for delivering leading SEO services and achieving exceptional client success in the competitive Denver market.' },
    upcity: { headline: 'Denver SEO Excellence Award - UpCity 2024', text: 'Awarded by UpCity for impactful SEO strategies and consistent, high-quality results for businesses in Denver.' },
  },
  location: {
    officeImageUrl: GENERIC_OFFICE_LOCATION_IMAGE_SRC,
    addressLines: ['606 SEO Pkwy', 'Suite 60', 'Denver, CO 80201'],
    phone: CONTACT_DETAILS.phone,
    email: CONTACT_DETAILS.email,
  },
  bottomFormTitle: 'Get Your Denver SEO Plan',
};
