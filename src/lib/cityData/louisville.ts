
import type { CityPageData } from '@/types';
import { Search, Settings, Users, Briefcase, Mail, BarChart2, TrendingUp, Lightbulb, ShieldCheck } from 'lucide-react';
import { CONTACT_DETAILS } from '@/lib/constants.tsx';
import { GENERIC_CITY_HERO_IMAGE_SRC, GENERIC_OFFICE_LOCATION_IMAGE_SRC } from '@/lib/cityConstants';

export const louisvilleData: CityPageData = {
  slug: 'louisville',
  cityName: 'Louisville',
  heroData: {
    pageTitle: 'Louisville SEO Services | TRAC - SEO Company Louisville, KY',
    metaDescription: 'TRAC is a Louisville SEO company boosting online visibility and organic traffic. Contact our Louisville SEO experts for a free SEO strategy session.',
    heroTitle: 'Louisville SEO Company',
    heroSubtitle: 'Rank Higher in Louisville with TRAC SEO',
    heroDescription: 'TRAC provides specialized SEO services for Louisville businesses. We develop tailored strategies to improve your search engine rankings, attract local customers, and drive growth in the Louisville market.',
    heroImage: { src: GENERIC_CITY_HERO_IMAGE_SRC, alt: 'SEO Services in Louisville, KY', dataAiHint: 'Louisville city business' },
    heroVideoUrl: 'https://www.youtube.com/embed/JBPmDzL-Xek',
    formTitle: 'Get Your FREE Louisville SEO Review!',
  },
  resultsHeadline: 'Delivering SEO Results for Louisville Businesses',
  readyToGrowHeadline: 'Ready for SEO Growth in Louisville?',
  servicesSectionHeadline: 'Louisville SEO Solutions',
  servicesSectionSubheadline: 'Our SEO services are designed to help your Louisville business succeed online through better search visibility.',
  services: [
    { icon: Search, title: 'Louisville Local SEO', description: 'Improve your visibility in Louisville local search results.' },
    { icon: Settings, title: 'Technical SEO Audits - Louisville', description: 'Optimize your website\'s technical foundation for Louisville SEO.' },
    { icon: Mail, title: 'Louisville SEO Content Creation', description: 'Develop engaging content that ranks well in Louisville.' },
    { icon: BarChart2, title: 'SEO Performance for Louisville', description: 'Track key SEO metrics for your Louisville campaigns.' },
  ],
  whyChooseSectionHeadline: 'TRAC: Your Louisville SEO Experts',
  whyChooseIntro: 'Choose TRAC for effective SEO strategies tailored to the Louisville market.',
  whyChooseParagraph1: 'Our team understands the Louisville business environment and how to achieve SEO success.',
  whyChooseParagraph2: 'We use ethical, data-driven SEO techniques for sustainable results in Louisville.',
  whyChoosePoints: [
    { icon: 'TrendingUp', title: 'Louisville Search Growth', description: 'Boost your organic rankings and traffic in Louisville.' },
    { icon: 'Lightbulb', title: 'Local SEO for Louisville', description: 'Customized SEO for the Louisville, KY audience.' },
    { icon: 'ShieldCheck', title: 'Trusted Louisville SEO Partner', description: 'Reliable and transparent SEO services in Louisville.' },
  ],
  awards: {
    clutch: { headline: 'Top Louisville SEO Agency - Clutch 2024', text: 'Recognized for SEO excellence in Louisville.' },
    upcity: { headline: 'Louisville SEO Excellence - UpCity 2024', text: 'Awarded for top SEO services in Louisville.' },
  },
  location: {
    officeImageUrl: GENERIC_OFFICE_LOCATION_IMAGE_SRC,
    addressLines: ['1111 SEO St', 'Suite 110', 'Louisville, KY 40201'],
    phone: CONTACT_DETAILS.phone,
    email: CONTACT_DETAILS.email,
  },
  bottomFormTitle: 'Request Your Louisville SEO Strategy',
};
