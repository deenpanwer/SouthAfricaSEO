
import type { CityPageData } from '@/types';
import { Briefcase, Search, BarChart2, Users, Settings, Mail, TrendingUp, Lightbulb, ShieldCheck } from 'lucide-react';
import { CONTACT_DETAILS } from '@/lib/constants.tsx';

export const portlandCityData: CityPageData = {
  slug: 'portland',
  cityName: 'Portland',
  heroData: {
    pageTitle: 'Portland SEO Experts | TRAC - Top SEO Services in Portland, OR',
    metaDescription: 'TRAC delivers expert SEO services in Portland. Boost your organic traffic, improve search rankings, and achieve sustainable growth. Contact our Portland SEO specialists!',
    heroTitle: 'Portland SEO Agency',
    heroSubtitle: 'Elevate Your Search Rankings in Portland with TRAC',
    heroDescription: 'TRAC is a leading SEO agency dedicated to helping Portland businesses thrive online. We specialize in comprehensive SEO strategies, from local optimization targeting Portland customers to technical SEO audits and content marketing plans designed to drive organic growth. Our data-driven approach ensures your Portland company achieves higher visibility and attracts qualified leads.',
    heroImage: {
      src: 'https://thriveagency.com/files/Portland-city-img.png',
      alt: 'SEO Services in Portland by TRAC',
      dataAiHint: 'portland skyline business'
    },
    heroVideoUrl: 'https://www.youtube.com/embed/JBPmDzL-Xek',
    formTitle: 'Get Your FREE Portland SEO Audit!',
  },
  resultsHeadline: 'Our Portland SEO Clients See Measurable Growth',
  readyToGrowHeadline: 'Ready to Grow Your Portland Business with Expert SEO?',
  servicesSectionHeadline: 'Comprehensive Portland SEO Services',
  servicesSectionSubheadline: 'Tailored SEO Solutions for Businesses in Portland, Oregon, to Maximize Online Visibility and Drive Conversions.',
  services: [
    { icon: Search, title: 'Portland Local SEO', description: 'Dominate local search results in Portland. We optimize your Google My Business, build local citations, and target "near me" searches to connect you with Portland customers.' },
    { icon: Settings, title: 'Technical SEO Audits for Portland Sites', description: 'Ensure your website is technically sound for optimal crawling and indexing. We address site speed, mobile-friendliness, and schema markup crucial for Portland rankings.' },
    { icon: Users, title: 'Keyword Research & Strategy for Portland Market', description: 'We identify high-intent keywords that Portland consumers are searching for, building a targeted strategy to attract relevant organic traffic.' },
    { icon: Briefcase, title: 'E-commerce SEO in Portland', description: 'Drive more sales for your Portland-based online store with specialized e-commerce SEO, including product page optimization and category strategy.' },
    { icon: Mail, title: 'Content Marketing for Portland SEO', description: 'Create authoritative, Portland-relevant content that attracts backlinks, engages users, and improves search engine rankings.' },
    { icon: BarChart2, title: 'SEO Analytics & Transparent Reporting', description: 'Track your Portland SEO campaign performance with clear, actionable reports. We focus on metrics that demonstrate real ROI.' },
  ],
  whyChooseSectionHeadline: 'Why TRAC is Your Trusted Portland SEO Partner',
  whyChooseIntro: 'Partner with TRAC for data-driven SEO in Portland. We are committed to boosting your organic search presence and achieving sustainable growth for your business in the Rose City.',
  whyChooseParagraph1: 'Choosing the right SEO agency in Portland is critical. You need a partner that understands the local market, employs ethical white-hat SEO strategies, and focuses on tangible results like increased organic traffic, leads, and sales. TRAC stands out by delivering tailored SEO solutions that align with your specific business goals in Portland.',
  whyChooseParagraph2: 'Our team of Portland SEO specialists uses a proven methodology. We start with a deep dive into your business, your competitors, and the Portland market. This allows us to craft a bespoke SEO strategy designed for maximum impact, ensuring your investment yields significant returns and a strong online presence.',
  whyChoosePoints: [
    { icon: 'TrendingUp', title: 'Proven Portland SEO Success', description: 'Our strategies are designed for sustainable organic growth and measurable ROI for your Portland business.' },
    { icon: 'Lightbulb', title: 'Deep Portland Market Knowledge', description: 'We understand the nuances of the Portland SEO landscape, tailoring strategies to local consumer search behavior.' },
    { icon: 'ShieldCheck', title: 'Ethical & Transparent SEO', description: 'Honest, white-hat SEO strategies with clear reporting on all campaigns targeting the Portland area.' },
  ],
  awards: {
    clutch: {
      headline: 'TRAC: Top Portland SEO Agency by Clutch 2024',
      text: 'Recognized by Clutch for excellence in delivering impactful SEO solutions and client satisfaction to Portland businesses.',
    },
    upcity: {
      headline: 'UpCity SEO Excellence: TRAC - Leading in Portland 2024',
      text: 'Awarded by UpCity for outstanding SEO service and results delivered to clients in the Portland area.',
    }
  },
  location: {
    officeImageUrl: 'https://thriveagency.com/files/Portland-Thrive-office-location.jpg',
    addressLines: ['121 Southwest Salmon St', '11th Floor', 'Portland, OR 97204'],
    phone: CONTACT_DETAILS.phone,
    email: CONTACT_DETAILS.email,
  },
  bottomFormTitle: 'Get Your FREE Portland SEO Audit & Proposal',
};
