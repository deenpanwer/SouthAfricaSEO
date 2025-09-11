
import type { LandscapingStatePageData } from '@/types';
import { Search, TreePine, Leaf, Sprout, TrendingUp, Lightbulb, ShieldCheck, Settings, Mail } from 'lucide-react';
import { CONTACT_DETAILS } from '@/lib/constants';

const STATE_HERO_IMAGE_SRC = '/trac-seo.jpg'; 
const STATE_COVERAGE_IMAGE_SRC = 'https://placehold.co/600x400.png';

export const northCarolinaLandscapingData: LandscapingStatePageData = {
  slug: 'north-carolina',
  stateName: 'North Carolina',
  heroData: {
    pageTitle: 'North Carolina Landscaping SEO | TRAC - SEO for NC Landscapers',
    metaDescription: 'Grow your North Carolina landscaping business with TRAC\'s expert SEO. Attract clients for garden design, lawn care, and sustainable landscaping in NC. Get your free SEO quote!',
    heroTitle: 'North Carolina Landscaping SEO: Cultivate Success from Mountains to Coast',
    heroSubtitle: 'Reach More Landscaping Clients Across North Carolina with TRAC SEO',
    heroDescription: 'TRAC provides specialized SEO services for North Carolina landscaping businesses, helping you connect with clients from the Blue Ridge Mountains to the Outer Banks. We understand the diverse horticultural needs of North Carolinians, whether they seek mountain--native gardens, coastal-resilient landscapes, or classic suburban lawn care. Our SEO strategies are tailored to highlight your unique services, such as four-season interest garden design, solutions for varied terrains, or specialized tree care appropriate for North Carolina\'s climate. We focus on local SEO to target specific regions within NC (Charlotte, Raleigh, Asheville, Wilmington), technical optimization for a seamless online experience, and content marketing that showcases your expertise and beautiful North Carolina projects. Partner with TRAC to significantly enhance your online visibility and attract a steady stream of qualified leads for your North Carolina landscaping business.',
    heroImage: { src: STATE_HERO_IMAGE_SRC, alt: 'North Carolina landscape with mountains or coast' },
    heroVideoUrl: 'https://www.youtube.com/embed/JBPmDzL-Xek', 
    formTitle: 'Free North Carolina Landscaping SEO Analysis!',
  },
  resultsHeadline: 'SEO That Helps North Carolina Landscaping Businesses Thrive',
  readyToGrowHeadline: 'Ready to Elevate Your North Carolina Landscaping Business with SEO?',
  servicesSectionHeadline: 'Targeted SEO for North Carolina State Landscapers',
  servicesSectionSubheadline: 'Our North Carolina landscaping SEO services are designed to connect you with clients across the Tar Heel State, from mountain retreats and urban centers to coastal communities.',
  services: [
    { icon: Search, title: 'Local SEO for NC Landscapers', description: 'Optimize your GMB profile and local listings to rank for searches in specific North Carolina regions, including Charlotte, Raleigh-Durham, Greensboro, Asheville, and Wilmington.' },
    { icon: Leaf, title: 'Native Plant & Ecological SEO', description: 'Showcase your expertise in designing with North Carolina native plants and providing ecological landscaping solutions suited to the state\'s diverse ecosystems.' },
    { icon: TreePine, title: 'Coastal & Mountain Landscaping SEO', description: 'Attract clients seeking specialized landscaping for North Carolina\'s coastal areas (salt-tolerant plants, erosion control) or mountain regions (slope stabilization, native alpine gardens).' },
    { icon: Mail, title: 'Content on NC Horticulture & Design', description: 'Create valuable content about plant choices for North Carolina\'s varied climates, sustainable landscaping practices, and design inspiration, establishing your authority and attracting organic leads.' },
  ],
  whyChooseSectionHeadline: 'Why TRAC is the Premier Choice for North Carolina Landscaping SEO',
  whyChooseIntro: 'TRAC provides specialized SEO solutions for landscaping businesses across North Carolina. We understand the diverse market from the mountains to the sea and are committed to helping your business thrive.',
  whyChooseParagraph1: 'Our North Carolina landscaping SEO team is adept at navigating the complexities of marketing in a state with distinct geographical regions and client needs. We craft strategies that effectively target your desired clientele within NC, whether for residential or commercial projects.',
  whyChooseParagraph2: 'With ethical SEO practices and a focus on measurable results, we help North Carolina landscapers build a strong, sustainable online presence. Our transparent reporting keeps you informed of your progress and the value of your SEO investment.',
  whyChoosePoints: [
    { icon: 'TrendingUp', title: 'NC Landscaping SEO Growth', description: 'Drive organic traffic and convert leads across North Carolina. We tailor SEO to maximize your reach and impact in a diverse and competitive landscaping market.' },
    { icon: 'Lightbulb', title: 'North Carolina Market Savvy', description: 'Benefit from SEO strategies that understand North Carolina\'s distinct regions, client expectations, and seasonal landscaping demands, from the Research Triangle to the coast.' },
    { icon: 'ShieldCheck', title: 'Dependable NC Landscaping SEO', description: 'Achieve lasting search visibility with ethical, white-hat SEO techniques designed for North Carolina\'s landscaping businesses, building trust and a strong customer base.' },
  ],
  awards: {
    clutch: { headline: 'Top NC Landscaping SEO - Tar Heel Awards 2024', text: 'Recognized for impactful SEO strategies for North Carolina landscaping businesses, enhancing their local and regional visibility from the mountains to the coast.' },
    upcity: { headline: 'North Carolina Landscaping SEO Leaders - UpCity 2024', text: 'Awarded for excellence in SEO and client success within the North Carolina landscaping industry, helping businesses grow consistently across the state.' },
  },
  coverageData: {
    mainHeadline: "Serving Landscapers Across the Tar Heel State - North Carolina",
    points: ["Charlotte Metro Area", "Raleigh-Durham-Chapel Hill (Triangle)", "Greensboro-Winston-Salem-High Point (Triad)", "Asheville & Western NC", "Wilmington & Coastal NC", "Fayetteville Area", "And more..."],
    mapImageUrl: STATE_COVERAGE_IMAGE_SRC,
    mapImageAlt: "Map of North Carolina showing service areas for landscaping SEO"
  },
  bottomFormTitle: 'Get Your Landscaping SEO Plan',
};
    