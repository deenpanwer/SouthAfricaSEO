
import type { CityPageData } from '@/types';
import { Search, Settings, Briefcase, Mail, BarChart2, TrendingUp, Lightbulb, ShieldCheck } from 'lucide-react';
import { CONTACT_DETAILS } from '@/lib/constants.tsx';

const GENERIC_CITY_HERO_IMAGE_SRC = 'https://placehold.co/800x500.png';
const GENERIC_OFFICE_LOCATION_IMAGE_SRC = 'https://placehold.co/600x400.png';

export const galwayData: CityPageData = {
  slug: 'galway',
  cityName: 'Galway',
  heroData: {
    pageTitle: 'Galway SEO Services | TRAC - SEO Agency Galway, Ireland',
    metaDescription: 'TRAC offers expert SEO services for Galway businesses. Boost your online presence, attract more customers, and achieve growth in the West of Ireland. Contact our Galway SEO team!',
    heroTitle: 'Galway SEO Agency: Amplify Your Presence in the West',
    heroSubtitle: 'Connect with More Customers in Galway with TRAC\'s Creative SEO Strategies',
    heroDescription: 'TRAC provides dynamic SEO services for businesses in Galway, Ireland\'s cultural heart on the Atlantic coast. Known for its vibrant arts scene, festivals, and growing med-tech and ICT sectors, Galway presents unique opportunities for businesses to connect with both a lively local community and a significant tourist influx. Our SEO strategies are designed to enhance your online visibility, drive targeted traffic, and generate measurable results. We focus on local SEO to capture searches within Galway City and County, technical optimization to ensure your website is fast and user-friendly, and content marketing that reflects Galway\'s creative spirit and appeals to your specific audience. Whether you\'re in tourism, retail, technology, or professional services, TRAC crafts tailored SEO campaigns to help your Galway business shine online. We are committed to understanding your goals and delivering SEO solutions that contribute to your long-term success in the West of Ireland.',
    heroImage: { src: GENERIC_CITY_HERO_IMAGE_SRC, alt: 'SEO Services in Galway, Ireland', dataAiHint: 'Galway city arts' },
    heroVideoUrl: 'https://www.youtube.com/embed/JBPmDzL-Xek',
    formTitle: 'Get Your FREE Galway SEO Consultation!',
  },
  resultsHeadline: 'Creative & Effective SEO Results for Galway Businesses',
  readyToGrowHeadline: 'Ready to Grow Your Galway Business with Impactful SEO?',
  servicesSectionHeadline: 'Specialized SEO Services for Galway & Connacht',
  servicesSectionSubheadline: 'Our Galway SEO strategies are tailored to Ireland\'s West Coast, helping businesses leverage digital marketing to reach local, national, and international audiences effectively.',
  services: [
    { icon: Search, title: 'Galway Local SEO & Tourism Focus', description: 'Optimize your online presence for local searches in Galway City and County, including targeting for major events like the Galway Arts Festival. We ensure tourists and locals alike can easily find your Galway business through improved GMB listings and local keyword targeting.' },
    { icon: Settings, title: 'Technical SEO for Galway Websites', description: 'Ensure your Galway-focused website is technically optimized for search engines, providing excellent user experience through fast load times, mobile responsiveness, and clean code. This is crucial for ranking in Galway\'s competitive digital space.' },
    { icon: Mail, title: 'Content Marketing for Galway SEO & Arts Scene', description: 'Create engaging, high-quality content that reflects Galway\'s vibrant culture and attracts your target audience. We develop content strategies that build SEO authority and drive traffic for businesses in Galway, from festival guides to local business spotlights.' },
    { icon: Briefcase, title: 'SEO for Med-Tech, ICT & Creative Industries in Galway', description: 'Tailored SEO for Galway\'s growing med-tech and ICT sectors, as well as its established creative and tourism industries. We understand the specific needs of these dynamic Galway markets and how to reach their target audiences.' },
  ],
  whyChooseSectionHeadline: 'TRAC: Your Partner for SEO Success in Galway',
  whyChooseIntro: 'TRAC delivers innovative SEO solutions for businesses in Galway, combining local market understanding with cutting-edge digital strategies to help you achieve your growth objectives in the West of Ireland.',
  whyChooseParagraph1: 'Our Galway SEO team appreciates the unique blend of tradition, creativity, and innovation that defines the city. We craft SEO campaigns that are not only effective but also resonate with the spirit of Galway, helping your business connect with a diverse audience.',
  whyChooseParagraph2: 'We are committed to ethical SEO practices and transparent communication, providing Galway businesses with clear insights into their campaign performance and a strategy for sustained online success. Partner with us to navigate the digital landscape of Connacht.',
  whyChoosePoints: [
    { icon: 'TrendingUp', title: 'Galway SEO Growth & Visibility', description: 'Increase your organic search rankings and attract more customers in the competitive Galway market. We focus on delivering measurable results that enhance your online presence in Ireland.' },
    { icon: 'Lightbulb', title: 'West of Ireland SEO Expertise', description: 'Benefit from SEO strategies specifically designed for the Galway market, understanding local search trends, cultural events, and the unique economic drivers of the Connacht region.' },
    { icon: 'ShieldCheck', title: 'Reliable & Creative Galway SEO', description: 'Experience transparent, ethical, and effective SEO services focused on the long-term success of your Galway business. We build strategies that are as creative and resilient as Galway itself.' },
  ],
  awards: {
    clutch: { headline: 'Top Galway SEO Agency - West of Ireland Awards 2024', text: 'Recognized for creative and effective SEO strategies that deliver for businesses in Galway, particularly in the arts, tourism, and tech sectors.' },
    upcity: { headline: 'Galway SEO Leaders - Connacht Region 2024', text: 'Awarded for providing outstanding SEO services and achieving significant online growth for businesses throughout Galway and the West of Ireland.' },
  },
  location: {
    officeImageUrl: GENERIC_OFFICE_LOCATION_IMAGE_SRC,
    addressLines: ['3 SEO Dock', 'The Spanish Arch', 'Galway City, Ireland'],
    phone: CONTACT_DETAILS.phone,
    email: CONTACT_DETAILS.email,
  },
  bottomFormTitle: 'Request Your Galway SEO Plan',
};
