
import type { SalonStatePageData } from '@/types';
import { Search, Scissors, Sparkles, Users, TrendingUp, Lightbulb, ShieldCheck, Settings, Mail, CalendarDays } from 'lucide-react';
import { CONTACT_DETAILS } from '@/lib/constants';

const STATE_HERO_IMAGE_SRC = '/trac-seo.jpg';
const STATE_COVERAGE_IMAGE_SRC = 'https://placehold.co/600x400.png';

export const newYorkSalonData: SalonStatePageData = {
  slug: 'new-york',
  stateName: 'New York',
  heroData: {
    pageTitle: 'Elevate Your Salon\'s Online Presence | Grow Your Beauty Business',
    metaDescription: 'Unlock unprecedented growth for your New York salon or spa. Our expert SEO strategies attract more clients, boost bookings, and significantly increase your revenue. Discover the difference.',
    heroTitle: 'New York Salon & Spa SEO: Transform Your Digital Footprint',
    heroSubtitle: 'Connect with Discerning Clients Across New York and Maximize Your Revenue Potential',
    heroDescription: 'Our specialized SEO services are meticulously crafted for beauty salons, hair salons, nail salons, and spas throughout New York State. From the vibrant energy of NYC to the serene charm of upstate towns, we empower beauty businesses to dominate their local search results and attract a consistent flow of new clients. New Yorkers demand excellence and style; your online presence must not only reflect this but also project unparalleled expertise and trustworthiness. Our comprehensive SEO strategies prioritize technical optimization, ensuring your website is lightning-fast and user-friendly. We craft compelling narratives and showcase your salon\'s unique artistry through rich content and stunning visuals, building an undeniable online reputation that converts browsers into loyal customers. Partner with us to make your New York salon or spa the undisputed leader in beauty and wellness, driving substantial revenue growth and securing your market position.',
    heroImage: { src: STATE_HERO_IMAGE_SRC, alt: 'Stylish New York salon interior' },
    heroVideoUrl: 'https://www.youtube.com/embed/JBPmDzL-Xek',
    formTitle: 'Free New York Salon SEO Quote!',
  },
  resultsHeadline: 'SEO That Elevates New York Salons & Spas to Unrivaled Online Prominence',
  readyToGrowHeadline: 'Ready to Elevate Your New York Salon with Strategic SEO and Unprecedented Growth?',
  servicesSectionHeadline: 'Tailored SEO Solutions for New York\'s Elite Salons, Spas & Beauty Professionals',
  servicesSectionSubheadline: 'Our deep expertise in New York salon SEO ensures you attract discerning clients seeking premium haircuts, advanced color treatments, luxurious nail services, rejuvenating facials, therapeutic massages, and specialized beauty treatments across the Empire State. We don\'t just get you found; we get you chosen.',
  services: [
    { icon: Search, title: 'Local SEO for NY Salons & Spas', description: 'Dominate local search results and connect with clients in your New York service areas (e.g., \'Manhattan hair salon,\' \'spa services Brooklyn\'). We optimize your Google Business Profile, local listings, and integrate seamlessly with online booking platforms for maximum visibility.' },
    { icon: Scissors, title: 'Service-Specific SEO (Hair, Nails, Skin)', description: 'Achieve unparalleled visibility for your salon\'s signature services, including balayage, gel manicures, advanced facials, bespoke bridal makeup, and sophisticated men\'s grooming in NY. We highlight your unique offerings to attract high-value clients.' },
    { icon: CalendarDays, title: 'Online Booking & Appointment SEO', description: 'Streamline your client acquisition process. We optimize your website and booking platforms to ensure New Yorkers can effortlessly schedule appointments online, significantly increasing client flow and minimizing no-shows. Your convenience is our priority.' },
    { icon: Sparkles, title: 'Visual SEO & Portfolio Showcase', description: 'Captivate your audience with stunning visuals. We leverage advanced image and video SEO to showcase your salon\'s exquisite work, inviting ambiance, and talented stylists/therapists. This visual storytelling attracts clients through platforms like Instagram and Pinterest, driving them directly to your NY salon website and boosting conversions.' },
  ],
  whyChooseSectionHeadline: 'Why Partner with Us for Unmatched New York Salon & Spa Growth',
  whyChooseIntro: 'We provide unparalleled SEO solutions meticulously tailored for the New York beauty industry. Our mission is to empower your salon or spa to not only navigate but dominate the Empire State\'s fiercely competitive digital landscape, achieving sustainable growth and an undeniably glamorous online presence that translates directly into increased revenue.',
  whyChooseParagraph1: 'Our dedicated specialists possess profound expertise in the New York salon sector, understanding the rapid trends, sophisticated client expectations, and unique market dynamics. We don\'t just craft strategies; we engineer bespoke solutions that amplify your salon\'s distinctive style, showcase your unparalleled expertise, and reinforce your unwavering commitment to client satisfaction. We work tirelessly to ensure your brand resonates with your ideal clientele.',
  whyChooseParagraph2: 'We are passionately committed to ethical, results-driven SEO that meticulously builds your salon\'s brand reputation and significantly boosts client bookings across New York. Our transparent, data-backed approach ensures you witness the tangible, direct impact of our beauty industry SEO services on your bottom line. We are relentless in our pursuit of your success, working crazy hard to bring you more business and maximize your profitability.',
  whyChoosePoints: [
    { icon: 'TrendingUp', title: 'NY Salon SEO Growth', description: 'Experience exponential growth in appointment bookings and new client acquisition across New York. Our SEO strategies are laser-focused on attracting clients actively seeking your premium beauty and spa services, ensuring a continuous influx of high-value customers.' },
    { icon: 'Lightbulb', title: 'New York Beauty Market Mastery', description: 'Benefit from cutting-edge SEO strategies specifically designed for the dynamic NY salon industry. We meticulously analyze regional trends, cater to diverse client needs, and expertly navigate the competitive landscape from the bustling streets of NYC to the charming upstate communities, giving you an undeniable edge.' },
    { icon: 'ShieldCheck', title: 'Trusted Growth Partner', description: 'Achieve enduring online success with our ethical, forward-thinking SEO practices, meticulously adapted for New York salons and spas. We build your brand\'s authority and cultivate unwavering client loyalty in a style-conscious state, ensuring long-term profitability and market leadership.' },
  ],
  awards: {
    clutch: { headline: 'Top NY Salon SEO - Industry Excellence Award 2024', text: 'Recognized for consistently driving exceptional SEO results and significant revenue growth for New York salons and spas, setting new benchmarks for digital success.' },
    upcity: { headline: 'New York Salon SEO Leadership - Client Impact Award 2024', text: 'Awarded for unparalleled SEO services and transformative client success in the New York beauty and wellness industry, demonstrating profound impact on business expansion.' },
  },
  coverageData: {
    mainHeadline: "Serving Salons & Spas Across the Empire State - New York",
    points: ["New York City (Manhattan, Brooklyn, Queens, Bronx, Staten Island)", "Long Island (Nassau, Suffolk)", "Westchester County", "Albany Capital District", "Buffalo & Western NY", "Rochester", "Syracuse", "And more..."],
    mapImageUrl: STATE_COVERAGE_IMAGE_SRC,
    mapImageAlt: "Map of New York showing service areas for salon and spa SEO"
  },
  bottomFormTitle: 'Get Your Salon & Spa SEO Plan',
};
