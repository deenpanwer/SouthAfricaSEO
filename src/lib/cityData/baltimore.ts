import type { CityPageData } from '@/types';
import { Search, Settings, Mail, BarChart2, TrendingUp, Lightbulb, ShieldCheck } from 'lucide-react';
import { CONTACT_DETAILS } from '@/lib/constants.tsx';

const GENERIC_CITY_HERO_IMAGE_SRC = 'https://cdn-icggj.nitrocdn.com/AphBmykuaGyxZijWArNhxcCiPzVdYZGT/assets/images/optimized/rev-d6d7292/thriveagency.com/files/SEO-Company-1.jpg';
const GENERIC_OFFICE_LOCATION_IMAGE_SRC = 'https://cdn-icggj.nitrocdn.com/AphBmykuaGyxZijWArNhxcCiPzVdYZGT/assets/images/optimized/rev-d6d7292/thriveagency.com/files/Baltimore-office-location.png';

export const baltimoreData: CityPageData = {
  slug: 'baltimore',
  cityName: 'Baltimore',
  heroData: {
    pageTitle: 'Baltimore SEO Agency | TRAC - SEO Services in Baltimore, MD',
    metaDescription: 'TRAC provides top-tier SEO services for Baltimore businesses. Improve your search rankings, drive organic traffic, and increase sales in Baltimore. Get a free SEO consultation!',
    heroTitle: 'Baltimore SEO Experts: Navigating Your Path to Online Success',
    heroSubtitle: 'Boost Your Baltimore Business with Strategic, Results-Driven SEO',
    heroDescription: `TRAC delivers SEO solutions tailored to Baltimore’s competitive and historically rich market, helping local businesses attract more customers and grow sustainably. Whether you're located near Inner Harbor, Fells Point, or Hampden, our strategies target neighborhood-specific searches that convert. From optimizing your Google Business Profile to ranking for “best seafood in Baltimore” or “legal services near Federal Hill,” we drive traffic that leads to results.

Our team builds authority through content focused on Baltimore’s industries—healthcare, tourism, education, and local retail—while reinforcing your technical foundation with speed audits, mobile responsiveness, and structured data. We don’t just improve rankings—we generate trust and engagement across Charm City’s digital audience. With TRAC, your business is set up for long-term visibility and local credibility online.`,
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
      description: 'Get discovered in Baltimore neighborhoods like Canton, Mount Vernon, and Federal Hill with hyper-local SEO. We refine Google Maps listings and citations to reach the right customers where they live and search.',
    },
    {
      icon: Settings,
      title: 'Website Technical Audits',
      description: 'We audit and improve your website’s technical setup—focusing on page speed, mobile readiness, and indexability to ensure smooth performance for Baltimore users on every device.',
    },
    {
      icon: Mail,
      title: 'Engaging Content for Local SEO',
      description: 'We write content that speaks to Baltimore audiences—from “things to do in Fells Point” to “best IT services downtown.” Our content strategy builds authority and improves search engine rankings.',
    },
    {
      icon: BarChart2,
      title: 'SEO Performance Reporting',
      description: 'Stay informed with custom reports that break down how your SEO campaign is performing in Baltimore. We track keyword movement, traffic trends, and conversions so you know where your growth comes from.',
    },
  ],
  whyChooseSectionHeadline: 'Why Choose TRAC for Baltimore SEO?',
  whyChooseIntro: 'TRAC offers effective, customized SEO strategies for businesses aiming to thrive in the competitive Baltimore market. Our local expertise and dedication to results set us apart.',
  whyChooseParagraph1: 'We understand Baltimore’s unique digital landscape—where local pride meets modern business challenges. Whether you serve tourists at the Inner Harbor or run a B2B company in downtown Baltimore, our SEO strategies are built to fit your niche and goals.',
  whyChooseParagraph2: 'With TRAC, you get a partner who values transparency, communication, and long-term results. We follow ethical SEO practices and continuously adjust your campaign to reflect the latest trends, updates, and search behaviors in Baltimore.',
  whyChoosePoints: [
    {
      icon: 'TrendingUp',
      title: 'Local SEO Growth & Visibility',
      description: 'Achieve higher local rankings and generate consistent leads with SEO strategies tailored to the Baltimore market and its neighborhoods.',
    },
    {
      icon: 'Lightbulb',
      title: 'Targeted Local Strategies',
      description: 'Our SEO campaigns focus on Baltimore’s most searched terms, local events, and service-specific queries to maximize traffic and relevance.',
    },
    {
      icon: 'ShieldCheck',
      title: 'Reliable & Ethical Partnership',
      description: 'We deliver lasting value with honest reporting and best-practice SEO that withstands search engine changes and earns user trust.',
    },
  ],
  awards: {
    clutch: {
      headline: 'Top Baltimore SEO Firm - Clutch 2024',
      text: 'Recognized by Clutch for delivering impactful SEO results and superior client service to businesses in Baltimore. Our focus on client success is paramount.',
    },
    upcity: {
      headline: 'Baltimore SEO Leader - UpCity 2024',
      text: 'Awarded by UpCity for premier SEO services and consistent success in helping Baltimore businesses grow online through effective search strategies.',
    },
  },
  location: {
    officeImageUrl: GENERIC_OFFICE_LOCATION_IMAGE_SRC,
    addressLines: ['East Pratt St', 'Suite 4100', 'Baltimore, MD 21202'],
    phone: CONTACT_DETAILS.phone,
    email: CONTACT_DETAILS.email,
  },
  bottomFormTitle: 'Get Your SEO Proposal',
};
