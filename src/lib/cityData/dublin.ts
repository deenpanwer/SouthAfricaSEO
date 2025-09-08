import type { CityPageData } from '@/types';
import { Search, Settings, Briefcase, Mail, BarChart2, TrendingUp, Lightbulb, ShieldCheck, Globe2, MonitorSmartphone, PencilRuler, LineChart } from 'lucide-react';
import { CONTACT_DETAILS } from '@/lib/constants';

const GENERIC_CITY_HERO_IMAGE_SRC = '/trac-seo.jpg';
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
  teamSectionHeadline: 'Meet Your Founder & CEO, Kaayf',
  teamSectionDescription: 'The visionary leader behind TRAC, dedicated to your success in Dublin.',
  founderBio: 'Kaayf, our Founder & CEO, brings over 15 years of digital marketing expertise to Dublin businesses. He is passionate about driving measurable ROI and building sustainable growth for clients in the local market. His leadership ensures TRAC delivers tailored SEO strategies that resonate with Dublin\'s unique business landscape.',
  heroData: {
    pageTitle: 'Dublin SEO Experts | TRAC - SEO Services Dublin, Ireland',
    metaDescription: 'TRAC provides leading SEO services for Dublin businesses. Boost your organic traffic, improve search rankings, and achieve sustainable growth in the competitive Dublin market. Contact our Dublin SEO specialists!',
    heroTitle: 'Dublin SEO Agency: Propel Your Business in Ireland\'s Capital',
    heroSubtitle: 'Dominate Dublin Search Results with TRAC\'s Proven SEO Strategies & Local Expertise',
    heroDescription: `In the vibrant and globally connected city of Dublin, standing out online requires a nuanced and powerful SEO strategy. Is your Dublin business struggling to capture the attention of local and international customers actively searching for your services? In a market as rich in innovation and cultural heritage as Ireland's capital, simply existing online isn't enough. You need a hyper-local and internationally-aware SEO strategy that connects you directly with customers ready to engage and convert. TRAC offers expert Dublin SEO services designed to transform your online visibility, drive qualified leads, and deliver measurable return on investment.

We understand the unique rhythm of Dublin, from the bustling Silicon Docks to the historic Temple Bar and the thriving communities of South Dublin. Our approach goes beyond generic keywords, focusing on high-intent, localized search terms that capture genuine buying intent. Imagine your business appearing at the top of search results for phrases like "best SEO company in Dublin," "hire SEO expert Dublin," or "Dublin digital marketing agency for leads." That's the power of TRAC's tailored SEO solutions.

Our comprehensive Dublin SEO campaigns begin with a deep dive into your current online performance and the competitive landscape specific to your industry within Dublin. We meticulously optimize your technical SEO, ensuring your website is fast, mobile-friendly, and easily discoverable by search engines. Then, our content specialists craft compelling, authoritative content that not only ranks for critical keywords but also resonates deeply with your target audience, establishing your business as a leader in the Dublin market.

Whether you're a burgeoning tech startup in Grand Canal Dock, an established financial institution in the IFSC, a thriving hospitality business in the city center, or a service provider in Rathmines, TRAC has a proven track record of helping Dublin businesses achieve their growth goals. We leverage advanced keyword research, sophisticated local and international SEO strategies, and transparent reporting to ensure your investment translates into tangible results. Our commitment to ethical, white-hat SEO practices means your online growth is sustainable and built for long-term success.

Don't let your competitors dominate the Dublin market. Partner with TRAC, the trusted Dublin SEO agency committed to driving your success. We specialize in helping service-based businesses like yours increase online visibility, attract more customers, and ultimately, dominate local and international search results. Ready to grow your Dublin business and secure your position at the forefront of local and global search? Contact us today for a free SEO analysis and discover how our expertise can elevate your brand.`,
    heroImage: { src: GENERIC_CITY_HERO_IMAGE_SRC, alt: 'SEO Services in Dublin, Ireland', dataAiHint: 'Dublin city tech' },
    heroVideoUrl: 'https://www.youtube.com/embed/JBPmDzL-Xek',
    formTitle: 'Get Your FREE Dublin SEO Audit!',
  },
  resultsHeadline: 'Driving SEO Success for Dublin\'s Innovative Businesses',
  readyToGrowHeadline: 'Ready to Boost Your Dublin SEO & Conquer the Irish Market?',
  servicesSectionHeadline: 'Tailored SEO Services for Dublin & Ireland',
  servicesSectionSubheadline: 'Our Dublin SEO services are designed to meet the unique challenges of Ireland\'s capital, enhancing your visibility in a competitive, tech-savvy, and international market.',
  services: [
    {
      icon: Search,
      title: 'Dublin Local SEO & National Targeting',
      url: '/services/local-seo',
      description: 'Maximize visibility across Dublin neighbourhoods and throughout Ireland. Optimize for GMB, Irish directories, and NAP consistency to increase rankings in Dublin City Centre, Temple Bar, and South Dublin. Our strategies drive highly qualified local traffic, converting nearby searches into loyal customers and significantly boosting your local market presence in Ireland.',
    },
    {
      icon: Settings,
      title: 'Technical SEO & Mobile Optimization',
      url: '/services/technical-seo',
      description: "Ensure your Dublin website is technically flawless and performs optimally with our comprehensive Technical SEO & Mobile Optimization services. We meticulously fix site speed, mobile usability, schema errors, and indexation issues. Our audits and fixes are designed to enhance your site's foundational health, leading to improved search rankings and a seamless experience for your Dublin customers, ultimately driving more organic traffic and conversions for both Irish and global audiences.",
    },
    {
      icon: Mail,
      title: 'Content & Digital PR for Dublin Brands',
      url: '/services/content-marketing',
      description: 'Establish your brand as a local authority in Dublin with our specialized Content & Digital PR for Dublin Brands. We build topical authority through engaging blogs, strategic press releases, and targeted Irish guest posting. Our content is meticulously mapped to Dublin-based long-tail search demand, not only attracting search engines but also resonating deeply with your target audience, building trust and credibility while driving significant SEO equity and converting visitors into loyal clients in the Dublin market.',
    },
    {
      icon: Briefcase,
      title: 'Enterprise SEO for Tech & Finance',
      url: '/services/enterprise-seo',
      description: 'Elevate your enterprise presence in Dublin with our specialized Enterprise SEO for Tech & Finance. We help multinational and B2B firms in Dublin attract inbound leads through complex, funnel-aware SEO strategies aligned with your sector’s KPIs. Our approach is designed to navigate highly competitive landscapes, ensuring compliance while maximizing online visibility and establishing your authority. We drive qualified traffic that converts, building a strong digital presence for your Dublin-based enterprise.',
    },
    {
      icon: BarChart2,
      title: 'SEO KPIs & Irish Market Reporting',
      url: '/services/seo-reporting',
      description: 'Gain crystal-clear insights into your Dublin SEO performance with our SEO KPIs & Irish Market Reporting. All campaigns include monthly ROI-focused performance dashboards covering CTRs, keyword gains, leads, calls, and revenue benchmarks. Our transparent reports empower you to understand the impact of our strategies and make informed decisions to further dominate the Dublin market, ensuring every SEO dollar translates into measurable business growth.',
    },
    {
      icon: Globe2,
      title: 'International SEO & hreflang Implementation',
      url: '/services/international-seo',
      description: 'Expand your global reach from Dublin with our International SEO & hreflang Implementation services. We target audiences in Europe and North America with comprehensive multilingual support and region-specific SERP strategies. This ensures your business connects with a broader international audience, enhancing your global appeal and driving diverse traffic to your Dublin-based enterprise, maximizing your international market penetration.',
    },
    {
      icon: MonitorSmartphone,
      title: 'Mobile-First UX for Dublin Users',
      url: '/services/mobile-seo',
      description: 'Ensure your Dublin website performs flawlessly on smartphones and tablets with our Mobile-First UX for Dublin Users services. We deliver fast, intuitive UX for mobile-heavy Irish audiences, auditing clickflows, optimizing conversion paths, and prioritizing responsive performance. Our strategies enhance user experience across all devices, leading to improved engagement, lower bounce rates, and increased conversions for your Dublin business, ensuring you reach customers wherever they are.',
    },
    {
      icon: PencilRuler,
      title: 'SEO + CRO Alignment',
      url: '/services/seo-cro-alignment',
      description: 'Maximize engagement and conversions on every Dublin landing page with our integrated SEO + CRO Alignment services. We seamlessly merge CRO best practices with SEO, focusing on conversion-focused page layouts, strong trust signals, and effective lead capture strategies designed for Irish behavior. This holistic approach ensures your website not only ranks highly in search results but also effectively guides visitors through their journey, leading to higher engagement and increased conversions for your Dublin business.',
    },
    {
      icon: LineChart,
      title: 'SERP Features & Dublin Snippet Targeting',
      url: '/services/serp-features',
      description: 'Maximize your visibility in Dublin search results with our SERP Features & Dublin Snippet Targeting. We meticulously target Google SERP features, from FAQ schema to People Also Ask box strategies, to help your Dublin business secure real estate in competitive search results. This ensures your business stands out in the search landscape, driving more qualified traffic and increasing your chances of capturing high-intent local leads, ultimately boosting your online presence and conversions.',
    }
  ],
  whyChooseSectionHeadline: 'Why TRAC is Your Go-To SEO Partner in Dublin',
  whyChooseIntro: 'For impactful SEO in Dublin, TRAC offers unparalleled local expertise combined with global best practices. We empower Dublin businesses to achieve significant online growth and a strong competitive edge in Ireland and beyond.',
  whyChooseParagraph1: 'Choosing the right SEO partner in Dublin is paramount for your business\'s success in this competitive and rapidly evolving market. TRAC stands apart as a trusted agency, combining unparalleled local market expertise with a proven track record of delivering tangible, measurable results for businesses like yours. We possess an intimate understanding of Dublin’s diverse economic landscape, from the bustling Silicon Docks to the historic Temple Bar and the thriving communities of South Dublin. This deep local insight allows us to craft hyper-localized SEO strategies that precisely target your ideal customers, wherever they are searching within the Dublin metropolitan area. We don\'t just understand the algorithms; we understand the unique nuances of the Dublin consumer and business environment, ensuring your message resonates with the right audience at the right time.',
  whyChooseParagraph2: 'We don\'t just promise results; we deliver them through a data-driven, transparent, and ethical process that prioritizes your return on investment. Our methodology is rooted in rigorous analysis of Dublin-specific search trends, a thorough examination of your local competitive landscape, and a deep understanding of your unique business objectives. We provide clear, consistent reporting, proactive communication, and a dedicated team committed to your long-term growth. With TRAC, you gain a strategic partner focused on maximizing your online visibility, driving qualified leads, and ensuring a significant return on your SEO investment. Our commitment to white-hat SEO practices means your online growth is sustainable, resilient to algorithm changes, and built for enduring success in the Dublin market. We are not just a vendor; we are an extension of your team, invested in your success.',
  whyChoosePoints: [
    { icon: 'TrendingUp', title: 'Dublin SEO Growth & ROI', description: 'Achieve measurable improvements in organic traffic, lead quality, and sales in the competitive Dublin market. Our focus is on delivering a strong return on your SEO investment in Ireland.' },
    { icon: 'Lightbulb', title: 'Local & International Dublin SEO Expertise', description: 'Benefit from SEO strategies tailored for both the Dublin local market and businesses aiming for international reach from Ireland, considering specific Irish search trends and cultural nuances.' },
    { icon: 'ShieldCheck', title: 'Trusted & Transparent Dublin SEO', description: 'Experience ethical, effective SEO services with clear communication and comprehensive reporting, building a strong foundation for your Dublin business\'s online success. We are your partners in Irish digital growth.' },
    { icon: 'LineChart', title: 'Data-Led SEO Delivery for Ireland', description: 'We optimize for performance by leveraging real user data, algorithm insights, and industry benchmarking. Irish SERPs shift fast—we help you stay ahead.' },
    {
      icon: 'Users',
      title: 'Dedicated Team of Experts',
      description:
        'Benefit from a dedicated team of SEO experts, content strategists, and web developers committed to your success. Our specialists bring collective expertise and a personalized approach to every aspect of your campaign, ensuring your Dublin business receives the highest level of service and support.',
    },
    {
      icon: 'BarChart',
      title: 'Holistic Approach',
      description:
        'We adopt a holistic approach to your online growth, seamlessly integrating SEO with other digital marketing channels to create a comprehensive and synergistic strategy. This ensures maximum impact and sustained growth, positioning your Dublin business for long-term success in the digital landscape.',
    }
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
  roadmapSteps: [
    {
      icon: "Search",
      title: "Step 1: Deep Market Analysis",
      description: "We start by analyzing the local Dublin market, identifying your top competitors and uncovering local search trends to build a data-driven foundation for your success.",
    },
    {
      icon: "CheckCircle",
      title: "Step 2: Hyper-Local Keyword Targeting",
      description: "Our experts find the high-intent keywords your local Dublin customers are using to search for your services, ensuring we attract the most qualified traffic directly to your business.",
    },
    {
      icon: "BarChart2",
      title: "Step 3: Google Business Profile Optimization",
      description: "We meticulously optimize your Google Business Profile to dominate the local map pack in Dublin, driving direct calls and website visits from nearby customers.",
    },
    {
      icon: "Edit",
      title: "Step 4: On-Page & Technical SEO",
      description: "We enhance your website's structure, content, and technical health to ensure it's perfectly optimized for both search engines and user experience, specifically for the Dublin audience.",
    },
    {
      icon: "Link2",
      title: "Step 5: Local Link Building & Citations",
      description: "We build your authority by acquiring high-quality backlinks from reputable local Dublin businesses and online directories, signaling trust to Google and boosting your local relevance.",
    },
    {
      icon: "TrendingUp",
      title: "Step 6: Transparent Reporting & Strategy Refinement",
      description: "You get clear, monthly reports showing your progress in the Dublin market. We continually refine our strategy based on the data to maximize your ROI and keep you ahead of the competition.",
    },
  ],
  faqSectionHeadline: 'SEO Questions from Dublin Businesses',
  faqData: [
    { question: 'How long does SEO take to work in Dublin?', answer: 'Most clients see movement in 2–4 months, with stronger gains at the 6-month mark. For competitive sectors like tech or hospitality, campaigns require ongoing momentum and consistent content updates.' },
    { question: 'Can you help us rank in multiple Irish counties?', answer: 'Yes. In addition to Dublin, we can expand your campaign to rank in Wicklow, Meath, Cork, and beyond through structured location silos and regional link acquisition.' },
    { question: 'Is international SEO worth it for Dublin firms?', answer: 'If your audience includes clients in the UK, EU, or US, international SEO is essential. We configure hreflang, TLD structuring, and language optimization for best results.' },
    { question: 'Do you offer SEO for Irish eCommerce sites?', answer: 'Absolutely. We build Irish keyword maps, fix technical SEO for WooCommerce or Shopify, and enhance product schema to drive transactional visibility.' },
    { question: 'How do you measure SEO success in Dublin?', answer: 'We track keyword movement, page value, GMB stats, bounce rates, lead growth, and revenue impact—with clear dashboards and strategy reviews monthly.' },
    {
      question: 'How can I find the best local SEO services near me in Dublin?',
      answer: 'To find the best local SEO services in Dublin, look for agencies with a proven track record of success in your specific industry, strong client testimonials, and a deep understanding of the Dublin market. TRAC specializes in hyper-local SEO strategies that connect your business with customers actively searching for your services nearby, ensuring you dominate local search results and drive tangible growth.',
    }
  ]
};