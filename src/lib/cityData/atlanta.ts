
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
    heroDescription: 'TRAC provides expert SEO services for Atlanta businesses looking to significantly enhance their online footprint and drive lasting growth. We focus on creating custom SEO campaigns that generate high-quality organic traffic and deliver measurable results in this competitive market. Our team digs deep into understanding your business, target audience, and specific goals within Atlanta to craft strategies that truly perform. From local SEO aiming for Atlanta neighborhoods and landmarks to comprehensive technical audits ensuring your website is primed for search engines, and engaging content marketing that speaks directly to Atlantans, we cover all aspects of search engine optimization. We understand the diverse industries here, from tech startups to established corporations, and tailor our SEO approach accordingly. We are committed to transparency, providing clear insights into your campaign\'s progress and the return achieved. Partner with TRAC to navigate the complexities of Atlanta SEO and establish a strong online presence in Georgia\'s vibrant capital.',
    heroImage: { src: GENERIC_CITY_HERO_IMAGE_SRC, alt: 'SEO Services in Atlanta, GA', dataAiHint: 'Atlanta city business' },
    heroVideoUrl: 'https://www.youtube.com/embed/JBPmDzL-Xek',
    formTitle: 'Free SEO Analysis!', // Updated: Removed 'Atlanta'
  },
  resultsHeadline: 'Proven SEO Results for Atlanta Businesses',
  readyToGrowHeadline: 'Boost Your Atlanta SEO Performance?',
  servicesSectionHeadline: 'Tailored SEO Services for Atlanta', // Adjusted for flow
  servicesSectionSubheadline: 'Our SEO experts craft data-driven strategies to enhance your online visibility and connect with customers across Atlanta, helping you grow your market share.',
  services: [
    { icon: Search, title: 'Local Search & GMB Optimization', description: 'Improve your local rankings across Atlanta and connect with more customers in your service area (e.g., Midtown, Buckhead). We refine your Google Business Profile and local listings for maximum impact.' },
    { icon: Settings, title: 'Website Technical Optimization', description: 'Ensure your site\'s technical aspects, including speed, mobile-friendliness, and schema markup, are primed for better performance in Atlanta search results and enhanced user experience on all devices.' },
    { icon: Mail, title: 'Content Strategy & Creation', description: 'Develop high-quality, authoritative content that engages Atlanta users, addresses their needs, and boosts search engine rankings for relevant keywords. Our content is designed to resonate with the local culture.' },
    { icon: BarChart2, title: 'Analytics & Reporting for SEO', description: 'Track your SEO progress with detailed, transparent reports and insights. We focus on metrics that matter, like organic traffic, conversions, and keyword improvements specific to the Atlanta market.' },
  ],
  whyChooseSectionHeadline: 'Why TRAC for Atlanta SEO?',
  whyChooseIntro: 'TRAC is your dedicated partner for achieving SEO success in the dynamic and competitive Atlanta market. We bring local expertise and proven strategies to elevate your brand.',
  whyChooseParagraph1: 'We understand the unique SEO challenges and opportunities present in Atlanta, a major hub for business and culture. Our tailored strategies help your business grow by reaching the right audience with the right message, ensuring you stand out from the competition in ATL.',
    whyChooseParagraph2: 'Our commitment is to ethical, white-hat SEO practices and delivering measurable results for our Atlanta clients. We believe in building lasting partnerships based on trust, transparency, and consistent performance in the ever-evolving digital landscape.',
  whyChoosePoints: [
    { icon: 'TrendingUp', title: 'SEO Growth & ROI', description: 'Increase organic visibility, generate more qualified leads, and achieve a strong return on investment with our targeted Atlanta SEO campaigns. We focus on lasting growth.' },
    { icon: 'Lightbulb', title: 'Market SEO Expertise', description: 'Benefit from SEO strategies specifically designed for the Atlanta, GA audience, considering local search trends, industry landscapes (e.g., film, tech, logistics), and consumer behavior.' },
    { icon: 'ShieldCheck', title: 'Reliable & Transparent SEO', description: 'Experience transparent communication and effective SEO services that build lasting online success for your Atlanta business. We adhere to the highest ethical standards.' },
  ],
  awards: {
    clutch: { headline: 'Clutch Top SEO Firm in Atlanta 2024', text: 'Recognized by Clutch for consistent SEO excellence and client satisfaction in the Atlanta metropolitan area. Our results speak for themselves.' },
    upcity: { headline: 'UpCity Atlanta SEO Leader 2024', text: 'Awarded by UpCity for delivering top-tier SEO results and strategic insights to businesses in Atlanta. We are proud of our impact.' },
  },
  location: {
    officeImageUrl: GENERIC_OFFICE_LOCATION_IMAGE_SRC,
    addressLines: ['260 Peachtree St. NW', 'Suite 2200', 'Atlanta, GA 30303'],
    phone: CONTACT_DETAILS.phone,
    email: CONTACT_DETAILS.email,
  },
  bottomFormTitle: 'Get Your SEO Strategy',
};