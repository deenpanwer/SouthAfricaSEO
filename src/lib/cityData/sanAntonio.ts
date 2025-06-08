
import type { CityPageData } from '@/types';
import { Search, Settings, Briefcase, Mail, BarChart2, TrendingUp, Lightbulb, ShieldCheck } from 'lucide-react';
import { CONTACT_DETAILS } from '@/lib/constants.tsx';

const GENERIC_CITY_HERO_IMAGE_SRC = 'https://placehold.co/800x500.png';
const GENERIC_OFFICE_LOCATION_IMAGE_SRC = 'https://placehold.co/600x400.png';

export const sanAntonioData: CityPageData = {
  slug: 'san-antonio',
  cityName: 'San Antonio',
  heroData: {
    pageTitle: 'San Antonio SEO Services | TRAC - SEO Experts San Antonio, TX',
    metaDescription: 'TRAC is a San Antonio SEO agency helping businesses improve online visibility and drive organic growth. Contact our San Antonio SEO specialists for a free consultation.',
    heroTitle: 'San Antonio SEO Experts: Amplify Your Alamo City Presence',
    heroSubtitle: 'Remember the Alamo, And Your SEO! - TRAC Leads the Way',
    heroDescription: 'TRAC offers comprehensive SEO services for businesses in San Antonio, Texas, a city celebrated for its rich history, vibrant culture, and growing economy. Our tailored strategies focus on improving your search engine rankings, attracting qualified local traffic from Bexar County and beyond, and increasing your ROI in the historic San Antonio market. We understand the importance of targeting both residents and the millions of tourists visiting landmarks like the River Walk and the Alamo. Our services include local SEO optimization for key San Antonio districts, technical SEO to ensure your website is robust and user-friendly, and content marketing that tells your story and engages the local community. Partner with TRAC to make your San Antonio business a memorable online destination.',
    heroImage: { src: GENERIC_CITY_HERO_IMAGE_SRC, alt: 'SEO Services in San Antonio, TX', dataAiHint: 'San Antonio riverwalk' },
    heroVideoUrl: 'https://www.youtube.com/embed/JBPmDzL-Xek',
    formTitle: 'Get Your FREE San Antonio SEO Strategy!',
  },
  resultsHeadline: 'Delivering Historic SEO Results in San Antonio\'s Growing Market',
  readyToGrowHeadline: 'Ready to Boost Your San Antonio SEO & Attract More Customers?',
  servicesSectionHeadline: 'Customized San Antonio SEO Solutions for a Historic City',
  servicesSectionSubheadline: 'Our SEO services are designed to make your San Antonio business a leader in organic search, connecting you with both locals and the city\'s many visitors.',
  services: [
    { icon: Search, title: 'San Antonio Local SEO & River Walk Visibility', description: 'Dominate local search in San Antonio and connect with more customers, whether they\'re downtown, near the Pearl, or exploring historic missions. We optimize your Google Business Profile to capture high-intent local and tourist searches.' },
    { icon: Settings, title: 'Technical SEO for San Antonio Websites & Attractions', description: 'Optimize your website\'s technical health for peak SEO performance in San Antonio. This includes ensuring fast load times, mobile-friendliness for visitors exploring the city, and schema markup for attractions, events, and local businesses.' },
    { icon: Mail, title: 'San Antonio SEO Content Marketing & Heritage Promotion', description: 'Create compelling content that ranks in San Antonio search results and converts visitors, highlighting local history, cultural events (like Fiesta San Antonio), and unique business offerings. We craft content that speaks to the heart of San Antonio.' },
    { icon: Briefcase, title: 'Tourism, Heritage & Military Community SEO San Antonio', description: 'Specialized SEO for San Antonio\'s tourism sector, historical sites, cultural attractions, and businesses serving the large military community. We understand how to target these diverse and important audiences through tailored SEO strategies.'},
  ],
  whyChooseSectionHeadline: 'TRAC: Your Trusted San Antonio SEO Agency for Lasting Impact',
  whyChooseIntro: 'Partner with TRAC for effective, data-driven SEO services in San Antonio. We understand the local market\'s unique blend of history and growth and are dedicated to helping your business succeed online.',
  whyChooseParagraph1: 'Our San Antonio SEO team has deep knowledge of the local market, its rich heritage, and the diverse industries that thrive here, from tourism to biosciences. We leverage this understanding to build SEO campaigns that are not only effective but also authentically connect with the San Antonio community.',
  whyChooseParagraph2: 'We employ ethical, cutting-edge SEO techniques to deliver sustainable growth for San Antonio businesses. Our commitment is to transparency, measurable results, and forging strong partnerships based on trust and shared success in the Alamo City. We adapt our strategies to keep you competitive.',
  whyChoosePoints: [
    { icon: 'TrendingUp', title: 'San Antonio Search Growth & Enhanced Local Presence', description: 'Improve your organic rankings, attract more qualified local and visitor leads, and increase your market share in the dynamic San Antonio business environment with our expert SEO services. We aim for top visibility.' },
    { icon: 'Lightbulb', title: 'Strategic & Culturally-Relevant San Antonio SEO', description: 'Benefit from targeted SEO campaigns specifically designed for the San Antonio, TX audience, considering its unique cultural heritage, major events, and local economic drivers. We make your SEO truly San Antonian.' },
    { icon: 'ShieldCheck', title: 'Reliable & Results-Oriented San Antonio SEO Partner', description: 'Experience transparent, ethical, and results-oriented SEO services in San Antonio. We are focused on building long-term success and a strong online reputation for your brand in this historic Texas city. Our reporting is always clear.' },
  ],
  awards: {
    clutch: { headline: 'Top San Antonio SEO Agency - Clutch 2024', text: 'Recognized by Clutch for excellence in San Antonio SEO, helping businesses connect with their audience in a city rich with history and opportunity. Our clients trust our local expertise.' },
    upcity: { headline: 'San Antonio SEO Excellence - UpCity 2024', text: 'Awarded by UpCity for top-tier SEO services in San Antonio, consistently delivering outstanding results and strategic growth for businesses in the Alamo City.' },
  },
  location: {
    officeImageUrl: GENERIC_OFFICE_LOCATION_IMAGE_SRC,
    addressLines: ['1818 SEO Riverwalk', 'Suite 180', 'San Antonio, TX 78201'],
    phone: CONTACT_DETAILS.phone,
    email: CONTACT_DETAILS.email,
  },
  bottomFormTitle: 'Request Your San Antonio SEO Consultation',
};

    