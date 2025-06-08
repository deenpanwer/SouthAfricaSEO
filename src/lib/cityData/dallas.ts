
import type { CityPageData } from '@/types';
import { Briefcase, Search, BarChart2, Users, Settings, Mail, TrendingUp, Lightbulb, ShieldCheck } from 'lucide-react';
import { CONTACT_DETAILS } from '@/lib/constants.tsx';

export const dallasCityData: CityPageData = {
  slug: 'dallas',
  cityName: 'Dallas',
  heroData: {
    pageTitle: 'Dallas SEO Company | TRAC - Expert SEO Services in Dallas, TX',
    metaDescription: 'TRAC is a top-rated Dallas SEO company. We help Dallas businesses increase organic traffic, generate more leads, and boost sales through effective SEO. Contact us for a free strategy session!',
    heroTitle: 'Dallas SEO Experts',
    heroSubtitle: 'Achieve Top Search Rankings in Dallas with TRAC\'s SEO Solutions',
    heroDescription: 'TRAC is a results-driven SEO company serving Dallas, Texas. We offer a full suite of SEO services, including local SEO tailored for the Dallas market, advanced technical SEO, high-quality link building, and content strategy. Our goal is to elevate your Dallas business\'s online visibility and drive sustainable organic growth.',
    heroImage: {
      src: 'https://cdn-icggj.nitrocdn.com/AphBmykuaGyxZijWArNhxcCiPzVdYZGT/assets/images/optimized/rev-d6d7292/thriveagency.com/files/Dallas-city-img.png',
      alt: 'SEO Services in Dallas by TRAC',
      dataAiHint: 'dallas city seo'
    },
    heroVideoUrl: 'https://www.youtube.com/embed/JBPmDzL-Xek',
    formTitle: 'Get Your FREE Dallas SEO Quote!',
  },
  resultsHeadline: 'Our Dallas SEO Strategies Deliver Real ROI',
  readyToGrowHeadline: 'Ready to Dominate Dallas Search Results with SEO?',
  servicesSectionHeadline: 'Dallas SEO Services',
  servicesSectionSubheadline: 'Customized SEO Strategies for Businesses in Dallas-Fort Worth to Enhance Online Presence and Attract More Customers.',
  services: [
    { icon: Search, title: 'Dallas Local SEO Optimization', description: 'Maximize your visibility in Dallas local search results. We connect your business with local customers actively searching for your services in the DFW area.' },
    { icon: Settings, title: 'Website Technical SEO for Dallas', description: 'Comprehensive on-page and technical SEO to ensure your site is perfectly optimized for search engines and Dallas user experience.' },
    { icon: Users, title: 'Dallas Audience Keyword Targeting', description: 'Identify and target the most profitable keywords for the Dallas market. Our SEO strategies focus on high-conversion search terms.' },
    { icon: Briefcase, title: 'B2B SEO Solutions for Dallas Firms', description: 'Specialized SEO strategies for B2B companies in Dallas, focusing on lead generation through organic search and establishing industry authority.' },
    { icon: Mail, title: 'SEO Content & Authority Building in Dallas', description: 'Develop high-quality, Dallas-relevant content that attracts engagement, earns backlinks, and establishes your expertise in the Dallas area.' },
    { icon: BarChart2, title: 'SEO Performance Analytics for Dallas', description: 'Track your Dallas SEO campaign progress with clear, actionable reports. We focus on metrics that drive organic business growth.' },
  ],
  whyChooseSectionHeadline: 'Why TRAC is the Go-To SEO Agency in Dallas',
  whyChooseIntro: 'Choose TRAC for unparalleled SEO expertise in Dallas. We deliver data-driven strategies and tangible results, helping your Dallas business thrive in the competitive DFW digital landscape through superior search engine optimization.',
  whyChooseParagraph1: 'In the dynamic Dallas market, a generic SEO approach won\'t cut it. TRAC provides bespoke SEO services that understand Dallas-specific consumer search behavior and competitive pressures. We prioritize clear communication and a partnership approach to achieve your business objectives through organic search.',
  whyChooseParagraph2: 'Our Dallas SEO experts are adept at navigating the complexities of search engine algorithms. We combine technical proficiency with creative content strategies and ethical link-building practices to deliver sustainable, long-term success for your Dallas-based company.',
  whyChoosePoints: [
    { icon: 'TrendingUp', title: 'Measurable Dallas SEO Growth', description: 'We focus on delivering quantifiable SEO results, from increased organic traffic to higher conversion rates for Dallas businesses.' },
    { icon: 'Lightbulb', title: 'Local Dallas SEO Market Insight', description: 'Our team possesses in-depth knowledge of the Dallas-Fort Worth SEO market, ensuring strategies resonate locally and rank effectively.' },
    { icon: 'ShieldCheck', title: 'Transparent & Ethical SEO Practices', description: 'We believe in building trust through open communication and ethical, white-hat SEO strategies for our Dallas clients.' },
  ],
  awards: {
    clutch: {
      headline: 'TRAC: Clutch\'s Choice for Top Dallas SEO Agency 2024',
      text: 'Proudly recognized by Clutch for delivering outstanding SEO results and client satisfaction in the Dallas metroplex.',
    },
    upcity: {
      headline: 'UpCity SEO Excellence Award: TRAC Shines in Dallas 2024',
      text: 'Honored by UpCity as a leading SEO agency in Dallas, reflecting our commitment to innovative strategies and client success in organic search.',
    }
  },
  location: {
    officeImageUrl: 'https://cdn-icggj.nitrocdn.com/AphBmykuaGyxZijWArNhxcCiPzVdYZGT/assets/images/optimized/rev-d6d7292/thriveagency.com/files/Thrive-Dallas-office-location-1.png',
    addressLines: ['2626 Cole Ave', 'Suite 488', 'Dallas, TX 75204'],
    phone: CONTACT_DETAILS.phone,
    email: CONTACT_DETAILS.email,
  },
  bottomFormTitle: 'Get Your FREE Dallas SEO Strategy Session',
};
