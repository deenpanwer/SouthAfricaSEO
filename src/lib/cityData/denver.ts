import type { CityPageData } from '@/types';
import { Search, Settings, Mail, BarChart2, TrendingUp, Lightbulb, ShieldCheck, Briefcase, Users, Globe2, MonitorSmartphone, PencilRuler, LineChart } from 'lucide-react';
import { CONTACT_DETAILS } from '@/lib/constants.tsx';

const GENERIC_CITY_HERO_IMAGE_SRC = 'https://cdn-icggj.nitrocdn.com/AphBmykuaGyxZijWArNhxcCiPzVdYZGT/assets/images/optimized/rev-d6d7292/thriveagency.com/files/DENVER-SEO-AGENCY.jpg';
const GENERIC_OFFICE_LOCATION_IMAGE_SRC = 'https://cdn-icggj.nitrocdn.com/AphBmykuaGyxZijWArNhxcCiPzVdYZGT/assets/images/optimized/rev-d6d7292/thriveagency.com/files/Denver-Thrive-office-location.jpg';

export const denverData: CityPageData = {
  slug: 'denver',
  cityName: 'Denver',
  metaKeywords: [
    'Denver SEO services',
    'SEO agency Denver CO',
    'Denver local SEO',
    'digital marketing Denver',
    'TRAC SEO Denver',
    'Denver search engine optimization',
    'GMB optimization Denver',
    'Denver eCommerce SEO',
    'Denver B2B SEO',
    'technical SEO Denver',
    'SEO consultants Denver',
    'Denver content marketing',
    'Colorado SEO company',
    'Denver CRO experts',
    'SEO for tech startups Denver',
    'Denver law firm SEO',
    'outdoor brand SEO Denver',
    'Denver link building services'
  ],
  heroData: {
    pageTitle: 'Denver SEO Agency | TRAC - Expert SEO Services in Denver, CO',
    metaDescription: 'TRAC provides expert SEO services for Denver businesses. Drive organic traffic, improve rankings, and achieve growth in the Denver market. Get your free SEO consultation!',
    heroTitle: 'Denver SEO Agency: Elevating Mile High Brands to the Top of Search',
    heroSubtitle: 'From Downtown to the Foothills — Dominate Denver’s Digital Landscape with TRAC SEO',
    heroDescription: `TRAC crafts SEO strategies engineered specifically for the Denver market—focusing on long-tail keywords and local queries that convert. Whether you're a tech startup in RiNo, a personal injury firm in Capitol Hill, or a mountain gear retailer near Cherry Creek, our campaigns are designed to reach real buyers in their search journey.

From "best cannabis SEO agency Denver" to "Denver SaaS lead generation through SEO," we build hyper-local landing pages, service silos, and city schema that drive authority. We structure your website and internal links to match how users search across Colorado’s capital, enabling maximum topical relevance and crawlability.

We deploy advanced CRO enhancements—form placement, trust signals, and UX micro-interactions—to improve lead conversion while maintaining compliance with Google’s best practices. Our link acquisition focuses on niche Denver publications, outdoor industry blogs, and business directories.

Every client receives full-funnel SEO reporting: rankings, revenue attribution, Google Maps traffic, and monthly roadmap adjustments. With TRAC, you get an SEO partner who treats your campaign like an evolving, high-performing asset—not a set-it-and-forget-it checklist.`,
    heroImage: { src: GENERIC_CITY_HERO_IMAGE_SRC, alt: 'SEO Services in Denver, CO', dataAiHint: 'Denver city mountains' },
    heroVideoUrl: 'https://www.youtube.com/embed/JBPmDzL-Xek',
    formTitle: 'Free Denver SEO Proposal!',
  },
  resultsHeadline: 'Real SEO Results for Denver Businesses — Traffic, Leads, and Rankings',
  readyToGrowHeadline: 'Let/s Take Your Denver SEO to New Heights',
  servicesSectionHeadline: 'Custom SEO Services in Denver That Deliver Growth',
  servicesSectionSubheadline: 'From the Highlands to LoDo and beyond, TRAC’s SEO services are tailored to match Denver’s unique market trends, buyer behavior, and competitive landscape.',
  services: [
    { icon: Search, title: 'Local SEO for Denver', description: 'Neighborhood-level SEO targeting for LoHi, Baker, RiNo, Capitol Hill, and more—designed to rank your Denver business in local map packs and organic search.' },
    { icon: Settings, title: 'Technical SEO Optimization', description: 'Address crawl errors, Core Web Vitals, and mobile responsiveness. Ideal for improving site health and search performance across Denver-based websites.' },
    { icon: Mail, title: 'Content Strategy & SEO Copywriting', description: 'We create blog posts, service pages, and city-specific landing pages tailored to long-tail Denver search intent and seasonal demand.' },
    { icon: BarChart2, title: 'Analytics & Transparent Reporting', description: 'Monthly dashboards tracking keyword movements, GMB actions, organic leads, conversions, and Denver market trends.' },
    { icon: Briefcase, title: 'B2B SEO for Denver Firms', description: 'Strategic enterprise SEO services for SaaS, professional services, and logistics companies across the Denver metro.' },
    { icon: Users, title: 'Persona-Based Keyword Research', description: 'We map real user queries to your customer journey, prioritizing Denver searcher behavior across devices and decision stages.' },
    { icon: Globe2, title: 'Multilingual SEO for Diverse Audiences', description: 'Multilingual content optimization and hreflang implementation to reach Denver’s Spanish-speaking communities.' },
    { icon: MonitorSmartphone, title: 'Mobile UX & SEO Conversion Optimization', description: 'Mobile-first site structure, fast load times, and CTA placements that turn mobile users into leads.' },
    { icon: PencilRuler, title: 'Design-Integrated SEO Enhancements', description: 'On-page elements built with CRO and SEO in mind—hero CTA layout, sticky navs, and testimonial blocks that improve engagement.' },
    { icon: LineChart, title: 'SERP Feature Optimization', description: 'From People Also Ask to map packs—we target Google SERP features to maximize Denver visibility.' }
  ],
  whyChooseSectionHeadline: 'Why Denver Companies Partner with TRAC for SEO Growth',
  whyChooseIntro: 'Our Denver SEO approach is rooted in transparency, data, and a deep knowledge of Colorado’s business landscape.',
  whyChooseParagraph1: 'We understand that Denver isn’t just a city—it’s a collection of thriving micro-communities with diverse consumer needs. We create hyper-relevant SEO experiences for each, using neighborhood data and psychographic insights to increase visibility and trust.',
  whyChooseParagraph2: 'From startups on Blake Street to retailers in the Highlands, TRAC combines performance data with hands-on collaboration to create SEO campaigns that earn clicks and drive revenue. Our strategies don’t just survive algorithm updates—they grow stronger with them.',
  whyChoosePoints: [
    { icon: 'TrendingUp', title: 'ROI-Focused SEO Campaigns', description: 'Our SEO is engineered for real business metrics—leads, calls, GMB actions, and bottom-line revenue in the Denver area.' },
    { icon: 'Lightbulb', title: 'Denver Market Intelligence', description: 'We tailor every campaign based on Denver-specific consumer behavior and local keyword trend data.' },
    { icon: 'ShieldCheck', title: 'Transparent SEO Delivery', description: 'You get a roadmap, a point-of-contact strategist, and full access to campaign reporting. No surprises—just results.' },
    { icon: 'LineChart', title: 'Built for Search Intent & SERP Takeover', description: 'We build FAQ schema, optimize for featured snippets, and own the SERP real estate that matters most in Denver.' }
  ],
  awards: {
    clutch: {
      headline: 'TRAC Named a Top Denver SEO Company by Clutch in 2024',
      text: 'Clutch recognized TRAC as a leading SEO provider in Denver based on verified reviews, market presence, and service quality.'
    },
    upcity: {
      headline: 'UpCity Honors TRAC for Denver SEO Excellence 2024',
      text: 'Awarded for consistent SEO success and measurable campaign performance in the Denver business landscape.'
    }
  },
  location: {
    officeImageUrl: GENERIC_OFFICE_LOCATION_IMAGE_SRC,
    streetAddress: '606 Pkwy',
    addressLocality: 'Denver',
    addressRegion: 'CO',
    postalCode: '80201',
    addressCountry: 'US',
    phone: CONTACT_DETAILS.phone,
    email: CONTACT_DETAILS.email,
    hasMap: 'https://goo.gl/maps/h9I0j1K2l3',
    geo: {
      latitude: '39.739200',
      longitude: '-104.990300',
    },
  },
  bottomFormTitle: 'Book Your Free Denver SEO Strategy Call',
  faqSectionHeadline: 'Denver SEO: Your Questions Answered',
  faqData: [
    { question: 'How long does it take to rank in Denver search results?', answer: 'For local terms, you may see progress in 3–6 months. Highly competitive verticals in Denver may take longer, but we build long-term momentum.' },
    { question: 'Do you help with SEO for Denver neighborhoods?', answer: 'Yes. We create and optimize neighborhood-specific content for places like Five Points, Cherry Creek, and Capitol Hill to improve visibility where your customers live and search.' },
    { question: 'Is SEO worth it for my small business in Denver?', answer: 'Absolutely. Local SEO is one of the most cost-effective ways to reach engaged Denver customers who are ready to buy.' },
    { question: 'What’s included in your monthly SEO reports?', answer: 'Rank tracking, GMB metrics, lead generation reports, traffic analysis, and next-step strategy insights—customized to your Denver goals.' },
    { question: 'Do you also do SEO for Denver’s outdoor and cannabis sectors?', answer: 'Yes, TRAC has experience ranking businesses in highly regulated and niche sectors like cannabis, CBD, and outdoor retail in Colorado.' }
  ]
};