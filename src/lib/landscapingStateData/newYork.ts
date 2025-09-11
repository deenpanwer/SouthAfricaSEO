
import type { LandscapingStatePageData } from '@/types';
import { Search, Settings, Users, Mail, TrendingUp, Lightbulb, ShieldCheck, TreePine, Sprout, Leaf, Building } from 'lucide-react';
import { CONTACT_DETAILS } from '@/lib/constants';

const STATE_HERO_IMAGE_SRC = '/trac-seo.jpg'; 
const STATE_COVERAGE_IMAGE_SRC = 'https://placehold.co/600x400.png';

export const newYorkLandscapingData: LandscapingStatePageData = {
  slug: 'new-york',
  stateName: 'New York',
  heroData: {
    pageTitle: 'New York Landscaping SEO | TRAC - SEO for NY Landscapers',
    metaDescription: 'Grow your New York landscaping business with TRAC\'s expert SEO. Attract clients for garden design, lawn maintenance, and urban landscaping in NYS. Get your free SEO quote!',
    heroTitle: 'New York Landscaping SEO: Cultivate Success in the Empire State',
    heroSubtitle: 'Reach More Landscaping Clients Across New York State with TRAC SEO',
    heroDescription: 'TRAC provides top-tier SEO services for New York State landscaping businesses, helping you connect with clients from the bustling urban environments of NYC and its suburbs to the picturesque landscapes upstate. We understand the diverse needs of New Yorkers, whether they seek sophisticated rooftop gardens in Manhattan, lush suburban lawns in Westchester, or large-scale commercial landscaping for properties across the state. Our SEO strategies are tailored to highlight your unique services, such as four-season garden maintenance, hardscaping for varied terrains, or specialized tree care. We focus on local SEO to target specific regions and cities within New York, technical optimization for a seamless online experience, and content marketing that showcases your expertise and beautiful New York projects. Partner with TRAC to significantly enhance your online visibility and attract a steady stream of qualified leads for your New York landscaping business.',
    heroImage: { src: STATE_HERO_IMAGE_SRC, alt: 'New York State landscape' },
    heroVideoUrl: 'https://www.youtube.com/embed/JBPmDzL-Xek', 
    formTitle: 'Free New York Landscaping SEO Analysis!',
  },
  resultsHeadline: 'SEO That Helps New York Landscaping Businesses Stand Out',
  readyToGrowHeadline: 'Ready to Elevate Your New York Landscaping Business with SEO?',
  servicesSectionHeadline: 'Targeted SEO for New York State Landscapers',
  servicesSectionSubheadline: 'Our New York landscaping SEO services are designed to connect you with clients across the Empire State, from urban beautification projects to expansive rural estates.',
  services: [
    { icon: Search, title: 'Local SEO for NY Landscapers', description: 'Optimize your GMB profile and local listings to rank for searches in specific New York regions, including NYC boroughs, Long Island, Upstate NY cities, and affluent suburbs.' },
    { icon: Building, title: 'Urban & Rooftop Garden SEO', description: 'Showcase your expertise in designing and maintaining urban landscapes, rooftop gardens, and green spaces for city dwellers and commercial properties in New York.' },
    { icon: TreePine, title: 'Four-Season Landscaping & Maintenance SEO', description: 'Attract clients seeking year-round landscaping services, including spring planting, summer maintenance, fall cleanups, and winter tree care across New York State.' },
    { icon: Mail, title: 'Content on NY Horticulture & Design Trends', description: 'Create valuable content about plant choices for New York climates, sustainable landscaping practices for the region, and design inspiration, establishing your authority.' },
  ],
  whyChooseSectionHeadline: 'Why TRAC is the Top Choice for New York Landscaping SEO',
  whyChooseIntro: 'TRAC provides specialized SEO solutions for landscaping businesses across New York State. We understand the diverse market and are committed to helping your business thrive.',
  whyChooseParagraph1: 'Our New York landscaping SEO team is adept at navigating the complexities of marketing in both dense urban areas and wider suburban/rural regions. We craft strategies that effectively target your desired clientele within NYS.',
  whyChooseParagraph2: 'With ethical SEO practices and a focus on measurable results, we help New York landscapers build a strong, sustainable online presence. Our transparent reporting keeps you informed of your progress.',
  whyChoosePoints: [
    { icon: 'TrendingUp', title: 'NYS Landscaping SEO Growth', description: 'Drive organic traffic and convert leads across New York State. We tailor SEO to maximize your reach and impact in a diverse and competitive landscaping market.' },
    { icon: 'Lightbulb', title: 'New York Market Savvy', description: 'Benefit from SEO strategies that understand New York\'s distinct regions, client expectations, and seasonal landscaping demands, from the Hamptons to the Hudson Valley.' },
    { icon: 'ShieldCheck', title: 'Dependable NY Landscaping SEO', description: 'Achieve lasting search visibility with ethical, white-hat SEO techniques designed for New York\'s landscaping businesses, building trust and a strong customer base.' },
  ],
  awards: {
    clutch: { headline: 'Top NY Landscaping SEO - Empire State Awards 2024', text: 'Recognized for impactful SEO strategies for New York State landscaping businesses.' },
    upcity: { headline: 'New York Landscaping SEO Leaders - UpCity 2024', text: 'Awarded for excellence in SEO and client success within the New York landscaping industry.' },
  },
  coverageData: {
    mainHeadline: "Serving Landscapers Across New York State",
    points: ["New York City Metro Area", "Long Island", "Westchester County", "Upstate New York (Albany, Buffalo, Rochester, Syracuse)", "The Hamptons", "Hudson Valley", "And more..."],
    mapImageUrl: STATE_COVERAGE_IMAGE_SRC,
    mapImageAlt: "Map of New York State showing service areas for landscaping SEO"
  },
  bottomFormTitle: 'Get Your Landscaping SEO Plan',
};
