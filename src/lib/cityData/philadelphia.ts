
import type { CityPageData } from '@/types';
import { Search, Settings, Briefcase, Mail, BarChart2, TrendingUp, Lightbulb, ShieldCheck } from 'lucide-react';
import { CONTACT_DETAILS } from '@/lib/constants.tsx';

const GENERIC_CITY_HERO_IMAGE_SRC = 'https://placehold.co/800x500.png';
const GENERIC_OFFICE_LOCATION_IMAGE_SRC = 'https://placehold.co/600x400.png';

export const philadelphiaData: CityPageData = {
  slug: 'philadelphia',
  cityName: 'Philadelphia',
  heroData: {
    pageTitle: 'Philadelphia SEO Agency | TRAC - SEO Services Philly',
    metaDescription: 'TRAC is a Philadelphia SEO agency helping businesses improve online visibility and drive organic growth. Contact our Philly SEO experts for a free consultation.',
    heroTitle: 'Philadelphia SEO Experts: Revolutionize Your Online Presence',
    heroSubtitle: 'Lead the Pack in Philadelphia with TRAC\'s Historic SEO Success',
    heroDescription: 'TRAC offers comprehensive SEO services for businesses in Philadelphia, Pennsylvania, a city rich in American history, cultural institutions, and a diverse, growing economy. Our tailored strategies focus on improving your search engine rankings, attracting qualified local traffic from across the Delaware Valley, and increasing your ROI in the historic and competitive Philadelphia market. We understand Philly\'s unique blend of tradition and modernity. From optimizing for local searches around iconic landmarks like Independence Hall, the Liberty Bell, and Reading Terminal Market, to targeting specific neighborhoods such as Center City, Old City, Fishtown, and University City, we ensure maximum local relevance. Our technical SEO ensures your website is robust and user-friendly, while our content marketing strategies are designed to resonate with Philadelphians, addressing their needs whether they are interested in arts, culture, education, or local industries. We work with diverse sectors, from professional services and healthcare (Eds and Meds) to tourism, retail, and B2B companies. Partner with TRAC to make your Philadelphia business a prominent player in the digital landscape and achieve sustainable online growth.',
    heroImage: { src: GENERIC_CITY_HERO_IMAGE_SRC, alt: 'SEO Services in Philadelphia, PA', dataAiHint: 'Philadelphia liberty bell' },
    heroVideoUrl: 'https://www.youtube.com/embed/JBPmDzL-Xek',
    formTitle: 'Get Your FREE Philly SEO Strategy!',
  },
  resultsHeadline: 'Delivering Historic SEO Results in Philadelphia\'s Diverse Market',
  readyToGrowHeadline: 'Ready to Revolutionize Your Philadelphia SEO & Market Standing?',
  servicesSectionHeadline: 'Customized Philadelphia SEO Solutions for a City of Firsts',
  servicesSectionSubheadline: 'Our SEO services are designed to make your Philadelphia business a leader in organic search, connecting you with customers across its historic neighborhoods, bustling business districts, and renowned educational and medical institutions.',
  services: [
    { icon: Search, title: 'Philadelphia Local SEO Dominance & Neighborhood Targeting', description: 'Dominate local search in Philadelphia and connect with more customers in specific neighborhoods like Center City, Rittenhouse Square, Old City, South Philly, or Fishtown. We optimize your Google Business Profile, local citations, and on-page content for top Philly visibility and "near me" searches.' },
    { icon: Settings, title: 'Technical SEO for Philadelphia Websites & Institutions', description: 'Optimize your website\'s technical health for peak SEO performance in Philadelphia. This includes ensuring fast load times (Core Web Vitals), mobile-friendliness for a diverse user base, crawlability, and implementing schema markup for historical sites, universities, medical practices, and local businesses.' },
    { icon: Mail, title: 'Philadelphia SEO Content Marketing & Historical Relevance', description: 'Create compelling, authoritative content that ranks in Philadelphia search results and converts visitors, highlighting local history, cultural events (like the Mummers Parade or Philly Beer Week), and unique business offerings. We craft content that speaks to both residents and tourists interested in Philly\'s rich heritage and modern attractions.' },
    { icon: Briefcase, title: 'B2B, Eds & Meds, & Cultural Attraction SEO Philadelphia', description: 'Specialized SEO for Philadelphia\'s diverse business landscape, including B2B services, its prominent educational and medical institutions ("Eds and Meds"), historical and cultural attractions, and a growing tech scene. We understand how to target niche audiences in the Philadelphia area through effective and compliant SEO strategies.'},
  ],
  whyChooseSectionHeadline: 'TRAC: Your Trusted Philadelphia SEO Agency for Enduring Success',
  whyChooseIntro: 'Partner with TRAC for effective, data-driven SEO services that honor Philadelphia\'s heritage while driving modern digital growth. We are committed to helping your Philly business achieve lasting online prominence and connect with its target audience.',
  whyChooseParagraph1: 'Our Philadelphia SEO team has deep knowledge of the local market, its unique historical significance, and the diverse industries that call Philly home, from life sciences and education to arts, culture, and professional services. We leverage this understanding to create SEO strategies that are both impactful and contextually relevant to Philadelphia, ensuring your message resonates with the local community and beyond.',
  whyChooseParagraph2: 'We employ ethical, cutting-edge SEO techniques to deliver sustainable growth for Philadelphia businesses. Our strategies are designed to adapt to the evolving search landscape, ensuring your brand remains visible and competitive in the City of Brotherly Love. Transparency, clear communication, and client collaboration are at the core of our successful partnerships in Philly.',
  whyChoosePoints: [
    { icon: 'TrendingUp', title: 'Philadelphia Search Growth & Lead Generation', description: 'Improve your organic rankings, attract more qualified leads from the Philadelphia metro area and Delaware Valley, and enhance your market share with our expert SEO services. We focus on strategies that deliver tangible ROI for Philly businesses and increase customer engagement.' },
    { icon: 'Lightbulb', title: 'Strategic & Historically-Aware Philly SEO', description: 'Benefit from targeted SEO campaigns specifically designed for the Philadelphia, PA audience, considering its rich history, diverse neighborhoods, major universities, healthcare networks, and unique local search behaviors. We make your SEO resonate with Philly\'s unique character.' },
    { icon: 'ShieldCheck', title: 'Reliable & Results-Oriented Philly SEO Partner', description: 'Experience transparent, ethical, and results-oriented SEO services in Philadelphia. We are focused on building long-term success and a strong online reputation for your brand, adhering to all SEO best practices and providing detailed performance insights.' },
  ],
  awards: {
    clutch: { headline: 'Top Philadelphia SEO Agency - Clutch 2024', text: 'Recognized by Clutch for excellence in Philadelphia SEO, helping businesses of all sizes achieve their digital marketing goals in a historic and competitive city. Our clients value our strategic insights.' },
    upcity: { headline: 'Philadelphia SEO Excellence - UpCity 2024', text: 'Awarded by UpCity for top-tier SEO services in Philly, consistently delivering outstanding results and strategic growth for local and national clients targeting the dynamic Philadelphia market.' },
  },
  location: {
    officeImageUrl: GENERIC_OFFICE_LOCATION_IMAGE_SRC,
    addressLines: ['1616 SEO Sq', 'Suite 160', 'Philadelphia, PA 19101'],
    phone: CONTACT_DETAILS.phone,
    email: CONTACT_DETAILS.email,
  },
  bottomFormTitle: 'Request Your Philadelphia SEO Consultation',
};
