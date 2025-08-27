
import type { CityPageData } from '@/types';
import { Search, Settings, Briefcase, Mail, BarChart2, TrendingUp, Lightbulb, ShieldCheck } from 'lucide-react';
import { CONTACT_DETAILS } from '@/lib/constants.tsx';

const GENERIC_CITY_HERO_IMAGE_SRC = 'https://cdn-icggj.nitrocdn.com/AphBmykuaGyxZijWArNhxcCiPzVdYZGT/assets/images/optimized/rev-d6d7292/thriveagency.com/files/SEO-Company.jpg';
const GENERIC_OFFICE_LOCATION_IMAGE_SRC = 'https://cdn-icggj.nitrocdn.com/AphBmykuaGyxZijWArNhxcCiPzVdYZGT/assets/images/optimized/rev-d6d7292/thriveagency.com/files/Cleveland-Thrive-office-location.jpg';

export const limerickData: CityPageData = {
  slug: 'limerick',
  cityName: 'Limerick',
  heroData: {
    pageTitle: 'Limerick SEO Services | TRAC - SEO Agency Limerick, Ireland',
    metaDescription: 'TRAC provides top-tier SEO services for Limerick businesses. Improve search rankings, drive organic traffic, and grow your business in the Shannon Region. Contact our Limerick SEO team!',
    heroTitle: 'Limerick SEO Agency: Building Your Digital Success',
    heroSubtitle: 'Strengthen Your Online Presence in Limerick with TRAC\'s Strategic SEO',
    heroDescription: 'TRAC offers expert SEO services for businesses in Limerick, a city known for its rich history, cultural heritage, and strategic location in Ireland\'s Shannon Region. As Limerick undergoes significant economic regeneration and growth, particularly in technology and engineering, a strong online presence is crucial. Our tailored SEO strategies are designed to enhance your visibility, attract targeted local and national customers, and drive sustainable growth. We focus on comprehensive local SEO to ensure your business is found by people searching within Limerick City and County, alongside technical SEO to optimize your website for performance and user experience. Our content marketing strategies create valuable and engaging content that highlights your expertise and resonates with the Limerick audience. Whether your business is in manufacturing, education, retail, or the burgeoning tech scene, TRAC is dedicated to helping you achieve your digital marketing objectives in Limerick through effective and ethical SEO practices.',
    heroImage: { src: GENERIC_CITY_HERO_IMAGE_SRC, alt: 'SEO Services in Limerick, Ireland', dataAiHint: 'Limerick city historic' },
    heroVideoUrl: 'https://www.youtube.com/embed/JBPmDzL-Xek',
    formTitle: 'Get Your FREE Limerick SEO Review!',
  },
  resultsHeadline: 'Driving SEO Growth for Limerick\'s Regenerating Businesses',
  readyToGrowHeadline: 'Ready for SEO Success in Limerick & the Shannon Region?',
  servicesSectionHeadline: 'Dedicated SEO Services for Limerick\'s Economy',
  servicesSectionSubheadline: 'Our Limerick SEO strategies are customized to help businesses capitalize on the city\'s growth, targeting local customers and key industries in the Midwest of Ireland.',
  services: [
    { icon: Search, title: 'Limerick Local SEO & Regional Targeting', description: 'Enhance your visibility in Limerick local searches and across the Shannon Region. We optimize your Google Business Profile and local listings to connect with customers in Limerick City, Co. Limerick, and surrounding areas looking for your specific services.' },
    { icon: Settings, title: 'Technical SEO for Limerick Businesses', description: 'Ensure your website is technically robust and user-friendly for the Limerick market. We address site speed, mobile optimization, crawlability, and implement structured data to improve your rankings and online performance in Limerick.' },
    { icon: Mail, title: 'Content Marketing & SEO for Limerick', description: 'Develop engaging, high-quality content that attracts your target audience in Limerick and establishes your business as an authority. Our content strategies are designed to improve SEO rankings and drive conversions for Limerick-based businesses.' },
    { icon: Briefcase, title: 'SEO for Engineering, Tech & Education in Limerick', description: 'Specialized SEO for Limerick\'s key sectors including engineering, technology, and education (e.g., University of Limerick related businesses). We understand the specific SEO needs of these industries in the Limerick context.' },
  ],
  whyChooseSectionHeadline: 'TRAC: Your Limerick SEO Agency for a Brighter Future',
  whyChooseIntro: 'TRAC provides results-oriented SEO solutions for businesses in Limerick, helping you navigate the digital landscape and achieve significant growth in Ireland\'s Midwest region. We understand the local market\'s potential.',
  whyChooseParagraph1: 'Our Limerick SEO team understands the city\'s unique economic profile, its historical significance, and its current regeneration efforts. We tailor SEO strategies that leverage these local strengths, helping your business connect with the right audience and achieve its objectives in Limerick.',
  whyChooseParagraph2: 'We are committed to transparent, ethical SEO practices that deliver long-term value for Limerick businesses. Our focus is on building sustainable online visibility and driving measurable results through data-informed strategies and collaborative partnerships in the Limerick area.',
  whyChoosePoints: [
    { icon: 'TrendingUp', title: 'Limerick SEO Growth & ROI', description: 'Boost your organic search rankings and attract more qualified leads in the Limerick market. We focus on SEO strategies that deliver a strong return on investment and sustainable growth for businesses in the Shannon Region.' },
    { icon: 'Lightbulb', title: 'Midwest Ireland SEO Expertise', description: 'Benefit from SEO strategies tailored to the Limerick and Midwest Ireland audience, considering local search patterns, industrial strengths, and the unique opportunities for businesses in this regenerating city.' },
    { icon: 'ShieldCheck', title: 'Reliable & Strategic Limerick SEO', description: 'Partner with a trusted Limerick SEO agency known for its strategic approach, transparent reporting, and dedication to achieving long-term success for clients in the Treaty City and beyond.' },
  ],
  awards: {
    clutch: { headline: 'Top Limerick SEO Services - Shannon Region Awards 2024', text: 'Recognized for impactful SEO strategies and client success in Limerick, particularly for businesses in the technology, engineering, and education sectors.' },
    upcity: { headline: 'Limerick SEO Excellence - Midwest Ireland 2024', text: 'Awarded for providing leading SEO services and helping Limerick businesses expand their digital footprint and achieve significant growth in a developing Irish market.' },
  },
  location: {
    officeImageUrl: GENERIC_OFFICE_LOCATION_IMAGE_SRC,
    streetAddress: '4 Street, O\'Connell Street',
    addressLocality: 'Limerick City',
    addressRegion: 'County Limerick',
    postalCode: 'V94',
    addressCountry: 'IE',
    phone: CONTACT_DETAILS.phone,
    email: CONTACT_DETAILS.email,
    hasMap: 'https://goo.gl/maps/kL1mN2oP3q',
    geo: {
      latitude: '52.668000',
      longitude: '-8.626700',
    },
  },
  bottomFormTitle: 'Request Your SEO Plan',
};
