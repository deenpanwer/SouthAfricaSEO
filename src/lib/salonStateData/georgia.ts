
import type { SalonStatePageData } from '@/types';
import { Search, Scissors, Sparkles, Users, TrendingUp, Lightbulb, ShieldCheck, Settings, Mail, CalendarDays } from 'lucide-react';
import { CONTACT_DETAILS } from '@/lib/constants';

const STATE_HERO_IMAGE_SRC = '/trac-seo.jpg';
const STATE_COVERAGE_IMAGE_SRC = 'https://placehold.co/600x400.png';

export const georgiaSalonData: SalonStatePageData = {
  slug: 'georgia',
  stateName: 'Georgia',
  heroData: {
    pageTitle: 'Georgia Salon SEO: Elevate Your Beauty Business Online',
    metaDescription: 'Transform your Georgia salon or spa\'s online presence. Our expert SEO strategies attract more clients, boost bookings, and significantly increase your revenue. Discover the difference.',
    heroTitle: 'Georgia Salon & Spa SEO: Cultivate Your Digital Presence',
    heroSubtitle: 'Connect with Discerning Clients Across Georgia and Maximize Your Revenue Potential',
    heroDescription: 'Our specialized SEO services are meticulously crafted for beauty salons, hair studios, nail bars, and spas throughout Georgia. From the vibrant energy of the Atlanta metro area to the charming historic cities like Savannah and Athens, we empower Georgia beauty businesses to dominate their local search results and attract a consistent flow of new clients. Georgians appreciate style and quality service; your digital storefront must not only reflect this but also project unparalleled expertise and trustworthiness. Our comprehensive SEO strategies prioritize technical optimization, ensuring your website is lightning-fast and user-friendly. We craft compelling narratives and showcase your salon\'s unique artistry through rich content and stunning visuals, building an undeniable online reputation that converts browsers into loyal customers. Partner with us to make your Georgia salon or spa the undisputed leader in beauty and wellness, driving substantial revenue growth and securing your market position.',
    heroImage: { src: STATE_HERO_IMAGE_SRC, alt: 'Elegant Georgia salon setting' },
    heroVideoUrl: 'https://www.youtube.com/embed/JBPmDzL-Xek',
    formTitle: 'Free Georgia Salon SEO Quote!',
  },
  resultsHeadline: 'SEO That Helps Georgia Salons & Spas Radiate Unrivaled Online Success',
  readyToGrowHeadline: 'Ready to Beautify Your Georgia Salon\'s SEO & Client List for Unprecedented Growth?',
  servicesSectionHeadline: 'Custom SEO for Georgia\'s Elite Salons, Spas & Beauty Professionals',
  servicesSectionSubheadline: 'Our deep expertise in Georgia salon SEO ensures you attract discerning clients seeking premium haircuts, advanced color treatments, luxurious nail services, rejuvenating facials, therapeutic massages, and specialized beauty treatments across the Peach State. We don\'t just get you found; we get you chosen.',
  services: [
    { icon: Search, title: 'Local SEO for GA Salons & Spas', description: 'Dominate local search results and connect with clients in your Georgia service areas (e.g., \'Atlanta beauty salon,\' \'spa in Athens GA\'). We optimize your Google Business Profile, local directories, and integrate seamlessly with online booking systems for maximum visibility.' },
    { icon: Scissors, title: 'Hair & Nail Service SEO', description: 'Achieve unparalleled visibility for your salon\'s specific offerings, including haircuts, coloring, extensions, manicures, pedicures, and nail art in Georgia. We highlight your unique artistry to attract high-value clients.' },
    { icon: CalendarDays, title: 'Spa & Wellness Treatment SEO', description: 'Target clients searching for facials, massages, body wraps, and other wellness treatments available at your Georgia spa, highlighting unique services and packages. We ensure your specialized offerings are easily discoverable.' },
    { icon: Sparkles, title: 'Bridal & Event Styling SEO', description: 'Attract clients looking for bridal hair and makeup, prom styling, and special event beauty services offered by your Georgia salon professionals. We showcase your expertise in creating unforgettable looks for special occasions.' },
  ],
  whyChooseSectionHeadline: 'Why Partner with Us for Unmatched Georgia Salon & Spa Growth',
  whyChooseIntro: 'We provide unparalleled SEO solutions meticulously tailored for the Georgia beauty and wellness industry. Our mission is to empower your salon or spa to not only navigate but dominate the Peach State\'s fiercely competitive digital landscape, achieving sustainable growth and an undeniably glamorous online presence that translates directly into increased revenue.',
  whyChooseParagraph1: 'Our dedicated specialists possess profound expertise in the Georgia salon sector, understanding the local beauty trends, sophisticated client expectations, and unique market dynamics. We don\'t just craft strategies; we engineer bespoke solutions that amplify your salon\'s distinctive style, showcase your unparalleled expertise, and reinforce your unwavering commitment to client satisfaction. We work tirelessly to ensure your brand resonates with your ideal clientele.',
  whyChooseParagraph2: 'We are passionately committed to ethical, results-driven SEO that meticulously builds your salon\'s brand reputation and significantly boosts client bookings across Georgia. Our transparent, data-backed approach ensures you witness the tangible, direct impact of our beauty industry SEO services on your bottom line. We are relentless in our pursuit of your success, working crazy hard to bring you more business and maximize your profitability.',
  whyChoosePoints: [
    { icon: 'TrendingUp', title: 'GA Salon SEO Growth', description: 'Experience exponential growth in appointment bookings and new client acquisition across Georgia. Our SEO strategies are laser-focused on attracting clients actively seeking your premium beauty and spa services, ensuring a continuous influx of high-value customers.' },
    { icon: 'Lightbulb', title: 'Georgia Beauty Market Mastery', description: 'Benefit from cutting-edge SEO strategies specifically designed for the dynamic GA salon industry. We meticulously analyze regional trends, cater to diverse client needs, and expertly navigate the competitive landscape from the bustling streets of Atlanta to the charming coastal cities, giving you an undeniable edge.' },
    { icon: 'ShieldCheck', title: 'Trusted Growth Partner', description: 'Achieve enduring online success with our ethical, forward-thinking SEO practices, meticulously adapted for Georgia salons and spas. We build your brand\'s authority and cultivate unwavering client loyalty in a style-conscious state, ensuring long-term profitability and market leadership.' },
  ],
  awards: {
    clutch: { headline: 'Top GA Salon SEO - Industry Excellence Award 2024', text: 'Recognized for consistently driving exceptional SEO results and significant revenue growth for Georgia salons and spas, setting new benchmarks for digital success.' },
    upcity: { headline: 'Georgia Salon SEO Leadership - Client Impact Award 2024', text: 'Awarded for unparalleled SEO services and transformative client success in the Georgia beauty and wellness industry, demonstrating profound impact on business expansion.' },
  },
  coverageData: {
    mainHeadline: "Serving Salons & Spas Across the Peach State - Georgia",
    points: ["Atlanta Metro Area", "Augusta-Richmond County", "Columbus Area", "Savannah & Coastal Georgia", "Macon-Bibb County", "Athens-Clarke County", "Gainesville", "And more..."],
    mapImageUrl: STATE_COVERAGE_IMAGE_SRC,
    mapImageAlt: "Map of Georgia showing service areas for salon and spa SEO"
  },
  bottomFormTitle: 'Get Your Salon & Spa SEO Plan',
};
