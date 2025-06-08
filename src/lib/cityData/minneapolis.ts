
import type { CityPageData } from '@/types';
import { Search, Settings, Mail, BarChart2, TrendingUp, Lightbulb, ShieldCheck, Briefcase } from 'lucide-react';
import { CONTACT_DETAILS } from '@/lib/constants.tsx';

const GENERIC_CITY_HERO_IMAGE_SRC = 'https://placehold.co/800x500.png';
const GENERIC_OFFICE_LOCATION_IMAGE_SRC = 'https://placehold.co/600x400.png';

export const minneapolisData: CityPageData = {
  slug: 'minneapolis',
  cityName: 'Minneapolis',
  heroData: {
    pageTitle: 'Minneapolis SEO Services | TRAC - SEO Company Minneapolis, MN',
    metaDescription: 'TRAC is a Minneapolis SEO company boosting online visibility and organic traffic. Contact our Minneapolis SEO experts for a free SEO strategy session.',
    heroTitle: 'Minneapolis SEO Company: Cultivating Your Digital Growth',
    heroSubtitle: 'Rank Higher in Minneapolis & St. Paul with TRAC\'s Strategic SEO Solutions',
    heroDescription: 'TRAC provides specialized SEO services for Minneapolis businesses, helping you thrive in the vibrant Twin Cities market, a region known for its strong corporate presence, innovative spirit, and rich cultural scene. We develop tailored strategies to significantly improve your search engine rankings, attract local customers from Minneapolis, St. Paul, and the surrounding suburbs, and drive sustainable business growth. Our approach includes meticulous local SEO optimization for distinct Minneapolis neighborhoods like Uptown, North Loop, and Dinkytown, ensuring your business is visible to those actively searching for your services. We conduct comprehensive technical SEO audits to ensure your website performs optimally for both search engines and users, focusing on speed, mobile-friendliness, and crawlability. Our engaging content marketing strategies are designed to resonate with the unique Minneapolis community, establishing your brand as a leader in your industry. We understand the diverse economy of Minneapolis, from its Fortune 500 companies and healthcare giants to its thriving arts, culinary, and retail sectors. Partner with TRAC to enhance your digital footprint and achieve measurable SEO success in the City of Lakes.',
    heroImage: { src: GENERIC_CITY_HERO_IMAGE_SRC, alt: 'SEO Services in Minneapolis, MN', dataAiHint: 'Minneapolis city business' },
    heroVideoUrl: 'https://www.youtube.com/embed/JBPmDzL-Xek',
    formTitle: 'Get Your FREE Minneapolis SEO Review!',
  },
  resultsHeadline: 'Delivering Strong SEO Results for Minneapolis & Twin Cities Businesses',
  readyToGrowHeadline: 'Ready for SEO Growth in Minneapolis? Let\'s Build Your Strategy!',
  servicesSectionHeadline: 'Minneapolis SEO Solutions: Tailored for the Twin Cities Market',
  servicesSectionSubheadline: 'Our SEO services are designed to help your Minneapolis business succeed online through improved search visibility and targeted local customer acquisition across the metropolitan area.',
  services: [
    { icon: Search, title: 'Minneapolis Local SEO & Twin Cities Targeting', description: 'Improve your visibility in Minneapolis and St. Paul local search results. We optimize your Google Business Profile for key Minneapolis neighborhoods (e.g., Warehouse District, Linden Hills) and target keywords relevant to the broader Twin Cities metro area, increasing local foot traffic and online inquiries.' },
    { icon: Settings, title: 'Technical SEO Audits for Minneapolis Businesses', description: 'Optimize your website\'s technical foundation for Minneapolis SEO. We focus on site speed (Core Web Vitals), mobile-friendliness (critical for the active Minneapolis population), ensuring search engine crawlability, and implementing local business schema for better rankings and user experience.' },
    { icon: Mail, title: 'Minneapolis SEO Content Creation & Marketing', description: 'Develop engaging, high-quality content that ranks well in Minneapolis searches and effectively communicates your value proposition to the local audience. We create content that reflects Minneapolis culture, interests (like arts or outdoor activities), and addresses specific customer needs in the region.' },
    { icon: Briefcase, title: 'B2B & Corporate SEO for Minneapolis Companies', description: 'TRAC offers specialized SEO strategies for Minneapolis-based B2B companies and large corporations in sectors like healthcare, finance, and manufacturing. We focus on generating high-quality leads, building thought leadership, and improving online visibility within specific industries in the Twin Cities.'},
    { icon: BarChart2, title: 'SEO Performance Tracking for Minneapolis Campaigns', description: 'Track key SEO metrics for your Minneapolis campaigns with our transparent and detailed reports. We provide insights that help refine strategies, demonstrate clear ROI, and showcase the growth achieved for your Minneapolis business through organic search.' },
  ],
  whyChooseSectionHeadline: 'TRAC: Your Minneapolis SEO Experts for Sustainable Success',
  whyChooseIntro: 'Choose TRAC for effective SEO strategies tailored to the unique Minneapolis market. We understand the local business landscape, its diverse industries, and are committed to helping your brand flourish in the Twin Cities and beyond.',
  whyChooseParagraph1: 'Our team understands the Minneapolis business environment, from its strong presence in healthcare, retail, and manufacturing to its vibrant arts community and renowned educational institutions. We craft SEO strategies that resonate with the local ethos and drive tangible results for businesses across the Twin Cities, helping you connect with your target audience effectively.',
  whyChooseParagraph2: 'We use ethical, data-driven SEO techniques to deliver sustainable, long-term results for our Minneapolis clients. Our focus is on transparency, open communication, and achieving your specific business goals through targeted search engine optimization. We stay ahead of SEO trends to ensure your Minneapolis business maintains a competitive edge.',
  whyChoosePoints: [
    { icon: 'TrendingUp', title: 'Minneapolis Search Growth & Increased Leads', description: 'Boost your organic rankings, attract more qualified traffic from the Minneapolis-St. Paul area, and generate more leads with our customized SEO strategies designed for local impact and measurable business growth. We focus on quality over quantity.' },
    { icon: 'Lightbulb', title: 'Local SEO Expertise for Minneapolis & Minnesota', description: 'Benefit from customized SEO strategies built for the Minneapolis, MN audience, considering local market trends, seasonal interests (like winter sports or summer festivals), and the competitive dynamics of the Twin Cities region. We know how to reach Minnesotans.' },
    { icon: 'ShieldCheck', title: 'Trusted & Transparent Minneapolis SEO Partner', description: 'Experience reliable and transparent SEO services in Minneapolis, focused on ethical practices and achieving measurable, long-term success for your company. We are your dedicated partners in achieving digital marketing goals.' },
  ],
  awards: {
    clutch: { headline: 'Top Minneapolis SEO Agency - Clutch 2024', text: 'Recognized by Clutch for delivering exceptional SEO excellence and client satisfaction to businesses in the Minneapolis and St. Paul area. Our tailored, strategic SEO approach stands out.' },
    upcity: { headline: 'Minneapolis SEO Excellence - UpCity 2024', text: 'Awarded by UpCity for top-tier SEO services and consistent success in helping Minneapolis businesses achieve their online goals and enhance their digital footprint in the Midwest competitive landscape.' },
  },
  location: {
    officeImageUrl: GENERIC_OFFICE_LOCATION_IMAGE_SRC,
    addressLines: ['1313 SEO St', 'Suite 130', 'Minneapolis, MN 55401'],
    phone: CONTACT_DETAILS.phone,
    email: CONTACT_DETAILS.email,
  },
  bottomFormTitle: 'Request Your Minneapolis SEO Strategy',
};
