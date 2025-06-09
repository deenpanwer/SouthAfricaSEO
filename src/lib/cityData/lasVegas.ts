
import type { CityPageData } from '@/types';
import { Search, Settings, Mail, Briefcase, BarChart2, TrendingUp, Lightbulb, ShieldCheck } from 'lucide-react';
import { CONTACT_DETAILS } from '@/lib/constants.tsx';

const GENERIC_CITY_HERO_IMAGE_SRC = 'https://cdn-icggj.nitrocdn.com/AphBmykuaGyxZijWArNhxcCiPzVdYZGT/assets/images/optimized/rev-d6d7292/thriveagency.com/files/SEO-Company-1.jpg';
const GENERIC_OFFICE_LOCATION_IMAGE_SRC = 'https://cdn-icggj.nitrocdn.com/AphBmykuaGyxZijWArNhxcCiPzVdYZGT/assets/images/optimized/rev-d6d7292/thriveagency.com/files/Las-Vegas-Thrive-office-location.jpg';

export const lasVegasData: CityPageData = {
  slug: 'las-vegas',
  cityName: 'Las Vegas',
  heroData: {
    pageTitle: 'Las Vegas SEO Agency | TRAC - SEO Services Las Vegas, NV',
    metaDescription: 'TRAC is a Las Vegas SEO agency helping businesses improve online visibility and drive organic growth. Contact our Las Vegas SEO experts for a free consultation.',
    heroTitle: 'Las Vegas SEO Experts: Shine Brighter on The Strip',
    heroSubtitle: 'Win Big in Las Vegas with TRAC\'s High-Impact SEO Strategies',
    heroDescription: 'TRAC offers comprehensive SEO services tailored for the unique and dazzling Las Vegas market. In a city that thrives on visibility and attracting a global audience, a cutting-edge SEO strategy is paramount. We specialize in boosting your online presence, whether you cater to tourists seeking entertainment or local Las Vegans looking for services. Our services include targeted local SEO for the Strip and surrounding neighborhoods, advanced technical optimization for high-performance websites that can handle spikes in traffic, and engaging content marketing that captures the excitement of Las Vegas and ranks for "things to do in Las Vegas" type queries. We understand the specific needs of the hospitality, entertainment, and service industries that dominate Las Vegas. TRAC is committed to delivering measurable results, transparent reporting, and helping your Las Vegas business stand out in a sea of competition. Let us help you hit the SEO jackpot and achieve sustainable growth in this electrifying city.',
    heroImage: { src: GENERIC_CITY_HERO_IMAGE_SRC, alt: 'SEO Services in Las Vegas, NV', dataAiHint: 'Las Vegas strip' },
    heroVideoUrl: 'https://www.youtube.com/embed/JBPmDzL-Xek',
    formTitle: 'Get Your FREE Las Vegas SEO Strategy!',
  },
  resultsHeadline: 'Delivering High-Roller SEO Results in Las Vegas',
  readyToGrowHeadline: 'Ready to Hit the SEO Jackpot in Las Vegas?',
  servicesSectionHeadline: 'Customized Las Vegas SEO Solutions for Maximum Impact',
  servicesSectionSubheadline: 'Our SEO services are strategically designed to make your Las Vegas business a dominant leader in organic search, attracting both the crucial tourist demographic and local clientele with precision.',
  services: [
    { icon: Search, title: 'Las Vegas Local & Tourism SEO', description: 'Dominate local search results in Las Vegas and effectively target the massive tourist influx. We optimize for "near me" searches, hotel and show queries (e.g., "Las Vegas shows tonight"), and local attractions to drive bookings and foot traffic to your Las Vegas business.' },
    { icon: Settings, title: 'Technical SEO for High-Traffic Las Vegas Websites', description: 'Optimize your website\'s technical infrastructure for peak SEO performance and user experience in the high-demand Las Vegas market. This includes site speed optimization for mobile users, mobile-first indexing, and schema markup for events, hotels, and hospitality services.' },
    { icon: Mail, title: 'Las Vegas SEO Content Marketing & Engagement', description: 'Create compelling, shareable content that ranks high in Las Vegas search results (e.g., guides to Vegas nightlife, tips for first-time visitors), captivates visitors, and converts them into customers. We focus on content that showcases the unique appeal of your Las Vegas offerings.' },
    { icon: Briefcase, title: 'Hospitality, Gaming & Entertainment SEO for Las Vegas', description: 'Leverage our specialized SEO expertise for Las Vegas\'s core industries: hotels, casinos, restaurants, shows, and attractions. We understand the nuances of marketing these experiences to a global audience looking for Las Vegas excitement and develop targeted SEO strategies for each.'},
  ],
  whyChooseSectionHeadline: 'TRAC: Your Trusted Las Vegas SEO Agency for Unforgettable Results',
  whyChooseIntro: 'Partner with TRAC for effective, data-driven SEO services that make your Las Vegas business shine brighter than the Strip. We understand the high stakes of the Las Vegas market and how to achieve top visibility and conversions.',
  whyChooseParagraph1: 'Our Las Vegas SEO team possesses deep knowledge of the local market, particularly the tourism, hospitality, and entertainment sectors that define the city. We tailor strategies to capture both local Las Vegas residents and the millions of visitors seeking world-class experiences, ensuring your marketing efforts are precisely targeted.',
  whyChooseParagraph2: 'We employ ethical, cutting-edge SEO techniques designed to deliver sustainable growth and a commanding online presence for Las Vegas businesses. Our commitment is to transparency, measurable ROI, and helping you outperform the competition on the global stage that is Las Vegas. We use advanced analytics to refine campaigns continuously.',
  whyChoosePoints: [
    { icon: 'TrendingUp', title: 'Las Vegas Search Growth & Booking Increases', description: 'Significantly improve your organic search rankings, attract more qualified leads and bookings, and enhance your market share in the vibrant Las Vegas tourism and local economy with our expert SEO. We turn searches into revenue.' },
    { icon: 'Lightbulb', title: 'Strategic & Dynamic Las Vegas SEO', description: 'Benefit from targeted SEO campaigns specifically crafted for the Las Vegas, NV audience, adapting to seasonal trends, major conventions, new show openings, and the evolving digital landscape of this entertainment capital.' },
    { icon: 'ShieldCheck', title: 'Reliable & Results-Driven Las Vegas SEO Partner', description: 'Experience transparent, ethical, and results-oriented SEO services in Las Vegas. We are focused on building long-term success and a stellar online reputation for your brand in the heart of Nevada. Our commitment is unwavering.' },
  ],
  awards: {
    clutch: { headline: 'Top Las Vegas SEO Agency - Clutch 2024', text: 'Recognized by Clutch for delivering exceptional results and strategic excellence in Las Vegas SEO, especially for hospitality and entertainment clients. We are leaders in Vegas SEO.' },
    upcity: { headline: 'Las Vegas SEO Excellence Award - UpCity 2024', text: 'Awarded by UpCity for providing top-tier SEO services and consistently helping Las Vegas businesses achieve premier online visibility and booking increases. Our strategies win.' },
  },
  location: {
    officeImageUrl: GENERIC_OFFICE_LOCATION_IMAGE_SRC,
    addressLines: ['400 S 4th St', 'Suite 500', 'Las Vegas, NV 89101'],
    phone: CONTACT_DETAILS.phone,
    email: CONTACT_DETAILS.email,
  },
  bottomFormTitle: 'Request Your Las Vegas SEO Consultation',
};

    