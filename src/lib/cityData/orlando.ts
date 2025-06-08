
import type { CityPageData } from '@/types';
import { Search, Settings, Briefcase, Mail, BarChart2, TrendingUp, Lightbulb, ShieldCheck } from 'lucide-react';
import { CONTACT_DETAILS } from '@/lib/constants.tsx';

const GENERIC_CITY_HERO_IMAGE_SRC = 'https://placehold.co/800x500.png';
const GENERIC_OFFICE_LOCATION_IMAGE_SRC = 'https://placehold.co/600x400.png';

export const orlandoData: CityPageData = {
  slug: 'orlando',
  cityName: 'Orlando',
  heroData: {
    pageTitle: 'Orlando SEO Company | TRAC - SEO Services Orlando, FL',
    metaDescription: 'TRAC is an Orlando SEO company helping businesses improve search rankings and drive organic traffic. Contact our Orlando SEO experts for a free quote.',
    heroTitle: 'Orlando SEO Company: Unlock Magical Online Growth',
    heroSubtitle: 'Attract More Visitors & Locals in Orlando with TRAC\'s Expert SEO',
    heroDescription: 'TRAC provides expert SEO services for Orlando businesses, a global center for tourism and family entertainment. Our tailored strategies are designed to boost your online visibility, attract local customers and international tourists, and drive growth in the competitive Orlando market. We understand the importance of ranking for terms related to theme parks, attractions, hospitality, and local services. Our approach includes comprehensive local SEO to capture "near me" searches around International Drive and other key areas, technical optimization for high-performance websites, and engaging content strategies that highlight the magic of Orlando. Partner with TRAC to enhance your digital presence and achieve enchanting SEO success in "The City Beautiful." We are committed to delivering measurable results and helping your Orlando business thrive.',
    heroImage: { src: GENERIC_CITY_HERO_IMAGE_SRC, alt: 'SEO Services in Orlando, FL', dataAiHint: 'Orlando theme park' },
    heroVideoUrl: 'https://www.youtube.com/embed/JBPmDzL-Xek',
    formTitle: 'Free Orlando SEO Audit!',
  },
  resultsHeadline: 'Achieving Magical SEO Success for Orlando Businesses',
  readyToGrowHeadline: 'Ready to Grow Your Orlando Business with World-Class SEO?',
  servicesSectionHeadline: 'Orlando SEO Services: Tailored for Tourism & Local Success',
  servicesSectionSubheadline: 'Our SEO solutions are customized for the Orlando, Florida market, focusing on driving results for businesses in tourism, hospitality, and local services catering to both visitors and residents.',
  services: [
    { icon: Search, title: 'Orlando Local & Tourism SEO Focus', description: 'Improve your local and tourist search presence in Orlando, targeting keywords related to theme parks, attractions, resorts, and convention center traffic. We optimize your Google Business Profile for maximum visibility to visitors and locals searching for Orlando experiences.' },
    { icon: Settings, title: 'Technical SEO for Orlando Sites & Booking Engines', description: 'Optimize your website for Orlando search engines and user experience, ensuring fast load times, mobile-friendliness for travelers, and proper indexing for all your pages, including booking portals and event calendars. Schema markup for attractions and events is key.' },
    { icon: Mail, title: 'Content Strategy Targeting Orlando Visitors & Residents', description: 'Create high-value, SEO-driven content (e.g., Orlando vacation guides, tips for park-goers, local business spotlights) that targets Orlando audiences, answers their questions, and boosts your website\'s authority and organic search rankings for Florida tourism and local searches.' },
    { icon: Briefcase, title: 'Attractions & Hospitality SEO in Orlando', description: 'Specialized SEO for Orlando\'s world-famous theme parks, hotels, resorts, restaurants, and entertainment venues. We understand how to market Orlando attractions to a global audience and drive direct bookings through targeted SEO efforts.'},
  ],
  whyChooseSectionHeadline: 'TRAC: Your Orlando SEO Partner for Enchanting Results',
  whyChooseIntro: 'Choose TRAC for effective SEO strategies in Orlando, designed to capture the magic of the city and convert searches into customers. We understand the unique demands of the Orlando tourism and local market.',
  whyChooseParagraph1: 'Our team possesses deep expertise in the Orlando market, especially its unparalleled tourism sector and growing local economy. We deliver SEO results by creating campaigns that resonate with families, convention-goers, and Florida residents alike, ensuring your message reaches the right audience at the right time.',
  whyChooseParagraph2: 'We employ ethical, white-hat SEO practices and data-driven insights to achieve long-term, sustainable success for our Orlando clients. Our focus is on building your brand\'s authority online and driving measurable ROI through transparent and collaborative SEO strategies tailored for "The City Beautiful."',
  whyChoosePoints: [
    { icon: 'TrendingUp', title: 'Orlando SEO Growth & Increased Bookings', description: 'Increase your online visibility, attract more qualified organic traffic from around the world, and generate more bookings and leads within the Orlando, FL market with our tailored SEO approaches specifically for the tourism and local service industries.' },
    { icon: 'Lightbulb', title: 'Localized Orlando SEO Expertise for Tourism & Beyond', description: 'Benefit from SEO strategies meticulously crafted for the Orlando, Florida audience, considering seasonal peaks, international visitor search patterns, and the competitive landscape of the world\'s top tourist destination.' },
    { icon: 'ShieldCheck', title: 'Trusted & Transparent Orlando SEO Services', description: 'Experience reliable, transparent, and effective SEO services in Orlando, focused on ethical practices and delivering measurable, long-term business success for your company. We provide comprehensive performance reports.' },
  ],
  awards: {
    clutch: { headline: 'Top Orlando SEO Agency - Clutch 2024', text: 'Recognized by Clutch for delivering magical SEO results and superior client service to businesses in the Orlando tourism and hospitality sector.' },
    upcity: { headline: 'Orlando SEO Excellence - UpCity 2024', text: 'Awarded by UpCity for premier SEO services and demonstrating consistent success in helping Orlando businesses attract more visitors and grow their online presence.' },
  },
  location: {
    officeImageUrl: GENERIC_OFFICE_LOCATION_IMAGE_SRC,
    addressLines: ['1515 SEO Dr', 'Suite 150', 'Orlando, FL 32801'],
    phone: CONTACT_DETAILS.phone,
    email: CONTACT_DETAILS.email,
  },
  bottomFormTitle: 'Get Your Orlando SEO Proposal',
};

    