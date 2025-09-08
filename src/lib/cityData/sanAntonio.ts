
import type { CityPageData } from '@/types';
import { Search, Settings, Users, Mail, BarChart2, TrendingUp, Lightbulb, ShieldCheck, LineChart, MapPinned, Newspaper, Code, FileText, Link as LinkIcon, BarChart, CheckCircle } from 'lucide-react';
import { CONTACT_DETAILS } from '@/lib/constants';

const GENERIC_CITY_HERO_IMAGE_SRC = 'https://cdn-icggj.nitrocdn.com/AphBmykuaGyxZijWArNhxcCiPzVdYZGT/assets/images/optimized/rev-d6d7292/thriveagency.com/files/San-Antonio-SEO-Company.jpg';
const GENERIC_OFFICE_LOCATION_IMAGE_SRC = 'https://cdn-icggj.nitrocdn.com/AphBmykuaGyxZijWArNhxcCiPzVdYZGT/assets/images/optimized/rev-d6d7292/thriveagency.com/files/San-Antonio-Thrive-office-location.jpg';

export const sanAntonioData: CityPageData = {
  slug: 'san-antonio',
  cityName: 'San Antonio',
  metaKeywords: [
    'San Antonio SEO services for small businesses',
    'local SEO company San Antonio',
    'SEO for tourism in San Antonio',
    'River Walk SEO San Antonio TX',
    'Alamo City SEO San Antonio',
    'San Antonio small business SEO experts',
    'best SEO agency in San Antonio',
    'SEO for healthcare in San Antonio',
    'Google Business optimization San Antonio',
    'San Antonio e-commerce SEO company'
  ],
  teamSectionHeadline: 'Meet Your Founder & CEO, Kaayf',
  teamSectionDescription: 'The visionary leader behind TRAC, dedicated to your success in San Antonio.',
  founderBio: 'Kaayf, our Founder & CEO, brings over 15 years of digital marketing expertise to San Antonio businesses. He is passionate about driving measurable ROI and building sustainable growth for clients in the local market. His leadership ensures TRAC delivers tailored SEO strategies that resonate with San Antonio\'s unique business landscape.',
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
  heroData: {
    pageTitle: 'San Antonio SEO Services | TRAC - SEO Experts San Antonio, TX',
    metaDescription: 'TRAC is a San Antonio SEO agency helping businesses improve online visibility and drive organic growth. Contact our San Antonio SEO specialists for a free consultation.',
    heroTitle: 'San Antonio SEO Experts: Amplify Your Alamo City Presence',
    heroSubtitle: 'Remember the Alamo, And Your SEO! - TRAC Leads the Way in San Antonio',
    heroDescription: `Is your San Antonio business struggling to capture the attention of local customers online? In a city as vibrant and diverse as San Antonio, standing out requires more than just a website—it demands a strategic, results-driven SEO approach. TRAC offers expert San Antonio SEO services designed to elevate your online presence, connect you with high-intent local searchers, and drive tangible growth for your business.

### Why San Antonio Businesses Need Specialized SEO

San Antonio's unique blend of historic charm and modern development creates a distinct digital landscape. From the iconic Alamo to the bustling River Walk, and the vibrant Pearl District, each neighborhood presents unique opportunities and challenges. Generic SEO strategies simply won't cut it. You need a partner who understands the nuances of San Antonio's market, the local search behavior, and how to position your business to attract customers actively seeking your services.

At TRAC, we specialize in crafting hyper-local SEO campaigns that resonate with the San Antonio audience. We go beyond basic keyword targeting, delving into the specific phrases and questions your potential customers are using when they're ready to make a purchasing decision. Imagine your business appearing prominently for searches like "best SEO company San Antonio," "hire SEO expert San Antonio," "San Antonio digital marketing agency for leads," or "local SEO services San Antonio for small business." This is the power of our tailored approach.

### Our Comprehensive San Antonio SEO Approach

Our process begins with a deep dive into your current online performance and the competitive landscape within San Antonio. We analyze your website's technical health, ensuring it's fast, mobile-friendly, and easily discoverable by search engines. A strong technical foundation is crucial for ranking success.

Next, our content specialists develop compelling, authoritative content that not only ranks for critical local keywords but also establishes your business as a trusted authority in the San Antonio market. We focus on creating content that answers user questions, addresses pain points, and guides them towards a conversion. This includes optimizing your Google Business Profile to dominate local map pack results, ensuring your business is the first one local customers see.

### Driving Measurable Results for Your San Antonio Business

Whether you're a growing startup in Southtown, an established healthcare provider in the Medical Center, a thriving restaurant in the Pearl District, or a service-based business expanding across Bexar County, TRAC has a proven track record of helping San Antonio businesses achieve their growth goals. We leverage advanced keyword research, local SEO strategies, and transparent reporting to ensure your investment translates into measurable ROI.

We don't just promise results; we deliver them. Our team provides monthly strategy sessions, detailed performance dashboards, and content calendars, keeping you informed and involved every step of the way. Our ethical, white-hat SEO tactics build long-term equity, protecting your rankings and fostering trust with both search engines and your customers.

Don't let your competitors capture the San Antonio market. Partner with TRAC, the trusted San Antonio SEO agency committed to driving your success. We specialize in helping businesses like yours increase online visibility, attract more qualified leads, and ultimately, dominate local search results. Ready to transform your online presence and achieve sustainable growth in San Antonio? Contact us today for a free SEO analysis and discover the TRAC difference.`,
    heroImage: { src: GENERIC_CITY_HERO_IMAGE_SRC, alt: 'SEO Services in San Antonio, TX', dataAiHint: 'San Antonio riverwalk' },
    heroVideoUrl: 'https://www.youtube.com/embed/JBPmDzL-Xek',
    formTitle: 'Get Your FREE San Antonio SEO Strategy!',
  },
  resultsHeadline: 'Delivering Historic SEO Results in San Antonio\'s Growing Market',
  readyToGrowHeadline: 'Ready to Elevate Your San Antonio Business with SEO?',
  servicesSectionHeadline: 'Customized San Antonio SEO Solutions for a Historic City',
  servicesSectionSubheadline: 'Our SEO services are meticulously designed to make your San Antonio business a leader in organic search, connecting you with both loyal locals and the city\'s many visitors, tapping into key industries like tourism, military, and healthcare.',
  services: [
    {
      icon: Search,
      title: 'SEO',
      url: '/services/seo',
      description: "Elevate your website's visibility in San Antonio's competitive search landscape with our core SEO services. We employ advanced, data-driven strategies to significantly improve your organic rankings, driving a consistent flow of qualified traffic and generating valuable leads for your business. Our comprehensive approach ensures sustainable growth and a strong online presence tailored to the San Antonio market.",
    },
    {
      icon: BarChart2,
      title: 'PPC',
      url: '/services/ppc',
      description: 'Maximize your immediate online impact in San Antonio with our expertly managed Pay-Per-Click (PPC) campaigns. We specialize in creating high-performing ads across major platforms like Google Ads, delivering highly targeted traffic directly to your website. Our continuous optimization of bids, keywords, and ad copy ensures your campaigns are efficient, effective, and drive maximum return on ad spend for your San Antonio business.',
    },
    {
      icon: Newspaper,
      title: 'Content Writing',
      url: '/services/content-writing',
      description: 'Engage your San Antonio audience and establish your brand as an authority with our compelling, SEO-friendly content writing services. Our experienced team crafts high-quality blog posts, articles, website copy, and landing pages that not only attract search engines but also resonate with your target customers, building trust and credibility while converting visitors into loyal clients in the San Antonio market.',
    },
    {
      icon: LineChart,
      title: 'Web Design and Development',
      url: '/services/web-design-and-development',
      description: 'Transform your online presence with our expert web design and development services. We create beautiful, responsive, and high-performing websites meticulously optimized for exceptional user experience and maximum conversions. Our focus is on delivering visually appealing and functionally robust platforms that reflect your brand identity and drive business growth through intuitive navigation, fast loading times, and seamless interactions for your San Antonio customers.',
    },
    {
      icon: Users,
      title: 'Social Media Marketing',
      url: '/services/social-media-marketing',
      description: 'Forge meaningful connections with your San Antonio audience across various social media platforms with our expert marketing strategies. We design campaigns to build a strong brand presence, foster community engagement, and drive measurable results. Our team manages your social channels, create compelling content, and run targeted campaigns to expand your reach and cultivate a loyal customer base within the San Antonio community.',
    },
    {
      icon: Mail,
      title: 'Email Marketing',
      url: '/services/email-marketing',
      description: 'Nurture leads and drive conversions with our highly effective email marketing campaigns. We develop and manage engaging newsletters and automated personalized drip campaigns designed to keep your audience informed, interested, and ready to take action. Our strategies focus on delivering the right message to the right person at the right time, building customer loyalty and driving business growth for your San Antonio enterprise.',
    },
    {
        icon: ShieldCheck,
        title: 'Reputation Management',
        url: '/services/reputation-management',
        description: 'Proactively build and maintain a stellar online reputation in San Antonio with our comprehensive reputation management services. We ensure your customers consistently see the best of your brand across all digital channels, addressing feedback, highlighting positive reviews, and implementing proactive measures to safeguard your brand’s image. Foster trust and credibility among your target audience and enhance your business standing in the San Antonio community.',
    },
    {
        icon: TrendingUp,
        title: 'eCommerce Optimization',
        url: '/services/ecommerce-optimization',
        description: 'Maximize sales and profitability for your e-commerce store with our specialized optimization services. Our comprehensive approach enhances product pages, streamlines the checkout process, and improves site speed and mobile responsiveness. We focus on creating a seamless shopping experience that encourages conversions and drives significant revenue growth for your online business, ensuring your San Antonio-based e-commerce venture thrives.',
    },
    {
        icon: MapPinned,
        title: 'Amazon Marketing',
        url: '/services/amazon-marketing',
        description: 'Empower your success on the world\'s largest online marketplace with our expert Amazon marketing services. Our team develops and executes tailored strategies to boost your product visibility, drive sales, and maximize your return on investment. From optimizing product listings to managing Amazon PPC campaigns, we help your San Antonio-based business dominate the competitive Amazon landscape and reach millions of potential customers.',
    },
    {
      icon: Code,
      title: 'Technical SEO',
      url: '',
      description: 'Our technical SEO services focus on optimizing your website\'s infrastructure to ensure seamless crawling and indexing by search engines. We address critical elements like site speed, mobile-friendliness, structured data, and site architecture. A robust technical foundation is crucial for search engine visibility, allowing your content to be discovered and ranked effectively, ultimately improving your organic performance and ensuring your San Antonio business is easily found online.',
    },
    {
      icon: FileText,
      title: 'On-Page SEO',
      url: '',
      description: 'Optimize individual web pages to rank higher and earn more relevant traffic from search engines with our on-page SEO services. Our process includes meticulous keyword research, compelling content optimization, strategic internal linking, and meta tag enhancements. By aligning your page content with user intent and search engine best practices, we ensure your pages are highly visible and attractive to both users and algorithms, driving targeted traffic to your San Antonio business.',
    },
    {
      icon: LinkIcon,
      title: 'Off-Page SEO / Link Building',
      url: '',
      description: 'Significantly improve your website\'s authority and relevance through external signals with our off-page SEO and link building strategies. We focus on acquiring high-quality, natural backlinks from reputable sources, enhancing your domain authority and search engine trust. This crucial aspect of SEO helps your website rank higher for competitive keywords and drives more referral traffic, solidifying your online presence in San Antonio.',
    },
    {
      icon: Settings,
      title: 'Schema Markup',
      url: '',
      description: 'Enhance search engine understanding of your content and achieve rich results in SERPs with our Schema Markup implementation. We meticulously apply relevant schema types to your website, providing search engines with explicit clues about your page’s meaning. This can lead to enhanced listings like star ratings, product information, or event details, significantly boosting click-through rates and improving your visibility in San Antonio search results.',
    },
    {
      icon: Search,
      title: 'Local SEO',
      url: '',
      description: 'Optimize your online presence to attract more business from local searches in San Antonio with our dedicated local SEO services. We focus on Google Business Profile optimization, local citation building, and geo-targeted content creation. This ensures your business appears prominently in local map packs and search results, connecting you directly with nearby customers actively seeking your products or services in San Antonio.',
    },
    {
      icon: BarChart,
      title: 'SEO Audits',
      url: '',
      description: 'Gain a clear understanding of your website\'s current performance and identify critical areas for improvement with our comprehensive SEO audits. We meticulously examine technical aspects, on-page elements, off-page factors, and content quality. Our audit delivers actionable recommendations and a clear roadmap to address deficiencies, capitalize on opportunities, and significantly enhance your overall search engine visibility and organic traffic for your San Antonio business.',
    },
    {
      icon: CheckCircle,
      title: 'Content Marketing for SEO',
      url: '',
      description: 'Attract and retain your target audience in San Antonio with our content marketing for SEO services. We focus on creating and distributing valuable, relevant, and consistent content. We develop content strategies aligned with your SEO goals, ensuring every piece of content is optimized for target keywords and user intent. This approach not only improves rankings but also establishes your brand as a thought leader in the San Antonio market.',
    },
  ],
  whyChooseSectionHeadline: 'TRAC: Your Trusted San Antonio SEO Agency for Lasting Impact',
  whyChooseIntro: 'Partner with TRAC for effective, data-driven SEO services in San Antonio. We understand the local market\'s unique blend of history, culture, and economic growth and are dedicated to helping your business succeed online through superior search engine optimization techniques.',
  whyChooseParagraph1: 'Our San Antonio SEO team has deep knowledge of the local market, its rich heritage, significant military presence, and the diverse industries that thrive here, from tourism and hospitality to biosciences and aerospace. We leverage this understanding to build SEO campaigns that are not only effective but also authentically connect with the San Antonio community and its visitors.',
  whyChooseParagraph2: 'We employ ethical, cutting-edge SEO techniques to deliver sustainable growth for San Antonio businesses. Our commitment is to transparency, measurable results, and forging strong partnerships based on trust and shared success in the Alamo City. We adapt our strategies to keep you competitive in an evolving digital landscape and provide clear performance reporting.',
  whyChoosePoints: [
    {
      icon: 'TrendingUp',
      title: 'Search Growth That Converts',
      description: 'Our strategies are meticulously designed to go beyond mere rankings, focusing on generating high-quality leads, increasing bookings, and driving substantial revenue for your San Antonio business through precise, high-intent keyword targeting and conversion optimization.',
    },
    {
      icon: 'Lightbulb',
      title: 'Deep Local Knowledge',
      description: 'Leverage our profound understanding of San Antonio’s dynamic digital patterns. From emerging businesses in Southtown to established healthcare providers and thriving tourism attractions, we utilize deep market intelligence to shape SEO campaigns that resonate specifically with your local audience and competitive landscape.',
    },
    {
      icon: 'ShieldCheck',
      title: 'Trustworthy SEO Execution',
      description: 'Experience complete peace of mind with our fully transparent SEO services. We provide clear, accessible dashboards, regular performance reports, and open communication, ensuring you always know the exact status of your campaign and the tangible results we are achieving for your San Antonio business.',
    },
    {
        icon: 'BarChart2',
        title: 'Data-Driven Strategies',
        description: 'Our campaigns are built on a foundation of rigorous data analysis and continuous optimization. We provide transparent, detailed reports that clearly demonstrate the return on your SEO investment, ensuring every decision is backed by measurable insights for your San Antonio business.',
    },
    {
        icon: 'Users',
        title: 'Dedicated Team of Experts',
        description: 'Benefit from a dedicated team of SEO experts, content strategists, and web developers committed to your success. Our specialists bring collective expertise and a personalized approach to every aspect of your campaign, ensuring your San Antonio business receives the highest level of service and support.',
    },
    {
        icon: 'LineChart',
        title: 'Holistic Approach',
        description: 'We adopt a holistic approach to your online growth, seamlessly integrating SEO with other digital marketing channels to create a comprehensive and synergistic strategy. This ensures maximum impact and sustained growth, positioning your San Antonio business for long-term success in the digital landscape.',
    },
  ],
  awards: {
    clutch: { headline: 'Top San Antonio SEO Agency - Clutch 2024', text: 'Recognized by Clutch for excellence in San Antonio SEO, helping businesses connect with their audience in a city rich with history, culture, and opportunity. Our clients trust our local expertise and strategic approach.' },
    upcity: { headline: 'San Antonio SEO Excellence - UpCity 2024', text: 'Awarded by UpCity for top-tier SEO services in San Antonio, consistently delivering outstanding results and strategic growth for businesses in the Alamo City and surrounding South Texas region.' },
  },
  location: {
    officeImageUrl: GENERIC_OFFICE_LOCATION_IMAGE_SRC,
    streetAddress: '9901 I.H. 10 West, Suite 800',
    addressLocality: 'San Antonio',
    addressRegion: 'TX',
    postalCode: '78230',
    addressCountry: 'US',
    phone: CONTACT_DETAILS.phone,
    email: CONTACT_DETAILS.email,
    hasMap: 'https://goo.gl/maps/qRsTuVwXyZ',
    geo: {
      latitude: '29.424100',
      longitude: '-98.493600',
    },
  },
  bottomFormTitle: 'Request Your SEO Consultation',
  faqSectionHeadline: 'San Antonio SEO FAQs: What Local Businesses Need to Know',
  faqData: [
    {
      question: 'How much does SEO cost in San Antonio, TX?',
      answer: 'SEO pricing in San Antonio typically ranges from $1,200 to $2,500 per month. Pricing depends on your website’s existing condition, local competition, and your specific business goals. For example, a single-location boutique may require a different strategy than a large healthcare system with multiple facilities or a tourism company targeting various attractions. We offer flexible plans customized for each San Antonio business and provide detailed scopes before we begin.',
    },
    {
      question: 'How long until my San Antonio business sees SEO results?',
      answer: 'Generally, San Antonio businesses begin seeing measurable SEO traction within 3 to 4 months, depending on competition and industry. Some clients experience faster growth in niche industries, while others—especially those in highly competitive sectors like tourism or healthcare—may require longer ramp-up due to keyword competitiveness. Real, sustained results typically compound by months 6 to 9. We provide regular reports and adjust our strategy as your site gains more authority in the San Antonio market.',
    },
    {
      question: 'What industries do you specialize in for San Antonio SEO?',
      answer: 'TRAC specializes in SEO for service-based businesses including tourism, hospitality, healthcare, military-related services, retail, and more. We build dedicated strategies that align with each niche’s competitive search environment in San Antonio. Our team conducts thorough research on both general and hyperlocal terms to help your business earn visibility where it matters most—whether you operate near the River Walk, the Alamo, or the Pearl District.',
    },
    {
      question: 'Can you help my business rank in multiple San Antonio areas?',
      answer: 'Absolutely. We build location-targeted landing pages for each area you serve—whether that’s Downtown, North Side, West Side, or South Side. These pages include unique content, optimized metadata, localized schema markup, and backlinks from trusted regional directories. We also track performance on a neighborhood level, so you know which areas are generating the most traction and which pages need further optimization. Multi-location SEO is one of our specialties.',
    },
    {
      question: 'Is TRAC a good fit for small businesses in San Antonio?',
      answer: 'Yes. Our San Antonio SEO solutions are perfect for small to mid-sized businesses aiming to generate consistent leads from search. We understand budget constraints and build lean, results-driven campaigns tailored to your service offerings and service radius. Whether you\'re a one-person tour operator or a small boutique hotel, our team ensures you get the most SEO value per dollar spent—without overwhelming jargon or bloated contracts.',
    },
    {
      question: 'Do you optimize for San Antonio-specific search intent?',
      answer: 'Definitely. Our keyword research is hyper-targeted to how San Antonio residents and tourists search—from mobile queries like “best Tex-Mex near me River Walk” to long-tail phrases like “top historical tours Alamo”. We use real-time data, local modifiers, and behavioral trends to build content and metadata that reflect San Antonio’s unique search landscape. This ensures your site ranks for the exact terms that drive leads—not just vanity keywords.',
    },
    {
      question: 'How do I find the best SEO agency in San Antonio?',
      answer: 'TRAC is consistently recognized as a top SEO agency in San Antonio, known for delivering measurable results and exceptional client satisfaction. Our data-driven strategies are designed to elevate your business\'s online presence and drive significant growth in the competitive San Antonio market.',
    },
    {
      question: 'What are the benefits of local SEO for businesses in San Antonio?',
      answer: 'Local SEO for your San Antonio business can significantly increase your visibility in local search results, drive more foot traffic to your physical location, and attract highly qualified leads from customers in your immediate area. TRAC specializes in hyper-local strategies that connect you directly with your target audience in San Antonio.',
    },
    {
      question: 'How can my business improve its Google ranking in San Antonio?',
      answer: 'To improve your Google ranking in San Antonio, focus on optimizing your Google Business Profile, creating localized content, building high-quality local backlinks, and ensuring your website is technically sound. TRAC offers comprehensive SEO services that cover all these aspects, helping your San Antonio business climb to the top of search results.',
    },
  ]
};
