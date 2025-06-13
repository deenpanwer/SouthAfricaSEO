
import type { LandscapingStatePageData } from '@/types';
import { Search, TreePine, Leaf, Sprout, TrendingUp, Lightbulb, ShieldCheck, Settings, Mail, Mountain, Music } from 'lucide-react';
import { CONTACT_DETAILS } from '@/lib/constants';

const STATE_HERO_IMAGE_SRC = 'https://placehold.co/800x500.png';
const STATE_COVERAGE_IMAGE_SRC = 'https://placehold.co/600x400.png';

export const tennesseeLandscapingData: LandscapingStatePageData = {
  slug: 'tennessee',
  stateName: 'Tennessee',
  heroData: {
    pageTitle: 'Tennessee Landscaping SEO | TRAC - SEO for TN Landscapers',
    metaDescription: 'Boost your Tennessee landscaping business with TRAC\'s expert SEO. Attract clients for garden design, lawn care, and hardscaping in TN. Get your free SEO proposal!',
    heroTitle: 'Tennessee Landscaping SEO: Grow Your Business in the Volunteer State',
    heroSubtitle: 'Connect with More Clients Across Tennessee with TRAC\'s Scenic SEO',
    heroDescription: 'TRAC delivers specialized SEO services for Tennessee landscaping businesses, helping you flourish from the rolling hills of Middle Tennessee to the vibrant cities of Nashville, Memphis, Knoxville, and Chattanooga. Whether your expertise lies in creating stunning four-season gardens, designing beautiful outdoor living spaces, providing expert lawn care, or crafting sustainable native Tennessee landscapes, we can significantly boost your online visibility. Our team understands the unique challenges of Tennessee\'s climate and the diverse needs of its residents. We create SEO strategies that highlight your ability to design and maintain landscapes that thrive in the Volunteer State. We focus on local search optimization to target your specific service areas, technical website enhancements for optimal performance, and content marketing that showcases your beautiful Tennessee projects and deep knowledge of regional horticulture and seasonal care. Partner with TRAC to cultivate a robust online presence and attract more qualified leads for your Tennessee landscaping company.',
    heroImage: { src: STATE_HERO_IMAGE_SRC, alt: 'Tennessee landscape with rolling hills', dataAiHint: 'tennessee landscape hills' },
    heroVideoUrl: 'https://www.youtube.com/embed/JBPmDzL-Xek',
    formTitle: 'Free Tennessee Landscaping SEO Quote!',
  },
  resultsHeadline: 'SEO That Helps Tennessee Landscaping Businesses Thrive in Every Season',
  readyToGrowHeadline: 'Ready to Grow Your Tennessee Landscaping Business with Expert SEO?',
  servicesSectionHeadline: 'Custom SEO for Tennessee Landscaping Professionals',
  servicesSectionSubheadline: 'Our Tennessee landscaping SEO expertise helps you connect with clients seeking services like four-season garden design, lawn maintenance, and hardscape solutions across the Volunteer State.',
  services: [
    { icon: Search, title: 'Local SEO for TN Landscapers', description: 'Get discovered by clients in your Tennessee service areas, including Nashville, Memphis, Knoxville, and Chattanooga. We optimize GMB and local listings.' },
    { icon: Music, title: 'Outdoor Living & Entertainment Space SEO', description: 'Highlight your expertise in designing and building outdoor kitchens, patios, fire pits, and entertainment areas popular in Tennessee\'s sociable culture.' },
    { icon: Leaf, title: 'Four-Season Garden & Native Plant SEO', description: 'Improve visibility for services focusing on year-round garden interest, utilizing native Tennessee plants, and sustainable landscaping practices appealing to Volunteer State residents.' },
    { icon: Mail, title: 'Content on TN Gardening & Property Care', description: 'Develop informative content on Tennessee gardening tips, plant selections for TN climates, pest and disease control, and ideas for enhancing outdoor living spaces.' },
  ],
  whyChooseSectionHeadline: 'Why TRAC is Your Ideal Partner for Tennessee Landscaping SEO',
  whyChooseIntro: 'TRAC provides expert SEO solutions tailored for the Tennessee landscaping market. We help you navigate the Volunteer State\'s digital landscape to achieve sustainable growth and connect with a diverse clientele.',
  whyChooseParagraph1: 'Our Tennessee landscaping SEO specialists understand the specific needs of businesses serving a state with varied terrains and a strong appreciation for outdoor living. We craft strategies that showcase your ability to create beautiful, functional landscapes for Tennessee homes and businesses.',
  whyChooseParagraph2: 'We are committed to ethical, results-focused SEO that builds your brand\'s reputation and online reach across Tennessee. Our transparent approach and detailed reporting ensure you understand the impact of our services and the growth of your business in a competitive market.',
  whyChoosePoints: [
    { icon: 'TrendingUp', title: 'TN Landscaping SEO Growth', description: 'Increase high-quality leads and bookings across Tennessee. We focus on SEO that converts prospects seeking skilled and reliable TN landscaping services.' },
    { icon: 'Lightbulb', title: 'Tennessee Market & Horticultural Insight', description: 'Benefit from SEO strategies designed for the Tennessee landscaping industry, considering its specific climate zones, popular native plant choices, and client preferences for both traditional and modern designs.' },
    { icon: 'ShieldCheck', title: 'Trusted TN Landscaping SEO', description: 'Achieve enduring online success with ethical SEO practices specifically adapted for Tennessee landscapers, building your brand and attracting your ideal customer base in the Volunteer State.' },
  ],
  awards: {
    clutch: { headline: 'Top TN Landscaping SEO - Volunteer State Green Awards 2024', text: 'Recognized for driving exceptional SEO results for Tennessee landscaping companies, particularly those specializing in outdoor living spaces and native plant designs.' },
    upcity: { headline: 'Tennessee Landscaping SEO Excellence - UpCity 2024', text: 'Awarded for leading SEO services and client success in the Tennessee green industry, helping businesses thrive from the Mississippi River to the Smokies.' },
  },
  coverageData: {
    mainHeadline: "Serving Landscapers Across the Volunteer State - Tennessee",
    points: ["Nashville Metro Area", "Memphis & Shelby County", "Knoxville & East Tennessee", "Chattanooga Region", "Clarksville Area", "Murfreesboro", "And more..."],
    mapImageUrl: STATE_COVERAGE_IMAGE_SRC,
    mapImageAlt: "Map of Tennessee showing service areas for landscaping SEO"
  },
  bottomFormTitle: 'Get Your Landscaping SEO Plan',
};
