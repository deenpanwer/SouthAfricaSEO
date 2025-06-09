
import type { CityPageData } from '@/types';
import { Search, Settings, Briefcase, Mail, BarChart2, TrendingUp, Lightbulb, ShieldCheck } from 'lucide-react';
import { CONTACT_DETAILS } from '@/lib/constants.tsx';

const GENERIC_CITY_HERO_IMAGE_SRC = 'https://cdn-icggj.nitrocdn.com/AphBmykuaGyxZijWArNhxcCiPzVdYZGT/assets/images/optimized/rev-d6d7292/thriveagency.com/files/New-Orleans-seo-1.jpg';
const GENERIC_OFFICE_LOCATION_IMAGE_SRC = 'https://cdn-icggj.nitrocdn.com/AphBmykuaGyxZijWArNhxcCiPzVdYZGT/assets/images/optimized/rev-d6d7292/thriveagency.com/files/Cleveland-Thrive-office-location.jpg';

export const newOrleansData: CityPageData = {
  slug: 'new-orleans',
  cityName: 'New Orleans',
  heroData: {
    pageTitle: 'New Orleans SEO Agency | TRAC - SEO Services NOLA',
    metaDescription: 'TRAC is a New Orleans SEO agency helping businesses improve online visibility and drive organic growth. Contact our NOLA SEO experts for a free consultation.',
    heroTitle: 'New Orleans SEO Experts: Let the Good Times Roll Online',
    heroSubtitle: 'March to the Top of Search in NOLA with TRAC\'s Unique SEO Strategies',
    heroDescription: 'TRAC offers comprehensive SEO services for businesses in New Orleans, Louisiana, a city renowned for its unique culture, vibrant music scene, world-class cuisine, and historic architecture. Our tailored strategies focus on significantly improving your search engine rankings, attracting qualified local and tourist traffic, and increasing your ROI in the dynamic and competitive New Orleans market. We understand the critical importance of local flavor and cultural relevance in NOLA. From optimizing your presence for searches related to iconic areas like the French Quarter, Garden District, and Marigny, to highlighting your involvement in major festivals like Mardi Gras and Jazz Fest, we ensure your business connects authentically. Our technical SEO ensures your website is robust and user-friendly for a diverse audience, while our content marketing captures the unique spirit of New Orleans, helping your business stand out. We work closely with businesses across hospitality, tourism, arts, culinary, and local services to boost their online visibility and connect with eager customers. Partner with TRAC to make your New Orleans business a standout success online and achieve sustainable growth in the Crescent City.',
    heroImage: { src: GENERIC_CITY_HERO_IMAGE_SRC, alt: 'SEO Services in New Orleans, LA', dataAiHint: 'New Orleans french quarter' },
    heroVideoUrl: 'https://www.youtube.com/embed/JBPmDzL-Xek',
    formTitle: 'Get Your FREE NOLA SEO Strategy!',
  },
  resultsHeadline: 'Delivering Festive SEO Results in New Orleans\' Unique Market',
  readyToGrowHeadline: 'Ready to Jazz Up Your New Orleans SEO & Attract More Visitors?',
  servicesSectionHeadline: 'Customized New Orleans SEO Solutions for a One-of-a-Kind City',
  servicesSectionSubheadline: 'Our SEO services are designed to make your New Orleans business a leader in organic search, attracting both locals looking for authentic experiences and tourists planning their unforgettable NOLA adventure.',
  services: [
    { icon: Search, title: 'NOLA Local & Tourism SEO Strategy', description: 'Dominate local search in New Orleans and effectively target tourist queries related to major festivals (Mardi Gras, Jazz Fest), historic sites, unique culinary experiences (e.g., "best gumbo New Orleans," "French Quarter restaurants"), music venues, and cultural attractions. We ensure your Google Business Profile and online listings shine for all NOLA searches.' },
    { icon: Settings, title: 'Technical SEO for New Orleans Websites & Event Pages', description: 'Optimize your website\'s technical health for peak SEO performance in New Orleans, focusing on mobile-friendliness for visitors exploring the city, fast loading times for rich media content, and schema markup for events, restaurants, hotels, and tours to enhance visibility in search results.' },
    { icon: Mail, title: 'New Orleans SEO Content Marketing & Storytelling', description: 'Create compelling, culturally rich content that ranks high in New Orleans search results and converts visitors by highlighting the unique charm, history, and offerings of your business. We focus on authentic storytelling that resonates with the NOLA spirit and local lexicon, driving engagement and sharing.' },
    { icon: Briefcase, title: 'Hospitality, Festival, Arts & Culinary SEO in New Orleans', description: 'Specialized SEO for New Orleans hotels, renowned restaurants, historic tours, major cultural festivals, vibrant art galleries, and legendary music clubs. We understand how to market unique NOLA experiences to a global and local audience effectively through targeted and culturally sensitive SEO strategies.'},
  ],
  whyChooseSectionHeadline: 'TRAC: Your Trusted New Orleans SEO Agency for Authentic Growth',
  whyChooseIntro: 'Partner with TRAC for effective, data-driven SEO services that understand and celebrate the unique character and vibrant culture of New Orleans. We are dedicated to helping your NOLA business thrive online and attract the right audience, both locally and from around the world.',
  whyChooseParagraph1: 'Our New Orleans SEO team has deep knowledge of the local market, its distinct cultural drivers (music, food, festivals), and the search behavior of both residents and the millions of tourists who visit NOLA each year. We leverage this insight to build SEO strategies that are not only effective but also authentically New Orleans, ensuring your message resonates and converts.',
  whyChooseParagraph2: 'We employ ethical, creative SEO techniques to deliver sustainable growth for New Orleans businesses. Our approach is collaborative and transparent, ensuring you understand how our SEO efforts are contributing to your success in the competitive NOLA digital landscape. We focus on building long-term value and a strong online reputation.',
  whyChoosePoints: [
    { icon: 'TrendingUp', title: 'New Orleans Search Growth & Increased Bookings', description: 'Improve your organic rankings, attract more qualified leads and bookings, and enhance your brand\'s visibility amidst the vibrant competition in NOLA. We focus on delivering measurable results for your NOLA business, from increased website traffic to higher conversion rates.' },
    { icon: 'Lightbulb', title: 'Strategic & Culturally-Infused NOLA SEO', description: 'Benefit from targeted SEO campaigns specifically designed for the New Orleans, LA audience, considering its unique festivals, world-famous culinary scene, rich musical heritage, and seasonal tourism peaks. We make your SEO strategy as unique as NOLA itself.' },
    { icon: 'ShieldCheck', title: 'Reliable & Results-Oriented NOLA SEO Partner', description: 'Experience transparent, ethical, and results-oriented SEO services in New Orleans. We are focused on building long-term success and a positive online reputation for your brand in the Crescent City, using best practices and clear, consistent communication.' },
  ],
  awards: {
    clutch: { headline: 'Top New Orleans SEO Agency - Clutch 2024', text: 'Recognized by Clutch for excellence in New Orleans SEO, particularly for hospitality, tourism, and cultural businesses. Our NOLA strategies are acclaimed for their creativity and effectiveness.' },
    upcity: { headline: 'New Orleans SEO Excellence - UpCity 2024', text: 'Awarded by UpCity for top-tier SEO services in NOLA, helping local businesses and attractions achieve greater online visibility and engagement with visitors from around the world, boosting their bottom line.' },
  },
  location: {
    officeImageUrl: GENERIC_OFFICE_LOCATION_IMAGE_SRC,
    addressLines: ['1414 St', 'Suite 140', 'New Orleans, LA 70112'],
    phone: CONTACT_DETAILS.phone,
    email: CONTACT_DETAILS.email,
  },
  bottomFormTitle: 'Request Your SEO Consultation',
};
