
import type { CityPageData } from '@/types';
import { Search, Settings, Briefcase, Mail, BarChart2, TrendingUp, Lightbulb, ShieldCheck } from 'lucide-react';
import { CONTACT_DETAILS } from '@/lib/constants.tsx';

const GENERIC_CITY_HERO_IMAGE_SRC = 'https://cdn-icggj.nitrocdn.com/AphBmykuaGyxZijWArNhxcCiPzVdYZGT/assets/images/optimized/rev-d6d7292/thriveagency.com/files/SEO-Company-1.jpg';
const GENERIC_OFFICE_LOCATION_IMAGE_SRC = 'https://cdn-icggj.nitrocdn.com/AphBmykuaGyxZijWArNhxcCiPzVdYZGT/assets/images/optimized/rev-d6d7292/thriveagency.com/files/Cleveland-Thrive-office-location.jpg';

export const dublinData: CityPageData = {
  slug: 'dublin',
  cityName: 'Dublin',
  heroData: {
    pageTitle: 'Dublin SEO Experts | TRAC - SEO Services Dublin, Ireland',
    metaDescription: 'TRAC provides leading SEO services for Dublin businesses. Boost your organic traffic, improve search rankings, and achieve sustainable growth in the competitive Dublin market. Contact our Dublin SEO specialists!',
    heroTitle: 'Dublin SEO Agency: Propel Your Business in Ireland\'s Capital',
    heroSubtitle: 'Dominate Dublin Search Results with TRAC\'s Proven SEO Strategies & Local Expertise',
    heroDescription: 'TRAC delivers cutting-edge SEO solutions specifically designed for the dynamic and international Dublin business environment. As Ireland\'s economic powerhouse and a major European tech hub, Dublin demands a sophisticated SEO strategy to stand out. We specialize in enhancing your online visibility, attracting high-quality organic traffic from both local and international audiences, and driving measurable growth. Our services cover comprehensive local SEO targeting Dublin postcodes and surrounding counties, advanced technical optimization for robust website performance (crucial for tech startups and established corporations alike), and compelling content marketing that resonates with the Irish market and beyond. We understand the nuances of Dublin\'s key sectors, including technology, finance, pharmaceuticals, and tourism. Our team conducts in-depth keyword research, competitor analysis, and on-page optimization to ensure your Dublin business captures its target audience effectively. TRAC is committed to transparent reporting, ethical practices, and building long-term partnerships to ensure your sustained SEO success in Dublin.',
    heroImage: { src: GENERIC_CITY_HERO_IMAGE_SRC, alt: 'SEO Services in Dublin, Ireland', dataAiHint: 'Dublin city tech' },
    heroVideoUrl: 'https://www.youtube.com/embed/JBPmDzL-Xek',
    formTitle: 'Get Your FREE Dublin SEO Audit!',
  },
  resultsHeadline: 'Driving SEO Success for Dublin\'s Innovative Businesses',
  readyToGrowHeadline: 'Ready to Boost Your Dublin SEO & Conquer the Irish Market?',
  servicesSectionHeadline: 'Tailored SEO Services for Dublin & Ireland',
  servicesSectionSubheadline: 'Our Dublin SEO services are designed to meet the unique challenges of Ireland\'s capital, enhancing your visibility in a competitive, tech-savvy, and international market.',
  services: [
    { icon: Search, title: 'Dublin Local SEO & National Targeting', description: 'Maximize your visibility in Dublin local search results (e.g., "SEO services Dublin City Centre," "restaurants Temple Bar") and expand your reach across Ireland. We optimize your Google Business Profile and build authoritative local and national citations for businesses targeting the entire Irish market.' },
    { icon: Settings, title: 'Technical SEO for Dublin Websites & Tech Companies', description: 'Ensure your website is technically sound for optimal performance in Dublin and internationally. We focus on site speed (Core Web Vitals), mobile-first indexing, structured data for tech businesses, and international SEO considerations for companies with a global reach from their Dublin base.' },
    { icon: Mail, title: 'Content Marketing & SEO for Dublin Audiences', description: 'Create high-quality, engaging content (blog posts, industry insights, guides to Dublin) that ranks well in Irish search results, attracts your target Dublin audience, and establishes your brand as a thought leader in your sector. We focus on content that converts.' },
    { icon: Briefcase, title: 'SEO for Tech, Finance & Tourism in Dublin', description: 'Specialized SEO strategies for Dublin\'s prominent tech, finance, and tourism sectors. We understand the unique search behaviors and competitive landscapes for these key Dublin industries, helping you attract talent, investors, and customers.' },
  ],
  whyChooseSectionHeadline: 'Why TRAC is Your Go-To SEO Partner in Dublin',
  whyChooseIntro: 'For impactful SEO in Dublin, TRAC offers unparalleled local expertise combined with global best practices. We empower Dublin businesses to achieve significant online growth and a strong competitive edge in Ireland and beyond.',
  whyChooseParagraph1: 'Dublin is a unique city, blending rich history with a forward-thinking tech scene. Our SEO strategies are crafted to reflect this, helping your business connect authentically with both local Dubliners and international audiences. We focus on building a sustainable online presence that drives real business outcomes.',
  whyChooseParagraph2: 'Our team of Dublin SEO specialists stays ahead of algorithm changes and market trends in Ireland. We utilize data-driven insights, advanced SEO tools, and a collaborative approach to ensure your SEO investment yields maximum returns and positions your Dublin business for long-term success.',
  whyChoosePoints: [
    { icon: 'TrendingUp', title: 'Dublin SEO Growth & ROI', description: 'Achieve measurable improvements in organic traffic, lead quality, and sales in the competitive Dublin market. Our focus is on delivering a strong return on your SEO investment in Ireland.' },
    { icon: 'Lightbulb', title: 'Local & International Dublin SEO Expertise', description: 'Benefit from SEO strategies tailored for both the Dublin local market and businesses aiming for international reach from Ireland, considering specific Irish search trends and cultural nuances.' },
    { icon: 'ShieldCheck', title: 'Trusted & Transparent Dublin SEO', description: 'Experience ethical, effective SEO services with clear communication and comprehensive reporting, building a strong foundation for your Dublin business\'s online success. We are your partners in Irish digital growth.' },
  ],
  awards: {
    clutch: { headline: 'Top Dublin SEO Agency - Clutch Ireland 2024', text: 'Recognized for delivering exceptional SEO results and client satisfaction to businesses across Dublin and Ireland, particularly in the tech and B2B sectors.' },
    upcity: { headline: 'Dublin SEO Excellence - UpCity Awards 2024', text: 'Awarded for leading SEO services and consistently helping Dublin businesses achieve their online growth objectives in a dynamic European market.' },
  },
  location: {
    officeImageUrl: GENERIC_OFFICE_LOCATION_IMAGE_SRC,
    addressLines: ['15th Quay', 'Grand Canal Dock', 'Dublin 2, Ireland'],
    phone: CONTACT_DETAILS.phone,
    email: CONTACT_DETAILS.email,
  },
  bottomFormTitle: 'Request Your SEO Strategy Session',
};
