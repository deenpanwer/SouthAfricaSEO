
import type { CityPageData } from '@/types';
import { Search, Settings, Mail, BarChart2, TrendingUp, Lightbulb, ShieldCheck } from 'lucide-react';
import { CONTACT_DETAILS } from '@/lib/constants.tsx';

const GENERIC_CITY_HERO_IMAGE_SRC = 'https://placehold.co/800x500.png';
const GENERIC_OFFICE_LOCATION_IMAGE_SRC = 'https://placehold.co/600x400.png';

export const clevelandData: CityPageData = {
  slug: 'cleveland',
  cityName: 'Cleveland',
  heroData: {
    pageTitle: 'Cleveland SEO Services | TRAC - SEO Company Cleveland, OH',
    metaDescription: 'TRAC is a Cleveland SEO company helping businesses boost online visibility and organic traffic. Contact our Cleveland SEO experts for a free SEO strategy session.',
    heroTitle: 'Cleveland SEO Company: Driving Your Digital Success',
    heroSubtitle: 'Rank Higher in Cleveland and Attract More Customers with TRAC\'s Expert SEO',
    heroDescription: 'TRAC offers specialized SEO services tailored for Cleveland businesses looking to make a significant impact online. We develop customized strategies to improve your search engine rankings, attract qualified local customers, and drive sustainable growth in the Cleveland market, a city known for its resilience and innovation. Our approach involves a thorough understanding of Cleveland\'s diverse industries, from manufacturing and healthcare to its burgeoning tech scene, and local search trends, enabling us to craft campaigns that deliver real results. From comprehensive technical SEO audits ensuring your website is perfectly structured for search engines, to targeted local optimization focused on Cleveland neighborhoods and suburbs, and compelling content creation that highlights your unique value proposition to Clevelanders, we ensure your Cleveland business is positioned for success. We are committed to transparent reporting and a collaborative approach, making us your ideal SEO partner in Cleveland. Let us help you navigate the digital landscape and achieve your business objectives in "The Land".',
    heroImage: { src: GENERIC_CITY_HERO_IMAGE_SRC, alt: 'SEO Services in Cleveland, OH', dataAiHint: 'Cleveland city business' },
    heroVideoUrl: 'https://www.youtube.com/embed/JBPmDzL-Xek',
    formTitle: 'Get Your FREE Cleveland SEO Review!',
  },
  resultsHeadline: 'Delivering SEO Results for Cleveland Businesses: Proven Success',
  readyToGrowHeadline: 'Ready for SEO Growth in Cleveland?',
  servicesSectionHeadline: 'Cleveland SEO Solutions: Tailored for Your Success',
  servicesSectionSubheadline: 'Our SEO services are meticulously designed to help your Cleveland business achieve and maintain top search engine visibility, connecting you with your ideal customers in Northeast Ohio.',
  services: [
    { icon: Search, title: 'Cleveland Local SEO & Visibility', description: 'Improve your visibility in Cleveland local search results and Google Maps. We focus on attracting customers in your specific service areas within Greater Cleveland, from downtown to the surrounding suburbs, optimizing your Google Business Profile for local searches.' },
    { icon: Settings, title: 'Technical SEO Audits for Cleveland Businesses', description: 'Optimize your website\'s technical foundation for better SEO performance in Cleveland. This includes site speed (Core Web Vitals), mobile optimization for on-the-go users, ensuring search engine crawlability, and implementing relevant schema markup for Cleveland businesses.' },
    { icon: Mail, title: 'Cleveland SEO Content Creation & Marketing', description: 'Develop engaging, high-value content (blog posts, local guides, service pages) that ranks well in Cleveland search results and effectively converts visitors into loyal customers by addressing their specific needs and local interests. We ensure content is optimized for Cleveland-centric keywords.' },
    { icon: BarChart2, title: 'SEO Performance Tracking for Cleveland Campaigns', description: 'Track key SEO metrics and understand your campaign\'s impact in the Cleveland market with our comprehensive and transparent reporting solutions. We provide insights on keyword rankings, organic traffic growth, and lead generation for Cleveland businesses.' },
  ],
  whyChooseSectionHeadline: 'TRAC: Your Cleveland SEO Experts & Growth Partner',
  whyChooseIntro: 'Choose TRAC for effective SEO strategies specifically tailored to the Cleveland market. We deliver results that drive growth and enhance your online presence in "The Rock and Roll Capital."',
  whyChooseParagraph1: 'Our team deeply understands the Cleveland business environment, its industrial heritage, and the unique factors that influence local search success. We craft strategies that are not only effective but also sustainable, helping you build a strong digital foundation in Cleveland and stand out amongst your competitors.',
  whyChooseParagraph2: 'We use ethical, data-driven SEO techniques to deliver sustainable results for our Cleveland clients. Our focus is on transparency, collaboration, and achieving your specific business goals through targeted search engine optimization that adapts to the evolving digital landscape in Cleveland.',
  whyChoosePoints: [
    { icon: 'TrendingUp', title: 'Cleveland Search Growth & Lead Generation', description: 'Boost your organic rankings and attract more qualified leads in the Cleveland area with our customized SEO strategies designed for local impact and measurable business growth. We aim for top visibility for your Cleveland services.' },
    { icon: 'Lightbulb', title: 'Local SEO Expertise for Cleveland', description: 'Benefit from customized SEO strategies built for the Cleveland, OH audience, considering local market trends (like interest in the Browns or Guardians), industry specific needs, and competitive dynamics in Northeast Ohio.' },
    { icon: 'ShieldCheck', title: 'Trusted & Transparent Cleveland SEO Partner', description: 'Experience reliable and transparent SEO services in Cleveland, focused on ethical practices and achieving measurable, long-term success. We believe in building partnerships rooted in trust and performance.' },
  ],
  awards: {
    clutch: { headline: 'Top Cleveland SEO Agency - Clutch 2024', text: 'Recognized by Clutch for delivering exceptional SEO results and client satisfaction to businesses in the Cleveland area. Our data-backed strategies get noticed.' },
    upcity: { headline: 'Cleveland SEO Excellence - UpCity 2024', text: 'Awarded by UpCity for top-tier SEO services and consistent success in helping Cleveland businesses achieve their online goals and improve their digital footprint.' },
  },
  location: {
    officeImageUrl: GENERIC_OFFICE_LOCATION_IMAGE_SRC,
    addressLines: ['505 SEO Ave', 'Suite 50', 'Cleveland, OH 44101'],
    phone: CONTACT_DETAILS.phone,
    email: CONTACT_DETAILS.email,
  },
  bottomFormTitle: 'Request Your Cleveland SEO Strategy',
};

    