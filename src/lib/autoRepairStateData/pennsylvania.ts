
import type { AutoRepairStatePageData } from '@/types';
import { Search, Wrench, Users, Settings, TrendingUp, Lightbulb, ShieldCheck, Mail, Car } from 'lucide-react';
import { CONTACT_DETAILS } from '@/lib/constants';

const STATE_HERO_IMAGE_SRC = 'https://placehold.co/800x500.png';
const STATE_COVERAGE_IMAGE_SRC = 'https://placehold.co/600x400.png';

export const pennsylvaniaAutoRepairData: AutoRepairStatePageData = {
  slug: 'pennsylvania',
  stateName: 'Pennsylvania',
  heroData: {
    pageTitle: 'Pennsylvania Auto Repair SEO | TRAC - SEO for PA Auto Shops',
    metaDescription: 'Get more auto repair customers in Pennsylvania with TRAC\'s expert SEO. Attract clients for brake repair, oil changes, and diagnostics in PA. Free SEO proposal!',
    heroTitle: 'Pennsylvania Auto Repair SEO: Drive More Business to Your Shop',
    heroSubtitle: 'Connect with Vehicle Owners Across Pennsylvania with TRAC\'s Targeted Auto Repair SEO',
    heroDescription: 'TRAC offers specialized SEO services for auto repair shops throughout Pennsylvania. From Philadelphia and Pittsburgh to smaller towns across the Keystone State, we help independent garages, multi-location repair centers, and specialty mechanics increase their online visibility and attract more customers. Pennsylvania drivers rely on trusted local shops for everything from routine maintenance to complex repairs. Our SEO strategies focus on local search optimization to ensure your shop appears when vehicle owners in your Pennsylvania service area search for "mechanic near me," "brake repair Philadelphia," or "oil change Harrisburg." We also optimize your website for technical performance, create content that educates customers on common car issues and maintenance tips, and highlight your shop\'s certifications, specialties (e.g., European car repair, diesel mechanics), and customer service excellence. Partner with TRAC to boost your Pennsylvania auto repair shop\'s online presence and keep your service bays full.',
    heroImage: { src: STATE_HERO_IMAGE_SRC, alt: 'Pennsylvania auto repair shop', dataAiHint: 'auto repair shop pennsylvania' },
    heroVideoUrl: 'https://www.youtube.com/embed/JBPmDzL-Xek',
    formTitle: 'Free Pennsylvania Auto Repair SEO Quote!',
  },
  resultsHeadline: 'SEO That Keeps Pennsylvania Auto Repair Shops Booked Solid',
  readyToGrowHeadline: 'Ready to Tune Up Your Pennsylvania Auto Shop\'s SEO?',
  servicesSectionHeadline: 'Custom SEO for Pennsylvania Auto Repair & Mechanic Shops',
  servicesSectionSubheadline: 'Our Pennsylvania auto repair SEO expertise helps you connect with car owners needing services from routine oil changes and tire rotations to engine diagnostics and major repairs across the Keystone State.',
  services: [
    { icon: Search, title: 'Local SEO for PA Auto Shops', description: 'Get found by drivers in your Pennsylvania service areas (e.g., "Pittsburgh auto repair," "mechanic near Allentown"). We optimize GMB and local listings.' },
    { icon: Wrench, title: 'Service-Specific SEO (Brakes, Transmissions)', description: 'Improve visibility for specific repair services like brake jobs, transmission repair, engine diagnostics, and AC service offered by your PA shop.' },
    { icon: Car, title: 'Make & Model Specialization SEO', description: 'Target customers seeking repairs for specific vehicle makes or models (e.g., "Honda repair Philadelphia," "Ford truck mechanic Lancaster") if your shop specializes.' },
    { icon: Mail, title: 'Content on PA Car Care & Maintenance', description: 'Develop informative content about car maintenance tips for Pennsylvania weather, common vehicle issues, and the importance of regular service, establishing your shop as a trusted local expert.' },
  ],
  whyChooseSectionHeadline: 'Why TRAC is Your Premier Partner for Pennsylvania Auto Repair SEO',
  whyChooseIntro: 'TRAC provides expert SEO solutions tailored for the Pennsylvania auto repair market. We help your shop navigate the Keystone State\'s digital landscape to achieve sustainable growth and a loyal customer base.',
  whyChooseParagraph1: 'Our Pennsylvania auto repair SEO specialists understand the needs of local mechanics and service centers. We craft strategies that highlight your shop\'s expertise, reliability, and fair pricing, resonating with PA vehicle owners seeking trustworthy repair services.',
  whyChooseParagraph2: 'We are committed to ethical, results-focused SEO that builds your auto repair shop\'s online reputation and customer appointments across Pennsylvania. Our transparent approach means you\'re always informed about your campaign\'s performance.',
  whyChoosePoints: [
    { icon: 'TrendingUp', title: 'PA Auto Repair SEO Growth', description: 'Increase service bookings and customer inquiries across Pennsylvania. We focus on SEO that attracts car owners actively searching for reliable auto repair and maintenance.' },
    { icon: 'Lightbulb', title: 'Pennsylvania Auto Repair Market Expertise', description: 'Benefit from SEO strategies designed for the PA auto service industry, considering regional driving conditions, common vehicle types, and local customer needs.' },
    { icon: 'ShieldCheck', title: 'Trusted PA Auto Repair SEO', description: 'Achieve enduring online success with ethical SEO practices adapted for Pennsylvania auto repair shops, building your local reputation and customer trust.' },
  ],
  awards: {
    clutch: { headline: 'Top PA Auto Repair SEO - Keystone Auto Awards 2024', text: 'Recognized for driving exceptional SEO results for Pennsylvania auto repair businesses.' },
    upcity: { headline: 'Pennsylvania Auto Repair SEO Excellence - UpCity 2024', text: 'Awarded for leading SEO services and client success in the Pennsylvania automotive service sector.' },
  },
  coverageData: {
    mainHeadline: "Serving Auto Repair Shops Across the Keystone State - Pennsylvania",
    points: ["Philadelphia Metro Area", "Pittsburgh Region", "Lehigh Valley (Allentown, Bethlehem, Easton)", "Harrisburg & Central PA", "Scranton/Wilkes-Barre Area", "Erie", "Lancaster", "And more..."],
    mapImageUrl: STATE_COVERAGE_IMAGE_SRC,
    mapImageAlt: "Map of Pennsylvania showing service areas for auto repair SEO"
  },
  bottomFormTitle: 'Get Your Auto Repair SEO Plan',
};
