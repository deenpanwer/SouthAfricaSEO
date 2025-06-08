
import type { CityPageData } from '@/types';
import { Briefcase, Search, BarChart2, Users, Settings, Mail, TrendingUp, Lightbulb, ShieldCheck } from 'lucide-react';
import { CONTACT_DETAILS } from '@/lib/constants.tsx';
import { GENERIC_CITY_HERO_IMAGE_SRC, GENERIC_OFFICE_LOCATION_IMAGE_SRC } from '@/lib/cityConstants';

export const portlandCityData: CityPageData = {
  slug: 'portland',
  cityName: 'Portland',
  heroData: {
    pageTitle: 'TRAC - Portland Digital Marketing | Expert Agency',
    metaDescription: 'Boost your Portland business with TRAC\'s expert digital marketing services. Drive traffic, increase leads, and maximize sales. Get your free proposal today!',
    heroTitle: 'Portland Digital Marketing Agency',
    heroSubtitle: 'Dominate Your Market in Portland with TRAC\'s Proven Strategies',
    heroDescription: 'TRAC is a leading digital marketing agency serving Portland, OR. We specialize in comprehensive strategies, from local optimization for Portland businesses to technical audits and content plans that drive growth. Our data-driven approach ensures your Portland company achieves higher visibility and attracts qualified customers.',
    heroImage: { // Using the generic placeholder as an example, can be specific
      src: 'https://thriveagency.com/files/Portland-city-img.png',
      alt: 'Digital Marketing in Portland by TRAC',
      dataAiHint: 'portland city marketing'
    },
    heroVideoUrl: 'https://www.youtube.com/embed/JBPmDzL-Xek', // Example video URL
    formTitle: 'Get My FREE Portland Proposal!',
  },
  resultsHeadline: 'Our Portland Clients Get Measurable Results',
  readyToGrowHeadline: 'Ready to Grow Your Portland Business?',
  servicesSectionHeadline: 'Portland Digital Marketing Services',
  servicesSectionSubheadline: 'Comprehensive Solutions Tailored for Businesses in Portland, Oregon',
  services: [
    { icon: Search, title: 'Local Presence Optimization', description: 'Optimize for "near me" searches and dominate local platforms in the Portland area.' },
    { icon: Settings, title: 'Technical Strategy Audits', description: 'Ensure your digital assets are perfectly optimized. We identify and fix issues hindering your Portland rankings.' },
    { icon: Users, title: 'Audience Research & Strategy', description: 'Uncover high-intent keywords and audience segments Portland customers are part of.' },
    { icon: Briefcase, title: 'E-commerce Solutions for Portland', description: 'Drive more sales for your online store in Portland with specialized e-commerce tactics.' },
    { icon: Mail, title: 'Content Marketing & Outreach', description: 'Create authoritative content that attracts engagement and builds your brand in Portland.' },
    { icon: BarChart2, title: 'Analytics & Reporting', description: 'Track your Portland campaign performance with transparent, detailed reports.' },
  ],
  whyChooseSectionHeadline: 'Why Choose TRAC As Your Portland Digital Marketing Company',
  whyChooseIntro: 'Partner with TRAC for data-driven digital marketing in Portland. We\'re committed to boosting your online presence and achieving sustainable growth for your business in the Rose City.',
  whyChooseParagraph1: 'Choosing the right digital marketing partner in Portland is crucial. You need an agency that understands the local market, employs ethical strategies, and focuses on tangible results like increased traffic, leads, and sales. TRAC stands out by delivering tailored solutions that align with your specific business goals in Portland.',
  whyChooseParagraph2: 'Our team of Portland specialists uses a proven methodology. We start with a deep dive into your business, competitors, and the Portland market. This allows us to craft a bespoke strategy designed for maximum impact, ensuring your investment yields significant returns.',
  whyChoosePoints: [
    { icon: 'TrendingUp', title: 'Proven Portland Results', description: 'Our strategies are designed for sustainable growth and measurable ROI for your Portland business.' },
    { icon: 'Lightbulb', title: 'Deep Portland Market Knowledge', description: 'We understand the nuances of the Portland market, tailoring strategies to local consumer behavior.' },
    { icon: 'ShieldCheck', title: 'Transparent & Ethical Practices', description: 'Honest, white-hat strategies with clear reporting on all campaigns targeting the Portland area.' },
  ],
  awards: {
    clutch: {
      headline: 'TRAC: Top Portland Digital Agency by Clutch 2024',
      text: 'Recognized by Clutch for excellence in delivering impactful solutions and client satisfaction to Portland businesses.',
    },
    upcity: {
      headline: 'UpCity Excellence: TRAC - Leading Digital Marketing in Portland 2024',
      text: 'Awarded by UpCity for outstanding service and results delivered to clients in the Portland area.',
    }
  },
  location: {
    officeImageUrl: 'https://thriveagency.com/files/Portland-Thrive-office-location.jpg',
    addressLines: ['121 Southwest Salmon St', '11th Floor', 'Portland, OR 97204'],
    phone: CONTACT_DETAILS.phone,
    email: CONTACT_DETAILS.email,
  },
  bottomFormTitle: 'Get Your FREE Portland Audit & Proposal',
};
