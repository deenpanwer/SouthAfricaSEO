import type { CityPageData } from '@/types';
import { Search, Settings, Mail, BarChart2, TrendingUp, Lightbulb, ShieldCheck, Briefcase, Users, Globe2, MonitorSmartphone, PencilRuler, LineChart } from 'lucide-react';
import { CONTACT_DETAILS } from '@/lib/constants';

const GENERIC_CITY_HERO_IMAGE_SRC = '/trac-seo.jpg';
const GENERIC_OFFICE_LOCATION_IMAGE_SRC = 'https://cdn-icggj.nitrocdn.com/AphBmykuaGyxZijWArNhxcCiPzVdYZGT/assets/images/optimized/rev-d6d7292/thriveagency.com/files/Denver-Thrive-office-location.jpg';

export const denverData: CityPageData = {
  slug: 'denver',
  cityName: 'Denver',
  metaKeywords: [
    'Denver SEO services',
    'SEO agency Denver CO',
    'Denver local SEO',
    'digital marketing Denver',
    'TRAC SEO Denver',
    'Denver search engine optimization',
    'GMB optimization Denver',
    'Denver eCommerce SEO',
    'Denver B2B SEO',
    'technical SEO Denver',
    'SEO consultants Denver',
    'Denver content marketing',
    'Colorado SEO company',
    'Denver CRO experts',
    'SEO for tech startups Denver',
    'Denver law firm SEO',
    'outdoor brand SEO Denver',
    'Denver link building services'
  ],
  teamSectionHeadline: 'Meet Your Founder & CEO, Kaayf',
  teamSectionDescription: 'The visionary leader behind TRAC, dedicated to your success in Denver.',
  founderBio: 'Kaayf, our Founder & CEO, brings over 15 years of digital marketing expertise to Denver businesses. He is passionate about driving measurable ROI and building sustainable growth for clients in the local market. His leadership ensures TRAC delivers tailored SEO strategies that resonate with Denver\'s unique business landscape.',
  heroData: {
    pageTitle: 'Denver SEO Agency | TRAC - Expert SEO Services in Denver, CO',
    metaDescription: 'TRAC provides expert SEO services for Denver businesses. Drive organic traffic, improve rankings, and achieve growth in the Denver market. Get your free SEO consultation!',
    heroTitle: 'Denver SEO Agency: Elevating Mile High Brands to the Top of Search',
    heroSubtitle: 'From Downtown to the Foothills — Dominate Denver’s Digital Landscape with TRAC SEO',
    heroDescription: `In the vibrant and rapidly growing city of Denver, standing out online requires a nuanced and powerful SEO strategy. Is your Denver business struggling to capture the attention of local customers actively searching for your services? In a market as dynamic and diverse as the Mile High City, simply existing online isn't enough. You need a hyper-local SEO strategy that connects you directly with customers ready to engage and convert. TRAC offers expert Denver SEO services designed to transform your online visibility, drive qualified leads, and deliver measurable return on investment.

We understand the unique rhythm of Denver, from the bustling downtown core to the vibrant RiNo Art District and the thriving communities of Cherry Creek. Our approach goes beyond generic keywords, focusing on high-intent, localized search terms that capture genuine buying intent. Imagine your business appearing at the top of search results for phrases like "best SEO company in Denver," "hire SEO expert Denver," or "Denver digital marketing agency for leads." That's the power of TRAC's tailored SEO solutions.

Our comprehensive Denver SEO campaigns begin with a deep dive into your current online performance and the competitive landscape specific to your industry within Denver. We meticulously optimize your technical SEO, ensuring your website is fast, mobile-friendly, and easily discoverable by search engines. Then, our content specialists craft compelling, authoritative content that not only ranks for critical keywords but also resonates deeply with your target audience, establishing your business as a leader in the Denver market.

Whether you're a burgeoning tech startup in LoDo, an established law firm in Capitol Hill, a thriving restaurant in Highland, or a service provider in the DTC area, TRAC has a proven track record of helping Denver businesses achieve their growth goals. We leverage advanced keyword research, sophisticated local SEO strategies, and transparent reporting to ensure your investment translates into tangible results. Our commitment to ethical, white-hat SEO practices means your online growth is sustainable and built for long-term success.

Don't let your competitors dominate the Denver market. Partner with TRAC, the trusted Denver SEO agency committed to driving your success. We specialize in helping service-based businesses like yours increase online visibility, attract more customers, and ultimately, dominate local search results. Ready to grow your Denver business and secure your position at the forefront of local search? Contact us today for a free SEO analysis and discover how our expertise can elevate your brand.`,
    heroImage: { src: GENERIC_CITY_HERO_IMAGE_SRC, alt: 'SEO Services in Denver, CO', dataAiHint: 'Denver city mountains' },
    heroVideoUrl: 'https://www.youtube.com/embed/JBPmDzL-Xek',
    formTitle: 'Free Denver SEO Proposal!',
  },
  resultsHeadline: 'Real SEO Results for Denver Businesses — Traffic, Leads, and Rankings',
  readyToGrowHeadline: 'Let/s Take Your Denver SEO to New Heights',
  servicesSectionHeadline: 'Custom SEO Services in Denver That Deliver Growth',
  servicesSectionSubheadline: 'From the Highlands to LoDo and beyond, TRAC’s SEO services are tailored to match Denver’s unique market trends, buyer behavior, and competitive landscape.',
  services: [
    {
      icon: Search,
      title: 'Local SEO for Denver',
      url: '/services/local-seo',
      description: 'Dominate local searches in Denver with our specialized Local SEO for Denver. We provide neighborhood-level SEO targeting for LoHi, Baker, RiNo, Capitol Hill, and more, designed to rank your Denver business in local map packs and organic search. Our strategies drive highly qualified local traffic, converting nearby searches into loyal customers and significantly boosting your local market presence in the Mile High City.',
    },
    {
      icon: Settings,
      title: 'Technical SEO Optimization',
      url: '/services/technical-seo',
      description: "Ensure your Denver website is technically flawless and performs optimally with our comprehensive Technical SEO Optimization services. We meticulously address crawl errors, Core Web Vitals, and mobile responsiveness, ideal for improving site health and search performance across Denver-based websites. Our audits and fixes are designed to enhance your site's foundational health, leading to improved search rankings and a seamless experience for your Denver customers, ultimately driving more organic traffic and conversions.",
    },
    {
      icon: Mail,
      title: 'Content Strategy & SEO Copywriting',
      url: '/services/content-marketing',
      description: 'Establish your brand as a local authority in Denver with our specialized Content Strategy & SEO Copywriting services. We create engaging blog posts, service pages, and city-specific landing pages tailored to long-tail Denver search intent and seasonal demand. This hyper-local content not only attracts search engines but also resonates deeply with your target audience, building trust and credibility while driving significant SEO equity and converting visitors into loyal clients in the Denver market.',
    },
    {
      icon: BarChart2,
      title: 'Analytics & Transparent Reporting',
      url: '/services/seo-reporting',
      description: 'Gain crystal-clear insights into your Denver SEO performance with our Analytics & Transparent Reporting. We provide monthly dashboards tracking keyword movements, Google Business Profile actions, organic leads, conversions, and Denver market trends. Our transparent reports empower you to understand the impact of our strategies and make informed decisions to further dominate the Denver market, ensuring every SEO dollar translates into measurable business growth.',
    },
    {
      icon: Briefcase,
      title: 'B2B SEO for Denver Firms',
      url: '/services/b2b-seo',
      description: 'Elevate your B2B presence in Denver with our specialized B2B SEO for Denver Firms. We provide strategic enterprise SEO services for SaaS, professional services, and logistics companies across the Denver metro. Our approach is designed to capture high-intent business leads, enhance your online authority, and drive sustainable growth within the competitive B2B landscape, ensuring your Denver firm connects with its ideal clients.',
    },
    {
      icon: Users,
      title: 'Persona-Based Keyword Research',
      url: '/services/keyword-research',
      description: 'Gain a decisive advantage in the Denver market with our in-depth Persona-Based Keyword Research. We meticulously map real user queries to your customer journey, prioritizing Denver searcher behavior across devices and decision stages. This strategic insight ensures your SEO efforts are highly targeted, attracting the most qualified leads and maximizing your online visibility in the competitive Denver landscape.',
    },
    {
      icon: Globe2,
      title: 'Multilingual SEO for Diverse Audiences',
      url: '/services/multilingual-seo',
      description: 'Expand your reach to Denver’s diverse communities with our Multilingual SEO services. We provide multilingual content optimization and hreflang implementation to reach Denver’s Spanish-speaking communities. This ensures your business connects with a broader audience, enhancing your global appeal and driving diverse traffic to your Denver-based enterprise, maximizing your international market penetration.',
    },
    {
      icon: MonitorSmartphone,
      title: 'Mobile UX & SEO Conversion Optimization',
      url: '/services/mobile-seo',
      description: 'Ensure your Denver website performs flawlessly on smartphones and tablets with our Mobile UX & SEO Conversion Optimization services. We focus on mobile-first site structure, fast load times, and strategic CTA placements that turn mobile users into leads. Our strategies enhance user experience across all devices, leading to improved engagement, lower bounce rates, and increased conversions for your Denver business, ensuring you reach customers wherever they are.',
    },
    {
      icon: PencilRuler,
      title: 'Design-Integrated SEO Enhancements',
      url: '/services/seo-design-cro',
      description: 'Maximize engagement and conversions on every Denver landing page with our integrated Design-Integrated SEO Enhancements. We build on-page elements with CRO and SEO in mind, including hero CTA layouts, sticky navigations, and testimonial blocks that significantly improve engagement. This holistic approach ensures your website not only ranks highly in search results but also effectively guides visitors through their journey, leading to higher engagement and increased conversions for your Denver business.',
    },
    {
      icon: LineChart,
      title: 'SERP Feature Optimization',
      url: '/services/serp-features',
      description: 'Maximize your visibility in Denver search results with our SERP Feature Optimization. We meticulously target Google SERP features, from People Also Ask to map packs, to maximize Denver visibility. This ensures your business stands out in the search landscape, driving more qualified traffic and increasing your chances of capturing high-intent local leads, ultimately boosting your online presence and conversions.',
    }
  ],
  whyChooseSectionHeadline: 'Why Denver Companies Partner with TRAC for SEO Growth',
  whyChooseIntro: 'Our Denver SEO approach is rooted in transparency, data, and a deep knowledge of Colorado’s business landscape.',
  whyChooseParagraph1: 'Choosing the right SEO partner in Denver is paramount for your business\'s success in this competitive and rapidly evolving market. TRAC stands apart as a trusted agency, combining unparalleled local market expertise with a proven track record of delivering tangible, measurable results for businesses like yours. We possess an intimate understanding of Denver’s diverse economic landscape, from the bustling downtown core to the vibrant RiNo Art District and the thriving communities of Cherry Creek. This deep local insight allows us to craft hyper-localized SEO strategies that precisely target your ideal customers, wherever they are searching within the Denver metropolitan area. We don\'t just understand the algorithms; we understand the unique nuances of the Denver consumer and business environment, ensuring your message resonates with the right audience at the right time.',
  whyChooseParagraph2: 'We don\'t just promise results; we deliver them through a data-driven, transparent, and ethical process that prioritizes your return on investment. Our methodology is rooted in rigorous analysis of Denver-specific search trends, a thorough examination of your local competitive landscape, and a deep understanding of your unique business objectives. We provide clear, consistent reporting, proactive communication, and a dedicated team committed to your long-term growth. With TRAC, you gain a strategic partner focused on maximizing your online visibility, driving qualified leads, and ensuring a significant return on your SEO investment. Our commitment to white-hat SEO practices means your online growth is sustainable, resilient to algorithm changes, and built for enduring success in the Denver market. We are not just a vendor; we are an extension of your team, invested in your success.',
  whyChoosePoints: [
    { icon: 'TrendingUp', title: 'ROI-Focused SEO Campaigns', description: 'Our SEO is engineered for real business metrics—leads, calls, GMB actions, and bottom-line revenue in the Denver area.' },
    { icon: 'Lightbulb', title: 'Denver Market Intelligence', description: 'We tailor every campaign based on Denver-specific consumer behavior and local keyword trend data.' },
    { icon: 'ShieldCheck', title: 'Transparent SEO Delivery', description: 'You get a roadmap, a point-of-contact strategist, and full access to campaign reporting. No surprises—just results.' },
    { icon: 'LineChart', title: 'Built for Search Intent & SERP Takeover', description: 'We build FAQ schema, optimize for featured snippets, and own the SERP real estate that matters most in Denver.' },
    {
      icon: 'Users',
      title: 'Dedicated Team of Experts',
      description:
        'Benefit from a dedicated team of SEO experts, content strategists, and web developers committed to your success. Our specialists bring collective expertise and a personalized approach to every aspect of your campaign, ensuring your Denver business receives the highest level of service and support.',
    },
    {
      icon: 'BarChart',
      title: 'Holistic Approach',
      description:
        'We adopt a holistic approach to your online growth, seamlessly integrating SEO with other digital marketing channels to create a comprehensive and synergistic strategy. This ensures maximum impact and sustained growth, positioning your Denver business for long-term success in the digital landscape.',
    }
  ],
  awards: {
    clutch: {
      headline: 'TRAC Named a Top Denver SEO Company by Clutch in 2024',
      text: 'Clutch recognized TRAC as a leading SEO provider in Denver based on verified reviews, market presence, and service quality.'
    },
    upcity: {
      headline: 'UpCity Honors TRAC for Denver SEO Excellence 2024',
      text: 'Awarded for consistent SEO success and measurable campaign performance in the Denver business landscape.'
    }
  },
  location: {
    officeImageUrl: GENERIC_OFFICE_LOCATION_IMAGE_SRC,
    streetAddress: '606 Pkwy',
    addressLocality: 'Denver',
    addressRegion: 'CO',
    postalCode: '80201',
    addressCountry: 'US',
    phone: CONTACT_DETAILS.phone,
    email: CONTACT_DETAILS.email,
    hasMap: 'https://goo.gl/maps/h9I0j1K2l3',
    geo: {
      latitude: '39.739200',
      longitude: '-104.990300',
    },
  },
  bottomFormTitle: 'Book Your Free Denver SEO Strategy Call',
  roadmapSteps: [
    {
      icon: "Search",
      title: "Step 1: Deep Market Analysis",
      description: "We start by analyzing the local Denver market, identifying your top competitors and uncovering local search trends to build a data-driven foundation for your success.",
    },
    {
      icon: "CheckCircle",
      title: "Step 2: Hyper-Local Keyword Targeting",
      description: "Our experts find the high-intent keywords your local Denver customers are using to search for your services, ensuring we attract the most qualified traffic directly to your business.",
    },
    {
      icon: "BarChart2",
      title: "Step 3: Google Business Profile Optimization",
      description: "We meticulously optimize your Google Business Profile to dominate the local map pack in Denver, driving direct calls and website visits from nearby customers.",
    },
    {
      icon: "Edit",
      title: "Step 4: On-Page & Technical SEO",
      description: "We enhance your website's structure, content, and technical health to ensure it's perfectly optimized for both search engines and user experience, specifically for the Denver audience.",
    },
    {
      icon: "Link2",
      title: "Step 5: Local Link Building & Citations",
      description: "We build your authority by acquiring high-quality backlinks from reputable local Denver businesses and online directories, signaling trust to Google and boosting your local relevance.",
    },
    {
      icon: "TrendingUp",
      title: "Step 6: Transparent Reporting & Strategy Refinement",
      description: "You get clear, monthly reports showing your progress in the Denver market. We continually refine our strategy based on the data to maximize your ROI and keep you ahead of the competition.",
    },
  ],
  faqSectionHeadline: 'Denver SEO: Your Questions Answered',
  faqData: [
    { question: 'How long does it take to rank in Denver search results?', answer: 'For local terms, you may see progress in 3–6 months. Highly competitive verticals in Denver may take longer, but we build long-term momentum.' },
    { question: 'Do you help with SEO for Denver neighborhoods?', answer: 'Yes. We create and optimize neighborhood-specific content for places like Five Points, Cherry Creek, and Capitol Hill to improve visibility where your customers live and search.' },
    { question: 'Is SEO worth it for my small business in Denver?', answer: 'Absolutely. Local SEO is one of the most cost-effective ways to reach engaged Denver customers who are ready to buy.' },
    { question: 'What’s included in your monthly SEO reports?', answer: 'Rank tracking, GMB metrics, lead generation reports, traffic analysis, and next-step strategy insights—customized to your Denver goals.' },
    { question: 'Do you also do SEO for Denver’s outdoor and cannabis sectors?', answer: 'Yes, TRAC has experience ranking businesses in highly regulated and niche sectors like cannabis, CBD, and outdoor retail in Colorado.' },
    {
      question: 'How can I find the best local SEO services near me in Denver?',
      answer: 'To find the best local SEO services in Denver, look for agencies with a proven track record of success in your specific industry, strong client testimonials, and a deep understanding of the Denver market. TRAC specializes in hyper-local SEO strategies that connect your business with customers actively searching for your services nearby, ensuring you dominate local search results and drive tangible growth.',
    }
  ]
};