
import type { LandscapingStatePageData } from '@/types';
import { Search, TreePine, Leaf, Sprout, TrendingUp, Lightbulb, ShieldCheck, Settings, Mail } from 'lucide-react';
import { CONTACT_DETAILS } from '@/lib/constants';

const STATE_HERO_IMAGE_SRC = '/trac-seo.jpg'; 
const STATE_COVERAGE_IMAGE_SRC = 'https://placehold.co/600x400.png';

export const georgiaLandscapingData: LandscapingStatePageData = {
  slug: 'georgia',
  stateName: 'Georgia',
  heroData: {
    pageTitle: 'Georgia Landscaping SEO | TRAC - SEO for GA Landscapers',
    metaDescription: 'Boost your Georgia landscaping business with TRAC\'s expert SEO. Attract clients for Southern garden design, lawn care, and tree services in GA. Get your free SEO proposal!',
    heroTitle: 'Georgia Landscaping SEO: Cultivate Growth in the Peach State',
    heroSubtitle: 'Reach More Landscaping Clients from Atlanta to Savannah with TRAC SEO',
    heroDescription: 'TRAC provides specialized SEO services for Georgia landscaping businesses, helping you flourish in a state known for its beautiful gardens and Southern charm. Whether you serve the bustling Atlanta metro area, historic Savannah, or other communities across Georgia, we tailor strategies to your market. Our SEO services help landscapers specializing in classic Southern garden designs, lawn maintenance for warm-season grasses, tree care, or commercial property landscaping to significantly increase their online visibility and attract a consistent flow of qualified local leads. We understand Georgia\'s climate, native flora, and homeowner preferences. Our approach includes local SEO optimization, technical website enhancements, and content marketing that showcases your Georgia projects and expertise in creating stunning, sustainable outdoor spaces. Partner with TRAC to cultivate a robust online presence for your Georgia landscaping business and achieve measurable, lasting growth.',
    heroImage: { src: STATE_HERO_IMAGE_SRC, alt: 'Georgia landscape with peach trees' },
    heroVideoUrl: 'https://www.youtube.com/embed/JBPmDzL-Xek', 
    formTitle: 'Free Georgia Landscaping SEO Quote!',
  },
  resultsHeadline: 'SEO That Helps Georgia Landscaping Businesses Flourish',
  readyToGrowHeadline: 'Ready to Grow Your Georgia Landscaping Business with Strategic SEO?',
  servicesSectionHeadline: 'Custom SEO for Georgia Landscaping Professionals',
  servicesSectionSubheadline: 'Our Georgia landscaping SEO expertise helps you connect with clients seeking services from elegant Southern garden designs to comprehensive lawn care and tree management across the Peach State.',
  services: [
    { icon: Search, title: 'Local SEO for GA Landscapers', description: 'Get discovered by clients in your Georgia service areas, including Atlanta, Augusta, Savannah, and Columbus. We optimize GMB and local listings for maximum visibility.' },
    { icon: Leaf, title: 'Southern Garden & Native Plant SEO', description: 'Highlight your expertise in designing and maintaining landscapes featuring plants that thrive in Georgia\'s climate, including classic Southern garden elements and native species.' },
    { icon: TreePine, title: 'Lawn Care & Tree Service SEO', description: 'Improve visibility for essential services like year-round lawn maintenance, fertilization, aeration, and professional tree care (pruning, removal) throughout Georgia.' },
    { icon: Mail, title: 'Content on GA Gardening & Outdoor Spaces', description: 'Develop informative content on Georgia gardening tips, solutions for regional pests, and ideas for creating beautiful outdoor living spaces, establishing your local expertise.' },
  ],
  whyChooseSectionHeadline: 'Why TRAC is Your Premier Partner for Georgia Landscaping SEO',
  whyChooseIntro: 'TRAC provides expert SEO solutions tailored for the Georgia landscaping market. We help you navigate the Peach State\'s digital environment to achieve sustainable growth and greater client engagement.',
  whyChooseParagraph1: 'Our Georgia landscaping SEO specialists understand the specific needs of businesses operating in a state known for its horticultural beauty and discerning homeowners. We craft strategies that highlight your ability to create and maintain exceptional landscapes for Georgia clients.',
  whyChooseParagraph2: 'We are committed to ethical, results-focused SEO that builds your brand\'s reputation and online reach across Georgia. Our transparent approach and detailed reporting ensure you understand the impact of our services and the growth of your business.',
  whyChoosePoints: [
    { icon: 'TrendingUp', title: 'GA Landscaping SEO Growth', description: 'Increase high-quality leads and bookings across Georgia. We focus on SEO that converts prospects seeking reliable and creative Georgia landscaping services.' },
    { icon: 'Lightbulb', title: 'Georgia Market & Horticultural Expertise', description: 'Benefit from SEO strategies designed for the Georgia landscaping industry, considering its specific climate challenges, popular plant choices (azaleas, magnolias), and client preferences from metro Atlanta to coastal regions.' },
    { icon: 'ShieldCheck', title: 'Trusted GA Landscaping SEO', description: 'Achieve enduring online success with ethical SEO practices specifically adapted for Georgia landscapers, building your brand and attracting your ideal customer base in the Peach State.' },
  ],
  awards: {
    clutch: { headline: 'Top GA Landscaping SEO - Peach State Awards 2024', text: 'Recognized for driving exceptional SEO results for Georgia landscaping companies, particularly those focusing on Southern garden design and sustainable practices.' },
    upcity: { headline: 'Georgia Landscaping SEO Excellence - UpCity 2024', text: 'Awarded for leading SEO services and client success in the Georgia green industry, helping businesses blossom in a competitive market.' },
  },
  coverageData: {
    mainHeadline: "Serving Landscapers Across the Peach State - Georgia",
    points: ["Atlanta Metro Area", "Augusta-Richmond County", "Columbus Area", "Savannah & Coastal Georgia", "Macon-Bibb County", "Athens-Clarke County", "And more..."],
    mapImageUrl: STATE_COVERAGE_IMAGE_SRC,
    mapImageAlt: "Map of Georgia showing service areas for landscaping SEO"
  },
  bottomFormTitle: 'Get Your Landscaping SEO Plan',
};
    