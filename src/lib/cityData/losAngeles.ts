
import type { CityPageData } from '@/types';
import { Briefcase, Search, BarChart2, Users, Settings, Mail, TrendingUp, Lightbulb, ShieldCheck } from 'lucide-react';
import { CONTACT_DETAILS } from '@/lib/constants.tsx';

const GENERIC_CITY_HERO_IMAGE_SRC = 'https://placehold.co/800x500.png';
const GENERIC_OFFICE_LOCATION_IMAGE_SRC = 'https://placehold.co/600x400.png';

export const losAngelesData: CityPageData = {
  slug: 'los-angeles',
  cityName: 'Los Angeles',
  heroData: {
    pageTitle: 'Los Angeles SEO Services | TRAC - Expert LA SEO Agency',
    metaDescription: 'TRAC offers leading SEO services for Los Angeles businesses. Increase website traffic, get more leads, and dominate LA search results. Contact us for your free SEO consultation and see how we drive growth in LA!',
    heroTitle: 'Premier Los Angeles SEO Agency Services',
    heroSubtitle: 'Capture the LA Market & Shine Online with Powerful, Tailored SEO Strategies from TRAC',
    heroDescription: 'Unlock the immense potential of your Los Angeles business with TRAC\'s expert SEO services. LA\'s diverse and competitive market demands a sophisticated, tailored approach. We specialize in creating custom SEO campaigns that drive targeted organic traffic, significantly improve search engine rankings, and deliver tangible, measurable results for your bottom line. From comprehensive local SEO targeting specific LA neighborhoods and industries to advanced e-commerce optimization and content strategies that resonate with the unique Southern California audience, TRAC covers all your SEO needs. Our process begins with understanding your specific business goals and the competitive landscape in Los Angeles, ensuring a strategy built for success. We are committed to propelling your LA business to new heights of online visibility and customer engagement through proven SEO methodologies. Let us help you make your mark in the City of Angels.',
    heroImage: {
      src: GENERIC_CITY_HERO_IMAGE_SRC,
      alt: 'View of Los Angeles skyline representing TRAC\'s SEO services',
      dataAiHint: 'los angeles skyline seo'
    },
    heroVideoUrl: 'https://www.youtube.com/embed/JBPmDzL-Xek',
    formTitle: 'Get Your FREE LA SEO Analysis!',
  },
  resultsHeadline: 'Proven SEO Results: Driving Growth for Businesses Across Los Angeles',
  readyToGrowHeadline: 'Ready to Boost Your Los Angeles SEO Performance & Market Share?',
  servicesSectionHeadline: 'Tailored SEO Services for Sustainable Los Angeles Success',
  servicesSectionSubheadline: 'Our Los Angeles SEO experts craft data-driven strategies designed to enhance your online visibility and connect you with your ideal target audience throughout LA County.',
  services: [
    {
      icon: Search,
      title: 'LA Local SEO Domination & Geo-Targeting',
      description: 'Get found by local customers across Los Angeles. We optimize your online presence for "near me" searches, enhance your Google Maps visibility in key LA neighborhoods, and build local authority to attract qualified foot traffic and service inquiries.'
    },
    {
      icon: Settings,
      title: 'Advanced Technical SEO for LA Websites',
      description: 'Our rigorous technical SEO audits ensure your website meets and exceeds search engine guidelines for optimal performance. We focus on critical factors like site speed, mobile usability for LA users, structured data (schema markup), and efficient crawlability to boost your rankings in the Los Angeles market.'
    },
    {
      icon: Users,
      title: 'Strategic Content & SEO for LA Audiences',
      description: 'Develop engaging, SEO-friendly content that speaks directly to the diverse Los Angeles market. Our content strategies aim to build authority, attract high-quality organic traffic, and guide LA users through their customer journey, from awareness to conversion.'
    },
    {
      icon: Briefcase,
      title: 'Entertainment, Media & Lifestyle SEO in LA',
      description: 'TRAC offers specialized SEO services for Los Angeles\' unique entertainment, media, fashion, and lifestyle industries. We understand the nuances of these sectors and help you reach both local LA trendsetters and a global audience seeking LA-centric content and services.'
    },
    {
      icon: Mail,
      title: 'Authoritative Link Building & Digital PR for LA Brands',
      description: 'Acquire high-quality backlinks from relevant Los Angeles and industry-specific sources to significantly boost your website’s authority and search rankings. Our ethical outreach and digital PR strategies amplify your LA brand\'s visibility.'
    },
    {
      icon: BarChart2,
      title: 'Advanced SEO Analytics & Reporting for Los Angeles',
      description: 'Monitor and refine your Los Angeles SEO strategy with in-depth analytics and transparent, easy-to-understand reporting. We focus on key growth metrics, including organic traffic, keyword positions, conversion rates, and overall campaign ROI in the LA market.'
    },
  ],
  whyChooseSectionHeadline: 'Why TRAC is the Leading & Most Trusted SEO Agency in Los Angeles',
  whyChooseIntro: 'Choose TRAC to navigate the complex and dynamic Los Angeles SEO environment. Our bespoke strategies, deep local market expertise, and unwavering commitment to delivering measurable results make us the ideal partner for your LA business\'s digital growth and online success.',
  whyChooseParagraph1: 'Los Angeles is not just a city; it\'s a collection of diverse communities and highly competitive industries. TRAC\'s SEO services are meticulously designed to cut through the digital noise, providing your LA business with a clear, strategic path to enhanced online visibility and effective customer acquisition. We champion sustainable, ethical SEO practices that build lasting value.',
  whyChooseParagraph2: 'Our dedicated team of LA SEO professionals possesses an intimate understanding of local search trends, industry-specific challenges, and the unique consumer behaviors prevalent across Southern California. We combine this invaluable local knowledge with cutting-edge SEO tools, data analytics, and innovative techniques to deliver strategies that truly perform and yield a strong return for Los Angeles businesses.',
  whyChoosePoints: [
    {
      icon: 'TrendingUp',
      title: 'LA SEO Growth & ROI Experts',
      description: 'We specialize in delivering quantifiable improvements in organic search traffic, keyword rankings, lead generation, and ultimately, conversions and revenue for our Los Angeles clients.'
    },
    {
      icon: 'Lightbulb',
      title: 'Targeted & Adaptive LA SEO Strategies',
      description: 'Our custom SEO campaigns are designed to capture the unique opportunities within the diverse Los Angeles market, adapting to algorithm changes and evolving local trends for sustained success.'
    },
    {
      icon: 'ShieldCheck',
      title: 'Data-Driven, Transparent & Ethical SEO for LA',
      description: 'We employ only ethical, white-hat SEO practices, coupled with clear, consistent reporting on your Los Angeles campaign performance. We believe in building partnerships based on trust and results.'
    },
  ],
  awards: {
    clutch: {
      headline: 'TRAC: Clutch Verified Top-Performing SEO Firm in Los Angeles for 2024',
      text: 'We are honored to be recognized by Clutch for our exceptional SEO service delivery, innovative strategies, and consistent client success stories in the greater Los Angeles metropolitan area.',
    },
    upcity: {
      headline: 'UpCity Los Angeles SEO Excellence: TRAC Named a Top Agency for 2024',
      text: 'TRAC has been awarded by UpCity for our consistent high performance, strategic insights, and outstanding SEO results achieved for businesses throughout the competitive Los Angeles market.',
    }
  },
  location: {
    officeImageUrl: GENERIC_OFFICE_LOCATION_IMAGE_SRC,
    addressLines: ['456 SEO Drive', 'Suite 200', 'Los Angeles, CA 90001'],
    phone: CONTACT_DETAILS.phone,
    email: CONTACT_DETAILS.email,
  },
  bottomFormTitle: 'Request Your FREE, In-Depth Los Angeles SEO Strategy Session',
};
