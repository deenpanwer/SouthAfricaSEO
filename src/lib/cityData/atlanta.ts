import type { CityPageData } from '@/types';
import { Search, Settings, Users, Mail, TrendingUp, Lightbulb, ShieldCheck, BarChart2, LineChart, MapPinned, Newspaper, Code, FileText, Link as LinkIcon, BarChart, CheckCircle } from 'lucide-react';
import { CONTACT_DETAILS } from '@/lib/constants';

const GENERIC_CITY_HERO_IMAGE_SRC = '/trac-seo.jpg';
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
  teamSectionHeadline: 'Meet Our Founder & CEO, Kaayf',
  teamSectionDescription: 'The visionary leader behind TRAC, dedicated to your success in Atlanta.',
  founderBio: 'Kaayf, our Founder & CEO, brings over 15 years of digital marketing expertise to Atlanta businesses. He is passionate about driving measurable ROI and building sustainable growth for clients in the local market. His leadership ensures TRAC delivers tailored SEO strategies that resonate with Atlanta\'s unique business landscape.',
  heroData: {
    pageTitle: 'Atlanta SEO Experts | TRAC - Drive Growth in Atlanta, GA',
    metaDescription: 'TRAC offers expert SEO services in Atlanta tailored to contractors, healthcare providers, salons, and law firms. Discover SEO strategies that drive real growth.',
    heroTitle: 'Atlanta SEO Services: Drive Growth & Dominate Local Search with TRAC',
    heroSubtitle: 'Unlock Atlanta\'s Market with Powerful, Data-Driven SEO Strategies',
    heroDescription: `Is your Atlanta business struggling to stand out online? In a competitive market like Atlanta, simply existing isn't enough. You need a powerful SEO strategy that connects you directly with customers ready to buy. TRAC offers expert Atlanta SEO services designed to transform your online presence, drive qualified leads, and deliver measurable ROI.

We understand the unique challenges and opportunities within Atlanta's diverse neighborhoods and industries. Our approach goes beyond generic keywords, focusing on high-intent, localized search terms that capture genuine buying intent. Imagine your business appearing at the top of search results for phrases like "best SEO company in Atlanta," "hire SEO expert Atlanta," or "Atlanta digital marketing agency for leads." That's the power of TRAC's tailored SEO solutions.

Our comprehensive Atlanta SEO campaigns begin with a deep dive into your current online performance and competitive landscape. We optimize your technical SEO, ensuring your website is fast, mobile-friendly, and easily discoverable by search engines. Then, our content specialists craft compelling, authoritative content that not only ranks for critical keywords but also resonates with your target audience, establishing your business as a leader in the Atlanta market.

Whether you're a growing startup in Midtown, an established law firm near Five Points, a thriving salon in Buckhead, or a contractor serving Sandy Springs, TRAC has a proven track record of helping Atlanta businesses achieve their growth goals. We leverage advanced keyword research, local SEO strategies, and transparent reporting to ensure your investment translates into tangible results.

Don't let your competitors capture the Atlanta market. Partner with TRAC, the trusted Atlanta SEO agency committed to driving your success. We specialize in helping service-based businesses like yours increase online visibility, attract more customers, and ultimately, dominate local search results. Ready to grow your Atlanta business? Contact us today for a free SEO analysis.`,
    heroImage: {
      src: GENERIC_CITY_HERO_IMAGE_SRC,
      alt: 'SEO Services in Atlanta, GA',
      dataAiHint: 'Atlanta city business',
    },
    heroVideoUrl: 'https://www.youtube.com/embed/JBPmDzL-Xek',
    formTitle: 'Free SEO Analysis!',
  },
  resultsHeadline: 'Proven SEO Results for Atlanta Businesses',
  readyToGrowHeadline: 'Ready to Transform Your Atlanta Business with SEO?',
  servicesSectionHeadline: 'Tailored SEO Services for Atlanta',
  servicesSectionSubheadline: 'Our SEO experts craft data-driven strategies to enhance your online visibility and connect with customers across Atlanta, helping you grow your market share.',
  services: [
    {
      icon: Search,
      title: 'Local Search & GMB Optimization',
      description: 'Dominate local search results in Atlanta with our expert Google Business Profile optimization. We enhance your visibility on Google Maps and local searches through strategic GMB management, structured citations, and geo-targeted content, ensuring your business attracts nearby customers actively seeking your services.',
    },
    {
      icon: Settings,
      title: 'Website Technical Optimization',
      description: 'Ensure your website is a high-performing asset with our technical SEO optimization. We meticulously improve site speed, mobile responsiveness, and crawlability, addressing critical performance metrics that enhance user experience and search engine ranking, ultimately driving more qualified traffic to your Atlanta business.',
    },
    {
      icon: Mail,
      title: 'Content Strategy & Creation',
      description: 'Attract and engage your target audience with our tailored content strategy and creation services. We develop high-quality, SEO-optimized content—including blog posts, service pages, and articles—that resonates with Atlanta’s market, addresses local pain points, and positions your business as an authoritative voice, converting readers into loyal customers.',
    },
    {
      icon: BarChart2,
      title: 'Analytics & Reporting for SEO',
      description: 'Gain clear insights into your SEO performance with our comprehensive analytics and reporting. We provide transparent, data-driven reports on key metrics like leads generated, keyword rankings, website traffic, and conversion rates, empowering you to understand the tangible ROI of your SEO investment and make informed business decisions for growth in Atlanta.',
    },
    {
      icon: BarChart2,
      title: 'PPC',
      url: '/services/ppc',
      description: 'Maximize your immediate online impact in Atlanta with our expertly managed Pay-Per-Click (PPC) campaigns. We specialize in creating high-performing ads across major platforms like Google Ads, delivering highly targeted traffic directly to your website. Our continuous optimization of bids, keywords, and ad copy ensures your campaigns are efficient, effective, and drive maximum return on ad spend for your Atlanta business.',
    },
    {
      icon: LineChart,
      title: 'Web Design and Development',
      url: '/services/web-design-and-development',
      description: 'Transform your online presence with our expert web design and development services. We create beautiful, responsive, and high-performing websites meticulously optimized for exceptional user experience and maximum conversions. Our focus is on delivering visually appealing and functionally robust platforms that reflect your brand identity and drive business growth through intuitive navigation, fast loading times, and seamless interactions for your Atlanta customers.',
    },
    {
      icon: Users,
      title: 'Social Media Marketing',
      url: '/services/social-media-marketing',
      description: 'Forge meaningful connections with your Atlanta audience across various social media platforms with our expert marketing strategies. We design campaigns to build a strong brand presence, foster community engagement, and drive measurable results. Our team manages your social channels, create compelling content, and run targeted campaigns to expand your reach and cultivate a loyal customer base within the Atlanta community.',
    },
    {
      icon: Mail,
      title: 'Email Marketing',
      url: '/services/email-marketing',
      description: 'Nurture leads and drive conversions with our highly effective email marketing campaigns. We develop and manage engaging newsletters and automated personalized drip campaigns designed to keep your audience informed, interested, and ready to take action. Our strategies focus on delivering the right message to the right person at the right time, building customer loyalty and driving business growth for your Atlanta enterprise.',
    },
    {
        icon: ShieldCheck,
        title: 'Reputation Management',
        url: '/services/reputation-management',
        description: 'Proactively build and maintain a stellar online reputation in Atlanta with our comprehensive reputation management services. We ensure your customers consistently see the best of your brand across all digital channels, addressing feedback, highlighting positive reviews, and implementing proactive measures to safeguard your brand’s image. Foster trust and credibility among your target audience and enhance your business standing in the Atlanta community.',
    },
    {
        icon: TrendingUp,
        title: 'eCommerce Optimization',
        url: '/services/ecommerce-optimization',
        description: 'Maximize sales and profitability for your e-commerce store with our specialized optimization services. Our comprehensive approach enhances product pages, streamlines the checkout process, and improves site speed and mobile responsiveness. We focus on creating a seamless shopping experience that encourages conversions and drives significant revenue growth for your online business, ensuring your Atlanta-based e-commerce venture thrives.',
    },
    {
        icon: MapPinned,
        title: 'Amazon Marketing',
        url: '/services/amazon-marketing',
        description: 'Empower your success on the world\'s largest online marketplace with our expert Amazon marketing services. Our team develops and executes tailored strategies to boost your product visibility, drive sales, and maximize your return on investment. From optimizing product listings to managing Amazon PPC campaigns, we help your Atlanta-based business dominate the competitive Amazon landscape and reach millions of potential customers.',
    },
    {
      icon: Code,
      title: 'Technical SEO',
      url: '',
      description: 'Optimize your website\'s infrastructure for seamless crawling and indexing by search engines with our technical SEO services. We address critical elements like site speed, mobile-friendliness, structured data, and site architecture. A robust technical foundation is crucial for search engine visibility, allowing your content to be discovered and ranked effectively, ultimately improving your organic performance and ensuring your Atlanta business is easily found online.',
    },
    {
      icon: FileText,
      title: 'On-Page SEO',
      url: '',
      description: 'Optimize individual web pages to rank higher and earn more relevant traffic from search engines with our on-page SEO services. Our process includes meticulous keyword research, compelling content optimization, strategic internal linking, and meta tag enhancements. By aligning your page content with user intent and search engine best practices, we ensure your pages are highly visible and attractive to both users and algorithms, driving targeted traffic to your Atlanta business.',
    },
    {
      icon: LinkIcon,
      title: 'Off-Page SEO / Link Building',
      url: '',
      description: 'Significantly improve your website\'s authority and relevance through external signals with our off-page SEO and link building strategies. We focus on acquiring high-quality, natural backlinks from reputable sources, enhancing your domain authority and search engine trust. This crucial aspect of SEO helps your website rank higher for competitive keywords and drives more referral traffic, solidifying your online presence in Atlanta.',
    },
    {
      icon: Settings,
      title: 'Schema Markup',
      url: '',
      description: 'Enhance search engine understanding of your content and achieve rich results in SERPs with our Schema Markup implementation. We meticulously apply relevant schema types to your website, providing search engines with explicit clues about your page’s meaning. This can lead to enhanced listings like star ratings, product information, or event details, significantly boosting click-through rates and improving your visibility in Atlanta search results.',
    },
    {
      icon: Search,
      title: 'Local SEO',
      url: '',
      description: 'Optimize your online presence to attract more business from local searches in Atlanta with our dedicated local SEO services. We focus on Google Business Profile optimization, local citation building, and geo-targeted content creation. This ensures your business appears prominently in local map packs and search results, connecting you directly with nearby customers actively seeking your products or services in Atlanta.',
    },
    {
      icon: BarChart,
      title: 'SEO Audits',
      url: '',
      description: 'Gain a clear understanding of your website\'s current performance and identify critical areas for improvement with our comprehensive SEO audits. We meticulously examine technical aspects, on-page elements, off-page factors, and content quality. Our audit delivers actionable recommendations and a clear roadmap to address deficiencies, capitalize on opportunities, and significantly enhance your overall search engine visibility and organic traffic for your Atlanta business.',
    },
    {
      icon: CheckCircle,
      title: 'Content Marketing for SEO',
      url: '',
      description: 'Attract and retain your target audience in Atlanta with our content marketing for SEO services. We focus on creating and distributing valuable, relevant, and consistent content. We develop content strategies aligned with your SEO goals, ensuring every piece of content is optimized for target keywords and user intent. This approach not only improves rankings but also establishes your brand as a thought leader in the Atlanta market.',
    },
  ],
  roadmapSteps: [
    {
      icon: "Search",
      title: "Step 1: Deep Market Analysis",
      description: "We start by analyzing the Atlanta market, identifying your top competitors and uncovering local search trends to build a data-driven foundation.",
    },
    {
      icon: "CheckCircle",
      title: "Step 2: Hyper-Local Keyword Targeting",
      description: "Our experts find the high-intent keywords your Atlanta customers are using to search for your services, ensuring we attract the most qualified traffic.",
    },
    {
      icon: "BarChart2",
      title: "Step 3: Google Business Profile Optimization",
      description: "We meticulously optimize your Google Business Profile to dominate the Atlanta local map pack, driving direct calls and website visits.",
    },
    {
      icon: "Edit",
      title: "Step 4: On-Page & Technical SEO",
      description: "We enhance your website's structure, content, and technical health to ensure it's perfectly optimized for both search engines and user experience.",
    },
    {
      icon: "Link2",
      title: "Step 5: Local Link Building & Citations",
      description: "We build your authority by acquiring high-quality backlinks from reputable Atlanta businesses and online directories, signaling trust to Google.",
    },
    {
      icon: "TrendingUp",
      title: "Step 6: Transparent Reporting & Strategy Refinement",
      description: "You get clear, monthly reports showing your progress. We continually refine our strategy based on the data to maximize your ROI and keep you ahead.",
    },
  ],
  whyChooseSectionHeadline: 'Why TRAC for Atlanta SEO?',
  whyChooseIntro: 'Choosing the right SEO partner in Atlanta is crucial for your business\'s success. TRAC stands apart as a trusted agency, combining unparalleled local market expertise with a proven track record of delivering tangible, measurable results for businesses like yours.',
  whyChooseParagraph1: 'Atlanta’s diverse economic landscape demands a nuanced SEO approach. From the bustling tech hubs of Midtown to the vibrant retail districts of Buckhead and the growing communities in Sandy Springs, each neighborhood and industry presents unique opportunities. Our team possesses an intimate understanding of Atlanta’s digital ecosystem, allowing us to craft hyper-localized SEO strategies that precisely target your ideal customers, wherever they are searching.',
  whyChooseParagraph2: 'We don\'t just promise results; we deliver them through a data-driven, transparent, and ethical process. Our methodology is rooted in deep analysis of Atlanta-specific search trends, competitor landscapes, and your unique business objectives. We provide clear, consistent reporting, proactive communication, and a dedicated team committed to your long-term growth. With TRAC, you gain a strategic partner focused on maximizing your online visibility, driving qualified leads, and ensuring a significant return on your SEO investment.',
  whyChoosePoints: [
    {
      icon: 'TrendingUp',
      title: 'SEO Growth & ROI',
      description: 'Our strategies are meticulously designed to go beyond mere impressions, focusing on generating high-quality leads, increasing bookings, and driving substantial revenue for your Atlanta business through precise, high-intent keyword targeting and conversion optimization.',
    },
    {
      icon: 'Lightbulb',
      title: 'Market SEO Expertise',
      description: 'Leverage our profound understanding of Atlanta’s dynamic digital patterns. From emerging tech startups in the Atlanta Tech Village to established healthcare providers and thriving salons, we utilize deep market intelligence to shape SEO campaigns that resonate specifically with your local audience and competitive landscape.',
    },
    {
      icon: 'ShieldCheck',
      title: 'Reliable & Transparent SEO',
      description: 'Experience complete peace of mind with our fully transparent SEO services. We provide clear, accessible dashboards, regular performance reports, and open communication, ensuring you always know the exact status of your campaign and the tangible results we are achieving for your Atlanta business.',
    },
    {
        icon: 'BarChart2',
        title: 'Data-Driven Strategies',
        description: 'Our campaigns are built on a foundation of rigorous data analysis and continuous optimization. We provide transparent, detailed reports that clearly demonstrate the return on your SEO investment, ensuring every decision is backed by measurable insights for your Atlanta business.',
    },
    {
        icon: 'Users',
        title: 'Dedicated Team of Experts',
        description: 'Benefit from a dedicated team of SEO experts, content strategists, and web developers committed to your success. Our specialists bring collective expertise and a personalized approach to every aspect of your campaign, ensuring your Atlanta business receives the highest level of service and support.',
    },
    {
        icon: 'LineChart',
        title: 'Holistic Approach',
        description: 'We adopt a holistic approach to your online growth, seamlessly integrating SEO with other digital marketing channels to create a comprehensive and synergistic strategy. This ensures maximum impact and sustained growth, positioning your Atlanta business for long-term success in the digital landscape.',
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
    hasMap: 'https://goo.gl/maps/fGhIjKlMnO',
    geo: {
      latitude: '33.748800',
      longitude: '-84.387700',
    },
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
    {
      question: 'How do I find the best SEO agency in Atlanta?',
      answer: 'TRAC is consistently recognized as a top SEO agency in Atlanta, known for delivering measurable results and exceptional client satisfaction. Our data-driven strategies are designed to elevate your business\'s online presence and drive significant growth in the competitive Atlanta market.',
    },
    {
      question: 'What are the benefits of local SEO for businesses in Atlanta?',
      answer: 'Local SEO for your Atlanta business can significantly increase your visibility in local search results, drive more foot traffic to your physical location, and attract highly qualified leads from customers in your immediate area. TRAC specializes in hyper-local strategies that connect you directly with your target audience in Atlanta.',
    },
    {
      question: 'How can my business improve its Google ranking in Atlanta?',
      answer: 'To improve your Google ranking in Atlanta, focus on optimizing your Google Business Profile, creating localized content, building high-quality local backlinks, and ensuring your website is technically sound. TRAC offers comprehensive SEO services that cover all these aspects, helping your Atlanta business climb to the top of search results.',
    },
  ],
};
