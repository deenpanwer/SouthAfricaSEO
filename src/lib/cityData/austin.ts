
import type { CityPageData } from '@/types';
import { Search, Settings, Mail, BarChart2, TrendingUp, Lightbulb, ShieldCheck } from 'lucide-react';
import { CONTACT_DETAILS } from '@/lib/constants.tsx';

const GENERIC_CITY_HERO_IMAGE_SRC = 'https://cdn-icggj.nitrocdn.com/AphBmykuaGyxZijWArNhxcCiPzVdYZGT/assets/images/optimized/rev-d6d7292/thriveagency.com/files/Austin-SEO-Company.jpg';
const GENERIC_OFFICE_LOCATION_IMAGE_SRC = 'https://cdn-icggj.nitrocdn.com/AphBmykuaGyxZijWArNhxcCiPzVdYZGT/assets/images/optimized/rev-d6d7292/thriveagency.com/files/Austin-office-location.png';

export const austinData: CityPageData = {
  slug: 'austin',
  cityName: 'Austin',
  heroData: {
    pageTitle: 'Austin SEO Services | TRAC - SEO Company in Austin, TX',
    metaDescription: 'TRAC is a leading Austin SEO company helping businesses improve search rankings and drive organic traffic. Contact our Austin SEO experts today for a free quote!',
    heroTitle: 'Austin SEO Company: Fueling Your Growth in ATX',
    heroSubtitle: 'Elevate Your Brand in Austin with Expert, Innovative SEO Strategies',
    heroDescription: 'TRAC delivers advanced SEO solutions for businesses looking to thrive in Austin\'s fast-paced, tech-forward market. Our strategies aim to increase your online visibility, attract highly targeted traffic, and boost conversions in the vibrant ATX scene. We know that Austin businesses, from innovative startups to established local favorites, need adaptable and effective SEO. Our services include deep-dive local SEO for Austin communities (like South Congress or East Austin), advanced technical optimization for growing companies, and compelling content marketing that captures the unique Austin spirit and speaks to its discerning audience. We build lasting organic rankings through ethical link acquisition and on-page optimization. We commit to data-driven results, clear reporting, and becoming a true extension of your Austin-based team. Let TRAC help your business make a significant impact in Austin\'s competitive digital landscape and connect with more customers.',
    heroImage: { src: GENERIC_CITY_HERO_IMAGE_SRC, alt: 'SEO Services in Austin, TX', dataAiHint: 'Austin city tech' },
    heroVideoUrl: 'https://www.youtube.com/embed/JBPmDzL-Xek',
    formTitle: 'Get Your FREE SEO Audit!', // Updated: Removed 'Austin'
  },
  resultsHeadline: 'Driving SEO Success for Austin\'s Innovators & Entrepreneurs',
  readyToGrowHeadline: 'Ready to Grow with Austin SEO?',
  servicesSectionHeadline: 'Specialized SEO Services for Austin\'s Unique Market',
  servicesSectionSubheadline: 'Our SEO services are crafted for the dynamic tech, creative, and local business industries of Austin, Texas, ensuring you connect with your target audience effectively.', // Adjusted for flow
  services: [
    { icon: Search, title: 'Local Austin Search Optimization', description: 'Maximize your visibility in Austin\'s local search results and Google Maps. We target specific Austin neighborhoods and demographics (e.g., "SEO for Austin startups," "restaurants near Zilker Park") to drive relevant foot traffic and online inquiries.' },
    { icon: Settings, title: 'Technical SEO for Growth', description: 'Ensure your website is perfectly prepared for search engines and user experience in Austin. We focus on site speed (Core Web Vitals), mobile-first indexing, structured data for tech-savvy audiences, and JavaScript SEO for modern frameworks.' },
    { icon: Mail, title: 'Content & Authority Building', description: 'Create high-quality, impactful content (blog posts, guides, local resources) that resonates with the Austin community. We also build authoritative links from relevant Austin-area and industry websites to significantly boost your SEO performance and domain trust.' },
    { icon: BarChart2, title: 'Performance Tracking & Analytics', description: 'Monitor your Austin SEO campaign with transparent, data-driven reports. We track key metrics that matter to your business, including keyword rankings for "Austin SEO" terms, organic traffic growth, lead quality, and overall marketing return.' },
  ],
  whyChooseSectionHeadline: 'TRAC: Your Austin SEO Growth Partner & Innovator',
  whyChooseIntro: 'For effective and innovative SEO in Austin, TRAC is the agency of choice. We combine advanced techniques with a deep understanding of the ATX market, helping your business stand out.',
  whyChooseParagraph1: 'Austin\'s unique market, a blend of tech innovation, vibrant arts, and strong local culture, calls for a specialized SEO approach. We provide that expertise, crafting strategies that speak to both established Austin businesses and its growing startup scene. Our goal is to fit your brand smoothly into the Austin digital ecosystem.',
  whyChooseParagraph2: 'We focus on delivering lasting SEO results that help your Austin business thrive long-term. Our team stays ahead of algorithm changes and market trends to ensure your SEO strategy remains effective and competitive in ATX. We believe in collaborative partnerships and clear communication throughout the SEO process.',
  whyChoosePoints: [
    { icon: 'TrendingUp', title: 'Achieve Strong SEO Results & ROI', description: 'See tangible improvements in search rankings, organic traffic, and lead generation for your Austin business, ensuring a solid return on your SEO investment. We track conversions carefully.' },
    { icon: 'Lightbulb', title: 'Innovative & Adaptive Strategies', description: 'Benefit from advanced SEO strategies tailored to the fast-paced and evolving digital landscape of the Austin market, keeping you ahead of the curve with tactics like AI-driven content optimization.' },
    { icon: 'ShieldCheck', title: 'Trusted & Transparent Partnership', description: 'Experience ethical and effective SEO services designed for long-term success, with clear communication and reporting tailored for Austin businesses. We are committed to industry best practices.' },
  ],
  awards: {
    clutch: { headline: 'Top Austin SEO Agency - Clutch 2024', text: 'Recognized by Clutch for innovative SEO strategies and consistent client success in the competitive Austin tech hub and creative industries.' },
    upcity: { headline: 'Austin SEO Excellence - UpCity 2024', text: 'Awarded by UpCity for leading SEO services and outstanding results delivered to businesses across Austin, from startups to established companies.' },
  },
  location: {
    officeImageUrl: GENERIC_OFFICE_LOCATION_IMAGE_SRC,
    addressLines: ['106 E 6th Street', 'Suite 900', 'Austin, TX 78701'],
    phone: CONTACT_DETAILS.phone,
    email: CONTACT_DETAILS.email,
  },
  bottomFormTitle: 'Request Your SEO Plan',
};