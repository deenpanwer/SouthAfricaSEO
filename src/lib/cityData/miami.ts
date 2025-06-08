
import type { CityPageData } from '@/types';
import { Search, Settings, Briefcase, Mail, BarChart2, TrendingUp, Lightbulb, ShieldCheck } from 'lucide-react';
import { CONTACT_DETAILS } from '@/lib/constants.tsx';

const GENERIC_CITY_HERO_IMAGE_SRC = 'https://placehold.co/800x500.png';
const GENERIC_OFFICE_LOCATION_IMAGE_SRC = 'https://placehold.co/600x400.png';

export const miamiData: CityPageData = {
  slug: 'miami',
  cityName: 'Miami',
  heroData: {
    pageTitle: 'Miami SEO Agency | TRAC - SEO Services Miami, FL',
    metaDescription: 'TRAC is a Miami SEO agency helping businesses improve online visibility and drive organic growth. Contact our Miami SEO experts for a free consultation.',
    heroTitle: 'Miami SEO Experts: Ride the Wave to Online Success',
    heroSubtitle: 'Make Waves in Miami with TRAC\'s Vibrant SEO Strategies',
    heroDescription: 'TRAC offers comprehensive SEO services for businesses in Miami, Florida, a global hub for tourism, luxury, and international trade. Our tailored strategies focus on improving your search engine rankings, attracting qualified local and international traffic, and increasing your ROI in the vibrant Miami market. We understand the unique multilingual and multicultural dynamics of Miami. From optimizing for local searches in South Beach and Brickell to ensuring your website is technically sound and developing content that resonates with Miami\'s diverse audience, our SEO experts cover all angles. We aim to make your brand unmissable in a city known for its energy and style. Partner with TRAC to amplify your digital presence and achieve significant growth in the Magic City.',
    heroImage: { src: GENERIC_CITY_HERO_IMAGE_SRC, alt: 'SEO Services in Miami, FL', dataAiHint: 'Miami beach business' },
    heroVideoUrl: 'https://www.youtube.com/embed/JBPmDzL-Xek',
    formTitle: 'Get Your FREE Miami SEO Strategy!',
  },
  resultsHeadline: 'Delivering Hot SEO Results in Miami\'s Competitive Market',
  readyToGrowHeadline: 'Ready to Heat Up Your Miami SEO & Attract More Business?',
  servicesSectionHeadline: 'Customized Miami SEO Solutions for a Global Audience',
  servicesSectionSubheadline: 'Our SEO services are designed to make your Miami business a leader in organic search, attracting diverse audiences from local residents to international tourists and investors.',
  services: [
    { icon: Search, title: 'Miami Local & Multilingual SEO', description: 'Dominate local search in Miami and target multilingual audiences (e.g., Spanish-speaking customers). We optimize your Google Business Profile for Miami neighborhoods and create content that speaks to diverse cultural groups.' },
    { icon: Settings, title: 'Technical SEO for Miami Websites & International Reach', description: 'Optimize your website\'s technical health for peak SEO performance in Miami and for international audiences. This includes site speed, mobile-first indexing for a global user base, and hreflang implementation for multilingual sites.' },
    { icon: Mail, title: 'Miami SEO Content Marketing & Lifestyle Branding', description: 'Create compelling content that ranks in Miami search results and converts visitors, highlighting the unique lifestyle, luxury, and business opportunities Miami offers. We focus on content that drives engagement and shares.' },
    { icon: Briefcase, title: 'Luxury, Tourism & Real Estate SEO Miami', description: 'Specialized SEO for Miami\'s key sectors: luxury brands, tourism (hotels, attractions, cruises), and high-value real estate. We understand how to target affluent consumers and international buyers looking for Miami properties and experiences.'},
  ],
  whyChooseSectionHeadline: 'TRAC: Your Trusted Miami SEO Agency for Dynamic Growth',
  whyChooseIntro: 'Partner with TRAC for effective, data-driven SEO services that capture the essence of Miami. We understand the high-energy, international market of Miami and are dedicated to helping your business thrive online.',
  whyChooseParagraph1: 'Our Miami SEO team has deep knowledge of the local market influences, from its status as a gateway to Latin America to its booming real estate and luxury sectors. We leverage this understanding to build SEO strategies that are not only effective but culturally attuned to Miami\'s diverse population.',
  whyChooseParagraph2: 'We employ ethical, cutting-edge SEO techniques to deliver sustainable growth for Miami businesses. Our approach is adaptive, responding to the fast-paced changes in both search algorithms and Miami\'s dynamic market conditions, ensuring your business stays ahead of the competition.',
  whyChoosePoints: [
    { icon: 'TrendingUp', title: 'Miami Search Growth & Lead Generation', description: 'Improve your organic rankings, attract high-quality local and international leads, and boost conversions in the competitive Miami market. We focus on delivering a strong ROI for your SEO investment.' },
    { icon: 'Lightbulb', title: 'Strategic & Culturally Attuned Miami SEO', description: 'Benefit from targeted SEO campaigns specifically designed for the Miami, FL audience, considering its international appeal, diverse demographics, and unique industry verticals like tourism and finance.' },
    { icon: 'ShieldCheck', title: 'Reliable & Results-Oriented Miami SEO Partner', description: 'Experience transparent, ethical, and results-oriented SEO services in Miami. We are focused on building long-term success and a powerful online reputation for your brand in the Magic City and beyond.' },
  ],
  awards: {
    clutch: { headline: 'Top Miami SEO Agency - Clutch 2024', text: 'Recognized by Clutch for excellence in Miami SEO, particularly for businesses in tourism, real estate, and international trade. Our strategies make an impact.' },
    upcity: { headline: 'Miami SEO Excellence - UpCity 2024', text: 'Awarded by UpCity for top-tier SEO services in Miami, helping businesses navigate the vibrant and competitive digital landscape with success.' },
  },
  location: {
    officeImageUrl: GENERIC_OFFICE_LOCATION_IMAGE_SRC,
    addressLines: ['1212 SEO Ave', 'Suite 120', 'Miami, FL 33101'],
    phone: CONTACT_DETAILS.phone,
    email: CONTACT_DETAILS.email,
  },
  bottomFormTitle: 'Request Your Miami SEO Consultation',
};

    