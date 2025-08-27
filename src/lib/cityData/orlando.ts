
import type { CityPageData } from '@/types';
import { Search, Settings, Briefcase, Mail, BarChart2, TrendingUp, Lightbulb, ShieldCheck } from 'lucide-react';
import { CONTACT_DETAILS } from '@/lib/constants.tsx';

const GENERIC_CITY_HERO_IMAGE_SRC = 'https://thriveagency.com/files/Orlando-SEO-Agency.jpg';
const GENERIC_OFFICE_LOCATION_IMAGE_SRC = 'https://cdn-icggj.nitrocdn.com/AphBmykuaGyxZijWArNhxcCiPzVdYZGT/assets/images/optimized/rev-d6d7292/thriveagency.com/files/Cleveland-Thrive-office-location.jpg';

export const orlandoData: CityPageData = {
  slug: 'orlando',
  cityName: 'Orlando',
  heroData: {
    pageTitle: 'Orlando SEO Company | TRAC - SEO Services Orlando, FL',
    metaDescription: 'TRAC is an Orlando SEO company helping businesses improve search rankings and drive organic traffic. Contact our Orlando SEO experts for a free quote.',
    heroTitle: 'Orlando SEO Company: Unlock Magical Online Growth',
    heroSubtitle: 'Attract More Visitors & Locals in Orlando with TRAC\'s Expert SEO',
    heroDescription: 'TRAC provides expert SEO services for Orlando businesses, a global center for tourism, family entertainment, and conventions. Our tailored strategies are designed to significantly boost your online visibility, attract a high volume of local customers and international tourists, and drive substantial growth in the highly competitive Orlando market. We understand the critical importance of ranking for terms related to world-famous theme parks, diverse attractions, extensive hospitality options, and local services that cater to both visitors and a rapidly growing residential population. Our comprehensive approach includes meticulous local SEO to capture "near me" searches around International Drive, Lake Buena Vista, and other key tourist and residential areas. We implement robust technical optimization to ensure your website performs at its peak for speed, mobile usability (crucial for travelers), and search engine crawlability. Our engaging content strategies are crafted to highlight the magic of Orlando and the unique value of your offerings, converting searchers into customers. Partner with TRAC to enhance your digital presence and achieve enchanting SEO success in "The City Beautiful." We are committed to delivering measurable results and helping your Orlando business thrive in this dynamic environment.',
    heroImage: { src: GENERIC_CITY_HERO_IMAGE_SRC, alt: 'SEO Services in Orlando, FL', dataAiHint: 'Orlando theme park' },
    heroVideoUrl: 'https://www.youtube.com/embed/JBPmDzL-Xek',
    formTitle: 'Free Orlando SEO Audit!',
  },
  resultsHeadline: 'Achieving Magical SEO Success for Orlando Businesses',
  readyToGrowHeadline: 'Ready to Grow Your Orlando Business with World-Class SEO?',
  servicesSectionHeadline: 'Orlando SEO Services: Tailored for Tourism & Local Success',
  servicesSectionSubheadline: 'Our SEO solutions are customized for the Orlando, Florida market, focusing on driving results for businesses in tourism, hospitality, conventions, and local services catering to both the massive visitor influx and a growing residential base.',
  services: [
    { icon: Search, title: 'Orlando Local & Tourism SEO Focus', description: 'Improve your local and tourist search presence in Orlando, targeting keywords related to theme parks (Disney World, Universal Studios), attractions (SeaWorld, I-Drive), resorts, convention center traffic, and dining. We optimize your Google Business Profile for maximum visibility to visitors and locals searching for Orlando experiences and services.' },
    { icon: Settings, title: 'Technical SEO for Orlando Sites & Booking Engines', description: 'Optimize your website for Orlando search engines and user experience, ensuring fast load times, excellent mobile-friendliness for travelers planning on the go, and proper indexing for all your pages, including complex booking portals, event calendars, and e-commerce functionalities. Schema markup for attractions, events, and hotels is key for enhanced visibility.' },
    { icon: Mail, title: 'Content Strategy Targeting Orlando Visitors & Residents', description: 'Create high-value, SEO-driven content (e.g., Orlando vacation planning guides, tips for theme park-goers, local business spotlights, convention attendee resources) that targets diverse Orlando audiences, answers their questions effectively, and boosts your website\'s authority and organic search rankings for Florida tourism and local searches.' },
    { icon: Briefcase, title: 'Attractions, Hospitality & Convention SEO in Orlando', description: 'Specialized SEO for Orlando\'s world-famous theme parks, extensive network of hotels and resorts, diverse restaurants, myriad entertainment venues, and the Orange County Convention Center ecosystem. We understand how to market Orlando attractions and services to a global audience and drive direct bookings and inquiries through targeted SEO efforts.'},
  ],
  whyChooseSectionHeadline: 'TRAC: Your Orlando SEO Partner for Enchanting Results',
  whyChooseIntro: 'Choose TRAC for effective SEO strategies in Orlando, designed to capture the magic of the city and convert searches into customers. We understand the unique demands of the Orlando tourism industry, its MICE (Meetings, Incentives, Conventions, and Exhibitions) market, and its rapidly expanding local economy.',
  whyChooseParagraph1: 'Our team possesses deep expertise in the Orlando market, especially its unparalleled tourism sector, its role as a leading convention destination, and its growing local economy. We deliver SEO results by creating campaigns that resonate with families on vacation, business travelers, convention-goers, and Florida residents alike, ensuring your message reaches the right audience at the right time with compelling calls to action.',
  whyChooseParagraph2: 'We employ ethical, white-hat SEO practices and data-driven insights to achieve long-term, sustainable success for our Orlando clients. Our focus is on building your brand\'s authority online and driving measurable ROI through transparent and collaborative SEO strategies tailored for "The City Beautiful." We constantly monitor performance and adapt to market changes.',
  whyChoosePoints: [
    { icon: 'TrendingUp', title: 'Orlando SEO Growth & Increased Bookings/Leads', description: 'Increase your online visibility, attract more qualified organic traffic from around the world and locally, and generate more bookings and leads within the Orlando, FL market with our tailored SEO approaches specifically for the tourism, hospitality, and local service industries. We focus on boosting your bottom line.' },
    { icon: 'Lightbulb', title: 'Localized Orlando SEO Expertise for Tourism & Beyond', description: 'Benefit from SEO strategies meticulously crafted for the Orlando, Florida audience, considering seasonal peaks in tourism, international visitor search patterns, major convention schedules, and the competitive landscape of the world\'s top tourist destination. We help you stand out.' },
    { icon: 'ShieldCheck', title: 'Trusted & Transparent Orlando SEO Services', description: 'Experience reliable, transparent, and effective SEO services in Orlando, focused on ethical practices and delivering measurable, long-term business success for your company. We provide comprehensive performance reports and clear communication.' },
  ],
  awards: {
    clutch: { headline: 'Top Orlando SEO Agency - Clutch 2024', text: 'Recognized by Clutch for delivering magical SEO results and superior client service to businesses in the Orlando tourism and hospitality sector, as well as local service providers. Our results speak for themselves.' },
    upcity: { headline: 'Orlando SEO Excellence - UpCity 2024', text: 'Awarded by UpCity for premier SEO services and demonstrating consistent success in helping Orlando businesses attract more visitors, bookings, and grow their online presence in a globally competitive market.' },
  },
  location: {
    officeImageUrl: GENERIC_OFFICE_LOCATION_IMAGE_SRC,
    streetAddress: '1515 Dr, Suite 150',
    addressLocality: 'Orlando',
    addressRegion: 'FL',
    postalCode: '32801',
    addressCountry: 'US',
    phone: CONTACT_DETAILS.phone,
    email: CONTACT_DETAILS.email,
    hasMap: 'https://goo.gl/maps/rS9tU0vW1x',
    geo: {
      latitude: '28.538300',
      longitude: '-81.379200',
    },
  },
  bottomFormTitle: 'Get Your SEO Proposal',
};
