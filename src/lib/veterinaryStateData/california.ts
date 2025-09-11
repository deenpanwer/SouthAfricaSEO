
import type { VeterinaryStatePageData } from '@/types';
import { Search, Stethoscope, CalendarCheck, ShieldCheck, TrendingUp, Lightbulb, Users, PawPrint, HeartHandshake, Home } from 'lucide-react';
import { CONTACT_DETAILS } from '@/lib/constants';

const STATE_HERO_IMAGE_SRC = '/trac-seo.jpg';
const STATE_COVERAGE_IMAGE_SRC = 'https://placehold.co/600x400.png';

export const californiaVeterinaryData: VeterinaryStatePageData = {
  slug: 'california',
  stateName: 'California',
  heroData: {
    pageTitle: 'California Veterinary SEO: Grow Your Practice, Help More Pets',
    metaDescription: 'Elevate your California veterinary practice\'s online presence. Our expert SEO strategies attract more pet owners, boost appointments, and significantly increase your revenue. Discover the difference.',
    heroTitle: 'California Veterinary SEO: Expand Your Reach, Enhance Pet Care',
    heroSubtitle: 'Connect with Dedicated Pet Owners Across California and Maximize Your Practice\'s Potential',
    heroDescription: 'Our specialized SEO services are meticulously crafted for veterinary clinics and animal hospitals across California. From bustling Los Angeles and San Francisco to suburban communities and rural areas, we empower veterinary practices to dominate their local search results and attract a consistent flow of new patients. California\'s vast and diverse pet-owning population requires a targeted approach to reach the right clients. We understand the specific needs of veterinary practices, including promoting services like comprehensive wellness exams, advanced dental care, critical emergency services, and specialized treatments. Our strategies prioritize local SEO to ensure pet owners in your specific California service area can easily find you, technical optimization for a seamless user experience on your website, and content marketing that educates pet owners, establishes your clinic as a trusted local resource, and showcases your unparalleled expertise. We help you highlight your compassionate care, highly experienced veterinarians, and state-of-the-art facilities. Partner with us to enhance your digital footprint and bring more furry (and scaly, and feathery) patients through your doors, driving substantial revenue growth and securing your market position.',
    heroImage: { src: STATE_HERO_IMAGE_SRC, alt: 'Happy dog at a California vet clinic' },
    heroVideoUrl: 'https://www.youtube.com/embed/JBPmDzL-Xek',
    formTitle: 'Free California Vet SEO Quote!',
  },
  resultsHeadline: 'SEO That Nurtures Unprecedented Growth for California Veterinary Practices',
  readyToGrowHeadline: 'Ready to Grow Your California Veterinary Clinic with Strategic SEO and Unprecedented Patient Volume?',
  servicesSectionHeadline: 'Tailored SEO Solutions for California\'s Elite Veterinarians & Animal Hospitals',
  servicesSectionSubheadline: 'Our deep expertise in California veterinary SEO ensures you attract discerning pet owners seeking services from routine check-ups and vaccinations to emergency care and specialized treatments across the Golden State. We don\'t just get you found; we get you chosen.',
  services: [
    { icon: Search, title: 'Local SEO for CA Vet Clinics', description: 'Dominate local search results and connect with pet owners in your California service area. We optimize your Google Business Profile and local listings for cities like Los Angeles, San Diego, San Jose, and Sacramento, ensuring maximum visibility for your practice.' },
    { icon: Stethoscope, title: 'Service-Specific Vet SEO', description: 'Achieve unparalleled visibility for key veterinary services such as advanced dental care, complex surgical procedures, precise diagnostics, critical emergency vet services, and comprehensive wellness programs throughout California. We highlight your specialized expertise to attract high-value patients.' },
    { icon: PawPrint, title: 'Online Reputation Management for Vets', description: 'Build unwavering trust and credibility by meticulously managing online reviews and showcasing compelling positive patient testimonials from California pet owners. This enhances your clinic\'s local reputation and fosters a loyal client base.' },
    { icon: CalendarCheck, title: 'SEO for Online Appointment Booking', description: 'Streamline your patient acquisition process. We optimize your website and booking platforms to ensure California pet owners can effortlessly schedule appointments online, significantly increasing patient volume and minimizing administrative burden.' },
  ],
  
  whyChooseSectionHeadline: 'Why Partner with Us for Unmatched California Veterinary Growth',
  whyChooseIntro: 'We provide unparalleled SEO solutions meticulously tailored for the California veterinary market. Our mission is to empower your clinic to not only navigate but dominate the Golden State\'s fiercely competitive digital landscape, achieving sustainable growth and an undeniably powerful online presence that translates directly into increased revenue.',
  whyChooseParagraph1: 'Our dedicated specialists possess profound expertise in the California veterinary sector, understanding the unique needs of animal care providers and the sophisticated expectations of pet owners. We don\'t just craft strategies; we engineer bespoke solutions that amplify your clinic\'s compassionate care, showcase your unparalleled expertise, and reinforce your unwavering commitment to pet health. We work tirelessly to ensure your practice resonates with your ideal clientele.',
  whyChooseParagraph2: 'We are passionately committed to ethical, results-driven SEO that meticulously builds your clinic\'s online authority and significantly boosts patient loyalty across California. Our transparent, data-backed approach ensures you witness the tangible, direct impact of our veterinary SEO services on your bottom line. We are relentless in our pursuit of your success, working crazy hard to bring you more business and maximize your profitability.',
  whyChoosePoints: [
    { icon: 'TrendingUp', title: 'CA Veterinary SEO Growth', description: 'Experience exponential growth in new patient inquiries and appointment bookings across California. Our SEO strategies are laser-focused on attracting pet owners actively seeking your premium veterinary care, ensuring a continuous influx of high-value customers.' },
    { icon: 'Lightbulb', title: 'California Vet Market Mastery', description: 'Benefit from cutting-edge SEO strategies specifically designed for the dynamic California veterinary industry. We meticulously analyze regional pet demographics, common pet health concerns, and client preferences, giving you an undeniable edge.' },
    { icon: 'HeartHandshake', title: 'Trusted Growth Partner', description: 'Achieve enduring online success with our ethical, forward-thinking SEO practices, meticulously adapted for California veterinary clinics. We build your practice\'s authority and cultivate a thriving patient community, ensuring long-term profitability and market leadership.' },
  ],
  awards: {
    clutch: { headline: 'Top CA Vet SEO - Industry Excellence Award 2024', text: 'Recognized for consistently driving exceptional SEO results and significant revenue growth for California veterinary practices, setting new benchmarks for digital success.' },
    upcity: { headline: 'California Vet SEO Leadership - Client Impact Award 2024', text: 'Awarded for unparalleled SEO services and transformative client success in the California veterinary industry, demonstrating profound impact on business expansion.' },
  },
  coverageData: {
    mainHeadline: "Serving Veterinary Clinics Across California",
    points: ["Los Angeles County", "San Diego County", "Orange County", "San Francisco Bay Area", "Sacramento Area", "Inland Empire", "Central Valley", "And more..."],
    mapImageUrl: STATE_COVERAGE_IMAGE_SRC,
    mapImageAlt: "Map of California showing service areas for veterinary SEO"
  },
  bottomFormTitle: 'Get Your Vet Clinic SEO Plan',
};
