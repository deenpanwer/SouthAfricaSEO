
import type { CityPageData } from '@/types';
import { Search, Settings, Users, Briefcase, Mail, BarChart2, TrendingUp, Lightbulb, ShieldCheck } from 'lucide-react';
import { CONTACT_DETAILS } from '@/lib/constants.tsx';

const GENERIC_CITY_HERO_IMAGE_SRC = 'https://placehold.co/800x500.png';
const GENERIC_OFFICE_LOCATION_IMAGE_SRC = 'https://placehold.co/600x400.png';

export const clevelandData: CityPageData = {
  slug: 'cleveland',
  cityName: 'Cleveland',
  heroData: {
    pageTitle: 'Cleveland SEO Services | TRAC - SEO Company Cleveland, OH',
    metaDescription: 'TRAC is a Cleveland SEO company helping businesses boost online visibility and organic traffic. Contact our Cleveland SEO experts for a free SEO strategy session.',
    heroTitle: 'Cleveland SEO Company',
    heroSubtitle: 'Rank Higher in Cleveland with TRAC\'s SEO',
    heroDescription: 'TRAC offers specialized SEO services for Cleveland businesses. We develop tailored strategies to improve your search engine rankings, attract local customers, and drive growth in the Cleveland market.',
    heroImage: { src: GENERIC_CITY_HERO_IMAGE_SRC, alt: 'SEO Services in Cleveland, OH', dataAiHint: 'Cleveland city business' },
    heroVideoUrl: 'https://www.youtube.com/embed/JBPmDzL-Xek',
    formTitle: 'Get Your FREE Cleveland SEO Review!',
  },
  resultsHeadline: 'Delivering SEO Results for Cleveland Businesses',
  readyToGrowHeadline: 'Ready for SEO Growth in Cleveland?',
  servicesSectionHeadline: 'Cleveland SEO Solutions',
  servicesSectionSubheadline: 'Our SEO services are designed to help your Cleveland business succeed online.',
  services: [
    { icon: Search, title: 'Cleveland Local SEO', description: 'Improve your visibility in Cleveland local search results and attract more customers.' },
    { icon: Settings, title: 'Technical SEO Audits - Cleveland', description: 'Optimize your website\'s technical foundation for better SEO performance in Cleveland.' },
    { icon: Mail, title: 'Cleveland SEO Content Creation', description: 'Develop engaging content that ranks well in Cleveland and converts visitors.' },
    { icon: BarChart2, title: 'SEO Performance for Cleveland', description: 'Track key SEO metrics and understand your campaign\'s impact in Cleveland.' },
  ],
  whyChooseSectionHeadline: 'TRAC: Your Cleveland SEO Experts',
  whyChooseIntro: 'Choose TRAC for effective SEO strategies tailored to the Cleveland market.',
  whyChooseParagraph1: 'Our team understands the Cleveland business environment and how to achieve SEO success here.',
  whyChooseParagraph2: 'We use ethical, data-driven SEO techniques to deliver sustainable results for Cleveland clients.',
  whyChoosePoints: [
    { icon: 'TrendingUp', title: 'Cleveland Search Growth', description: 'Boost your organic rankings and traffic in Cleveland.' },
    { icon: 'Lightbulb', title: 'Local SEO for Cleveland', description: 'Customized SEO for the Cleveland, OH audience.' },
    { icon: 'ShieldCheck', title: 'Trusted Cleveland SEO Partner', description: 'Reliable and transparent SEO services in Cleveland.' },
  ],
  awards: {
    clutch: { headline: 'Top Cleveland SEO Agency - Clutch 2024', text: 'Recognized for SEO excellence in Cleveland.' },
    upcity: { headline: 'Cleveland SEO Excellence - UpCity 2024', text: 'Awarded for top SEO services in Cleveland.' },
  },
  location: {
    officeImageUrl: GENERIC_OFFICE_LOCATION_IMAGE_SRC,
    addressLines: ['505 SEO Ave', 'Suite 50', 'Cleveland, OH 44101'],
    phone: CONTACT_DETAILS.phone,
    email: CONTACT_DETAILS.email,
  },
  bottomFormTitle: 'Request Your Cleveland SEO Strategy',
};
