import type { CityPageData } from '@/types';
import { Search, Settings, Briefcase, Mail, BarChart2, TrendingUp, Lightbulb, ShieldCheck, Globe2, MonitorSmartphone, PencilRuler, LineChart } from 'lucide-react';
import { CONTACT_DETAILS } from '@/lib/constants.tsx';

const GENERIC_CITY_HERO_IMAGE_SRC = 'https://cdn-icggj.nitrocdn.com/AphBmykuaGyxZijWArNhxcCiPzVdYZGT/assets/images/optimized/rev-d6d7292/thriveagency.com/files/SEO-Company-1.jpg';
const GENERIC_OFFICE_LOCATION_IMAGE_SRC = 'https://cdn-icggj.nitrocdn.com/AphBmykuaGyxZijWArNhxcCiPzVdYZGT/assets/images/optimized/rev-d6d7292/thriveagency.com/files/Cleveland-Thrive-office-location.jpg';

export const dublinData: CityPageData = {
  slug: 'dublin',
  cityName: 'Dublin',
  metaKeywords: [
    'Dublin SEO services',
    'local SEO agency Dublin',
    'SEO for tech companies Dublin',
    'Dublin digital marketing firm',
    'SEO experts Ireland',
    'Dublin search engine optimization',
    'international SEO Dublin',
    'Dublin eCommerce SEO agency',
    'SEO consultants Dublin Ireland',
    'tourism SEO Dublin',
    'financial services SEO Ireland',
    'SEO agency Grand Canal Dock',
    'lead generation Dublin',
    'Dublin map pack SEO',
    'GMB optimization Dublin'
  ],
  heroData: {
    pageTitle: 'Dublin SEO Experts | TRAC - SEO Services Dublin, Ireland',
    metaDescription: 'TRAC provides leading SEO services for Dublin businesses. Boost your organic traffic, improve search rankings, and achieve sustainable growth in the competitive Dublin market. Contact our Dublin SEO specialists!',
    heroTitle: 'Dublin SEO Agency: Propel Your Business in Ireland\'s Capital',
    heroSubtitle: 'Dominate Dublin Search Results with TRAC\'s Proven SEO Strategies & Local Expertise',
    heroDescription: `In a city where global innovation meets rich cultural heritage, digital dominance starts with a customized SEO strategy. TRAC delivers cutting-edge SEO solutions crafted specifically for the competitive and international landscape of Dublin. 

Whether you're a SaaS startup in Grand Canal Dock, a restaurant in Temple Bar, or a multinational headquartered in the Docklands, our strategies elevate your visibility where it matters most—on search engines. Our campaigns focus on:

- Local SEO campaigns mapped to Dublin’s postal codes and high-density business districts
- Multilingual SEO execution to attract international audiences and expand Irish visibility
- Conversion-optimized content and schema to secure rich snippets and high-CTR listings

Our proven SEO approach has helped tech firms, tourism operators, and finance brands establish themselves as market leaders through Dublin-specific link building, long-tail keyword targeting, and algorithm-safe on-page optimization.

We’re more than an agency—we’re your strategic SEO growth partner in Ireland.

Need targeted SEO help? Explore:
https://traconomics.com/ireland-gym-seo-strategies
https://traconomics.com/ireland-salon-seo-services
https://traconomics.com/ireland-landscaping-seo-company`,
    heroImage: { src: GENERIC_CITY_HERO_IMAGE_SRC, alt: 'SEO Services in Dublin, Ireland', dataAiHint: 'Dublin city tech' },
    heroVideoUrl: 'https://www.youtube.com/embed/JBPmDzL-Xek',
    formTitle: 'Get Your FREE Dublin SEO Audit!',
  },
  resultsHeadline: 'Driving SEO Success for Dublin\'s Innovative Businesses',
  readyToGrowHeadline: 'Ready to Boost Your Dublin SEO & Conquer the Irish Market?',
  servicesSectionHeadline: 'Tailored SEO Services for Dublin & Ireland',
  servicesSectionSubheadline: 'Our Dublin SEO services are designed to meet the unique challenges of Ireland\'s capital, enhancing your visibility in a competitive, tech-savvy, and international market.',
  services: [
    { icon: Search, title: 'Dublin Local SEO & National Targeting', description: 'Maximize visibility across Dublin neighbourhoods and throughout Ireland. Optimize for GMB, Irish directories, and NAP consistency to increase rankings in Dublin City Centre, Temple Bar, and South Dublin.' },
    { icon: Settings, title: 'Technical SEO & Mobile Optimization', description: 'Fix site speed, mobile usability, schema errors, and indexation issues. We ensure your Dublin business website performs at its best for Irish and global audiences.' },
    { icon: Mail, title: 'Content & Digital PR for Dublin Brands', description: 'Build topical authority through blogs, press releases, and Irish guest posting. Our content is mapped to Dublin-based long-tail search demand.' },
    { icon: Briefcase, title: 'Enterprise SEO for Tech & Finance', description: 'We help multinational and B2B firms in Dublin attract inbound leads through complex funnel-aware SEO strategies aligned with your sector’s KPIs.' },
    { icon: BarChart2, title: 'SEO KPIs & Irish Market Reporting', description: 'All campaigns include monthly ROI-focused performance dashboards covering CTRs, keyword gains, leads, calls, and revenue benchmarks.' },
    { icon: Globe2, title: 'International SEO & hreflang Implementation', description: 'Target audiences in Europe and North America with multilingual support and region-specific SERP strategies.' },
    { icon: MonitorSmartphone, title: 'Mobile-First UX for Dublin Users', description: 'Deliver fast, intuitive UX for mobile-heavy Irish audiences. We audit clickflows, optimize conversion paths, and prioritize responsive performance.' },
    { icon: PencilRuler, title: 'SEO + CRO Alignment', description: 'Merge CRO best practices with SEO—conversion-focused page layouts, trust signals, and lead capture strategies designed for Irish behavior.' },
    { icon: LineChart, title: 'SERP Features & Dublin Snippet Targeting', description: 'From FAQ schema to People Also Ask box strategies—we help your Dublin business secure real estate in competitive search results.' }
  ],
  whyChooseSectionHeadline: 'Why TRAC is Your Go-To SEO Partner in Dublin',
  whyChooseIntro: 'For impactful SEO in Dublin, TRAC offers unparalleled local expertise combined with global best practices. We empower Dublin businesses to achieve significant online growth and a strong competitive edge in Ireland and beyond.',
  whyChooseParagraph1: 'Dublin is a unique city, blending rich history with a forward-thinking tech scene. Our SEO strategies are crafted to reflect this, helping your business connect authentically with both local Dubliners and international audiences. We focus on building a sustainable online presence that drives real business outcomes.',
  whyChooseParagraph2: 'Our team of Dublin SEO specialists stays ahead of algorithm changes and market trends in Ireland. We utilize data-driven insights, advanced SEO tools, and a collaborative approach to ensure your SEO investment yields maximum returns and positions your Dublin business for long-term success.',
  whyChoosePoints: [
    { icon: 'TrendingUp', title: 'Dublin SEO Growth & ROI', description: 'Achieve measurable improvements in organic traffic, lead quality, and sales in the competitive Dublin market. Our focus is on delivering a strong return on your SEO investment in Ireland.' },
    { icon: 'Lightbulb', title: 'Local & International Dublin SEO Expertise', description: 'Benefit from SEO strategies tailored for both the Dublin local market and businesses aiming for international reach from Ireland, considering specific Irish search trends and cultural nuances.' },
    { icon: 'ShieldCheck', title: 'Trusted & Transparent Dublin SEO', description: 'Experience ethical, effective SEO services with clear communication and comprehensive reporting, building a strong foundation for your Dublin business\'s online success. We are your partners in Irish digital growth.' },
    { icon: 'LineChart', title: 'Data-Led SEO Delivery for Ireland', description: 'We optimize for performance by leveraging real user data, algorithm insights, and industry benchmarking. Irish SERPs shift fast—we help you stay ahead.' }
  ],
  awards: {
    clutch: { headline: 'Top Dublin SEO Agency - Clutch Ireland 2024', text: 'Recognized for delivering exceptional SEO results and client satisfaction to businesses across Dublin and Ireland, particularly in the tech and B2B sectors.' },
    upcity: { headline: 'Dublin SEO Excellence - UpCity Awards 2024', text: 'Awarded for leading SEO services and consistently helping Dublin businesses achieve their online growth objectives in a dynamic European market.' },
  },
  location: {
    officeImageUrl: GENERIC_OFFICE_LOCATION_IMAGE_SRC,
    streetAddress: '15th Quay',
    addressLocality: 'Dublin',
    addressRegion: 'Dublin 2',
    postalCode: '',
    addressCountry: 'IE',
    phone: CONTACT_DETAILS.phone,
    email: CONTACT_DETAILS.email,
    hasMap: 'https://goo.gl/maps/iJkL1mN2o3',
    geo: {
      latitude: '53.349800',
      longitude: '-6.260300',
    },
  },
  bottomFormTitle: 'Request Your SEO Strategy Session',
  faqSectionHeadline: 'SEO Questions from Dublin Businesses',
  faqData: [
    { question: 'How long does SEO take to work in Dublin?', answer: 'Most clients see movement in 2–4 months, with stronger gains at the 6-month mark. For competitive sectors like tech or hospitality, campaigns require ongoing momentum and consistent content updates.' },
    { question: 'Can you help us rank in multiple Irish counties?', answer: 'Yes. In addition to Dublin, we can expand your campaign to rank in Wicklow, Meath, Cork, and beyond through structured location silos and regional link acquisition.' },
    { question: 'Is international SEO worth it for Dublin firms?', answer: 'If your audience includes clients in the UK, EU, or US, international SEO is essential. We configure hreflang, TLD structuring, and language optimization for best results.' },
    { question: 'Do you offer SEO for Irish eCommerce sites?', answer: 'Absolutely. We build Irish keyword maps, fix technical SEO for WooCommerce or Shopify, and enhance product schema to drive transactional visibility.' },
    { question: 'How do you measure SEO success in Dublin?', answer: 'We track keyword movement, page value, GMB stats, bounce rates, lead growth, and revenue impact—with clear dashboards and strategy reviews monthly.' }
  ]
};