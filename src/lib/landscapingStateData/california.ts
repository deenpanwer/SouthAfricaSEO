
import type { LandscapingStatePageData } from '@/types';
import { Search, Settings, Users, Mail, TrendingUp, Lightbulb, ShieldCheck, TreePine, Sprout, Leaf, MapPin } from 'lucide-react';
import { CONTACT_DETAILS } from '@/lib/constants';

const STATE_HERO_IMAGE_SRC = '/trac-seo.jpg'; // Generic placeholder
const STATE_COVERAGE_IMAGE_SRC = 'https://placehold.co/600x400.png'; // Generic placeholder

export const californiaLandscapingData: LandscapingStatePageData = {
  slug: 'california',
  stateName: 'California',
  heroData: {
    pageTitle: 'California Landscaping SEO | TRAC - SEO for CA Landscapers',
    metaDescription: 'Boost your California landscaping business with TRAC\'s expert SEO. Attract more clients for lawn care, garden design, and tree services in CA. Get your free SEO proposal!',
    heroTitle: 'California Landscaping SEO: Grow Your Golden State Business',
    heroSubtitle: 'Dominate Search for Landscaping Services Across California with TRAC',
    heroDescription: 'TRAC provides specialized SEO services for California landscaping companies, from San Diego to San Francisco and beyond. The Golden State\'s diverse climates and discerning clientele demand a sophisticated online presence. We help landscapers specializing in drought-tolerant designs, sustainable gardening, luxury estates, or commercial properties to significantly increase their online visibility and attract a steady stream of qualified leads. Our expert team understands the unique challenges of the California market, including water conservation regulations and varied horticultural zones. We craft SEO strategies that resonate with your target audience, whether they are in Los Angeles, the Bay Area, Sacramento, or smaller communities. We focus on local SEO, technical website optimization, and content that showcases your expertise in California-native plants, water-wise irrigation, and stunning outdoor living spaces. Partner with TRAC to cultivate a thriving online presence for your California landscaping business and achieve measurable growth.',
    heroImage: { src: STATE_HERO_IMAGE_SRC, alt: 'Lush California landscape' },
    heroVideoUrl: 'https://www.youtube.com/embed/JBPmDzL-Xek', // Generic video
    formTitle: 'Free California Landscaping SEO Quote!',
  },
  resultsHeadline: 'SEO Results That Make California Landscaping Businesses Blossom',
  readyToGrowHeadline: 'Ready to Grow Your California Landscaping Business with SEO?',
  servicesSectionHeadline: 'Targeted SEO Services for California Landscapers',
  servicesSectionSubheadline: 'Our California landscaping SEO strategies are designed to put your business in front of clients actively searching for your expertise, from lawn maintenance to full outdoor design.',
  services: [
    { icon: Search, title: 'Local SEO for CA Landscapers', description: 'Optimize your Google Business Profile and local citations to rank higher in California city and neighborhood searches (e.g., "landscapers near me Los Angeles", "garden design San Francisco").' },
    { icon: Leaf, title: 'Drought-Tolerant & Native Plant SEO', description: 'Showcase your expertise in water-wise landscaping and California native plants, attracting environmentally conscious clients through targeted content and keywords.' },
    { icon: TreePine, title: 'Service Page Optimization', description: 'Enhance visibility for specific services like tree care, lawn maintenance, hardscaping, and irrigation system installation across California.' },
    { icon: Mail, title: 'Lead Generation Content Marketing', description: 'Create engaging blog posts, case studies, and guides that attract and convert potential California clients (e.g., "Best Low-Water Plants for Southern California Gardens").' },
  ],
  whyChooseSectionHeadline: 'Why TRAC for Your California Landscaping SEO?',
  whyChooseIntro: 'TRAC delivers customized, results-driven SEO solutions for landscaping businesses throughout California. We understand the Golden State market and how to make your services stand out.',
  whyChooseParagraph1: 'Our California landscaping SEO experts understand the local market dynamics, from the diverse climate zones to the specific needs of homeowners and commercial clients. We tailor strategies to achieve your business goals, whether it\'s increasing leads in a specific city or building a statewide reputation.',
  whyChooseParagraph2: 'We combine proven SEO techniques with transparent reporting to ensure your California landscaping business achieves sustainable online growth. Our commitment is to ethical practices and measurable outcomes, making us a trusted partner.',
  whyChoosePoints: [
    { icon: 'TrendingUp', title: 'CA Landscaping SEO Growth', description: 'Drive more organic traffic and generate high-quality leads in the competitive California market. We focus on SEO strategies that convert visitors into clients.' },
    { icon: 'Lightbulb', title: 'Local California Expertise', description: 'Leverage SEO strategies tailored specifically to the California market, its unique horticultural needs, and diverse client base from urban centers to sprawling estates.' },
    { icon: 'ShieldCheck', title: 'Ethical SEO for CA Landscapers', description: 'Achieve sustainable, long-term results through white-hat SEO techniques that build trust with search engines and California clients.' },
  ],
  awards: {
    clutch: { headline: 'Top CA Landscaping SEO - Green Industry Awards 2024', text: 'Recognized for delivering impactful SEO results for California landscaping businesses.' },
    upcity: { headline: 'California Landscaping SEO Excellence - UpCity 2024', text: 'Awarded for outstanding SEO services and client success in the California landscaping sector.' },
  },
  coverageData: {
    mainHeadline: "Serving Landscapers Across California",
    points: ["Los Angeles Area", "San Francisco Bay Area", "San Diego County", "Sacramento Region", "Orange County", "Inland Empire", "Central Valley", "And more..."],
    mapImageUrl: STATE_COVERAGE_IMAGE_SRC,
    mapImageAlt: "Map of California showing service areas for landscaping SEO"
  },
  bottomFormTitle: 'Get Your Landscaping SEO Proposal',
};
