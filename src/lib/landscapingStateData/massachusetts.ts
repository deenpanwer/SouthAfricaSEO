
import type { LandscapingStatePageData } from '@/types';
import { Search, TreePine, Leaf, Sprout, TrendingUp, Lightbulb, ShieldCheck, Settings, Mail, Landmark } from 'lucide-react';
import { CONTACT_DETAILS } from '@/lib/constants';

const STATE_HERO_IMAGE_SRC = 'https://placehold.co/800x500.png';
const STATE_COVERAGE_IMAGE_SRC = 'https://placehold.co/600x400.png';

export const massachusettsLandscapingData: LandscapingStatePageData = {
  slug: 'massachusetts',
  stateName: 'Massachusetts',
  heroData: {
    pageTitle: 'Massachusetts Landscaping SEO | TRAC - SEO for MA Landscapers',
    metaDescription: 'Boost your Massachusetts landscaping business with TRAC\'s expert SEO. Attract clients for New England garden design, historic property landscaping, and lawn care in MA. Get your free SEO proposal!',
    heroTitle: 'Massachusetts Landscaping SEO: Cultivate Success in the Bay State',
    heroSubtitle: 'Connect with More Clients Across Massachusetts with TRAC\'s Historic SEO Insight',
    heroDescription: 'TRAC delivers specialized SEO services for Massachusetts landscaping businesses, helping you flourish from Boston and its historic suburbs to Cape Cod and the Berkshires. Whether you specialize in classic New England garden designs, maintaining historic landscapes, creating modern outdoor living spaces, or providing expert tree and lawn care, we can significantly enhance your online visibility. Our team understands the unique horticultural challenges and aesthetic preferences of Massachusetts, including designing for four distinct seasons and complementing diverse architectural styles. We create SEO strategies that highlight your expertise in local plant knowledge, sustainable practices, and creating beautiful, functional landscapes that thrive in MA. We focus on local search optimization to target your specific service areas, technical website enhancements for optimal performance, and content marketing that showcases your stunning Massachusetts projects and deep understanding of regional landscaping needs. Partner with TRAC to cultivate a robust online presence and attract more qualified leads for your Massachusetts landscaping company.',
    heroImage: { src: STATE_HERO_IMAGE_SRC, alt: 'Massachusetts New England landscape', dataAiHint: 'massachusetts landscape historic' },
    heroVideoUrl: 'https://www.youtube.com/embed/JBPmDzL-Xek',
    formTitle: 'Free Massachusetts Landscaping SEO Quote!',
  },
  resultsHeadline: 'SEO That Helps Massachusetts Landscaping Businesses Grow with Distinction',
  readyToGrowHeadline: 'Ready to Grow Your Massachusetts Landscaping Business with Premier SEO?',
  servicesSectionHeadline: 'Custom SEO for Massachusetts Landscaping Professionals',
  servicesSectionSubheadline: 'Our Massachusetts landscaping SEO expertise helps you connect with clients seeking services like classic New England garden design, four-season maintenance, and sustainable lawn care across the Bay State.',
  services: [
    { icon: Search, title: 'Local SEO for MA Landscapers', description: 'Get discovered by clients in your Massachusetts service areas, including Greater Boston, Worcester, Springfield, Cape Cod, and the Berkshires. We optimize GMB and local listings.' },
    { icon: Landmark, title: 'New England & Historic Landscape SEO', description: 'Highlight your expertise in designing and maintaining landscapes that complement Massachusetts\' historic architecture and traditional New England garden styles.' },
    { icon: Leaf, title: 'Four-Season Garden & Native Plant SEO', description: 'Improve visibility for services focusing on year-round garden interest, utilizing native MA plants, and sustainable landscaping practices appealing to Bay Staters.' },
    { icon: Mail, title: 'Content on MA Gardening & Property Care', description: 'Develop informative content on Massachusetts gardening tips, solutions for regional pests, seasonal lawn care, and ideas for enhancing outdoor spaces in New England.' },
  ],
  whyChooseSectionHeadline: 'Why TRAC is Your Ideal Partner for Massachusetts Landscaping SEO',
  whyChooseIntro: 'TRAC provides expert SEO solutions tailored for the Massachusetts landscaping market. We help you navigate the Bay State\'s digital landscape to achieve sustainable growth and connect with discerning clients.',
  whyChooseParagraph1: 'Our Massachusetts landscaping SEO specialists understand the unique needs of businesses serving a clientele that values both tradition and innovation. We craft strategies that highlight your ability to create beautiful, enduring landscapes for MA homes and businesses.',
  whyChooseParagraph2: 'We are committed to ethical, results-focused SEO that builds your brand\'s reputation and online reach across Massachusetts. Our transparent approach and detailed reporting ensure you see the tangible benefits of our partnership.',
  whyChoosePoints: [
    { icon: 'TrendingUp', title: 'MA Landscaping SEO Growth', description: 'Increase high-quality leads and bookings across Massachusetts. We focus on SEO that converts prospects looking for skilled and aesthetically astute MA landscaping services.' },
    { icon: 'Lightbulb', title: 'Massachusetts Market & Horticultural Savvy', description: 'Benefit from SEO strategies designed for the Massachusetts landscaping industry, considering its specific climate challenges, popular plant choices (e.g., hydrangeas, maples), and client preferences from coastal properties to historic estates.' },
    { icon: 'ShieldCheck', title: 'Trusted MA Landscaping SEO', description: 'Achieve enduring online success with ethical SEO practices specifically adapted for Massachusetts landscapers, building your brand and attracting your ideal customer base in the historic Bay State.' },
  ],
  awards: {
    clutch: { headline: 'Top MA Landscaping SEO - Bay State Green Awards 2024', text: 'Recognized for driving exceptional SEO results for Massachusetts landscaping companies, particularly those specializing in historic garden restoration and New England designs.' },
    upcity: { headline: 'Massachusetts Landscaping SEO Excellence - UpCity 2024', text: 'Awarded for leading SEO services and client success in the Massachusetts green industry, helping businesses thrive in a sophisticated market.' },
  },
  coverageData: {
    mainHeadline: "Serving Landscapers Across the Bay State - Massachusetts",
    points: ["Greater Boston Area (Boston, Cambridge, Newton)", "Worcester County", "Springfield & Western MA", "Cape Cod & Islands", "North Shore", "South Shore", "And more..."],
    mapImageUrl: STATE_COVERAGE_IMAGE_SRC,
    mapImageAlt: "Map of Massachusetts showing service areas for landscaping SEO"
  },
  bottomFormTitle: 'Get Your Landscaping SEO Plan',
};
