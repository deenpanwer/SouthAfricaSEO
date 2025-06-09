
import type { CityPageData } from '@/types';
import { Search, Settings, Briefcase, Mail, BarChart2, TrendingUp, Lightbulb, ShieldCheck } from 'lucide-react';
import { CONTACT_DETAILS } from '@/lib/constants.tsx';

const GENERIC_CITY_HERO_IMAGE_SRC = 'https://placehold.co/800x500.png';
const GENERIC_OFFICE_LOCATION_IMAGE_SRC = 'https://placehold.co/600x400.png';

export const karachiData: CityPageData = {
  slug: 'karachi',
  cityName: 'Karachi',
  heroData: {
    pageTitle: 'Karachi SEO Experts | TRAC - SEO Services Karachi, Pakistan',
    metaDescription: 'TRAC provides premier SEO services for Karachi businesses. Boost your organic traffic, improve search rankings, and achieve sustainable growth in Pakistan\'s largest city. Contact our Karachi SEO specialists!',
    heroTitle: 'Karachi SEO Agency: Navigate Pakistan\'s Economic Hub',
    heroSubtitle: 'Dominate Karachi Search Results with TRAC\'s Powerful SEO Strategies & Local Insights',
    heroDescription: 'TRAC delivers cutting-edge SEO solutions tailored for the bustling and diverse Karachi business environment. As Pakistan\'s economic backbone and a sprawling metropolis, Karachi presents unique challenges and immense opportunities. Our specialized SEO services are designed to enhance your online visibility, attract high-quality organic traffic from local and national audiences, and drive measurable growth. We offer comprehensive local SEO targeting Karachi\'s key commercial areas and residential zones (e.g., Clifton, DHA, Saddar), advanced technical optimization for robust website performance critical for businesses in a major port city, and compelling content marketing strategies that resonate with the multicultural Karachi populace. Our team conducts in-depth keyword research, competitor analysis, and on-page optimization to ensure your Karachi business effectively captures its target market, whether in manufacturing, finance, retail, or the rapidly growing tech sector. TRAC is committed to transparent reporting, ethical practices, and building long-term partnerships to ensure your sustained SEO success in Karachi.',
    heroImage: { src: GENERIC_CITY_HERO_IMAGE_SRC, alt: 'SEO Services in Karachi, Pakistan', dataAiHint: 'Karachi city port' },
    heroVideoUrl: 'https://www.youtube.com/embed/JBPmDzL-Xek',
    formTitle: 'Get Your FREE Karachi SEO Audit!',
  },
  resultsHeadline: 'Driving Significant SEO Success for Karachi\'s Leading Businesses',
  readyToGrowHeadline: 'Ready to Amplify Your Karachi Business with Strategic SEO?',
  servicesSectionHeadline: 'Tailored SEO Services for Karachi & Sindh Province',
  servicesSectionSubheadline: 'Our Karachi SEO services are designed to meet the unique demands of Pakistan\'s largest city, enhancing your visibility in a highly competitive, diverse, and economically vital market.',
  services: [
    { icon: Search, title: 'Karachi Local SEO & City-Wide Targeting', description: 'Maximize your visibility in Karachi local search results, from Tariq Road to Port Qasim. We optimize your Google Business Profile and build authoritative local citations for businesses targeting specific Karachi districts and the wider Sindh region.' },
    { icon: Settings, title: 'Technical SEO for Karachi Websites & E-commerce Platforms', description: 'Ensure your website is technically sound for optimal performance in Karachi and nationally. We focus on site speed, mobile-first indexing for Pakistan\'s growing mobile user base, structured data, and e-commerce SEO for Karachi-based online stores.' },
    { icon: Mail, title: 'Content Marketing & SEO for Karachi Audiences (Urdu/English)', description: 'Create high-quality, engaging content in both English and Urdu that ranks well in Pakistani search results, attracts your target Karachi audience, and establishes your brand as an authority in your sector. We focus on content relevant to Karachi\'s industries and culture.' },
    { icon: Briefcase, title: 'SEO for Textile, Finance & Tech Industries in Karachi', description: 'Specialized SEO strategies for Karachi\'s prominent textile, finance, shipping, and technology sectors. We understand the unique search behaviors and competitive landscapes for these key Karachi industries, helping you attract B2B and B2C clients.' },
  ],
  whyChooseSectionHeadline: 'Why TRAC is Your Go-To SEO Partner in Karachi',
  whyChooseIntro: 'For impactful SEO in Karachi, TRAC offers unmatched local expertise combined with global best practices. We empower Karachi businesses to achieve significant online growth and a strong competitive edge in Pakistan and beyond.',
  whyChooseParagraph1: 'Karachi is a city of immense scale and diversity. Our SEO strategies are crafted to reflect this, helping your business connect authentically with local Karachiites and national audiences. We focus on building a sustainable online presence that drives real business outcomes in Pakistan\'s primary commercial center.',
  whyChooseParagraph2: 'Our team of Karachi SEO specialists stays ahead of algorithm changes and market trends in Pakistan. We utilize data-driven insights, advanced SEO tools, and a collaborative approach to ensure your SEO investment yields maximum returns and positions your Karachi business for long-term success in a challenging market.',
  whyChoosePoints: [
    { icon: 'TrendingUp', title: 'Karachi SEO Growth & ROI', description: 'Achieve measurable improvements in organic traffic, lead quality, and sales in the competitive Karachi market. Our focus is on delivering a strong return on your SEO investment in Pakistan.' },
    { icon: 'Lightbulb', title: 'Local & National Karachi SEO Expertise', description: 'Benefit from SEO strategies tailored for both the Karachi local market and businesses aiming for national reach from Pakistan, considering specific Pakistani search trends and cultural nuances.' },
    { icon: 'ShieldCheck', title: 'Trusted & Transparent Karachi SEO', description: 'Experience ethical, effective SEO services with clear communication and comprehensive reporting, building a strong foundation for your Karachi business\'s online success. We are your partners in Pakistani digital growth.' },
  ],
  awards: {
    clutch: { headline: 'Top Karachi SEO Agency - P@SHA ICT Awards 2024', text: 'Recognized for delivering exceptional SEO results and client satisfaction to businesses across Karachi and Pakistan, particularly in the e-commerce and B2B sectors.' },
    upcity: { headline: 'Karachi SEO Excellence - UpCity Awards 2024', text: 'Awarded for leading SEO services and consistently helping Karachi businesses achieve their online growth objectives in a dynamic South Asian market.' },
  },
  location: {
    officeImageUrl: GENERIC_OFFICE_LOCATION_IMAGE_SRC,
    addressLines: ['101 SEO Road', 'Shahrah-e-Faisal', 'Karachi, Sindh, Pakistan'],
    phone: CONTACT_DETAILS.phone,
    email: CONTACT_DETAILS.email,
  },
  bottomFormTitle: 'Request Your Karachi SEO Strategy Session',
};
