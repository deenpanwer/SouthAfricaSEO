
import type { VeterinaryStatePageData } from '@/types';
import { Search, Stethoscope, CalendarCheck, ShieldCheck, TrendingUp, Lightbulb, Users, PawPrint, HeartHandshake, Sun } from 'lucide-react';
import { CONTACT_DETAILS } from '@/lib/constants';

const STATE_HERO_IMAGE_SRC = '/trac-seo.jpg';
const STATE_COVERAGE_IMAGE_SRC = 'https://placehold.co/600x400.png';

export const floridaVeterinaryData: VeterinaryStatePageData = {
  slug: 'florida',
  stateName: 'Florida',
  heroData: {
    pageTitle: 'Florida Veterinary SEO: Grow Your Practice, Help More Pets',
    metaDescription: 'Elevate your Florida veterinary practice\'s online presence. Our expert SEO strategies attract more pet owners, boost appointments, and significantly increase your revenue. Discover the difference.',
    heroTitle: 'Florida Veterinary SEO: Helping Your Clinic Thrive in the Sunshine State',
    heroSubtitle: 'Connect with Dedicated Pet Owners Across Florida and Maximize Your Practice\'s Potential',
    heroDescription: 'Our specialized SEO services are meticulously crafted for veterinary clinics and animal hospitals throughout Florida. In a state with a high pet ownership rate and diverse animal populations (including exotic pets), a strong online presence is crucial for attracting new patients. We empower veterinary practices in Miami, Orlando, Tampa, Jacksonville, and across the Sunshine State to dominate their local search results and attract a consistent flow of new patients. Our strategies are tailored to the Florida veterinary market, promoting services like comprehensive preventative care, specialized senior pet wellness, critical emergency services, and expert care for unique Florida pets. We prioritize local SEO to ensure pet owners in your specific Florida community can easily find your clinic, technical optimization for a fast and mobile-friendly website, and content marketing that educates Florida pet owners on topics like heat safety, hurricane preparedness for pets, and common local parasites. We help you highlight your clinic\'s unparalleled expertise, compassionate staff, and unwavering commitment to animal health. Partner with us to enhance your digital footprint and bring more furry (and scaly, and feathery) patients through your doors, driving substantial revenue growth and securing your market position.',
    heroImage: { src: STATE_HERO_IMAGE_SRC, alt: 'Cat receiving care at a Florida vet clinic' },
    heroVideoUrl: 'https://www.youtube.com/embed/JBPmDzL-Xek',
    formTitle: 'Free Florida Vet SEO Quote!',
  },
  resultsHeadline: 'SEO That Helps Florida Veterinary Practices Connect with More Pet Families for Unprecedented Growth',
  readyToGrowHeadline: 'Ready to Grow Your Florida Veterinary Clinic with Strategic SEO and Unprecedented Patient Volume?',
  servicesSectionHeadline: 'Tailored SEO Solutions for Florida\'s Elite Veterinarians & Animal Hospitals',
  servicesSectionSubheadline: 'Our deep expertise in Florida veterinary SEO ensures you attract discerning pet owners seeking everything from annual check-ups to specialized treatments for common and exotic pets across the Sunshine State. We don\'t just get you found; we get you chosen.',
  services: [
    { icon: Search, title: 'Local SEO for FL Vet Clinics', description: 'Dominate local search results and connect with pet owners in your Florida service area, including Miami, Orlando, Tampa, and Jacksonville. We optimize your Google Business Profile and local listings for maximum visibility for your practice.' },
    { icon: Sun, title: 'Exotic Pet & Senior Pet Care SEO', description: 'Achieve unparalleled visibility for your expertise in caring for Florida\'s diverse pet population, including exotic animals, and specialized services for senior pets. We highlight your unique offerings to attract a niche, high-value clientele.' },
    { icon: Stethoscope, title: 'Emergency Vet & Urgent Care SEO', description: 'Improve visibility for critical services like emergency veterinary care and urgent pet needs. We ensure Florida pet owners can find you quickly in a crisis, positioning your clinic as a trusted lifeline.' },
    { icon: CalendarCheck, title: 'Wellness Plan & Preventative Care SEO', description: 'Promote your clinic\'s comprehensive wellness plans, essential vaccination services, and proactive preventative care offerings to Florida pet owners seeking long-term health solutions for their animals. We highlight the value of proactive care.' },
  ],
  whyChooseSectionHeadline: 'Why Partner with Us for Unmatched Florida Veterinary Growth',
  whyChooseIntro: 'We provide unparalleled SEO solutions meticulously tailored for the Florida veterinary market. Our mission is to empower your clinic to not only navigate but dominate the Sunshine State\'s fiercely competitive digital landscape, achieving sustainable growth and an undeniably powerful online presence that translates directly into increased revenue.',
  whyChooseParagraph1: 'Our dedicated specialists possess profound expertise in the Florida veterinary sector, understanding the unique environment, from the year-round need for flea and tick prevention to the challenges of hurricane season. We don\'t just craft strategies; we engineer bespoke solutions that amplify your clinic\'s compassionate care, showcase your unparalleled expertise, and reinforce your unwavering commitment to pet health. We work tirelessly to ensure your practice resonates with your ideal clientele.',
  whyChooseParagraph2: 'We are passionately committed to ethical, results-driven SEO that meticulously builds your clinic\'s online authority and significantly boosts patient loyalty across Florida. Our transparent, data-backed approach ensures you witness the tangible, direct impact of our veterinary SEO services on your bottom line. We are relentless in our pursuit of your success, working crazy hard to bring you more business and maximize your profitability.',
  whyChoosePoints: [
    { icon: 'TrendingUp', title: 'FL Veterinary SEO Growth', description: 'Experience exponential growth in new patient inquiries and appointment bookings across Florida. Our SEO strategies are laser-focused on attracting pet owners actively seeking your premium veterinary care, ensuring a continuous influx of high-value customers.' },
    { icon: 'Lightbulb', title: 'Florida Vet Market Mastery', description: 'Benefit from cutting-edge SEO strategies specifically designed for the dynamic Florida veterinary industry. We meticulously analyze regional pet ownership trends, common health concerns (e.g., heatstroke, allergies), and client preferences, giving you an undeniable edge.' },
    { icon: 'ShieldCheck', title: 'Trusted Growth Partner', description: 'Achieve enduring online success with our ethical, forward-thinking SEO practices, meticulously adapted for Florida veterinary clinics. We build your practice\'s authority and cultivate a thriving patient community, ensuring long-term profitability and market leadership.' },
  ],
  awards: {
    clutch: { headline: 'Top FL Vet SEO - Industry Excellence Award 2024', text: 'Recognized for consistently driving exceptional SEO results and significant revenue growth for Florida veterinary practices, setting new benchmarks for digital success.' },
    upcity: { headline: 'Florida Vet SEO Leadership - Client Impact Award 2024', text: 'Awarded for unparalleled SEO services and transformative client success in the Florida veterinary industry, demonstrating profound impact on business expansion.' },
  },
  coverageData: {
    mainHeadline: "Serving Veterinary Clinics Across the Sunshine State - Florida",
    points: ["Miami-Dade County", "Orlando Metro Area", "Tampa Bay Region", "Jacksonville & Northeast Florida", "Southwest Florida (Naples, Fort Myers)", "The Palm Beaches", "Tallahassee", "And more..."],
    mapImageUrl: STATE_COVERAGE_IMAGE_SRC,
    mapImageAlt: "Map of Florida showing service areas for veterinary SEO"
  },
  bottomFormTitle: 'Get Your Vet Clinic SEO Plan',
};
