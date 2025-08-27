
import type { CityPageData } from '@/types';
import { Search, Settings, Briefcase, Mail, BarChart2, TrendingUp, Lightbulb, ShieldCheck } from 'lucide-react';
import { CONTACT_DETAILS } from '@/lib/constants.tsx';

const GENERIC_CITY_HERO_IMAGE_SRC = 'https://cdn-icggj.nitrocdn.com/AphBmykuaGyxZijWArNhxcCiPzVdYZGT/assets/images/optimized/rev-d6d7292/thriveagency.com/files/San-Antonio-SEO-Company.jpg';
const GENERIC_OFFICE_LOCATION_IMAGE_SRC = 'https://cdn-icggj.nitrocdn.com/AphBmykuaGyxZijWArNhxcCiPzVdYZGT/assets/images/optimized/rev-d6d7292/thriveagency.com/files/San-Antonio-Thrive-office-location.jpg';

export const sanAntonioData: CityPageData = {
  slug: 'san-antonio',
  cityName: 'San Antonio',
  heroData: {
    pageTitle: 'San Antonio SEO Services | TRAC - SEO Experts San Antonio, TX',
    metaDescription: 'TRAC is a San Antonio SEO agency helping businesses improve online visibility and drive organic growth. Contact our San Antonio SEO specialists for a free consultation.',
    heroTitle: 'San Antonio SEO Experts: Amplify Your Alamo City Presence',
    heroSubtitle: 'Remember the Alamo, And Your SEO! - TRAC Leads the Way in San Antonio',
    heroDescription: 'TRAC offers comprehensive SEO services for businesses in San Antonio, Texas, a city celebrated for its rich history, vibrant multicultural heritage, and rapidly growing economy. Our tailored strategies focus on significantly improving your search engine rankings, attracting qualified local traffic from Bexar County and beyond, and increasing your ROI in the historic and dynamic San Antonio market. We understand the importance of targeting both residents and the millions of tourists visiting iconic landmarks like the River Walk, the Alamo, and numerous historic missions. Our services include in-depth local SEO optimization for key San Antonio districts (e.g., Downtown, Pearl District, Southtown), ensuring your business is easily found by those actively searching. We implement robust technical SEO to ensure your website is fast, secure, user-friendly, and perfectly structured for search engine crawlers. Our content marketing strategies are designed to tell your unique story, engage the local community, and highlight your value proposition to both San Antonians and visitors. Partner with TRAC to make your San Antonio business a memorable online destination and achieve sustainable growth.',
    heroImage: { src: GENERIC_CITY_HERO_IMAGE_SRC, alt: 'SEO Services in San Antonio, TX', dataAiHint: 'San Antonio riverwalk' },
    heroVideoUrl: 'https://www.youtube.com/embed/JBPmDzL-Xek',
    formTitle: 'Get Your FREE San Antonio SEO Strategy!',
  },
  resultsHeadline: 'Delivering Historic SEO Results in San Antonio\'s Growing Market',
  readyToGrowHeadline: 'Ready to Boost Your San Antonio SEO & Attract More Customers?',
  servicesSectionHeadline: 'Customized San Antonio SEO Solutions for a Historic City',
  servicesSectionSubheadline: 'Our SEO services are meticulously designed to make your San Antonio business a leader in organic search, connecting you with both loyal locals and the city\'s many visitors, tapping into key industries like tourism, military, and healthcare.',
  services: [
    { icon: Search, title: 'San Antonio Local SEO & River Walk Visibility', description: 'Dominate local search in San Antonio and connect with more customers, whether they\'re downtown near the River Walk, exploring the Pearl District, or in surrounding Bexar County communities. We optimize your Google Business Profile to capture high-intent local and tourist searches for services and attractions.' },
    { icon: Settings, title: 'Technical SEO for San Antonio Websites & Attractions', description: 'Optimize your website\'s technical health for peak SEO performance in San Antonio. This includes ensuring fast load times, mobile-friendliness for visitors exploring the city on their devices, and implementing schema markup for attractions, events, hotels, and local businesses to enhance search visibility.' },
    { icon: Mail, title: 'San Antonio SEO Content Marketing & Heritage Promotion', description: 'Create compelling, informative content that ranks high in San Antonio search results and effectively converts visitors. We focus on highlighting local history, cultural events (like Fiesta San Antonio), unique business offerings, and stories that resonate with the heart of San Antonio, attracting both residents and tourists.' },
    { icon: Briefcase, title: 'Tourism, Heritage, Military & Healthcare SEO San Antonio', description: 'Specialized SEO for San Antonio\'s vital tourism sector, numerous historical sites, rich cultural attractions, and businesses serving the large military community and growing healthcare industry. We understand how to target these diverse and important audiences through carefully crafted, effective SEO strategies.'},
  ],
  whyChooseSectionHeadline: 'TRAC: Your Trusted San Antonio SEO Agency for Lasting Impact',
  whyChooseIntro: 'Partner with TRAC for effective, data-driven SEO services in San Antonio. We understand the local market\'s unique blend of history, culture, and economic growth and are dedicated to helping your business succeed online through superior search engine optimization techniques.',
  whyChooseParagraph1: 'Our San Antonio SEO team has deep knowledge of the local market, its rich heritage, significant military presence, and the diverse industries that thrive here, from tourism and hospitality to biosciences and aerospace. We leverage this understanding to build SEO campaigns that are not only effective but also authentically connect with the San Antonio community and its visitors.',
  whyChooseParagraph2: 'We employ ethical, cutting-edge SEO techniques to deliver sustainable growth for San Antonio businesses. Our commitment is to transparency, measurable results, and forging strong partnerships based on trust and shared success in the Alamo City. We adapt our strategies to keep you competitive in an evolving digital landscape and provide clear performance reporting.',
  whyChoosePoints: [
    { icon: 'TrendingUp', title: 'San Antonio Search Growth & Enhanced Local Presence', description: 'Improve your organic rankings, attract more qualified local and visitor leads, and increase your market share in the dynamic San Antonio business environment with our expert SEO services. We aim for top visibility and sustained customer acquisition.' },
    { icon: 'Lightbulb', title: 'Strategic & Culturally-Relevant San Antonio SEO', description: 'Benefit from targeted SEO campaigns specifically designed for the San Antonio, TX audience, considering its unique cultural heritage (Fiesta, historical missions), major events, strong military influence, and local economic drivers. We make your SEO truly San Antonian.' },
    { icon: 'ShieldCheck', title: 'Reliable & Results-Oriented San Antonio SEO Partner', description: 'Experience transparent, ethical, and results-oriented SEO services in San Antonio. We are focused on building long-term success and a strong online reputation for your brand in this historic Texas city, adhering to all SEO best practices and keeping you informed.' },
  ],
  awards: {
    clutch: { headline: 'Top San Antonio SEO Agency - Clutch 2024', text: 'Recognized by Clutch for excellence in San Antonio SEO, helping businesses connect with their audience in a city rich with history, culture, and opportunity. Our clients trust our local expertise and strategic approach.' },
    upcity: { headline: 'San Antonio SEO Excellence - UpCity 2024', text: 'Awarded by UpCity for top-tier SEO services in San Antonio, consistently delivering outstanding results and strategic growth for businesses in the Alamo City and surrounding South Texas region.' },
  },
  location: {
    officeImageUrl: GENERIC_OFFICE_LOCATION_IMAGE_SRC,
    streetAddress: '9901 I.H. 10 West, Suite 800',
    addressLocality: 'San Antonio',
    addressRegion: 'TX',
    postalCode: '78230',
    addressCountry: 'US',
    phone: CONTACT_DETAILS.phone,
    email: CONTACT_DETAILS.email,
    hasMap: 'https://goo.gl/maps/qRsTuVwXyZ',
    geo: {
      latitude: '29.424100',
      longitude: '-98.493600',
    },
  },
  bottomFormTitle: 'Request Your SEO Consultation',
};
