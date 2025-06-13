
import type { VeterinaryStatePageData } from '@/types';
import { Search, Stethoscope, CalendarCheck, ShieldCheck, TrendingUp, Lightbulb, Users, PawPrint, HeartHandshake, Home } from 'lucide-react';
import { CONTACT_DETAILS } from '@/lib/constants';

const STATE_HERO_IMAGE_SRC = 'https://placehold.co/800x500.png';
const STATE_COVERAGE_IMAGE_SRC = 'https://placehold.co/600x400.png';

export const californiaVeterinaryData: VeterinaryStatePageData = {
  slug: 'california',
  stateName: 'California',
  heroData: {
    pageTitle: 'California Veterinary SEO | TRAC - SEO for CA Vet Clinics',
    metaDescription: 'Boost your California veterinary practice with TRAC\'s expert SEO. Attract more pet owners in CA for routine care, emergency services, and specialized treatments. Get your free SEO proposal!',
    heroTitle: 'California Veterinary SEO: Grow Your Practice, Help More Pets',
    heroSubtitle: 'Connect with Pet Owners Across California with TRAC\'s Tailored Vet SEO',
    heroDescription: 'TRAC provides specialized SEO services for veterinary clinics and animal hospitals across California. From bustling Los Angeles and San Francisco to suburban communities and rural areas, we help vets increase their online visibility and attract more clients. California\'s large and diverse pet-owning population requires a targeted approach to reach the right clients. We understand the specific needs of veterinary practices, including promoting services like wellness exams, dental care, emergency services, and specialized treatments. Our strategies focus on local SEO to ensure pet owners in your specific California service area can easily find you, technical optimization for a user-friendly website, and content marketing that educates pet owners and establishes your clinic as a trusted local resource. We help you highlight your compassionate care, experienced veterinarians, and state-of-the-art facilities. Partner with TRAC to enhance your digital pawprint and bring more furry (and scaly, and feathery) patients through your doors.',
    heroImage: { src: STATE_HERO_IMAGE_SRC, alt: 'Happy dog at a California vet clinic', dataAiHint: 'veterinary dog california' },
    heroVideoUrl: 'https://www.youtube.com/embed/JBPmDzL-Xek',
    formTitle: 'Free California Vet SEO Quote!',
  },
  resultsHeadline: 'SEO That Nurtures Growth for California Veterinary Practices',
  readyToGrowHeadline: 'Ready to Grow Your California Veterinary Clinic with Strategic SEO?',
  servicesSectionHeadline: 'Custom SEO for California Veterinarians & Animal Hospitals',
  servicesSectionSubheadline: 'Our California veterinary SEO expertise helps you connect with pet owners seeking services from routine check-ups and vaccinations to emergency care and specialized treatments across the Golden State.',
  services: [
    { icon: Search, title: 'Local SEO for CA Vet Clinics', description: 'Get found by pet owners in your California service area. We optimize GMB and local listings for cities like Los Angeles, San Diego, San Jose, and Sacramento.' },
    { icon: Stethoscope, title: 'Service-Specific Vet SEO', description: 'Improve visibility for key veterinary services such as dental care, surgery, diagnostics, emergency vet services, and wellness programs throughout California.' },
    { icon: PawPrint, title: 'Online Reputation Management for Vets', description: 'Build trust by managing online reviews and showcasing positive patient testimonials from California pet owners, enhancing your clinic\'s local reputation.' },
    { icon: CalendarCheck, title: 'SEO for Online Appointment Booking', description: 'Optimize your website and booking platforms to make it easy for California pet owners to schedule appointments online, increasing patient volume.' },
  ],
  whyChooseSectionHeadline: 'Why TRAC is Your Trusted Partner for California Veterinary SEO',
  whyChooseIntro: 'TRAC provides expert SEO solutions tailored for the California veterinary market. We help you navigate the Golden State\'s digital environment to achieve sustainable growth and connect with more pet-loving families.',
  whyChooseParagraph1: 'Our California veterinary SEO specialists understand the unique needs of animal care providers. We craft strategies that highlight your clinic\'s compassionate care, specialized services, and commitment to pet health, resonating with California pet owners.',
  whyChooseParagraph2: 'We are committed to ethical, results-focused SEO that builds your clinic\'s online authority and patient base across California. Our transparent approach and detailed reporting ensure you understand the impact of our services.',
  whyChoosePoints: [
    { icon: 'TrendingUp', title: 'CA Veterinary SEO Growth', description: 'Increase new patient inquiries and appointment bookings across California. We focus on SEO that attracts pet owners actively seeking veterinary care.' },
    { icon: 'Lightbulb', title: 'California Vet Market Expertise', description: 'Benefit from SEO strategies designed for the California veterinary industry, considering regional pet demographics, common pet health concerns, and client preferences.' },
    { icon: 'HeartHandshake', title: 'Trusted CA Vet SEO Partner', description: 'Achieve enduring online success with ethical SEO practices adapted for California veterinary clinics, building your reputation and patient loyalty.' },
  ],
  awards: {
    clutch: { headline: 'Top CA Vet SEO - Pet Health Digital Awards 2024', text: 'Recognized for driving exceptional SEO results for California veterinary practices.' },
    upcity: { headline: 'California Vet SEO Excellence - UpCity 2024', text: 'Awarded for leading SEO services and client success in the California veterinary sector.' },
  },
  coverageData: {
    mainHeadline: "Serving Veterinary Clinics Across California",
    points: ["Los Angeles County", "San Diego County", "Orange County", "San Francisco Bay Area", "Sacramento Area", "Inland Empire", "Central Valley", "And more..."],
    mapImageUrl: STATE_COVERAGE_IMAGE_SRC,
    mapImageAlt: "Map of California showing service areas for veterinary SEO"
  },
  bottomFormTitle: 'Get Your Vet Clinic SEO Plan',
};
