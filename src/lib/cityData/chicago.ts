
import type { CityPageData } from '@/types';
import { Briefcase, Search, BarChart2, Users, Settings, Mail, TrendingUp, Lightbulb, ShieldCheck } from 'lucide-react';
import { CONTACT_DETAILS } from '@/lib/constants.tsx';

const GENERIC_CITY_HERO_IMAGE_SRC = 'https://cdn-icggj.nitrocdn.com/AphBmykuaGyxZijWArNhxcCiPzVdYZGT/assets/images/optimized/rev-d6d7292/thriveagency.com/files/SEO-Company.jpg';
const GENERIC_OFFICE_LOCATION_IMAGE_SRC = 'https://cdn-icggj.nitrocdn.com/AphBmykuaGyxZijWArNhxcCiPzVdYZGT/assets/images/optimized/rev-d6d7292/thriveagency.com/files/Chicago-Thrive-office-location.jpg';

export const chicagoData: CityPageData = {
  slug: 'chicago',
  cityName: 'Chicago',
  heroData: {
    pageTitle: 'Chicago SEO Agency | TRAC - Expert SEO Services in Chicago, IL',
    metaDescription: 'TRAC is your trusted Chicago SEO agency. We help businesses in Chicago improve search rankings, drive targeted organic traffic, and significantly increase sales. Contact us for a free SEO audit and strategy session!',
    heroTitle: 'Chicago SEO Company: Driving Growth in the Windy City',
    heroSubtitle: 'Boost Your Visibility & Outperform Competitors in Chicago with TRAC\'s Expert SEO Expertise',
    heroDescription: 'Navigate Chicago\'s competitive and diverse digital market with TRAC, your dedicated expert SEO partner. We craft bespoke, data-informed SEO strategies focusing on effective local Chicago optimization to connect you with your ideal customers. Our robust technical SEO excellence ensures your website performs optimally for both users and search engines across all devices. Furthermore, our impactful content marketing initiatives, tailored for Chicago audiences, are designed to engage and convert your target audience, from Lincoln Park to the Loop. Our goal is to ensure your business not only stands out but also attracts high-quality, qualified leads, ultimately driving measurable growth for your Chicago presence. We achieve this through our proven SEO methodologies, continuous analysis of the Chicago market (including its major industries like finance, manufacturing, and tech), and adaptation to the latest search algorithm updates. Trust TRAC to elevate your Chicago business to new heights in online search.',
    heroImage: {
      src: GENERIC_CITY_HERO_IMAGE_SRC,
      alt: 'Chicago city skyline, illustrating TRAC\'s SEO services',
      dataAiHint: 'chicago skyline buildings'
    },
    heroVideoUrl: 'https://www.youtube.com/embed/JBPmDzL-Xek',
    formTitle: 'Get Your FREE Chicago SEO Plan!',
  },
  resultsHeadline: 'Driving Verifiable SEO Success & ROI for Chicago Businesses',
  readyToGrowHeadline: 'Ready to Elevate Your Chicago SEO Game & Market Reach?',
  servicesSectionHeadline: 'Specialized & Comprehensive SEO Services for Chicago',
  servicesSectionSubheadline: 'Our Chicago SEO services are meticulously designed to meet the unique challenges and seize the opportunities presented by the Windy City\'s dynamic market, delivering superior search engine performance and business growth across all key industries.',
  services: [
    {
      icon: Search,
      title: 'Chicago Local SEO Services & Optimization',
      description: 'Enhance your visibility in Chicago local search results. We optimize your online listings (Google Business Profile, Yelp, etc.), target local neighborhood keywords (e.g., "Wicker Park boutiques," "River North restaurants"), and build local authority to attract customers in your specific Chicago service areas and communities.'
    },
    {
      icon: Settings,
      title: 'Advanced Technical SEO for Chicago Websites',
      description: 'Our Chicago SEO experts conduct thorough technical audits to improve site speed (Core Web Vitals), mobile-friendliness, indexability, and overall search engine compatibility. A technically sound website, with proper structured data and internal linking, is crucial for ranking in Chicago\'s competitive digital space.'
    },
    {
      icon: Users,
      title: 'Chicago Keyword Intelligence & Competitor Analysis',
      description: 'Gain a deep understanding of what your Chicago customers are searching for and how your local competitors are positioned. We build data-driven SEO strategies based on comprehensive keyword research (long-tail, semantic) and market analysis for Chicago, identifying untapped opportunities.'
    },
    {
      icon: Briefcase,
      title: 'Strategic SEO for Financial & Professional Services in Chicago',
      description: 'TRAC offers tailored SEO for Chicago\'s robust financial and professional services sectors (e.g., law firms, consultancies). Our strategies help firms build trust, enhance online reputation, and attract high-value clients through targeted organic search visibility and thought leadership content.'
    },
    {
      icon: Mail,
      title: 'SEO-Driven Content Marketing for Chicago Engagement',
      description: 'Create high-quality, engaging, and authoritative content that specifically addresses the needs and interests of your Chicago audience (e.g., guides to Chicago events, industry insights for local businesses). This not only improves your search engine rankings but also establishes your brand as a valuable resource in the Chicago area.'
    },
    {
      icon: BarChart2,
      title: 'Chicago SEO Reporting, Analytics & Performance Tracking',
      description: 'Gain clear, actionable insights into your Chicago SEO performance with our comprehensive, transparent reporting. We focus on tracking key metrics like organic traffic growth, keyword ranking improvements for Chicago-based terms, lead generation, conversions, and overall campaign ROI.'
    },
  ],
  whyChooseSectionHeadline: 'Choose TRAC: Your Dedicated Partner for SEO Success in Chicago',
  whyChooseIntro: 'TRAC is the SEO agency Chicago businesses trust for sustainable growth and digital dominance. Our unwavering commitment to data-driven strategies, transparent communication, and delivering measurable results sets us apart in the competitive Chicago SEO landscape.',
  whyChooseParagraph1: 'In the bustling and diverse Chicago market, a one-size-fits-all SEO approach is ineffective. TRAC develops customized SEO strategies that meticulously reflect the unique character of your Chicago business and the specific needs and search behaviors of your target audience, whether they are in the Gold Coast or South Side. We focus on building a strong, lasting online foundation and improving your digital footprint across all relevant platforms.',
  whyChooseParagraph2: 'Our team of dedicated Chicago SEO professionals stays at the forefront of search engine algorithm changes and emerging digital marketing trends. This ensures your business maintains a significant competitive edge. We focus on building a strong, sustainable online presence through ethical, effective, and innovative SEO practices tailored for Chicago, from on-page optimization to local link building and reputation management.',
  whyChoosePoints: [
    {
      icon: 'TrendingUp',
      title: 'Chicago-Focused SEO Growth & Market Penetration',
      description: 'Achieve significant, measurable improvements in organic visibility, lead generation, and customer acquisition within the highly competitive Chicago market through our expert SEO services. We understand how to make your business stand out in the Windy City.'
    },
    {
      icon: 'Lightbulb',
      title: 'Strategic Chicago SEO Insights & Competitive Edge',
      description: 'Leverage our deep understanding of the Chicago search landscape, local consumer behavior (including seasonal trends and event-driven searches), and industry trends to comprehensively outperform your competitors and capture greater market share.'
    },
    {
      icon: 'ShieldCheck',
      title: 'Reliable, Transparent & Ethical SEO for Chicago',
      description: 'We provide clear, honest, and ethical SEO services with a steadfast focus on long-term success and building enduring partnerships with our Chicago clients based on trust and proven results. All strategies adhere to Google\'s best practices.'
    },
  ],
  awards: {
    clutch: {
      headline: 'TRAC: A Top-Ranked & Reviewed Chicago SEO Company by Clutch for 2024',
      text: 'Clutch, a leading B2B review platform, consistently recognizes TRAC for delivering exceptional SEO results and maintaining superior client service standards for businesses across the Chicagoland area. Our clients\' success stories speak for themselves.',
    },
    upcity: {
      headline: 'UpCity National Excellence Award: TRAC - Premier Chicago SEO Agency 2024',
      text: 'TRAC has been proudly awarded by UpCity for our outstanding SEO performance, strategic innovation, and unwavering dedication to client success in the dynamic Chicago digital marketplace. We are committed to leading the way in Chicago SEO.',
    }
  },
  location: {
    officeImageUrl: GENERIC_OFFICE_LOCATION_IMAGE_SRC,
    addressLines: ['70 W Madison St', 'Suite 1400', 'Chicago, IL 60602'],
    phone: CONTACT_DETAILS.phone,
    email: CONTACT_DETAILS.email,
  },
  bottomFormTitle: 'Get Your FREE, No-Obligation SEO Consultation',
};

    