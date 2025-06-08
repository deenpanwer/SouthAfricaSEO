
import type { CityPageData } from '@/types';
import { Briefcase, Search, BarChart2, Users, Settings, Mail, TrendingUp, Lightbulb, ShieldCheck } from 'lucide-react';
import { CONTACT_DETAILS } from '@/lib/constants.tsx';

const GENERIC_CITY_HERO_IMAGE_SRC = 'https://placehold.co/800x500.png';
const GENERIC_OFFICE_LOCATION_IMAGE_SRC = 'https://placehold.co/600x400.png';

export const losAngelesData: CityPageData = {
  slug: 'los-angeles',
  cityName: 'Los Angeles',
  heroData: {
    pageTitle: 'Los Angeles SEO Services | TRAC - LA SEO Experts',
    metaDescription: 'TRAC offers leading SEO services for Los Angeles businesses. Increase your website traffic, get more leads, and dominate LA search results. Get your free SEO consultation!',
    heroTitle: 'Los Angeles SEO Agency',
    heroSubtitle: 'Capture the LA Market with Powerful SEO Strategies',
    heroDescription: 'Unlock the potential of your Los Angeles business with TRAC\'s expert SEO services. We specialize in creating custom SEO campaigns that drive organic traffic, improve search engine rankings, and deliver tangible results in the competitive LA landscape. From local SEO for LA neighborhoods to comprehensive e-commerce optimization, we cover all your needs.',
    heroImage: {
      src: GENERIC_CITY_HERO_IMAGE_SRC,
      alt: 'SEO Services in Los Angeles by TRAC',
      dataAiHint: 'los angeles skyline seo'
    },
    heroVideoUrl: 'https://www.youtube.com/embed/JBPmDzL-Xek',
    formTitle: 'Get Your FREE LA SEO Analysis!',
  },
  resultsHeadline: 'Proven SEO Results for Businesses in Los Angeles',
  readyToGrowHeadline: 'Ready to Boost Your Los Angeles SEO Performance?',
  servicesSectionHeadline: 'Tailored SEO Services for Los Angeles Success',
  servicesSectionSubheadline: 'Our Los Angeles SEO experts craft data-driven strategies to enhance your online visibility and connect you with your target audience in LA.',
  services: [
    { icon: Search, title: 'LA Local SEO Domination', description: 'Get found by local customers in Los Angeles. We optimize your online presence for "near me" searches and improve your visibility on Google Maps across LA county.' },
    { icon: Settings, title: 'Technical SEO for LA Websites', description: 'Our technical SEO audits ensure your website meets search engine guidelines for optimal performance, focusing on site speed, mobile usability, and crawlability for the LA market.' },
    { icon: Users, title: 'Content Strategy for LA Audiences', description: 'Develop engaging, SEO-friendly content that speaks directly to the Los Angeles market, builds authority, and drives organic traffic.' },
    { icon: Briefcase, title: 'Entertainment & Media SEO in LA', description: 'Specialized SEO services for Los Angeles\' unique entertainment and media industries, helping you reach a global audience.' },
    { icon: Mail, title: 'Link Building & Digital PR for LA', description: 'Acquire high-quality backlinks from relevant LA and industry-specific sources to boost your website’s authority and search rankings.' },
    { icon: BarChart2, title: 'Advanced SEO Analytics for LA', description: 'Monitor and refine your Los Angeles SEO strategy with in-depth analytics and transparent reporting, focusing on key growth metrics.' },
  ],
  whyChooseSectionHeadline: 'Why TRAC is the Leading SEO Agency in Los Angeles',
  whyChooseIntro: 'Choose TRAC to navigate the complex Los Angeles SEO environment. Our tailored strategies, local expertise, and commitment to results make us the ideal partner for your LA business\'s growth.',
  whyChooseParagraph1: 'Los Angeles is a diverse and highly competitive market. TRAC\'s SEO services are designed to cut through the noise, providing your LA business with a clear path to online visibility and customer acquisition. We focus on sustainable, ethical SEO practices.',
  whyChooseParagraph2: 'Our team of LA SEO professionals understands the local search trends and consumer behaviors specific to Southern California. We combine this knowledge with cutting-edge SEO tools and techniques to deliver strategies that truly perform for Los Angeles businesses.',
  whyChoosePoints: [
    { icon: 'TrendingUp', title: 'LA SEO Growth Experts', description: 'We deliver quantifiable improvements in organic search traffic, rankings, and conversions for Los Angeles clients.' },
    { icon: 'Lightbulb', title: 'Targeted LA SEO Strategies', description: 'Custom SEO campaigns designed to capture the unique opportunities within the Los Angeles market.' },
    { icon: 'ShieldCheck', title: 'Data-Driven & Transparent SEO', description: 'Ethical SEO practices coupled with clear, consistent reporting on your Los Angeles campaign performance.' },
  ],
  awards: {
    clutch: {
      headline: 'TRAC: Clutch Verified Top SEO Firm in Los Angeles 2024',
      text: 'Recognized by Clutch for exceptional SEO service delivery and client success stories in the greater Los Angeles area.',
    },
    upcity: {
      headline: 'UpCity LA SEO Excellence: TRAC Named a Top Agency 2024',
      text: 'Awarded by UpCity for consistent high performance and outstanding SEO results for businesses throughout Los Angeles.',
    }
  },
  location: {
    officeImageUrl: GENERIC_OFFICE_LOCATION_IMAGE_SRC,
    addressLines: ['456 SEO Drive', 'Suite 200', 'Los Angeles, CA 90001'],
    phone: CONTACT_DETAILS.phone,
    email: CONTACT_DETAILS.email,
  },
  bottomFormTitle: 'Request Your FREE Los Angeles SEO Strategy',
};
