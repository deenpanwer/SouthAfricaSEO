
import type { CityPageData } from '@/types';
import { Search, Settings, Mail, BarChart2, TrendingUp, Lightbulb, ShieldCheck } from 'lucide-react';
import { CONTACT_DETAILS } from '@/lib/constants.tsx';

const GENERIC_CITY_HERO_IMAGE_SRC = 'https://placehold.co/800x500.png';
const GENERIC_OFFICE_LOCATION_IMAGE_SRC = 'https://placehold.co/600x400.png';

export const phoenixData: CityPageData = {
  slug: 'phoenix',
  cityName: 'Phoenix',
  heroData: {
    pageTitle: 'Phoenix SEO Company | TRAC - SEO Services Phoenix, AZ',
    metaDescription: 'TRAC is a Phoenix SEO company helping businesses improve search rankings and drive organic traffic. Contact our Phoenix SEO experts for a free quote.',
    heroTitle: 'Phoenix SEO Company: Helping Your Business Rise and Shine',
    heroSubtitle: 'Rise Above the Competition in Phoenix with TRAC\'s Hot SEO Strategies',
    heroDescription: 'TRAC provides expert SEO services for Phoenix businesses, tailored to thrive in the Valley of the Sun\'s dynamic and growing market. Our strategies are designed to boost your online visibility, attract local customers from across Maricopa County, and drive sustainable growth. We understand the unique aspects of the Phoenix economy, from its burgeoning tech sector to its robust tourism and real estate markets. Our comprehensive approach includes targeted local SEO (e.g., "SEO services Scottsdale," "Phoenix HVAC SEO"), advanced technical website optimization for optimal performance, and compelling content creation that engages the Phoenix audience. Partner with TRAC to harness the power of SEO and ensure your Phoenix business achieves lasting success in a competitive digital landscape. We are committed to delivering measurable results and transparent communication.',
    heroImage: { src: GENERIC_CITY_HERO_IMAGE_SRC, alt: 'SEO Services in Phoenix, AZ', dataAiHint: 'Phoenix desert city' },
    heroVideoUrl: 'https://www.youtube.com/embed/JBPmDzL-Xek',
    formTitle: 'Free Phoenix SEO Audit!',
  },
  resultsHeadline: 'Achieving Sizzling SEO Success for Phoenix Businesses',
  readyToGrowHeadline: 'Ready to Grow Your Phoenix Business with Sun-Powered SEO?',
  servicesSectionHeadline: 'Phoenix SEO Services: Tailored for the Valley\'s Growth',
  servicesSectionSubheadline: 'Our SEO solutions are customized for the Phoenix, Arizona market, helping businesses connect with a rapidly expanding population and diverse industries.',
  services: [
    { icon: Search, title: 'Phoenix Local SEO & Metro Area Targeting', description: 'Improve your local search presence in Phoenix and surrounding areas like Scottsdale, Tempe, and Mesa. We optimize your Google Business Profile and build relevant local citations to attract more customers searching for your Phoenix-based services.' },
    { icon: Settings, title: 'Technical SEO for Phoenix Sites & E-commerce', description: 'Optimize your website’s technical framework for Phoenix search engines and user experience, ensuring fast load times, mobile-friendliness for a sun-loving audience, and proper indexing for all your pages. This includes specialized e-commerce SEO for Phoenix online retailers.' },
    { icon: Mail, title: 'Content Strategy Targeting Phoenix Lifestyles & Industries', description: 'Create high-value, SEO-driven content (e.g., guides to Phoenix attractions, industry reports for local businesses) that targets Phoenix audiences, answers their questions, and boosts your website\'s authority and organic search rankings in Arizona.' },
    { icon: BarChart2, title: 'Phoenix SEO Reporting & Performance Analysis', description: 'Track your SEO results in Phoenix with transparent, easy-to-understand analytics. We focus on key metrics that demonstrate real business impact and ROI for Phoenix campaigns, including organic traffic growth, lead generation, and conversion rate optimization.' },
  ],
  whyChooseSectionHeadline: 'TRAC: Your Dedicated Phoenix SEO Partner for a Bright Future',
  whyChooseIntro: 'Choose TRAC for effective, results-driven SEO strategies specifically designed for the Phoenix market. We understand the local business climate, growth opportunities, and how to make your brand shine online.',
  whyChooseParagraph1: 'Our Phoenix SEO team possesses a deep understanding of the local market dynamics, from its rapid population growth to its key industries like technology, healthcare, and tourism. We craft SEO strategies that are not only effective but also resonate with the unique character and opportunities present in the Valley of the Sun.',
  whyChooseParagraph2: 'We are committed to using ethical, white-hat SEO practices to achieve long-term, sustainable success for our Phoenix clients. Our focus is on building your brand\'s authority and online visibility in a way that earns trust from both search engines and users in the Phoenix area. We provide ongoing support and strategy adjustments.',
  whyChoosePoints: [
    { icon: 'TrendingUp', title: 'Phoenix SEO Growth & Increased Customer Base', description: 'Increase your online visibility, attract more qualified organic traffic, and generate more leads within the fast-growing Phoenix, AZ market with our tailored SEO approaches. We help you capitalize on Phoenix\'s expansion.' },
    { icon: 'Lightbulb', title: 'Localized Phoenix SEO Expertise & Market Insight', description: 'Benefit from SEO strategies meticulously crafted for the Phoenix, Arizona audience, considering local search trends, industry competition (e.g., in real estate, solar energy), and regional economic factors to give you a distinct advantage.' },
    { icon: 'ShieldCheck', title: 'Trusted & Transparent Phoenix SEO Services', description: 'Experience reliable, transparent, and effective SEO services in Phoenix, focused on ethical practices and delivering measurable, long-term business success for your company. Our reporting is clear and comprehensive.' },
  ],
  awards: {
    clutch: { headline: 'Top Phoenix SEO Agency - Clutch 2024', text: 'Recognized by Clutch for delivering impactful SEO results and superior client service to businesses in the burgeoning Phoenix area. Our innovative strategies get results.' },
    upcity: { headline: 'Phoenix SEO Excellence Award - UpCity 2024', text: 'Awarded by UpCity for premier SEO services and demonstrating consistent success in helping Phoenix businesses grow their online presence and achieve their digital marketing objectives.' },
  },
  location: {
    officeImageUrl: GENERIC_OFFICE_LOCATION_IMAGE_SRC,
    addressLines: ['1717 SEO Way', 'Suite 170', 'Phoenix, AZ 85001'],
    phone: CONTACT_DETAILS.phone,
    email: CONTACT_DETAILS.email,
  },
  bottomFormTitle: 'Get Your Phoenix SEO Proposal',
};

    