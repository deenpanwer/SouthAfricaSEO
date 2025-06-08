
import type { CityPageData } from '@/types';
import { Search, Settings, Users, Briefcase, Mail, BarChart2, TrendingUp, Lightbulb, ShieldCheck } from 'lucide-react';
import { CONTACT_DETAILS } from '@/lib/constants.tsx';
import { GENERIC_CITY_HERO_IMAGE_SRC, GENERIC_OFFICE_LOCATION_IMAGE_SRC } from '@/lib/cityConstants';

export const austinData: CityPageData = {
  slug: 'austin',
  cityName: 'Austin',
  heroData: {
    pageTitle: 'Austin SEO Services | TRAC - SEO Company in Austin, TX',
    metaDescription: 'TRAC is a leading Austin SEO company helping businesses improve search rankings and drive organic traffic. Contact our Austin SEO experts today for a free quote!',
    heroTitle: 'Austin SEO Company',
    heroSubtitle: 'Elevate Your Brand in Austin with Expert SEO',
    heroDescription: 'TRAC delivers cutting-edge SEO solutions for businesses in Austin. Our strategies are designed to increase your online visibility, attract targeted traffic, and boost conversions in the vibrant Austin market.',
    heroImage: { src: GENERIC_CITY_HERO_IMAGE_SRC, alt: 'SEO Services in Austin, TX', dataAiHint: 'Austin city tech' },
    heroVideoUrl: 'https://www.youtube.com/embed/JBPmDzL-Xek',
    formTitle: 'Get Your FREE Austin SEO Audit!',
  },
  resultsHeadline: 'Driving SEO Success for Austin\'s Innovators',
  readyToGrowHeadline: 'Ready to Grow with Austin SEO?',
  servicesSectionHeadline: 'Specialized SEO Services for Austin',
  servicesSectionSubheadline: 'Our Austin SEO services are tailored to the dynamic tech and creative industries of Austin, Texas.',
  services: [
    { icon: Search, title: 'Austin Local SEO Optimization', description: 'Maximize your visibility in Austin\'s local search results and Google Maps.' },
    { icon: Settings, title: 'Technical SEO for Austin Startups', description: 'Ensure your website is perfectly optimized for search engines and user experience in Austin.' },
    { icon: Mail, title: 'Content & Link Building for Austin SEO', description: 'Create high-quality content and build authoritative links to boost your Austin SEO.' },
    { icon: BarChart2, title: 'Austin SEO Performance Tracking', description: 'Monitor your Austin SEO campaign with transparent, data-driven reports.' },
  ],
  whyChooseSectionHeadline: 'TRAC: Your Austin SEO Growth Partner',
  whyChooseIntro: 'For effective and innovative SEO in Austin, TRAC is the agency of choice.',
  whyChooseParagraph1: 'Austin\'s unique market requires a specialized SEO approach. We provide that expertise.',
  whyChooseParagraph2: 'We focus on delivering sustainable SEO results that help your Austin business thrive long-term.',
  whyChoosePoints: [
    { icon: 'TrendingUp', title: 'Austin SEO Results', description: 'Tangible improvements in rankings and traffic for Austin businesses.' },
    { icon: 'Lightbulb', title: 'Innovative Austin SEO', description: 'Cutting-edge SEO strategies for the Austin market.' },
    { icon: 'ShieldCheck', title: 'Trusted Austin SEO', description: 'Ethical and effective SEO tailored for Austin.' },
  ],
  awards: {
    clutch: { headline: 'Top Austin SEO Agency - Clutch 2024', text: 'Recognized for innovative SEO in Austin.' },
    upcity: { headline: 'Austin SEO Excellence - UpCity 2024', text: 'Awarded for leading SEO services in Austin.' },
  },
  location: {
    officeImageUrl: GENERIC_OFFICE_LOCATION_IMAGE_SRC,
    addressLines: ['303 SEO Way', 'Suite 30', 'Austin, TX 78701'],
    phone: CONTACT_DETAILS.phone,
    email: CONTACT_DETAILS.email,
  },
  bottomFormTitle: 'Request Your Austin SEO Plan',
};
