
import type { CityPageData } from '@/types';
import { Briefcase, Search, BarChart2, Users, Settings, Mail, TrendingUp, Lightbulb, ShieldCheck } from 'lucide-react';
import { CONTACT_DETAILS } from '@/lib/constants.tsx';
import { GENERIC_CITY_HERO_IMAGE_SRC, GENERIC_OFFICE_LOCATION_IMAGE_SRC } from '@/lib/cityConstants';

export const chicagoData: CityPageData = {
  slug: 'chicago',
  cityName: 'Chicago',
  heroData: {
    pageTitle: 'Chicago SEO Agency | TRAC - Expert SEO Services in Chicago, IL',
    metaDescription: 'TRAC is your trusted Chicago SEO agency. We help businesses in Chicago improve search rankings, drive organic traffic, and increase sales. Contact us for a free SEO audit!',
    heroTitle: 'Chicago SEO Company',
    heroSubtitle: 'Boost Your Visibility in Chicago with TRAC\'s SEO Expertise',
    heroDescription: 'Navigate Chicago\'s competitive digital market with TRAC, your expert SEO partner. We craft bespoke SEO strategies focusing on local Chicago optimization, technical excellence, and impactful content marketing to ensure your business stands out and attracts qualified leads. Grow your Chicago presence with our proven SEO methodologies.',
    heroImage: {
      src: GENERIC_CITY_HERO_IMAGE_SRC,
      alt: 'SEO Services in Chicago by TRAC',
      dataAiHint: 'chicago skyline buildings'
    },
    heroVideoUrl: 'https://www.youtube.com/embed/JBPmDzL-Xek',
    formTitle: 'Get Your FREE Chicago SEO Plan!',
  },
  resultsHeadline: 'Driving SEO Success for Chicago Businesses',
  readyToGrowHeadline: 'Ready to Elevate Your Chicago SEO Game?',
  servicesSectionHeadline: 'Specialized SEO Services for Chicago',
  servicesSectionSubheadline: 'Our Chicago SEO services are designed to meet the unique challenges and opportunities of the Windy City market, delivering superior search engine performance.',
  services: [
    { icon: Search, title: 'Chicago Local SEO Services', description: 'Enhance your visibility in Chicago local search. We optimize your online listings and target local keywords to attract customers in your Chicago neighborhood.' },
    { icon: Settings, title: 'Technical SEO for Chicago Websites', description: 'Our Chicago SEO experts conduct thorough technical audits to improve site speed, mobile-friendliness, and overall search engine compatibility.' },
    { icon: Users, title: 'Chicago Keyword & Competitor Analysis', description: 'Understand what your Chicago customers are searching for and how your competitors are performing. We build data-driven SEO strategies.' },
    { icon: Briefcase, title: 'SEO for Financial Services in Chicago', description: 'Tailored SEO for Chicago\'s robust financial sector, helping firms build trust and attract high-value clients through organic search.' },
    { icon: Mail, title: 'SEO-Driven Content Marketing for Chicago', description: 'Create high-quality, engaging content that addresses the needs of your Chicago audience and improves your search engine rankings.' },
    { icon: BarChart2, title: 'Chicago SEO Reporting & Analytics', description: 'Gain clear insights into your Chicago SEO performance with our comprehensive reporting, focusing on traffic, rankings, and conversions.' },
  ],
  whyChooseSectionHeadline: 'Choose TRAC: Your Partner for SEO Success in Chicago',
  whyChooseIntro: 'TRAC is the SEO agency Chicago businesses trust. Our commitment to data-driven strategies, transparency, and measurable results sets us apart in the Chicago SEO landscape.',
  whyChooseParagraph1: 'In the bustling Chicago market, a one-size-fits-all SEO approach doesn\'t work. TRAC develops customized SEO strategies that reflect the unique character of your Chicago business and the specific needs of your target audience.',
  whyChooseParagraph2: 'Our team of dedicated Chicago SEO professionals stays ahead of algorithm changes and emerging trends to ensure your business maintains a competitive edge. We focus on building a strong, sustainable online presence through ethical and effective SEO.',
  whyChoosePoints: [
    { icon: 'TrendingUp', title: 'Chicago-Focused SEO Growth', description: 'Achieve significant improvements in organic visibility and lead generation within the Chicago market.' },
    { icon: 'Lightbulb', title: 'Strategic Chicago SEO Insights', description: 'Leverage our deep understanding of the Chicago search landscape to outperform your competitors.' },
    { icon: 'ShieldCheck', title: 'Reliable & Transparent SEO', description: 'We provide clear, honest SEO services with a focus on long-term success for our Chicago clients.' },
  ],
  awards: {
    clutch: {
      headline: 'TRAC: A Top-Ranked Chicago SEO Company by Clutch 2024',
      text: 'Clutch recognizes TRAC for delivering exceptional SEO results and superior client service to businesses across Chicago.',
    },
    upcity: {
      headline: 'UpCity National Excellence: TRAC - Premier Chicago SEO Agency 2024',
      text: 'TRAC has been awarded by UpCity for our outstanding SEO performance and dedication to client success in the Chicago area.',
    }
  },
  location: {
    officeImageUrl: GENERIC_OFFICE_LOCATION_IMAGE_SRC,
    addressLines: ['789 SEO Plaza', 'Suite 300', 'Chicago, IL 60601'],
    phone: CONTACT_DETAILS.phone,
    email: CONTACT_DETAILS.email,
  },
  bottomFormTitle: 'Get Your FREE Chicago SEO Consultation',
};
