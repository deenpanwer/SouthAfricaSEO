
import type { CityPageData } from '@/types';
import { Search, Settings, Users, Mail, TrendingUp, Lightbulb, ShieldCheck } from 'lucide-react';
import { CONTACT_DETAILS } from '@/lib/constants.tsx';

const GENERIC_CITY_HERO_IMAGE_SRC = 'https://placehold.co/800x500.png';
const GENERIC_OFFICE_LOCATION_IMAGE_SRC = 'https://placehold.co/600x400.png';

export const arlingtonData: CityPageData = {
  slug: 'arlington',
  cityName: 'Arlington',
  heroData: {
    pageTitle: 'Arlington SEO Services | TRAC - SEO Experts in Arlington, TX',
    metaDescription: 'Boost your Arlington business with TRAC\'s expert SEO services. Drive organic traffic, increase leads, and maximize sales in Arlington. Get your free SEO proposal!',
    heroTitle: 'Arlington SEO Agency: Your Partner for Digital Growth',
    heroSubtitle: 'Dominate Search in Arlington, TX with TRAC\'s Tailored SEO Strategies',
    heroDescription: 'TRAC provides specialized SEO services meticulously designed for Arlington businesses aiming to significantly increase their online visibility and attract a steady stream of qualified local customers. Our expert team understands the unique digital landscape of Arlington, Texas, and we craft strategies that resonate with your target audience. We delve deep into local SEO tactics, ensuring your Google Business Profile is perfectly optimized and your business ranks prominently in "near me" searches across Arlington. Furthermore, our comprehensive technical SEO audits address website speed, mobile-friendliness, and crawlability, laying a robust foundation for sustained search engine success. Our content strategies are built around keywords relevant to the Arlington market, creating valuable information that engages users and positions your brand as an authority. Partner with TRAC to unlock your Arlington business\'s full online potential and achieve measurable growth through targeted SEO.',
    heroImage: { src: GENERIC_CITY_HERO_IMAGE_SRC, alt: 'SEO Services in Arlington, TX', dataAiHint: 'Arlington city business' },
    heroVideoUrl: 'https://www.youtube.com/embed/JBPmDzL-Xek',
    formTitle: 'Free Arlington SEO Quote!',
  },
  resultsHeadline: 'SEO Results That Matter for Arlington Businesses',
  readyToGrowHeadline: 'Grow Your Arlington Business with SEO?',
  servicesSectionHeadline: 'Targeted SEO Services for Arlington',
  servicesSectionSubheadline: 'Our Arlington SEO strategies are designed to put your business in front of local customers actively searching for your services.',
  services: [
    { icon: Search, title: 'Arlington Local SEO', description: 'Optimize your Google Business Profile and local citations to rank higher in Arlington local search results. We target Arlington-specific keywords to attract geographically relevant customers.' },
    { icon: Settings, title: 'Technical SEO for Arlington Sites', description: 'Ensure your website is fast, mobile-friendly, and easily crawlable for better Arlington rankings. We perform comprehensive audits to identify and fix technical impediments to SEO success.' },
    { icon: Users, title: 'Arlington Keyword Strategy', description: 'Identify and target the right keywords to attract qualified organic traffic from the Arlington area. Our research focuses on terms with high purchase intent relevant to Arlington consumers.' },
    { icon: Mail, title: 'Content Marketing for Arlington SEO', description: 'Create engaging, high-quality content that resonates with Arlington audiences and builds SEO authority. We focus on topics relevant to your Arlington customers, establishing your expertise.' },
  ],
  whyChooseSectionHeadline: 'Why TRAC for Your Arlington SEO Needs?',
  whyChooseIntro: 'TRAC delivers customized, results-driven SEO solutions for businesses in Arlington, Texas. We understand the local market and how to make your business stand out.',
  whyChooseParagraph1: 'Our Arlington SEO experts understand the local market dynamics and consumer behavior specific to Arlington and the broader DFW area. We tailor strategies to achieve your specific business goals, whether it\'s increasing foot traffic, generating online leads, or building brand awareness in Arlington.',
  whyChooseParagraph2: 'We combine proven SEO techniques with transparent reporting to ensure your Arlington business achieves sustainable online growth. Our commitment is to ethical practices and measurable outcomes, making us a trusted SEO partner in Arlington.',
  whyChoosePoints: [
    { icon: 'TrendingUp', title: 'Arlington SEO Growth', description: 'Drive more organic traffic and generate high-quality leads in the competitive Arlington market. We focus on SEO strategies that convert.' },
    { icon: 'Lightbulb', title: 'Local Arlington Expertise', description: 'Leverage SEO strategies tailored specifically to the Arlington, TX market and its unique demographic and economic factors.' },
    { icon: 'ShieldCheck', title: 'Ethical SEO Practices for Arlington', description: 'Achieve sustainable, long-term results through white-hat SEO techniques that build trust with search engines and Arlington users.' },
  ],
  awards: {
    clutch: { headline: 'Top Arlington SEO Agency - Clutch 2024', text: 'Recognized by Clutch for delivering impactful SEO results and exceptional service to Arlington businesses.' },
    upcity: { headline: 'Arlington SEO Excellence - UpCity 2024', text: 'Awarded by UpCity for outstanding SEO services and client success stories in the Arlington area.' },
  },
  location: {
    officeImageUrl: GENERIC_OFFICE_LOCATION_IMAGE_SRC,
    addressLines: ['101 SEO Rd', 'Suite 10', 'Arlington, TX 76001'],
    phone: CONTACT_DETAILS.phone,
    email: CONTACT_DETAILS.email,
  },
  bottomFormTitle: 'Get Your Arlington SEO Proposal',
};
