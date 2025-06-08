
import type { CityPageData } from '@/types';
import { Search, Settings, Briefcase, Mail, BarChart2, TrendingUp, Lightbulb, ShieldCheck } from 'lucide-react';
import { CONTACT_DETAILS } from '@/lib/constants.tsx';

const GENERIC_CITY_HERO_IMAGE_SRC = 'https://placehold.co/800x500.png';
const GENERIC_OFFICE_LOCATION_IMAGE_SRC = 'https://placehold.co/600x400.png';

export const seattleData: CityPageData = {
  slug: 'seattle',
  cityName: 'Seattle',
  heroData: {
    pageTitle: 'Seattle SEO Agency | TRAC - SEO Services Seattle, WA',
    metaDescription: 'TRAC is a Seattle SEO agency helping businesses improve online visibility and drive organic growth. Contact our Seattle SEO experts for a free consultation.',
    heroTitle: 'Seattle SEO Experts: Elevate Your Emerald City Presence',
    heroSubtitle: 'Navigate Seattle\'s Competitive Search Landscape with TRAC SEO',
    heroDescription: 'TRAC offers comprehensive SEO services for businesses in Seattle, Washington, a global hub for technology, innovation, and coffee. Our tailored strategies focus on improving your search engine rankings, attracting qualified local traffic from the tech-savvy Seattle populace, and increasing your ROI in this innovative market. We understand the nuances of targeting audiences in areas like South Lake Union, Capitol Hill, and Bellevue. From optimizing your website for local searches and ensuring cutting-edge technical SEO for optimal performance, to developing content that resonates with Seattle\'s unique culture and industries, TRAC provides a full-spectrum SEO solution. Partner with us to make your Seattle business a leader in online search and achieve sustainable growth.',
    heroImage: { src: GENERIC_CITY_HERO_IMAGE_SRC, alt: 'SEO Services in Seattle, WA', dataAiHint: 'Seattle space needle' },
    heroVideoUrl: 'https://www.youtube.com/embed/JBPmDzL-Xek',
    formTitle: 'Get Your FREE Seattle SEO Strategy!',
  },
  resultsHeadline: 'Delivering Innovative & Effective SEO Results in Seattle',
  readyToGrowHeadline: 'Ready to Elevate Your Seattle SEO & Outshine the Competition?',
  servicesSectionHeadline: 'Customized Seattle SEO Solutions for a Tech-Forward Market',
  servicesSectionSubheadline: 'Our SEO services are designed to make your Seattle business a leader in organic search, especially within the tech, startup, and B2B ecosystems, while also catering to local consumer needs.',
  services: [
    { icon: Search, title: 'Seattle Local & Tech Industry SEO', description: 'Dominate local search in Seattle and target the specific needs of the tech industry and its workforce. We optimize your Google Business Profile for Seattle neighborhoods and focus on keywords relevant to the Pacific Northwest tech scene.' },
    { icon: Settings, title: 'Technical SEO for Seattle Websites & SaaS Platforms', description: 'Optimize your website\'s technical health for peak SEO performance in Seattle\'s competitive online space. This includes site speed optimization (Core Web Vitals), mobile-first indexing, JavaScript SEO for SaaS products, and robust security protocols.' },
    { icon: Mail, title: 'Seattle SEO Content Marketing & Thought Leadership', description: 'Create compelling, authoritative content that ranks in Seattle search results and converts savvy visitors. We focus on thought leadership pieces, tech explainers, and content that showcases innovation relevant to the Seattle audience.' },
    { icon: Briefcase, title: 'B2B, SaaS & E-commerce SEO in Seattle', description: 'Specialized SEO for Seattle\'s booming B2B, Software-as-a-Service (SaaS), and e-commerce sectors. We understand how to reach decision-makers, drive demo requests, and boost online sales in this tech-centric market through targeted SEO.'},
  ],
  whyChooseSectionHeadline: 'TRAC: Your Trusted Seattle SEO Agency for Innovation & Growth',
  whyChooseIntro: 'Partner with TRAC for effective, data-driven SEO services in Seattle. We have a deep understanding of the local market, its highly competitive tech landscape, and how to make your business succeed online.',
  whyChooseParagraph1: 'Our Seattle SEO team has unparalleled knowledge of the local market dynamics, particularly the influential tech and startup ecosystem, as well as established industries like aerospace and retail. We tailor our SEO strategies to align with Seattle\'s innovative spirit and drive significant results for your business.',
  whyChooseParagraph2: 'We employ ethical, cutting-edge SEO techniques, including AI-driven insights and advanced analytics, to deliver sustainable growth for Seattle businesses. Our commitment is to transparency, measurable ROI, and helping you navigate the complexities of the modern search landscape in the Emerald City.',
  whyChoosePoints: [
    { icon: 'TrendingUp', title: 'Seattle Search Growth & Market Leadership', description: 'Improve your organic rankings, attract high-quality leads from the tech-savvy Seattle populace, and solidify your market leadership position with our expert SEO services. We focus on future-proofing your online presence.' },
    { icon: 'Lightbulb', title: 'Strategic & Innovative Seattle SEO', description: 'Benefit from targeted SEO campaigns specifically designed for the Seattle, WA audience, adapting to the fast-paced tech environment, local search behaviors, and unique industry demands. We keep you ahead of the curve.' },
    { icon: 'ShieldCheck', title: 'Reliable & Results-Driven Seattle SEO Partner', description: 'Experience transparent, ethical, and results-oriented SEO services in Seattle. We are focused on building long-term success and a strong online reputation for your brand, using data to guide every decision.' },
  ],
  awards: {
    clutch: { headline: 'Top Seattle SEO Agency - Clutch 2024', text: 'Recognized by Clutch for excellence in Seattle SEO, particularly for tech companies, SaaS platforms, and innovative startups. Our forward-thinking strategies are acclaimed.' },
    upcity: { headline: 'Seattle SEO Excellence - UpCity 2024', text: 'Awarded by UpCity for top-tier SEO services in Seattle, consistently helping businesses achieve their digital marketing goals in one of the nation\'s most competitive tech hubs.' },
  },
  location: {
    officeImageUrl: GENERIC_OFFICE_LOCATION_IMAGE_SRC,
    addressLines: ['2020 SEO Needle Way', 'Suite 200', 'Seattle, WA 98101'],
    phone: CONTACT_DETAILS.phone,
    email: CONTACT_DETAILS.email,
  },
  bottomFormTitle: 'Request Your Seattle SEO Consultation',
};

    