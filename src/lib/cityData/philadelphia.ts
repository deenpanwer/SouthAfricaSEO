
import type { CityPageData } from '@/types';
import { Search, Settings, Users, Briefcase, Mail, BarChart2, TrendingUp, Lightbulb, ShieldCheck } from 'lucide-react';
import { CONTACT_DETAILS } from '@/lib/constants.tsx';
import { GENERIC_CITY_HERO_IMAGE_SRC, GENERIC_OFFICE_LOCATION_IMAGE_SRC } from '@/lib/cityConstants';

export const philadelphiaData: CityPageData = {
  slug: 'philadelphia',
  cityName: 'Philadelphia',
  heroData: {
    pageTitle: 'Philadelphia SEO Agency | TRAC - SEO Services Philly',
    metaDescription: 'TRAC is a Philadelphia SEO agency helping businesses improve online visibility and drive organic growth. Contact our Philly SEO experts for a free consultation.',
    heroTitle: 'Philadelphia SEO Experts',
    heroSubtitle: 'Lead the Pack in Philadelphia with TRAC SEO',
    heroDescription: 'TRAC offers comprehensive SEO services for businesses in Philadelphia, Pennsylvania. Our tailored strategies focus on improving your search engine rankings, attracting qualified local traffic, and increasing your ROI in the historic Philadelphia market.',
    heroImage: { src: GENERIC_CITY_HERO_IMAGE_SRC, alt: 'SEO Services in Philadelphia, PA', dataAiHint: 'Philadelphia liberty bell' },
    heroVideoUrl: 'https://www.youtube.com/embed/JBPmDzL-Xek',
    formTitle: 'Get Your FREE Philly SEO Strategy!',
  },
  resultsHeadline: 'Delivering Historic SEO Results in Philadelphia',
  readyToGrowHeadline: 'Ready to Revolutionize Your Philadelphia SEO?',
  servicesSectionHeadline: 'Customized Philadelphia SEO Solutions',
  servicesSectionSubheadline: 'Our SEO services are designed to make your Philadelphia business a leader in organic search.',
  services: [
    { icon: Search, title: 'Philadelphia Local SEO Dominance', description: 'Dominate local search in Philadelphia and connect with more customers.' },
    { icon: Settings, title: 'Technical SEO for Philadelphia Websites', description: 'Optimize your website\'s technical health for peak SEO performance in Philadelphia.' },
    { icon: Mail, title: 'Philadelphia SEO Content Marketing', description: 'Create compelling content that ranks in Philadelphia and converts visitors.' },
    { icon: Briefcase, title: 'B2B & Historical SEO Philadelphia', description: 'Specialized SEO for Philadelphia\'s diverse business landscape, including historical and cultural attractions.'},
  ],
  whyChooseSectionHeadline: 'TRAC: Your Trusted Philadelphia SEO Agency',
  whyChooseIntro: 'Partner with TRAC for effective, data-driven SEO services in Philadelphia.',
  whyChooseParagraph1: 'Our Philadelphia SEO team has deep knowledge of the local market and its unique historical significance.',
  whyChooseParagraph2: 'We employ ethical, cutting-edge SEO techniques to deliver sustainable growth for Philadelphia businesses.',
  whyChoosePoints: [
    { icon: 'TrendingUp', title: 'Philadelphia Search Growth', description: 'Improve your organic rankings and lead generation in Philly.' },
    { icon: 'Lightbulb', title: 'Strategic Philly SEO', description: 'Targeted SEO campaigns for the Philadelphia, PA audience.' },
    { icon: 'ShieldCheck', title: 'Reliable Philly SEO Partner', description: 'Transparent and results-oriented SEO services in Philadelphia.' },
  ],
  awards: {
    clutch: { headline: 'Top Philadelphia SEO Agency - Clutch 2024', text: 'Recognized for excellence in Philadelphia SEO.' },
    upcity: { headline: 'Philadelphia SEO Excellence - UpCity 2024', text: 'Awarded for top-tier SEO services in Philly.' },
  },
  location: {
    officeImageUrl: GENERIC_OFFICE_LOCATION_IMAGE_SRC,
    addressLines: ['1616 SEO Sq', 'Suite 160', 'Philadelphia, PA 19101'],
    phone: CONTACT_DETAILS.phone,
    email: CONTACT_DETAILS.email,
  },
  bottomFormTitle: 'Request Your Philadelphia SEO Consultation',
};
