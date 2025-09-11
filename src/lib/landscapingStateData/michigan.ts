
import type { LandscapingStatePageData } from '@/types';
import { Search, TreePine, Leaf, Sprout, TrendingUp, Lightbulb, ShieldCheck, Settings, Mail, Snowflake } from 'lucide-react';
import { CONTACT_DETAILS } from '@/lib/constants';

const STATE_HERO_IMAGE_SRC = '/trac-seo.jpg';
const STATE_COVERAGE_IMAGE_SRC = 'https://placehold.co/600x400.png';

export const michiganLandscapingData: LandscapingStatePageData = {
  slug: 'michigan',
  stateName: 'Michigan',
  heroData: {
    pageTitle: 'Michigan Landscaping SEO | TRAC - SEO for MI Landscapers',
    metaDescription: 'Boost your Michigan landscaping business with TRAC\'s expert SEO. Attract clients for four-season garden design, lakefront landscaping, and lawn care in MI. Get your free SEO proposal!',
    heroTitle: 'Michigan Landscaping SEO: Grow Your Business in the Great Lakes State',
    heroSubtitle: 'Connect with More Clients Across Michigan with TRAC\'s Four-Season SEO',
    heroDescription: 'TRAC offers specialized SEO services for Michigan landscaping businesses, helping you flourish from the shores of the Great Lakes to vibrant urban centers like Detroit, Grand Rapids, and Ann Arbor. Whether your expertise lies in creating stunning four-season gardens, designing beautiful lakefront properties, providing expert lawn care and snow removal, or crafting sustainable native Michigan landscapes, we can significantly boost your online visibility. Our team understands the unique challenges of Michigan\'s climate, from cold winters to warm summers, and the diverse needs of its residents. We create SEO strategies that highlight your ability to design and maintain landscapes that thrive year-round. We focus on local search optimization to target your specific service areas, technical website enhancements for optimal performance, and content marketing that showcases your beautiful Michigan projects and deep knowledge of regional horticulture and seasonal care. Partner with TRAC to cultivate a robust online presence and attract more qualified leads for your Michigan landscaping company.',
    heroImage: { src: STATE_HERO_IMAGE_SRC, alt: 'Michigan landscape with Great Lakes shoreline' },
    heroVideoUrl: 'https://www.youtube.com/embed/JBPmDzL-Xek',
    formTitle: 'Free Michigan Landscaping SEO Quote!',
  },
  resultsHeadline: 'SEO That Helps Michigan Landscaping Businesses Thrive in All Seasons',
  readyToGrowHeadline: 'Ready to Grow Your Michigan Landscaping Business with Expert SEO?',
  servicesSectionHeadline: 'Custom SEO for Michigan Landscaping Professionals',
  servicesSectionSubheadline: 'Our Michigan landscaping SEO expertise helps you connect with clients seeking services like four-season garden design, lakefront property landscaping, and comprehensive lawn care across the Great Lakes State.',
  services: [
    { icon: Search, title: 'Local SEO for MI Landscapers', description: 'Get discovered by clients in your Michigan service areas, including Metro Detroit, Grand Rapids, Lansing, Ann Arbor, and Traverse City. We optimize GMB and local listings.' },
    { icon: Snowflake, title: 'Four-Season & Winter Services SEO', description: 'Highlight your expertise in creating landscapes that offer year-round beauty and services like snow removal, crucial for Michigan\'s distinct seasons.' },
    { icon: Leaf, title: 'Lakefront & Native MI Plant SEO', description: 'Improve visibility for specialized services such as lakefront landscaping, erosion control, and designs featuring native Michigan plants appealing to environmentally aware clients.' },
    { icon: Mail, title: 'Content on MI Gardening & Seasonal Care', description: 'Develop informative content on Michigan gardening tips, plant choices for cold climates, seasonal lawn and garden maintenance schedules, and ideas for enhancing outdoor enjoyment year-round.' },
  ],
  whyChooseSectionHeadline: 'Why TRAC is Your Premier Partner for Michigan Landscaping SEO',
  whyChooseIntro: 'TRAC provides expert SEO solutions tailored for the Michigan landscaping market. We help you navigate the Great Lakes State\'s digital environment to achieve sustainable growth and connect with a diverse clientele.',
  whyChooseParagraph1: 'Our Michigan landscaping SEO specialists understand the specific needs of businesses operating in a state with dramatic seasonal changes and a strong appreciation for outdoor living. We craft strategies that highlight your ability to create beautiful, resilient landscapes for Michigan homes and businesses, from lakeside retreats to urban gardens.',
  whyChooseParagraph2: 'We are committed to ethical, results-focused SEO that builds your brand\'s reputation and online reach across Michigan. Our transparent approach and detailed reporting ensure you understand the impact of our services and the growth of your business in the competitive Midwest market.',
  whyChoosePoints: [
    { icon: 'TrendingUp', title: 'MI Landscaping SEO Growth', description: 'Increase high-quality leads and bookings across Michigan. We focus on SEO that converts prospects seeking reliable and creative Michigan landscaping services for all seasons.' },
    { icon: 'Lightbulb', title: 'Michigan Market & Climate Expertise', description: 'Benefit from SEO strategies designed for the Michigan landscaping industry, considering its specific climate challenges (cold winters, lake effect snow), popular native plant choices, and client preferences from urban centers to vacation properties.' },
    { icon: 'ShieldCheck', title: 'Trusted MI Landscaping SEO', description: 'Achieve enduring online success with ethical SEO practices specifically adapted for Michigan landscapers, building your brand and attracting your ideal customer base in the Great Lakes State.' },
  ],
  awards: {
    clutch: { headline: 'Top MI Landscaping SEO - Great Lakes Green Awards 2024', text: 'Recognized for driving exceptional SEO results for Michigan landscaping companies, particularly those specializing in four-season design and lakefront properties.' },
    upcity: { headline: 'Michigan Landscaping SEO Excellence - UpCity 2024', text: 'Awarded for leading SEO services and client success in the Michigan green industry, helping businesses thrive in a state with unique environmental factors.' },
  },
  coverageData: {
    mainHeadline: "Serving Landscapers Across the Great Lakes State - Michigan",
    points: ["Detroit Metro Area (Detroit, Ann Arbor, Warren)", "Grand Rapids & West Michigan", "Lansing Capital Region", "Flint & Saginaw Valley", "Northern Michigan & Traverse City", "Upper Peninsula", "And more..."],
    mapImageUrl: STATE_COVERAGE_IMAGE_SRC,
    mapImageAlt: "Map of Michigan showing service areas for landscaping SEO"
  },
  bottomFormTitle: 'Get Your Landscaping SEO Plan',
};
