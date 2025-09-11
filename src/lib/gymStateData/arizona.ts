
import type { GymStatePageData } from '@/types';
import { Search, Dumbbell, Users, TrendingUp, Lightbulb, ShieldCheck, Settings, Mail, CalendarCheck, Sun } from 'lucide-react'; // Sun for Arizona
import { CONTACT_DETAILS } from '@/lib/constants';

const STATE_HERO_IMAGE_SRC = '/trac-seo.jpg';
const STATE_COVERAGE_IMAGE_SRC = 'https://placehold.co/600x400.png';

export const arizonaGymData: GymStatePageData = {
  slug: 'arizona',
  stateName: 'Arizona',
  heroData: {
    pageTitle: 'Arizona Gym SEO: Maximize Your Fitness Business Growth',
    metaDescription: 'Elevate your Arizona gym or fitness studio\'s online presence. Our expert SEO strategies attract more members, boost class attendance, and significantly increase your revenue. Discover the difference.',
    heroTitle: 'Arizona Gym & Fitness SEO: Achieve Unrivaled Online Performance',
    heroSubtitle: 'Connect with Health-Conscious Individuals Across Arizona and Maximize Your Membership Potential',
    heroDescription: 'Our specialized SEO services are meticulously crafted for gyms, fitness centers, and studios throughout Arizona. From Phoenix and Scottsdale\'s vibrant fitness communities to Tucson\'s active lifestyle and beyond, we empower Arizona fitness businesses to dominate their local search results and attract a consistent flow of new members. Arizonans prioritize health and wellness; your digital storefront must not only reflect this but also project unparalleled expertise and trustworthiness. Our comprehensive SEO strategies prioritize technical optimization, ensuring your website is lightning-fast and user-friendly. We craft compelling narratives and showcase your facility\'s unique classes, modern equipment, and certified trainers through rich content and stunning visuals, building an undeniable online reputation that converts browsers into loyal members. Partner with us to make your Arizona fitness business the undisputed leader in health and wellness, driving substantial revenue growth and securing your market position.',
    heroImage: { src: STATE_HERO_IMAGE_SRC, alt: 'Arizona fitness center with people working out' },
    heroVideoUrl: 'https://www.youtube.com/embed/JBPmDzL-Xek',
    formTitle: 'Free Arizona Gym SEO Quote!',
  },
  resultsHeadline: 'SEO That Builds Unstoppable Membership Growth for Arizona Gyms',
  readyToGrowHeadline: 'Ready to Ignite Your Arizona Fitness Business with Strategic SEO and Unprecedented Growth?',
  servicesSectionHeadline: 'Tailored SEO Solutions for Arizona\'s Elite Gyms, Studios & Fitness Professionals',
  servicesSectionSubheadline: 'Our deep expertise in Arizona gym SEO ensures you attract discerning members seeking premium group fitness classes, personalized training, specialized facilities, and a motivating fitness environment across the state. We don\'t just get you found; we get you chosen.',
  services: [
    { icon: Search, title: 'Local SEO for AZ Gyms & Studios', description: 'Dominate local search results and connect with fitness seekers in your Arizona service areas (e.g., \'Phoenix gyms,\' \'Scottsdale personal trainers\'). We optimize your Google Business Profile, local listings, and integrate seamlessly with class schedules for maximum visibility.' },
    { icon: Dumbbell, title: 'Specialized Fitness Program SEO', description: 'Achieve unparalleled visibility for niche offerings like HIIT classes, weightlifting gyms, Pilates studios, or wellness centers in various Arizona communities. We highlight your unique programs to attract high-value members.' },
    { icon: CalendarCheck, title: 'Online Class & Membership SEO', description: 'Streamline your member acquisition process. We optimize for searches related to online fitness classes, gym memberships, drop-in rates, and introductory offers in Arizona, ensuring effortless sign-ups and increased client flow.' },
    { icon: Sun, title: 'Outdoor & Indoor Fitness SEO', description: 'Target Arizonans seeking both premier indoor gym experiences and outdoor fitness activities or bootcamps. We leverage the state\'s unique climate to position your facility as the go-to destination for comprehensive fitness solutions.' },
  ],
  whyChooseSectionHeadline: 'Why Partner with Us for Unmatched Arizona Gym & Fitness Growth',
  whyChooseIntro: 'We provide unparalleled SEO solutions meticulously tailored for the Arizona fitness market. Our mission is to empower your gym or studio to not only navigate but dominate the Grand Canyon State\'s fiercely competitive digital landscape, achieving sustainable growth and an undeniably powerful online presence that translates directly into increased revenue.',
  whyChooseParagraph1: 'Our dedicated specialists possess profound expertise in the Arizona fitness sector, understanding the diverse preferences of Arizonans, from high-intensity workouts to holistic wellness approaches. We don\'t just craft strategies; we engineer bespoke solutions that amplify your facility\'s distinctive benefits, showcase your unparalleled expertise, and reinforce your unwavering commitment to member success. We work tirelessly to ensure your brand resonates with your ideal clientele.',
  whyChooseParagraph2: 'We are passionately committed to ethical, results-driven SEO that meticulously builds your fitness brand\'s online authority and significantly boosts member loyalty across Arizona. Our transparent, data-backed approach ensures you witness the tangible, direct impact of our fitness industry SEO services on your bottom line. We are relentless in our pursuit of your success, working crazy hard to bring you more business and maximize your profitability.',
  whyChoosePoints: [
    { icon: 'TrendingUp', title: 'AZ Gym SEO Growth', description: 'Experience exponential growth in membership sign-ups and class attendance across Arizona. Our SEO strategies are laser-focused on attracting individuals actively seeking your type of fitness facility and programs, ensuring a continuous influx of high-value customers.' },
    { icon: 'Lightbulb', title: 'Arizona Fitness Market Mastery', description: 'Benefit from cutting-edge SEO strategies specifically designed for the dynamic AZ fitness industry. We meticulously analyze seasonal trends, popular workout styles, and expertly navigate the competitive gym environment in Phoenix, Tucson, and beyond, giving you an undeniable edge.' },
    { icon: 'ShieldCheck', title: 'Trusted Growth Partner', description: 'Achieve enduring online success with our ethical, forward-thinking SEO practices, meticulously adapted for Arizona gyms and studios. We build your brand\'s authority and cultivate a thriving fitness community, ensuring long-term profitability and market leadership.' },
  ],
  awards: {
    clutch: { headline: 'Top AZ Gym SEO - Industry Excellence Award 2024', text: 'Recognized for consistently driving exceptional SEO results and significant revenue growth for Arizona fitness centers and wellness studios, setting new benchmarks for digital success.' },
    upcity: { headline: 'Arizona Gym SEO Leadership - Client Impact Award 2024', text: 'Awarded for unparalleled SEO services and transformative client success in the Arizona health and fitness industry, demonstrating profound impact on business expansion.' },
  },
  coverageData: {
    mainHeadline: "Serving Gyms & Fitness Centers Across the Grand Canyon State - Arizona",
    points: ["Phoenix Metro Area (Phoenix, Scottsdale, Mesa, Tempe, Chandler)", "Tucson & Southern Arizona", "Flagstaff", "Prescott", "Yuma", "Lake Havasu City", "And more..."],
    mapImageUrl: STATE_COVERAGE_IMAGE_SRC,
    mapImageAlt: "Map of Arizona showing service areas for gym and fitness SEO"
  },
  bottomFormTitle: 'Get Your Gym & Fitness SEO Plan',
};
