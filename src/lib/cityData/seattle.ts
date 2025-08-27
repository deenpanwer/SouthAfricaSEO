
import type { CityPageData } from '@/types';
import { Search, Settings, Briefcase, Mail, BarChart2, TrendingUp, Lightbulb, ShieldCheck } from 'lucide-react';
import { CONTACT_DETAILS } from '@/lib/constants.tsx';

const GENERIC_CITY_HERO_IMAGE_SRC = 'https://cdn-icggj.nitrocdn.com/AphBmykuaGyxZijWArNhxcCiPzVdYZGT/assets/images/optimized/rev-d6d7292/thriveagency.com/files/SEO-Company-1.jpg';
const GENERIC_OFFICE_LOCATION_IMAGE_SRC = 'https://cdn-icggj.nitrocdn.com/AphBmykuaGyxZijWArNhxcCiPzVdYZGT/assets/images/optimized/rev-d6d7292/thriveagency.com/files/Seattle-Thrive-office-location.jpg';

export const seattleData: CityPageData = {
  slug: 'seattle',
  cityName: 'Seattle',
  heroData: {
    pageTitle: 'Seattle SEO Agency | TRAC - SEO Services Seattle, WA',
    metaDescription: 'TRAC is a Seattle SEO agency helping businesses improve online visibility and drive organic growth. Contact our Seattle SEO experts for a free consultation.',
    heroTitle: 'Seattle SEO Experts: Elevate Your Emerald City Presence',
    heroSubtitle: 'Navigate Seattle\'s Competitive Search Landscape with TRAC SEO',
    heroDescription: 'TRAC offers comprehensive SEO services for businesses in Seattle, Washington, a global hub for technology, innovation, aerospace, and coffee. Our tailored strategies focus on significantly improving your search engine rankings, attracting qualified local traffic from the tech-savvy Seattle populace and surrounding areas like Bellevue and Redmond, and increasing your ROI in this highly innovative and competitive market. We understand the nuances of targeting audiences in distinct Seattle neighborhoods such as South Lake Union, Capitol Hill, Fremont, and Ballard. From optimizing your website for local searches and ensuring cutting-edge technical SEO for optimal performance (critical for tech companies and e-commerce), to developing compelling content that resonates with Seattle\'s unique culture and thriving industries, TRAC provides a full-spectrum SEO solution. We help businesses, from startups to enterprise-level corporations, establish market leadership. Partner with us to make your Seattle business a dominant force in online search and achieve sustainable, long-term growth.',
    heroImage: { src: GENERIC_CITY_HERO_IMAGE_SRC, alt: 'SEO Services in Seattle, WA', dataAiHint: 'Seattle space needle' },
    heroVideoUrl: 'https://www.youtube.com/embed/JBPmDzL-Xek',
    formTitle: 'Get Your FREE Seattle SEO Strategy!',
  },
  resultsHeadline: 'Delivering Innovative & Effective SEO Results in Seattle',
  readyToGrowHeadline: 'Ready to Elevate Your Seattle SEO & Outshine the Competition?',
  servicesSectionHeadline: 'Customized Seattle SEO Solutions for a Tech-Forward Market',
  servicesSectionSubheadline: 'Our SEO services are designed to make your Seattle business a leader in organic search, especially within the tech, startup, and B2B ecosystems, while also catering to local consumer needs and e-commerce. We help you connect with the right audience in the Pacific Northwest.',
  services: [
    { icon: Search, title: 'Seattle Local & Tech Industry SEO', description: 'Dominate local search in Seattle and specifically target the needs of the technology industry and its highly skilled workforce. We optimize your Google Business Profile for Seattle neighborhoods (e.g., Pioneer Square, Queen Anne) and focus on keywords relevant to the Pacific Northwest tech scene, from software development to cloud computing.' },
    { icon: Settings, title: 'Technical SEO for Seattle Websites & SaaS Platforms', description: 'Optimize your website\'s technical health for peak SEO performance in Seattle\'s competitive online space. This includes meticulous site speed optimization (Core Web Vitals), mobile-first indexing, advanced JavaScript SEO for SaaS products and complex web applications, and robust security protocols to protect your digital assets.' },
    { icon: Mail, title: 'Seattle SEO Content Marketing & Thought Leadership', description: 'Create compelling, authoritative content that ranks high in Seattle search results and converts savvy visitors. We focus on developing thought leadership pieces, in-depth tech explainers, industry reports, and content that showcases innovation and addresses the specific interests of the Seattle audience, from sustainability to emerging technologies.' },
    { icon: Briefcase, title: 'B2B, SaaS, E-commerce & Aerospace SEO in Seattle', description: 'Specialized SEO for Seattle\'s booming B2B, Software-as-a-Service (SaaS), and e-commerce sectors, as well as its foundational aerospace industry. We understand how to reach decision-makers, drive demo requests for software, boost online sales for retailers, and enhance visibility for specialized industrial companies through targeted, effective SEO.'},
  ],
  whyChooseSectionHeadline: 'TRAC: Your Trusted Seattle SEO Agency for Innovation & Growth',
  whyChooseIntro: 'Partner with TRAC for effective, data-driven SEO services in Seattle. We have a deep understanding of the local market, its highly competitive tech landscape, and the strategies required to make your business succeed online and achieve industry leadership.',
  whyChooseParagraph1: 'Our Seattle SEO team has unparalleled knowledge of the local market dynamics, particularly the influential tech and startup ecosystem (Amazon, Microsoft, and numerous startups), as well as established industries like aerospace, retail, and global health. We tailor our SEO strategies to align with Seattle\'s innovative spirit, its environmentally conscious values, and its global outlook, ensuring we drive significant results for your business.',
  whyChooseParagraph2: 'We employ ethical, cutting-edge SEO techniques, including AI-driven insights, advanced analytics, and comprehensive competitor research, to deliver sustainable growth for Seattle businesses. Our commitment is to transparency, measurable ROI, and helping you navigate the complexities of the modern search landscape in the Emerald City. We believe in building strong, collaborative partnerships.',
  whyChoosePoints: [
    { icon: 'TrendingUp', title: 'Seattle Search Growth & Market Leadership', description: 'Improve your organic rankings, attract high-quality leads from the tech-savvy Seattle populace and global markets, and solidify your market leadership position with our expert SEO services. We focus on future-proofing your online presence and driving substantial business growth.' },
    { icon: 'Lightbulb', title: 'Strategic & Innovative Seattle SEO', description: 'Benefit from targeted SEO campaigns specifically designed for the Seattle, WA audience, adapting to the fast-paced tech environment, local search behaviors (e.g., for coffee shops, outdoor gear), and unique industry demands. We keep you ahead of the curve with advanced SEO tactics.' },
    { icon: 'ShieldCheck', title: 'Reliable & Results-Driven Seattle SEO Partner', description: 'Experience transparent, ethical, and results-oriented SEO services in Seattle. We are focused on building long-term success and a strong online reputation for your brand, using data to guide every decision and providing clear, actionable insights through our reporting.' },
  ],
  awards: {
    clutch: { headline: 'Top Seattle SEO Agency - Clutch 2024', text: 'Recognized by Clutch for excellence in Seattle SEO, particularly for tech companies, SaaS platforms, e-commerce businesses, and innovative startups. Our forward-thinking strategies and consistent results are acclaimed by clients.' },
    upcity: { headline: 'Seattle SEO Excellence - UpCity 2024', text: 'Awarded by UpCity for top-tier SEO services in Seattle, consistently helping businesses achieve their digital marketing goals in one of the nation\'s most competitive and innovative tech hubs. We drive success in the Pacific Northwest.' },
  },
  location: {
    officeImageUrl: GENERIC_OFFICE_LOCATION_IMAGE_SRC,
    streetAddress: '801 2nd Ave, Suite 400',
    addressLocality: 'Seattle',
    addressRegion: 'WA',
    postalCode: '98104',
    addressCountry: 'US',
    phone: CONTACT_DETAILS.phone,
    email: CONTACT_DETAILS.email,
    hasMap: 'https://goo.gl/maps/oPqR6sT7uV',
    geo: {
      latitude: '47.606200',
      longitude: '-122.332100',
    },
  },
  bottomFormTitle: 'Request Your SEO Consultation',
};
