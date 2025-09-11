
import type { LandscapingStatePageData } from '@/types';
import { Search, Settings, Users, Mail, TrendingUp, Lightbulb, ShieldCheck, TreePine, Sprout, Leaf } from 'lucide-react';
import { CONTACT_DETAILS } from '@/lib/constants';

const STATE_HERO_IMAGE_SRC = '/trac-seo.jpg'; 
const STATE_COVERAGE_IMAGE_SRC = 'https://placehold.co/600x400.png';

export const texasLandscapingData: LandscapingStatePageData = {
  slug: 'texas',
  stateName: 'Texas',
  heroData: {
    pageTitle: 'Texas Landscaping SEO | TRAC - SEO for TX Landscapers',
    metaDescription: 'Grow your Texas landscaping business with TRAC\'s proven SEO strategies. Attract more clients for lawn care, garden design, and tree services across TX. Get a free quote!',
    heroTitle: 'Texas Landscaping SEO: Cultivate Bigger Business in the Lone Star State',
    heroSubtitle: 'Outrank Competitors & Attract More Landscaping Clients Across Texas with TRAC',
    heroDescription: 'TRAC provides powerful SEO services for Texas landscaping companies, helping you thrive in a state known for its vast landscapes and diverse horticultural needs. From the sprawling lawns of Dallas-Fort Worth to the unique gardens of Austin and the coastal challenges of Houston, we tailor our strategies to your specific region and clientele. We help landscapers specializing in native Texas plants, robust irrigation systems, commercial property maintenance, or luxury residential designs to significantly boost their online visibility and generate a consistent flow of quality leads. Our team understands the Texas climate, soil types, and popular landscaping trends, enabling us to create content and keyword strategies that resonate deeply with Texans. Whether you serve Houston, Dallas, Austin, San Antonio, or smaller communities, TRAC can help your landscaping business achieve prominent search rankings and sustainable growth.',
    heroImage: { src: STATE_HERO_IMAGE_SRC, alt: 'Texas landscape with bluebonnets' },
    heroVideoUrl: 'https://www.youtube.com/embed/JBPmDzL-Xek', 
    formTitle: 'Free Texas Landscaping SEO Analysis!',
  },
  resultsHeadline: 'SEO Strategies That Help Texas Landscaping Businesses Grow Tall',
  readyToGrowHeadline: 'Ready to Amplify Your Texas Landscaping Business with SEO?',
  servicesSectionHeadline: 'Comprehensive SEO for Texas Landscaping Professionals',
  servicesSectionSubheadline: 'Our Texas landscaping SEO services are designed to connect you with homeowners and businesses seeking your specific expertise, from Dallas to Houston and Austin to San Antonio.',
  services: [
    { icon: Search, title: 'Local SEO for TX Landscapers', description: 'Dominate local search results in major Texas cities like Houston, Dallas, Austin, and San Antonio. We optimize your GMB profile and target neighborhood-specific keywords.' },
    { icon: Leaf, title: 'Native & Hardy Plant SEO', description: 'Highlight your expertise in Texas-native and drought-resistant landscaping, attracting clients looking for sustainable and climate-appropriate outdoor solutions.' },
    { icon: TreePine, title: 'Tree Care & Lawn Service SEO', description: 'Improve visibility for essential services such as tree trimming, stump grinding, lawn fertilization, and weed control across various Texas regions.' },
    { icon: Mail, title: 'Content for Texas Gardeners', description: 'Develop informative content about Texas gardening tips, seasonal planting guides, and solutions for common Texas landscaping challenges, establishing your authority.' },
  ],
  whyChooseSectionHeadline: 'Why TRAC is the Right Choice for Texas Landscaping SEO',
  whyChooseIntro: 'TRAC offers specialized SEO solutions for landscaping businesses across Texas. We understand the Lone Star State\'s unique market and are committed to your growth.',
  whyChooseParagraph1: 'Our Texas landscaping SEO specialists know the challenges and opportunities of operating in diverse Texan climates. We develop strategies that reflect local preferences and help you connect with clients seeking quality landscaping services.',
  whyChooseParagraph2: 'We utilize ethical and effective SEO practices to ensure your Texas landscaping business achieves long-term online success. Transparent reporting and a focus on ROI are central to our partnerships.',
  whyChoosePoints: [
    { icon: 'TrendingUp', title: 'Texas SEO Growth & ROI', description: 'Increase organic traffic and generate more qualified leads throughout Texas. We focus on SEO that delivers measurable results for your landscaping company.' },
    { icon: 'Lightbulb', title: 'Texas Landscaping Market Expertise', description: 'Benefit from SEO strategies tailored to the Texas market, considering regional horticultural needs, popular styles (e.g., Hill Country, Coastal), and client expectations.' },
    { icon: 'ShieldCheck', title: 'Reliable TX Landscaping SEO', description: 'Achieve lasting results with ethical, white-hat SEO techniques designed for the Texas landscaping industry. We build trust and authority for your brand.' },
  ],
  awards: {
    clutch: { headline: 'Top TX Landscaping SEO - Lone Star Awards 2024', text: 'Recognized for impactful SEO results for Texas landscaping companies.' },
    upcity: { headline: 'Texas Landscaping SEO Leaders - UpCity 2024', text: 'Awarded for excellence in SEO and client success within the Texas landscaping market.' },
  },
  coverageData: {
    mainHeadline: "Serving Landscapers Across the Great State of Texas",
    points: ["Dallas-Fort Worth Metroplex", "Greater Houston Area", "Austin & Central Texas", "San Antonio Region", "El Paso", "Corpus Christi", "And more..."],
    mapImageUrl: STATE_COVERAGE_IMAGE_SRC,
    mapImageAlt: "Map of Texas showing service areas for landscaping SEO"
  },
  bottomFormTitle: 'Get Your Landscaping SEO Plan',
};
