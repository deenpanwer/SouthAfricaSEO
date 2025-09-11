import type { CityPageData } from '@/types';
import {
  Search,
  Settings,
  Briefcase,
  Mail,
  TrendingUp,
  Lightbulb,
  ShieldCheck,
  MapPin,
  LineChart
} from 'lucide-react';
import { CONTACT_DETAILS } from '@/lib/constants';

const GENERIC_CITY_HERO_IMAGE_SRC = '/trac-seo.jpg';
const GENERIC_OFFICE_LOCATION_IMAGE_SRC = 'https://placehold.co/600x400.png';

export const belfastData: CityPageData = {
  slug: 'belfast',
  cityName: 'Belfast',
  metaKeywords: [
    'Belfast SEO company Northern Ireland',
    'SEO services Cathedral Quarter',
    'digital marketing Belfast NI',
    'local SEO expert Titanic Quarter Belfast',
    'technical SEO Northern Ireland businesses',
    'tourism SEO for Belfast attractions',
    'SEO for Belfast startups and tech companies',
    'Northern Ireland small business SEO',
    'affordable Belfast SEO services',
    'content marketing Belfast Northern Ireland'
  ],
  teamSectionHeadline: 'Meet Your Founder & CEO, Kaayf',
  teamSectionDescription: 'The visionary leader behind TRAC, dedicated to your success in Belfast.',
  founderBio: 'Kaayf, our Founder & CEO, brings over 15 years of digital marketing expertise to Belfast businesses. He is passionate about driving measurable ROI and building sustainable growth for clients in the local market. His leadership ensures TRAC delivers tailored SEO strategies that resonate with Belfast\'s unique business landscape.',
  heroData: {
    pageTitle: 'Belfast SEO Services | TRAC - SEO Agency Belfast, NI',
    metaDescription: 'TRAC offers expert SEO services for Belfast businesses. Enhance your online visibility, attract more customers, and grow your business in Northern Ireland. Contact our Belfast SEO team!',
    heroTitle: 'Belfast SEO Agency: Drive Your Success in Northern Ireland',
    heroSubtitle: "Achieve Top Rankings in Belfast with TRAC's Dynamic SEO Strategies",
        heroDescription: `In the dynamic and evolving city of Belfast, standing out online requires a nuanced and powerful SEO strategy. Is your Belfast business struggling to capture the attention of local customers actively searching for your services? In a market as rich in history and innovation as Northern Ireland's capital, simply existing online isn't enough. You need a hyper-local SEO strategy that connects you directly with customers ready to engage and convert. TRAC offers expert Belfast SEO services designed to transform your online visibility, drive qualified leads, and deliver measurable return on investment.

We understand the unique rhythm of Belfast, from the historic Titanic Quarter to the vibrant Cathedral Quarter and the thriving communities of South Belfast. Our approach goes beyond generic keywords, focusing on high-intent, localized search terms that capture genuine buying intent. Imagine your business appearing at the top of search results for phrases like "best SEO company in Belfast," "hire SEO expert Belfast," or "Belfast digital marketing agency for leads." That's the power of TRAC's tailored SEO solutions.

Our comprehensive Belfast SEO campaigns begin with a deep dive into your current online performance and the competitive landscape specific to your industry within Belfast. We meticulously optimize your technical SEO, ensuring your website is fast, mobile-friendly, and easily discoverable by search engines. Then, our content specialists craft compelling, authoritative content that not only ranks for critical keywords but also resonates deeply with your target audience, establishing your business as a leader in the Belfast market.

Whether you're a burgeoning startup in the tech sector, an established professional service firm in the city center, a thriving hospitality business in the Linen Quarter, or a service provider in East Belfast, TRAC has a proven track record of helping Belfast businesses achieve their growth goals. We leverage advanced keyword research, sophisticated local SEO strategies, and transparent reporting to ensure your investment translates into tangible results. Our commitment to ethical, white-hat SEO practices means your online growth is sustainable and built for long-term success.

Don't let your competitors dominate the Belfast market. Partner with TRAC, the trusted Belfast SEO agency committed to driving your success. We specialize in helping service-based businesses like yours increase online visibility, attract more customers, and ultimately, dominate local search results. Ready to grow your Belfast business and secure your position at the forefront of local search? Contact us today for a free SEO analysis and discover how our expertise can elevate your brand.`,
    heroImage: { src: GENERIC_CITY_HERO_IMAGE_SRC, alt: 'SEO Services in Belfast, Northern Ireland' },
    heroVideoUrl: 'https://www.youtube.com/embed/JBPmDzL-Xek',
    formTitle: 'Get Your FREE SEO Audit!'
  },
  resultsHeadline: 'Delivering Powerful SEO Results for Belfast & NI Businesses',
  readyToGrowHeadline: 'Ready to Elevate Your Belfast Business with Effective SEO?',
  servicesSectionHeadline: 'Targeted SEO Services for Belfast & Northern Ireland',
  servicesSectionSubheadline: 'Our SEO strategies are designed to help businesses in Northern Ireland capitalize on digital opportunities, reaching local customers and expanding their market presence.',
  services: [
    {
      icon: Search,
      title: 'Local SEO & NI Market Reach',
      url: '/services/local-seo',
      description: 'Dominate local searches in Belfast with our specialized Local SEO & NI Market Reach strategies. We meticulously optimize Google Business Profiles, local pages, and citations to ensure your business stands out in searches like “marketing firm Titanic Quarter” or “restaurants near Cathedral Quarter.” Our approach drives highly qualified local traffic, converting nearby searches into loyal customers and significantly boosting your local market presence in Belfast and across Northern Ireland.',
    },
    {
      icon: Settings,
      title: 'Technical Website Optimization',
      url: '/services/technical-seo',
      description: 'Ensure your Belfast website is technically flawless and performs optimally with our comprehensive Technical Website Optimization services. Our audits cover Core Web Vitals, mobile indexing, and schema markup, ensuring your site meets the technical demands of top-ranking SEO. We enhance your site\'s foundational health, leading to improved search rankings and a seamless experience for your Belfast customers, ultimately driving more organic traffic and conversions.',
    },
    {
      icon: Mail,
      title: 'Content Marketing & Authority Building',
      url: '/services/content-marketing',
      description: 'Establish your brand as a local authority in Belfast with our specialized Content Marketing & Authority Building services. We produce city-specific guides, engaging blog content, and linkable assets designed for Belfast’s diverse industries. This hyper-local content not only attracts search engines but also resonates deeply with your target audience, building trust and credibility while driving significant SEO equity and converting visitors into loyal clients in the Belfast market.',
    },
    {
      icon: Briefcase,
      title: 'Industry-Tailored SEO',
      url: '/services/industry-seo',
      description: 'Receive custom SEO strategies for Belfast’s diverse sectors, including creative, tech, hospitality, and tourism. Our Industry-Tailored SEO aligns precisely with specific search behaviors and conversion goals within your niche. We understand the unique challenges and opportunities of each industry, crafting bespoke campaigns that drive targeted traffic, enhance online visibility, and deliver measurable results for your Belfast business.',
    },
    {
      icon: MapPin,
      title: 'GMB & Local Pack Optimization',
      url: '/services/gmb-optimization',
      description: 'Significantly improve your rankings in Google’s local pack with our expert GMB & Local Pack Optimization services for Belfast businesses. We provide comprehensive profile management, strategic geo-tagged media integration, robust review strategies, and meticulous listing accuracy across Belfast. Our approach ensures your business appears prominently in local search results, driving more direct calls, website visits, and foot traffic from nearby customers.',
    }
  ],
  whyChooseSectionHeadline: 'TRAC: Your Belfast SEO Agency for Growth in NI',
  whyChooseIntro: 'TRAC delivers results-driven SEO solutions for businesses in Belfast, using local market knowledge and proven digital strategies to help you succeed in Northern Ireland’s evolving economy.',
  whyChooseParagraph1: 'Choosing the right SEO partner in Belfast is paramount for your business\'s success in this competitive and rapidly evolving market. TRAC stands apart as a trusted agency, combining unparalleled local market expertise with a proven track record of delivering tangible, measurable results for businesses like yours. We possess an intimate understanding of Belfast’s diverse economic landscape, from the historic Titanic Quarter to the vibrant Cathedral Quarter and the thriving communities of South Belfast. This deep local insight allows us to craft hyper-localized SEO strategies that precisely target your ideal customers, wherever they are searching within the Belfast metropolitan area. We don\'t just understand the algorithms; we understand the unique nuances of the Belfast consumer and business environment, ensuring your message resonates with the right audience at the right time.',
  whyChooseParagraph2: 'We don\'t just promise results; we deliver them through a data-driven, transparent, and ethical process that prioritizes your return on investment. Our methodology is rooted in rigorous analysis of Belfast-specific search trends, a thorough examination of your local competitive landscape, and a deep understanding of your unique business objectives. We provide clear, consistent reporting, proactive communication, and a dedicated team committed to your long-term growth. With TRAC, you gain a strategic partner focused on maximizing your online visibility, driving qualified leads, and ensuring a significant return on your SEO investment. Our commitment to white-hat SEO practices means your online growth is sustainable, resilient to algorithm changes, and built for enduring success in the Belfast market. We are not just a vendor; we are an extension of your team, invested in your success.',
  whyChoosePoints: [
    {
      icon: 'TrendingUp',
      title: 'Local Rankings That Drive Leads',
      description: 'We capture the terms that matter most—so your Belfast business appears when and where customers are looking.'
    },
    {
      icon: 'Lightbulb',
      title: 'Northern Ireland Market Expertise',
      description: 'Our SEO tactics reflect local intent—from Game of Thrones tours to Belfast tech accelerators—tailored to searchers in NI.'
    },
    {
      icon: 'ShieldCheck',
      title: 'Trustworthy, Ethical SEO',
      description: 'We stay aligned with Google’s guidelines while delivering organic growth built to last in Northern Ireland’s evolving digital space.'
    },
    {
      icon: 'LineChart',
      title: 'Results You Can Measure',
      description: 'We tie every campaign to ROI and provide actionable reporting that helps Belfast businesses grow with confidence.'
    },
    {
      icon: 'Users',
      title: 'Dedicated Team of Experts',
      description:
        'Benefit from a dedicated team of SEO experts, content strategists, and web developers committed to your success. Our specialists bring collective expertise and a personalized approach to every aspect of your campaign, ensuring your Belfast business receives the highest level of service and support.',
    },
    {
      icon: 'BarChart',
      title: 'Holistic Approach',
      description:
        'We adopt a holistic approach to your online growth, seamlessly integrating SEO with other digital marketing channels to create a comprehensive and synergistic strategy. This ensures maximum impact and sustained growth, positioning your Belfast business for long-term success in the digital landscape.',
    }
  ],
  awards: {
    clutch: {
      headline: 'Top Belfast SEO Agency - NI Business Awards 2024',
      text: 'Recognized for delivering exceptional SEO results for businesses in Belfast, particularly in the technology, tourism, and creative sectors in Northern Ireland.'
    },
    upcity: {
      headline: 'Belfast SEO Excellence - UK Digital Awards 2024',
      text: 'Awarded for providing leading SEO services and consistently helping Belfast businesses achieve their online growth targets and enhance their digital presence within Northern Ireland.'
    }
  },
  location: {
    officeImageUrl: GENERIC_OFFICE_LOCATION_IMAGE_SRC,
    streetAddress: '5th Blvd, Titanic Quarter',
    addressLocality: 'Belfast',
    addressRegion: 'Northern Ireland',
    postalCode: 'BT3 9EP',
    addressCountry: 'UK',
    phone: CONTACT_DETAILS.phone,
    email: CONTACT_DETAILS.email,
    hasMap: 'https://goo.gl/maps/c3D4e5F6g7',
    geo: {
      latitude: '54.597300',
      longitude: '-5.930100',
    },
  },
  bottomFormTitle: 'Request Your SEO Strategy Session',
  roadmapSteps: [
    {
      icon: "Search",
      title: "Step 1: Deep Market Analysis",
      description: "We start by analyzing the local Belfast market, identifying your top competitors and uncovering local search trends to build a data-driven foundation for your success.",
    },
    {
      icon: "CheckCircle",
      title: "Step 2: Hyper-Local Keyword Targeting",
      description: "Our experts find the high-intent keywords your local Belfast customers are using to search for your services, ensuring we attract the most qualified traffic directly to your business.",
    },
    {
      icon: "BarChart2",
      title: "Step 3: Google Business Profile Optimization",
      description: "We meticulously optimize your Google Business Profile to dominate the local map pack in Belfast, driving direct calls and website visits from nearby customers.",
    },
    {
      icon: "Edit",
      title: "Step 4: On-Page & Technical SEO",
      description: "We enhance your website's structure, content, and technical health to ensure it's perfectly optimized for both search engines and user experience, specifically for the Belfast audience.",
    },
    {
      icon: "Link2",
      title: "Step 5: Local Link Building & Citations",
      description: "We build your authority by acquiring high-quality backlinks from reputable local Belfast businesses and online directories, signaling trust to Google and boosting your local relevance.",
    },
    {
      icon: "TrendingUp",
      title: "Step 6: Transparent Reporting & Strategy Refinement",
      description: "You get clear, monthly reports showing your progress in the Belfast market. We continually refine our strategy based on the data to maximize your ROI and keep you ahead of the competition.",
    },
  ],
  faqSectionHeadline: 'SEO FAQs for Belfast Businesses',
  faqData: [
    {
      question: 'What’s the cost of SEO services in Belfast?',
      answer: 'Depending on goals and competition, SEO campaigns in Belfast typically range between £750 to £2,500 per month. Custom plans are available for startups and enterprise needs.'
    },
    {
      question: 'Which industries does TRAC specialize in for Belfast SEO?',
      answer: 'We support hospitality, tech, education, tourism, and service-based sectors in Belfast. Each campaign is tailored to fit your market and audience.'
    },
    {
      question: 'How long until I see SEO results in Belfast?',
      answer: 'Most Belfast clients notice growth within 3–4 months, with momentum compounding through strategic content and technical improvements.'
    },
    {
      question: 'Do you manage Google Business Profiles for Belfast clients?',
      answer: 'Yes, from optimization to review strategy—we manage GMB to ensure maximum exposure in local Belfast searches.'
    },
    {
      question: 'Why choose TRAC over other Belfast SEO agencies?',
      answer: 'TRAC combines ethical SEO, deep local knowledge, and transparent reporting. We focus on ROI, not just rankings—delivering campaigns built for measurable growth.'
    },
    {
      question: 'How can I find the best local SEO services near me in Belfast?',
      answer: 'To find the best local SEO services in Belfast, look for agencies with a proven track record of success in your specific industry, strong client testimonials, and a deep understanding of the Belfast market. TRAC specializes in hyper-local SEO strategies that connect your business with customers actively searching for your services nearby, ensuring you dominate local search results and drive tangible growth.',
    }
  ]
};
