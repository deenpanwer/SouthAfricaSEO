
import type { CityPageData } from '@/types';
import { Search, Settings, Users, Briefcase, Mail, BarChart2, TrendingUp, Lightbulb, ShieldCheck } from 'lucide-react';
import { CONTACT_DETAILS } from '@/lib/constants.tsx';
import { GENERIC_CITY_HERO_IMAGE_SRC, GENERIC_OFFICE_LOCATION_IMAGE_SRC } from '@/lib/cityConstants';

export const phoenixData: CityPageData = {
  slug: 'phoenix',
  cityName: 'Phoenix',
  heroData: {
    pageTitle: 'Phoenix SEO Company | TRAC - SEO Services Phoenix, AZ',
    metaDescription: 'TRAC is a Phoenix SEO company helping businesses improve search rankings and drive organic traffic. Contact our Phoenix SEO experts for a free quote.',
    heroTitle: 'Phoenix SEO Company',
    heroSubtitle: 'Rise Above in Phoenix with TRAC SEO',
    heroDescription: 'TRAC provides expert SEO services for Phoenix businesses. Our tailored strategies are designed to boost your online visibility, attract local customers, and drive growth in the Phoenix market.',
    heroImage: { src: GENERIC_CITY_HERO_IMAGE_SRC, alt: 'SEO Services in Phoenix, AZ', dataAiHint: 'Phoenix desert city' },
    heroVideoUrl: 'https://www.youtube.com/embed/JBPmDzL-Xek',
    formTitle: 'Free Phoenix SEO Audit!',
  },
  resultsHeadline: 'SEO Success for Phoenix Businesses',
  readyToGrowHeadline: 'Grow Your Phoenix Business with SEO?',
  servicesSectionHeadline: 'Phoenix SEO Services',
  servicesSectionSubheadline: 'Our SEO solutions are customized for the Phoenix, Arizona market.',
  services: [
    { icon: Search, title: 'Phoenix Local SEO', description: 'Improve your local search presence in Phoenix.' },
    { icon: Settings, title: 'Technical SEO for Phoenix Sites', description: 'Optimize your website for Phoenix search engines.' },
    { icon: Mail, title: 'Content Strategy for Phoenix', description: 'Create content that targets Phoenix audiences and boosts SEO.' },
    { icon: BarChart2, title: 'Phoenix SEO Reporting', description: 'Track your SEO results in Phoenix with transparent analytics.' },
  ],
  whyChooseSectionHeadline: 'TRAC: Your Phoenix SEO Partner',
  whyChooseIntro: 'Choose TRAC for effective SEO strategies in Phoenix.',
  whyChooseParagraph1: 'We understand the Phoenix market and deliver SEO results.',
  whyChooseParagraph2: 'Our ethical SEO practices ensure long-term success for Phoenix clients.',
  whyChoosePoints: [
    { icon: 'TrendingUp', title: 'Phoenix SEO Growth', description: 'Increase visibility and leads in Phoenix.' },
    { icon: 'Lightbulb', title: 'Local Phoenix SEO', description: 'SEO for the Phoenix, AZ audience.' },
    { icon: 'ShieldCheck', title: 'Trusted Phoenix SEO', description: 'Reliable SEO services in Phoenix.' },
  ],
  awards: {
    clutch: { headline: 'Top Phoenix SEO Agency - Clutch 2024', text: 'Recognized for SEO in Phoenix.' },
    upcity: { headline: 'Phoenix SEO Excellence - UpCity 2024', text: 'Awarded for SEO services in Phoenix.' },
  },
  location: {
    officeImageUrl: GENERIC_OFFICE_LOCATION_IMAGE_SRC,
    addressLines: ['1717 SEO Way', 'Suite 170', 'Phoenix, AZ 85001'],
    phone: CONTACT_DETAILS.phone,
    email: CONTACT_DETAILS.email,
  },
  bottomFormTitle: 'Get Your Phoenix SEO Proposal',
};
