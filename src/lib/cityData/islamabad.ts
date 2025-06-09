
import type { CityPageData } from '@/types';
import { Search, Settings, Briefcase, Mail, BarChart2, TrendingUp, Lightbulb, ShieldCheck } from 'lucide-react';
import { CONTACT_DETAILS } from '@/lib/constants.tsx';

const GENERIC_CITY_HERO_IMAGE_SRC = 'https://placehold.co/800x500.png';
const GENERIC_OFFICE_LOCATION_IMAGE_SRC = 'https://placehold.co/600x400.png';

export const islamabadData: CityPageData = {
  slug: 'islamabad',
  cityName: 'Islamabad',
  heroData: {
    pageTitle: 'Islamabad SEO Company | TRAC - SEO Services Islamabad, Pakistan',
    metaDescription: 'TRAC provides expert SEO services for Islamabad businesses. Improve online visibility, attract more customers, and grow in Pakistan\'s capital. Contact our Islamabad SEO team!',
    heroTitle: 'Islamabad SEO Agency: Elevate Your Capital Presence',
    heroSubtitle: 'Achieve Top Rankings in Islamabad with TRAC\'s Strategic SEO Solutions',
    heroDescription: 'TRAC offers specialized SEO services for businesses operating in Islamabad, the capital city of Pakistan, known for its well-planned infrastructure, greenery, and status as a governmental and diplomatic hub. Our targeted SEO strategies are designed to significantly enhance your online visibility, attract qualified local and national traffic, and drive measurable growth within the sophisticated Islamabad market. We focus on comprehensive local SEO to ensure your business is easily found by residents, government entities, and international organizations in key sectors of Islamabad (e.g., Blue Area, F-sectors, E-sectors). Our technical SEO expertise ensures your website provides an optimal user experience, crucial for a discerning audience. Furthermore, our content marketing strategies are crafted to deliver valuable information and position your brand as a thought leader in Islamabad, whether you are in professional services, IT, real estate, or education. TRAC is dedicated to understanding your specific objectives and delivering SEO solutions that contribute to your long-term success in Pakistan\'s capital.',
    heroImage: { src: GENERIC_CITY_HERO_IMAGE_SRC, alt: 'SEO Services in Islamabad, Pakistan', dataAiHint: 'Islamabad Faisal Mosque' },
    heroVideoUrl: 'https://www.youtube.com/embed/JBPmDzL-Xek',
    formTitle: 'Get Your FREE Islamabad SEO Consultation!',
  },
  resultsHeadline: 'Driving Strategic SEO Results for Islamabad & Rawalpindi Businesses',
  readyToGrowHeadline: 'Ready to Grow Your Islamabad Business with Professional SEO?',
  servicesSectionHeadline: 'Dedicated SEO Services for Islamabad & Capital Territory',
  servicesSectionSubheadline: 'Our Islamabad SEO strategies are tailored for Pakistan\'s capital, helping businesses leverage digital marketing to reach government, corporate, and residential audiences effectively.',
  services: [
    { icon: Search, title: 'Islamabad Local SEO & Government Sector Targeting', description: 'Optimize your online presence for local searches within Islamabad and Rawalpindi, including targeting for specific sectors and diplomatic enclaves. We enhance your Google Business Profile for businesses aiming to attract clients in the Capital Territory.' },
    { icon: Settings, title: 'Technical SEO for Islamabad Websites', description: 'Ensure your Islamabad-focused website is technically optimized for search engines, providing excellent user experience through fast load times, mobile responsiveness, and secure connections. This is vital for credibility in Islamabad\'s professional environment.' },
    { icon: Mail, title: 'Content Marketing for Islamabad SEO & Professional Audiences', description: 'Create engaging, high-quality content that reflects Islamabad\'s sophisticated audience and addresses their specific needs. We develop content strategies that build SEO authority and drive traffic for businesses in Islamabad, focusing on professional services, IT, and policy-related topics.' },
    { icon: Briefcase, title: 'SEO for Professional Services, IT & Real Estate in Islamabad', description: 'Tailored SEO for Islamabad\'s key sectors, including professional services (consultancies, legal firms), the IT industry, and the real estate market. We understand the specific SEO requirements for businesses operating in Pakistan\'s capital and serving a discerning clientele.' },
  ],
  whyChooseSectionHeadline: 'TRAC: Your Partner for SEO Success in Islamabad',
  whyChooseIntro: 'TRAC delivers innovative SEO solutions for businesses in Islamabad, combining local market understanding with cutting-edge digital strategies to help you achieve your growth objectives in Pakistan\'s capital city.',
  whyChooseParagraph1: 'Our Islamabad SEO team appreciates the unique nature of the capital, its role as a center for governance, and its growing private sector. We craft SEO campaigns that are not only effective but also resonate with the professional and diplomatic communities of Islamabad.',
  whyChooseParagraph2: 'We are committed to ethical SEO practices and transparent communication, providing Islamabad businesses with clear insights into their campaign performance and a strategy for sustained online success. Partner with us to navigate the digital landscape of the Capital Territory and achieve national visibility.',
  whyChoosePoints: [
    { icon: 'TrendingUp', title: 'Islamabad SEO Growth & Visibility', description: 'Increase your organic search rankings and attract more professional clients and customers in the competitive Islamabad market. We focus on delivering measurable results that enhance your online presence in Pakistan.' },
    { icon: 'Lightbulb', title: 'Capital Territory SEO Expertise', description: 'Benefit from SEO strategies specifically designed for the Islamabad market, understanding local search trends, professional networking, and the unique economic drivers of Pakistan\'s capital region.' },
    { icon: 'ShieldCheck', title: 'Reliable & Professional Islamabad SEO', description: 'Experience transparent, ethical, and effective SEO services focused on the long-term success of your Islamabad business. We build strategies that are as well-planned and structured as Islamabad itself.' },
  ],
  awards: {
    clutch: { headline: 'Top Islamabad SEO Agency - Capital Business Awards 2024', text: 'Recognized for professional and effective SEO strategies that deliver for businesses in Islamabad, particularly in the professional services, IT, and real estate sectors.' },
    upcity: { headline: 'Islamabad SEO Leaders - National Capital Region 2024', text: 'Awarded for providing outstanding SEO services and achieving significant online growth for businesses throughout Islamabad and Rawalpindi.' },
  },
  location: {
    officeImageUrl: GENERIC_OFFICE_LOCATION_IMAGE_SRC,
    addressLines: ['303 SEO Avenue', 'Blue Area', 'Islamabad, Capital Territory, Pakistan'],
    phone: CONTACT_DETAILS.phone,
    email: CONTACT_DETAILS.email,
  },
  bottomFormTitle: 'Request Your Islamabad SEO Plan',
};
