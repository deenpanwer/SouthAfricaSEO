
import type { CityPageData } from '@/types';
import { Briefcase, Search, BarChart2, Users, Settings, Mail, TrendingUp, Lightbulb, ShieldCheck } from 'lucide-react';
import { CONTACT_DETAILS } from '@/lib/constants.tsx';

const GENERIC_OFFICE_LOCATION_IMAGE_SRC = 'https://placehold.co/600x400.png';

export const portlandCityData: CityPageData = {
  slug: 'portland',
  cityName: 'Portland',
  heroData: {
    pageTitle: 'Expert Portland SEO Services | TRAC - Drive Growth in Portland, OR',
    metaDescription: 'TRAC delivers expert SEO services for Portland businesses. Boost organic traffic, improve search rankings, and achieve sustainable growth. Contact our Portland SEO specialists for a free consultation!',
    heroTitle: 'Portland SEO Agency: Propel Your Business Forward',
    heroSubtitle: 'Elevate Your Search Rankings & Visibility in Portland with TRAC',
    heroDescription: 'TRAC is a leading SEO agency dedicated to empowering Portland businesses in the competitive digital landscape. The Rose City\'s unique blend of innovation and local charm requires a nuanced SEO approach. We specialize in crafting comprehensive, data-driven SEO strategies, from meticulous local optimization targeting Portland-specific customer segments to advanced technical SEO audits and compelling content marketing plans. Our mission is to significantly enhance your online visibility, attract high-quality organic traffic, and convert searches into measurable business growth for your Portland enterprise.',
    heroImage: {
      src: 'https://thriveagency.com/files/Portland-city-img.png',
      alt: 'Skyline of Portland, Oregon, showcasing TRAC\'s SEO services',
      dataAiHint: 'portland skyline business'
    },
    heroVideoUrl: 'https://www.youtube.com/embed/JBPmDzL-Xek',
    formTitle: 'Get Your FREE Portland SEO Audit!',
  },
  resultsHeadline: 'Our Portland SEO Strategies Deliver Tangible ROI & Growth',
  readyToGrowHeadline: 'Ready to Grow Your Portland Business with Expert SEO?',
  servicesSectionHeadline: 'Comprehensive SEO Services for Portland Businesses',
  servicesSectionSubheadline: 'TRAC offers a full suite of SEO solutions tailored to the dynamic Portland, Oregon market, designed to maximize your online visibility and drive meaningful conversions.',
  services: [
    {
      icon: Search,
      title: 'Portland Local SEO Excellence',
      description: 'Dominate local search results in Portland. We optimize your Google Business Profile, build authoritative local citations, and implement geo-targeted keyword strategies to connect your business with customers actively searching in your Portland neighborhoods. This is crucial for brick-and-mortar stores and service-area businesses aiming for local market penetration.'
    },
    {
      icon: Settings,
      title: 'Advanced Technical SEO for Portland Websites',
      description: 'Ensure your website is technically sound for optimal search engine crawling, indexing, and ranking. Our Portland SEO experts conduct in-depth audits focusing on site speed, mobile-friendliness, structured data implementation, and XML sitemap optimization, critical for performing well in competitive Portland search results.'
    },
    {
      icon: Users,
      title: 'In-Depth Keyword Research & Strategy for the Portland Market',
      description: 'We identify high-intent keywords that Portland consumers and businesses are actively searching for. Our comprehensive research forms the foundation of a targeted SEO strategy, ensuring we attract relevant organic traffic that is more likely to convert into leads and sales for your Portland-based operations.'
    },
    {
      icon: Briefcase,
      title: 'E-commerce SEO Solutions for Portland Retailers',
      description: 'Drive more sales for your Portland-based online store with our specialized e-commerce SEO services. We optimize product pages, category structures, and implement effective strategies for faceted navigation, ensuring your products are found by eager buyers in the Portland area and beyond.'
    },
    {
      icon: Mail,
      title: 'Strategic Content Marketing for Portland SEO',
      description: 'Create authoritative, engaging, and Portland-relevant content that resonates with your target audience and attracts valuable backlinks. Our content strategies focus on establishing your brand as a thought leader, improving search engine rankings, and guiding Portland users through the conversion funnel.'
    },
    {
      icon: BarChart2,
      title: 'Transparent SEO Analytics & Reporting for Portland',
      description: 'Track the success of your Portland SEO campaign with clear, actionable reports. We focus on key performance indicators (KPIs) such as organic traffic growth, keyword ranking improvements, conversion rates, and overall ROI, providing you with a transparent view of your SEO investment.'
    },
  ],
  whyChooseSectionHeadline: 'Why TRAC is Your Trusted Portland SEO Partner',
  whyChooseIntro: 'Partner with TRAC for data-driven, transparent SEO in Portland. We are committed to boosting your organic search presence and achieving sustainable, long-term growth for your business in the vibrant Rose City.',
  whyChooseParagraph1: 'Choosing the right SEO agency in Portland is a critical decision for your business. You need a partner that not only understands the intricacies of search engine algorithms but also appreciates the unique character of the Portland market. TRAC stands out by employing ethical, white-hat SEO strategies focused on delivering tangible results—more organic traffic, higher quality leads, and increased sales. We believe in building a strong foundation for your digital success.',
  whyChooseParagraph2: 'Our team of dedicated Portland SEO specialists utilizes a proven, methodical approach. We begin with a comprehensive analysis of your business, your primary competitors in the Portland area, and the specific search behaviors of your target market. This deep dive allows us to craft a bespoke SEO strategy designed for maximum impact, ensuring your investment translates into a significant and enduring online presence.',
  whyChoosePoints: [
    {
      icon: 'TrendingUp',
      title: 'Proven Portland SEO Success & Growth',
      description: 'Our SEO strategies are meticulously designed for sustainable organic growth and a demonstrable return on investment for your Portland business. We focus on long-term gains, not quick, unsustainable fixes.'
    },
    {
      icon: 'Lightbulb',
      title: 'Deep Portland Market & Audience Knowledge',
      description: 'We understand the nuances of the Portland SEO landscape and local consumer search behavior. This local expertise allows us to tailor strategies that truly resonate and outperform.'
    },
    {
      icon: 'ShieldCheck',
      title: 'Ethical, Transparent & Collaborative SEO',
      description: 'We practice honest, white-hat SEO techniques, providing clear, consistent reporting on all campaigns targeting the Portland area. We see ourselves as an extension of your team.'
    },
  ],
  awards: {
    clutch: {
      headline: 'TRAC: Recognized as a Top Portland SEO Agency by Clutch in 2024',
      text: 'We are proud to be acknowledged by Clutch for our excellence in delivering impactful SEO solutions and achieving high client satisfaction for businesses throughout the Portland metropolitan area.',
    },
    upcity: {
      headline: 'UpCity SEO Excellence Award: TRAC - A Leading Agency in Portland for 2024',
      text: 'TRAC has been honored by UpCity for consistently delivering outstanding SEO service and achieving significant results for our clients in the competitive Portland market.',
    }
  },
  location: {
    officeImageUrl: 'https://thriveagency.com/files/Portland-Thrive-office-location.jpg',
    addressLines: ['121 Southwest Salmon St', '11th Floor', 'Portland, OR 97204'],
    phone: CONTACT_DETAILS.phone,
    email: CONTACT_DETAILS.email,
  },
  bottomFormTitle: 'Get Your FREE Portland SEO Audit & Proposal',
};
