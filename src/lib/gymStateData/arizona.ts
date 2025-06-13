
import type { GymStatePageData } from '@/types';
import { Search, Dumbbell, Users, TrendingUp, Lightbulb, ShieldCheck, Settings, Mail, CalendarCheck, Sun } from 'lucide-react'; // Sun for Arizona
import { CONTACT_DETAILS } from '@/lib/constants';

const STATE_HERO_IMAGE_SRC = 'https://placehold.co/800x500.png';
const STATE_COVERAGE_IMAGE_SRC = 'https://placehold.co/600x400.png';

export const arizonaGymData: GymStatePageData = {
  slug: 'arizona',
  stateName: 'Arizona',
  heroData: {
    pageTitle: 'Arizona Gym SEO | TRAC - SEO for AZ Fitness Centers',
    metaDescription: 'Boost memberships for your Arizona gym or fitness studio with TRAC\'s expert SEO. Attract clients for classes, personal training, and wellness programs in AZ. Free SEO proposal!',
    heroTitle: 'Arizona Gym & Fitness SEO: Achieve Peak Performance Online',
    heroSubtitle: 'Connect with Health Seekers Across Arizona with TRAC\'s Sun-Powered Fitness SEO',
    heroDescription: 'TRAC delivers specialized SEO services for gyms, fitness centers, and studios throughout Arizona. From Phoenix and Scottsdale\'s vibrant fitness communities to Tucson\'s active lifestyle and beyond, we help Arizona fitness businesses increase online visibility and attract more members. Arizonans value health and wellness, often seeking indoor and outdoor fitness opportunities. Our SEO strategies focus on local search optimization to ensure fitness enthusiasts in your specific Arizona area find your gym when searching for "gyms near me Phoenix," "yoga Scottsdale," or "CrossFit Tucson." We optimize your website for peak technical performance, showcase your facility\'s unique classes, modern equipment, and certified trainers through engaging content, and manage your online reputation to build a strong, welcoming community presence. Partner with TRAC to energize your Arizona fitness business\'s online marketing and reach new membership goals in the Grand Canyon State.',
    heroImage: { src: STATE_HERO_IMAGE_SRC, alt: 'Arizona fitness center with people working out', dataAiHint: 'gym fitness arizona' },
    heroVideoUrl: 'https://www.youtube.com/embed/JBPmDzL-Xek',
    formTitle: 'Free Arizona Gym SEO Quote!',
  },
  resultsHeadline: 'SEO That Builds Strong Membership Numbers for Arizona Gyms',
  readyToGrowHeadline: 'Ready to Heat Up Your Arizona Fitness Business with Powerful SEO?',
  servicesSectionHeadline: 'Custom SEO for Arizona Gyms, Studios & Fitness Professionals',
  servicesSectionSubheadline: 'Our Arizona gym SEO expertise helps you attract members looking for group fitness, personal training, specialized facilities, and a motivating fitness environment across the state.',
  services: [
    { icon: Search, title: 'Local SEO for AZ Gyms & Studios', description: 'Get found by fitness seekers in your Arizona service areas (e.g., "Phoenix gyms," "Scottsdale personal trainers"). We optimize GMB, local listings, and class schedules.' },
    { icon: Dumbbell, title: 'Specialized Fitness Program SEO', description: 'Improve visibility for niche offerings like HIIT classes, weightlifting gyms, Pilates studios, or wellness centers in various Arizona communities.' },
    { icon: CalendarCheck, title: 'Online Class & Membership SEO', description: 'Attract new members by optimizing for searches related to online fitness classes, gym memberships, drop-in rates, and introductory offers in Arizona.' },
    { icon: Sun, title: 'Outdoor & Indoor Fitness SEO', description: 'Target Arizonans looking for both indoor gym experiences and potentially linking to outdoor fitness activities or bootcamps, leveraging the state\'s climate.' },
  ],
  whyChooseSectionHeadline: 'Why TRAC is Your Premier Partner for Arizona Gym & Fitness SEO',
  whyChooseIntro: 'TRAC provides expert SEO solutions tailored for the Arizona fitness market. We help your gym or studio navigate the Grand Canyon State\'s active digital landscape to achieve robust membership growth.',
  whyChooseParagraph1: 'Our Arizona gym SEO specialists understand the fitness preferences of Arizonans, from those seeking high-intensity workouts to those preferring holistic wellness approaches. We craft strategies that highlight your facility\'s unique benefits and community appeal.',
  whyChooseParagraph2: 'We are committed to ethical, results-focused SEO that builds your fitness brand\'s online authority and member loyalty across Arizona. Our transparent reporting ensures you see the direct impact of our services.',
  whyChoosePoints: [
    { icon: 'TrendingUp', title: 'AZ Gym SEO Growth', description: 'Increase membership sign-ups and class attendance across Arizona. We focus on SEO that attracts individuals actively seeking your type of fitness facility and programs.' },
    { icon: 'Lightbulb', title: 'Arizona Fitness Market Expertise', description: 'Benefit from SEO strategies designed for the AZ fitness industry, considering seasonal trends, popular workout styles, and the competitive gym environment in Phoenix, Tucson, and beyond.' },
    { icon: 'ShieldCheck', title: 'Trusted AZ Fitness SEO Partner', description: 'Achieve enduring online success with ethical SEO practices adapted for Arizona gyms and studios, building your brand and a thriving fitness community.' },
  ],
  awards: {
    clutch: { headline: 'Top AZ Gym SEO - Grand Canyon Fitness Awards 2024', text: 'Recognized for driving exceptional SEO results for Arizona fitness centers and wellness studios.' },
    upcity: { headline: 'Arizona Gym SEO Excellence - UpCity 2024', text: 'Awarded for leading SEO services and client success in the Arizona health and fitness industry.' },
  },
  coverageData: {
    mainHeadline: "Serving Gyms & Fitness Centers Across the Grand Canyon State - Arizona",
    points: ["Phoenix Metro Area (Phoenix, Scottsdale, Mesa, Tempe, Chandler)", "Tucson & Southern Arizona", "Flagstaff", "Prescott", "Yuma", "Lake Havasu City", "And more..."],
    mapImageUrl: STATE_COVERAGE_IMAGE_SRC,
    mapImageAlt: "Map of Arizona showing service areas for gym and fitness SEO"
  },
  bottomFormTitle: 'Get Your Gym & Fitness SEO Plan',
};
