
import type { CityPageData } from '@/types';
import { Search, Settings, Briefcase, Mail, BarChart2, TrendingUp, Lightbulb, ShieldCheck } from 'lucide-react';
import { CONTACT_DETAILS } from '@/lib/constants.tsx';

const GENERIC_CITY_HERO_IMAGE_SRC = 'https://placehold.co/800x500.png';
const GENERIC_OFFICE_LOCATION_IMAGE_SRC = 'https://placehold.co/600x400.png';

export const newOrleansData: CityPageData = {
  slug: 'new-orleans',
  cityName: 'New Orleans',
  heroData: {
    pageTitle: 'New Orleans SEO Agency | TRAC - SEO Services NOLA',
    metaDescription: 'TRAC is a New Orleans SEO agency helping businesses improve online visibility and drive organic growth. Contact our NOLA SEO experts for a free consultation.',
    heroTitle: 'New Orleans SEO Experts: Let the Good Times Roll Online',
    heroSubtitle: 'March to the Top of Search in NOLA with TRAC\'s Unique SEO Strategies',
    heroDescription: 'TRAC offers comprehensive SEO services for businesses in New Orleans, Louisiana, a city renowned for its unique culture, music, and cuisine. Our tailored strategies focus on improving your search engine rankings, attracting qualified local and tourist traffic, and increasing your ROI in the vibrant New Orleans market. We understand the importance of local flavor and cultural relevance in NOLA. From optimizing for searches related to the French Quarter, Garden District, and major festivals, to ensuring your website is technically sound and developing content that captures the spirit of New Orleans, our SEO experts are ready to help. We work with businesses across hospitality, tourism, arts, and local services to boost their online visibility and connect with eager customers. Partner with TRAC to make your New Orleans business a standout success online.',
    heroImage: { src: GENERIC_CITY_HERO_IMAGE_SRC, alt: 'SEO Services in New Orleans, LA', dataAiHint: 'New Orleans french quarter' },
    heroVideoUrl: 'https://www.youtube.com/embed/JBPmDzL-Xek',
    formTitle: 'Get Your FREE NOLA SEO Strategy!',
  },
  resultsHeadline: 'Delivering Festive SEO Results in New Orleans\' Unique Market',
  readyToGrowHeadline: 'Ready to Jazz Up Your New Orleans SEO & Attract More Visitors?',
  servicesSectionHeadline: 'Customized New Orleans SEO Solutions for a One-of-a-Kind City',
  servicesSectionSubheadline: 'Our SEO services are designed to make your New Orleans business a leader in organic search, attracting both locals looking for authentic experiences and tourists planning their NOLA adventure.',
  services: [
    { icon: Search, title: 'NOLA Local & Tourism SEO Strategy', description: 'Dominate local search in New Orleans and target tourist queries related to festivals (like Mardi Gras and Jazz Fest), food (e.g., "best gumbo New Orleans"), music venues, and unique cultural attractions. We ensure your Google Business Profile shines for NOLA searches.' },
    { icon: Settings, title: 'Technical SEO for New Orleans Websites & Event Pages', description: 'Optimize your website\'s technical health for peak SEO performance in New Orleans, focusing on mobile-friendliness for visitors on the go, fast loading times, and schema markup for events, restaurants, and hotels to enhance visibility.' },
    { icon: Mail, title: 'New Orleans SEO Content Marketing & Storytelling', description: 'Create compelling, culturally rich content that ranks in New Orleans search results and converts visitors by highlighting the unique charm and offerings of your business. We focus on authentic storytelling that resonates with the NOLA spirit.' },
    { icon: Briefcase, title: 'Hospitality, Festival & Arts SEO in New Orleans', description: 'Specialized SEO for New Orleans hotels, restaurants, tours, major festivals, art galleries, and music clubs. We understand how to market unique NOLA experiences to a global and local audience effectively through targeted SEO.'},
  ],
  whyChooseSectionHeadline: 'TRAC: Your Trusted New Orleans SEO Agency for Authentic Growth',
  whyChooseIntro: 'Partner with TRAC for effective, data-driven SEO services that understand and celebrate the unique character of New Orleans. We are dedicated to helping your NOLA business thrive online and attract the right audience.',
  whyChooseParagraph1: 'Our New Orleans SEO team has deep knowledge of the local market, its distinct cultural drivers, and the search behavior of both residents and the millions of tourists who visit NOLA each year. We leverage this insight to build SEO strategies that are not only effective but also authentically New Orleans.',
  whyChooseParagraph2: 'We employ ethical, creative SEO techniques to deliver sustainable growth for New Orleans businesses. Our approach is collaborative and transparent, ensuring you understand how our SEO efforts are contributing to your success in the competitive NOLA digital landscape.',
  whyChoosePoints: [
    { icon: 'TrendingUp', title: 'New Orleans Search Growth & Increased Bookings', description: 'Improve your organic rankings, attract more qualified leads and bookings, and enhance your brand\'s visibility amidst the vibrant competition in NOLA. We focus on delivering measurable results for your NOLA business.' },
    { icon: 'Lightbulb', title: 'Strategic & Culturally-Infused NOLA SEO', description: 'Benefit from targeted SEO campaigns specifically designed for the New Orleans, LA audience, considering its unique festivals, culinary scene, musical heritage, and seasonal tourism peaks. We make your SEO uniquely NOLA.' },
    { icon: 'ShieldCheck', title: 'Reliable & Results-Oriented NOLA SEO Partner', description: 'Experience transparent, ethical, and results-oriented SEO services in New Orleans. We are focused on building long-term success and a positive online reputation for your brand in the Crescent City, using best practices.' },
  ],
  awards: {
    clutch: { headline: 'Top New Orleans SEO Agency - Clutch 2024', text: 'Recognized by Clutch for excellence in New Orleans SEO, particularly for hospitality, tourism, and cultural businesses. Our NOLA strategies are award-winning.' },
    upcity: { headline: 'New Orleans SEO Excellence - UpCity 2024', text: 'Awarded by UpCity for top-tier SEO services in NOLA, helping local businesses and attractions achieve greater online visibility and engagement with visitors from around the world.' },
  },
  location: {
    officeImageUrl: GENERIC_OFFICE_LOCATION_IMAGE_SRC,
    addressLines: ['1414 SEO St', 'Suite 140', 'New Orleans, LA 70112'],
    phone: CONTACT_DETAILS.phone,
    email: CONTACT_DETAILS.email,
  },
  bottomFormTitle: 'Request Your New Orleans SEO Consultation',
};

    