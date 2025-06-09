
import type { CityPageData } from '@/types';
import { Search, Settings, Briefcase, Mail, BarChart2, TrendingUp, Lightbulb, ShieldCheck } from 'lucide-react';
import { CONTACT_DETAILS } from '@/lib/constants.tsx';

const GENERIC_CITY_HERO_IMAGE_SRC = 'https://placehold.co/800x500.png';
const GENERIC_OFFICE_LOCATION_IMAGE_SRC = 'https://placehold.co/600x400.png';

export const faisalabadData: CityPageData = {
  slug: 'faisalabad',
  cityName: 'Faisalabad',
  heroData: {
    pageTitle: 'Faisalabad SEO Company | TRAC - SEO Services Faisalabad, Pakistan',
    metaDescription: 'TRAC offers expert SEO services for Faisalabad businesses. Enhance your online visibility, attract local customers, and grow in Pakistan\'s industrial hub. Contact our Faisalabad SEO team!',
    heroTitle: 'Faisalabad SEO Agency: Weave Your Success Online',
    heroSubtitle: 'Strengthen Your Digital Fabric in Faisalabad with TRAC\'s SEO Solutions',
    heroDescription: 'TRAC provides specialized SEO services for businesses in Faisalabad, a major industrial and commercial center in Pakistan, often referred to as the "Manchester of Pakistan" due to its thriving textile industry. Our tailored SEO strategies are designed to boost your online presence, attract targeted local and national business-to-business (B2B) and business-to-consumer (B2C) traffic, and deliver measurable results in the competitive Faisalabad market. We focus on comprehensive local SEO to ensure your business is highly visible in Faisalabad city searches and surrounding agricultural and industrial regions. Our technical SEO expertise ensures your website performs optimally for search engines and users, which is crucial for e-commerce and B2B platforms. Furthermore, our content marketing strategies focus on creating valuable, relevant content that positions your brand as an authority in your field, whether in textiles, agriculture, manufacturing, or services. TRAC is committed to understanding your specific industry needs and delivering SEO solutions that contribute to your long-term growth and strong digital footprint in Faisalabad and Punjab.',
    heroImage: { src: GENERIC_CITY_HERO_IMAGE_SRC, alt: 'SEO Services in Faisalabad, Pakistan', dataAiHint: 'Faisalabad textile industry' },
    heroVideoUrl: 'https://www.youtube.com/embed/JBPmDzL-Xek',
    formTitle: 'Get Your FREE Faisalabad SEO Audit!',
  },
  resultsHeadline: 'Driving Industrial-Strength SEO Results for Faisalabad Businesses',
  readyToGrowHeadline: 'Ready to Amplify Your Faisalabad Business with Effective SEO?',
  servicesSectionHeadline: 'Targeted SEO Services for Faisalabad & Industrial Punjab',
  servicesSectionSubheadline: 'Our Faisalabad SEO strategies are designed to help businesses in Pakistan\'s industrial heartland capitalize on digital opportunities, reaching local and national markets effectively.',
  services: [
    { icon: Search, title: 'Faisalabad Local SEO & B2B Targeting', description: 'Optimize your online presence for local searches within Faisalabad and target B2B clients in the industrial sector. We enhance your Google Business Profile and build relevant citations for businesses aiming to attract customers in Faisalabad Division.' },
    { icon: Settings, title: 'Technical SEO for Faisalabad E-commerce & Industrial Websites', description: 'Ensure your website is technically robust, offering fast load times and excellent mobile usability for users in Faisalabad and beyond. Our technical SEO audits are crucial for e-commerce success and B2B lead generation in Faisalabad\'s industrial landscape.' },
    { icon: Mail, title: 'Content Marketing for Faisalabad SEO & Industry Authority', description: 'Create compelling, high-quality content that resonates with the Faisalabad business community and agricultural sector, addressing their specific interests and needs. We focus on content that drives engagement, improves SEO rankings, and establishes your industry expertise.' },
    { icon: Briefcase, title: 'SEO for Textile, Agriculture & Manufacturing in Faisalabad', description: 'Specialized SEO for Faisalabad\'s key industries including textiles, agriculture, manufacturing, and chemicals. We understand the unique SEO needs for these sectors and how to reach their target B2B and B2C audiences effectively from your Faisalabad base.' },
  ],
  whyChooseSectionHeadline: 'TRAC: Your Faisalabad SEO Agency for Industrial Growth',
  whyChooseIntro: 'TRAC delivers results-driven SEO solutions for businesses in Faisalabad, leveraging local market knowledge and proven digital strategies to help you succeed in Punjab\'s industrial core and Pakistan\'s wider economy.',
  whyChooseParagraph1: 'Our Faisalabad SEO team understands the city\'s unique industrial base and its importance in Pakistan\'s economy. We craft SEO campaigns that are tailored to this context, helping your Faisalabad business connect effectively with your target customers and supply chain partners.',
  whyChooseParagraph2: 'We are committed to ethical, transparent SEO practices that build long-term value and a strong online reputation for Faisalabad businesses. Our data-driven approach ensures your SEO investment leads to measurable growth and a competitive advantage in Punjab and nationally.',
  whyChoosePoints: [
    { icon: 'TrendingUp', title: 'Faisalabad SEO Growth & Market Penetration', description: 'Increase your organic search visibility and attract more qualified leads in the Faisalabad and Punjab market. We focus on SEO strategies that deliver tangible business results and a strong ROI for industrial and commercial enterprises.' },
    { icon: 'Lightbulb', title: 'Industrial Punjab SEO Expertise', description: 'Benefit from SEO strategies designed with a deep understanding of the Faisalabad market, local industrial search behaviors, and the specific economic drivers of this key Pakistani region, ensuring your business stands out.' },
    { icon: 'ShieldCheck', title: 'Reliable & Strategic Faisalabad SEO', description: 'Partner with a trusted Faisalabad SEO agency known for its strategic insights, transparent reporting, and commitment to helping clients achieve sustained online success in a competitive industrial region of Pakistan.' },
  ],
  awards: {
    clutch: { headline: 'Top Faisalabad SEO Agency - Industrial Excellence Awards 2024', text: 'Recognized for delivering exceptional SEO results for businesses in Faisalabad, particularly in the textile, manufacturing, and agricultural sectors in Punjab.' },
    upcity: { headline: 'Faisalabad SEO Excellence - Pakistan Business Awards 2024', text: 'Awarded for providing leading SEO services and consistently helping Faisalabad businesses achieve their online growth targets and enhance their digital presence within Pakistan.' },
  },
  location: {
    officeImageUrl: GENERIC_OFFICE_LOCATION_IMAGE_SRC,
    addressLines: ['404 SEO Industrial Zone', 'Millat Town', 'Faisalabad, Punjab, Pakistan'],
    phone: CONTACT_DETAILS.phone,
    email: CONTACT_DETAILS.email,
  },
  bottomFormTitle: 'Request Your Faisalabad SEO Strategy Session',
};
