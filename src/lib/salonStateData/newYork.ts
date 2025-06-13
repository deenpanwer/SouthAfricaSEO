
import type { SalonStatePageData } from '@/types';
import { Search, Scissors, Sparkles, Users, TrendingUp, Lightbulb, ShieldCheck, Settings, Mail, CalendarDays } from 'lucide-react';
import { CONTACT_DETAILS } from '@/lib/constants';

const STATE_HERO_IMAGE_SRC = 'https://placehold.co/800x500.png';
const STATE_COVERAGE_IMAGE_SRC = 'https://placehold.co/600x400.png';

export const newYorkSalonData: SalonStatePageData = {
  slug: 'new-york',
  stateName: 'New York',
  heroData: {
    pageTitle: 'New York Salon SEO | TRAC - SEO for NY Beauty Salons & Spas',
    metaDescription: 'Attract more clients to your New York salon or spa with TRAC\'s expert SEO. Rank higher for haircuts, beauty treatments, and spa services in NY. Get a free SEO proposal!',
    heroTitle: 'New York Salon & Spa SEO: Shine in the Empire State',
    heroSubtitle: 'Connect with Beauty Seekers Across New York with TRAC\'s Glamorous SEO',
    heroDescription: 'TRAC provides specialized SEO services for beauty salons, hair salons, nail salons, and spas throughout New York State. From the trendsetting boroughs of NYC to upscale suburbs and charming upstate towns, we help beauty businesses enhance their online visibility and attract more clients. New Yorkers seek quality and style, and your online presence needs to reflect that. Our SEO strategies focus on local search optimization to ensure clients in your specific New York neighborhood or city can easily find you when searching for "hair salon near me," "best spa NYC," or "nail salon Long Island." We optimize your website for technical performance and user experience, showcase your salon\'s unique services and talented stylists/therapists through compelling content and imagery, and manage your online reputation to build trust. Partner with TRAC to make your New York salon or spa a go-to destination for beauty and wellness.',
    heroImage: { src: STATE_HERO_IMAGE_SRC, alt: 'Stylish New York salon interior', dataAiHint: 'salon interior new york' },
    heroVideoUrl: 'https://www.youtube.com/embed/JBPmDzL-Xek',
    formTitle: 'Free New York Salon SEO Quote!',
  },
  resultsHeadline: 'SEO That Makes New York Salons & Spas Sparkle Online',
  readyToGrowHeadline: 'Ready to Elevate Your New York Salon with Stunning SEO?',
  servicesSectionHeadline: 'Custom SEO for New York Salons, Spas & Beauty Professionals',
  servicesSectionSubheadline: 'Our New York salon SEO expertise helps you attract clients seeking haircuts, color, nail services, facials, massages, and other beauty treatments across the Empire State.',
  services: [
    { icon: Search, title: 'Local SEO for NY Salons & Spas', description: 'Get found by clients in your New York service areas (e.g., "Manhattan hair salon," "spa services Brooklyn"). We optimize GMB, local listings, and online booking integrations.' },
    { icon: Scissors, title: 'Service-Specific SEO (Hair, Nails, Skin)', description: 'Improve visibility for your salon\'s specific services, such as balayage, gel manicures, facials, bridal makeup, and men\'s grooming in NY.' },
    { icon: CalendarDays, title: 'Online Booking & Appointment SEO', description: 'Optimize your website and booking platforms to make it easy for New Yorkers to schedule appointments online, increasing client flow and reducing no-shows.' },
    { icon: Sparkles, title: 'Visual SEO & Portfolio Showcase', description: 'Leverage image and video SEO to showcase your salon\'s work, ambiance, and stylists, attracting clients visually through platforms like Instagram and Pinterest, linked to your NY salon website.' },
  ],
  whyChooseSectionHeadline: 'Why TRAC is Your Premier Partner for New York Salon & Spa SEO',
  whyChooseIntro: 'TRAC provides expert SEO solutions tailored for the New York beauty industry. We help your salon or spa navigate the Empire State\'s competitive digital landscape to achieve sustainable growth and a glamorous online presence.',
  whyChooseParagraph1: 'Our New York salon SEO specialists understand the fast-paced trends and high expectations of clients in the beauty and wellness sector. We craft strategies that highlight your salon\'s unique style, expertise, and commitment to client satisfaction.',
  whyChooseParagraph2: 'We are committed to ethical, results-focused SEO that builds your salon\'s brand reputation and client bookings across New York. Our transparent approach ensures you see the direct impact of our beauty industry SEO services.',
  whyChoosePoints: [
    { icon: 'TrendingUp', title: 'NY Salon SEO Growth', description: 'Increase appointment bookings and new client acquisition across New York. We focus on SEO that attracts clients actively seeking your beauty and spa services.' },
    { icon: 'Lightbulb', title: 'New York Beauty Market Expertise', description: 'Benefit from SEO strategies designed for the NY salon industry, considering regional trends, diverse client needs, and the competitive landscape from NYC to upstate.' },
    { icon: 'ShieldCheck', title: 'Trusted NY Salon SEO Partner', description: 'Achieve enduring online success with ethical SEO practices adapted for New York salons and spas, building your brand and client loyalty in a style-conscious state.' },
  ],
  awards: {
    clutch: { headline: 'Top NY Salon SEO - Empire Beauty Awards 2024', text: 'Recognized for driving exceptional SEO results for New York salons and spas.' },
    upcity: { headline: 'New York Salon SEO Excellence - UpCity 2024', text: 'Awarded for leading SEO services and client success in the New York beauty and wellness industry.' },
  },
  coverageData: {
    mainHeadline: "Serving Salons & Spas Across the Empire State - New York",
    points: ["New York City (Manhattan, Brooklyn, Queens, Bronx, Staten Island)", "Long Island (Nassau, Suffolk)", "Westchester County", "Albany Capital District", "Buffalo & Western NY", "Rochester", "Syracuse", "And more..."],
    mapImageUrl: STATE_COVERAGE_IMAGE_SRC,
    mapImageAlt: "Map of New York showing service areas for salon and spa SEO"
  },
  bottomFormTitle: 'Get Your Salon & Spa SEO Plan',
};
