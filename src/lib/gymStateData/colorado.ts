
import type { GymStatePageData } from '@/types';
import { Search, Dumbbell, Users, TrendingUp, Lightbulb, ShieldCheck, Settings, Mail, CalendarCheck, MapPin } from 'lucide-react';
import { CONTACT_DETAILS } from '@/lib/constants';

const STATE_HERO_IMAGE_SRC = 'https://placehold.co/800x500.png';
const STATE_COVERAGE_IMAGE_SRC = 'https://placehold.co/600x400.png';

export const coloradoGymData: GymStatePageData = {
  slug: 'colorado',
  stateName: 'Colorado',
  heroData: {
    pageTitle: 'Colorado Gym SEO | TRAC - SEO for CO Fitness Centers',
    metaDescription: 'Boost memberships for your Colorado gym or fitness studio with TRAC\'s expert SEO. Attract clients for classes, personal training, and memberships in CO. Free SEO proposal!',
    heroTitle: 'Colorado Gym & Fitness SEO: Reach Your Peak Membership',
    heroSubtitle: 'Connect with Health Enthusiasts Across Colorado with TRAC\'s Active SEO',
    heroDescription: 'TRAC delivers specialized SEO services for gyms, fitness centers, and studios throughout Colorado. From Denver\'s urban fitness scene to Boulder\'s outdoor-oriented community and ski town training facilities, we help Colorado fitness businesses increase online visibility and attract more members. Coloradans are active and health-conscious, requiring a targeted SEO approach. We focus on local search optimization to ensure fitness seekers in your specific Colorado area find your gym when searching for "gym near me," "yoga classes Denver," or "personal trainer Aspen." Our strategies include optimizing your website for technical performance, showcasing your facility\'s unique classes, equipment, and trainers through engaging content, and managing your online reputation to build a strong community presence. Partner with TRAC to energize your Colorado fitness business\'s online marketing and achieve new levels of success.',
    heroImage: { src: STATE_HERO_IMAGE_SRC, alt: 'Colorado fitness enthusiasts working out', dataAiHint: 'gym fitness colorado' },
    heroVideoUrl: 'https://www.youtube.com/embed/JBPmDzL-Xek',
    formTitle: 'Free Colorado Gym SEO Quote!',
  },
  resultsHeadline: 'SEO That Powers Up Colorado Gyms & Fitness Studios',
  readyToGrowHeadline: 'Ready to Elevate Your Colorado Fitness Business with High-Altitude SEO?',
  servicesSectionHeadline: 'Custom SEO for Colorado Gyms, Studios & Fitness Centers',
  servicesSectionSubheadline: 'Our Colorado gym SEO expertise helps you attract members seeking group fitness classes, personal training, specialized equipment, and a supportive fitness community across the Centennial State.',
  services: [
    { icon: Search, title: 'Local SEO for CO Gyms & Studios', description: 'Get found by fitness enthusiasts in your Colorado service areas (e.g., "Denver gyms," "Boulder yoga studios"). We optimize GMB, local listings, and class schedules.' },
    { icon: Dumbbell, title: 'Class & Training Program SEO', description: 'Improve visibility for your specific fitness classes (CrossFit, Pilates, HIIT), personal training services, and specialized programs offered at your CO facility.' },
    { icon: CalendarCheck, title: 'Membership Drive & Trial Offer SEO', description: 'Attract new members by optimizing for searches related to gym memberships, free trials, and introductory offers in Colorado communities.' },
    { icon: MapPin, title: 'Niche Fitness SEO (Climbing, Ski Prep)', description: 'Target specific fitness niches popular in Colorado, such as climbing gyms, ski conditioning programs, or high-altitude training facilities.' },
  ],
  whyChooseSectionHeadline: 'Why TRAC is Your Premier Partner for Colorado Gym & Fitness SEO',
  whyChooseIntro: 'TRAC provides expert SEO solutions tailored for the Colorado fitness market. We help your gym or studio navigate the Centennial State\'s active digital landscape to achieve sustainable membership growth.',
  whyChooseParagraph1: 'Our Colorado gym SEO specialists understand the lifestyle and fitness priorities of Coloradans. We craft strategies that highlight your facility\'s unique atmosphere, expert trainers, and diverse offerings, resonating with a health-conscious population.',
  whyChooseParagraph2: 'We are committed to ethical, results-focused SEO that builds your fitness brand\'s online reputation and member base across Colorado. Our transparent approach and detailed reporting ensure you see the value of our services.',
  whyChoosePoints: [
    { icon: 'TrendingUp', title: 'CO Gym SEO Growth', description: 'Increase membership inquiries and sign-ups across Colorado. We focus on SEO that attracts individuals actively seeking fitness solutions and gym communities.' },
    { icon: 'Lightbulb', title: 'Colorado Fitness Market Expertise', description: 'Benefit from SEO strategies designed for the CO fitness industry, considering regional activity preferences (hiking, skiing, biking), and the competitive gym landscape.' },
    { icon: 'ShieldCheck', title: 'Trusted CO Fitness SEO Partner', description: 'Achieve enduring online success with ethical SEO practices adapted for Colorado gyms and studios, building your brand and a strong fitness community.' },
  ],
  awards: {
    clutch: { headline: 'Top CO Gym SEO - Rocky Mountain Fitness Awards 2024', text: 'Recognized for driving exceptional SEO results for Colorado fitness centers and studios.' },
    upcity: { headline: 'Colorado Gym SEO Excellence - UpCity 2024', text: 'Awarded for leading SEO services and client success in the Colorado health and fitness industry.' },
  },
  coverageData: {
    mainHeadline: "Serving Gyms & Fitness Centers Across the Centennial State - Colorado",
    points: ["Denver Metro Area", "Boulder County", "Colorado Springs", "Fort Collins & Northern Colorado", "Mountain Resort Towns (Aspen, Vail, Breckenridge)", "Grand Junction & Western Slope", "And more..."],
    mapImageUrl: STATE_COVERAGE_IMAGE_SRC,
    mapImageAlt: "Map of Colorado showing service areas for gym and fitness SEO"
  },
  bottomFormTitle: 'Get Your Gym & Fitness SEO Plan',
};
