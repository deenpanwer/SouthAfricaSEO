
import type { LandscapingStatePageData } from '@/types';
import { Search, TreePine, Leaf, Sprout, TrendingUp, Lightbulb, ShieldCheck, Settings, Mail, Waves, Building } from 'lucide-react';
import { CONTACT_DETAILS } from '@/lib/constants';

const STATE_HERO_IMAGE_SRC = 'https://placehold.co/800x500.png';
const STATE_COVERAGE_IMAGE_SRC = 'https://placehold.co/600x400.png';

export const newJerseyLandscapingData: LandscapingStatePageData = {
  slug: 'new-jersey',
  stateName: 'New Jersey',
  heroData: {
    pageTitle: 'New Jersey Landscaping SEO | TRAC - SEO for NJ Landscapers',
    metaDescription: 'Boost your New Jersey landscaping business with TRAC\'s expert SEO. Attract clients for garden design, lawn care, and hardscaping in NJ. Get your free SEO proposal!',
    heroTitle: 'New Jersey Landscaping SEO: Grow Your Business in the Garden State',
    heroSubtitle: 'Connect with More Clients Across New Jersey with TRAC\'s Targeted SEO',
    heroDescription: 'TRAC delivers specialized SEO services for New Jersey landscaping businesses, helping you flourish from the dense suburban communities of North Jersey to the coastal towns of the Jersey Shore and the agricultural areas of South Jersey. Whether your expertise lies in creating beautiful residential gardens, maintaining pristine commercial properties, designing intricate hardscapes, or providing expert lawn care and seasonal cleanups, we can significantly enhance your online visibility. Our team understands the unique horticultural needs and aesthetic preferences across New Jersey, including designing for four distinct seasons and varying soil conditions. We create SEO strategies that highlight your expertise in local plant knowledge, sustainable practices, and creating functional, attractive outdoor living spaces. We focus on local search optimization to target your specific service areas, technical website enhancements for optimal performance, and content marketing that showcases your stunning New Jersey projects and deep understanding of regional landscaping needs. Partner with TRAC to cultivate a robust online presence and attract more qualified leads for your New Jersey landscaping company.',
    heroImage: { src: STATE_HERO_IMAGE_SRC, alt: 'New Jersey suburban landscape', dataAiHint: 'new jersey landscape suburban' },
    heroVideoUrl: 'https://www.youtube.com/embed/JBPmDzL-Xek',
    formTitle: 'Free New Jersey Landscaping SEO Quote!',
  },
  resultsHeadline: 'SEO That Helps New Jersey Landscaping Businesses Thrive Year-Round',
  readyToGrowHeadline: 'Ready to Grow Your New Jersey Landscaping Business with Expert SEO?',
  servicesSectionHeadline: 'Custom SEO for New Jersey Landscaping Professionals',
  servicesSectionSubheadline: 'Our New Jersey landscaping SEO expertise helps you connect with clients seeking services like four-season garden design, lawn maintenance, and hardscape solutions across the Garden State.',
  services: [
    { icon: Search, title: 'Local SEO for NJ Landscapers', description: 'Get discovered by clients in your New Jersey service areas, including North, Central, and South Jersey. We optimize GMB and local listings for towns like Princeton, Montclair, Cherry Hill, and coastal communities.' },
    { icon: Building, title: 'Suburban & Estate Landscaping SEO', description: 'Highlight your expertise in designing and maintaining landscapes for New Jersey\'s diverse residential properties, from suburban homes to larger estates, focusing on curb appeal and functionality.' },
    { icon: Leaf, title: 'Four-Season Garden & Lawn Care SEO', description: 'Improve visibility for services focusing on year-round garden health, seasonal planting, comprehensive lawn care programs, and fall/spring cleanup services essential in NJ.' },
    { icon: Mail, title: 'Content on NJ Gardening & Property Enhancement', description: 'Develop informative content on New Jersey gardening tips, plant selections for NJ climates, pest and disease control, and ideas for enhancing outdoor living spaces with patios and walkways.' },
  ],
  whyChooseSectionHeadline: 'Why TRAC is Your Ideal Partner for New Jersey Landscaping SEO',
  whyChooseIntro: 'TRAC provides expert SEO solutions tailored for the New Jersey landscaping market. We help you navigate the Garden State\'s competitive digital landscape to achieve sustainable growth and connect with discerning clients.',
  whyChooseParagraph1: 'Our New Jersey landscaping SEO specialists understand the specific needs of businesses serving a varied clientele, from bustling urban-adjacent suburbs to tranquil coastal areas. We craft strategies that showcase your ability to create beautiful, functional landscapes that meet the demands of New Jersey homeowners and businesses.',
  whyChooseParagraph2: 'We are committed to ethical, results-focused SEO that builds your brand\'s reputation and online reach across New Jersey. Our transparent approach and detailed reporting ensure you understand the impact of our services and the growth of your business in a dynamic market.',
  whyChoosePoints: [
    { icon: 'TrendingUp', title: 'NJ Landscaping SEO Growth', description: 'Increase high-quality leads and bookings across New Jersey. We focus on SEO that converts prospects looking for skilled and reliable NJ landscaping services.' },
    { icon: 'Lightbulb', title: 'New Jersey Market & Horticultural Insight', description: 'Benefit from SEO strategies designed for the New Jersey landscaping industry, considering its specific climate zones, popular plant choices for diverse soil types, and client preferences for both traditional and modern designs.' },
    { icon: 'ShieldCheck', title: 'Trusted NJ Landscaping SEO', description: 'Achieve enduring online success with ethical SEO practices specifically adapted for New Jersey landscapers, building your brand and attracting your ideal customer base in the densely populated Garden State.' },
  ],
  awards: {
    clutch: { headline: 'Top NJ Landscaping SEO - Garden State Green Awards 2024', text: 'Recognized for driving exceptional SEO results for New Jersey landscaping companies, particularly those specializing in suburban design and seasonal maintenance.' },
    upcity: { headline: 'New Jersey Landscaping SEO Excellence - UpCity 2024', text: 'Awarded for leading SEO services and client success in the New Jersey green industry, helping businesses flourish in a competitive region.' },
  },
  coverageData: {
    mainHeadline: "Serving Landscapers Across the Garden State - New Jersey",
    points: ["North Jersey (Bergen, Essex, Hudson counties)", "Central Jersey (Middlesex, Monmouth, Somerset counties)", "South Jersey (Camden, Burlington, Atlantic counties)", "Jersey Shore Communities", "Princeton Area", "And more..."],
    mapImageUrl: STATE_COVERAGE_IMAGE_SRC,
    mapImageAlt: "Map of New Jersey showing service areas for landscaping SEO"
  },
  bottomFormTitle: 'Get Your Landscaping SEO Plan',
};
