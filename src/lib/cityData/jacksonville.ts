import type { CityPageData } from '@/types';
import { Search, Settings, Mail, BarChart2, TrendingUp, Lightbulb, ShieldCheck, MapPin, Globe2, UserCheck, Calendar } from 'lucide-react';
import { CONTACT_DETAILS } from '@/lib/constants.tsx';

const GENERIC_CITY_HERO_IMAGE_SRC = 'https://cdn-icggj.nitrocdn.com/AphBmykuaGyxZijWArNhxcCiPzVdYZGT/assets/images/optimized/rev-d6d7292/thriveagency.com/files/jacksonville-seocompany.jpg';
const GENERIC_OFFICE_LOCATION_IMAGE_SRC = 'https://cdn-icggj.nitrocdn.com/AphBmykuaGyxZijWArNhxcCiPzVdYZGT/assets/images/optimized/rev-d6d7292/thriveagency.com/files/Jacksonville-Thrive-office-location.jpg';

export const jacksonvilleData: CityPageData = {
  slug: 'jacksonville',
  cityName: 'Jacksonville',
  metaKeywords: [
    'Jacksonville pediatric dentist SEO services',
    'luxury real estate SEO Jacksonville Beach FL',
    'Duval County logistics company SEO Jacksonville',
    'Southside Jacksonville cardiology SEO experts',
    'ecommerce SEO for Jacksonville online retailers',
    'Jacksonville Beach tourism SEO strategies',
    'Hyde Park Jacksonville local SEO company',
    'Jacksonville medical marketing SEO agency',
    'Northbank financial services SEO Jacksonville',
    'Jacksonville technical SEO audits and fixes'
  ],
  heroData: {
    pageTitle: 'Jacksonville SEO Company | TRAC - SEO Services Jacksonville, FL',
    metaDescription: 'TRAC delivers Jacksonville-focused SEO with hyper-targeted long-tail keyword research, neighborhood-level content, and industry-specific strategies for measurable growth in Duval County markets.',
    heroTitle: 'Jacksonville SEO Company: Navigating Your Digital Success',
    heroSubtitle: 'Shine Online in Jacksonville with TRAC\'s Expert SEO Strategies',
    heroDescription: `Jacksonville’s vast, varied market—from the bustling financial district on the Northbank to the beachfront communities of Jacksonville Beach—demands precision-targeted SEO. TRAC specializes in crafting campaigns around ultra-specific search queries like “Hyde Park Jacksonville boutique SEO optimization,” “St. Johns County pediatric dentist SEO services,” and “Jacksonville Beaches vacation rental SEO strategies.”

Our multi-layered process includes detailed neighborhood audits—assessing search volume, competitor positioning, and user intent in areas like Riverside, Mandarin, and Avondale. Next, we implement:

- **Localized landing page creation** with metadata, schema, and content tailored to each ZIP code and district.
- **Advanced technical SEO** to optimize site speed, mobile UX, crawlability, and JavaScript rendering for large-scale e-commerce and service sites.
- **Rich snippet and schema integration** for FAQs, events, and business information to capture SERP features and voice search queries.

Content drives connection in Jacksonville. Our content team produces seasonal guides like “Top 5 Beaches Near Jacksonville FL in Summer” and industry deep dives for sectors such as marine services near the Port of Jacksonville or health practices around Baptist MD Anderson Cancer Center. Each article is optimized for conversion with strategic CTAs, internal linking to service pages, and local resource references.

We complement execution with transparent monthly analytics—tracking keyword rankings by neighborhood, organic traffic growth in target ZIP codes, and qualified lead volume. TRAC’s Jacksonville SEO roadmap empowers you to outpace competitors and dominate search results across Northeast Florida’s diverse market.`,
    heroImage: { src: GENERIC_CITY_HERO_IMAGE_SRC, alt: 'SEO Services in Jacksonville, FL', dataAiHint: 'Jacksonville city beach SEO' },
    heroVideoUrl: 'https://www.youtube.com/embed/JBPmDzL-Xek',
    formTitle: 'Free Jacksonville SEO Audit!',
  },
  resultsHeadline: 'SEO Success for Jacksonville Businesses: Measurable Growth',
  readyToGrowHeadline: 'Grow Your Jacksonville Business with Strategic SEO?',
  servicesSectionHeadline: 'Jacksonville SEO Services: Driving Local & Regional Visibility',
  servicesSectionSubheadline: 'Our SEO solutions are customized for Jacksonville’s neighborhoods and industries, connecting you with local residents and tourists alike.',
  services: [
    { icon: Search, title: 'Hyper-Local Neighborhood SEO', description: 'Optimize for Jacksonville areas like Springfield, Ortega, and San Marco with targeted GMB, local citations, and geo-tagged content.' },
    { icon: Settings, title: 'Technical SEO & Core Web Vitals', description: 'Ensure lightning-fast load times, mobile-first design, and efficient crawl budgets for enterprise and e-commerce platforms in Jacksonville.' },
    { icon: Mail, title: 'Content Marketing & Authority Building', description: 'Develop blog series on Jacksonville events, neighborhood spotlights, and industry insights to build topical authority and earn local backlinks.' },
    { icon: BarChart2, title: 'Analytics-Driven Reporting', description: 'Receive interactive dashboards tracking keyword performance, organic traffic by district, lead generation, and conversion paths for full transparency.' },
    { icon: MapPin, title: 'Geo-Targeted Campaigns', description: 'Create micro-campaigns for ZIP codes like 32207 and 32221, capturing searches for beach rentals, local services, and community events.' },
    { icon: Globe2, title: 'Multilingual & Global SEO', description: 'Reach Jacksonville’s diverse populations with bilingual SEO (English-Spanish) and global optimization for tourism and international business hubs.' },
    { icon: UserCheck, title: 'User Experience & CRO Integration', description: 'Improve on-site engagement and conversions with UX enhancements, A/B testing, and conversion rate optimization tailored to Jacksonville user behavior.' },
    { icon: Calendar, title: 'Event & Seasonal SEO', description: 'Capitalize on local events like the Jacksonville Jazz Festival and Riverside Arts Market with optimized event pages and timely content campaigns.' }
  ],
  whyChooseSectionHeadline: 'TRAC: Your Dedicated Jacksonville SEO Partner',
  whyChooseIntro: 'Combining local expertise with cutting-edge SEO, TRAC delivers sustainable growth and elevated brand visibility in Jacksonville’s unique market.',
  whyChooseParagraph1: `Our Jacksonville SEO specialists leverage neighborhood-level insights—understanding how residents in Avondale search differently than those in Jacksonville Beach. We map customer journeys, analyze competitor gaps, and build a holistic SEO strategy that aligns with your specific business objectives and local market dynamics.`,
  whyChooseParagraph2: `Transparency and collaboration are at our core. You get direct access to your SEO strategist, detailed monthly performance reviews, and adaptive strategies that respond to seasonal trends and algorithm updates. We partner with you, not just perform work.`,
  whyChoosePoints: [
    { icon: 'TrendingUp', title: 'Jacksonville Growth & Lead Generation', description: 'Achieve a 40% increase in organic traffic and a 25% rise in qualified leads through targeted, long-tail-focused SEO campaigns.' },
    { icon: 'Lightbulb', title: 'Deep Local Market Expertise', description: 'Leverage our in-depth knowledge of Jacksonville’s neighborhoods, events, and industries to outperform local competitors.' },
    { icon: 'ShieldCheck', title: 'Ethical, White-Hat Practices', description: 'Adherence to Google’s best practices and local guidelines ensures your rankings and reputation remain secure and sustainable.' }
  ],
  awards: {
    clutch: { headline: 'Top Jacksonville SEO Agency - Clutch 2024', text: 'Recognized by Clutch for delivering measurable SEO results and superior client satisfaction in Jacksonville and Duval County.' },
    upcity: { headline: 'Jacksonville SEO Excellence Award - UpCity 2024', text: 'Awarded for outstanding SEO performance, strategic vision, and consistent success in helping Jacksonville businesses grow online.' }
  },
  location: {
    officeImageUrl: GENERIC_OFFICE_LOCATION_IMAGE_SRC,
    streetAddress: '841 Prudential Dr, 12th Floor PMB 72',
    addressLocality: 'Jacksonville',
    addressRegion: 'FL',
    postalCode: '32207',
    addressCountry: 'US',
    phone: CONTACT_DETAILS.phone,
    email: CONTACT_DETAILS.email,
    hasMap: 'https://goo.gl/maps/kLpQ2rStUv',
    geo: {
      latitude: '30.332200',
      longitude: '-81.655700',
    },
  },
  bottomFormTitle: 'Get Your SEO Proposal',
  faqSectionHeadline: 'Jacksonville SEO FAQs: Your Most Pressing Questions Answered',
  faqData: [
    { question: 'How quickly will I see SEO improvements in different Jacksonville neighborhoods?', answer: 'Local keyword wins often appear in 2–3 months for less competitive areas, while dense districts like downtown can take 4–6 months for long-tail terms to rank consistently.' },
    { question: 'Can you manage SEO for multiple Jacksonville Beach and Southside locations?', answer: 'Yes. We implement location-specific landing pages, GMB profiles, and citation strategies to ensure each service area drives targeted traffic and leads.' },
    { question: 'Do you offer bilingual SEO for Jacksonville’s Spanish-speaking communities?', answer: 'Absolutely. We conduct English-Spanish keyword research, content localization, and hreflang implementation to engage bilingual audiences effectively.' },
    { question: 'How do you optimize for Jacksonville’s major events and seasonal trends?', answer: 'We build event-focused pages, timely blog posts, and schema markup for festivals like the Jacksonville Jazz Festival, ensuring top visibility during peak search periods.' },
    { question: 'What metrics do you track to measure SEO ROI in Jacksonville?', answer: 'We monitor keyword rankings, organic sessions by ZIP code, phone call tracking, form submissions, and revenue attribution to provide a comprehensive ROI view.' },
    { question: 'Can you integrate CRO and UX improvements as part of the SEO campaign?', answer: 'Yes, we collaborate with UX designers to run A/B tests, improve user flows, and optimize conversion points based on search intent and user behavior.' },
    { question: 'How does TRAC handle technical SEO for large Jacksonville e-commerce sites?', answer: 'Our technical experts audit site architecture, refine mobile indexing, implement advanced caching, and ensure seamless site performance for large product catalogs.' },
    { question: 'Do you provide ongoing SEO support after the initial launch?', answer: 'We offer continuous SEO maintenance, monthly strategy calls, and quarterly reviews to adapt to Google updates and Jacksonville market changes.' }
  ]
};
