import type { CityPageData } from '@/types';
import { Search, Settings, Mail, BarChart2, TrendingUp, Lightbulb, ShieldCheck } from 'lucide-react';
import { CONTACT_DETAILS } from '@/lib/constants.tsx';

const GENERIC_CITY_HERO_IMAGE_SRC = 'https://cdn-icggj.nitrocdn.com/AphBmykuaGyxZijWArNhxcCiPzVdYZGT/assets/images/optimized/rev-d6d7292/thriveagency.com/files/ATLANTA-SEO-AGENCY.jpg';
const GENERIC_OFFICE_LOCATION_IMAGE_SRC = 'https://cdn-icggj.nitrocdn.com/AphBmykuaGyxZijWArNhxcCiPzVdYZGT/assets/images/optimized/rev-d6d7292/thriveagency.com/files/Atlanta-Thrive-office-location.jpg';

export const atlantaData: CityPageData = {
  slug: 'atlanta',
  cityName: 'Atlanta',
  metaKeywords: [
    'Atlanta SEO for small businesses',
    'best SEO company in Midtown Atlanta',
    'SEO for Atlanta salons and spas',
    'fintech SEO marketing Atlanta',
    'Google Maps optimization Atlanta',
    'local SEO consultants Buckhead',
    'affordable Atlanta SEO services',
    'law firm SEO experts in Atlanta',
    'healthcare SEO agency Atlanta GA',
    'Atlanta multi-location SEO specialists',
    'SEO for startups in Atlanta Tech Village',
  ],
  heroData: {
    pageTitle: 'Atlanta SEO Experts | TRAC - Drive Growth in Atlanta, GA',
    metaDescription: 'TRAC offers expert SEO services in Atlanta tailored to contractors, healthcare providers, salons, and law firms. Discover SEO strategies that drive real growth.',
    heroTitle: 'Atlanta SEO Agency: Propelling Your Business to the Forefront',
    heroSubtitle: 'Unlock Atlanta\'s Market with Powerful, Data-Driven SEO Strategies',
    heroDescription: `Atlanta’s digital market is booming—but so is the competition. To succeed, your business needs a strategy built for how people actually search in Georgia’s capital. At TRAC, we help service-based businesses across Atlanta get discovered and drive qualified leads using localized, long-tail keyword strategies that make you more visible where it matters.

We go beyond broad terms to target phrases like “Midtown Atlanta dentist SEO,” “Buckhead salon digital marketing,” “contractor SEO near Decatur,” and “best spa SEO Inman Park.” These super-specific queries bring in high-converting traffic because they match how real Atlantans search.

Our SEO campaigns begin with a deep audit of your technical setup—improving mobile performance, load speed, schema markup, and indexing. Then we craft pages and blog content that address local pain points and search trends in your industry. Whether you’re a solo practitioner in Dunwoody, a multi-location medspa, or a contractor based near Grant Park, we tailor every keyword and page to your core service areas.

We’ve helped local salons rank in Virginia-Highland, guided law firms to dominate organic search around Five Points, and built fintech SEO strategies for startups in Atlanta Tech Village. Our blend of precision keyword research and hyper-local content development ensures your SEO campaign captures demand—not just traffic.

If you're looking for an Atlanta SEO company that understands Georgia’s regulatory landscape, local market patterns, and how users in neighborhoods like Buckhead and Sandy Springs search, TRAC is ready to help.

We specialize in SEO for Atlanta contractors, salons, healthcare practices, and service-based businesses. Explore our expertise in [Georgia landscaping SEO](https://www.traconomics.com/texas-landscaping-seo-company), [salon SEO services](https://www.traconomics.com/georgia-salon-seo-services), and more to see how we can drive ROI for your niche.`,
    heroImage: {
      src: GENERIC_CITY_HERO_IMAGE_SRC,
      alt: 'SEO Services in Atlanta, GA',
      dataAiHint: 'Atlanta city business',
    },
    heroVideoUrl: 'https://www.youtube.com/embed/JBPmDzL-Xek',
    formTitle: 'Free SEO Analysis!',
  },
  resultsHeadline: 'Proven SEO Results for Atlanta Businesses',
  readyToGrowHeadline: 'Boost Your Atlanta SEO Performance?',
  servicesSectionHeadline: 'Tailored SEO Services for Atlanta',
  servicesSectionSubheadline: 'Our SEO experts craft data-driven strategies to enhance your online visibility and connect with customers across Atlanta, helping you grow your market share.',
  services: [
    {
      icon: Search,
      title: 'Local Search & GMB Optimization',
      description: 'Get found in Atlanta’s local searches with optimized Google Business Profiles, structured citations, and geo-targeted pages for neighborhoods like Buckhead, Old Fourth Ward, and Sandy Springs.',
    },
    {
      icon: Settings,
      title: 'Website Technical Optimization',
      description: 'We improve your website’s speed, mobile usability, and crawlability—focusing on performance metrics that help Atlanta users and Google bots alike navigate with ease.',
    },
    {
      icon: Mail,
      title: 'Content Strategy & Creation',
      description: 'Our team writes SEO content that mirrors Atlanta’s market—from blog posts on Georgia’s regulatory changes to service pages crafted for Midtown’s business climate.',
    },
    {
      icon: BarChart2,
      title: 'Analytics & Reporting for SEO',
      description: 'Stay informed with detailed performance tracking. We measure leads, rankings, traffic, and more—so you can see exactly how SEO is fueling your growth in Atlanta.',
    },
  ],
  whyChooseSectionHeadline: 'Why TRAC for Atlanta SEO?',
  whyChooseIntro: 'TRAC is your dedicated partner for achieving SEO success in the dynamic and competitive Atlanta market. We bring local expertise and proven strategies to elevate your brand.',
  whyChooseParagraph1: 'Atlanta is a blend of vibrant industries and diverse neighborhoods, each with unique consumer intent. Whether your business serves corporate clients in Midtown or residential homeowners in Brookhaven, our team builds SEO campaigns that match the exact way your audience searches.',
  whyChooseParagraph2: 'We never take a one-size-fits-all approach. Instead, we use hard data from Atlanta-specific SERPs and your actual business KPIs to guide every action—from schema deployment to content clustering. You’ll receive consistent reporting, proactive updates, and a clear roadmap to long-term growth.',
  whyChoosePoints: [
    {
      icon: 'TrendingUp',
      title: 'SEO Growth & ROI',
      description: 'Our strategies go beyond impressions—we help you generate leads, bookings, and real revenue from your Atlanta audience through precise keyword targeting.',
    },
    {
      icon: 'Lightbulb',
      title: 'Market SEO Expertise',
      description: 'We know Atlanta’s digital patterns—from tech startups in Midtown to wellness brands in Edgewood—and we use that intel to shape campaigns that resonate.',
    },
    {
      icon: 'ShieldCheck',
      title: 'Reliable & Transparent SEO',
      description: 'You’ll never wonder what’s happening with your campaign. We deliver transparent dashboards, clear goals, and proven results without smoke and mirrors.',
    },
  ],
  awards: {
    clutch: {
      headline: 'Clutch Top SEO Firm in Atlanta 2024',
      text: 'Recognized by Clutch for consistent SEO excellence and client satisfaction in the Atlanta metropolitan area. Our results speak for themselves.',
    },
    upcity: {
      headline: 'UpCity Atlanta SEO Leader 2024',
      text: 'Awarded by UpCity for delivering top-tier SEO results and strategic insights to businesses in Atlanta. We are proud of our impact.',
    },
  },
  location: {
    officeImageUrl: GENERIC_OFFICE_LOCATION_IMAGE_SRC,
    streetAddress: '260 Peachtree St. NW, Suite 2200',
    addressLocality: 'Atlanta',
    addressRegion: 'GA',
    postalCode: '30303',
    addressCountry: 'US',
    phone: CONTACT_DETAILS.phone,
    email: CONTACT_DETAILS.email,
  },
  bottomFormTitle: 'Get Your SEO Strategy',
  faqSectionHeadline: 'Frequently Asked Questions about SEO in Atlanta',
  faqData: [
    {
      question: 'How much does SEO cost in Atlanta, GA?',
      answer: 'SEO pricing in Atlanta typically starts around $1,000/month for local businesses. Pricing varies based on the competition in your niche, your site’s current SEO health, and the level of customization required. We offer flexible packages for startups, small businesses, and multi-location operations.',
    },
    {
      question: 'What types of businesses do you serve in Atlanta?',
      answer: 'TRAC works with a range of service providers including law firms, healthcare clinics, hair salons, auto dealerships, landscaping companies, and local startups. Our Atlanta SEO team understands how each industry behaves online and adapts strategies accordingly.',
    },
    {
      question: 'When can I expect to see SEO results for my Atlanta business?',
      answer: 'You’ll typically begin seeing early signs of improvement—such as increased traffic and rankings—within 3 to 4 months. More competitive markets or larger sites may take up to 6 to 9 months for major gains. SEO is a long-term investment, and we structure our campaigns to deliver compounding ROI.',
    },
    {
      question: 'Can TRAC handle multi-location SEO in Atlanta?',
      answer: 'Yes. We specialize in building SEO frameworks for businesses with multiple Atlanta-area locations. We create individual landing pages, localized content, and citation strategies that enhance visibility while maintaining brand consistency.',
    },
    {
      question: 'Do you offer Google Business Profile management?',
      answer: 'Absolutely. Our team optimizes your GMB listing with accurate info, localized content, keyword integration, and post management to increase visibility in the local pack for key Atlanta searches.',
    },
    {
      question: 'How is TRAC different from other Atlanta SEO companies?',
      answer: 'We focus on long-term SEO results rooted in real local behavior—not just ranking for generic terms. Our clients appreciate our industry expertise, ethical execution, and detailed monthly performance insights tailored for the Atlanta market.',
    },
  ],
};
