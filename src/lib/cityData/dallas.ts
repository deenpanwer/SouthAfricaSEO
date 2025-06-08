
import type { CityPageData } from '@/types';
import { Briefcase, Search, BarChart2, Users, Settings, Mail, TrendingUp, Lightbulb, ShieldCheck } from 'lucide-react';
import { CONTACT_DETAILS } from '@/lib/constants.tsx';
import { GENERIC_CITY_HERO_IMAGE_SRC, GENERIC_OFFICE_LOCATION_IMAGE_SRC } from '@/lib/cityConstants';

export const dallasCityData: CityPageData = {
  slug: 'dallas',
  cityName: 'Dallas',
  heroData: {
    pageTitle: 'TRAC - Dallas Digital Marketing | #1 Agency in Dallas, TX',
    metaDescription: 'Top-rated Dallas digital marketing services by TRAC. We help Dallas businesses increase traffic, generate more leads, and boost sales. Contact us for a free strategy session!',
    heroTitle: 'Dallas Digital Marketing Experts',
    heroSubtitle: 'Achieve Top Market Position in Dallas with TRAC\'s Solutions',
    heroDescription: 'TRAC is a results-driven digital marketing company serving Dallas, Texas. We offer a full suite of services, including local optimization tailored for the Dallas market, advanced audience analysis, technical optimization, and quality outreach. Our goal is to elevate your Dallas business\'s online visibility and drive sustainable growth.',
    heroImage: {
      src: 'https://cdn-icggj.nitrocdn.com/AphBmykuaGyxZijWArNhxcCiPzVdYZGT/assets/images/optimized/rev-d6d7292/thriveagency.com/files/Dallas-city-img.png',
      alt: 'Digital Marketing in Dallas by TRAC',
      dataAiHint: 'dallas city marketing'
    },
    heroVideoUrl: 'https://www.youtube.com/embed/JBPmDzL-Xek',
    formTitle: 'Get Your FREE Dallas Quote!',
  },
  resultsHeadline: 'Our Dallas Strategies Deliver Real ROI',
  readyToGrowHeadline: 'Ready to Dominate Dallas Market with Digital Marketing?',
  servicesSectionHeadline: 'Dallas Digital Marketing Services',
  servicesSectionSubheadline: 'Customized Strategies for Businesses in Dallas-Fort Worth',
  services: [
    { icon: Search, title: 'Dallas Local Optimization', description: 'Maximize your visibility in local Dallas results. We connect you with Dallas customers searching for your services.' },
    { icon: Settings, title: 'Website Performance Optimization', description: 'Comprehensive on-page and technical optimization to ensure your site is fully effective for Dallas algorithms and user experience.' },
    { icon: Users, title: 'Dallas Audience Targeting', description: 'Identify and target the most profitable audience segments for the Dallas market. Our strategies focus on high-conversion interactions.' },
    { icon: Briefcase, title: 'B2B Solutions for Dallas Firms', description: 'Specialized strategies for B2B companies in Dallas, focusing on lead generation and establishing industry authority.' },
    { icon: Mail, title: 'Content & Authority Building', description: 'Develop high-quality, Dallas-relevant content that attracts engagement and establishes your expertise in the Dallas area.' },
    { icon: BarChart2, title: 'Performance-Driven Analytics', description: 'Track your Dallas campaign progress with clear, actionable reports. We focus on metrics that drive business growth.' },
  ],
  whyChooseSectionHeadline: 'Why TRAC is the Go-To Digital Marketing Agency in Dallas',
  whyChooseIntro: 'Choose TRAC for unparalleled digital marketing expertise in Dallas. We deliver data-driven strategies and tangible results, helping your Dallas business thrive in the competitive DFW digital landscape.',
  whyChooseParagraph1: 'In the dynamic Dallas market, a generic approach won\'t cut it. TRAC provides bespoke services that understand Dallas-specific consumer behavior and competitive pressures. We prioritize clear communication and a partnership approach to achieve your business objectives.',
  whyChooseParagraph2: 'Our Dallas experts are adept at navigating the complexities of digital platforms. We combine technical proficiency with creative strategies and ethical practices to deliver sustainable, long-term success for your Dallas-based company.',
  whyChoosePoints: [
    { icon: 'TrendingUp', title: 'Measurable Dallas Growth', description: 'We focus on delivering quantifiable results, from increased traffic to higher conversion rates for Dallas businesses.' },
    { icon: 'Lightbulb', title: 'Local Dallas Market Insight', description: 'Our team possesses in-depth knowledge of the Dallas-Fort Worth market, ensuring strategies resonate locally.' },
    { icon: 'ShieldCheck', title: 'Transparent & Ethical Practices', description: 'We believe in building trust through open communication and ethical strategies for our Dallas clients.' },
  ],
  awards: {
    clutch: {
      headline: 'TRAC: Clutch\'s Choice for Top Dallas Agency 2024',
      text: 'Proudly recognized by Clutch for delivering outstanding results and client satisfaction in the Dallas metroplex.',
    },
    upcity: {
      headline: 'UpCity Excellence Award: TRAC Shines in Dallas 2024',
      text: 'Honored by UpCity as a leading agency in Dallas, reflecting our commitment to innovative strategies and client success.',
    }
  },
  location: {
    officeImageUrl: 'https://cdn-icggj.nitrocdn.com/AphBmykuaGyxZijWArNhxcCiPzVdYZGT/assets/images/optimized/rev-d6d7292/thriveagency.com/files/Thrive-Dallas-office-location-1.png',
    addressLines: ['2626 Cole Ave', 'Suite 488', 'Dallas, TX 75204'],
    phone: CONTACT_DETAILS.phone,
    email: CONTACT_DETAILS.email,
  },
  bottomFormTitle: 'Get Your FREE Dallas Strategy Session',
};
