
import type { CityPageData } from '@/types';
import { Search, Settings, Briefcase, Mail, BarChart2, TrendingUp, Lightbulb, ShieldCheck } from 'lucide-react';
import { CONTACT_DETAILS } from '@/lib/constants.tsx';

const GENERIC_CITY_HERO_IMAGE_SRC = 'https://placehold.co/800x500.png';
const GENERIC_OFFICE_LOCATION_IMAGE_SRC = 'https://placehold.co/600x400.png';

export const lahoreData: CityPageData = {
  slug: 'lahore',
  cityName: 'Lahore',
  heroData: {
    pageTitle: 'Lahore SEO Company | TRAC - SEO Services Lahore, Pakistan',
    metaDescription: 'TRAC offers expert SEO services for Lahore businesses. Boost your online presence, attract more customers, and achieve growth in Pakistan\'s cultural capital. Contact our Lahore SEO team!',
    heroTitle: 'Lahore SEO Agency: Cultivate Your Digital Garden',
    heroSubtitle: 'Blossom Online in Lahore with TRAC\'s Strategic SEO Expertise',
    heroDescription: 'TRAC provides specialized SEO services designed for businesses in Lahore, Pakistan\'s cultural heartland, known for its rich history, vibrant arts scene, and educational institutions. Our tailored strategies aim to enhance your online visibility, attract targeted local and national traffic, and drive sustainable growth in the competitive Lahore market. We focus on comprehensive local SEO to ensure your business is highly visible in Lahore\'s key commercial areas (e.g., Gulberg, Mall Road) and historic old city. Our technical SEO expertise ensures your website performs optimally, offering a seamless experience for users on all devices. Furthermore, our content marketing strategies focus on creating valuable, relevant content that resonates with the Lahori audience and positions your brand as an authority in your field, whether in education, retail, IT, or food industries. TRAC is committed to understanding your goals and delivering SEO solutions that contribute to your long-term success in the Garden of the Mughals.',
    heroImage: { src: GENERIC_CITY_HERO_IMAGE_SRC, alt: 'SEO Services in Lahore, Pakistan', dataAiHint: 'Lahore badshahi mosque' },
    heroVideoUrl: 'https://www.youtube.com/embed/JBPmDzL-Xek',
    formTitle: 'Get Your FREE Lahore SEO Analysis!',
  },
  resultsHeadline: 'Driving Powerful SEO Results for Lahore & Punjab Businesses',
  readyToGrowHeadline: 'Ready to Grow Your Lahore Business with Effective SEO?',
  servicesSectionHeadline: 'Targeted SEO Services for Lahore & Punjab',
  servicesSectionSubheadline: 'Our Lahore SEO strategies are designed to help businesses in Pakistan\'s cultural capital capitalize on digital opportunities, reaching local customers and expanding their market presence throughout Punjab.',
  services: [
    { icon: Search, title: 'Lahore Local SEO & Cultural Targeting', description: 'Optimize your online presence for local searches within Lahore, targeting specific areas like Anarkali Bazaar or Model Town, and for cultural events. We enhance your Google Business Profile and build relevant local citations for businesses aiming to attract Lahoris.' },
    { icon: Settings, title: 'Technical SEO for Lahore Websites', description: 'Ensure your website is technically sound, offering fast load times, excellent mobile usability, and robust security for users in Lahore and beyond. Our technical SEO audits are crucial for ranking in Pakistan\'s competitive search landscape from your Lahore base.' },
    { icon: Mail, title: 'Content Marketing for Lahore SEO & Audience Engagement (Urdu/Punjabi)', description: 'Create compelling, high-quality content in English, Urdu, and Punjabi that resonates with the Lahore audience, addresses their specific interests (e.g., local history, food culture, educational opportunities), and improves your SEO rankings. We focus on content that drives engagement.' },
    { icon: Briefcase, title: 'SEO for Education, IT & Retail in Lahore', description: 'Specialized SEO for Lahore\'s strong education sector (universities and schools), its growing IT industry, and vibrant retail market. We tailor SEO strategies to the unique needs of these Lahore markets, from student recruitment to e-commerce sales.' },
  ],
  whyChooseSectionHeadline: 'TRAC: Your Lahore SEO Agency for Growth in Punjab',
  whyChooseIntro: 'TRAC delivers results-driven SEO solutions for businesses in Lahore, leveraging local market knowledge and proven digital strategies to help you succeed in Pakistan\'s heartland and its evolving economy.',
  whyChooseParagraph1: 'Our Lahore SEO team understands the city\'s unique blend of rich heritage and modern development. We craft SEO campaigns that are sensitive to this context, helping your Lahore business connect effectively with your target customers, whether they are seeking traditional crafts or modern tech solutions.',
  whyChooseParagraph2: 'We are committed to ethical, transparent SEO practices that build long-term value and a strong online reputation for Lahore businesses. Our data-driven approach ensures your SEO investment leads to measurable growth and a competitive advantage in Punjab and across Pakistan.',
  whyChoosePoints: [
    { icon: 'TrendingUp', title: 'Lahore SEO Growth & Market Impact', description: 'Increase your organic search visibility and attract more qualified leads in the Lahore and Punjab market. We focus on SEO strategies that deliver tangible business results and a strong ROI for Pakistani enterprises.' },
    { icon: 'Lightbulb', title: 'Punjab & Lahore SEO Expertise', description: 'Benefit from SEO strategies designed with a deep understanding of the Lahore market, local search behaviors (e.g., searches for "best restaurants in Lahore," "Lahore university admissions"), and the specific economic drivers of Punjab, ensuring your business stands out.' },
    { icon: 'ShieldCheck', title: 'Reliable & Strategic Lahore SEO', description: 'Partner with a trusted Lahore SEO agency known for its strategic insights, transparent reporting, and commitment to helping clients achieve sustained online success in a competitive Pakistani region.' },
  ],
  awards: {
    clutch: { headline: 'Top Lahore SEO Agency - Punjab Business Awards 2024', text: 'Recognized for delivering exceptional SEO results for businesses in Lahore, particularly in the education, retail, and IT sectors in Punjab.' },
    upcity: { headline: 'Lahore SEO Excellence - Pakistan Digital Awards 2024', text: 'Awarded for providing leading SEO services and consistently helping Lahore businesses achieve their online growth targets and enhance their digital presence within Pakistan.' },
  },
  location: {
    officeImageUrl: GENERIC_OFFICE_LOCATION_IMAGE_SRC,
    addressLines: ['202 SEO Garden Rd', 'Gulberg III', 'Lahore, Punjab, Pakistan'],
    phone: CONTACT_DETAILS.phone,
    email: CONTACT_DETAILS.email,
  },
  bottomFormTitle: 'Request Your Lahore SEO Strategy Session',
};
