
import type { CityPageData } from '@/types';
import { Briefcase, Search, BarChart2, Users, Settings, Mail, TrendingUp, Lightbulb, ShieldCheck } from 'lucide-react';
import { CONTACT_DETAILS } from '@/lib/constants.tsx';

const GENERIC_OFFICE_LOCATION_IMAGE_SRC = 'https://placehold.co/600x400.png';

export const dallasCityData: CityPageData = {
  slug: 'dallas',
  cityName: 'Dallas',
  heroData: {
    pageTitle: 'Dallas SEO Company | TRAC - Expert SEO Services in Dallas, TX',
    metaDescription: 'TRAC is a top-rated Dallas SEO company. We help Dallas businesses increase organic traffic, generate more leads, and boost sales through effective and ethical SEO. Contact us for a free strategy session!',
    heroTitle: 'Dallas SEO Experts: Drive Your Business Growth',
    heroSubtitle: 'Achieve Top Search Rankings & Dominate the Dallas Market with TRAC\'s Proven SEO Solutions',
    heroDescription: 'TRAC is a results-driven SEO company providing premier services to businesses across Dallas, Texas. The DFW metroplex is a hub of economic activity, and a strong online presence is non-negotiable for ambitious companies. We offer a full suite of SEO services, including hyper-local SEO tailored for the diverse Dallas market, advanced technical SEO for optimal site performance, strategic high-quality link building, and impactful content strategy designed to convert. Our approach begins with a deep dive into your Dallas business objectives and target audience, ensuring every SEO tactic aligns with your growth goals. We focus on building long-term authority and visibility, helping you connect with more customers in Dallas and stand out in a crowded digital landscape. Our team stays ahead of SEO trends to provide cutting-edge solutions, from optimizing for voice search to leveraging local schema markup. Let us help you navigate the complexities of search engine optimization and achieve lasting success in the DFW area.',
    heroImage: {
      src: 'https://cdn-icggj.nitrocdn.com/AphBmykuaGyxZijWArNhxcCiPzVdYZGT/assets/images/optimized/rev-d6d7292/thriveagency.com/files/Dallas-city-img.png',
      alt: 'Dallas skyline highlighting TRAC\'s SEO services for local businesses',
      dataAiHint: 'dallas city seo'
    },
    heroVideoUrl: 'https://www.youtube.com/embed/JBPmDzL-Xek',
    formTitle: 'Get Your FREE Dallas SEO Quote!',
  },
  resultsHeadline: 'Our Dallas SEO Strategies Consistently Deliver Real ROI',
  readyToGrowHeadline: 'Ready to Dominate Dallas Search Results with Expert SEO?',
  servicesSectionHeadline: 'Customized Dallas SEO Services for Lasting Success',
  servicesSectionSubheadline: 'TRAC provides SEO strategies specifically designed for businesses in the Dallas-Fort Worth area, aiming to enhance online presence and attract a steady stream of targeted customers. Our local Dallas expertise means we understand the market nuances.',
  services: [
    {
      icon: Search,
      title: 'Dallas Local SEO & Map Optimization',
      description: 'Maximize your visibility in Dallas local search results and Google Maps. We connect your business with local customers actively searching for your services within the DFW area, optimizing listings (Google Business Profile, Bing Places) and targeting community-specific keywords to drive foot traffic and local inquiries. We also manage local citations for consistency.'
    },
    {
      icon: Settings,
      title: 'Comprehensive Website Technical SEO for Dallas',
      description: 'Our Dallas SEO experts conduct thorough on-page and technical SEO audits to ensure your website is perfectly optimized for search engines and provides an excellent user experience for Dallas visitors. This includes site speed optimization (LCP, FID, CLS), mobile responsiveness, crawlability enhancements, internal linking strategy, and structured data implementation.'
    },
    {
      icon: Users,
      title: 'Dallas Audience & Keyword Targeting',
      description: 'We identify and target the most profitable keywords specific to the Dallas market, including transactional and informational queries. Our data-driven SEO strategies focus on high-conversion search terms, ensuring your content reaches the Dallas audience most likely to engage with your business and become customers.'
    },
    {
      icon: Briefcase,
      title: 'B2B SEO Solutions for Dallas Corporations',
      description: 'TRAC offers specialized SEO strategies for B2B companies in Dallas, focusing on generating high-quality leads through organic search. We aim to establish your business as an industry authority, attracting decision-makers in the Dallas corporate landscape by optimizing for relevant industry terms and building thought leadership content.'
    },
    {
      icon: Mail,
      title: 'SEO Content & Digital Authority Building in Dallas',
      description: 'Develop high-quality, Dallas-relevant content that not only attracts engagement but also earns authoritative backlinks. Our content strategies establish your expertise, address user intent effectively, and significantly improve your search rankings within the Dallas market through well-researched articles, blog posts, and landing pages.'
    },
    {
      icon: BarChart2,
      title: 'Dallas SEO Performance Analytics & Insights',
      description: 'Track your Dallas SEO campaign\'s progress with clear, actionable, and transparent reports. We focus on metrics that directly contribute to organic business growth, including traffic, rankings, lead generation, sales in the Dallas area, and comprehensive ROI analysis.'
    },
  ],
  whyChooseSectionHeadline: 'Why TRAC is the Go-To SEO Agency in Dallas, TX',
  whyChooseIntro: 'Choose TRAC for unparalleled SEO expertise tailored to the Dallas market. We deliver data-driven strategies and tangible results, helping your Dallas business thrive in the competitive DFW digital landscape through superior search engine optimization techniques and dedicated local support.',
  whyChooseParagraph1: 'In the dynamic and expansive Dallas market, a generic, one-size-fits-all SEO approach simply won\'t deliver sustainable results. TRAC provides bespoke SEO services that deeply understand Dallas-specific consumer search behavior, key industry trends, and the intense competitive pressures. We prioritize clear, consistent communication and foster a true partnership approach to achieve your specific business objectives through strategic organic search engine optimization.',
  whyChooseParagraph2: 'Our team of seasoned Dallas SEO experts is adept at navigating the complexities of modern search engine algorithms and leveraging local market intelligence. We combine cutting-edge technical proficiency with creative content strategies and ethical, sustainable link-building practices to deliver long-term success and a dominant online presence for your Dallas-based company. We are committed to your growth.',
  whyChoosePoints: [
    {
      icon: 'TrendingUp',
      title: 'Measurable Dallas SEO & Business Growth',
      description: 'We are laser-focused on delivering quantifiable SEO results, from significant increases in organic traffic and keyword rankings to higher conversion rates and improved ROI for Dallas businesses. Our reports provide full transparency.'
    },
    {
      icon: 'Lightbulb',
      title: 'In-Depth Local Dallas SEO Market Insight',
      description: 'Our team possesses extensive knowledge of the Dallas-Fort Worth SEO market, its diverse industries (from tech to real estate), and local economic factors, ensuring our strategies resonate effectively and rank prominently for your target audience.'
    },
    {
      icon: 'ShieldCheck',
      title: 'Transparent, Ethical & Long-Term SEO Practices',
      description: 'We believe in building lasting trust through open communication and strictly ethical, white-hat SEO strategies. Our commitment is to the long-term success and online reputation of our Dallas clients, adhering to all search engine guidelines.'
    },
  ],
  awards: {
    clutch: {
      headline: 'TRAC: Clutch\'s Choice for Top-Performing Dallas SEO Agency in 2024',
      text: 'We are proud to be recognized by Clutch for consistently delivering outstanding SEO results and exceptional client satisfaction to businesses operating within the Dallas metroplex. This reflects our dedication to client success through effective SEO.',
    },
    upcity: {
      headline: 'UpCity SEO Excellence Award: TRAC Shines Bright in Dallas for 2024',
      text: 'TRAC has been honored by UpCity as a leading SEO agency in Dallas, a testament to our commitment to innovative strategies, client success, and leadership in organic search. We strive for excellence in every Dallas campaign.',
    }
  },
  location: {
    officeImageUrl: GENERIC_OFFICE_LOCATION_IMAGE_SRC,
    addressLines: ['2626 Cole Ave', 'Suite 488', 'Dallas, TX 75204'],
    phone: CONTACT_DETAILS.phone,
    email: CONTACT_DETAILS.email,
  },
  bottomFormTitle: 'Get Your FREE Dallas SEO Strategy Session',
};

    