
import type { CityPageData } from '@/types';
import { Briefcase, Search, BarChart2, Users, Settings, Mail, TrendingUp, Lightbulb, ShieldCheck } from 'lucide-react';
import { CONTACT_DETAILS } from '@/lib/constants.tsx';

const GENERIC_CITY_HERO_IMAGE_SRC = 'https://cdn-icggj.nitrocdn.com/AphBmykuaGyxZijWArNhxcCiPzVdYZGT/assets/images/optimized/rev-d6d7292/thriveagency.com/files/SEO-Company-1.jpg';
const GENERIC_OFFICE_LOCATION_IMAGE_SRC = 'https://cdn-icggj.nitrocdn.com/AphBmykuaGyxZijWArNhxcCiPzVdYZGT/assets/images/optimized/rev-d6d7292/thriveagency.com/files/Manhattang-Thrive-office-location.jpg';

export const newYorkCityData: CityPageData = {
  slug: 'new-york-city',
  cityName: 'New York City',
  heroData: {
    pageTitle: 'NYC SEO Experts | TRAC - Premier SEO Services in New York City',
    metaDescription: 'TRAC provides expert SEO services for New York City businesses. Boost your organic traffic, improve rankings, and achieve sustainable growth in the competitive NYC market. Contact us for a free SEO audit!',
    heroTitle: 'Expert SEO Services for New York City Dominance',
    heroSubtitle: 'Navigate the NYC Digital Landscape & Outrank Your Competition with TRAC\'s Proven SEO Strategies',
    heroDescription: 'TRAC delivers cutting-edge SEO strategies meticulously tailored for the fast-paced, hyper-competitive New York City market. We understand that visibility in NYC requires more than just basic optimization; it demands a sophisticated, multi-faceted approach. Our services encompass comprehensive technical SEO to ensure your site performs flawlessly, hyper-local targeting across all five boroughs to connect you with your immediate community, sophisticated content marketing that captures the NYC zeitgeist, and authoritative link acquisition to build your domain\'s power. We focus on driving organic growth through meticulous keyword research targeting NYC audiences, on-page optimization that aligns with user intent, and off-page strategies that build brand authority. Our team continually analyzes market trends and algorithm updates to keep your New York City business at the forefront of digital innovation. We empower your NYC business to capture high-value organic traffic, enhance brand authority, and achieve significant, measurable ROI through strategic and sustained search engine optimization efforts. Let TRAC be your guide to conquering the search rankings in the city that never sleeps.',
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
  servicesSectionSubheadline: 'Our SEO services are customized to meet the unique demands and opportunities of businesses operating in Manhattan, Brooklyn, Queens, The Bronx, and Staten Island. We understand the diverse economic fabric of NYC.',
  services: [
    {
      icon: Search,
      title: 'Advanced Keyword Research & Analysis for NYC',
      description: 'We uncover high-intent keywords specific to New York City\'s diverse industries, cultural nuances, and demographic segments (e.g., "financial advisor NYC," "best pizza Brooklyn," "Queens local services"). This ensures your SEO strategy effectively targets the right audience, maximizing relevance and conversion potential in the five boroughs.'
    },
    {
      icon: Settings,
      title: 'Enterprise-Level Technical SEO for NYC Corporations',
      description: 'TRAC provides scalable technical SEO solutions designed for large New York City businesses. We focus on optimizing complex site architectures, international SEO considerations (for global NYC brands), Core Web Vitals, mobile-first indexing, and ensuring peak performance to help you dominate national and global search rankings from your NYC base.'
    },
    {
      icon: Users,
      title: 'Hyper-Local SEO Targeting for NYC Neighborhoods',
      description: 'Connect with your local customer base through precise local SEO. We target specific NYC boroughs and neighborhoods (e.g., Financial District, Williamsburg, Astoria), optimizing your Google Business Profile, local citations, and on-page content for "near me" searches and Google Maps visibility across the city.'
    },
    {
      icon: Briefcase,
      title: 'E-commerce SEO Strategies for NYC Retailers & Brands',
      description: 'Boost online sales for your New York City e-commerce store with our specialized SEO strategies. This includes Shopify SEO, Magento SEO, WooCommerce optimization, product page optimization, structured data for products, and advanced category strategy to capture NYC shoppers and compete effectively online.'
    },
    {
      icon: Mail,
      title: 'Authoritative & Engaging Content Creation for NYC Audiences',
      description: 'Our team develops compelling, NYC-relevant content (blog posts, articles, guides on NYC topics) that resonates with your target market, attracts high-quality backlinks, and builds significant brand authority. Effective content is key to successful SEO in New York City\'s competitive information landscape.'
    },
    {
      icon: BarChart2,
      title: 'NYC SEO Performance Analytics & ROI Tracking',
      description: 'Receive transparent, detailed reporting on your New York City SEO campaign\'s progress. We track key performance indicators (KPIs) such as organic traffic, keyword rankings for NYC terms, lead generation, conversion rates, and overall campaign ROI, focusing on demonstrating clear value from your SEO investment.'
    },
  ],
  whyChooseSectionHeadline: 'Why TRAC is New York City\'s Premier SEO Partner for Growth',
  whyChooseIntro: 'In a city that defines global business, your SEO strategy needs to be world-class. TRAC offers the deep expertise, innovative approach, and unwavering dedication required to make your New York City business a leader in the digital space through powerful and effective search engine optimization.',
  whyChooseParagraph1: 'New York City demands relentless innovation and strategic agility. Our SEO services are designed to be dynamic, adapting to the ever-changing landscape of search engine algorithms and sophisticated consumer behavior. We focus on building a robust, authoritative online presence that drives sustainable organic traffic and high-value leads for your NYC enterprise, ensuring you stay ahead of the curve and capitalize on the city\'s immense market potential.',
  whyChooseParagraph2: 'With the fierce competition inherent in the NYC market, a data-driven, analytical SEO approach is paramount. We meticulously analyze your specific industry, competitors, and target audience within New York City. This allows us to craft bespoke SEO campaigns that deliver not just rankings, but truly measurable business results and a significant return on your marketing investment. Our client-centric approach ensures your goals are always our top priority.',
  whyChoosePoints: [
    {
      icon: 'TrendingUp',
      title: 'NYC Market Domination via Strategic SEO',
      description: 'Our advanced SEO strategies are engineered to help your business stand out, attract high-intent traffic, and achieve significant success in the ultra-competitive New York City market. We focus on long-term visibility and sustainable growth.'
    },
    {
      icon: 'Lightbulb',
      title: 'Innovative & Adaptive NYC SEO Tactics',
      description: 'We leverage the latest SEO techniques, AI-powered tools, and deep local market insights for maximum impact, ensuring your campaigns are effective and future-proof in New York City search results. We constantly test and refine.'
    },
    {
      icon: 'ShieldCheck',
      title: 'Transparent, Ethical & Results-Driven SEO Partnership',
      description: 'TRAC is committed to clear communication, ethical white-hat practices, and a relentless focus on delivering measurable SEO results that contribute directly to the growth of our NYC clients. We build partnerships based on trust and performance.'
    },
  ],
  awards: {
    clutch: {
      headline: 'TRAC: Recognized by Clutch as a Top SEO Agency in New York City for 2024',
      text: 'Our commitment to providing exceptional SEO services and achieving tangible client success in the demanding NYC market has been acknowledged by Clutch, a leading B2B ratings and reviews platform. We value this recognition of our hard work.',
    },
    upcity: {
      headline: 'UpCity SEO Excellence Award: TRAC Honored as a Premier NYC Provider in 2024',
      text: 'TRAC has been distinguished by UpCity as a leading SEO provider in New York City, highlighting our ability to consistently deliver top-tier organic search results and strategic digital growth for our clients in this global hub.',
    }
  },
  location: {
    officeImageUrl: GENERIC_OFFICE_LOCATION_IMAGE_SRC,
    addressLines: ['260 Madison Ave', '9th Floor', 'New York City, NY 10016'],
    phone: CONTACT_DETAILS.phone,
    email: CONTACT_DETAILS.email,
  },
  bottomFormTitle: 'Get Your FREE SEO Proposal & Consultation',
};

    