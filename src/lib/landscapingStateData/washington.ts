
import type { LandscapingStatePageData } from '@/types';
import { Search, TreePine, Leaf, Sprout, TrendingUp, Lightbulb, ShieldCheck, Settings, Mail, Waves } from 'lucide-react';
import { CONTACT_DETAILS } from '@/lib/constants';

const STATE_HERO_IMAGE_SRC = 'https://placehold.co/800x500.png';
const STATE_COVERAGE_IMAGE_SRC = 'https://placehold.co/600x400.png';

export const washingtonLandscapingData: LandscapingStatePageData = {
  slug: 'washington',
  stateName: 'Washington',
  heroData: {
    pageTitle: 'Washington Landscaping SEO | TRAC - SEO for WA Landscapers',
    metaDescription: 'Boost your Washington landscaping business with TRAC\'s expert SEO. Attract clients for PNW native gardens, sustainable design, and lawn care in WA. Get your free SEO proposal!',
    heroTitle: 'Washington Landscaping SEO: Grow Your Business in the Evergreen State',
    heroSubtitle: 'Connect with More Clients Across Washington with TRAC\'s PNW-Focused SEO',
    heroDescription: 'TRAC provides specialized SEO services for Washington State landscaping businesses, helping you thrive from the Puget Sound to the Inland Northwest. Whether you specialize in Pacific Northwest native plant gardens, eco-friendly designs, urban landscaping in Seattle, or creating beautiful outdoor spaces that embrace Washington\'s diverse microclimates, we can elevate your online presence. Our team understands the unique horticultural needs of the Evergreen State, from managing rainy conditions to selecting plants suitable for varied terrains. We create SEO strategies that highlight your expertise in sustainable practices, rainwater harvesting, and designing for year-round interest. We focus on local search optimization to target your specific service areas in Seattle, Tacoma, Spokane, Vancouver, and other communities. Our technical website enhancements and content marketing showcase your stunning Washington projects and deep knowledge of regional landscaping. Partner with TRAC to cultivate a robust online presence and attract more qualified leads for your Washington landscaping company.',
    heroImage: { src: STATE_HERO_IMAGE_SRC, alt: 'Washington State evergreen landscape', dataAiHint: 'washington landscape forest' },
    heroVideoUrl: 'https://www.youtube.com/embed/JBPmDzL-Xek',
    formTitle: 'Free Washington Landscaping SEO Quote!',
  },
  resultsHeadline: 'SEO That Helps Washington Landscaping Businesses Flourish Naturally',
  readyToGrowHeadline: 'Ready to Grow Your Washington Landscaping Business with Eco-Smart SEO?',
  servicesSectionHeadline: 'Custom SEO for Washington Landscaping Professionals',
  servicesSectionSubheadline: 'Our Washington landscaping SEO expertise helps you connect with clients seeking services like PNW native plant design, sustainable hardscaping, and expert lawn care across the state.',
  services: [
    { icon: Search, title: 'Local SEO for WA Landscapers', description: 'Get discovered by clients in your Washington service areas, from Seattle and Bellevue to Spokane and Olympia. We optimize GMB and local listings for maximum visibility.' },
    { icon: Leaf, title: 'PNW Native & Sustainable Design SEO', description: 'Highlight your expertise in creating eco-friendly landscapes using Pacific Northwest native plants, attracting environmentally conscious clients in Washington.' },
    { icon: Waves, title: 'Rain Garden & Water Management SEO', description: 'Improve visibility for services related to rain gardens, permeable paving, and other water management solutions crucial for Washington\'s climate.' },
    { icon: Mail, title: 'Content on WA Gardening & Outdoor Living', description: 'Develop informative content on Washington gardening tips, year-round plant interest, and ideas for creating functional outdoor living spaces suited to the PNW lifestyle.' },
  ],
  whyChooseSectionHeadline: 'Why TRAC is Your Premier Partner for Washington Landscaping SEO',
  whyChooseIntro: 'TRAC provides expert SEO solutions tailored for the unique Washington landscaping market. We help you navigate the Evergreen State\'s digital landscape to achieve sustainable growth and connect with discerning clients.',
  whyChooseParagraph1: 'Our Washington landscaping SEO specialists understand the needs of businesses working with diverse terrains and climates, from coastal areas to inland regions. We craft strategies that showcase your ability to create beautiful, resilient, and sustainable landscapes for Washington clients.',
  whyChooseParagraph2: 'We are committed to ethical, results-focused SEO that builds your brand\'s reputation and online reach across Washington. Our transparent approach and detailed reporting ensure you understand the impact of our services and the growth of your business.',
  whyChoosePoints: [
    { icon: 'TrendingUp', title: 'WA Landscaping SEO Growth', description: 'Increase high-quality leads and bookings across Washington State. We focus on SEO that converts prospects seeking skilled and eco-conscious Washington landscaping services.' },
    { icon: 'Lightbulb', title: 'Washington Market & PNW Expertise', description: 'Benefit from SEO strategies designed for the Washington landscaping industry, considering its specific climate challenges, popular native plant choices, and client preferences for sustainable, naturalistic designs.' },
    { icon: 'ShieldCheck', title: 'Trusted WA Landscaping SEO', description: 'Achieve enduring online success with ethical SEO practices specifically adapted for Washington landscapers, building your brand and attracting your ideal customer base in the Pacific Northwest.' },
  ],
  awards: {
    clutch: { headline: 'Top WA Landscaping SEO - Evergreen Awards 2024', text: 'Recognized for driving exceptional SEO results for Washington landscaping companies, particularly those focusing on native plants and sustainable practices.' },
    upcity: { headline: 'Washington Landscaping SEO Excellence - UpCity 2024', text: 'Awarded for leading SEO services and client success in the Washington green industry, helping businesses thrive in a unique and beautiful state.' },
  },
  coverageData: {
    mainHeadline: "Serving Landscapers Across the Evergreen State - Washington",
    points: ["Seattle Metro Area (Seattle, Bellevue, Tacoma)", "Spokane & Eastern Washington", "Vancouver & Southwest Washington", "Olympic Peninsula", "Puget Sound Region", "The Tri-Cities", "And more..."],
    mapImageUrl: STATE_COVERAGE_IMAGE_SRC,
    mapImageAlt: "Map of Washington showing service areas for landscaping SEO"
  },
  bottomFormTitle: 'Get Your Landscaping SEO Plan',
};
