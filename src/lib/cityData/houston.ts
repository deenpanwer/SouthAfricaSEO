
import type { CityPageData } from '@/types';
import { Search, Settings, Users, Briefcase, Mail, BarChart2, TrendingUp, Lightbulb, ShieldCheck } from 'lucide-react';
import { CONTACT_DETAILS } from '@/lib/constants.tsx';
import { GENERIC_CITY_HERO_IMAGE_SRC, GENERIC_OFFICE_LOCATION_IMAGE_SRC } from '@/lib/cityConstants';

export const houstonData: CityPageData = {
  slug: 'houston',
  cityName: 'Houston',
  heroData: {
    pageTitle: 'Houston SEO Services | TRAC - SEO Experts Houston, TX',
    metaDescription: 'TRAC is a Houston SEO agency helping businesses improve online visibility and drive organic growth. Contact our Houston SEO specialists for a free consultation.',
    heroTitle: 'Houston SEO Experts',
    heroSubtitle: 'Launch Your Houston Business to New Heights with SEO',
    heroDescription: 'TRAC offers comprehensive SEO services for businesses in Houston, Texas. Our tailored strategies focus on improving your search engine rankings, attracting qualified local traffic, and increasing your ROI in the competitive Houston market.',
    heroImage: { src: GENERIC_CITY_HERO_IMAGE_SRC, alt: 'SEO Services in Houston, TX', dataAiHint: 'Houston city space' },
    heroVideoUrl: 'https://www.youtube.com/embed/JBPmDzL-Xek',
    formTitle: 'Get Your FREE Houston SEO Strategy!',
  },
  resultsHeadline: 'Delivering Stellar SEO Results in Houston',
  readyToGrowHeadline: 'Ready to Skyrocket Your Houston SEO?',
  servicesSectionHeadline: 'Customized Houston SEO Solutions',
  servicesSectionSubheadline: 'Our SEO services are designed to make your Houston business a leader in organic search.',
  services: [
    { icon: Search, title: 'Houston Local SEO Strategy', description: 'Dominate local search in Houston and connect with more customers.' },
    { icon: Settings, title: 'Technical SEO for Houston Websites', description: 'Optimize your website\'s technical health for peak SEO performance in Houston.' },
    { icon: Mail, title: 'Houston SEO Content Marketing', description: 'Create compelling content that ranks in Houston and converts visitors.' },
    { icon: BarChart2, title: 'Houston SEO Performance Analytics', description: 'Track and measure your Houston SEO success with detailed reporting.' },
  ],
  whyChooseSectionHeadline: 'TRAC: Your Trusted Houston SEO Agency',
  whyChooseIntro: 'Partner with TRAC for effective, data-driven SEO services in Houston.',
  whyChooseParagraph1: 'Our Houston SEO team has deep knowledge of the local market and what it takes to succeed here.',
  whyChooseParagraph2: 'We employ ethical, cutting-edge SEO techniques to deliver sustainable growth for Houston businesses.',
  whyChoosePoints: [
    { icon: 'TrendingUp', title: 'Houston Search Growth', description: 'Improve your organic rankings and lead generation in Houston.' },
    { icon: 'Lightbulb', title: 'Strategic Houston SEO', description: 'Targeted SEO campaigns for the Houston, TX audience.' },
    { icon: 'ShieldCheck', title: 'Reliable Houston SEO Partner', description: 'Transparent and results-oriented SEO services in Houston.' },
  ],
  awards: {
    clutch: { headline: 'Top Houston SEO Agency - Clutch 2024', text: 'Recognized for excellence in Houston SEO.' },
    upcity: { headline: 'Houston SEO Excellence - UpCity 2024', text: 'Awarded for top-tier SEO services in Houston.' },
  },
  location: {
    officeImageUrl: GENERIC_OFFICE_LOCATION_IMAGE_SRC,
    addressLines: ['707 SEO Ln', 'Suite 70', 'Houston, TX 77001'],
    phone: CONTACT_DETAILS.phone,
    email: CONTACT_DETAILS.email,
  },
  bottomFormTitle: 'Request Your Houston SEO Consultation',
};
