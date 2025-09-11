
import type { AutoRepairStatePageData } from '@/types';
import { Search, Wrench, Users, Settings, TrendingUp, Lightbulb, ShieldCheck, Mail, Car } from 'lucide-react';
import { CONTACT_DETAILS } from '@/lib/constants';

const STATE_HERO_IMAGE_SRC = '/trac-seo.jpg';
const STATE_COVERAGE_IMAGE_SRC = 'https://placehold.co/600x400.png';

export const pennsylvaniaAutoRepairData: AutoRepairStatePageData = {
  slug: 'pennsylvania',
  stateName: 'Pennsylvania',
  heroData: {
    pageTitle: 'Pennsylvania Auto Repair SEO: Drive More Business, Boost Revenue',
    metaDescription: 'Accelerate your Pennsylvania auto repair shop\'s online presence. Our expert SEO strategies attract more customers, boost service appointments, and significantly increase your revenue. Discover the difference.',
    heroTitle: 'Pennsylvania Auto Repair SEO: Keep Your Service Bays Thriving',
    heroSubtitle: 'Connect with Car Owners Across Pennsylvania and Maximize Your Shop\'s Potential',
    heroDescription: 'Our specialized SEO services are meticulously crafted for auto repair shops throughout Pennsylvania. From Philadelphia and Pittsburgh to smaller towns across the Keystone State, we empower independent garages, multi-location repair centers, and specialty mechanics to dominate their local search results and attract a consistent flow of new customers needing reliable vehicle maintenance and repair. Pennsylvania drivers rely on trusted local shops for everything from routine maintenance to complex repairs; your digital storefront must not only reflect this but also project unparalleled expertise and trustworthiness. Our comprehensive SEO strategies prioritize local optimization to ensure your shop ranks prominently when vehicle owners in your Pennsylvania service area search for \'mechanic near me,\' \'brake repair Philadelphia,\' or \'oil change Harrisburg.\' We optimize your website for technical excellence, create informative content about car care and common automotive issues, and highlight your shop\'s unparalleled expertise, certifications, and unwavering commitment to customer satisfaction. Partner with us to drive substantial revenue growth to your Pennsylvania auto repair shop and establish a strong, trusted, and dominant online presence.',
    heroImage: { src: STATE_HERO_IMAGE_SRC, alt: 'Pennsylvania auto repair shop' },
    heroVideoUrl: 'https://www.youtube.com/embed/JBPmDzL-Xek',
    formTitle: 'Free Pennsylvania Auto Repair SEO Quote!',
  },
  resultsHeadline: 'SEO That Keeps Pennsylvania Auto Repair Shops Booked Solid for Unprecedented Growth',
  readyToGrowHeadline: 'Ready to Tune Up Your Pennsylvania Auto Shop\'s SEO for Unprecedented Growth?',
  servicesSectionHeadline: 'Tailored SEO Solutions for Pennsylvania\'s Elite Auto Repair & Mechanic Shops',
  servicesSectionSubheadline: 'Our deep expertise in Pennsylvania auto repair SEO ensures you attract discerning car owners needing services from routine oil changes and tire rotations to engine diagnostics and major repairs across the Keystone State. We don\'t just get you found; we get you chosen.',
  services: [
    { icon: Search, title: 'Local SEO for PA Auto Shops', description: 'Dominate local search results and connect with drivers in your Pennsylvania service areas (e.g., \'Pittsburgh auto repair,\' \'mechanic near Allentown\'). We optimize your Google Business Profile and local listings for maximum visibility and lead generation.' },
    { icon: Wrench, title: 'Service-Specific SEO (Brakes, Transmissions)', description: 'Achieve unparalleled visibility for specific repair services like brake jobs, transmission repair, engine diagnostics, and AC service offered by your PA shop. We highlight your specialized expertise to attract high-value customers.' },
    { icon: Car, title: 'Make & Model Specialization SEO', description: 'Target customers seeking repairs for specific vehicle makes or models (e.g., \'Honda repair Philadelphia,\' \'Ford truck mechanic Lancaster\') if your shop specializes. We showcase your niche expertise to attract dedicated clientele.' },
    { icon: Mail, title: 'Content on PA Car Care & Maintenance', description: 'Develop informative, in-depth content about car maintenance tips for Pennsylvania weather, common vehicle issues, and the undeniable importance of regular service. This establishes your shop as a trusted local expert and resource.' },
  ],
  whyChooseSectionHeadline: 'Why Partner with Us for Unmatched Pennsylvania Auto Repair Growth',
  whyChooseIntro: 'We provide unparalleled SEO solutions meticulously tailored for the Pennsylvania auto repair market. Our mission is to empower your shop to not only navigate but dominate the Keystone State\'s fiercely competitive digital landscape, achieving sustainable customer growth and an undeniably powerful online presence that translates directly into increased revenue.',
  whyChooseParagraph1: 'Our dedicated specialists possess profound expertise in the Pennsylvania auto repair sector, understanding the needs of local mechanics and service centers. We don\'t just craft strategies; we engineer bespoke solutions that amplify your shop\'s expertise, showcase your unparalleled reliability, and reinforce your unwavering commitment to fair pricing. We work tirelessly to ensure your brand resonates with your ideal clientele.',
  whyChooseParagraph2: 'We are passionately committed to ethical, results-driven SEO that meticulously builds your auto repair shop\'s online authority and significantly boosts customer appointments across Pennsylvania. Our transparent, data-backed approach ensures you witness the tangible, direct impact of our automotive SEO services on your bottom line. We are relentless in our pursuit of your success, working crazy hard to bring you more business and maximize your profitability.',
  whyChoosePoints: [
    { icon: 'TrendingUp', title: 'PA Auto Repair SEO Growth', description: 'Experience exponential growth in service bookings and customer inquiries across Pennsylvania. Our SEO strategies are laser-focused on attracting car owners actively searching for reliable auto repair and maintenance, ensuring a continuous influx of high-value customers.' },
    { icon: 'Lightbulb', title: 'Pennsylvania Auto Repair Market Mastery', description: 'Benefit from cutting-edge SEO strategies specifically designed for the dynamic PA auto service industry. We meticulously analyze regional driving conditions, common vehicle types, and expertly navigate local customer expectations for service and value, giving you an undeniable edge.' },
    { icon: 'ShieldCheck', title: 'Trusted Growth Partner', description: 'Achieve enduring online success with our ethical, forward-thinking SEO practices, meticulously adapted for Pennsylvania auto repair shops. We build your brand\'s authority and cultivate a steady stream of satisfied customers, ensuring long-term profitability and market leadership.' },
  ],
  awards: {
    clutch: { headline: 'Top PA Auto Repair SEO - Industry Excellence Award 2024', text: 'Recognized for consistently driving exceptional SEO results and significant revenue growth for Pennsylvania auto repair businesses, setting new benchmarks for digital success.' },
    upcity: { headline: 'Pennsylvania Auto Repair SEO Leadership - Client Impact Award 2024', text: 'Awarded for unparalleled SEO services and transformative client success in the Pennsylvania automotive aftermarket and repair industry, demonstrating profound impact on business expansion.' },
  },
  coverageData: {
    mainHeadline: "Serving Auto Repair Shops Across the Keystone State - Pennsylvania",
    points: ["Philadelphia Metro Area", "Pittsburgh Region", "Lehigh Valley (Allentown, Bethlehem, Easton)", "Harrisburg & Central PA", "Scranton/Wilkes-Barre Area", "Erie", "Lancaster", "And more..."],
    mapImageUrl: STATE_COVERAGE_IMAGE_SRC,
    mapImageAlt: "Map of Pennsylvania showing service areas for auto repair SEO"
  },
  bottomFormTitle: 'Get Your Auto Repair SEO Plan',
};
