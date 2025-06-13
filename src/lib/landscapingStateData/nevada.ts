
import type { LandscapingStatePageData } from '@/types';
import { Search, TreePine, Leaf, Sprout, TrendingUp, Lightbulb, ShieldCheck, Settings, Mail, Sun, Droplets, Mountain } from 'lucide-react'; // Mountain for Sierra Nevada proximity
import { CONTACT_DETAILS } from '@/lib/constants';

const STATE_HERO_IMAGE_SRC = 'https://placehold.co/800x500.png';
const STATE_COVERAGE_IMAGE_SRC = 'https://placehold.co/600x400.png';

export const nevadaLandscapingData: LandscapingStatePageData = {
  slug: 'nevada',
  stateName: 'Nevada',
  heroData: {
    pageTitle: 'Nevada Landscaping SEO | TRAC - SEO for NV Landscapers',
    metaDescription: 'Boost your Nevada landscaping business with TRAC\'s expert SEO. Attract clients for desert landscaping, xeriscaping, and water-wise solutions in NV. Get your free SEO proposal!',
    heroTitle: 'Nevada Landscaping SEO: Make Your Business Thrive in the Silver State',
    heroSubtitle: 'Connect with More Clients Across Nevada with TRAC\'s Desert-Smart SEO',
    heroDescription: 'TRAC delivers specialized SEO services for Nevada landscaping businesses, helping you flourish in the unique arid environments of the Silver State. Whether your expertise lies in creating stunning xeriscapes, designing drought-tolerant gardens, implementing efficient irrigation systems, or crafting inviting outdoor living spaces that beat the desert heat, we can significantly enhance your online visibility. Our team understands the challenges and opportunities of landscaping in Nevada, from water conservation mandates to designing for extreme temperatures and high desert conditions around Las Vegas, Reno, Henderson, and beyond. We create SEO strategies that highlight your expertise in sustainable, water-wise designs and connect you with homeowners and commercial clients seeking your specialized services. We focus on local search optimization to target your specific service areas, technical website enhancements for optimal performance, and content marketing that showcases your beautiful Nevada projects and deep knowledge of desert horticulture. Partner with TRAC to cultivate a robust online presence and attract more qualified leads for your Nevada landscaping company.',
    heroImage: { src: STATE_HERO_IMAGE_SRC, alt: 'Nevada desert landscape with mountains', dataAiHint: 'nevada desert landscape mountains' },
    heroVideoUrl: 'https://www.youtube.com/embed/JBPmDzL-Xek',
    formTitle: 'Free Nevada Landscaping SEO Quote!',
  },
  resultsHeadline: 'SEO That Helps Nevada Landscaping Businesses Prosper in the Desert',
  readyToGrowHeadline: 'Ready to Grow Your Nevada Landscaping Business with Water-Wise SEO?',
  servicesSectionHeadline: 'Custom SEO for Nevada Landscaping Professionals',
  servicesSectionSubheadline: 'Our Nevada landscaping SEO expertise helps you connect with clients seeking services like xeriscaping, desert-adapted planting, and efficient irrigation solutions across the Silver State.',
  services: [
    { icon: Search, title: 'Local SEO for NV Landscapers', description: 'Get discovered by clients in your Nevada service areas, including Las Vegas, Henderson, Reno, and Sparks. We optimize GMB and local listings for maximum visibility in desert communities.' },
    { icon: Sun, title: 'Xeriscaping & Desert Plant SEO', description: 'Highlight your expertise in creating beautiful, water-wise landscapes using native Nevada plants and xeriscaping principles, attracting eco-conscious clients in an arid state.' },
    { icon: Droplets, title: 'Irrigation & Water Conservation SEO', description: 'Improve visibility for services related to smart irrigation systems, drip irrigation, and water management solutions crucial for Nevada landscapes and water restrictions.' },
    { icon: Mail, title: 'Content on NV Gardening & Outdoor Comfort', description: 'Develop informative content on Nevada gardening tips, drought-tolerant plant guides, and ideas for creating comfortable, shaded outdoor living spaces in the desert heat, establishing your local authority.' },
  ],
  whyChooseSectionHeadline: 'Why TRAC is Your Premier Partner for Nevada Landscaping SEO',
  whyChooseIntro: 'TRAC provides expert SEO solutions tailored for the unique Nevada landscaping market. We help you navigate the Silver State\'s digital environment to achieve sustainable growth and greater client engagement.',
  whyChooseParagraph1: 'Our Nevada landscaping SEO specialists understand the specific needs of businesses operating in an arid climate with a high demand for water-efficient and heat-tolerant landscapes. We craft strategies that highlight your unique selling propositions to homeowners, HOAs, and commercial properties across Nevada, from bustling cities to resort areas.',
  whyChooseParagraph2: 'We are committed to ethical, results-focused SEO that builds your brand\'s reputation and online reach across Nevada. Our transparent approach and detailed reporting ensure you understand the impact of our services and the growth of your business in a competitive, water-conscious market.',
  whyChoosePoints: [
    { icon: 'TrendingUp', title: 'NV Landscaping SEO Growth', description: 'Increase high-quality leads and bookings across Nevada. We focus on SEO that converts prospects seeking reliable and creative Nevada landscaping services adapted to the desert environment.' },
    { icon: 'Lightbulb', title: 'Nevada Market & Desert Expertise', description: 'Benefit from SEO strategies designed for the Nevada landscaping industry, considering its specific climate challenges, popular desert plant choices, and client preferences from Las Vegas to Reno-Tahoe.' },
    { icon: 'ShieldCheck', title: 'Trusted NV Landscaping SEO', description: 'Achieve enduring online success with ethical SEO practices specifically adapted for Nevada landscapers, building your brand and attracting your ideal customer base in the Silver State.' },
  ],
  awards: {
    clutch: { headline: 'Top NV Landscaping SEO - Silver State Green Awards 2024', text: 'Recognized for driving exceptional SEO results for Nevada landscaping companies, particularly those focusing on xeriscaping and sustainable desert designs.' },
    upcity: { headline: 'Nevada Landscaping SEO Excellence - UpCity 2024', text: 'Awarded for leading SEO services and client success in the Nevada green industry, helping businesses thrive in an arid and unique environment.' },
  },
  coverageData: {
    mainHeadline: "Serving Landscapers Across the Silver State - Nevada",
    points: ["Las Vegas Metro Area (Las Vegas, Henderson, North Las Vegas)", "Reno-Sparks Metro Area", "Carson City", "Lake Tahoe Area (Nevada side)", "Pahrump", "Mesquite", "And more..."],
    mapImageUrl: STATE_COVERAGE_IMAGE_SRC,
    mapImageAlt: "Map of Nevada showing service areas for landscaping SEO"
  },
  bottomFormTitle: 'Get Your Landscaping SEO Plan',
};
