
import type { LandscapingStatePageData } from '@/types';
import { Search, TreePine, Leaf, Sprout, TrendingUp, Lightbulb, ShieldCheck, Settings, Mail, Palmtree } from 'lucide-react';
import { CONTACT_DETAILS } from '@/lib/constants';

const STATE_HERO_IMAGE_SRC = 'https://placehold.co/800x500.png';
const STATE_COVERAGE_IMAGE_SRC = 'https://placehold.co/600x400.png';

export const southCarolinaLandscapingData: LandscapingStatePageData = {
  slug: 'south-carolina',
  stateName: 'South Carolina',
  heroData: {
    pageTitle: 'South Carolina Landscaping SEO | TRAC - SEO for SC Landscapers',
    metaDescription: 'Boost your South Carolina landscaping business with TRAC\'s expert SEO. Attract clients for coastal gardens, Southern estate landscaping, and lawn care in SC. Get your free SEO proposal!',
    heroTitle: 'South Carolina Landscaping SEO: Cultivate Success in the Palmetto State',
    heroSubtitle: 'Connect with More Clients Across South Carolina with TRAC\'s Southern SEO Charm',
    heroDescription: 'TRAC delivers specialized SEO services for South Carolina landscaping businesses, helping you flourish from the historic charm of Charleston to the vibrant communities of Columbia and Greenville, and along the beautiful Grand Strand. Whether you specialize in creating classic Southern gardens, coastal-resilient landscapes, maintaining pristine lawns for resorts and communities, or designing elegant outdoor living spaces, we can significantly enhance your online visibility. Our team understands the unique horticultural conditions of South Carolina, from sandy coastal soils to the clay of the Midlands and Upstate. We create SEO strategies that highlight your expertise in lowcountry planting, heat-tolerant flora, and designing for Southern hospitality. We focus on local search optimization to target your specific service areas, technical website enhancements for optimal performance, and content marketing that showcases your stunning South Carolina projects and deep understanding of regional landscaping needs. Partner with TRAC to cultivate a robust online presence and attract more qualified leads for your South Carolina landscaping company.',
    heroImage: { src: STATE_HERO_IMAGE_SRC, alt: 'South Carolina coastal landscape', dataAiHint: 'south carolina landscape beach' },
    heroVideoUrl: 'https://www.youtube.com/embed/JBPmDzL-Xek',
    formTitle: 'Free South Carolina Landscaping SEO Quote!',
  },
  resultsHeadline: 'SEO That Helps South Carolina Landscaping Businesses Grow with Grace',
  readyToGrowHeadline: 'Ready to Grow Your South Carolina Landscaping Business with Elegant SEO?',
  servicesSectionHeadline: 'Custom SEO for South Carolina Landscaping Professionals',
  servicesSectionSubheadline: 'Our South Carolina landscaping SEO expertise helps you connect with clients seeking services like classic Southern garden design, coastal landscaping, and expert lawn care across the Palmetto State.',
  services: [
    { icon: Search, title: 'Local SEO for SC Landscapers', description: 'Get discovered by clients in your South Carolina service areas, including Charleston, Columbia, Greenville, Myrtle Beach, and Hilton Head. We optimize GMB and local listings.' },
    { icon: Palmtree, title: 'Coastal & Southern Garden SEO', description: 'Highlight your expertise in designing and maintaining landscapes suited for South Carolina\'s coastal environment and classic Southern garden aesthetics.' },
    { icon: Leaf, title: 'Lawn Care & Maintenance SEO', description: 'Improve visibility for services focusing on year-round lawn health, specialized turf care for Southern grasses, and seasonal property maintenance in SC.' },
    { icon: Mail, title: 'Content on SC Gardening & Outdoor Living', description: 'Develop informative content on South Carolina gardening tips, heat-tolerant plant selections, hurricane preparedness for landscapes, and ideas for creating inviting outdoor spaces.' },
  ],
  whyChooseSectionHeadline: 'Why TRAC is Your Premier Partner for South Carolina Landscaping SEO',
  whyChooseIntro: 'TRAC provides expert SEO solutions tailored for the South Carolina landscaping market. We help you navigate the Palmetto State\'s digital landscape to achieve sustainable growth and connect with discerning clients who value quality and Southern charm.',
  whyChooseParagraph1: 'Our South Carolina landscaping SEO specialists understand the unique needs of businesses serving a clientele that appreciates both historical garden traditions and modern outdoor living. We craft strategies that highlight your ability to create beautiful, functional landscapes that thrive in SC.',
  whyChooseParagraph2: 'We are committed to ethical, results-focused SEO that builds your brand\'s reputation and online reach across South Carolina. Our transparent approach and detailed reporting ensure you see the tangible benefits of our partnership and the growth of your business.',
  whyChoosePoints: [
    { icon: 'TrendingUp', title: 'SC Landscaping SEO Growth', description: 'Increase high-quality leads and bookings across South Carolina. We focus on SEO that converts prospects seeking skilled and aesthetically pleasing SC landscaping services.' },
    { icon: 'Lightbulb', title: 'South Carolina Market & Horticultural Savvy', description: 'Benefit from SEO strategies designed for the South Carolina landscaping industry, considering its specific climate zones (coastal, midlands, upstate), popular plant choices, and client preferences for Southern elegance and outdoor entertaining.' },
    { icon: 'ShieldCheck', title: 'Trusted SC Landscaping SEO', description: 'Achieve enduring online success with ethical SEO practices specifically adapted for South Carolina landscapers, building your brand and attracting your ideal customer base in the charming Palmetto State.' },
  ],
  awards: {
    clutch: { headline: 'Top SC Landscaping SEO - Palmetto Green Awards 2024', text: 'Recognized for driving exceptional SEO results for South Carolina landscaping companies, particularly those specializing in coastal and historic garden designs.' },
    upcity: { headline: 'South Carolina Landscaping SEO Excellence - UpCity 2024', text: 'Awarded for leading SEO services and client success in the South Carolina green industry, helping businesses flourish in a state known for its beauty.' },
  },
  coverageData: {
    mainHeadline: "Serving Landscapers Across the Palmetto State - South Carolina",
    points: ["Charleston Metro Area", "Columbia Region", "Greenville-Spartanburg Upstate", "Myrtle Beach & Grand Strand", "Hilton Head Island & Lowcountry", "Florence Area", "And more..."],
    mapImageUrl: STATE_COVERAGE_IMAGE_SRC,
    mapImageAlt: "Map of South Carolina showing service areas for landscaping SEO"
  },
  bottomFormTitle: 'Get Your Landscaping SEO Plan',
};
