
import type { VeterinaryStatePageData } from '@/types';
import { Search, Stethoscope, CalendarCheck, ShieldCheck, TrendingUp, Lightbulb, Users, PawPrint, HeartHandshake, Sun } from 'lucide-react';
import { CONTACT_DETAILS } from '@/lib/constants';

const STATE_HERO_IMAGE_SRC = 'https://placehold.co/800x500.png';
const STATE_COVERAGE_IMAGE_SRC = 'https://placehold.co/600x400.png';

export const floridaVeterinaryData: VeterinaryStatePageData = {
  slug: 'florida',
  stateName: 'Florida',
  heroData: {
    pageTitle: 'Florida Veterinary SEO | TRAC - SEO for FL Vet Clinics',
    metaDescription: 'Boost your Florida veterinary practice with TRAC\'s expert SEO. Attract more pet owners in FL for wellness care, exotic pet services, and emergency vet needs. Get a free SEO proposal!',
    heroTitle: 'Florida Veterinary SEO: Helping Your Clinic Shine in the Sunshine State',
    heroSubtitle: 'Connect with Pet Owners Across Florida with TRAC\'s Specialized Vet SEO',
    heroDescription: 'TRAC offers dedicated SEO services for veterinary clinics and animal hospitals throughout Florida. In a state with a high pet ownership rate and diverse animal populations (including exotic pets), a strong online presence is crucial for attracting new patients. We help vets in Miami, Orlando, Tampa, Jacksonville, and across the Sunshine State enhance their visibility. Our strategies are tailored to the Florida veterinary market, promoting services like preventative care, senior pet wellness, emergency services, and specialized care for unique Florida pets. We focus on local SEO to ensure pet owners in your specific Florida community can easily find your clinic, technical optimization for a fast and mobile-friendly website, and content marketing that educates Florida pet owners on topics like heat safety, hurricane preparedness for pets, and common local parasites. We highlight your clinic\'s expertise, compassionate staff, and commitment to animal health. Partner with TRAC to grow your patient base and serve more of Florida\'s beloved pets.',
    heroImage: { src: STATE_HERO_IMAGE_SRC, alt: 'Cat receiving care at a Florida vet clinic', dataAiHint: 'veterinary cat florida' },
    heroVideoUrl: 'https://www.youtube.com/embed/JBPmDzL-Xek',
    formTitle: 'Free Florida Vet SEO Quote!',
  },
  resultsHeadline: 'SEO That Helps Florida Veterinary Practices Connect with More Pet Families',
  readyToGrowHeadline: 'Ready to Grow Your Florida Veterinary Clinic with Targeted SEO?',
  servicesSectionHeadline: 'Custom SEO for Florida Veterinarians & Animal Hospitals',
  servicesSectionSubheadline: 'Our Florida veterinary SEO expertise helps you reach pet owners seeking everything from annual check-ups to specialized treatments for common and exotic pets across the Sunshine State.',
  services: [
    { icon: Search, title: 'Local SEO for FL Vet Clinics', description: 'Get discovered by pet owners in your Florida service area, including Miami, Orlando, Tampa, and Jacksonville. We optimize your Google Business Profile and local listings.' },
    { icon: Sun, title: 'Exotic Pet & Senior Pet Care SEO', description: 'Highlight your expertise in caring for Florida\'s diverse pet population, including exotic animals, and specialized services for senior pets, attracting a niche clientele.' },
    { icon: Stethoscope, title: 'Emergency Vet & Urgent Care SEO', description: 'Improve visibility for critical services like emergency veterinary care and urgent pet needs, ensuring Florida pet owners can find you quickly in a crisis.' },
    { icon: CalendarCheck, title: 'Wellness Plan & Preventative Care SEO', description: 'Promote your clinic\'s wellness plans, vaccination services, and preventative care offerings to Florida pet owners seeking proactive health solutions for their animals.' },
  ],
  whyChooseSectionHeadline: 'Why TRAC is Your Top Choice for Florida Veterinary SEO',
  whyChooseIntro: 'TRAC provides expert SEO solutions tailored for the Florida veterinary market. We help your clinic thrive in the Sunshine State\'s competitive digital landscape by connecting you with more local pet owners.',
  whyChooseParagraph1: 'Our Florida veterinary SEO specialists understand the unique environment, from the year-round need for flea and tick prevention to the challenges of hurricane season. We craft strategies that resonate with Florida pet owners and showcase your clinic\'s commitment to animal welfare.',
  whyChooseParagraph2: 'We are dedicated to ethical, results-driven SEO that builds your clinic\'s online reputation and patient roster in Florida. Our transparent reporting and collaborative approach make us a reliable partner in your growth.',
  whyChoosePoints: [
    { icon: 'TrendingUp', title: 'FL Veterinary SEO Growth', description: 'Increase appointment bookings and new patient registrations across Florida. We focus on SEO that attracts pet owners actively searching for quality veterinary services.' },
    { icon: 'Lightbulb', title: 'Florida Vet Market Insights', description: 'Benefit from SEO strategies informed by Florida\'s pet ownership trends, common health concerns (e.g., heatstroke, allergies), and regional preferences for veterinary care.' },
    { icon: 'HeartHandshake', title: 'Trusted FL Vet SEO Partner', description: 'Achieve lasting online success with ethical SEO practices designed for Florida veterinary clinics, building trust with pet owners and growing your community impact.' },
  ],
  awards: {
    clutch: { headline: 'Top FL Vet SEO - Sunshine Pet Health Awards 2024', text: 'Recognized for outstanding SEO results for Florida veterinary practices, enhancing their local reach and patient engagement.' },
    upcity: { headline: 'Florida Vet SEO Excellence - UpCity 2024', text: 'Awarded for leading SEO services and client success within the Florida veterinary community.' },
  },
  coverageData: {
    mainHeadline: "Serving Veterinary Clinics Across the Sunshine State - Florida",
    points: ["Miami-Dade County", "Orlando Metro Area", "Tampa Bay Region", "Jacksonville & Northeast Florida", "Southwest Florida (Naples, Fort Myers)", "The Palm Beaches", "Tallahassee", "And more..."],
    mapImageUrl: STATE_COVERAGE_IMAGE_SRC,
    mapImageAlt: "Map of Florida showing service areas for veterinary SEO"
  },
  bottomFormTitle: 'Get Your Vet Clinic SEO Plan',
};
