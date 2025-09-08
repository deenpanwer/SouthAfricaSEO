import type { CityPageData } from '@/types';
import { Search, Settings, Briefcase, Mail, BarChart2, TrendingUp, Lightbulb, ShieldCheck, Globe2, MonitorSmartphone, PencilRuler } from 'lucide-react';
import { CONTACT_DETAILS } from '@/lib/constants';

const GENERIC_CITY_HERO_IMAGE_SRC = '/trac-seo.jpg';
const GENERIC_OFFICE_LOCATION_IMAGE_SRC = 'https://cdn-icggj.nitrocdn.com/AphBmykuaGyxZijWArNhxcCiPzVdYZGT/assets/images/optimized/rev-d6d7292/thriveagency.com/files/Cleveland-Thrive-office-location.jpg';

export const corkData: CityPageData = {
  slug: 'cork',
  cityName: 'Cork',
  metaKeywords: [
    'Cork SEO agency',
    'SEO services Cork',
    'Munster SEO experts',
    'digital marketing Cork',
    'Cork local SEO',
    'TRAC Ireland',
    'Google SEO Cork',
    'SEO for Irish SMEs',
    'Cork multilingual SEO',
    'SEO for Cork restaurants',
    'SEO consultants in Cork',
  ],
  teamSectionHeadline: 'Meet Your Founder & CEO, Kaayf',
  teamSectionDescription: 'The visionary leader behind TRAC, dedicated to your success in Cork.',
  founderBio: 'Kaayf, our Founder & CEO, brings over 15 years of digital marketing expertise to Cork businesses. He is passionate about driving measurable ROI and building sustainable growth for clients in the local market. His leadership ensures TRAC delivers tailored SEO strategies that resonate with Cork\'s unique business landscape.',
  heroData: {
    pageTitle: 'Cork SEO Services | TRAC - SEO Experts Cork, Ireland',
    metaDescription: 'TRAC offers premier SEO services for businesses in Cork. Enhance your online presence, attract local customers, and grow your business in Ireland\'s southern capital. Contact our Cork SEO team today!',
    heroTitle: 'Cork SEO Agency: Boosting Your Business in the Rebel County',
    heroSubtitle: 'Navigate Cork\'s Digital Landscape with TRAC\'s Tailored SEO Solutions',
    heroDescription: `In the vibrant and historic city of Cork, standing out online requires a nuanced and powerful SEO strategy. Is your Cork business struggling to capture the attention of local customers actively searching for your services? In a market as rich in culture and innovation as Ireland's "Rebel County," simply existing online isn't enough. You need a hyper-local SEO strategy that connects you directly with customers ready to engage and convert. TRAC offers expert Cork SEO services designed to transform your online visibility, drive qualified leads, and deliver measurable return on investment.

We understand the unique rhythm of Cork, from the bustling English Market to the historic Shandon Bells and the thriving communities of Douglas. Our approach goes beyond generic keywords, focusing on high-intent, localized search terms that capture genuine buying intent. Imagine your business appearing at the top of search results for phrases like "best SEO company in Cork," "hire SEO expert Cork," or "Cork digital marketing agency for leads." That's the power of TRAC's tailored SEO solutions.

Our comprehensive Cork SEO campaigns begin with a deep dive into your current online performance and the competitive landscape specific to your industry within Cork. We meticulously optimize your technical SEO, ensuring your website is fast, mobile-friendly, and easily discoverable by search engines. Then, our content specialists craft compelling, authoritative content that not only ranks for critical keywords but also resonates deeply with your target audience, establishing your business as a leader in the Cork market.

Whether you're a burgeoning startup in the tech sector, an established professional service firm in the city center, a thriving restaurant in Kinsale, or a service provider in Ballincollig, TRAC has a proven track record of helping Cork businesses achieve their growth goals. We leverage advanced keyword research, sophisticated local SEO strategies, and transparent reporting to ensure your investment translates into tangible results. Our commitment to ethical, white-hat SEO practices means your online growth is sustainable and built for long-term success.

Don't let your competitors dominate the Cork market. Partner with TRAC, the trusted Cork SEO agency committed to driving your success. We specialize in helping service-based businesses like yours increase online visibility, attract more customers, and ultimately, dominate local search results. Ready to grow your Cork business and secure your position at the forefront of local search? Contact us today for a free SEO analysis and discover how our expertise can elevate your brand.`,
    heroImage: { src: GENERIC_CITY_HERO_IMAGE_SRC, alt: 'SEO Services in Cork, Ireland', dataAiHint: 'Cork city business' },
    heroVideoUrl: 'https://www.youtube.com/embed/JBPmDzL-Xek',
    formTitle: 'Get Your FREE SEO Analysis!',
  },
  resultsHeadline: 'Driving Real SEO Success for Cork Businesses',
  readyToGrowHeadline: 'Ready to Grow Your Cork Business with Strategic SEO?',
  servicesSectionHeadline: 'Targeted SEO Services for Cork & Munster',
  servicesSectionSubheadline: 'Our SEO strategies are designed to put your business in front of customers in Ireland\'s second-largest city and the wider Munster region, using local insights and SEO best practices.',
  services: [
    {
      icon: Search,
      title: 'Local SEO & Regional Visibility',
      url: '/services/local-seo',
      description: 'Dominate local searches in Cork with our specialized Local SEO & Regional Visibility strategies. We meticulously refine your Google Business Profile and local citations to rank higher in Cork City and Munster local search results. By targeting Cork-specific keywords like "SEO services Cork" or "best restaurants English Market," we attract geographically relevant customers, significantly boosting your local market presence and driving qualified leads.',
    },
    {
      icon: Settings,
      title: 'Technical Website Optimization',
      url: '/services/technical-seo',
      description: 'Ensure your Cork website is technically flawless and performs optimally with our comprehensive Technical Website Optimization services. We meticulously perform comprehensive audits to find and fix technical SEO issues, ensuring your site is fast, mobile-friendly, and easily discoverable for better Cork rankings. This improves user experience and search engine performance, ultimately driving more organic traffic and conversions for your Cork-based business.',
    },
    {
      icon: Mail,
      title: 'Content Marketing for Local SEO',
      url: '/services/content-marketing',
      description: 'Establish your brand as a local authority in Cork with our specialized Content Marketing for Local SEO services. We create engaging, high-quality content that connects deeply with the Cork audience and builds significant SEO authority. By focusing on topics relevant to your local customers and their interests, we establish your expertise and drive targeted organic traffic, converting visitors into loyal clients in the Cork market.',
    },
    {
      icon: Briefcase,
      title: 'SEO for Key Cork Industries',
      url: '/services/industry-seo',
      description: 'Receive custom SEO strategies for Cork’s key industries, including pharmaceuticals, technology, and its renowned food sector. Our Industry-Tailored SEO aligns precisely with specific search behaviors and conversion goals within your niche. We understand the unique needs and opportunities within these local markets, crafting bespoke campaigns that drive targeted traffic, enhance online visibility, and deliver measurable results for your Cork business.',
    },
    {
      icon: Globe2,
      title: 'Multilingual SEO for International Appeal',
      url: '/services/multilingual-seo',
      description: 'Expand your reach to Cork\'s growing international population with our Multilingual SEO services. We optimize pages in multiple languages and implement global schema targeting European searchers and tourists alike. This ensures your business connects with a broader audience, enhancing your global appeal and driving diverse traffic to your Cork-based enterprise, maximizing your international market penetration.',
    },
    {
      icon: MonitorSmartphone,
      title: 'Mobile SEO & UX Optimization',
      url: '/services/mobile-seo',
      description: 'Ensure your Cork website performs flawlessly on smartphones and tablets with our Mobile SEO & UX Optimization services. We focus on capturing on-the-go traffic and ranking high in mobile search results. Our strategies enhance user experience across all devices, leading to improved engagement, lower bounce rates, and increased conversions for your Cork business, ensuring you reach customers wherever they are.',
    },
    {
      icon: PencilRuler,
      title: 'SEO Design & CRO Integration',
      url: '/services/seo-design-cro',
      description: 'Maximize engagement and conversions on every Cork landing page with our integrated SEO Design & CRO Integration services. We seamlessly combine SEO best practices with user-centric design and Conversion Rate Optimization (CRO) strategies. This holistic approach ensures your website not only ranks highly in search results but also effectively guides visitors through their journey, leading to higher engagement and increased conversions for your Cork business.',
    },
  ],
  whyChooseSectionHeadline: 'TRAC: Your Cork SEO Partner for Growth',
  whyChooseIntro: 'TRAC delivers customized, results-driven SEO solutions for businesses in Cork, Ireland. We understand the local market and how to help your business stand out in the Rebel County, driving lasting growth through effective SEO.',
  whyChooseParagraph1: 'Choosing the right SEO partner in Cork is paramount for your business\'s success in this competitive and rapidly evolving market. TRAC stands apart as a trusted agency, combining unparalleled local market expertise with a proven track record of delivering tangible, measurable results for businesses like yours. We possess an intimate understanding of Cork’s diverse economic landscape, from its strong multinational presence in tech and pharma to its vibrant SME sector and renowned food culture. This deep local insight allows us to craft hyper-localized SEO strategies that precisely target your ideal customers, wherever they are searching within Cork City and County. We don\'t just understand the algorithms; we understand the unique nuances of the Cork consumer and business environment, ensuring your message resonates with the right audience at the right time.',
  whyChooseParagraph2: 'We don\'t just promise results; we deliver them through a data-driven, transparent, and ethical process that prioritizes your return on investment. Our methodology is rooted in rigorous analysis of Cork-specific search trends, a thorough examination of your local competitive landscape, and a deep understanding of your unique business objectives. We provide clear, consistent reporting, proactive communication, and a dedicated team committed to your long-term growth. With TRAC, you gain a strategic partner focused on maximizing your online visibility, driving qualified leads, and ensuring a significant return on your SEO investment. Our commitment to white-hat SEO practices means your online growth is sustainable, resilient to algorithm changes, and built for enduring success in the Cork market. We are not just a vendor; we are an extension of your team, invested in your success.',
  whyChoosePoints: [
    { icon: 'TrendingUp', title: 'SEO Growth & ROI', description: 'Drive more organic traffic and generate high-quality leads in the competitive Cork market. We focus on SEO strategies that convert visitors into loyal customers for your Irish business.' },
    { icon: 'Lightbulb', title: 'Local & Regional Expertise', description: 'Benefit from SEO strategies tailored specifically to the Cork market and the broader Munster region, understanding its unique demographic, economic factors, and cultural nuances.' },
    { icon: 'ShieldCheck', title: 'Ethical SEO Practices', description: 'Achieve lasting, long-term results through white-hat SEO techniques that build trust with search engines and Cork users. We prioritize quality, integrity, and client success in Ireland.' },
    {
      icon: 'Users',
      title: 'Dedicated Team of Experts',
      description:
        'Benefit from a dedicated team of SEO experts, content strategists, and web developers committed to your success. Our specialists bring collective expertise and a personalized approach to every aspect of your campaign, ensuring your Cork business receives the highest level of service and support.',
    },
    {
      icon: 'BarChart',
      title: 'Holistic Approach',
      description:
        'We adopt a holistic approach to your online growth, seamlessly integrating SEO with other digital marketing channels to create a comprehensive and synergistic strategy. This ensures maximum impact and sustained growth, positioning your Cork business for long-term success in the digital landscape.',
    },
    {
      icon: 'LineChart',
      title: 'Transparent Reporting & ROI',
      description:
        'Receive clear, actionable reports that demonstrate the tangible return on your SEO investment. We focus on metrics that matter, providing full transparency into your campaign’s performance and progress in the Cork market.',
    },
  ],
  awards: {
    clutch: { headline: 'Top Cork SEO Agency - Munster Region Awards 2024', text: 'Recognized for delivering impactful SEO results and exceptional service to businesses across Cork and the Munster province. Our clients value our local knowledge.' },
    upcity: { headline: 'Cork SEO Excellence - National Irish Awards 2024', text: 'Awarded for outstanding SEO services and client success stories in the Cork area, helping businesses thrive in a competitive Irish digital landscape.' },
  },
  location: {
    officeImageUrl: GENERIC_OFFICE_LOCATION_IMAGE_SRC,
    streetAddress: 'Penrose Dock, Penrose Wharf',
    addressLocality: 'Cork City',
    addressRegion: 'CO',
    postalCode: 'T23 DT68',
    addressCountry: 'IE',
    phone: CONTACT_DETAILS.phone,
    email: CONTACT_DETAILS.email,
    hasMap: 'https://goo.gl/maps/g7H8i9J0k1',
    geo: {
      latitude: '51.898500',
      longitude: '-8.475700',
    },
  },
  bottomFormTitle: 'Request Your SEO Strategy Session',
  roadmapSteps: [
    {
      icon: "Search",
      title: "Step 1: Deep Market Analysis",
      description: "We start by analyzing the local Cork market, identifying your top competitors and uncovering local search trends to build a data-driven foundation for your success.",
    },
    {
      icon: "CheckCircle",
      title: "Step 2: Hyper-Local Keyword Targeting",
      description: "Our experts find the high-intent keywords your local Cork customers are using to search for your services, ensuring we attract the most qualified traffic directly to your business.",
    },
    {
      icon: "BarChart2",
      title: "Step 3: Google Business Profile Optimization",
      description: "We meticulously optimize your Google Business Profile to dominate the local map pack in Cork, driving direct calls and website visits from nearby customers.",
    },
    {
      icon: "Edit",
      title: "Step 4: On-Page & Technical SEO",
      description: "We enhance your website's structure, content, and technical health to ensure it's perfectly optimized for both search engines and user experience, specifically for the Cork audience.",
    },
    {
      icon: "Link2",
      title: "Step 5: Local Link Building & Citations",
      description: "We build your authority by acquiring high-quality backlinks from reputable local Cork businesses and online directories, signaling trust to Google and boosting your local relevance.",
    },
    {
      icon: "TrendingUp",
      title: "Step 6: Transparent Reporting & Strategy Refinement",
      description: "You get clear, monthly reports showing your progress in the Cork market. We continually refine our strategy based on the data to maximize your ROI and keep you ahead of the competition.",
    },
  ],
  faqSectionHeadline: 'Frequently Asked Questions About Our Cork SEO Services',
  faqData: [
    { question: 'Do you offer SEO services for small businesses in Cork?', answer: 'Absolutely. We provide tailored SEO strategies for Cork SMEs, including trades, local shops, cafes, and service providers who want to improve their local online visibility.' },
    { question: 'Can you help us rank in both English and Irish-language search results?', answer: 'Yes, we offer multilingual SEO support, including Irish-language optimization for businesses that want to connect with the local population and cultural search trends.' },
    { question: 'What industries in Cork do you specialize in?', answer: 'We work extensively with food & beverage, pharma, SaaS, retail, fitness, and professional service firms in Cork and the broader Munster region.' },
    { question: 'Do you guarantee SEO results in Cork?', answer: 'While we never promise rankings (which would be unethical), we guarantee transparency, consistent effort, and performance-based tracking with every Cork SEO campaign.' },
    { question: 'Can you create SEO campaigns targeting specific suburbs like Douglas or Blackrock?', answer: 'Yes, we specialize in hyperlocal campaigns targeting Cork suburbs such as Bishopstown, Douglas, Wilton, and more. These campaigns include keyword targeting, location landing pages, and Google Map Pack optimization.' },
    {
      question: 'How can I find the best local SEO services near me in Cork?',
      answer: 'To find the best local SEO services in Cork, look for agencies with a proven track record of success in your specific industry, strong client testimonials, and a deep understanding of the Cork market. TRAC specializes in hyper-local SEO strategies that connect your business with customers actively searching for your services nearby, ensuring you dominate local search results and drive tangible growth.',
    }
  ]
};