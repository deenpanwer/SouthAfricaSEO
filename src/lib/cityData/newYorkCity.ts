
import type { CityPageData } from '@/types';
import { Briefcase, Search, BarChart2, Users, Settings, Mail, TrendingUp, Lightbulb, ShieldCheck } from 'lucide-react';
import { CONTACT_DETAILS } from '@/lib/constants.tsx';
import { GENERIC_CITY_HERO_IMAGE_SRC, GENERIC_OFFICE_LOCATION_IMAGE_SRC } from '@/lib/cityConstants';

export const newYorkCityData: CityPageData = {
  slug: 'new-york-city',
  cityName: 'New York City',
  heroData: {
    pageTitle: 'NYC SEO Experts | TRAC - Drive Growth in New York City',
    metaDescription: 'TRAC provides expert SEO services for New York City businesses. Boost your organic traffic, improve rankings, and achieve sustainable growth in the competitive NYC market. Contact us!',
    heroTitle: 'Expert SEO Services in New York City',
    heroSubtitle: 'Navigate the NYC Digital Landscape & Outrank Your Competition with Proven SEO',
    heroDescription: 'TRAC delivers cutting-edge SEO strategies tailored for the fast-paced New York City market. From comprehensive technical optimization to hyper-local targeting across the five boroughs, we help your NYC business capture high-value organic traffic and achieve significant ROI through strategic search engine optimization.',
    heroImage: {
      src: GENERIC_CITY_HERO_IMAGE_SRC,
      alt: 'SEO Services in New York City by TRAC',
      dataAiHint: 'new york city skyline business'
    },
    heroVideoUrl: 'https://www.youtube.com/embed/JBPmDzL-Xek',
    formTitle: 'Get Your FREE NYC SEO Audit!',
  },
  resultsHeadline: 'TRAC\'s SEO Strategies Deliver for NYC Businesses',
  readyToGrowHeadline: 'Ready to Amplify Your NYC Presence with SEO?',
  servicesSectionHeadline: 'Comprehensive SEO Solutions for New York City',
  servicesSectionSubheadline: 'Tailored SEO services to meet the unique demands of businesses in Manhattan, Brooklyn, Queens, The Bronx, and Staten Island.',
  services: [
    { icon: Search, title: 'Advanced Keyword Research for NYC', description: 'Uncover high-intent keywords specific to New York City\'s diverse industries and demographics, ensuring your SEO targets the right audience.' },
    { icon: Settings, title: 'Enterprise SEO for NYC Corporations', description: 'Scalable SEO solutions for large New York City businesses needing to dominate national and international search rankings.' },
    { icon: Users, title: 'Hyper-Local SEO for NYC Neighborhoods', description: 'Target specific NYC boroughs and neighborhoods, from SoHo to Flushing, to connect with your local customer base through precise local SEO.' },
    { icon: Briefcase, title: 'E-commerce SEO for NYC Retailers', description: 'Boost online sales for your New York City e-commerce store with specialized SEO strategies, including platform optimization and product listing SEO.' },
    { icon: Mail, title: 'Authoritative Content Creation for NYC Audiences', description: 'Develop compelling, NYC-relevant content that resonates with your target market, attracts quality backlinks, and builds brand authority through SEO.' },
    { icon: BarChart2, title: 'NYC SEO Performance Analytics', description: 'Transparent reporting on your New York City SEO campaign\'s progress and key performance indicators, focusing on organic growth and conversions.' },
  ],
  whyChooseSectionHeadline: 'Why TRAC is NYC\'s Premier SEO Partner',
  whyChooseIntro: 'In a city that never sleeps, your SEO strategy needs to be working around the clock. TRAC offers the expertise and dedication to make your New York City business a digital leader through effective search engine optimization.',
  whyChooseParagraph1: 'New York City demands innovation and agility. Our SEO strategies are designed to be dynamic, adapting to the fast-paced changes in search algorithms and consumer behavior. We focus on building a robust online presence that drives sustainable organic traffic for your NYC enterprise.',
  whyChooseParagraph2: 'With fierce competition in NYC, a data-driven SEO approach is paramount. We meticulously analyze your market, competitors, and target audience to craft SEO campaigns that deliver measurable results and a significant return on your investment.',
  whyChoosePoints: [
    { icon: 'TrendingUp', title: 'NYC Market Domination through SEO', description: 'Our SEO strategies are built to help you stand out and succeed in the ultra-competitive New York City market.' },
    { icon: 'Lightbulb', title: 'Innovative NYC SEO Tactics', description: 'We leverage the latest SEO techniques and local insights for maximum impact in New York City search results.' },
    { icon: 'ShieldCheck', title: 'Transparent & Results-Driven SEO', description: 'Clear communication and a relentless focus on delivering measurable SEO results for our NYC clients.' },
  ],
  awards: {
    clutch: {
      headline: 'TRAC: Clutch Top SEO Agency in New York City 2024',
      text: 'Recognized by Clutch for our commitment to providing exceptional SEO services and achieving client success in NYC.',
    },
    upcity: {
      headline: 'UpCity SEO Excellence Award: TRAC Recognized in NYC 2024',
      text: 'Honored by UpCity as a leading SEO provider in New York City, showcasing our ability to deliver top-tier organic search results.',
    }
  },
  location: {
    officeImageUrl: GENERIC_OFFICE_LOCATION_IMAGE_SRC,
    addressLines: ['123 SEO Avenue', 'Suite 100', 'New York City, NY 10001'],
    phone: CONTACT_DETAILS.phone,
    email: CONTACT_DETAILS.email,
  },
  bottomFormTitle: 'Get Your FREE NYC SEO Proposal',
};
