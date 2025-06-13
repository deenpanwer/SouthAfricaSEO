
import type { LandscapingStatePageData } from '@/types';
import { Search, Settings, Users, Mail, TrendingUp, Lightbulb, ShieldCheck, TreePine, Sprout, Leaf, Mountain } from 'lucide-react';
import { CONTACT_DETAILS } from '@/lib/constants';

const STATE_HERO_IMAGE_SRC = 'https://placehold.co/800x500.png'; 
const STATE_COVERAGE_IMAGE_SRC = 'https://placehold.co/600x400.png';

export const coloradoLandscapingData: LandscapingStatePageData = {
  slug: 'colorado',
  stateName: 'Colorado',
  heroData: {
    pageTitle: 'Colorado Landscaping SEO | TRAC - SEO for CO Landscapers',
    metaDescription: 'Elevate your Colorado landscaping business with TRAC\'s specialized SEO. Attract clients for mountain landscaping, xeriscaping, and lawn care in CO. Get your free SEO proposal!',
    heroTitle: 'Colorado Landscaping SEO: Reach New Heights in the Centennial State',
    heroSubtitle: 'Connect with More Landscaping Clients from Denver to Aspen with TRAC SEO',
    heroDescription: 'TRAC offers expert SEO services for Colorado landscaping businesses, helping you thrive in a state renowned for its stunning natural beauty and challenging high-altitude environments. Whether you specialize in mountain-adaptive designs, xeriscaping, creating outdoor living spaces for the active Colorado lifestyle, or commercial landscaping for ski resorts and Front Range communities, we can elevate your online presence. Our team understands the unique demands of Colorado landscaping, including water conservation, native plant selection for diverse elevations, and designing for four distinct seasons. We create SEO strategies that showcase your expertise and connect you with homeowners and businesses in Denver, Boulder, Colorado Springs, Fort Collins, and mountain towns. We focus on local search optimization, service-specific keyword targeting (e.g., "fire mitigation landscaping Colorado"), and content that highlights your stunning Colorado projects and knowledge of regional horticulture. Partner with TRAC to cultivate a robust online presence and attract more qualified leads for your Colorado landscaping company.',
    heroImage: { src: STATE_HERO_IMAGE_SRC, alt: 'Colorado mountain landscape', dataAiHint: 'colorado landscape mountain' },
    heroVideoUrl: 'https://www.youtube.com/embed/JBPmDzL-Xek', 
    formTitle: 'Free Colorado Landscaping SEO Quote!',
  },
  resultsHeadline: 'SEO That Helps Colorado Landscaping Businesses Scale Peaks',
  readyToGrowHeadline: 'Ready to Elevate Your Colorado Landscaping Business with Strategic SEO?',
  servicesSectionHeadline: 'Custom SEO for Colorado Landscaping Professionals',
  servicesSectionSubheadline: 'Our Colorado landscaping SEO expertise helps you connect with clients seeking specialized services for mountain environments, water-wise gardens, and beautiful outdoor living spaces across the state.',
  services: [
    { icon: Search, title: 'Local SEO for CO Landscapers', description: 'Get discovered by clients in your Colorado service areas, from the Denver Metro to mountain communities. We optimize for local keywords like "Boulder xeriscaping" or "Aspen garden design".' },
    { icon: Mountain, title: 'Mountain & High-Altitude Landscaping SEO', description: 'Showcase your expertise in designing and maintaining landscapes suited for Colorado\'s challenging mountain climates and high elevations, attracting discerning clients.' },
    { icon: Leaf, title: 'Xeriscaping & Water-Wise SEO', description: 'Target clients interested in sustainable, drought-tolerant landscaping solutions and xeriscaping, a growing demand in many parts of Colorado.' },
    { icon: Mail, title: 'Content on CO Native Plants & Fire Safety', description: 'Develop informative content on Colorado native plants, fire-wise landscaping, and seasonal garden care, establishing your authority and attracting organic traffic.' },
  ],
  whyChooseSectionHeadline: 'Why TRAC is Your Best Choice for Colorado Landscaping SEO',
  whyChooseIntro: 'TRAC provides expert SEO solutions tailored for the unique Colorado landscaping market. We help you navigate the Centennial State\'s digital terrain to achieve sustainable growth and visibility.',
  whyChooseParagraph1: 'Our Colorado landscaping SEO specialists understand the specific needs of businesses operating in diverse environments, from urban centers to remote mountain properties. We craft strategies that highlight your ability to create beautiful, resilient landscapes in Colorado.',
  whyChooseParagraph2: 'We are committed to ethical, results-focused SEO that builds your brand\'s reputation and online reach across Colorado. Our transparent approach ensures you see the value of our partnership.',
  whyChoosePoints: [
    { icon: 'TrendingUp', title: 'CO Landscaping SEO Growth', description: 'Increase high-quality leads and bookings throughout Colorado. We focus on SEO that converts prospects looking for specialized Colorado landscaping services.' },
    { icon: 'Lightbulb', title: 'Colorado Market & Climate Expertise', description: 'Benefit from SEO strategies designed for the Colorado landscaping industry, considering high-altitude challenges, water conservation, native plant palettes, and client preferences from the Front Range to the Western Slope.' },
    { icon: 'ShieldCheck', title: 'Trusted CO Landscaping SEO', description: 'Achieve enduring online success with ethical SEO practices specifically adapted for Colorado landscapers, building your brand and attracting your ideal customers.' },
  ],
  awards: {
    clutch: { headline: 'Top CO Landscaping SEO - Rocky Mountain Awards 2024', text: 'Recognized for driving exceptional SEO results for Colorado landscaping companies, especially those specializing in high-altitude and sustainable design.' },
    upcity: { headline: 'Colorado Landscaping SEO Excellence - UpCity 2024', text: 'Awarded for leading SEO services and client success in the Colorado green industry, helping businesses thrive in a unique environment.' },
  },
  coverageData: {
    mainHeadline: "Serving Landscapers Across the Centennial State - Colorado",
    points: ["Denver Metro Area", "Boulder County", "Colorado Springs", "Fort Collins & Northern Colorado", "Mountain Towns (Aspen, Vail, Telluride)", "Western Slope", "And more..."],
    mapImageUrl: STATE_COVERAGE_IMAGE_SRC,
    mapImageAlt: "Map of Colorado showing service areas for landscaping SEO"
  },
  bottomFormTitle: 'Get Your Landscaping SEO Plan',
};
