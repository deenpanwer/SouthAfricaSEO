
import type { CityPageData } from '@/types';
import { Search, Settings, Mail, BarChart2, TrendingUp, Lightbulb, ShieldCheck, Briefcase } from 'lucide-react';
import { CONTACT_DETAILS } from '@/lib/constants.tsx';

const GENERIC_CITY_HERO_IMAGE_SRC = 'https://thriveagency.com/files/phoenix-seo.jpg';
const GENERIC_OFFICE_LOCATION_IMAGE_SRC = 'https://cdn-icggj.nitrocdn.com/AphBmykuaGyxZijWArNhxcCiPzVdYZGT/assets/images/optimized/rev-d6d7292/thriveagency.com/files/Cleveland-Thrive-office-location.jpg';

export const phoenixData: CityPageData = {
  slug: 'phoenix',
  cityName: 'Phoenix',
  heroData: {
    pageTitle: 'Phoenix SEO Company | TRAC - SEO Services Phoenix, AZ',
    metaDescription: 'TRAC is a Phoenix SEO company helping businesses improve search rankings and drive organic traffic. Contact our Phoenix SEO experts for a free quote.',
    heroTitle: 'Phoenix SEO Company: Helping Your Business Rise and Shine',
    heroSubtitle: 'Rise Above the Competition in Phoenix with TRAC\'s Hot SEO Strategies',
    heroDescription: 'TRAC provides expert SEO services for Phoenix businesses, tailored to thrive in the Valley of the Sun\'s dynamic and rapidly growing market. Our strategies are designed to significantly boost your online visibility, attract local customers from across Maricopa County—including Scottsdale, Tempe, Mesa, and Glendale—and drive sustainable growth for your enterprise. We understand the unique aspects of the Phoenix economy, from its burgeoning tech sector and advanced manufacturing to its robust tourism, healthcare, and real estate markets. Our comprehensive approach includes targeted local SEO to ensure you rank for "near me" searches relevant to Phoenix residents and visitors (e.g., "SEO services Scottsdale," "Phoenix HVAC SEO," "best golf courses Phoenix"). We also perform advanced technical website optimization for optimal performance, speed, and mobile-friendliness, crucial for engaging the Phoenix audience. Furthermore, our compelling content creation strategies are designed to capture local interest and establish your brand as an authority. Partner with TRAC to harness the power of SEO and ensure your Phoenix business achieves lasting success in a competitive digital landscape. We are committed to delivering measurable results and transparent communication every step of the way.',
    heroImage: { src: GENERIC_CITY_HERO_IMAGE_SRC, alt: 'SEO Services in Phoenix, AZ', dataAiHint: 'Phoenix desert city' },
    heroVideoUrl: 'https://www.youtube.com/embed/JBPmDzL-Xek',
    formTitle: 'Free Phoenix SEO Audit!',
  },
  resultsHeadline: 'Achieving Sizzling SEO Success for Phoenix Businesses',
  readyToGrowHeadline: 'Ready to Grow Your Phoenix Business with Sun-Powered SEO?',
  servicesSectionHeadline: 'Phoenix SEO Services: Tailored for the Valley\'s Growth',
  servicesSectionSubheadline: 'Our SEO solutions are customized for the Phoenix, Arizona market, helping businesses connect with a rapidly expanding population and diverse industries, from tech startups to established enterprises.',
  services: [
    { icon: Search, title: 'Phoenix Local SEO & Metro Area Targeting', description: 'Improve your local search presence in Phoenix and surrounding cities like Scottsdale, Tempe, Chandler, and Mesa. We optimize your Google Business Profile, build relevant local citations, and target hyperlocal keywords to attract more customers searching for your Phoenix-based services and products.' },
    { icon: Settings, title: 'Technical SEO for Phoenix Sites & E-commerce', description: 'Optimize your website’s technical framework for Phoenix search engines and user experience. This includes ensuring fast load times (Core Web Vitals), mobile-friendliness for a sun-loving and active audience, proper indexing for all your pages, and robust security. We also offer specialized e-commerce SEO for Phoenix online retailers to boost sales.' },
    { icon: Mail, title: 'Content Strategy Targeting Phoenix Lifestyles & Industries', description: 'Create high-value, SEO-driven content (e.g., guides to Phoenix attractions and outdoor activities, industry reports for local businesses, insights into the Phoenix real estate market) that targets Phoenix audiences, answers their specific questions, and boosts your website\'s authority and organic search rankings in Arizona.' },
    { icon: Briefcase, title: 'SEO for Tech, Real Estate & Tourism in Phoenix', description: 'Specialized SEO strategies for Phoenix\'s key growth sectors, including technology startups, real estate development and agencies, and the thriving tourism and hospitality industry. We understand the unique search behaviors and competitive landscapes within these Phoenix markets.'},
    { icon: BarChart2, title: 'Phoenix SEO Reporting & Performance Analysis', description: 'Track your SEO results in Phoenix with transparent, easy-to-understand analytics and custom dashboards. We focus on key metrics that demonstrate real business impact and ROI for Phoenix campaigns, including organic traffic growth, lead generation quality, and conversion rate optimization strategies.' },
  ],
  whyChooseSectionHeadline: 'TRAC: Your Dedicated Phoenix SEO Partner for a Bright Future',
  whyChooseIntro: 'Choose TRAC for effective, results-driven SEO strategies specifically designed for the Phoenix market. We understand the local business climate, significant growth opportunities, and how to make your brand shine online in the Valley of the Sun.',
  whyChooseParagraph1: 'Our Phoenix SEO team possesses a deep understanding of the local market dynamics, from its rapid population growth and diverse demographic shifts to its key industries like technology, healthcare, construction, and tourism. We craft SEO strategies that are not only effective but also resonate with the unique character and substantial opportunities present in the Valley of the Sun, helping you connect with your ideal customers.',
  whyChooseParagraph2: 'We are committed to using ethical, white-hat SEO practices to achieve long-term, sustainable success for our Phoenix clients. Our focus is on building your brand\'s authority and online visibility in a way that earns trust from both search engines and users in the Phoenix area. We provide ongoing support, strategy adjustments based on performance data, and clear communication to ensure alignment with your business goals.',
  whyChoosePoints: [
    { icon: 'TrendingUp', title: 'Phoenix SEO Growth & Increased Customer Base', description: 'Increase your online visibility, attract more qualified organic traffic, and generate more leads within the fast-growing Phoenix, AZ market with our tailored SEO approaches. We help you capitalize on Phoenix\'s significant economic expansion and attract new residents and businesses.' },
    { icon: 'Lightbulb', title: 'Localized Phoenix SEO Expertise & Market Insight', description: 'Benefit from SEO strategies meticulously crafted for the Phoenix, Arizona audience, considering local search trends (e.g., for outdoor activities, new home communities), industry competition (e.g., in real estate, solar energy, healthcare), and regional economic factors to give you a distinct competitive advantage.' },
    { icon: 'ShieldCheck', title: 'Trusted & Transparent Phoenix SEO Services', description: 'Experience reliable, transparent, and effective SEO services in Phoenix, focused on ethical practices and delivering measurable, long-term business success for your company. Our reporting is clear, comprehensive, and focused on the metrics that matter to your Phoenix enterprise.' },
  ],
  awards: {
    clutch: { headline: 'Top Phoenix SEO Agency - Clutch 2024', text: 'Recognized by Clutch for delivering impactful SEO results and superior client service to businesses in the burgeoning Phoenix area. Our innovative and data-driven strategies consistently get results.' },
    upcity: { headline: 'Phoenix SEO Excellence Award - UpCity 2024', text: 'Awarded by UpCity for premier SEO services and demonstrating consistent success in helping Phoenix businesses grow their online presence and achieve their digital marketing objectives in a competitive landscape.' },
  },
  location: {
    officeImageUrl: GENERIC_OFFICE_LOCATION_IMAGE_SRC,
    streetAddress: '1717 Way, Suite 170',
    addressLocality: 'Phoenix',
    addressRegion: 'AZ',
    postalCode: '85001',
    addressCountry: 'US',
    phone: CONTACT_DETAILS.phone,
    email: CONTACT_DETAILS.email,
    hasMap: 'https://goo.gl/maps/uVwXyZ1aB2',
    geo: {
      latitude: '33.448400',
      longitude: '-112.074000',
    },
  },
  bottomFormTitle: 'Get Your SEO Proposal',
};
