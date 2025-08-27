import type { CityPageData } from '@/types';
import {
  Search,
  Settings,
  Mail,
  BarChart2,
  TrendingUp,
  Lightbulb,
  ShieldCheck,
  MapPin,
  Globe,
  LineChart
} from 'lucide-react';
import { CONTACT_DETAILS } from '@/lib/constants.tsx';

const GENERIC_CITY_HERO_IMAGE_SRC = 'https://cdn-icggj.nitrocdn.com/AphBmykuaGyxZijWArNhxcCiPzVdYZGT/assets/images/optimized/rev-d6d7292/thriveagency.com/files/SEO-Company-1.jpg';
const GENERIC_OFFICE_LOCATION_IMAGE_SRC = 'https://cdn-icggj.nitrocdn.com/AphBmykuaGyxZijWArNhxcCiPzVdYZGT/assets/images/optimized/rev-d6d7292/thriveagency.com/files/Baltimore-office-location.png';

export const baltimoreData: CityPageData = {
  slug: 'baltimore',
  cityName: 'Baltimore',
  metaKeywords: [
    'Baltimore SEO services for small businesses',
    'law firm SEO Baltimore Maryland',
    'restaurant SEO experts in Baltimore',
    'Baltimore local SEO agency Inner Harbor',
    'Fells Point SEO consultants for retail',
    'SEO company for healthcare clinics in Baltimore',
    'affordable SEO marketing in Baltimore',
    'Baltimore service business SEO agency',
    'education SEO Baltimore universities',
    'tourism SEO strategy Baltimore MD'
  ],
  heroData: {
    pageTitle: 'Baltimore SEO Agency | TRAC - SEO Services in Baltimore, MD',
    metaDescription: 'TRAC provides top-tier SEO services for Baltimore businesses. Improve your search rankings, drive organic traffic, and increase sales in Baltimore. Get a free SEO consultation!',
    heroTitle: 'Baltimore SEO Experts: Navigating Your Path to Online Success',
    heroSubtitle: 'Boost Your Baltimore Business with Strategic, Results-Driven SEO',
    heroDescription: `Baltimore’s search landscape is layered—rooted in community, history, and industry. TRAC helps local businesses cut through the noise by creating SEO strategies aligned with how Charm City searches. From Mount Vernon law firms to Canton-based restaurants, we elevate your visibility with campaigns tuned to local keywords, geography, and buyer behavior.

We don't chase vanity metrics. Instead, we build campaigns rooted in structured data, schema optimization, and keyword clusters that reflect real search demand. Whether you're trying to win featured snippets for “seafood near Inner Harbor” or expand a service footprint into Hampden, we help your site become more crawlable, relevant, and trusted.

Our approach includes:
- Advanced GMB and local pack optimizations
- Tailored technical audits and Core Web Vitals enhancement
- Authority-building content for legal, healthcare, retail, and education sectors
- White-hat backlink building and internal SEO architecture

TRAC’s team collaborates with you through every step—offering monthly strategy sessions, performance dashboards, and content calendars. Our process ensures your business stands out in Google search results across Baltimore’s competitive neighborhoods.

We also offer SEO campaigns for law firms, dental clinics, and service-based businesses throughout Maryland, leveraging our regional insights and scalable content frameworks.`,
    heroImage: { src: GENERIC_CITY_HERO_IMAGE_SRC, alt: 'SEO Services in Baltimore, MD', dataAiHint: 'Baltimore harbor business' },
    heroVideoUrl: 'https://www.youtube.com/embed/JBPmDzL-Xek',
    formTitle: 'Free SEO Quote!',
  },
  resultsHeadline: 'SEO Success Stories in Baltimore: Real Growth, Real Results',
  readyToGrowHeadline: 'Elevate Your Baltimore SEO Strategy?',
  servicesSectionHeadline: 'Comprehensive SEO Solutions for Baltimore',
  servicesSectionSubheadline: 'Comprehensive SEO solutions designed to grow your Baltimore business\'s online presence and market share effectively, targeting both residents and visitors.',
  services: [
    {
      icon: Search,
      title: 'Local Search Optimization',
      description: 'From Canton to Charles Village, we fine-tune your listings and citations to dominate Google Maps and local search packs throughout Baltimore.',
    },
    {
      icon: Settings,
      title: 'Technical Site Audits',
      description: 'We run Core Web Vitals checks and mobile indexing reports to ensure Baltimore users get a fast, accessible experience.',
    },
    {
      icon: Mail,
      title: 'Content for Local Authority',
      description: 'Our writers craft content that aligns with Baltimore search patterns—like "Baltimore family lawyer" or "events in Fells Point."',
    },
    {
      icon: BarChart2,
      title: 'Transparent SEO Reporting',
      description: 'See what’s working in real-time with reports that cover rankings, conversions, organic visibility, and bounce rates across Charm City.',
    },
    {
      icon: Globe,
      title: 'On-Page Optimization',
      description: 'We optimize headlines, schema, and internal links to increase relevance and indexing across Baltimore-related queries.',
    }
  ],
  whyChooseSectionHeadline: 'Why Choose TRAC for Baltimore SEO?',
  whyChooseIntro: 'TRAC offers effective, customized SEO strategies for businesses aiming to thrive in the competitive Baltimore market. Our local expertise and dedication to results set us apart.',
  whyChooseParagraph1: 'Baltimore is a city of character and contrast—where heritage rowhomes meet biotech startups. TRAC builds SEO strategies to match. We optimize your digital presence to reach Baltimoreans who are actively searching, whether they’re near the waterfront or within emerging neighborhoods like Remington and Brewers Hill.',
  whyChooseParagraph2: 'Our team blends precision with personalization. We adapt strategies to your industry, goals, and budget. Clients benefit from hands-on support, white-hat tactics, and data-backed adjustments designed for sustainability. No gimmicks—just intelligent execution anchored in Baltimore’s local search intent.',
  whyChoosePoints: [
    {
      icon: 'TrendingUp',
      title: 'Data-Led SEO Growth',
      description: 'We target Baltimore’s highest-converting queries and track performance down to the neighborhood level.'
    },
    {
      icon: 'Lightbulb',
      title: 'Local Market Strategy',
      description: 'Our approach is tuned to Baltimore—from stadium traffic around Camden Yards to academic searches near Johns Hopkins.'
    },
    {
      icon: 'ShieldCheck',
      title: 'Sustainable & Ethical SEO',
      description: 'We stay compliant with Google’s best practices, building long-term equity that protects your rankings and trust.'
    },
    {
      icon: 'LineChart',
      title: 'KPI Reporting & Growth Tracking',
      description: 'Our reporting shows you real ROI—not just vanity metrics—so you understand how your Baltimore SEO dollars are working.'
    }
  ],
  awards: {
    clutch: {
      headline: 'Top Baltimore SEO Firm - Clutch 2024',
      text: 'Recognized by Clutch for delivering impactful SEO results and superior client service to businesses in Baltimore. Our focus on client success is paramount.'
    },
    upcity: {
      headline: 'Baltimore SEO Leader - UpCity 2024',
      text: 'Awarded by UpCity for premier SEO services and consistent success in helping Baltimore businesses grow online through effective search strategies.'
    }
  },
  location: {
    officeImageUrl: GENERIC_OFFICE_LOCATION_IMAGE_SRC,
    streetAddress: 'East Pratt St, Suite 4100',
    addressLocality: 'Baltimore',
    addressRegion: 'MD',
    postalCode: '21202',
    addressCountry: 'US',
    phone: CONTACT_DETAILS.phone,
    email: CONTACT_DETAILS.email,
    hasMap: 'https://goo.gl/maps/gH1iJ2kL3m',
    geo: {
      latitude: '39.290400',
      longitude: '-76.612200',
    },
  },
  bottomFormTitle: 'Get Your SEO Proposal',
  faqSectionHeadline: 'Baltimore SEO FAQs: What Local Businesses Need to Know',
  faqData: [
    {
      question: 'How much do SEO services cost in Baltimore?',
      answer: 'Pricing depends on your business goals and competition, but typical monthly retainers range from $1,000 to $3,000 for full-service SEO in the Baltimore area.'
    },
    {
      question: 'Which industries do you serve with SEO in Baltimore?',
      answer: 'We support industries such as law, healthcare, education, food & beverage, tourism, retail, and local services. Our campaigns are customized to your niche.'
    },
    {
      question: 'When can I expect to see results from Baltimore SEO?',
      answer: 'Most clients begin to see traction within 3–6 months. Results vary depending on your website’s baseline, market saturation, and your willingness to invest in content and links.'
    },
    {
      question: 'Do you optimize Google Business Profiles for Baltimore businesses?',
      answer: 'Yes, we fully manage and optimize your GMB listing to help you rank in the Google local pack and attract nearby searchers in neighborhoods like Fells Point and Federal Hill.'
    },
    {
      question: 'How does TRAC stand out among Baltimore SEO companies?',
      answer: 'We focus on ROI—not just rankings. Our reporting is clear, our strategies are ethical, and our deep understanding of Baltimore’s search behavior drives results.'
    }
  ]
};
