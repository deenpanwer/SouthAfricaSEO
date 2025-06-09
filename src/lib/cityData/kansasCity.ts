
import type { CityPageData } from '@/types';
import { Search, Settings, Mail, BarChart2, TrendingUp, Lightbulb, ShieldCheck } from 'lucide-react';
import { CONTACT_DETAILS } from '@/lib/constants.tsx';

const GENERIC_CITY_HERO_IMAGE_SRC = 'https://cdn-icggj.nitrocdn.com/AphBmykuaGyxZijWArNhxcCiPzVdYZGT/assets/images/optimized/rev-d6d7292/thriveagency.com/files/SEO-Company-1.jpg';
const GENERIC_OFFICE_LOCATION_IMAGE_SRC = 'https://cdn-icggj.nitrocdn.com/AphBmykuaGyxZijWArNhxcCiPzVdYZGT/assets/images/optimized/rev-d6d7292/thriveagency.com/files/Kansas-Thrive-office-location.jpg';

export const kansasCityData: CityPageData = {
  slug: 'kansas-city',
  cityName: 'Kansas City',
  heroData: {
    pageTitle: 'Kansas City SEO Services | TRAC - SEO Experts KC',
    metaDescription: 'TRAC provides expert SEO services for Kansas City businesses. Drive organic traffic, improve rankings, and achieve growth in KC. Get your free SEO consultation!',
    heroTitle: 'Kansas City SEO Agency: Your Partner for Growth in KC',
    heroSubtitle: 'Boost Your Brand in Kansas City with TRAC\'s Strategic SEO Solutions',
    heroDescription: 'TRAC helps Kansas City businesses enhance their online visibility and attract more customers through effective, tailor-made SEO strategies. In the heart of America, a strong digital presence is key to thriving, and our KC-focused SEO services are designed to deliver just that. We specialize in local SEO for the diverse Kansas City metro area, encompassing both Missouri and Kansas sides, comprehensive technical optimization to ensure your website performs flawlessly for users and search engines, and engaging content marketing strategies designed to convert KC audiences. Our process begins with a deep understanding of your unique business needs and the specific dynamics of the Kansas City market, from its arts and culture scene to its growing tech and logistics industries. TRAC is committed to delivering measurable results, transparent reporting, and building long-term partnerships with Kansas City businesses. Let us help you navigate the complexities of SEO and achieve sustainable success in Kansas City.',
    heroImage: { src: GENERIC_CITY_HERO_IMAGE_SRC, alt: 'SEO Services in Kansas City, MO', dataAiHint: 'Kansas City skyline' },
    heroVideoUrl: 'https://www.youtube.com/embed/JBPmDzL-Xek',
    formTitle: 'Free Kansas City SEO Quote!',
  },
  resultsHeadline: 'SEO Success Stories in Kansas City: Driving Real Business Growth',
  readyToGrowHeadline: 'Elevate Your Kansas City SEO Strategy & Market Reach?',
  servicesSectionHeadline: 'Kansas City SEO Services: Tailored for the Heartland',
  servicesSectionSubheadline: 'Customized SEO solutions designed to help your Kansas City business thrive online and connect with the local community effectively across both states.',
  services: [
    { icon: Search, title: 'Local SEO for Kansas City & Metro Area', description: 'Optimize your online presence for Kansas City local search (e.g., "SEO services Overland Park," "restaurants in the Plaza") to attract more customers from your specific service areas. We focus on Google Business Profile optimization and local citation building for KC businesses on both sides of the state line.' },
    { icon: Settings, title: 'Kansas City Website SEO & Technical Health', description: 'Improve your Kansas City-focused website\'s technical SEO foundation. We enhance site speed, mobile-friendliness (essential for reaching KC residents on the go), crawlability, and implement schema markup for better rankings and rich snippet opportunities in KC.' },
    { icon: Mail, title: 'Content Strategy & Creation for Kansas City SEO', description: 'Create high-quality, SEO-friendly content (e.g., articles on KC BBQ, guides to local events, industry-specific blog posts) that resonates with the Kansas City audience, establishes your business as an authority, and drives organic traffic and conversions in the KC market.' },
    { icon: BarChart2, title: 'Kansas City SEO Analytics & Performance Tracking', description: 'Track your SEO performance and ROI in the Kansas City market with detailed, transparent reports. We focus on key metrics that matter for your business growth and success in KC, including keyword rankings, organic traffic, and lead quality.' },
  ],
  whyChooseSectionHeadline: 'Why TRAC is the Premier Choice for Kansas City SEO',
  whyChooseIntro: 'TRAC offers specialized, effective SEO strategies for businesses aiming to succeed in the competitive Kansas City market. Our local expertise, deep understanding of the "Heartland" culture, and commitment to results set us apart.',
  whyChooseParagraph1: 'Our Kansas City SEO team has a nuanced understanding of the local market, from its strong arts scene and renowned BBQ culture to its growing tech sector and logistics hubs. We tailor our SEO services to capitalize on these unique characteristics, ensuring your Kansas City business connects authentically with its target demographic across the metro.',
  whyChooseParagraph2: 'We are dedicated to ethical, white-hat SEO practices that build lasting value and authority for your Kansas City business. Our focus is on sustainable growth, transparent communication, and achieving measurable results that contribute directly to your success in the KC area. We keep you informed every step of the way.',
  whyChoosePoints: [
    { icon: 'TrendingUp', title: 'Kansas City SEO Growth & Increased Visibility', description: 'Increase your search engine visibility, attract more qualified organic leads, and achieve significant growth within the Kansas City market through our expert, tailored SEO campaigns. We help you stand out in a bustling market.' },
    { icon: 'Lightbulb', title: 'Targeted Kansas City SEO Expertise', description: 'Benefit from SEO strategies specifically designed for the Kansas City (MO & KS) audience, considering local search behaviors, industry competition (e.g., in logistics, agriculture tech), and unique market opportunities in KC.' },
    { icon: 'ShieldCheck', title: 'Proven & Reliable Kansas City SEO Partner', description: 'Partner with a trusted Kansas City SEO agency known for its transparent processes, reliable service, and a proven track record of delivering impactful results for businesses throughout the KC metro area.' },
  ],
  awards: {
    clutch: { headline: 'Top Kansas City SEO Agency - Clutch 2024', text: 'Recognized by Clutch for delivering leading SEO services and achieving outstanding client success in the dynamic Kansas City market. Our strategic approach gets results.' },
    upcity: { headline: 'Kansas City SEO Excellence Award - UpCity 2024', text: 'Awarded by UpCity for impactful SEO strategies and consistently delivering high-quality results for businesses in Kansas City, helping them connect with their ideal customers.' },
  },
  location: {
    officeImageUrl: GENERIC_OFFICE_LOCATION_IMAGE_SRC,
    addressLines: ['107 W 9th St #2', 'Suite 90', 'Kansas City, MO 64105'],
    phone: CONTACT_DETAILS.phone,
    email: CONTACT_DETAILS.email,
  },
  bottomFormTitle: 'Get Your SEO Plan',
};

    