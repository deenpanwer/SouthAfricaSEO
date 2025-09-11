
import type { GymStatePageData } from '@/types';
import { Search, Dumbbell, Users, TrendingUp, Lightbulb, ShieldCheck, Settings, Mail, CalendarCheck, MapPin } from 'lucide-react';
import { CONTACT_DETAILS } from '@/lib/constants';

const STATE_HERO_IMAGE_SRC = '/trac-seo.jpg';
const STATE_COVERAGE_IMAGE_SRC = 'https://placehold.co/600x400.png';

export const coloradoGymData: GymStatePageData = {
  slug: 'colorado',
  stateName: 'Colorado',
  heroData: {
    pageTitle: 'Colorado Gym SEO: Elevate Your Fitness Business to New Heights',
    metaDescription: 'Transform your Colorado gym or fitness studio\'s online presence. Our expert SEO strategies attract more members, boost class attendance, and significantly increase your revenue. Discover the difference.',
    heroTitle: 'Colorado Gym & Fitness SEO: Conquer the Digital Landscape',
    heroSubtitle: 'Connect with Active Enthusiasts Across Colorado and Maximize Your Membership Potential',
    heroDescription: 'Our specialized SEO services are meticulously crafted for gyms, fitness centers, and studios throughout Colorado. From Denver\'s vibrant urban fitness scene to Boulder\'s outdoor-oriented community and high-altitude training facilities, we empower Colorado fitness businesses to dominate their local search results and attract a consistent flow of new members. Coloradans are inherently active and health-conscious; your digital storefront must not only reflect this but also project unparalleled expertise and trustworthiness. Our comprehensive SEO strategies prioritize technical optimization, ensuring your website is lightning-fast and user-friendly. We craft compelling narratives and showcase your facility\'s unique classes, cutting-edge equipment, and certified trainers through rich content and stunning visuals, building an undeniable online reputation that converts browsers into loyal members. Partner with us to make your Colorado fitness business the undisputed leader in health and wellness, driving substantial revenue growth and securing your market position.',
    heroImage: { src: STATE_HERO_IMAGE_SRC, alt: 'Colorado fitness enthusiasts working out' },
    heroVideoUrl: 'https://www.youtube.com/embed/JBPmDzL-Xek',
    formTitle: 'Free Colorado Gym SEO Quote!',
  },
  resultsHeadline: 'SEO That Propels Colorado Gyms & Fitness Studios to Unrivaled Success',
  readyToGrowHeadline: 'Ready to Elevate Your Colorado Fitness Business with Strategic SEO and Unprecedented Growth?',
  servicesSectionHeadline: 'Tailored SEO Solutions for Colorado\'s Elite Gyms, Studios & Fitness Professionals',
  servicesSectionSubheadline: 'Our deep expertise in Colorado gym SEO ensures you attract discerning members seeking premium group fitness classes, personalized training, specialized equipment, and a supportive fitness community across the Centennial State. We don\'t just get you found; we get you chosen.',
  services: [
    { icon: Search, title: 'Local SEO for CO Gyms & Studios', description: 'Dominate local search results and connect with fitness enthusiasts in your Colorado service areas (e.g., \'Denver gyms,\' \'Boulder yoga studios\'). We optimize your Google Business Profile, local listings, and integrate seamlessly with class schedules for maximum visibility.' },
    { icon: Dumbbell, title: 'Class & Training Program SEO', description: 'Achieve unparalleled visibility for your specific fitness classes (CrossFit, Pilates, HIIT), personal training services, and specialized programs offered at your CO facility. We highlight your unique offerings to attract high-value members.' },
    { icon: CalendarCheck, title: 'Membership Drive & Trial Offer SEO', description: 'Streamline your member acquisition process. We optimize for searches related to gym memberships, free trials, and introductory offers in Colorado communities, ensuring effortless sign-ups and increased client flow.' },
    { icon: MapPin, title: 'Niche Fitness SEO (Climbing, Ski Prep)', description: 'Target specific fitness niches popular in Colorado, such as climbing gyms, ski conditioning programs, or high-altitude training facilities. We showcase your specialized expertise to attract dedicated enthusiasts.' },
  ],
  whyChooseSectionHeadline: 'Why Partner with Us for Unmatched Colorado Gym & Fitness Growth',
  whyChooseIntro: 'We provide unparalleled SEO solutions meticulously tailored for the Colorado fitness market. Our mission is to empower your gym or studio to not only navigate but dominate the Centennial State\'s fiercely competitive digital landscape, achieving sustainable growth and an undeniably powerful online presence that translates directly into increased revenue.',
  whyChooseParagraph1: 'Our dedicated specialists possess profound expertise in the Colorado fitness sector, understanding the active lifestyle and diverse fitness priorities of Coloradans. We don\'t just craft strategies; we engineer bespoke solutions that amplify your facility\'s distinctive atmosphere, showcase your unparalleled expertise, and reinforce your unwavering commitment to member success. We work tirelessly to ensure your brand resonates with your ideal clientele.',
  whyChooseParagraph2: 'We are passionately committed to ethical, results-driven SEO that meticulously builds your fitness brand\'s online authority and significantly boosts member loyalty across Colorado. Our transparent, data-backed approach ensures you witness the tangible, direct impact of our fitness industry SEO services on your bottom line. We are relentless in our pursuit of your success, working crazy hard to bring you more business and maximize your profitability.',
  whyChoosePoints: [
    { icon: 'TrendingUp', title: 'CO Gym SEO Growth', description: 'Experience exponential growth in membership inquiries and sign-ups across Colorado. Our SEO strategies are laser-focused on attracting individuals actively seeking fitness solutions and gym communities, ensuring a continuous influx of high-value customers.' },
    { icon: 'Lightbulb', title: 'Colorado Fitness Market Mastery', description: 'Benefit from cutting-edge SEO strategies specifically designed for the dynamic CO fitness industry. We meticulously analyze regional activity preferences (hiking, skiing, biking), and expertly navigate the competitive gym landscape, giving you an undeniable edge.' },
    { icon: 'ShieldCheck', title: 'Trusted Growth Partner', description: 'Achieve enduring online success with our ethical, forward-thinking SEO practices, meticulously adapted for Colorado gyms and studios. We build your brand\'s authority and cultivate a thriving fitness community, ensuring long-term profitability and market leadership.' },
  ],
  awards: {
    clutch: { headline: 'Top CO Gym SEO - Industry Excellence Award 2024', text: 'Recognized for consistently driving exceptional SEO results and significant revenue growth for Colorado fitness centers and studios, setting new benchmarks for digital success.' },
    upcity: { headline: 'Colorado Gym SEO Leadership - Client Impact Award 2024', text: 'Awarded for unparalleled SEO services and transformative client success in the Colorado health and fitness industry, demonstrating profound impact on business expansion.' },
  },
  coverageData: {
    mainHeadline: "Serving Gyms & Fitness Centers Across the Centennial State - Colorado",
    points: ["Denver Metro Area", "Boulder County", "Colorado Springs", "Fort Collins & Northern Colorado", "Mountain Resort Towns (Aspen, Vail, Breckenridge)", "Grand Junction & Western Slope", "And more..."],
    mapImageUrl: STATE_COVERAGE_IMAGE_SRC,
    mapImageAlt: "Map of Colorado showing service areas for gym and fitness SEO"
  },
  bottomFormTitle: 'Get Your Gym & Fitness SEO Plan',
};
