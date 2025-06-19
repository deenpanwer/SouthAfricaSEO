
import type { CityPageData } from '@/types';
import { Search, Settings, Users, Mail, TrendingUp, Lightbulb, ShieldCheck } from 'lucide-react';
import { CONTACT_DETAILS } from '@/lib/constants.tsx';

const GENERIC_CITY_HERO_IMAGE_SRC = 'https://cdn-icggj.nitrocdn.com/AphBmykuaGyxZijWArNhxcCiPzVdYZGT/assets/images/optimized/rev-d6d7292/thriveagency-nov.flywheelsites.com/files/770x385-2-1.pnghttps://cdn-icggj.nitrocdn.com/AphBmykuaGyxZijWArNhxcCiPzVdYZGT/assets/images/optimized/rev-d6d7292/thriveagency.com/files/Arlington-SEO-thumbnail.png';
const GENERIC_OFFICE_LOCATION_IMAGE_SRC = 'https://cdn-icggj.nitrocdn.com/AphBmykuaGyxZijWArNhxcCiPzVdYZGT/assets/images/optimized/rev-d6d7292/thriveagency.com/files/Arlington-office-location.png';

export const arlingtonData: CityPageData = {
  slug: 'arlington',
  cityName: 'Arlington',
  heroData: {
    pageTitle: 'Arlington SEO Services | TRAC - SEO Experts in Arlington, TX',
    metaDescription: 'Boost your Arlington business with TRAC\'s expert SEO services. Drive organic traffic, increase leads, and maximize sales in Arlington. Get your free SEO proposal!',
    heroTitle: 'Arlington SEO Agency: Your Partner for Digital Growth',
    heroSubtitle: 'Dominate Search in Arlington, TX with TRAC\'s Tailored SEO Strategies',
    heroDescription: 'TRAC provides specialized SEO services carefully designed for Arlington businesses aiming to significantly increase their online visibility and attract a steady stream of qualified local customers. Our expert team understands the unique digital landscape of Arlington, Texas, a key city within the DFW metroplex, and we craft strategies that truly resonate with your target audience. We go deep into local SEO tactics, making sure your Google Business Profile is perfectly optimized and your business ranks prominently in "near me" searches across Arlington for relevant services. Our comprehensive technical SEO audits address website speed, mobile-friendliness, and crawlability, laying a strong foundation for lasting search engine success. Our content strategies are built around keywords relevant to the Arlington area, creating valuable information that engages users and positions your brand as an authority in sectors like entertainment, education, or local services. Partner with TRAC to unlock your business\'s full online potential here and achieve measurable growth through targeted SEO.',
    heroImage: { src: GENERIC_CITY_HERO_IMAGE_SRC, alt: 'SEO Services in Arlington, TX', dataAiHint: 'Arlington city business' },
    heroVideoUrl: 'https://www.youtube.com/embed/JBPmDzL-Xek',
    formTitle: 'Free SEO Quote!', // Updated: Removed 'Arlington'
  },
  resultsHeadline: 'SEO Results That Matter for Arlington Businesses',
  readyToGrowHeadline: 'Grow Your Arlington Business with SEO?',
  servicesSectionHeadline: 'Targeted SEO Services for Arlington',
  servicesSectionSubheadline: 'Our SEO strategies are designed to put your business in front of local customers actively searching for your services in Arlington.', // Adjusted for flow
  services: [
    { icon: Search, title: 'Local SEO Optimization', description: 'Refine your Google Business Profile and local citations to rank higher in Arlington local search results. We target area-specific keywords to attract geographically relevant customers looking for services like yours.' },
    { icon: Settings, title: 'Technical Site SEO', description: 'Ensure your website is fast, mobile-friendly, and easily discoverable for better Arlington rankings. We perform thorough audits to find and fix technical issues, improving user experience.' },
    { icon: Users, title: 'Keyword Strategy', description: 'Pinpoint and target the right keywords to attract qualified organic traffic from the Arlington area. Our research focuses on terms with high purchase intent relevant to local consumers and businesses.' },
    { icon: Mail, title: 'Content Marketing for Local SEO', description: 'Create engaging, high-quality content that resonates with Arlington audiences and builds SEO authority. We focus on topics relevant to your local customers, establishing your expertise and driving organic traffic.' },
  ],
  whyChooseSectionHeadline: 'Why TRAC for Your Arlington SEO Needs?',
  whyChooseIntro: 'TRAC delivers customized, results-driven SEO solutions for businesses in Arlington, Texas. We understand the local market and how to make your business stand out from the competition.',
  whyChooseParagraph1: 'Our SEO experts understand the local market dynamics and consumer behavior specific to Arlington and the broader DFW area. We tailor strategies to achieve your specific business goals, whether it\'s increasing foot traffic to your Arlington location, generating online leads, or building brand awareness within the community.',
  whyChooseParagraph2: 'We combine proven SEO techniques with clear reporting to ensure your Arlington business achieves lasting online growth. Our commitment is to ethical practices and measurable outcomes, making us a trusted SEO partner dedicated to your long-term success.',
  whyChoosePoints: [
    { icon: 'TrendingUp', title: 'SEO Growth for Arlington', description: 'Drive more organic traffic and generate high-quality leads in the competitive Arlington market. We focus on SEO strategies that convert visitors into customers.' },
    { icon: 'Lightbulb', title: 'Local Arlington Expertise', description: 'Benefit from SEO strategies tailored specifically to the Arlington, TX market and its unique demographic and economic factors. We know what local searches are looking for.' },
    { icon: 'ShieldCheck', title: 'Ethical SEO Practices', description: 'Achieve lasting, long-term results through white-hat SEO techniques that build trust with search engines and Arlington users. We prioritize quality and integrity.' },
  ],
  awards: {
    clutch: { headline: 'Top Arlington SEO Agency - Clutch 2024', text: 'Recognized by Clutch for delivering impactful SEO results and exceptional service to Arlington businesses. Our clients vouch for our expertise.' },
    upcity: { headline: 'Arlington SEO Excellence - UpCity 2024', text: 'Awarded by UpCity for outstanding SEO services and client success stories in the Arlington area. We pride ourselves on achieving excellence.' },
  },
  location: {
    officeImageUrl: GENERIC_OFFICE_LOCATION_IMAGE_SRC,
    addressLines: ['4600 Park Springs Blvd', 'Suite 100', 'Arlington, TX 76017'],
    phone: CONTACT_DETAILS.phone,
    email: CONTACT_DETAILS.email,
  },
  bottomFormTitle: 'Get Your SEO Proposal',
};