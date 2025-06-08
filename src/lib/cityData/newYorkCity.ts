
import type { CityPageData } from '@/types';
import { Briefcase, Search, BarChart2, Users, Settings, Mail, TrendingUp, Lightbulb, ShieldCheck } from 'lucide-react';
import { CONTACT_DETAILS } from '@/lib/constants.tsx';

const GENERIC_CITY_HERO_IMAGE_SRC = 'https://placehold.co/800x500.png';
const GENERIC_OFFICE_LOCATION_IMAGE_SRC = 'https://placehold.co/600x400.png';

export const newYorkCityData: CityPageData = {
  slug: 'new-york-city',
  cityName: 'New York City',
  heroData: {
    pageTitle: 'NYC SEO Experts | TRAC - Premier SEO Services in New York City',
    metaDescription: 'TRAC provides expert SEO services for New York City businesses. Boost your organic traffic, improve rankings, and achieve sustainable growth in the competitive NYC market. Contact us for a free SEO audit!',
    heroTitle: 'Expert SEO Services for New York City Dominance',
    heroSubtitle: 'Navigate the NYC Digital Landscape & Outrank Your Competition with TRAC\'s Proven SEO Strategies',
    heroDescription: 'TRAC delivers cutting-edge SEO strategies meticulously tailored for the fast-paced, hyper-competitive New York City market. We understand that visibility in NYC requires more than just basic optimization. Our approach encompasses comprehensive technical SEO, hyper-local targeting across all five boroughs, sophisticated content marketing, and authoritative link acquisition. We empower your NYC business to capture high-value organic traffic, enhance brand authority, and achieve significant, measurable ROI through strategic and sustained search engine optimization efforts.',
    heroImage: {
      src: GENERIC_CITY_HERO_IMAGE_SRC,
      alt: 'Panoramic view of New York City skyline, symbolizing TRAC\'s SEO services',
      dataAiHint: 'new york city skyline business'
    },
    heroVideoUrl: 'https://www.youtube.com/embed/JBPmDzL-Xek',
    formTitle: 'Get Your FREE NYC SEO Audit!',
  },
  resultsHeadline: 'TRAC\'s Data-Driven SEO Strategies Deliver for NYC Businesses',
  readyToGrowHeadline: 'Ready to Amplify Your NYC Online Presence with Strategic SEO?',
  servicesSectionHeadline: 'Comprehensive SEO Solutions Tailored for New York City',
  servicesSectionSubheadline: 'Our SEO services are customized to meet the unique demands and opportunities of businesses operating in Manhattan, Brooklyn, Queens, The Bronx, and Staten Island.',
  services: [
    {
      icon: Search,
      title: 'Advanced Keyword Research & Analysis for NYC',
      description: 'We uncover high-intent keywords specific to New York City\'s diverse industries, cultural nuances, and demographic segments. This ensures your SEO strategy effectively targets the right audience, maximizing relevance and conversion potential in the five boroughs.'
    },
    {
      icon: Settings,
      title: 'Enterprise-Level Technical SEO for NYC Corporations',
      description: 'TRAC provides scalable technical SEO solutions designed for large New York City businesses. We focus on optimizing complex site architectures, international SEO considerations, and ensuring peak performance to help you dominate national and global search rankings from your NYC base.'
    },
    {
      icon: Users,
      title: 'Hyper-Local SEO Targeting for NYC Neighborhoods',
      description: 'Connect with your local customer base through precise local SEO. We target specific NYC boroughs and neighborhoods, from the Financial District to Williamsburg, optimizing your online presence for "near me" searches and Google Maps visibility across the city.'
    },
    {
      icon: Briefcase,
      title: 'E-commerce SEO Strategies for NYC Retailers & Brands',
      description: 'Boost online sales for your New York City e-commerce store with our specialized SEO strategies. This includes Shopify SEO, Magento SEO, product page optimization, structured data for products, and advanced category strategy to capture NYC shoppers.'
    },
    {
      icon: Mail,
      title: 'Authoritative & Engaging Content Creation for NYC Audiences',
      description: 'Our team develops compelling, NYC-relevant content that resonates with your target market, attracts high-quality backlinks, and builds significant brand authority. Effective content is key to successful SEO in New York City.'
    },
    {
      icon: BarChart2,
      title: 'NYC SEO Performance Analytics & ROI Tracking',
      description: 'Receive transparent, detailed reporting on your New York City SEO campaign\'s progress. We track key performance indicators (KPIs) such as organic traffic, keyword rankings, lead generation, and conversion rates, focusing on demonstrating clear ROI from your SEO investment.'
    },
  ],
  whyChooseSectionHeadline: 'Why TRAC is New York City\'s Premier SEO Partner for Growth',
  whyChooseIntro: 'In a city that defines global business, your SEO strategy needs to be world-class. TRAC offers the deep expertise, innovative approach, and unwavering dedication required to make your New York City business a leader in the digital space through powerful and effective search engine optimization.',
  whyChooseParagraph1: 'New York City demands relentless innovation and strategic agility. Our SEO services are designed to be dynamic, adapting to the ever-changing landscape of search engine algorithms and sophisticated consumer behavior. We focus on building a robust, authoritative online presence that drives sustainable organic traffic and high-value leads for your NYC enterprise, ensuring you stay ahead of the curve.',
  whyChooseParagraph2: 'With the fierce competition inherent in the NYC market, a data-driven, analytical SEO approach is paramount. We meticulously analyze your specific industry, competitors, and target audience within New York City. This allows us to craft bespoke SEO campaigns that deliver not just rankings, but truly measurable business results and a significant return on your marketing investment.',
  whyChoosePoints: [
    {
      icon: 'TrendingUp',
      title: 'NYC Market Domination via Strategic SEO',
      description: 'Our advanced SEO strategies are engineered to help your business stand out, attract high-intent traffic, and achieve significant success in the ultra-competitive New York City market.'
    },
    {
      icon: 'Lightbulb',
      title: 'Innovative & Adaptive NYC SEO Tactics',
      description: 'We leverage the latest SEO techniques, tools, and local market insights for maximum impact, ensuring your campaigns are effective and future-proof in New York City search results.'
    },
    {
      icon: 'ShieldCheck',
      title: 'Transparent, Ethical & Results-Driven SEO Partnership',
      description: 'TRAC is committed to clear communication, ethical practices, and a relentless focus on delivering measurable SEO results that contribute directly to the growth of our NYC clients.'
    },
  ],
  awards: {
    clutch: {
      headline: 'TRAC: Recognized by Clutch as a Top SEO Agency in New York City for 2024',
      text: 'Our commitment to providing exceptional SEO services and achieving tangible client success in the demanding NYC market has been acknowledged by Clutch, a leading B2B ratings and reviews platform.',
    },
    upcity: {
      headline: 'UpCity SEO Excellence Award: TRAC Honored as a Premier NYC Provider in 2024',
      text: 'TRAC has been distinguished by UpCity as a leading SEO provider in New York City, highlighting our ability to consistently deliver top-tier organic search results and strategic digital growth for our clients.',
    }
  },
  location: {
    officeImageUrl: GENERIC_OFFICE_LOCATION_IMAGE_SRC,
    addressLines: ['123 SEO Avenue', 'Suite 100', 'New York City, NY 10001'],
    phone: CONTACT_DETAILS.phone,
    email: CONTACT_DETAILS.email,
  },
  bottomFormTitle: 'Get Your FREE NYC SEO Proposal & Consultation',
};
