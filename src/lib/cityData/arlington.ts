import type { CityPageData } from '@/types';
import { Search, Settings, Users, Mail, TrendingUp, Lightbulb, ShieldCheck, BarChart2, LineChart, MapPinned, Newspaper, Code, FileText, Link as LinkIcon, BarChart, CheckCircle } from 'lucide-react';
import { CONTACT_DETAILS } from '@/lib/constants';

const GENERIC_CITY_HERO_IMAGE_SRC = '/trac-seo.jpg';
const GENERIC_OFFICE_LOCATION_IMAGE_SRC = 'https://cdn-icggj.nitrocdn.com/AphBmykuaGyxZijWArNhxcCiPzVdYZGT/assets/images/optimized/rev-d6d7292/thriveagency.com/files/Arlington-office-location.png';

export const arlingtonData: CityPageData = {
  slug: 'arlington',
  cityName: 'Arlington',
  metaKeywords: [
    'SEO agency for contractors in Arlington TX',
    'Arlington TX landscaping SEO company',
    'digital marketing for salons in Arlington Highlands',
    'local SEO specialists for law firms in Arlington',
    'multi-location SEO for Arlington healthcare providers',
    'affordable SEO services Arlington small business',
    'on-page optimization Arlington TX businesses',
    'best Arlington SEO strategy 2025',
    'content marketing for local Arlington shops',
    'technical SEO audits Arlington Texas',
    'google maps ranking boost Arlington area',
    'custom SEO plan for Arlington service companies',
  ],
  teamSectionHeadline: 'Meet Your Founder & CEO, Kaayf',
  teamSectionDescription: 'The visionary leader behind TRAC, dedicated to your success in Arlington.',
  founderBio: 'Kaayf, our Founder & CEO, brings over 15 years of digital marketing expertise to Arlington businesses. He is passionate about driving measurable ROI and building sustainable growth for clients in the local market. His leadership ensures TRAC delivers tailored SEO strategies that resonate with Arlington\'s unique business landscape.',
  roadmapSteps: [
    {
      icon: "Search",
      title: "Step 1: Deep Market Analysis",
      description: "We start by analyzing the local market, identifying your top competitors and uncovering local search trends to build a data-driven foundation.",
    },
    {
      icon: "CheckCircle",
      title: "Step 2: Hyper-Local Keyword Targeting",
      description: "Our experts find the high-intent keywords your local customers are using to search for your services, ensuring we attract the most qualified traffic.",
    },
    {
      icon: "BarChart2",
      title: "Step 3: Google Business Profile Optimization",
      description: "We meticulously optimize your Google Business Profile to dominate the local map pack, driving direct calls and website visits.",
    },
    {
      icon: "Edit",
      title: "Step 4: On-Page & Technical SEO",
      description: "We enhance your website's structure, content, and technical health to ensure it's perfectly optimized for both search engines and user experience.",
    },
    {
      icon: "Link2",
      title: "Step 5: Local Link Building & Citations",
      description: "We build your authority by acquiring high-quality backlinks from reputable local businesses and online directories, signaling trust to Google.",
    },
    {
      icon: "TrendingUp",
      title: "Step 6: Transparent Reporting & Strategy Refinement",
      description: "You get clear, monthly reports showing your progress. We continually refine our strategy based on the data to maximize your ROI and keep you ahead.",
    },
  ],
  faqSectionHeadline: 'Frequently Asked Questions about Arlington SEO',
  heroData: {
    pageTitle: 'Arlington SEO Agency & Company | TRAC - Arlington, TX SEO Experts',
    metaDescription: 'Looking for expert SEO services in Arlington, TX? TRAC delivers industry-specific strategies for salons, auto dealers, contractors, and healthcare businesses. Grow with local SEO that works.',
    heroTitle: 'Arlington SEO Services: Drive Growth & Dominate Local Search with TRAC',
    heroSubtitle: 'Hyper-Local SEO Strategies for Real Business Impact in Arlington',
    heroDescription: `Is your Arlington business struggling to stand out online? In a competitive market like Arlington, simply existing isn't enough. You need a powerful SEO strategy that connects you directly with customers ready to buy. TRAC offers expert Arlington SEO services designed to transform your online presence, drive qualified leads, and deliver measurable ROI.

We understand the unique challenges and opportunities within Arlington's diverse neighborhoods and industries. Our approach goes beyond generic keywords, focusing on high-intent, localized search terms that capture genuine buying intent. Imagine your business appearing at the top of search results for phrases like "best SEO company in Arlington," "hire SEO expert Arlington," or "Arlington digital marketing agency for leads." That's the power of TRAC's tailored SEO solutions.

Our comprehensive Arlington SEO campaigns begin with a deep dive into your current online performance and competitive landscape. We optimize your technical SEO, ensuring your website is fast, mobile-friendly, and easily discoverable by search engines. Then, our content specialists craft compelling, authoritative content that not only ranks for critical keywords but also resonates with your target audience, establishing your business as a leader in the Arlington market.

Whether you're a growing startup near UTA, an established law firm in downtown Arlington, a thriving salon in Arlington Highlands, or a contractor serving South Arlington, TRAC has a proven track record of helping Arlington businesses achieve their growth goals. We leverage advanced keyword research, local SEO strategies, and transparent reporting to ensure your investment translates into tangible results.

Don't let your competitors capture the Arlington market. Partner with TRAC, the trusted Arlington SEO agency committed to driving your success. We specialize in helping service-based businesses like yours increase online visibility, attract more customers, and ultimately, dominate local search results. Ready to grow your Arlington business? Contact us today for a free SEO analysis.`,
    heroImage: {
      src: GENERIC_CITY_HERO_IMAGE_SRC,
      alt: 'Arlington SEO Services by TRAC',
    },
    heroVideoUrl: 'https://www.youtube.com/embed/JBPmDzL-Xek',
    formTitle: 'Free SEO Quote!',
  },
  resultsHeadline: 'SEO Wins That Drive Business in Arlington',
  readyToGrowHeadline: 'Ready to Elevate Your Arlington Business with SEO?',
  servicesSectionHeadline: 'SEO Services Built for Arlington’s Search Landscape',
  servicesSectionSubheadline: 'From local visibility to lead generation, we tailor every SEO service to Arlington’s unique market.',
  services: [
    {
      icon: Search,
      title: 'SEO',
      url: '/services/seo',
      description: 'Elevate your website\'s visibility in Arlington\'s competitive search landscape with our core SEO services. We employ advanced, data-driven strategies to significantly improve your organic rankings, driving a consistent flow of qualified traffic and generating valuable leads for your business. Our comprehensive approach ensures sustainable growth and a strong online presence tailored to the Arlington market.',
    },
    {
      icon: BarChart2,
      title: 'PPC',
      url: '/services/ppc',
      description: 'Maximize your immediate online impact in Arlington with our expertly managed Pay-Per-Click (PPC) campaigns. We specialize in creating high-performing ads across major platforms like Google Ads, delivering highly targeted traffic directly to your website. Our continuous optimization of bids, keywords, and ad copy ensures your campaigns are efficient, effective, and drive maximum return on ad spend for your Arlington business.',
    },
    {
      icon: Newspaper,
      title: 'Content Writing',
      url: '/services/content-writing',
      description: 'Engage your Arlington audience and establish your brand as an authority with our compelling, SEO-friendly content writing services. Our experienced team crafts high-quality blog posts, articles, website copy, and landing pages that not only attract search engines but also resonate with your target customers, building trust and credibility while converting visitors into loyal clients in the Arlington market.',
    },
    {
      icon: LineChart,
      title: 'Web Design and Development',
      url: '/services/web-design-and-development',
      description: 'Transform your online presence with our expert web design and development services. We create beautiful, responsive, and high-performing websites meticulously optimized for exceptional user experience and maximum conversions. Our focus is on delivering visually appealing and functionally robust platforms that reflect your brand identity and drive business growth through intuitive navigation, fast loading times, and seamless interactions for your Arlington customers.',
    },
    {
      icon: Users,
      title: 'Social Media Marketing',
      url: '/services/social-media-marketing',
      description: 'Forge meaningful connections with your Arlington audience across various social media platforms with our expert marketing strategies. We design campaigns to build a strong brand presence, foster community engagement, and drive measurable results. Our team manages your social channels, create compelling content, and run targeted campaigns to expand your reach and cultivate a loyal customer base within the Arlington community.',
    },
    {
      icon: Mail,
      title: 'Email Marketing',
      url: '/services/email-marketing',
      description: 'Nurture leads and drive conversions with our highly effective email marketing campaigns. We develop and manage engaging newsletters and automated personalized drip campaigns designed to keep your audience informed, interested, and ready to take action. Our strategies focus on delivering the right message to the right person at the right time, building customer loyalty and driving business growth for your Arlington enterprise.',
    },
    {
        icon: ShieldCheck,
        title: 'Reputation Management',
        url: '/services/reputation-management',
        description: 'Proactively build and maintain a stellar online reputation in Arlington with our comprehensive reputation management services. We ensure your customers consistently see the best of your brand across all digital channels, addressing feedback, highlighting positive reviews, and implementing proactive measures to safeguard your brand’s image. Foster trust and credibility among your target audience and enhance your business standing in the Arlington community.',
    },
    {
        icon: TrendingUp,
        title: 'eCommerce Optimization',
        url: '/services/ecommerce-optimization',
        description: 'Maximize sales and profitability for your e-commerce store with our specialized optimization services. Our comprehensive approach enhances product pages, streamlines the checkout process, and improves site speed and mobile responsiveness. We focus on creating a seamless shopping experience that encourages conversions and drives significant revenue growth for your online business, ensuring your Arlington-based e-commerce venture thrives.',
    },
    {
        icon: MapPinned,
        title: 'Amazon Marketing',
        url: '/services/amazon-marketing',
        description: 'Empower your success on the world\'s largest online marketplace with our expert Amazon marketing services. Our team develops and executes tailored strategies to boost your product visibility, drive sales, and maximize your return on investment. From optimizing product listings to managing Amazon PPC campaigns, we help your Arlington-based business dominate the competitive Amazon landscape and reach millions of potential customers.',
    },
    {
      icon: Code,
      title: 'Technical SEO',
      url: '/services/technical-seo',
      description: 'Our technical SEO services focus on optimizing your website\'s infrastructure to ensure seamless crawling and indexing by search engines. We address critical elements like site speed, mobile-friendliness, structured data, and site architecture. A robust technical foundation is crucial for search engine visibility, allowing your content to be discovered and ranked effectively, ultimately improving your organic performance and ensuring your Arlington business is easily found online.',
    },
    {
      icon: FileText,
      title: 'On-Page SEO',
      url: '/services/on-page-seo',
      description: 'Optimize individual web pages to rank higher and earn more relevant traffic from search engines with our on-page SEO services. Our process includes meticulous keyword research, compelling content optimization, strategic internal linking, and meta tag enhancements. By aligning your page content with user intent and search engine best practices, we ensure your pages are highly visible and attractive to both users and algorithms, driving targeted traffic to your Arlington business.',
    },
    {
      icon: LinkIcon,
      title: 'Off-Page SEO / Link Building',
      url: '/services/off-page-seo',
      description: 'Significantly improve your website\'s authority and relevance through external signals with our off-page SEO and link building strategies. We focus on acquiring high-quality, natural backlinks from reputable sources, enhancing your domain authority and search engine trust. This crucial aspect of SEO helps your website rank higher for competitive keywords and drives more referral traffic, solidifying your online presence in Arlington.',
    },
    {
      icon: Settings,
      title: 'Schema Markup',
      url: '/services/schema-markup',
      description: 'Enhance search engine understanding of your content and achieve rich results in SERPs with our Schema Markup implementation. We meticulously apply relevant schema types to your website, providing search engines with explicit clues about your page’s meaning. This can lead to enhanced listings like star ratings, product information, or event details, significantly boosting click-through rates and improving your visibility in Arlington search results.',
    },
    {
      icon: Search,
      title: 'Local SEO',
      url: '/services/local-seo',
      description: 'Optimize your online presence to attract more business from local searches in Arlington with our dedicated local SEO services. We focus on Google Business Profile optimization, local citation building, and geo-targeted content creation. This ensures your business appears prominently in local map packs and search results, connecting you directly with nearby customers actively seeking your products or services in Arlington.',
    },
    {
      icon: BarChart,
      title: 'SEO Audits',
      url: '/services/seo-audits',
      description: 'Gain a clear understanding of your website\'s current performance and identify critical areas for improvement with our comprehensive SEO audits. We meticulously examine technical aspects, on-page elements, off-page factors, and content quality. Our audit delivers actionable recommendations and a clear roadmap to address deficiencies, capitalize on opportunities, and significantly enhance your overall search engine visibility and organic traffic for your Arlington business.',
    },
    {
      icon: CheckCircle,
      title: 'Content Marketing for SEO',
      url: '/services/content-marketing-for-seo',
      description: 'Attract and retain your target audience in Arlington with our content marketing for SEO services. We focus on creating and distributing valuable, relevant, and consistent content. We develop content strategies aligned with your SEO goals, ensuring every piece of content is optimized for target keywords and user intent. This approach not only improves rankings but also establishes your brand as a thought leader in the Arlington market.',
    },
  ],
  whyChooseSectionHeadline: 'Why Choose TRAC for SEO in Arlington?',
  whyChooseIntro: 'Choosing the right SEO partner in Arlington is crucial for your business\'s success. TRAC stands apart as a trusted agency, combining unparalleled local market expertise with a proven track record of delivering tangible, measurable results for businesses like yours.',
  whyChooseParagraph1: 'Arlington’s diverse economic landscape demands a nuanced SEO approach. From the bustling university area near UTA to the vibrant retail districts of Arlington Highlands and the growing communities in South Arlington, each neighborhood and industry presents unique opportunities. Our team possesses an intimate understanding of Arlington’s digital ecosystem, allowing us to craft hyper-localized SEO strategies that precisely target your ideal customers, wherever they are searching.',
  whyChooseParagraph2: 'We don\'t just promise results; we deliver them through a data-driven, transparent, and ethical process. Our methodology is rooted in deep analysis of Arlington-specific search trends, competitor landscapes, and your unique business objectives. We provide clear, consistent reporting, proactive communication, and a dedicated team committed to your long-term growth. With TRAC, you gain a strategic partner focused on maximizing your online visibility, driving qualified leads, and ensuring a significant return on your SEO investment.',
  whyChoosePoints: [
    {
      icon: 'TrendingUp',
      title: 'Search Growth That Converts',
      description: 'Our strategies are meticulously designed to go beyond mere rankings, focusing on generating high-quality leads, increasing bookings, and driving substantial revenue for your Arlington business through precise, high-intent keyword targeting and conversion optimization.',
    },
    {
      icon: 'Lightbulb',
      title: 'Deep Local Knowledge',
      description: 'Leverage our profound understanding of Arlington’s dynamic digital patterns. From emerging businesses near the Entertainment District to established healthcare providers and thriving salons, we utilize deep market intelligence to shape SEO campaigns that resonate specifically with your local audience and competitive landscape.',
    },
    {
      icon: 'ShieldCheck',
      title: 'Trustworthy SEO Execution',
      description: 'Experience complete peace of mind with our fully transparent SEO services. We provide clear, accessible dashboards, regular performance reports, and open communication, ensuring you always know the exact status of your campaign and the tangible results we are achieving for your Arlington business.',
    },
    {
        icon: 'BarChart2',
        title: 'Data-Driven Strategies',
        description: 'Our campaigns are built on a foundation of rigorous data analysis and continuous optimization. We provide transparent, detailed reports that clearly demonstrate the return on your SEO investment, ensuring every decision is backed by measurable insights for your Arlington business.',
    },
    {
        icon: 'Users',
        title: 'Dedicated Team of Experts',
        description: 'Benefit from a dedicated team of SEO experts, content strategists, and web developers committed to your success. Our specialists bring collective expertise and a personalized approach to every aspect of your campaign, ensuring your Arlington business receives the highest level of service and support.',
    },
    {
        icon: 'LineChart',
        title: 'Holistic Approach',
        description: 'We adopt a holistic approach to your online growth, seamlessly integrating SEO with other digital marketing channels to create a comprehensive and synergistic strategy. This ensures maximum impact and sustained growth, positioning your Arlington business for long-term success in the digital landscape.',
    },
  ],
  awards: {
    clutch: {
      headline: 'Recognized by Clutch: Top Arlington SEO Agency',
      text: 'TRAC was named a leading Arlington SEO provider for client satisfaction, transparent methods, and strong local results.',
    },
    upcity: {
      headline: 'SEO Impact Award – UpCity 2024',
      text: 'UpCity honored our Arlington SEO team for delivering measurable growth to local businesses.',
    },
  },
  location: {
    officeImageUrl: GENERIC_OFFICE_LOCATION_IMAGE_SRC,
    streetAddress: '4600 Park Springs Blvd, Suite 100',
    addressLocality: 'Arlington',
    addressRegion: 'TX',
    postalCode: '76017',
    addressCountry: 'US',
    phone: CONTACT_DETAILS.phone,
    email: CONTACT_DETAILS.email,
    hasMap: 'https://goo.gl/maps/xHTreDepnQ72',
    geo: {
      latitude: '32.705002',
      longitude: '-97.122780',
    },
  },
  bottomFormTitle: 'Get Your SEO Proposal',
  faqData: [
    {
      question: 'How much does SEO cost in Arlington, TX?',
      answer: 'SEO pricing in Arlington typically ranges from $1,200 to $2,500 per month. Pricing depends on your website’s existing condition, local competition, and your specific business goals. For example, a single-location salon may require a different strategy than a law firm with multi-location support or an HVAC company targeting multiple zip codes. We offer flexible plans customized for each Arlington business and provide detailed scopes before we begin.',
    },
    {
      question: 'How long until my Arlington business sees SEO results?',
      answer: 'Generally, Arlington businesses begin seeing measurable SEO traction within 3 to 4 months, depending on competition and industry. Some clients experience faster growth in niche industries, while others—especially those in legal or healthcare—may require longer ramp-up due to keyword competitiveness. Real, sustained results typically compound by months 6 to 9. We provide regular reports and adjust our strategy as your site gains more authority in the Arlington market.',
    },
    {
      question: 'What industries do you specialize in for Arlington SEO?',
      answer: 'TRAC specializes in SEO for service-based businesses including landscapers, contractors, law firms, med spas, chiropractors, auto dealers, and more. We build dedicated strategies that align with each niche’s competitive search environment in Arlington. Our team conducts thorough research on both general and hyperlocal terms to help your business earn visibility where it matters most—whether you operate on South Cooper Street, Matlock Road, or near Lake Arlington.',
    },
    {
      question: 'Can you help my business rank in multiple Arlington areas?',
      answer: 'Absolutely. We build location-targeted landing pages for each area you serve—whether that’s North Arlington, Dalworthington Gardens, or the I-20 corridor. These pages include unique content, optimized metadata, localized schema markup, and backlinks from trusted regional directories. We also track performance on a neighborhood level, so you know which areas are generating the most traction and which pages need further optimization. Multi-location SEO is one of our specialties.',
    },
    {
      question: 'Is TRAC a good fit for small businesses in Arlington?',
      answer: 'Yes. Our Arlington SEO solutions are perfect for small to mid-sized businesses aiming to generate consistent leads from search. We understand budget constraints and build lean, results-driven campaigns tailored to your service offerings and service radius. Whether you\'re a one-person roofing company or a small boutique law firm, our team ensures you get the most SEO value per dollar spent—without overwhelming jargon or bloated contracts.',
    },
    {
      question: 'Do you optimize for Arlington-specific search intent?',
      answer: 'Definitely. Our keyword research is hyper-targeted to how Arlington residents search—from mobile queries like “urgent AC repair near me” to long-tail phrases like “best salon near Arlington Highlands open late”. We use real-time data, local modifiers, and behavioral trends to build content and metadata that reflect Arlington’s unique search landscape. This ensures your site ranks for the exact terms that drive leads—not just vanity keywords.',
    },
    {
      question: 'How do I find the best SEO agency in Arlington?',
      answer: 'TRAC is consistently recognized as a top SEO agency in Arlington, known for delivering measurable results and exceptional client satisfaction. Our data-driven strategies are designed to elevate your business\'s online presence and drive significant growth in the competitive Arlington market.',
    },
    {
      question: 'What are the benefits of local SEO for businesses in Arlington?',
      answer: 'Local SEO for your Arlington business can significantly increase your visibility in local search results, drive more foot traffic to your physical location, and attract highly qualified leads from customers in your immediate area. TRAC specializes in hyper-local strategies that connect you directly with your target audience in Arlington.',
    },
    {
      question: 'How can my business improve its Google ranking in Arlington?',
      answer: 'To improve your Google ranking in Arlington, focus on optimizing your Google Business Profile, creating localized content, building high-quality local backlinks, and ensuring your website is technically sound. TRAC offers comprehensive SEO services that cover all these aspects, helping your Arlington business climb to the top of search results.',
    },
  ],
};
