
import type { LandscapingStatePageData } from '@/types';
import { Search, Settings, Users, Mail, TrendingUp, Lightbulb, ShieldCheck, TreePine, Sprout, Leaf, Sun } from 'lucide-react';
import { CONTACT_DETAILS } from '@/lib/constants';

const STATE_HERO_IMAGE_SRC = 'https://placehold.co/800x500.png'; 
const STATE_COVERAGE_IMAGE_SRC = 'https://placehold.co/600x400.png';

export const floridaLandscapingData: LandscapingStatePageData = {
  slug: 'florida',
  stateName: 'Florida',
  heroData: {
    pageTitle: 'Florida Landscaping SEO | TRAC - SEO for FL Landscapers',
    metaDescription: 'Elevate your Florida landscaping business with TRAC\'s expert SEO. Attract clients for tropical garden design, lawn care, and pool landscaping in FL. Get a free SEO proposal!',
    heroTitle: 'Florida Landscaping SEO: Make Your Business Shine in the Sunshine State',
    heroSubtitle: 'Attract More Landscaping Clients from Miami to Orlando with TRAC SEO',
    heroDescription: 'TRAC delivers specialized SEO services for Florida landscaping businesses, helping you thrive in a state known for its lush tropical environments and high demand for beautiful outdoor spaces. Whether you specialize in coastal landscaping, palm tree care, pool-enhancing designs, or sustainable Florida-friendly yards, we can boost your online visibility. Our team understands the unique challenges of landscaping in Florida, from hurricane preparedness to managing tropical pests and selecting heat-tolerant plants. We create SEO strategies that highlight your expertise and connect you with homeowners and commercial clients across the Sunshine State, including major markets like Miami, Orlando, Tampa, Jacksonville, and Fort Lauderdale. We focus on local search optimization, service-specific keyword targeting, and creating content that showcases your stunning Florida projects, attracting customers seeking your specific skills.',
    heroImage: { src: STATE_HERO_IMAGE_SRC, alt: 'Tropical Florida landscape', dataAiHint: 'florida landscape palm' },
    heroVideoUrl: 'https://www.youtube.com/embed/JBPmDzL-Xek', 
    formTitle: 'Free Florida Landscaping SEO Quote!',
  },
  resultsHeadline: 'Cultivating SEO Success for Florida\'s Green Industry',
  readyToGrowHeadline: 'Ready to Grow Your Florida Landscaping Business with Targeted SEO?',
  servicesSectionHeadline: 'Specialized SEO for Florida Landscaping Companies',
  servicesSectionSubheadline: 'Our Florida landscaping SEO expertise helps you connect with clients looking for services ranging from tropical garden design to robust lawn maintenance and hurricane-resistant landscaping solutions.',
  services: [
    { icon: Search, title: 'Local SEO for FL Landscapers', description: 'Get found by clients in your Florida service areas, from South Florida to the Panhandle. We optimize for local keywords like "Miami landscapers" or "Orlando lawn care".' },
    { icon: Sun, title: 'Tropical & Coastal Landscaping SEO', description: 'Showcase your expertise in Florida-specific landscaping, including saltwater-tolerant plants, palm tree installation, and coastal garden design to attract relevant clients.' },
    { icon: TreePine, title: 'Pool Landscaping & Outdoor Living SEO', description: 'Target clients looking to enhance their outdoor living spaces with beautiful pool landscaping, patios, and hardscaping services throughout Florida.' },
    { icon: Mail, title: 'Content on FL Plant Care & Design', description: 'Develop informative articles and guides on Florida gardening, plant selection for different FL zones, and sustainable landscaping practices to attract and engage potential customers.' },
  ],
  whyChooseSectionHeadline: 'Why TRAC is Your Premier Partner for Florida Landscaping SEO',
  whyChooseIntro: 'TRAC provides expert SEO solutions tailored for the unique Florida landscaping market. We help you navigate the Sunshine State\'s digital landscape to achieve sustainable growth.',
  whyChooseParagraph1: 'Our Florida landscaping SEO team understands the specific needs of businesses operating in a tropical climate with a high demand for year-round outdoor appeal. We craft strategies that highlight your unique selling propositions to homeowners, HOAs, and commercial properties.',
  whyChooseParagraph2: 'We are committed to ethical, results-driven SEO that builds your brand\'s authority and online visibility across Florida. Our transparent approach ensures you see the value of your investment.',
  whyChoosePoints: [
    { icon: 'TrendingUp', title: 'FL Landscaping SEO Growth', description: 'Increase organic leads and bookings across Florida. We focus on SEO that converts prospects into loyal landscaping clients in a competitive market.' },
    { icon: 'Lightbulb', title: 'Florida Market Expertise', description: 'Benefit from SEO strategies designed for the Florida landscaping industry, considering climate, popular plant choices, and regional client preferences from the Keys to Jacksonville.' },
    { icon: 'ShieldCheck', title: 'Trusted FL Landscaping SEO', description: 'Achieve long-term success with ethical SEO practices specifically adapted for Florida landscapers, building your online reputation and customer base.' },
  ],
  awards: {
    clutch: { headline: 'Top FL Landscaping SEO - Sunshine State Awards 2024', text: 'Recognized for driving exceptional SEO results for Florida landscaping companies.' },
    upcity: { headline: 'Florida Landscaping SEO Excellence - UpCity 2024', text: 'Awarded for leading SEO services and client success in the Florida green industry.' },
  },
  coverageData: {
    mainHeadline: "Serving Landscapers Throughout the Sunshine State - Florida",
    points: ["Miami-Dade County", "Orlando Metro Area", "Tampa Bay Region", "Jacksonville & Northeast Florida", "Southwest Florida (Naples, Fort Myers)", "The Palm Beaches", "And more..."],
    mapImageUrl: STATE_COVERAGE_IMAGE_SRC,
    mapImageAlt: "Map of Florida showing service areas for landscaping SEO"
  },
  bottomFormTitle: 'Get Your Landscaping SEO Plan',
};
