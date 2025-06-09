
import type { CityPageData } from '@/types';
import { Search, Settings, Mail, BarChart2, TrendingUp, Lightbulb, ShieldCheck } from 'lucide-react';
import { CONTACT_DETAILS } from '@/lib/constants.tsx';

const GENERIC_CITY_HERO_IMAGE_SRC = 'https://cdn-icggj.nitrocdn.com/AphBmykuaGyxZijWArNhxcCiPzVdYZGT/assets/images/optimized/rev-d6d7292/thriveagency.com/files/SEO-Company.jpg';
const GENERIC_OFFICE_LOCATION_IMAGE_SRC = 'https://cdn-icggj.nitrocdn.com/AphBmykuaGyxZijWArNhxcCiPzVdYZGT/assets/images/optimized/rev-d6d7292/thriveagency.com/files/Cleveland-Thrive-office-location.jpg';

export const louisvilleData: CityPageData = {
  slug: 'louisville',
  cityName: 'Louisville',
  heroData: {
    pageTitle: 'Louisville SEO Services | TRAC - SEO Company Louisville, KY',
    metaDescription: 'TRAC is a Louisville SEO company boosting online visibility and organic traffic. Contact our Louisville SEO experts for a free SEO strategy session.',
    heroTitle: 'Louisville SEO Company: Gallop Ahead of the Competition',
    heroSubtitle: 'Rank Higher in Louisville with TRAC\'s Winning SEO Strategies',
    heroDescription: 'TRAC provides specialized SEO services for Louisville businesses, helping you stand out in a city known for its rich history, vibrant culture, and dynamic economy. We develop tailored strategies to improve your search engine rankings, attract local customers from across Jefferson County, and drive sustainable growth in the Louisville market, whether you\'re on the Bourbon Trail or near Churchill Downs. Our comprehensive approach includes meticulous local SEO to capture "near me" searches relevant to Louisville residents and visitors, ensuring your business is visible when potential customers are actively looking. We also conduct thorough technical optimization to ensure your website provides a flawless user experience, which is crucial for converting traffic into leads. Our content creation strategies focus on material that resonates with the unique spirit of Louisville, establishing your brand as an authority in your niche. We understand the nuances of Louisville\'s key industries, including healthcare, logistics, manufacturing, and its world-renowned bourbon and equine sectors. Partner with TRAC to enhance your digital footprint and achieve measurable SEO success in Derby City. We are committed to transparent reporting and building lasting partnerships based on results.',
    heroImage: { src: GENERIC_CITY_HERO_IMAGE_SRC, alt: 'SEO Services in Louisville, KY', dataAiHint: 'Louisville city business' },
    heroVideoUrl: 'https://www.youtube.com/embed/JBPmDzL-Xek',
    formTitle: 'Get Your FREE Louisville SEO Review!',
  },
  resultsHeadline: 'Delivering Winning SEO Results for Louisville Businesses',
  readyToGrowHeadline: 'Ready for SEO Growth in Louisville? Let\'s Race to the Top!',
  servicesSectionHeadline: 'Louisville SEO Solutions: Tailored for the Bluegrass State',
  servicesSectionSubheadline: 'Our SEO services are designed to help your Louisville business succeed online through better search visibility and targeted local strategies, maximizing your reach in Kentucky.',
  services: [
    { icon: Search, title: 'Louisville Local SEO & Derby City Visibility', description: 'Improve your visibility in Louisville local search results, targeting keywords related to local attractions (like the Kentucky Derby Museum), neighborhoods (e.g., The Highlands, NuLu), and events. We optimize your Google Business Profile for maximum local impact and brand recognition.' },
    { icon: Settings, title: 'Technical SEO Audits for Louisville Businesses', description: 'Optimize your website\'s technical foundation for Louisville SEO, focusing on site speed, mobile-friendliness (essential for engaging the local community), and ensuring easy crawlability for search engines. This is key for user experience and achieving higher rankings in Louisville.' },
    { icon: Mail, title: 'Louisville SEO Content Creation & Storytelling', description: 'Develop engaging, high-quality content that ranks well in Louisville searches and tells your brand\'s unique story. We create content that appeals to both Louisville residents and visitors, highlighting local relevance, expertise, and your value proposition.' },
    { icon: BarChart2, title: 'SEO Performance Tracking for Louisville Campaigns', description: 'Track key SEO metrics for your Louisville campaigns with our clear and comprehensive reports. We focus on delivering actionable insights to continually refine your Louisville SEO strategy, improve ROI, and demonstrate tangible business growth.' },
  ],
  whyChooseSectionHeadline: 'TRAC: Your Louisville SEO Experts for a Strong Finish',
  whyChooseIntro: 'Choose TRAC for effective SEO strategies tailored to the Louisville market. We understand the local business landscape and are committed to helping you cross the finish line first in search rankings through proven, data-driven techniques.',
  whyChooseParagraph1: 'Our team understands the Louisville business environment, from its historic roots and iconic industries like bourbon and horse racing to its modern growth in healthcare and logistics. We know how to craft SEO strategies that resonate with the local community and achieve tangible success for businesses of all sizes in Louisville. Our approach is data-driven and client-focused.',
  whyChooseParagraph2: 'We use ethical, cutting-edge SEO techniques to deliver sustainable results for our Louisville clients. Our focus is on transparency, collaboration, and achieving your specific business goals through targeted search engine optimization that makes a real difference in the competitive Louisville market. We stay ahead of algorithm changes to ensure your continued success.',
  whyChoosePoints: [
    { icon: 'TrendingUp', title: 'Louisville Search Growth & Increased Leads', description: 'Boost your organic rankings, attract more qualified traffic from the Louisville metropolitan area, and generate more leads with our customized SEO strategies designed for local impact and measurable ROI. We drive results that matter.' },
    { icon: 'Lightbulb', title: 'Local SEO Expertise for Louisville & Kentucky', description: 'Benefit from customized SEO strategies built for the Louisville, KY audience, considering local market trends, iconic events like the Kentucky Derby, and competitive dynamics to give you a distinct edge in your industry.' },
    { icon: 'ShieldCheck', title: 'Trusted & Transparent Louisville SEO Partner', description: 'Experience reliable and transparent SEO services in Louisville, focused on ethical practices and achieving measurable, long-term success. We are committed to your business\'s growth and online reputation.' },
  ],
  awards: {
    clutch: { headline: 'Top Louisville SEO Agency - Clutch 2024', text: 'Recognized by Clutch for delivering exceptional SEO excellence and client satisfaction to businesses in the Louisville area. Our strategic approach and focus on results are consistently praised.' },
    upcity: { headline: 'Louisville SEO Excellence - UpCity 2024', text: 'Awarded by UpCity for top-tier SEO services and consistent success in helping Louisville businesses achieve their online goals and improve their digital presence in Kentucky and beyond.' },
  },
  location: {
    officeImageUrl: GENERIC_OFFICE_LOCATION_IMAGE_SRC,
    addressLines: ['1111 St', 'Suite 120', 'Louisville, KY 40201'],
    phone: CONTACT_DETAILS.phone,
    email: CONTACT_DETAILS.email,
  },
  bottomFormTitle: 'Request Your SEO Strategy',
};
