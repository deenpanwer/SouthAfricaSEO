
import type { CityPageData } from '@/types';
import { Search, Settings, Users, Briefcase, Mail, BarChart2, TrendingUp, Lightbulb, ShieldCheck } from 'lucide-react';
import { CONTACT_DETAILS } from '@/lib/constants.tsx';

const GENERIC_CITY_HERO_IMAGE_SRC = 'https://placehold.co/800x500.png';
const GENERIC_OFFICE_LOCATION_IMAGE_SRC = 'https://placehold.co/600x400.png';

export const minneapolisData: CityPageData = {
  slug: 'minneapolis',
  cityName: 'Minneapolis',
  heroData: {
    pageTitle: 'Minneapolis SEO Services | TRAC - SEO Company Minneapolis, MN',
    metaDescription: 'TRAC is a Minneapolis SEO company boosting online visibility and organic traffic. Contact our Minneapolis SEO experts for a free SEO strategy session.',
    heroTitle: 'Minneapolis SEO Company',
    heroSubtitle: 'Rank Higher in Minneapolis with TRAC SEO',
    heroDescription: 'TRAC provides specialized SEO services for Minneapolis businesses. We develop tailored strategies to improve your search engine rankings, attract local customers, and drive growth in the Minneapolis market.',
    heroImage: { src: GENERIC_CITY_HERO_IMAGE_SRC, alt: 'SEO Services in Minneapolis, MN', dataAiHint: 'Minneapolis city business' },
    heroVideoUrl: 'https://www.youtube.com/embed/JBPmDzL-Xek',
    formTitle: 'Get Your FREE Minneapolis SEO Review!',
  },
  resultsHeadline: 'Delivering SEO Results for Minneapolis Businesses',
  readyToGrowHeadline: 'Ready for SEO Growth in Minneapolis?',
  servicesSectionHeadline: 'Minneapolis SEO Solutions',
  servicesSectionSubheadline: 'Our SEO services are designed to help your Minneapolis business succeed online through better search visibility.',
  services: [
    { icon: Search, title: 'Minneapolis Local SEO', description: 'Improve your visibility in Minneapolis local search results.' },
    { icon: Settings, title: 'Technical SEO Audits - Minneapolis', description: 'Optimize your website\'s technical foundation for Minneapolis SEO.' },
    { icon: Mail, title: 'Minneapolis SEO Content Creation', description: 'Develop engaging content that ranks well in Minneapolis.' },
    { icon: BarChart2, title: 'SEO Performance for Minneapolis', description: 'Track key SEO metrics for your Minneapolis campaigns.' },
  ],
  whyChooseSectionHeadline: 'TRAC: Your Minneapolis SEO Experts',
  whyChooseIntro: 'Choose TRAC for effective SEO strategies tailored to the Minneapolis market.',
  whyChooseParagraph1: 'Our team understands the Minneapolis business environment and how to achieve SEO success.',
  whyChooseParagraph2: 'We use ethical, data-driven SEO techniques for sustainable results in Minneapolis.',
  whyChoosePoints: [
    { icon: 'TrendingUp', title: 'Minneapolis Search Growth', description: 'Boost your organic rankings and traffic in Minneapolis.' },
    { icon: 'Lightbulb', title: 'Local SEO for Minneapolis', description: 'Customized SEO for the Minneapolis, MN audience.' },
    { icon: 'ShieldCheck', title: 'Trusted Minneapolis SEO Partner', description: 'Reliable and transparent SEO services in Minneapolis.' },
  ],
  awards: {
    clutch: { headline: 'Top Minneapolis SEO Agency - Clutch 2024', text: 'Recognized for SEO excellence in Minneapolis.' },
    upcity: { headline: 'Minneapolis SEO Excellence - UpCity 2024', text: 'Awarded for top SEO services in Minneapolis.' },
  },
  location: {
    officeImageUrl: GENERIC_OFFICE_LOCATION_IMAGE_SRC,
    addressLines: ['1313 SEO St', 'Suite 130', 'Minneapolis, MN 55401'],
    phone: CONTACT_DETAILS.phone,
    email: CONTACT_DETAILS.email,
  },
  bottomFormTitle: 'Request Your Minneapolis SEO Strategy',
};
