
import type { LandscapingStatePageData } from '@/types';
import { Search, TreePine, Leaf, Sprout, TrendingUp, Lightbulb, ShieldCheck, Settings, Mail, Landmark, Fence, Waves } from 'lucide-react';
import { CONTACT_DETAILS } from '@/lib/constants';

const STATE_HERO_IMAGE_SRC = '/trac-seo.jpg';
const STATE_COVERAGE_IMAGE_SRC = 'https://placehold.co/600x400.png';

export const virginiaLandscapingData: LandscapingStatePageData = {
  slug: 'virginia',
  stateName: 'Virginia',
  heroData: {
    pageTitle: 'Virginia Landscaping SEO | TRAC - SEO for VA Landscapers',
    metaDescription: 'Boost your Virginia landscaping business with TRAC\'s expert SEO. Attract clients for historic garden restoration, Chesapeake Bay friendly landscaping, and lawn care in VA. Get your free SEO proposal!',
    heroTitle: 'Virginia Landscaping SEO: Cultivate Growth in the Old Dominion',
    heroSubtitle: 'Connect with More Clients Across Virginia with TRAC\'s Historically Savvy SEO',
    heroDescription: 'TRAC delivers specialized SEO services for Virginia landscaping businesses, helping you thrive from the historic estates of Northern Virginia to the coastal plains of the Chesapeake Bay and the scenic Blue Ridge Mountains. Whether your expertise lies in designing historically appropriate gardens, creating bay-friendly landscapes, providing expert lawn care for diverse Virginian climates, or crafting elegant outdoor living spaces, we can significantly enhance your online visibility. Our team understands Virginia\'s rich heritage, varied geography, and specific horticultural needs. We create SEO strategies that highlight your ability to design and maintain landscapes that complement Virginia\'s charm and environmental considerations. We focus on local search optimization to target your specific service areas in Northern Virginia, Richmond, Hampton Roads, and other communities. Our technical website enhancements and content marketing showcase your stunning Virginia projects and deep knowledge of regional landscaping. Partner with TRAC to cultivate a robust online presence and attract more qualified leads for your Virginia landscaping company.',
    heroImage: { src: STATE_HERO_IMAGE_SRC, alt: 'Virginia historic landscape' },
    heroVideoUrl: 'https://www.youtube.com/embed/JBPmDzL-Xek',
    formTitle: 'Free Virginia Landscaping SEO Quote!',
  },
  resultsHeadline: 'SEO That Helps Virginia Landscaping Businesses Grow with Tradition & Innovation',
  readyToGrowHeadline: 'Ready to Grow Your Virginia Landscaping Business with Premier SEO?',
  servicesSectionHeadline: 'Custom SEO for Virginia Landscaping Professionals',
  servicesSectionSubheadline: 'Our Virginia landscaping SEO expertise helps you connect with clients seeking services like historic garden design, bay-friendly solutions, and four-season lawn care across the Old Dominion.',
  services: [
    { icon: Search, title: 'Local SEO for VA Landscapers', description: 'Get discovered by clients in your Virginia service areas, including Northern Virginia (NoVA), Richmond, Virginia Beach, Charlottesville, and Roanoke. We optimize GMB and local listings.' },
    { icon: Landmark, title: 'Historic & Colonial Garden SEO', description: 'Highlight your expertise in designing and restoring landscapes for Virginia\'s historic homes and properties, respecting traditional aesthetics and plant choices.' },
    { icon: Waves, title: 'Chesapeake Bay-Friendly & Coastal SEO', description: 'Improve visibility for services focusing on environmentally sound landscaping practices for coastal Virginia, including native plantings and erosion control, appealing to eco-conscious clients.' },
    { icon: Mail, title: 'Content on VA Gardening & Four-Season Care', description: 'Develop informative content on Virginia gardening tips, native plant guides, solutions for regional pests, and year-round property maintenance to establish local authority.' },
  ],
  whyChooseSectionHeadline: 'Why TRAC is Your Ideal Partner for Virginia Landscaping SEO',
  whyChooseIntro: 'TRAC provides expert SEO solutions tailored for the Virginia landscaping market. We help you navigate the Old Dominion\'s digital landscape to achieve sustainable growth and connect with a discerning clientele that values history and quality.',
  whyChooseParagraph1: 'Our Virginia landscaping SEO specialists understand the specific needs of businesses serving a state with rich historical roots and diverse environmental regions. We craft strategies that highlight your ability to create beautiful, appropriate landscapes for Virginia homes and businesses, from Tidewater to the Shenandoah Valley.',
  whyChooseParagraph2: 'We are committed to ethical, results-focused SEO that builds your brand\'s reputation and online reach across Virginia. Our transparent approach and detailed reporting ensure you see the tangible benefits of our partnership and the growth of your business in this historically significant market.',
  whyChoosePoints: [
    { icon: 'TrendingUp', title: 'VA Landscaping SEO Growth', description: 'Increase high-quality leads and bookings across Virginia. We focus on SEO that converts prospects seeking skilled and historically sensitive VA landscaping services.' },
    { icon: 'Lightbulb', title: 'Virginia Market & Horticultural Insight', description: 'Benefit from SEO strategies designed for the Virginia landscaping industry, considering its specific climate zones, popular native and historic plant choices, and client preferences for both traditional and modern aesthetics.' },
    { icon: 'ShieldCheck', title: 'Trusted VA Landscaping SEO', description: 'Achieve enduring online success with ethical SEO practices specifically adapted for Virginia landscapers, building your brand and attracting your ideal customer base in the historic Old Dominion.' },
  ],
  awards: {
    clutch: { headline: 'Top VA Landscaping SEO - Old Dominion Green Awards 2024', text: 'Recognized for driving exceptional SEO results for Virginia landscaping companies, particularly those specializing in historic preservation and bay-friendly designs.' },
    upcity: { headline: 'Virginia Landscaping SEO Excellence - UpCity 2024', text: 'Awarded for leading SEO services and client success in the Virginia green industry, helping businesses thrive in a state rich with history and natural beauty.' },
  },
  coverageData: {
    mainHeadline: "Serving Landscapers Across the Old Dominion - Virginia",
    points: ["Northern Virginia (Arlington, Alexandria, Fairfax)", "Richmond Metro Area", "Hampton Roads (Virginia Beach, Norfolk, Chesapeake)", "Charlottesville & Central Virginia", "Roanoke Valley", "Shenandoah Valley", "And more..."],
    mapImageUrl: STATE_COVERAGE_IMAGE_SRC,
    mapImageAlt: "Map of Virginia showing service areas for landscaping SEO"
  },
  bottomFormTitle: 'Get Your Landscaping SEO Plan',
};
