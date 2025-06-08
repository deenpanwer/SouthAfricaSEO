
import type { CityPageData } from '@/types';
import { Search, Settings, Users, Briefcase, Mail, BarChart2, TrendingUp, Lightbulb, ShieldCheck } from 'lucide-react';
import { CONTACT_DETAILS } from '@/lib/constants.tsx';
import { GENERIC_CITY_HERO_IMAGE_SRC, GENERIC_OFFICE_LOCATION_IMAGE_SRC } from '@/lib/cityConstants';

export const arlingtonData: CityPageData = {
  slug: 'arlington',
  cityName: 'Arlington',
  heroData: {
    pageTitle: 'Arlington SEO Services | TRAC - SEO Experts in Arlington, TX',
    metaDescription: 'Boost your Arlington business with TRAC\'s expert SEO services. Drive organic traffic, increase leads, and maximize sales in Arlington. Get your free SEO proposal!',
    heroTitle: 'Arlington SEO Agency',
    heroSubtitle: 'Dominate Search in Arlington with TRAC',
    heroDescription: 'TRAC provides specialized SEO services for Arlington businesses aiming to increase their online visibility and attract more customers. We focus on local SEO, technical optimization, and content strategies relevant to the Arlington market.',
    heroImage: { src: GENERIC_CITY_HERO_IMAGE_SRC, alt: 'SEO Services in Arlington, TX', dataAiHint: 'Arlington city business' },
    heroVideoUrl: 'https://www.youtube.com/embed/JBPmDzL-Xek',
    formTitle: 'Free Arlington SEO Quote!',
  },
  resultsHeadline: 'SEO Results That Matter for Arlington Businesses',
  readyToGrowHeadline: 'Grow Your Arlington Business with SEO?',
  servicesSectionHeadline: 'Targeted SEO Services for Arlington',
  servicesSectionSubheadline: 'Our Arlington SEO strategies are designed to put your business in front of local customers actively searching for your services.',
  services: [
    { icon: Search, title: 'Arlington Local SEO', description: 'Optimize your GMB and local citations to rank higher in Arlington local search.' },
    { icon: Settings, title: 'Technical SEO for Arlington Sites', description: 'Ensure your website is fast, mobile-friendly, and easily crawlable for better Arlington rankings.' },
    { icon: Users, title: 'Arlington Keyword Strategy', description: 'Target the right keywords to attract qualified organic traffic from the Arlington area.' },
    { icon: Mail, title: 'Content Marketing for Arlington', description: 'Create engaging content that resonates with Arlington audiences and builds SEO authority.' },
  ],
  whyChooseSectionHeadline: 'Why TRAC for Your Arlington SEO Needs?',
  whyChooseIntro: 'TRAC delivers customized, results-driven SEO solutions for businesses in Arlington, Texas.',
  whyChooseParagraph1: 'Our Arlington SEO experts understand the local market dynamics and tailor strategies to achieve your specific business goals.',
  whyChooseParagraph2: 'We combine proven SEO techniques with transparent reporting to ensure your Arlington business achieves sustainable online growth.',
  whyChoosePoints: [
    { icon: 'TrendingUp', title: 'Arlington SEO Growth', description: 'Drive more organic traffic and leads in Arlington.' },
    { icon: 'Lightbulb', title: 'Local Arlington Expertise', description: 'Strategies tailored to the Arlington, TX market.' },
    { icon: 'ShieldCheck', title: 'Ethical SEO Practices', description: 'Sustainable results through white-hat SEO for Arlington businesses.' },
  ],
  awards: {
    clutch: { headline: 'Top Arlington SEO Agency - Clutch 2024', text: 'Recognized for delivering impactful SEO in Arlington.' },
    upcity: { headline: 'Arlington SEO Excellence - UpCity 2024', text: 'Awarded for outstanding SEO services in Arlington.' },
  },
  location: {
    officeImageUrl: GENERIC_OFFICE_LOCATION_IMAGE_SRC,
    addressLines: ['101 SEO Rd', 'Suite 10', 'Arlington, TX 76001'],
    phone: CONTACT_DETAILS.phone,
    email: CONTACT_DETAILS.email,
  },
  bottomFormTitle: 'Get Your Arlington SEO Proposal',
};
