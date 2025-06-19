
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
    heroDescription: 'TRAC helps Baltimore businesses achieve higher search engine rankings and significantly increased online visibility through tailored SEO strategies. Our approach is designed for the unique dynamics of the Baltimore market, focusing on results that truly matter for your growth. We blend in-depth local market research with advanced SEO techniques to connect you with your target audience in Charm City. From refining your presence for local searches (e.g., "SEO services Inner Harbor," "best seafood Fells Point") to building a strong technical SEO foundation for your website, and creating content that engages Baltimoreans and highlights local attractions or services, we cover all bases. Our commitment is to deliver measurable improvements in traffic, leads, and sales, making TRAC your trusted ally for SEO success in Baltimore. We ensure your business not only gets found but also makes a lasting impression in a competitive digital environment.',
    heroImage: { src: GENERIC_CITY_HERO_IMAGE_SRC, alt: 'SEO Services in Baltimore, MD', dataAiHint: 'Baltimore harbor business' },
    heroVideoUrl: 'https://www.youtube.com/embed/JBPmDzL-Xek',
    formTitle: 'Free SEO Quote!', // Updated: Removed 'Baltimore'
  },
  resultsHeadline: 'SEO Success Stories in Baltimore: Real Growth, Real Results',
  readyToGrowHeadline: 'Elevate Your Baltimore SEO Strategy?',
  servicesSectionHeadline: 'Comprehensive SEO Solutions for Baltimore', // Adjusted for flow
  servicesSectionSubheadline: 'Comprehensive SEO solutions designed to grow your Baltimore business\'s online presence and market share effectively, targeting both residents and visitors.',
  services: [
    { icon: Search, title: 'Local Search Optimization', description: 'Rank higher in Baltimore local searches and Google Maps. We refine your Google Business Profile, manage local citations, and target keywords for specific Baltimore neighborhoods like Canton, Federal Hill, and Hampden to attract customers actively searching for your services.' },
    { icon: Settings, title: 'Website Technical Audits', description: 'Find and fix critical technical SEO issues on your Baltimore-focused website. We improve site speed, mobile-friendliness (important for users exploring Baltimore), discoverability, and add schema markup to boost your rankings and user engagement.' },
    { icon: Mail, title: 'Engaging Content for Local SEO', description: 'Create compelling, keyword-rich content that engages Baltimore audiences, answers their questions (e.g., "things to do in Baltimore," "best Baltimore IT services"), and improves your website\'s SEO authority and search visibility. We focus on content that highlights local expertise.' },
    { icon: BarChart2, title: 'SEO Performance Reporting', description: 'Monitor your SEO performance with clear, data-driven reports tailored for your Baltimore campaigns. We focus on transparency and actionable insights related to organic traffic, keyword rankings for local terms, and conversion rates to drive continuous improvement.' },
  ],
  whyChooseSectionHeadline: 'Why Choose TRAC for Baltimore SEO?',
  whyChooseIntro: 'TRAC offers effective, customized SEO strategies for businesses aiming to thrive in the competitive Baltimore market. Our local expertise and dedication to results set us apart.',
  whyChooseParagraph1: 'Our SEO experts possess a deep understanding of the local competitive landscape and consumer search patterns, from the thriving arts scene to its historic districts. We develop strategies that are not only effective but also connect with the Baltimore community, ensuring your message reaches the right people and drives meaningful engagement.',
  whyChooseParagraph2: 'We focus on ethical, white-hat SEO techniques that deliver long-term, lasting results for our Baltimore clients. Our goal is to build your brand\'s authority and online presence responsibly, fostering trust and credibility with both search engines and users in the Baltimore metropolitan area. We stay updated on all algorithm changes.',
  whyChoosePoints: [
    { icon: 'TrendingUp', title: 'Local SEO Growth & Visibility', description: 'Achieve better search engine rankings, increased organic traffic, and more qualified leads within the specific context of the Baltimore market. We aim for top positions for your most important keywords.' },
    { icon: 'Lightbulb', title: 'Targeted Local Strategies', description: 'Benefit from SEO strategies carefully designed for the Baltimore, MD market, taking into account local industries (e.g., healthcare, education, tourism), events, and search behaviors unique to Charm City.' },
    { icon: 'ShieldCheck', title: 'Reliable & Ethical Partnership', description: 'Experience lasting and effective SEO results through transparent practices and a commitment to the long-term success of your Baltimore business. We believe in building strong client relationships.' },
  ],
  awards: {
    clutch: { headline: 'Top Baltimore SEO Firm - Clutch 2024', text: 'Recognized by Clutch for delivering impactful SEO results and superior client service to businesses in Baltimore. Our focus on client success is paramount.' },
    upcity: { headline: 'Baltimore SEO Leader - UpCity 2024', text: 'Awarded by UpCity for premier SEO services and consistent success in helping Baltimore businesses grow online through effective search strategies.' },
  },
  location: {
    officeImageUrl: GENERIC_OFFICE_LOCATION_IMAGE_SRC,
    addressLines: ['East Pratt St', 'Suite 4100', 'Baltimore, MD 21202'],
    phone: CONTACT_DETAILS.phone,
    email: CONTACT_DETAILS.email,
  },
  bottomFormTitle: 'Get Your SEO Proposal',
};