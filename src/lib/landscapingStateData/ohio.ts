
import type { LandscapingStatePageData } from '@/types';
import { Search, TreePine, Leaf, Sprout, TrendingUp, Lightbulb, ShieldCheck, Settings, Mail } from 'lucide-react';
import { CONTACT_DETAILS } from '@/lib/constants';

const STATE_HERO_IMAGE_SRC = 'https://placehold.co/800x500.png'; 
const STATE_COVERAGE_IMAGE_SRC = 'https://placehold.co/600x400.png';

export const ohioLandscapingData: LandscapingStatePageData = {
  slug: 'ohio',
  stateName: 'Ohio',
  heroData: {
    pageTitle: 'Ohio Landscaping SEO | TRAC - SEO for OH Landscapers',
    metaDescription: 'Boost your Ohio landscaping business with TRAC\'s specialized SEO. Attract clients for lawn care, garden design, and hardscaping in OH. Get your free SEO proposal!',
    heroTitle: 'Ohio Landscaping SEO: Grow Your Business in the Buckeye State',
    heroSubtitle: 'Connect with More Landscaping Clients from Cleveland to Cincinnati with TRAC SEO',
    heroDescription: 'TRAC delivers expert SEO services for Ohio landscaping businesses, helping you thrive in a state known for its diverse landscapes and strong community focus. Whether you serve clients in major cities like Cleveland, Columbus, and Cincinnati, or in suburban and rural areas, we tailor strategies to your unique market. Our SEO services help landscapers specializing in four-season garden design, lawn care programs, sustainable landscaping, or custom hardscaping projects to significantly increase their online visibility and attract a consistent flow of qualified local leads. We understand Ohio\'s climate, native plant species, and homeowner preferences. Our approach includes local SEO optimization, technical website enhancements, and content marketing that showcases your Ohio projects and expertise in creating beautiful, functional outdoor spaces. Partner with TRAC to cultivate a robust online presence for your Ohio landscaping business and achieve measurable, sustainable growth.',
    heroImage: { src: STATE_HERO_IMAGE_SRC, alt: 'Ohio landscape with buckeye trees', dataAiHint: 'ohio landscape garden' },
    heroVideoUrl: 'https://www.youtube.com/embed/JBPmDzL-Xek', 
    formTitle: 'Free Ohio Landscaping SEO Quote!',
  },
  resultsHeadline: 'SEO That Helps Ohio Landscaping Businesses Prosper',
  readyToGrowHeadline: 'Ready to Enhance Your Ohio Landscaping Business with Strategic SEO?',
  servicesSectionHeadline: 'Custom SEO for Ohio Landscaping Professionals',
  servicesSectionSubheadline: 'Our Ohio landscaping SEO expertise helps you connect with clients seeking services from lawn maintenance and garden installation to intricate hardscape design across the Buckeye State.',
  services: [
    { icon: Search, title: 'Local SEO for OH Landscapers', description: 'Get discovered by clients in your Ohio service areas, including Cleveland, Columbus, Cincinnati, Toledo, and Akron. We optimize GMB and local listings for maximum visibility.' },
    { icon: Leaf, title: 'Four-Season & Native Ohio Plant SEO', description: 'Highlight your expertise in creating landscapes that thrive in Ohio\'s four distinct seasons, featuring native plants and sustainable practices appealing to Ohioans.' },
    { icon: TreePine, title: 'Lawn Care & Hardscaping SEO', description: 'Improve visibility for essential services like comprehensive lawn care programs, tree services, and hardscape construction (patios, walkways) throughout Ohio.' },
    { icon: Mail, title: 'Content on OH Gardening & Outdoor Living', description: 'Develop informative content on Ohio gardening tips, solutions for regional plant health issues, and outdoor living space ideas, establishing your local expertise.' },
  ],
  whyChooseSectionHeadline: 'Why TRAC is Your Top Choice for Ohio Landscaping SEO',
  whyChooseIntro: 'TRAC provides expert SEO solutions tailored for the Ohio landscaping market. We help you navigate the Buckeye State\'s digital landscape to achieve sustainable growth and increased client acquisition.',
  whyChooseParagraph1: 'Our Ohio landscaping SEO specialists understand the specific needs of businesses operating in a state with varied climates and strong community values. We craft strategies that highlight your ability to create beautiful and enduring landscapes for Ohio clients.',
  whyChooseParagraph2: 'We are committed to ethical, results-focused SEO that builds your brand\'s reputation and online reach across Ohio. Our transparent approach and detailed reporting ensure you see the value of our partnership and the growth of your business.',
  whyChoosePoints: [
    { icon: 'TrendingUp', title: 'OH Landscaping SEO Growth', description: 'Increase high-quality leads and bookings across Ohio. We focus on SEO that converts prospects seeking reliable and skilled Ohio landscaping services.' },
    { icon: 'Lightbulb', title: 'Ohio Market & Horticultural Expertise', description: 'Benefit from SEO strategies designed for the Ohio landscaping industry, considering its specific climate challenges, popular plant choices, and client preferences from Lake Erie shores to the Ohio River Valley.' },
    { icon: 'ShieldCheck', title: 'Trusted OH Landscaping SEO', description: 'Achieve enduring online success with ethical SEO practices specifically adapted for Ohio landscapers, building your brand and attracting your ideal customer base in the Buckeye State.' },
  ],
  awards: {
    clutch: { headline: 'Top OH Landscaping SEO - Buckeye Awards 2024', text: 'Recognized for driving exceptional SEO results for Ohio landscaping companies, particularly those focusing on sustainable and four-season designs.' },
    upcity: { headline: 'Ohio Landscaping SEO Excellence - UpCity 2024', text: 'Awarded for leading SEO services and client success in the Ohio green industry, helping businesses grow strong in a diverse market.' },
  },
  coverageData: {
    mainHeadline: "Serving Landscapers Across the Buckeye State - Ohio",
    points: ["Columbus Metro Area", "Cleveland-Akron-Canton Region", "Cincinnati Metro Area", "Toledo & Northwest Ohio", "Dayton & Miami Valley", "Youngstown Area", "And more..."],
    mapImageUrl: STATE_COVERAGE_IMAGE_SRC,
    mapImageAlt: "Map of Ohio showing service areas for landscaping SEO"
  },
  bottomFormTitle: 'Get Your Landscaping SEO Plan',
};
    