
import type { CityPageData } from '@/types';
import { Search, Settings, Briefcase, Mail, BarChart2, TrendingUp, Lightbulb, ShieldCheck } from 'lucide-react';
import { CONTACT_DETAILS } from '@/lib/constants.tsx';

const GENERIC_CITY_HERO_IMAGE_SRC = 'https://placehold.co/800x500.png';
const GENERIC_OFFICE_LOCATION_IMAGE_SRC = 'https://placehold.co/600x400.png';

export const gulshanEHadeedData: CityPageData = {
  slug: 'gulshan-e-hadeed', // Ensure this matches the slug used in other parts of the system
  cityName: 'Gulshan-e-Hadeed',
  heroData: {
    pageTitle: 'Gulshan-e-Hadeed SEO Services | TRAC - Local SEO Experts',
    metaDescription: 'TRAC offers specialized SEO services for businesses in Gulshan-e-Hadeed, Karachi. Enhance your local online visibility and attract more customers. Contact our Gulshan-e-Hadeed SEO team!',
    heroTitle: 'SEO Services for Gulshan-e-Hadeed Businesses',
    heroSubtitle: 'Boost Your Local Presence in Gulshan-e-Hadeed with TRAC\'s Targeted SEO',
    heroDescription: 'TRAC provides dedicated SEO services for businesses located in or serving the Gulshan-e-Hadeed area of Karachi. As a significant residential and commercial hub near Pakistan Steel Mills, Gulshan-e-Hadeed has a vibrant local economy. Our tailored SEO strategies are designed to increase your online visibility among local residents and attract customers specifically searching for services within Gulshan-e-Hadeed and its surrounding locales. We focus on hyper-local SEO tactics, ensuring your business appears prominently in "near me" searches, Google Maps, and for keywords relevant to the Gulshan-e-Hadeed community. Our technical SEO ensures your website is accessible, fast, and mobile-friendly for local users. We also develop content that speaks to the interests and needs of the Gulshan-e-Hadeed populace, helping you connect with your community and build brand loyalty. Whether you run a retail store, a service-based business, a school, or a clinic in Gulshan-e-Hadeed, TRAC can help you achieve better search rankings and attract more local customers.',
    heroImage: { src: GENERIC_CITY_HERO_IMAGE_SRC, alt: 'SEO Services in Gulshan-e-Hadeed, Karachi', dataAiHint: 'Gulshan-e-Hadeed community' },
    heroVideoUrl: 'https://www.youtube.com/embed/JBPmDzL-Xek',
    formTitle: 'Get Your FREE Gulshan-e-Hadeed SEO Review!',
  },
  resultsHeadline: 'Driving Local SEO Success for Gulshan-e-Hadeed Businesses',
  readyToGrowHeadline: 'Ready to Grow Your Gulshan-e-Hadeed Business with Local SEO?',
  servicesSectionHeadline: 'Specialized SEO for Gulshan-e-Hadeed Locality',
  servicesSectionSubheadline: 'Our Gulshan-e-Hadeed SEO strategies are hyper-focused on helping local businesses thrive by connecting them with customers in their immediate vicinity and community.',
  services: [
    { icon: Search, title: 'Gulshan-e-Hadeed Local SEO', description: 'Dominate local search results within Gulshan-e-Hadeed. We optimize your Google Business Profile, build citations on relevant local directories, and target keywords specifically used by people searching for businesses in the Gulshan-e-Hadeed area.' },
    { icon: Settings, title: 'Website Optimization for Gulshan-e-Hadeed', description: 'Ensure your website is perfectly optimized for speed, mobile devices, and user experience for your Gulshan-e-Hadeed customers. A technically sound website performs better in local search rankings.' },
    { icon: Mail, title: 'Community-Focused Content for Gulshan-e-Hadeed', description: 'Create content that addresses the specific needs and interests of the Gulshan-e-Hadeed community. This could include information about local services, events, or promotions relevant to residents of Gulshan-e-Hadeed.' },
    { icon: Briefcase, title: 'SEO for Retail & Services in Gulshan-e-Hadeed', description: 'Tailored SEO strategies for retail shops, restaurants, clinics, schools, and service providers operating within Gulshan-e-Hadeed, helping them attract more local foot traffic and inquiries from the community.' },
  ],
  whyChooseSectionHeadline: 'TRAC: Your Gulshan-e-Hadeed Local SEO Specialist',
  whyChooseIntro: 'TRAC delivers targeted SEO solutions for businesses in Gulshan-e-Hadeed, understanding the importance of local visibility for community-based enterprises. We help you connect with your neighbors.',
  whyChooseParagraph1: 'Our team recognizes that businesses in areas like Gulshan-e-Hadeed require a specialized, hyper-local SEO approach. We focus on strategies that make your business the go-to choice for residents in Gulshan-e-Hadeed and nearby areas.',
  whyChooseParagraph2: 'We are committed to ethical and effective SEO practices that build trust and sustainable growth for your Gulshan-e-Hadeed business. Our transparent reporting ensures you see the direct impact of our local SEO efforts on your visibility and customer engagement within the community.',
  whyChoosePoints: [
    { icon: 'TrendingUp', title: 'Gulshan-e-Hadeed Local Visibility Boost', description: 'Increase your rankings in local search results specific to Gulshan-e-Hadeed, attracting more customers from your immediate community and improving local brand recognition.' },
    { icon: 'Lightbulb', title: 'Hyper-Local SEO Expertise for Gulshan-e-Hadeed', description: 'Benefit from SEO strategies designed with a deep understanding of the Gulshan-e-Hadeed locality, its specific demographics, and how local residents search for products and services.' },
    { icon: 'ShieldCheck', title: 'Reliable & Community-Focused SEO', description: 'Partner with a trusted SEO provider dedicated to helping Gulshan-e-Hadeed businesses thrive through honest, effective, and community-aware digital marketing strategies.' },
  ],
  awards: {
    clutch: { headline: 'Top Local SEO for Gulshan-e-Hadeed - Community Business Awards 2024', text: 'Recognized for delivering exceptional local SEO results for businesses in specific townships like Gulshan-e-Hadeed, driving community engagement.' },
    upcity: { headline: 'Gulshan-e-Hadeed Local SEO Excellence - Neighborhood Stars 2024', text: 'Awarded for providing leading local SEO services and consistently helping Gulshan-e-Hadeed businesses connect with their local customer base effectively.' },
  },
  location: {
    officeImageUrl: GENERIC_OFFICE_LOCATION_IMAGE_SRC,
    addressLines: ['Main Commercial Area', 'Phase 1', 'Gulshan-e-Hadeed, Karachi, Pakistan'],
    phone: CONTACT_DETAILS.phone,
    email: CONTACT_DETAILS.email,
  },
  bottomFormTitle: 'Request Your Gulshan-e-Hadeed SEO Plan',
};
