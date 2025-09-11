
import type { LandscapingStatePageData } from '@/types';
import { Search, TreePine, Leaf, Sprout, TrendingUp, Lightbulb, ShieldCheck, Settings, Mail } from 'lucide-react';
import { CONTACT_DETAILS } from '@/lib/constants';

const STATE_HERO_IMAGE_SRC = '/trac-seo.jpg'; 
const STATE_COVERAGE_IMAGE_SRC = 'https://placehold.co/600x400.png';

export const pennsylvaniaLandscapingData: LandscapingStatePageData = {
  slug: 'pennsylvania',
  stateName: 'Pennsylvania',
  heroData: {
    pageTitle: 'Pennsylvania Landscaping SEO | TRAC - SEO for PA Landscapers',
    metaDescription: 'Grow your Pennsylvania landscaping business with TRAC\'s expert SEO. Attract clients for garden design, lawn care, and hardscaping in PA. Get your free SEO quote!',
    heroTitle: 'Pennsylvania Landscaping SEO: Cultivate Success in the Keystone State',
    heroSubtitle: 'Reach More Landscaping Clients Across Pennsylvania with TRAC SEO',
    heroDescription: 'TRAC provides specialized SEO services for Pennsylvania landscaping businesses, helping you connect with clients from Philadelphia and Pittsburgh to the Lehigh Valley and beyond. We understand the diverse needs of Pennsylvanians, whether they seek classic garden designs, sustainable native plant landscaping, or robust hardscaping for varied terrains. Our SEO strategies are tailored to highlight your unique services, such as four-season garden maintenance, solutions for hilly landscapes, or specialized tree care suitable for Pennsylvania\'s climate. We focus on local SEO to target specific regions within PA, technical optimization for a seamless online experience, and content marketing that showcases your expertise and beautiful Pennsylvania projects. Partner with TRAC to significantly enhance your online visibility and attract a steady stream of qualified leads for your Pennsylvania landscaping business.',
    heroImage: { src: STATE_HERO_IMAGE_SRC, alt: 'Pennsylvania landscape with rolling hills' },
    heroVideoUrl: 'https://www.youtube.com/embed/JBPmDzL-Xek', 
    formTitle: 'Free Pennsylvania Landscaping SEO Analysis!',
  },
  resultsHeadline: 'SEO That Helps Pennsylvania Landscaping Businesses Grow Strong Roots',
  readyToGrowHeadline: 'Ready to Elevate Your Pennsylvania Landscaping Business with SEO?',
  servicesSectionHeadline: 'Targeted SEO for Pennsylvania State Landscapers',
  servicesSectionSubheadline: 'Our Pennsylvania landscaping SEO services are designed to connect you with clients across the Keystone State, from urban revitalization projects to expansive rural estates and suburban gardens.',
  services: [
    { icon: Search, title: 'Local SEO for PA Landscapers', description: 'Optimize your GMB profile and local listings to rank for searches in specific Pennsylvania regions, including Philadelphia, Pittsburgh, Allentown, Erie, and smaller communities.' },
    { icon: Leaf, title: 'Native Plant & Four-Season SEO', description: 'Showcase your expertise in designing with Pennsylvania native plants and providing year-round landscaping solutions suited to the state\'s distinct seasons.' },
    { icon: TreePine, title: 'Hardscaping & Outdoor Living SEO', description: 'Attract clients seeking to enhance their properties with patios, walkways, retaining walls, and other hardscaping features popular in Pennsylvania landscapes.' },
    { icon: Mail, title: 'Content on PA Horticulture & Design Trends', description: 'Create valuable content about plant choices for Pennsylvania climates, sustainable landscaping practices for the region, and design inspiration, establishing your authority and attracting organic leads.' },
  ],
  whyChooseSectionHeadline: 'Why TRAC is the Premier Choice for Pennsylvania Landscaping SEO',
  whyChooseIntro: 'TRAC provides specialized SEO solutions for landscaping businesses across Pennsylvania. We understand the diverse market and are committed to helping your business thrive in the Keystone State.',
  whyChooseParagraph1: 'Our Pennsylvania landscaping SEO team is adept at navigating the complexities of marketing in both historic cities and growing suburban/rural regions. We craft strategies that effectively target your desired clientele within PA, from those seeking traditional garden aesthetics to modern, sustainable designs.',
  whyChooseParagraph2: 'With ethical SEO practices and a focus on measurable results, we help Pennsylvania landscapers build a strong, sustainable online presence. Our transparent reporting keeps you informed of your progress and the value of your SEO investment.',
  whyChoosePoints: [
    { icon: 'TrendingUp', title: 'PA Landscaping SEO Growth', description: 'Drive organic traffic and convert leads across Pennsylvania. We tailor SEO to maximize your reach and impact in a diverse and competitive landscaping market.' },
    { icon: 'Lightbulb', title: 'Pennsylvania Market Savvy', description: 'Benefit from SEO strategies that understand Pennsylvania\'s distinct regions, client expectations, and seasonal landscaping demands, from Philadelphia\'s urban gardens to the Poconos\' natural landscapes.' },
    { icon: 'ShieldCheck', title: 'Dependable PA Landscaping SEO', description: 'Achieve lasting search visibility with ethical, white-hat SEO techniques designed for Pennsylvania\'s landscaping businesses, building trust and a strong customer base.' },
  ],
  awards: {
    clutch: { headline: 'Top PA Landscaping SEO - Keystone Awards 2024', text: 'Recognized for impactful SEO strategies for Pennsylvania landscaping businesses, enhancing their local and regional visibility.' },
    upcity: { headline: 'Pennsylvania Landscaping SEO Leaders - UpCity 2024', text: 'Awarded for excellence in SEO and client success within the Pennsylvania landscaping industry, helping businesses grow consistently.' },
  },
  coverageData: {
    mainHeadline: "Serving Landscapers Across the Keystone State - Pennsylvania",
    points: ["Philadelphia Metro Area", "Pittsburgh Region", "Lehigh Valley (Allentown, Bethlehem, Easton)", "Harrisburg & Central PA", "Scranton/Wilkes-Barre", "Lancaster County", "And more..."],
    mapImageUrl: STATE_COVERAGE_IMAGE_SRC,
    mapImageAlt: "Map of Pennsylvania showing service areas for landscaping SEO"
  },
  bottomFormTitle: 'Get Your Landscaping SEO Plan',
};
    