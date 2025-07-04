import type { CityPageData } from '@/types';
import { Search, Settings, Mail, BarChart2, TrendingUp, Lightbulb, ShieldCheck } from 'lucide-react';
import { CONTACT_DETAILS } from '@/lib/constants.tsx';

const GENERIC_CITY_HERO_IMAGE_SRC = 'https://cdn-icggj.nitrocdn.com/AphBmykuaGyxZijWArNhxcCiPzVdYZGT/assets/images/optimized/rev-d6d7292/thriveagency.com/files/ATLANTA-SEO-AGENCY.jpg';
const GENERIC_OFFICE_LOCATION_IMAGE_SRC = 'https://cdn-icggj.nitrocdn.com/AphBmykuaGyxZijWArNhxcCiPzVdYZGT/assets/images/optimized/rev-d6d7292/thriveagency.com/files/Atlanta-Thrive-office-location.jpg';

export const atlantaData: CityPageData = {
  slug: 'atlanta',
  cityName: 'Atlanta',
  heroData: {
    pageTitle: 'Atlanta SEO Experts | TRAC - Drive Growth in Atlanta, GA',
    metaDescription: 'TRAC offers leading SEO services for Atlanta businesses. Increase your website traffic, get more leads, and dominate Atlanta search results. Contact us for a free SEO consultation!',
    heroTitle: 'Atlanta SEO Agency: Propelling Your Business to the Forefront',
    heroSubtitle: 'Unlock Atlanta\'s Market with Powerful, Data-Driven SEO Strategies',
    heroDescription: `TRAC empowers Atlanta businesses with comprehensive SEO services tailored to the city's unique landscape—from fast-growing startups in Midtown to established firms in Buckhead and West End. We craft search strategies that help your business gain visibility across Atlanta’s competitive digital space.

We begin by identifying local and industry-specific keyword opportunities, building a campaign rooted in Atlanta’s real search behavior. Our team works to refine your website’s technical performance, ensuring fast load times, mobile responsiveness, and full crawlability for search engines. We then create compelling, locally relevant content that reflects Atlanta’s cultural and commercial pulse—whether your audience is in the tech corridor, film industry, or healthcare sector.

We go beyond surface-level SEO. From optimizing Google Business Profiles to implementing schema markup and tracking KPIs like conversions and lead quality, our strategies are designed for impact and transparency. When you work with TRAC, you’re investing in long-term SEO growth backed by data and local understanding.`,
    heroImage: { src: GENERIC_CITY_HERO_IMAGE_SRC, alt: 'SEO Services in Atlanta, GA', dataAiHint: 'Atlanta city business' },
    heroVideoUrl: 'https://www.youtube.com/embed/JBPmDzL-Xek',
    formTitle: 'Free SEO Analysis!',
  },
  resultsHeadline: 'Proven SEO Results for Atlanta Businesses',
  readyToGrowHeadline: 'Boost Your Atlanta SEO Performance?',
  servicesSectionHeadline: 'Tailored SEO Services for Atlanta',
  servicesSectionSubheadline: 'Our SEO experts craft data-driven strategies to enhance your online visibility and connect with customers across Atlanta, helping you grow your market share.',
  services: [
    {
      icon: Search,
      title: 'Local Search & GMB Optimization',
      description: 'Be discovered by Atlanta locals searching for your services. We enhance your Google Business Profile, fine-tune citations, and optimize for high-intent local search queries in neighborhoods like Midtown, Old Fourth Ward, and Sandy Springs.',
    },
    {
      icon: Settings,
      title: 'Website Technical Optimization',
      description: 'From Core Web Vitals to mobile UX, we audit and improve the technical foundation of your site so Atlanta users—and Google—have a seamless experience. Our work increases crawlability, performance, and ranking stability.',
    },
    {
      icon: Mail,
      title: 'Content Strategy & Creation',
      description: 'We produce hyper-relevant content that speaks directly to your Atlanta audience—from blog articles about city-specific trends to optimized service pages that match searcher intent in Georgia’s capital.',
    },
    {
      icon: BarChart2,
      title: 'Analytics & Reporting for SEO',
      description: 'Get clear insights into your SEO performance in Atlanta. We track organic traffic, ranking gains, click-through rates, and conversions—delivering custom reports that help you understand what’s working and why.',
    },
  ],
  whyChooseSectionHeadline: 'Why TRAC for Atlanta SEO?',
  whyChooseIntro: 'TRAC is your dedicated partner for achieving SEO success in the dynamic and competitive Atlanta market. We bring local expertise and proven strategies to elevate your brand.',
  whyChooseParagraph1: 'Atlanta’s digital landscape is fast-paced and highly localized. Our team understands the nuances of search behavior across diverse communities—from the BeltLine to Peachtree Street. We help you reach your ideal customers with SEO tactics grounded in local insight and intent.',
  whyChooseParagraph2: 'With TRAC, you’re choosing accountability. Our ethical SEO practices are paired with detailed reporting and a client-first mindset. We don’t promise overnight results—we deliver sustainable growth for your Atlanta business through strategic execution.',
  whyChoosePoints: [
    {
      icon: 'TrendingUp',
      title: 'SEO Growth & ROI',
      description: 'Drive qualified traffic and conversions through Atlanta-specific SEO that prioritizes high-intent keywords and measurable growth. We focus on what moves your business forward.',
    },
    {
      icon: 'Lightbulb',
      title: 'Market SEO Expertise',
      description: 'From the film industry to fintech, we craft campaigns that reflect Atlanta’s business diversity and search trends. Our deep understanding of local industries gives you an edge.',
    },
    {
      icon: 'ShieldCheck',
      title: 'Reliable & Transparent SEO',
      description: 'No smoke and mirrors—just clear communication, actionable insights, and sustainable SEO results that stand up to algorithm changes and market shifts.',
    },
  ],
  awards: {
    clutch: {
      headline: 'Clutch Top SEO Firm in Atlanta 2024',
      text: 'Recognized by Clutch for consistent SEO excellence and client satisfaction in the Atlanta metropolitan area. Our results speak for themselves.',
    },
    upcity: {
      headline: 'UpCity Atlanta SEO Leader 2024',
      text: 'Awarded by UpCity for delivering top-tier SEO results and strategic insights to businesses in Atlanta. We are proud of our impact.',
    },
  },
  location: {
    officeImageUrl: GENERIC_OFFICE_LOCATION_IMAGE_SRC,
    addressLines: ['260 Peachtree St. NW', 'Suite 2200', 'Atlanta, GA 30303'],
    phone: CONTACT_DETAILS.phone,
    email: CONTACT_DETAILS.email,
  },
  bottomFormTitle: 'Get Your SEO Strategy',
};
