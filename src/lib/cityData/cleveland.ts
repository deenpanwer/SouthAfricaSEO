
import type { CityPageData } from '@/types';
import { Search, Settings, Mail, BarChart2, TrendingUp, Lightbulb, ShieldCheck } from 'lucide-react';
import { CONTACT_DETAILS } from '@/lib/constants.tsx';

const GENERIC_CITY_HERO_IMAGE_SRC = 'https://cdn-icggj.nitrocdn.com/AphBmykuaGyxZijWArNhxcCiPzVdYZGT/assets/images/optimized/rev-d6d7292/thriveagency.com/files/cleveland-seo.jpg';
const GENERIC_OFFICE_LOCATION_IMAGE_SRC = 'https://cdn-icggj.nitrocdn.com/AphBmykuaGyxZijWArNhxcCiPzVdYZGT/assets/images/optimized/rev-d6d7292/thriveagency.com/files/Cleveland-Thrive-office-location.jpg';

export const clevelandData: CityPageData = {
  slug: 'cleveland',
  cityName: 'Cleveland',
  heroData: {
    pageTitle: 'Cleveland SEO Services | TRAC - SEO Company Cleveland, OH',
    metaDescription: 'TRAC is a Cleveland SEO company helping businesses boost online visibility and organic traffic. Contact our Cleveland SEO experts for a free SEO strategy session.',
    heroTitle: 'Cleveland SEO Company: Driving Your Digital Success',
    heroSubtitle: 'Rank Higher in Cleveland and Attract More Customers with TRAC\'s Expert SEO',
    heroDescription: 'TRAC offers specialized SEO services crafted for businesses aiming to make a significant impact online in Cleveland. We create custom strategies to boost your search engine rankings, draw in qualified local customers, and spark lasting growth in this resilient and innovative city. Our method involves a deep dive into Cleveland\'s varied industries – from manufacturing and healthcare to its growing tech scene – alongside local search trends. This allows us to build campaigns that deliver real outcomes. From thorough technical SEO audits, making sure your website is perfectly built for search engines, to targeted local optimization zeroing in on Cleveland neighborhoods and suburbs, and engaging content creation that highlights your unique value to local customers, we ensure your business is set up for success. We promise clear reporting and a collaborative approach, making us your ideal SEO ally in "The Land". Let us help you navigate the digital world and reach your business goals.',
    heroImage: { src: GENERIC_CITY_HERO_IMAGE_SRC, alt: 'SEO Services in Cleveland, OH', dataAiHint: 'Cleveland city business' },
    heroVideoUrl: 'https://www.youtube.com/embed/JBPmDzL-Xek',
    formTitle: 'Get Your FREE SEO Review!',
  },
  resultsHeadline: 'Delivering SEO Results for Cleveland Businesses: Proven Success',
  readyToGrowHeadline: 'Ready for SEO Growth in Cleveland?',
  servicesSectionHeadline: 'SEO Solutions: Tailored for Your Cleveland Success', // Adjusted for flow
  servicesSectionSubheadline: 'Our SEO services are carefully designed to help your Cleveland business achieve and keep top search engine visibility, connecting you with your ideal customers in Northeast Ohio.',
  services: [
    { icon: Search, title: 'Local Visibility & Search', description: 'Boost your presence in Cleveland local search results and Google Maps. We aim to attract customers in your specific service areas within Greater Cleveland, from downtown to the surrounding suburbs, refining your Google Business Profile for local searches.' },
    { icon: Settings, title: 'Technical SEO Audits', description: 'Refine your website\'s technical foundation for better SEO performance in Cleveland. This covers site speed (Core Web Vitals), mobile readiness for users on the go, ensuring search engine crawlability, and adding relevant schema markup for local businesses.' },
    { icon: Mail, title: 'SEO Content Creation & Marketing', description: 'Create compelling, high-value content (blog posts, local guides, service pages) that ranks well in Cleveland search results and successfully turns visitors into loyal customers by speaking to their specific needs and local interests. We make sure content is optimized for area-focused keywords.' },
    { icon: BarChart2, title: 'SEO Performance Tracking', description: 'Follow key SEO metrics and understand your campaign\'s impact in the Cleveland market with our detailed and clear reporting solutions. We provide insights on keyword rankings, organic traffic growth, and lead generation for businesses here.' },
  ],
  whyChooseSectionHeadline: 'TRAC: Your Cleveland SEO Experts & Growth Partner',
  whyChooseIntro: 'Choose TRAC for effective SEO strategies specifically designed for the Cleveland market. We deliver outcomes that drive growth and boost your online presence in "The Rock and Roll Capital."',
  whyChooseParagraph1: 'Our team truly grasps the Cleveland business setting, its industrial history, and the unique factors that affect local search success. We build strategies that are not only effective but also long-lasting, helping you establish a strong digital base and stand out among your local competitors.',
  whyChooseParagraph2: 'We use ethical, data-driven SEO methods to bring steady results for our Cleveland clients. Our focus is on clarity, teamwork, and reaching your specific business goals through targeted search engine optimization that adjusts to the changing digital landscape here.',
  whyChoosePoints: [
    { icon: 'TrendingUp', title: 'Search Growth & Lead Generation', description: 'Improve your organic rankings and attract more qualified leads in the Cleveland area with our custom SEO strategies built for local impact and measurable business growth. We strive for top visibility for your services.' },
    { icon: 'Lightbulb', title: 'Local SEO Expertise for Cleveland', description: 'Gain from custom SEO strategies made for the Cleveland, OH audience, taking into account local market trends (like interest in the Browns or Guardians), industry-specific needs, and competitive dynamics in Northeast Ohio.' },
    { icon: 'ShieldCheck', title: 'Trusted & Transparent SEO Partner', description: 'Experience dependable and clear SEO services in Cleveland, centered on ethical practices and achieving measurable, long-term success. We believe in building collaborations rooted in trust and performance.' },
  ],
  awards: {
    clutch: { headline: 'Top Cleveland SEO Agency - Clutch 2024', text: 'Recognized by Clutch for delivering exceptional SEO results and client satisfaction to businesses in the Cleveland area. Our data-backed strategies get noticed.' },
    upcity: { headline: 'Cleveland SEO Excellence - UpCity 2024', text: 'Awarded by UpCity for top-tier SEO services and consistent success in helping Cleveland businesses achieve their online goals and improve their digital footprint.' },
  },
  location: {
    officeImageUrl: GENERIC_OFFICE_LOCATION_IMAGE_SRC,
    addressLines: ['600 Superior Ave E', 'Suite 1300', 'Cleveland, OH 44114'],
    phone: CONTACT_DETAILS.phone,
    email: CONTACT_DETAILS.email,
  },
  bottomFormTitle: 'Request Your SEO Strategy',
};