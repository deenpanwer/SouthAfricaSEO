import type { CityPageData } from '@/types';
import { Search, Settings, Mail, BarChart2, TrendingUp, Lightbulb, ShieldCheck, MapPin, Globe2, UserCheck, Calendar } from 'lucide-react';
import { CONTACT_DETAILS } from '@/lib/constants.tsx';

const GENERIC_CITY_HERO_IMAGE_SRC = 'https://cdn-icggj.nitrocdn.com/AphBmykuaGyxZijWArNhxcCiPzVdYZGT/assets/images/optimized/rev-d6d7292/thriveagency.com/files/SEO-Company-1.jpg';
const GENERIC_OFFICE_LOCATION_IMAGE_SRC = 'https://cdn-icggj.nitrocdn.com/AphBmykuaGyxZijWArNhxcCiPzVdYZGT/assets/images/optimized/rev-d6d7292/thriveagency.com/files/Kansas-Thrive-office-location.jpg';

export const kansasCityData: CityPageData = {
  slug: 'kansas-city',
  cityName: 'Kansas City',
  metaKeywords: [
    'Kansas City BBQ restaurant SEO services',
    'Overland Park local SEO Kansas City metro',
    'KC logistics company SEO experts',
    'Plaza district boutique SEO Kansas City MO',
    'Kansas City healthcare SEO agency',
    'ecommerce SEO for Kansas City retailers',
    'multilingual SEO Kansas City global marketing',
    'technical SEO audits Kansas City websites',
    'Kansas City real estate SEO strategies',
    'Kansas City small business SEO company'
  ],
  heroData: {
    pageTitle: 'Kansas City SEO Services | TRAC - SEO Experts KC',
    metaDescription: 'TRAC enables Kansas City businesses to rank for ultra-specific, long-tail keywords across both MO and KS sides. From Plaza boutiques to Logistics Park, capture qualified traffic with tailored SEO strategies.',
    heroTitle: 'Kansas City SEO Agency: Your Partner for Growth in KC',
    heroSubtitle: 'Boost Your Brand in Kansas City with TRAC\'s Strategic SEO Solutions',
    heroDescription: `Kansas City’s bi-state metro—from the historic River Market to the bustling Logistics Park—demands SEO that speaks directly to nuanced search intents. At TRAC, we engineer hyper-targeted campaigns around queries like “best BBQ joints in Crossroads Arts District SEO”, “Overland Park pediatric dentist SEO services”, and “Kansas City warehouse logistics SEO strategies”.

Our approach includes:
- **Neighborhood-level keyword research**: drilling into search volumes for ZIP codes like 64106 (Plaza) and 66210 (Overland Park South).
- **Technical SEO excellence**: optimizing Core Web Vitals, mobile-first indexing, and secure HTTPS for e-commerce platforms and service websites.
- **Rich schema & snippet capture**: implementing FAQ, event, and product structured data to dominate SERP features.

Content creation centers on local authority. We craft articles such as “Top 10 Local BBQ Spots Near KC Airport” and deep-dives like “Industrial SEO Best Practices for Kansas City Distribution Centers”. Each piece integrates strategic CTAs and internal links to service pages, driving both engagement and conversions.

Our local SEO tactics extend to GMB optimization across neighborhoods—ensuring businesses in Brookside, Northland, and Lenexa appear prominently in map packs. TRAC complements execution with transparent analytics, delivering monthly reports on neighborhood traffic, lead metrics, and conversion paths. Partner with TRAC to harness Kansas City’s diverse market and achieve sustained online growth.`,
    heroImage: { src: GENERIC_CITY_HERO_IMAGE_SRC, alt: 'SEO Services in Kansas City, MO', dataAiHint: 'Kansas City skyline' },
    heroVideoUrl: 'https://www.youtube.com/embed/JBPmDzL-Xek',
    formTitle: 'Free Kansas City SEO Quote!',
  },
  resultsHeadline: 'SEO Success Stories in Kansas City: Driving Real Business Growth',
  readyToGrowHeadline: 'Elevate Your Kansas City SEO Strategy & Market Reach?',
  servicesSectionHeadline: 'Kansas City SEO Services: Tailored for the Heartland',
  servicesSectionSubheadline: 'Customized SEO solutions designed to help your Kansas City business thrive online and connect with the local community effectively across both states.',
  services: [
    { icon: Search, title: 'Bi-State Local SEO', description: 'Dominate search in both Kansas and Missouri sides of KC—target neighborhoods like Brookside, Westport, and Overland Park with optimized GMB, local citations, and review strategies.' },
    { icon: Settings, title: 'Technical Audits & Performance Tuning', description: 'Ensure your website meets Core Web Vitals, mobile usability, and accessibility standards—critical for high-value sectors like healthcare at KC’s major hospitals.' },
    { icon: Mail, title: 'Content & Authority Building', description: 'Develop high-impact content such as “Kansas City Royals Game Day SEO Guide” and industry insights for logistics and agritech companies in Kansas City.' },
    { icon: BarChart2, title: 'Analytics & ROI Tracking', description: 'Leverage custom dashboards to monitor long-tail keyword rankings, neighborhood-level traffic, lead generation, and e-commerce sales growth in the KC metro area.' },
    { icon: MapPin, title: 'Geo-Targeted Campaigns', description: 'Run micro-campaigns for critical ZIP codes—e.g., 64111 (River Market) and 66106 (Kansas City, KS)—capturing hyper-local search intent and driving foot traffic.' },
    { icon: Globe2, title: 'Multilingual & Global Reach', description: 'Connect with KC’s diverse communities through bilingual SEO (English-Spanish), and extend your brand’s reach internationally with global optimization tactics.' },
    { icon: UserCheck, title: 'UX & Conversion Optimization', description: 'Enhance on-site user experiences with A/B testing, heatmaps, and conversion funnel analysis tailored to Kansas City’s customer behaviors.' },
    { icon: Calendar, title: 'Event & Seasonal SEO', description: 'Capitalize on KC events—American Royal, Plaza Lighting Ceremony—with optimized event pages, timely blogs, and schema for event listings.' }
  ],
  whyChooseSectionHeadline: 'Why TRAC is the Premier Choice for Kansas City SEO',
  whyChooseIntro: 'TRAC combines deep local KC expertise with cutting-edge SEO frameworks to deliver measurable, sustainable growth for Kansas City businesses.',
  whyChooseParagraph1: `Our Kansas City SEO specialists map the unique search landscape—from BBQ aficionados searching “best burnt ends Kansas City MO SEO” to corporate queries like “Kansas City data center SEO services.” We deploy customer journey mapping, competitor gap analysis, and localized keyword clusters to build a strategy that aligns with your business goals and market dynamics.`,
  whyChooseParagraph2: `Transparency and agility are at the heart of our process. You receive direct access to your dedicated strategist, detailed monthly performance reviews, and iterative optimizations that respond to seasonal trends, algorithm updates, and market shifts in Kansas City.`,
  whyChoosePoints: [
    { icon: 'TrendingUp', title: 'KC Growth & Lead Generation', description: 'Achieve a 50% increase in organic traffic and a 30% boost in qualified leads by targeting ultra-specific, long-tail search queries.' },
    { icon: 'Lightbulb', title: 'Local Market Mastery', description: 'Leverage our granular understanding of Kansas City neighborhoods, events, and industries to outperform local competitors.' },
    { icon: 'ShieldCheck', title: 'Ethical, Scalable SEO', description: 'We adhere strictly to white-hat practices, ensuring sustained rankings and reputation protection in the long term.' }
  ],
  awards: {
    clutch: { headline: 'Top Kansas City SEO Agency - Clutch 2024', text: 'Recognized by Clutch for delivering leading SEO services and outstanding client satisfaction in the Kansas City market.' },
    upcity: { headline: 'Kansas City SEO Excellence Award - UpCity 2024', text: 'Awarded by UpCity for impactful SEO strategies and consistent success in helping KC businesses thrive online.' }
  },
  location: {
    officeImageUrl: GENERIC_OFFICE_LOCATION_IMAGE_SRC,
    streetAddress: '107 W 9th St, Suite 90',
    addressLocality: 'Kansas City',
    addressRegion: 'MO',
    postalCode: '64105',
    addressCountry: 'US',
    phone: CONTACT_DETAILS.phone,
    email: CONTACT_DETAILS.email,
  },
  bottomFormTitle: 'Get Your SEO Plan',
  faqSectionHeadline: 'Kansas City SEO FAQs: In-Depth Answers for KC Businesses',
  faqData: [
    { question: 'How long does it take to rank for long-tail KC keywords?', answer: 'Hyper-local long-tail terms often show progress in 2-4 months, while highly competitive queries may require 6-9 months of consistent optimization and content building.' },
    { question: 'Can TRAC optimize for both Kansas and Missouri sides of KC?', answer: 'Absolutely. We create geo-specific landing pages and GMB listings for all service areas on both sides of the state line to maximize local visibility.' },
    { question: 'Do you provide SEO for KC event promotions?', answer: 'Yes. We optimize event pages, implement event schema, and produce timely content to boost visibility for events like the American Royal and Plaza Art Fair.' },
    { question: 'How do you handle technical SEO for large KC e-commerce sites?', answer: 'Our technical audits cover site architecture, Core Web Vitals, image optimization, and server caching—ensuring seamless performance for extensive product catalogs.' },
    { question: 'Is bilingual SEO available in Kansas City?', answer: 'Yes, we offer English-Spanish SEO strategies, including keyword research, content translation, and hreflang setup, to engage KC’s diverse multilingual audience.' },
    { question: 'How is ROI measured for KC SEO campaigns?', answer: 'We track conversions, phone call analytics, form submissions, and revenue attribution alongside keyword and traffic metrics for a holistic ROI view.' },
    { question: 'Can you integrate CRO into the SEO strategy?', answer: 'Definitely. We collaborate with UX teams to implement A/B tests, optimize landing pages, and improve conversion funnels based on KC user behavior data.' },
    { question: 'What ongoing support do you provide after launch?', answer: 'Our retainer includes continuous SEO maintenance, monthly strategy calls, quarterly in-depth reviews, and responsive adjustments to keep your KC SEO performing.' }
  ]
};
