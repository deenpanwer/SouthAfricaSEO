
import type { LandscapingStatePageData } from '@/types';
import { Search, TreePine, Leaf, Sprout, TrendingUp, Lightbulb, ShieldCheck, Settings, Mail, Sun, Droplets } from 'lucide-react';
import { CONTACT_DETAILS } from '@/lib/constants';

const STATE_HERO_IMAGE_SRC = 'https://placehold.co/800x500.png';
const STATE_COVERAGE_IMAGE_SRC = 'https://placehold.co/600x400.png';

export const arizonaLandscapingData: LandscapingStatePageData = {
  slug: 'arizona',
  stateName: 'Arizona',
  heroData: {
    pageTitle: 'Arizona Landscaping SEO | TRAC - SEO for AZ Landscapers',
    metaDescription: 'Boost your Arizona landscaping business with TRAC\'s expert SEO. Attract clients for desert landscaping, xeriscaping, and irrigation in AZ. Get your free SEO proposal!',
    heroTitle: 'Arizona Landscaping SEO: Make Your Business Bloom in the Desert',
    heroSubtitle: 'Attract More Clients Across Arizona with TRAC\'s Sun-Powered SEO',
    heroDescription: 'TRAC delivers specialized SEO services for Arizona landscaping businesses, helping you thrive in the unique desert environment of the Grand Canyon State. Whether you specialize in stunning xeriscapes, native Sonoran Desert plants, efficient irrigation systems, or creating cool, inviting outdoor living spaces, we can significantly enhance your online visibility. Our team understands the challenges and opportunities of landscaping in Arizona, from extreme heat and water conservation to HOA guidelines in communities across Phoenix, Tucson, Scottsdale, and beyond. We create SEO strategies that highlight your expertise in sustainable, drought-tolerant designs and connect you with homeowners and commercial clients seeking your specialized services. We focus on local search optimization to target your specific service areas, technical website enhancements for optimal performance, and content marketing that showcases your beautiful Arizona projects and deep knowledge of desert horticulture. Partner with TRAC to cultivate a robust online presence and attract more qualified leads for your Arizona landscaping company.',
    heroImage: { src: STATE_HERO_IMAGE_SRC, alt: 'Arizona desert landscape with saguaros', dataAiHint: 'arizona desert landscape' },
    heroVideoUrl: 'https://www.youtube.com/embed/JBPmDzL-Xek',
    formTitle: 'Free Arizona Landscaping SEO Quote!',
  },
  resultsHeadline: 'SEO That Helps Arizona Landscaping Businesses Flourish Under the Sun',
  readyToGrowHeadline: 'Ready to Grow Your Arizona Landscaping Business with Smart SEO?',
  servicesSectionHeadline: 'Custom SEO for Arizona Landscaping Professionals',
  servicesSectionSubheadline: 'Our Arizona landscaping SEO expertise helps you connect with clients seeking services like xeriscaping, desert-adapted planting, and efficient irrigation solutions across the state.',
  services: [
    { icon: Search, title: 'Local SEO for AZ Landscapers', description: 'Get discovered by clients in your Arizona service areas, including Phoenix, Tucson, Mesa, and Scottsdale. We optimize GMB and local listings for maximum visibility in the desert.' },
    { icon: Sun, title: 'Xeriscaping & Desert Plant SEO', description: 'Highlight your expertise in creating beautiful, water-wise landscapes using native Arizona plants and xeriscaping principles, attracting eco-conscious clients.' },
    { icon: Droplets, title: 'Irrigation & Water Conservation SEO', description: 'Improve visibility for services related to smart irrigation systems, drip irrigation, and water management solutions crucial for Arizona landscapes.' },
    { icon: Mail, title: 'Content on AZ Gardening & Outdoor Living', description: 'Develop informative content on Arizona gardening tips, drought-tolerant plant guides, and ideas for creating comfortable outdoor living spaces in the desert heat, establishing your local authority.' },
  ],
  whyChooseSectionHeadline: 'Why TRAC is Your Premier Partner for Arizona Landscaping SEO',
  whyChooseIntro: 'TRAC provides expert SEO solutions tailored for the unique Arizona landscaping market. We help you navigate the desert state\'s digital environment to achieve sustainable growth and greater client engagement.',
  whyChooseParagraph1: 'Our Arizona landscaping SEO specialists understand the specific needs of businesses operating in an arid climate with a high demand for water-efficient and heat-tolerant landscapes. We craft strategies that highlight your unique selling propositions to homeowners, HOAs, and commercial properties across Arizona.',
  whyChooseParagraph2: 'We are committed to ethical, results-focused SEO that builds your brand\'s reputation and online reach across Arizona. Our transparent approach and detailed reporting ensure you understand the impact of our services and the growth of your business in a competitive market.',
  whyChoosePoints: [
    { icon: 'TrendingUp', title: 'AZ Landscaping SEO Growth', description: 'Increase high-quality leads and bookings across Arizona. We focus on SEO that converts prospects seeking reliable and creative Arizona landscaping services adapted to the desert.' },
    { icon: 'Lightbulb', title: 'Arizona Market & Climate Expertise', description: 'Benefit from SEO strategies designed for the Arizona landscaping industry, considering its specific climate challenges, popular desert plant choices, and client preferences from Phoenix to Flagstaff.' },
    { icon: 'ShieldCheck', title: 'Trusted AZ Landscaping SEO', description: 'Achieve enduring online success with ethical SEO practices specifically adapted for Arizona landscapers, building your brand and attracting your ideal customer base in the Grand Canyon State.' },
  ],
  awards: {
    clutch: { headline: 'Top AZ Landscaping SEO - Desert Bloom Awards 2024', text: 'Recognized for driving exceptional SEO results for Arizona landscaping companies, particularly those focusing on xeriscaping and sustainable desert designs.' },
    upcity: { headline: 'Arizona Landscaping SEO Excellence - UpCity 2024', text: 'Awarded for leading SEO services and client success in the Arizona green industry, helping businesses thrive in an arid environment.' },
  },
  coverageData: {
    mainHeadline: "Serving Landscapers Across the Grand Canyon State - Arizona",
    points: ["Phoenix Metro Area (Phoenix, Scottsdale, Mesa, Chandler, Glendale)", "Tucson & Southern Arizona", "Flagstaff & Northern Arizona", "Prescott Area", "Yuma", "Lake Havasu City", "And more..."],
    mapImageUrl: STATE_COVERAGE_IMAGE_SRC,
    mapImageAlt: "Map of Arizona showing service areas for landscaping SEO"
  },
  bottomFormTitle: 'Get Your Landscaping SEO Plan',
};
