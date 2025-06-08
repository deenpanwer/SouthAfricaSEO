
import type { CityPageData } from '@/types';
import { Search, Settings, Mail, BarChart2, TrendingUp, Lightbulb, ShieldCheck } from 'lucide-react';
import { CONTACT_DETAILS } from '@/lib/constants.tsx';

const GENERIC_CITY_HERO_IMAGE_SRC = 'https://placehold.co/800x500.png';
const GENERIC_OFFICE_LOCATION_IMAGE_SRC = 'https://placehold.co/600x400.png';

export const austinData: CityPageData = {
  slug: 'austin',
  cityName: 'Austin',
  heroData: {
    pageTitle: 'Austin SEO Services | TRAC - SEO Company in Austin, TX',
    metaDescription: 'TRAC is a leading Austin SEO company helping businesses improve search rankings and drive organic traffic. Contact our Austin SEO experts today for a free quote!',
    heroTitle: 'Austin SEO Company: Fueling Your Growth in ATX',
    heroSubtitle: 'Elevate Your Brand in Austin with Expert, Innovative SEO Strategies',
    heroDescription: 'TRAC delivers cutting-edge SEO solutions for businesses looking to thrive in Austin\'s dynamic and tech-forward market. Our strategies are designed to increase your online visibility, attract highly targeted traffic, and boost conversions in the vibrant ATX scene. We understand that Austin businesses need innovative and adaptive SEO. Our services include deep-dive local SEO for Austin communities, advanced technical optimization for fast-growing startups, and compelling content marketing that captures the unique Austin spirit. We are committed to data-driven results, transparent reporting, and becoming a true extension of your Austin-based team. Let TRAC help your business make a significant impact in Austin\'s competitive digital landscape.',
    heroImage: { src: GENERIC_CITY_HERO_IMAGE_SRC, alt: 'SEO Services in Austin, TX', dataAiHint: 'Austin city tech' },
    heroVideoUrl: 'https://www.youtube.com/embed/JBPmDzL-Xek',
    formTitle: 'Get Your FREE Austin SEO Audit!',
  },
  resultsHeadline: 'Driving SEO Success for Austin\'s Innovators & Entrepreneurs',
  readyToGrowHeadline: 'Ready to Grow with Austin SEO?',
  servicesSectionHeadline: 'Specialized SEO Services for Austin\'s Unique Market',
  servicesSectionSubheadline: 'Our Austin SEO services are tailored to the dynamic tech, creative, and local business industries of Austin, Texas.',
  services: [
    { icon: Search, title: 'Austin Local SEO Optimization & GMB Management', description: 'Maximize your visibility in Austin\'s local search results and Google Maps. We target specific Austin neighborhoods and demographics to drive relevant foot traffic and online inquiries.' },
    { icon: Settings, title: 'Technical SEO for Austin Startups & Scale-Ups', description: 'Ensure your website is perfectly optimized for search engines and user experience in Austin. We focus on site speed, mobile-first indexing, and structured data for tech-savvy audiences.' },
    { icon: Mail, title: 'Content & Link Building for Austin SEO Authority', description: 'Create high-quality, authoritative content that resonates with the Austin community and build authoritative links to significantly boost your Austin SEO performance and domain trust.' },
    { icon: BarChart2, title: 'Austin SEO Performance Tracking & Analytics', description: 'Monitor your Austin SEO campaign with transparent, data-driven reports. We track key metrics that matter to your Austin business, including keyword rankings, organic traffic, and lead quality.' },
  ],
  whyChooseSectionHeadline: 'TRAC: Your Austin SEO Growth Partner & Innovator',
  whyChooseIntro: 'For effective and innovative SEO in Austin, TRAC is the agency of choice. We blend cutting-edge techniques with a deep understanding of the ATX market.',
  whyChooseParagraph1: 'Austin\'s unique market, a blend of tech innovation and strong local culture, requires a specialized SEO approach. We provide that expertise, crafting strategies that speak to both the established Austin businesses and its burgeoning startup scene.',
  whyChooseParagraph2: 'We focus on delivering sustainable SEO results that help your Austin business thrive long-term. Our team stays ahead of algorithm changes and market trends to ensure your SEO strategy remains effective and competitive in ATX.',
  whyChoosePoints: [
    { icon: 'TrendingUp', title: 'Austin SEO Results & ROI', description: 'Achieve tangible improvements in search rankings, organic traffic, and lead generation for your Austin business, ensuring a strong return on your SEO investment.' },
    { icon: 'Lightbulb', title: 'Innovative & Adaptive Austin SEO', description: 'Benefit from cutting-edge SEO strategies tailored to the fast-paced and evolving digital landscape of the Austin market, keeping you ahead of the curve.' },
    { icon: 'ShieldCheck', title: 'Trusted & Transparent Austin SEO', description: 'Experience ethical and effective SEO services designed for long-term success, with clear communication and reporting tailored for Austin businesses.' },
  ],
  awards: {
    clutch: { headline: 'Top Austin SEO Agency - Clutch 2024', text: 'Recognized by Clutch for innovative SEO strategies and consistent client success in the competitive Austin tech hub.' },
    upcity: { headline: 'Austin SEO Excellence - UpCity 2024', text: 'Awarded by UpCity for leading SEO services and outstanding results delivered to businesses across Austin.' },
  },
  location: {
    officeImageUrl: GENERIC_OFFICE_LOCATION_IMAGE_SRC,
    addressLines: ['303 SEO Way', 'Suite 30', 'Austin, TX 78701'],
    phone: CONTACT_DETAILS.phone,
    email: CONTACT_DETAILS.email,
  },
  bottomFormTitle: 'Request Your Austin SEO Plan',
};
