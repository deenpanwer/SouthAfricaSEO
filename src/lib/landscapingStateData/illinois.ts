
import type { LandscapingStatePageData } from '@/types';
import { Search, TreePine, Leaf, Sprout, TrendingUp, Lightbulb, ShieldCheck, Settings, Mail } from 'lucide-react';
import { CONTACT_DETAILS } from '@/lib/constants';

const STATE_HERO_IMAGE_SRC = '/trac-seo.jpg'; 
const STATE_COVERAGE_IMAGE_SRC = 'https://placehold.co/600x400.png';

export const illinoisLandscapingData: LandscapingStatePageData = {
  slug: 'illinois',
  stateName: 'Illinois',
  heroData: {
    pageTitle: 'Illinois Landscaping SEO | TRAC - SEO for IL Landscapers',
    metaDescription: 'Elevate your Illinois landscaping business with TRAC\'s expert SEO. Attract clients for lawn care, garden design, and commercial landscaping in IL. Get a free SEO quote!',
    heroTitle: 'Illinois Landscaping SEO: Grow Your Business in the Prairie State',
    heroSubtitle: 'Connect with More Landscaping Clients from Chicago to Springfield with TRAC SEO',
    heroDescription: 'TRAC provides expert SEO services for Illinois landscaping companies, enabling you to flourish in a state with diverse urban and suburban landscapes. Whether you serve the dense Chicago metropolitan area, affluent North Shore suburbs, or communities across Central and Southern Illinois, we tailor strategies to your unique market. Our SEO services help landscapers specializing in four-season garden design, commercial property maintenance, residential lawn care, or specialized hardscaping to significantly boost their online visibility and attract a consistent flow of qualified local leads. We understand Illinois\' climate challenges and horticultural needs, from cold winters to hot summers. Our approach includes local SEO optimization, technical website enhancements, and content marketing that showcases your Illinois projects and expertise in creating beautiful, resilient outdoor spaces. Partner with TRAC to cultivate a dominant online presence for your Illinois landscaping business and achieve sustained growth.',
    heroImage: { src: STATE_HERO_IMAGE_SRC, alt: 'Illinois prairie landscape with flowers' },
    heroVideoUrl: 'https://www.youtube.com/embed/JBPmDzL-Xek', 
    formTitle: 'Free Illinois Landscaping SEO Analysis!',
  },
  resultsHeadline: 'SEO That Cultivates Success for Illinois Landscaping Businesses',
  readyToGrowHeadline: 'Ready to Enhance Your Illinois Landscaping Business with Strategic SEO?',
  servicesSectionHeadline: 'Custom SEO for Illinois Landscaping Professionals',
  servicesSectionSubheadline: 'Our Illinois landscaping SEO expertise helps you connect with clients seeking a range of services, from urban garden design in Chicago to expansive lawn care in suburban communities.',
  services: [
    { icon: Search, title: 'Local SEO for IL Landscapers', description: 'Get discovered by clients in your Illinois service areas, from Chicago and its suburbs (e.g., Naperville, Evanston) to cities like Peoria and Rockford. We optimize GMB and local listings.' },
    { icon: Leaf, title: 'Four-Season & Prairie-Style SEO', description: 'Highlight your expertise in creating landscapes that thrive in Illinois\' distinct four seasons, including prairie-style gardens and native plantings popular in the Midwest.' },
    { icon: TreePine, title: 'Commercial & Residential Maintenance SEO', description: 'Improve visibility for commercial property landscaping and ongoing residential lawn care and garden maintenance services throughout Illinois.' },
    { icon: Mail, title: 'Content on IL Gardening & Pest Control', description: 'Develop informative content on Illinois gardening tips, solutions for common pests and plant diseases in the region, and seasonal care, establishing your local authority.' },
  ],
  whyChooseSectionHeadline: 'Why TRAC is Your Ideal Partner for Illinois Landscaping SEO',
  whyChooseIntro: 'TRAC provides expert SEO solutions tailored for the Illinois landscaping market. We help you navigate the Prairie State\'s digital environment to achieve lasting growth and greater visibility.',
  whyChooseParagraph1: 'Our Illinois landscaping SEO specialists understand the specific needs of businesses operating in a state with both major urban centers and extensive agricultural regions. We craft strategies that highlight your unique capabilities to create appealing and functional landscapes for Illinois clients.',
  whyChooseParagraph2: 'We are committed to ethical, results-focused SEO that builds your brand\'s reputation and online reach across Illinois. Our transparent approach and detailed reporting ensure you understand the impact of our services.',
  whyChoosePoints: [
    { icon: 'TrendingUp', title: 'IL Landscaping SEO Growth', description: 'Increase high-quality leads and bookings across Illinois. We focus on SEO that converts prospects looking for reliable and creative Illinois landscaping services.' },
    { icon: 'Lightbulb', title: 'Illinois Market & Climate Expertise', description: 'Benefit from SEO strategies designed for the Illinois landscaping industry, considering its variable climate, soil types, and client preferences from Chicagoland to downstate communities.' },
    { icon: 'ShieldCheck', title: 'Trusted IL Landscaping SEO', description: 'Achieve enduring online success with ethical SEO practices specifically adapted for Illinois landscapers, building your brand and attracting your ideal customer base in the Midwest.' },
  ],
  awards: {
    clutch: { headline: 'Top IL Landscaping SEO - Prairie State Awards 2024', text: 'Recognized for driving exceptional SEO results for Illinois landscaping companies, including those in urban and commercial landscaping.' },
    upcity: { headline: 'Illinois Landscaping SEO Excellence - UpCity 2024', text: 'Awarded for leading SEO services and client success in the Illinois green industry, helping businesses flourish in a diverse market.' },
  },
  coverageData: {
    mainHeadline: "Serving Landscapers Across the Prairie State - Illinois",
    points: ["Chicagoland (Chicago & Suburbs)", "Rockford Area", "Peoria Metro", "Springfield Region", "Champaign-Urbana", "Quad Cities (Illinois side)", "And more..."],
    mapImageUrl: STATE_COVERAGE_IMAGE_SRC,
    mapImageAlt: "Map of Illinois showing service areas for landscaping SEO"
  },
  bottomFormTitle: 'Get Your Landscaping SEO Plan',
};
    