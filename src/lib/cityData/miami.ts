
import type { CityPageData } from '@/types';
import { Search, Settings, Briefcase, Mail, BarChart2, TrendingUp, Lightbulb, ShieldCheck } from 'lucide-react';
import { CONTACT_DETAILS } from '@/lib/constants.tsx';

const GENERIC_CITY_HERO_IMAGE_SRC = 'https://cdn-icggj.nitrocdn.com/AphBmykuaGyxZijWArNhxcCiPzVdYZGT/assets/images/optimized/rev-d6d7292/thriveagency.com/files/SEO-Company.jpg';
const GENERIC_OFFICE_LOCATION_IMAGE_SRC = 'https://cdn-icggj.nitrocdn.com/AphBmykuaGyxZijWArNhxcCiPzVdYZGT/assets/images/optimized/rev-d6d7292/thriveagency.com/files/Cleveland-Thrive-office-location.jpg';

export const miamiData: CityPageData = {
  slug: 'miami',
  cityName: 'Miami',
  heroData: {
    pageTitle: 'Miami SEO Agency | TRAC - SEO Services Miami, FL',
    metaDescription: 'TRAC is a Miami SEO agency helping businesses improve online visibility and drive organic growth. Contact our Miami SEO experts for a free consultation.',
    heroTitle: 'Miami SEO Experts: Ride the Wave to Online Success',
    heroSubtitle: 'Make Waves in Miami with TRAC\'s Vibrant SEO Strategies',
    heroDescription: 'TRAC offers comprehensive SEO services for businesses in Miami, Florida, a global hub for tourism, luxury, international trade, and a burgeoning tech scene. Our tailored strategies focus on improving your search engine rankings, attracting qualified local and international traffic, and increasing your ROI in the vibrant and highly competitive Miami market. We understand the unique multilingual and multicultural dynamics of Miami and tailor our SEO approach accordingly. From optimizing for local searches in iconic areas like South Beach, Brickell, and Wynwood to ensuring your website is technically sound for a global audience and developing content that resonates with Miami\'s diverse population (in English, Spanish, and potentially other languages), our SEO experts cover all angles. We aim to make your brand unmissable in a city known for its energy, style, and constant evolution. Our team stays updated on the latest trends in Miami, from major art events like Art Basel to new real estate developments, ensuring your SEO strategy is always relevant. Partner with TRAC to amplify your digital presence and achieve significant, sustainable growth in the Magic City.',
    heroImage: { src: GENERIC_CITY_HERO_IMAGE_SRC, alt: 'SEO Services in Miami, FL', dataAiHint: 'Miami beach business' },
    heroVideoUrl: 'https://www.youtube.com/embed/JBPmDzL-Xek',
    formTitle: 'Get Your FREE Miami SEO Strategy!',
  },
  resultsHeadline: 'Delivering Hot SEO Results in Miami\'s Competitive Market',
  readyToGrowHeadline: 'Ready to Heat Up Your Miami SEO & Attract More Business?',
  servicesSectionHeadline: 'Customized Miami SEO Solutions for a Global Audience',
  servicesSectionSubheadline: 'Our SEO services are designed to make your Miami business a leader in organic search, attracting diverse audiences from local residents to international tourists, investors, and businesses.',
  services: [
    { icon: Search, title: 'Miami Local & Multilingual SEO', description: 'Dominate local search in Miami and effectively target multilingual audiences (e.g., Spanish-speaking customers, Portuguese-speaking visitors). We optimize your Google Business Profile for Miami neighborhoods (like Coconut Grove, Coral Gables) and create content that speaks to diverse cultural groups, enhancing your local and international appeal.' },
    { icon: Settings, title: 'Technical SEO for Miami Websites & International Reach', description: 'Optimize your website\'s technical health for peak SEO performance in Miami and for international audiences. This includes site speed optimization (Core Web Vitals), mobile-first indexing for a global user base, robust security measures, and hreflang implementation for multilingual sites to ensure correct language versioning.' },
    { icon: Mail, title: 'Miami SEO Content Marketing & Lifestyle Branding', description: 'Create compelling, high-quality content that ranks in Miami search results and converts visitors, highlighting the unique lifestyle, luxury, business opportunities, and cultural events Miami offers. We focus on content that drives engagement, shares, and establishes your brand as a Miami authority.' },
    { icon: Briefcase, title: 'Luxury, Tourism, Real Estate & Tech SEO Miami', description: 'Specialized SEO for Miami\'s key sectors: luxury brands (fashion, yachts, high-end services), tourism (hotels, attractions, cruises), high-value real estate (targeting local and international buyers), and the growing tech industry. We understand how to target affluent consumers and specific B2B niches in Miami.'},
  ],
  whyChooseSectionHeadline: 'TRAC: Your Trusted Miami SEO Agency for Dynamic Growth',
  whyChooseIntro: 'Partner with TRAC for effective, data-driven SEO services that capture the essence of Miami. We understand the high-energy, international market of Miami and are dedicated to helping your business thrive online through superior search strategies and local market intelligence.',
  whyChooseParagraph1: 'Our Miami SEO team has deep knowledge of the local market influences, from its status as a gateway to Latin America and a global finance hub to its booming real estate, art, and luxury sectors. We leverage this understanding to build SEO strategies that are not only effective but culturally attuned to Miami\'s diverse population and economic drivers. We help you connect with the right audience segments.',
  whyChooseParagraph2: 'We employ ethical, cutting-edge SEO techniques to deliver sustainable growth for Miami businesses. Our approach is adaptive, responding to the fast-paced changes in both search algorithms and Miami\'s dynamic market conditions, ensuring your business stays ahead of the competition and achieves long-term visibility. We focus on a strong ROI and transparent communication.',
  whyChoosePoints: [
    { icon: 'TrendingUp', title: 'Miami Search Growth & Lead Generation', description: 'Improve your organic rankings, attract high-quality local and international leads, and boost conversions in the competitive Miami market. We focus on delivering a strong ROI for your SEO investment through targeted campaigns.' },
    { icon: 'Lightbulb', title: 'Strategic & Culturally Attuned Miami SEO', description: 'Benefit from targeted SEO campaigns specifically designed for the Miami, FL audience, considering its international appeal, diverse demographics, key events (like Miami Music Week), and unique industry verticals such as international trade, finance, and creative arts.' },
    { icon: 'ShieldCheck', title: 'Reliable & Results-Oriented Miami SEO Partner', description: 'Experience transparent, ethical, and results-oriented SEO services in Miami. We are focused on building long-term success and a powerful online reputation for your brand in the Magic City and beyond, adhering to all best practices and providing clear reporting.' },
  ],
  awards: {
    clutch: { headline: 'Top Miami SEO Agency - Clutch 2024', text: 'Recognized by Clutch for excellence in Miami SEO, particularly for businesses in tourism, real estate, international trade, and luxury markets. Our innovative strategies make an impact.' },
    upcity: { headline: 'Miami SEO Excellence - UpCity 2024', text: 'Awarded by UpCity for top-tier SEO services in Miami, helping businesses navigate the vibrant and competitive digital landscape with success and achieve significant online growth.' },
  },
  location: {
    officeImageUrl: GENERIC_OFFICE_LOCATION_IMAGE_SRC,
    streetAddress: '1212 Ave, Suite 120',
    addressLocality: 'Miami',
    addressRegion: 'FL',
    postalCode: '33101',
    addressCountry: 'US',
    phone: CONTACT_DETAILS.phone,
    email: CONTACT_DETAILS.email,
    hasMap: 'https://goo.gl/maps/mN4o5pQ6rS',
    geo: {
      latitude: '25.761700',
      longitude: '-80.191800',
    },
  },
  bottomFormTitle: 'Request Your SEO Consultation',
};
