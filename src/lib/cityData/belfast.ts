
import type { CityPageData } from '@/types';
import { Search, Settings, Briefcase, Mail, BarChart2, TrendingUp, Lightbulb, ShieldCheck } from 'lucide-react';
import { CONTACT_DETAILS } from '@/lib/constants.tsx';

const GENERIC_CITY_HERO_IMAGE_SRC = 'https://cdn-icggj.nitrocdn.com/AphBmykuaGyxZijWArNhxcCiPzVdYZGT/assets/images/optimized/rev-d6d7292/thriveagency.com/files/SEO-Company.jpg';
const GENERIC_OFFICE_LOCATION_IMAGE_SRC = 'https://placehold.co/600x400.png';

export const belfastData: CityPageData = {
  slug: 'belfast',
  cityName: 'Belfast',
  heroData: {
    pageTitle: 'Belfast SEO Services | TRAC - SEO Agency Belfast, NI',
    metaDescription: 'TRAC offers expert SEO services for Belfast businesses. Enhance your online visibility, attract more customers, and grow your business in Northern Ireland. Contact our Belfast SEO team!',
    heroTitle: 'Belfast SEO Agency: Drive Your Success in Northern Ireland',
    heroSubtitle: 'Achieve Top Rankings in Belfast with TRAC\'s Dynamic SEO Strategies',
    heroDescription: 'TRAC provides specialized SEO services for businesses in Belfast, Northern Ireland. This city, with its rich industrial heritage, now boasts a rapidly growing reputation as a hub for technology, film production, and tourism. Our tailored SEO strategies aim to boost your online presence, attract targeted local and international traffic, and deliver measurable results in the competitive Belfast market. We focus on comprehensive local SEO to ensure your business is highly visible in Belfast city searches and surrounding areas. We also provide advanced technical SEO for optimal website performance, and engaging content marketing strategies that capture Belfast\'s unique character and appeal to your target audience. Whether you\'re in the thriving tech scene, hospitality, retail, or professional services, TRAC understands the specific needs of businesses here. We commit to ethical practices, clear reporting, and helping your company achieve lasting growth and a strong digital footprint in Northern Ireland.',
    heroImage: { src: GENERIC_CITY_HERO_IMAGE_SRC, alt: 'SEO Services in Belfast, Northern Ireland', dataAiHint: 'Belfast city UK' },
    heroVideoUrl: 'https://www.youtube.com/embed/JBPmDzL-Xek',
    formTitle: 'Get Your FREE SEO Audit!', // Updated: Removed 'Belfast'
  },
  resultsHeadline: 'Delivering Powerful SEO Results for Belfast & NI Businesses',
  readyToGrowHeadline: 'Ready to Elevate Your Belfast Business with Effective SEO?',
  servicesSectionHeadline: 'Targeted SEO Services for Belfast & Northern Ireland',
  servicesSectionSubheadline: 'Our SEO strategies are designed to help businesses in Northern Ireland capitalize on digital opportunities, reaching local customers and expanding their market presence.',
  services: [
    { icon: Search, title: 'Local SEO & NI Market Reach', description: 'Refine your online presence for local searches within Belfast (e.g., "SEO services Cathedral Quarter," "restaurants Botanic Avenue") and target the wider Northern Ireland market. We improve your Google Business Profile and build relevant local citations for businesses here.' },
    { icon: Settings, title: 'Technical Website Optimization', description: 'Ensure your website is technically sound, offering fast load times, excellent mobile usability, and strong security for users in Belfast and beyond. Our technical SEO audits are key for ranking in the competitive UK search landscape from your Belfast base.' },
    { icon: Mail, title: 'Content Marketing & Audience Engagement', description: 'Create compelling, high-quality content that resonates with the Belfast and Northern Ireland audience, addresses their specific interests (e.g., local history, tourism, tech innovation), and improves your SEO rankings. We focus on content that drives engagement and conversions.' },
    { icon: Briefcase, title: 'SEO for Belfast Industries', description: 'Specialized SEO for Belfast\'s growing technology sector, its significant tourism industry (Titanic Belfast, Game of Thrones tours), and vibrant creative arts scene. We tailor SEO strategies to the unique needs of these local markets.' },
  ],
  whyChooseSectionHeadline: 'TRAC: Your Belfast SEO Agency for Growth in NI',
  whyChooseIntro: 'TRAC delivers results-driven SEO solutions for businesses in Belfast, using local market knowledge and proven digital strategies to help you succeed in Northern Ireland\'s evolving economy.',
  whyChooseParagraph1: 'Our Belfast SEO team understands the city\'s unique position, its industrial legacy, and its modern transformation into a tech and tourism hub. We craft SEO campaigns that are sensitive to this context, helping your local business connect effectively with your target customers.',
  whyChooseParagraph2: 'We commit to ethical, clear SEO practices that build long-term value and a strong online reputation for businesses here. Our data-driven approach ensures your SEO investment leads to measurable growth and a competitive advantage in Northern Ireland.',
  whyChoosePoints: [
    { icon: 'TrendingUp', title: 'SEO Growth & Market Impact', description: 'Increase your organic search visibility and attract more qualified leads in the Belfast and Northern Ireland market. We focus on SEO strategies that deliver tangible business results and a strong return.' },
    { icon: 'Lightbulb', title: 'Northern Ireland Market Expertise', description: 'Benefit from SEO strategies designed with a deep understanding of the Belfast market, local search behaviors, and the specific economic drivers of Northern Ireland, ensuring your business stands out.' },
    { icon: 'ShieldCheck', title: 'Reliable & Strategic Partnership', description: 'Partner with a trusted Belfast SEO agency known for its strategic insights, clear reporting, and commitment to helping clients achieve lasting online success in a competitive UK region.' },
  ],
  awards: {
    clutch: { headline: 'Top Belfast SEO Agency - NI Business Awards 2024', text: 'Recognized for delivering exceptional SEO results for businesses in Belfast, particularly in the technology, tourism, and creative sectors in Northern Ireland.' },
    upcity: { headline: 'Belfast SEO Excellence - UK Digital Awards 2024', text: 'Awarded for providing leading SEO services and consistently helping Belfast businesses achieve their online growth targets and enhance their digital presence within Northern Ireland.' },
  },
  location: {
    officeImageUrl: GENERIC_OFFICE_LOCATION_IMAGE_SRC,
    addressLines: ['5th blv', 'Titanic Quarter', 'Belfast, Northern Ireland, BT3 9EP'],
    phone: CONTACT_DETAILS.phone,
    email: CONTACT_DETAILS.email,
  },
  bottomFormTitle: 'Request Your SEO Strategy Session',
};