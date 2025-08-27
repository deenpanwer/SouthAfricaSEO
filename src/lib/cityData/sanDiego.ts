
import type { CityPageData } from '@/types';
import { Search, Settings, Briefcase, Mail, BarChart2, TrendingUp, Lightbulb, ShieldCheck } from 'lucide-react';
import { CONTACT_DETAILS } from '@/lib/constants.tsx';

const GENERIC_CITY_HERO_IMAGE_SRC = 'https://cdn-icggj.nitrocdn.com/AphBmykuaGyxZijWArNhxcCiPzVdYZGT/assets/images/optimized/rev-d6d7292/thriveagency.com/files/sandeigo-seo-2.jpg';
const GENERIC_OFFICE_LOCATION_IMAGE_SRC = 'https://cdn-icggj.nitrocdn.com/AphBmykuaGyxZijWArNhxcCiPzVdYZGT/assets/images/optimized/rev-d6d7292/thriveagency.com/files/Digital-Marketing-Agency-in-San-Diego.jpg';

export const sanDiegoData: CityPageData = {
  slug: 'san-diego',
  cityName: 'San Diego',
  heroData: {
    pageTitle: 'San Diego SEO Company | TRAC - SEO Services San Diego, CA',
    metaDescription: 'TRAC is a San Diego SEO company helping businesses improve search rankings and drive organic traffic. Contact our San Diego SEO experts for a free quote.',
    heroTitle: 'San Diego SEO Company: Ride the Wave to Online Success',
    heroSubtitle: 'Sunny SEO Success in San Diego with TRAC\'s Expert Strategies',
    heroDescription: 'TRAC provides expert SEO services for San Diego businesses, designed to help you thrive in America\'s Finest City, a region celebrated for its beautiful beaches, vibrant culture, and innovative economy. Our tailored strategies boost your online visibility, attract local customers from La Jolla to Gaslamp Quarter and Chula Vista, and drive significant growth in the competitive San Diego market. We understand the diverse economy, from its leading biotech and defense sectors to thriving tourism, craft breweries, and a strong startup culture. Our comprehensive approach includes targeted local SEO to capture San Diego-specific searches across its many distinct neighborhoods. We implement advanced technical website optimization for optimal performance on all devices and develop compelling content creation that captures the SoCal lifestyle, resonating with both San Diegans and visitors. Partner with TRAC to harness the power of SEO and achieve lasting success in this beautiful coastal city. We are committed to delivering measurable results, transparent reporting, and building strong, collaborative client relationships.',
    heroImage: { src: GENERIC_CITY_HERO_IMAGE_SRC, alt: 'SEO Services in San Diego, CA', dataAiHint: 'San Diego beach city' },
    heroVideoUrl: 'https://www.youtube.com/embed/JBPmDzL-Xek',
    formTitle: 'Free San Diego SEO Audit!',
  },
  resultsHeadline: 'Achieving Sunny SEO Success for San Diego Businesses',
  readyToGrowHeadline: 'Ready to Grow Your San Diego Business with High-Performance SEO?',
  servicesSectionHeadline: 'San Diego SEO Services: Tailored for California\'s Beach City',
  servicesSectionSubheadline: 'Our SEO solutions are customized for the San Diego, California market, focusing on connecting businesses with local residents, tourists, and key industries like biotech, defense, and tourism. We help you make waves online.',
  services: [
    { icon: Search, title: 'San Diego Local SEO & Neighborhood Targeting', description: 'Improve your local search presence in San Diego, targeting specific communities like North Park, Coronado, Carlsbad, Encinitas, and Downtown. We optimize your Google Business Profile and build relevant local citations to attract more customers searching for San Diego-based services and attractions.' },
    { icon: Settings, title: 'Technical SEO for San Diego Sites & Startups', description: 'Optimize your website’s technical framework for San Diego search engines and user experience. This includes ensuring fast load times (Core Web Vitals), mobile-friendliness for an active, outdoor-loving populace, robust site security, and proper indexing. We also specialize in SEO for San Diego\'s dynamic tech and biotech startups.' },
    { icon: Mail, title: 'Content Strategy Targeting San Diego Lifestyles & Tourism', description: 'Create high-value, SEO-driven content (e.g., guides to San Diego beaches and surf spots, articles on local tech innovations, Balboa Park event highlights) that targets San Diego audiences, answers their questions effectively, and boosts your website\'s authority and organic search rankings in Southern California.' },
    { icon: Briefcase, title: 'Biotech, Defense, Tourism & Craft Beer SEO in San Diego', description: 'Specialized SEO for San Diego\'s prominent biotech, defense, and tourism sectors, as well as its famous craft beer scene. We understand the unique terminology, target audiences, and regulatory considerations for these industries, crafting effective SEO strategies to reach decision-makers, travelers, and local enthusiasts alike.'},
  ],
  whyChooseSectionHeadline: 'TRAC: Your Dedicated San Diego SEO Partner for a Brighter Online Future',
  whyChooseIntro: 'Choose TRAC for effective, results-driven SEO strategies specifically designed for the San Diego market. We understand the local business climate, from its innovative industries and strong military presence to its laid-back lifestyle, and how to make your brand stand out online.',
  whyChooseParagraph1: 'Our San Diego SEO team possesses a deep understanding of the local market dynamics, its strong connection to the military and research institutions (like UCSD), its appeal as a major tourist destination, and its vibrant startup ecosystem. We craft SEO strategies that are not only effective but also resonate with the unique character and opportunities present in San Diego County, helping you connect with your ideal clientele.',
  whyChooseParagraph2: 'We are committed to using ethical, white-hat SEO practices to achieve long-term, sustainable success for our San Diego clients. Our focus is on building your brand\'s authority and online visibility in a way that earns trust from both search engines and users in the San Diego area. We provide transparent reporting, continuous optimization based on data, and proactive communication.',
  whyChoosePoints: [
    { icon: 'TrendingUp', title: 'San Diego SEO Growth & Increased Market Share', description: 'Increase your online visibility, attract more qualified organic traffic, and generate more leads within the competitive San Diego, CA market with our tailored SEO approaches. We help you capture more of San Diego\'s diverse and affluent economy, driving real business growth.' },
    { icon: 'Lightbulb', title: 'Localized San Diego SEO Expertise & Industry Focus', description: 'Benefit from SEO strategies meticulously crafted for the San Diego, California audience, considering local search trends (e.g., for outdoor activities, family attractions), industry competition (e.g., in biotech, tourism, craft beer, real estate), and regional economic factors to give you a significant edge.' },
    { icon: 'ShieldCheck', title: 'Trusted & Transparent San Diego SEO Services', description: 'Experience reliable, transparent, and effective SEO services in San Diego, focused on ethical practices and delivering measurable, long-term business success for your company. Our client success stories and clear reporting in San Diego speak volumes about our commitment.' },
  ],
  awards: {
    clutch: { headline: 'Top San Diego SEO Agency - Clutch 2024', text: 'Recognized by Clutch for delivering impactful SEO results and superior client service to businesses in the dynamic San Diego area, particularly in tech, biotech, and tourism. Our innovative approach is consistently recognized.' },
    upcity: { headline: 'San Diego SEO Excellence Award - UpCity 2024', text: 'Awarded by UpCity for premier SEO services and demonstrating consistent success in helping San Diego businesses grow their online presence and achieve their digital marketing objectives in Southern California\'s competitive landscape.' },
  },
  location: {
    officeImageUrl: GENERIC_OFFICE_LOCATION_IMAGE_SRC,
    streetAddress: '402 West Broadway, Suite 400',
    addressLocality: 'San Diego',
    addressRegion: 'CA',
    postalCode: '92101',
    addressCountry: 'US',
    phone: CONTACT_DETAILS.phone,
    email: CONTACT_DETAILS.email,
    hasMap: 'https://goo.gl/maps/uVwXyZ1aB2',
    geo: {
      latitude: '32.715700',
      longitude: '-117.161100',
    },
  },
  bottomFormTitle: 'Get Your SEO Proposal',
};
