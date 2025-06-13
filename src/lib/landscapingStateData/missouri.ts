
import type { LandscapingStatePageData } from '@/types';
import { Search, TreePine, Leaf, Sprout, TrendingUp, Lightbulb, ShieldCheck, Settings, Mail, Waves, Mountain } from 'lucide-react'; // Assuming Waves for rivers, Mountain for Ozarks
import { CONTACT_DETAILS } from '@/lib/constants';

const STATE_HERO_IMAGE_SRC = 'https://placehold.co/800x500.png';
const STATE_COVERAGE_IMAGE_SRC = 'https://placehold.co/600x400.png';

export const missouriLandscapingData: LandscapingStatePageData = {
  slug: 'missouri',
  stateName: 'Missouri',
  heroData: {
    pageTitle: 'Missouri Landscaping SEO | TRAC - SEO for MO Landscapers',
    metaDescription: 'Boost your Missouri landscaping business with TRAC\'s expert SEO. Attract clients for garden design, lawn care, and hardscaping in MO. Get your free SEO proposal!',
    heroTitle: 'Missouri Landscaping SEO: Show Me Your Growth in the Show-Me State',
    heroSubtitle: 'Connect with More Clients Across Missouri with TRAC\'s Strategic SEO',
    heroDescription: 'TRAC delivers specialized SEO services for Missouri landscaping businesses, helping you flourish from the urban centers of St. Louis and Kansas City to the scenic Ozark Mountains and agricultural plains. Whether your expertise lies in creating stunning four-season gardens, designing beautiful outdoor living spaces, providing expert lawn care, or crafting sustainable native Missouri landscapes, we can significantly boost your online visibility. Our team understands the unique challenges of Missouri\'s climate and the diverse needs of its residents. We create SEO strategies that highlight your ability to design and maintain landscapes that thrive in the Show-Me State. We focus on local search optimization to target your specific service areas, technical website enhancements for optimal performance, and content marketing that showcases your beautiful Missouri projects and deep knowledge of regional horticulture and seasonal care. Partner with TRAC to cultivate a robust online presence and attract more qualified leads for your Missouri landscaping company.',
    heroImage: { src: STATE_HERO_IMAGE_SRC, alt: 'Missouri landscape with river or Ozark hills', dataAiHint: 'missouri landscape river' },
    heroVideoUrl: 'https://www.youtube.com/embed/JBPmDzL-Xek',
    formTitle: 'Free Missouri Landscaping SEO Quote!',
  },
  resultsHeadline: 'SEO That Helps Missouri Landscaping Businesses Prosper Year-Round',
  readyToGrowHeadline: 'Ready to Grow Your Missouri Landscaping Business with Expert SEO?',
  servicesSectionHeadline: 'Custom SEO for Missouri Landscaping Professionals',
  servicesSectionSubheadline: 'Our Missouri landscaping SEO expertise helps you connect with clients seeking services like four-season garden design, lawn maintenance, and hardscape solutions across the Show-Me State.',
  services: [
    { icon: Search, title: 'Local SEO for MO Landscapers', description: 'Get discovered by clients in your Missouri service areas, including St. Louis, Kansas City, Springfield, and Columbia. We optimize GMB and local listings.' },
    { icon: Leaf, title: 'Four-Season Garden & Native Plant SEO', description: 'Highlight your expertise in designing and maintaining landscapes that offer year-round appeal using Missouri native plants and sustainable practices.' },
    { icon: TreePine, title: 'Lawn Care & Hardscaping SEO', description: 'Improve visibility for services focusing on comprehensive lawn care programs, tree services, and designing/installing patios, walkways, and retaining walls suited to Missouri properties.' },
    { icon: Mail, title: 'Content on MO Gardening & Outdoor Living', description: 'Develop informative content on Missouri gardening tips, plant selections for MO climates, pest and disease control, and ideas for enhancing outdoor living spaces.' },
  ],
  whyChooseSectionHeadline: 'Why TRAC is Your Ideal Partner for Missouri Landscaping SEO',
  whyChooseIntro: 'TRAC provides expert SEO solutions tailored for the Missouri landscaping market. We help you navigate the Show-Me State\'s digital landscape to achieve sustainable growth and connect with a diverse clientele.',
  whyChooseParagraph1: 'Our Missouri landscaping SEO specialists understand the specific needs of businesses serving a state with distinct seasons and a mix of urban, suburban, and rural environments. We craft strategies that showcase your ability to create beautiful, functional landscapes for Missouri homes and businesses.',
  whyChooseParagraph2: 'We are committed to ethical, results-focused SEO that builds your brand\'s reputation and online reach across Missouri. Our transparent approach and detailed reporting ensure you understand the impact of our services and the growth of your business in a competitive market.',
  whyChoosePoints: [
    { icon: 'TrendingUp', title: 'MO Landscaping SEO Growth', description: 'Increase high-quality leads and bookings across Missouri. We focus on SEO that converts prospects seeking skilled and reliable MO landscaping services.' },
    { icon: 'Lightbulb', title: 'Missouri Market & Horticultural Insight', description: 'Benefit from SEO strategies designed for the Missouri landscaping industry, considering its specific climate zones, popular native plant choices, and client preferences for both traditional and modern designs.' },
    { icon: 'ShieldCheck', title: 'Trusted MO Landscaping SEO', description: 'Achieve enduring online success with ethical SEO practices specifically adapted for Missouri landscapers, building your brand and attracting your ideal customer base in the Show-Me State.' },
  ],
  awards: {
    clutch: { headline: 'Top MO Landscaping SEO - Show-Me State Green Awards 2024', text: 'Recognized for driving exceptional SEO results for Missouri landscaping companies, particularly those specializing in four-season design and sustainable practices.' },
    upcity: { headline: 'Missouri Landscaping SEO Excellence - UpCity 2024', text: 'Awarded for leading SEO services and client success in the Missouri green industry, helping businesses thrive from St. Louis to Kansas City.' },
  },
  coverageData: {
    mainHeadline: "Serving Landscapers Across the Show-Me State - Missouri",
    points: ["St. Louis Metro Area", "Kansas City Metro Area (MO side)", "Springfield & Southwest Missouri", "Columbia & Central Missouri", "Jefferson City", "Lake of the Ozarks Region", "And more..."],
    mapImageUrl: STATE_COVERAGE_IMAGE_SRC,
    mapImageAlt: "Map of Missouri showing service areas for landscaping SEO"
  },
  bottomFormTitle: 'Get Your Landscaping SEO Plan',
};
