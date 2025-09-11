
import type { CityPageData } from '@/types';
import { Search, Settings, Briefcase, Mail, BarChart2, TrendingUp, Lightbulb, ShieldCheck, Newspaper, LineChart, Users, MapPinned, Code, FileText, LinkIcon, BarChart, CheckCircle } from 'lucide-react';
import { CONTACT_DETAILS } from '@/lib/constants';

const GENERIC_CITY_HERO_IMAGE_SRC = '/trac-seo.jpg';
const GENERIC_OFFICE_LOCATION_IMAGE_SRC = 'https://cdn-icggj.nitrocdn.com/AphBmykuaGyxZijWArNhxcCiPzVdYZGT/assets/images/optimized/rev-d6d7292/thriveagency.com/files/Seattle-Thrive-office-location.jpg';

export const seattleData: CityPageData = {
  slug: 'seattle',
  cityName: 'Seattle',
  metaKeywords: [
    'SEO agency for tech startups in Seattle WA',
    'Seattle WA e-commerce SEO company',
    'digital marketing for aerospace in Seattle',
    'local SEO specialists for Seattle businesses',
    'multi-location SEO for Seattle healthcare providers',
    'affordable SEO services Seattle small business',
    'on-page optimization Seattle WA businesses',
    'best Seattle SEO strategy 2025',
    'content marketing for local Seattle shops',
    'technical SEO audits Seattle Washington',
    'google maps ranking boost Seattle area',
    'custom SEO plan for Seattle service companies',
  ],
  teamSectionHeadline: 'Meet Your Founder & CEO, Kaayf',
  teamSectionDescription: 'The visionary leader behind TRAC, dedicated to your success in Seattle.',
  founderBio: 'Kaayf, our Founder & CEO, brings over 15 years of digital marketing expertise to Seattle businesses. He is passionate about driving measurable ROI and building sustainable growth for clients in the local market. His leadership ensures TRAC delivers tailored SEO strategies that resonate with Seattle\'s unique business landscape.',
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
      description: "We enhance your website\'s structure, content, and technical health to ensure it\'s perfectly optimized for both search engines and user experience.",
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
    pageTitle: 'Seattle SEO Agency | TRAC - SEO Services Seattle, WA',
    metaDescription: 'TRAC is a Seattle SEO agency helping businesses improve online visibility and drive organic growth. Contact our Seattle SEO experts for a free consultation.',
    heroTitle: 'Seattle SEO Experts: Elevate Your Emerald City Presence',
    heroSubtitle: 'Navigate Seattle\'s Competitive Search Landscape with TRAC SEO',
    heroDescription: 'TRAC offers comprehensive SEO services for businesses in Seattle, Washington, a global hub for technology, innovation, aerospace, and coffee. Our tailored strategies focus on significantly improving your search engine rankings, attracting qualified local traffic from the tech-savvy Seattle populace and surrounding areas like Bellevue and Redmond, and increasing your ROI in this highly innovative and competitive market. We understand the nuances of targeting audiences in distinct Seattle neighborhoods such as South Lake Union, Capitol Hill, Fremont, and Ballard. From optimizing your website for local searches and ensuring cutting-edge technical SEO for optimal performance (critical for tech companies and e-commerce), to developing compelling content that resonates with Seattle\'s unique culture and thriving industries, TRAC provides a full-spectrum SEO solution. We help businesses, from startups to enterprise-level corporations, establish market leadership. Partner with us to make your Seattle business a dominant force in online search and achieve sustainable, long-term growth.',
    heroImage: { src: GENERIC_CITY_HERO_IMAGE_SRC, alt: 'SEO Services in Seattle, WA' },
    heroVideoUrl: 'https://www.youtube.com/embed/JBPmDzL-Xek',
    formTitle: 'Get Your FREE Seattle SEO Strategy!',
  },
  resultsHeadline: 'Delivering Innovative & Effective SEO Results in Seattle',
  readyToGrowHeadline: 'Ready to Elevate Your Seattle SEO & Outshine the Competition?',
  servicesSectionHeadline: 'Customized Seattle SEO Solutions for a Tech-Forward Market',
  servicesSectionSubheadline: 'Our SEO services are designed to make your Seattle business a leader in organic search, especially within the tech, startup, and B2B ecosystems, while also catering to local consumer needs and e-commerce. We help you connect with the right audience in the Pacific Northwest.',
  services: [
    { icon: Search, title: 'Seattle Local & Tech Industry SEO', description: 'Dominate local search in Seattle and specifically target the needs of the technology industry and its highly skilled workforce. We optimize your Google Business Profile for Seattle neighborhoods (e.g., Pioneer Square, Queen Anne) and focus on keywords relevant to the Pacific Northwest tech scene, from software development to cloud computing.' },
    { icon: Settings, title: 'Technical SEO for Seattle Websites & SaaS Platforms', description: 'Optimize your website\'s technical health for peak SEO performance in Seattle\'s competitive online space. This includes meticulous site speed optimization (Core Web Vitals), mobile-first indexing, advanced JavaScript SEO for SaaS products and complex web applications, and robust security protocols to protect your digital assets.' },
    { icon: Mail, title: 'Seattle SEO Content Marketing & Thought Leadership', description: 'Create compelling, authoritative content that ranks high in Seattle search results and converts savvy visitors. We focus on developing thought leadership pieces, in-depth tech explainers, industry reports, and content that showcases innovation and addresses the specific interests of the Seattle audience, from sustainability to emerging technologies.' },
    { icon: Briefcase, title: 'B2B, SaaS, E-commerce & Aerospace SEO in Seattle', description: 'Specialized SEO for Seattle\'s booming B2B, Software-as-a-Service (SaaS), and e-commerce sectors, as well as its foundational aerospace industry. We understand how to reach decision-makers, drive demo requests for software, boost online sales for retailers, and enhance visibility for specialized industrial companies through targeted, effective SEO.'},
    { icon: Search, title: 'SEO Audits for Seattle Businesses', description: 'Gain a clear understanding of your website\'s current performance and identify critical areas for improvement with our comprehensive SEO audits. We meticulously examine technical aspects, on-page elements, off-page factors, and content quality. Our audit delivers actionable recommendations and a clear roadmap to address deficiencies, capitalize on opportunities, and significantly enhance your overall search engine visibility and organic traffic for your Seattle business.' },
    { icon: BarChart2, title: 'PPC Management for Seattle Market', description: 'Maximize your immediate online impact in Seattle with our expertly managed Pay-Per-Click (PPC) campaigns. We specialize in creating high-performing ads across major platforms like Google Ads, delivering highly targeted traffic directly to your website. Our continuous optimization of bids, keywords, and ad copy ensures your campaigns are efficient, effective, and drive maximum return on ad spend for your Seattle business.' },
    { icon: Newspaper, title: 'Content Writing for Seattle Audience', description: 'Engage your Seattle audience and establish your brand as an authority with our compelling, SEO-friendly content writing services. Our experienced team crafts high-quality blog posts, articles, website copy, and landing pages that not only attract search engines but also resonate with your target customers, building trust and credibility while converting visitors into loyal clients in the Seattle market.' },
    { icon: LineChart, title: 'Web Design & Development for Seattle', description: 'Transform your online presence with our expert web design and development services. We create beautiful, responsive, and high-performing websites meticulously optimized for exceptional user experience and maximum conversions. Our focus is on delivering visually appealing and functionally robust platforms that reflect your brand identity and drive business growth through intuitive navigation, fast loading times, and seamless interactions for your Seattle customers.' },
    { icon: Users, title: 'Social Media Marketing in Seattle', description: 'Forge meaningful connections with your Seattle audience across various social media platforms with our expert marketing strategies. We design campaigns to build a strong brand presence, foster community engagement, and drive measurable results. Our team manages your social channels, create compelling content, and run targeted campaigns to expand your reach and cultivate a loyal customer base within the Seattle community.' },
    { icon: Mail, title: 'Email Marketing for Seattle Businesses', description: 'Nurture leads and drive conversions with our highly effective email marketing campaigns. We develop and manage engaging newsletters and automated personalized drip campaigns designed to keep your audience informed, interested, and ready to take action. Our strategies focus on delivering the right message to the right person at the right time, building customer loyalty and driving business growth for your Seattle enterprise.' },
    { icon: ShieldCheck, title: 'Reputation Management in Seattle', description: 'Proactively build and maintain a stellar online reputation in Seattle with our comprehensive reputation management services. We ensure your customers consistently see the best of your brand across all digital channels, addressing feedback, highlighting positive reviews, and implementing proactive measures to safeguard your brand’s image. Foster trust and credibility among your target audience and enhance your business standing in the Seattle community.' },
    { icon: TrendingUp, title: 'eCommerce Optimization for Seattle', description: 'Maximize sales and profitability for your e-commerce store with our specialized optimization services. Our comprehensive approach enhances product pages, streamlines the checkout process, and improves site speed and mobile responsiveness. We focus on creating a seamless shopping experience that encourages conversions and drives significant revenue growth for your online business, ensuring your Seattle-based e-commerce venture thrives.' },
    { icon: MapPinned, title: 'Amazon Marketing for Seattle Sellers', description: 'Empower your success on the world\'s largest online marketplace with our expert Amazon marketing services. Our team develops and executes tailored strategies to boost your product visibility, drive sales, and maximize your return on investment. From optimizing product listings to managing Amazon PPC campaigns, we help your Seattle-based business dominate the competitive Amazon landscape and reach millions of potential customers.' },
    { icon: Code, title: 'Technical SEO for Seattle Websites', description: 'Our technical SEO services focus on optimizing your website\'s infrastructure to ensure seamless crawling and indexing by search engines. We address critical elements like site speed, mobile-friendliness, structured data, and site architecture. A robust technical foundation is crucial for search engine visibility, allowing your content to be discovered and ranked effectively, ultimately improving your organic performance and ensuring your Seattle business is easily found online.' },
    { icon: FileText, title: 'On-Page SEO for Seattle Businesses', description: 'Optimize individual web pages to rank higher and earn more relevant traffic from search engines with our on-page SEO services. Our process includes meticulous keyword research, compelling content optimization, strategic internal linking, and meta tag enhancements. By aligning your page content with user intent and search engine best practices, we ensure your pages are highly visible and attractive to both users and algorithms, driving targeted traffic to your Seattle business.' },
    {
      icon: LinkIcon,
      title: 'Off-Page SEO / Link Building in Seattle',
      url: '/services/off-page-seo',
      description: 'Significantly improve your website\'s authority and relevance through external signals with our off-page SEO and link-building strategies. We focus on acquiring high-quality, natural backlinks from reputable sources, enhancing your domain authority and search engine trust. This crucial aspect of SEO helps your website rank higher for competitive keywords and drives more referral traffic, solidifying your online presence in Seattle.'
    },
    {
      icon: Settings,
      title: 'Schema Markup',
      url: '/services/schema-markup',
      description: 'Enhance search engine understanding of your content and achieve rich results in SERPs with our Schema Markup implementation. We meticulously apply relevant schema types to your website, providing search engines with explicit clues about your page’s meaning. This can lead to enhanced listings like star ratings, product information, or event details, significantly boosting click-through rates and improving your visibility in Seattle search results.'
    },
    {
      icon: Search,
      title: 'Local SEO',
      url: '/services/local-seo',
      description: 'Optimize your online presence to attract more business from local searches in Seattle with our dedicated local SEO services. We focus on Google Business Profile optimization, local citation building, and geo-targeted content creation. This ensures your business appears prominently in local map packs and search results, connecting you directly with nearby customers actively seeking your products or services in Seattle.'
    },
    {
      icon: BarChart,
      title: 'SEO Audits',
      url: '/services/seo-audits',
      description: 'Gain a clear understanding of your website\'s current performance and identify critical areas for improvement with our comprehensive SEO audits. We meticulously examine technical aspects, on-page elements, off-page factors, and content quality. Our audit delivers actionable recommendations and a clear roadmap to address deficiencies, capitalize on opportunities, and significantly enhance your overall search engine visibility and organic traffic for your Seattle business.'
    },
    {
      icon: CheckCircle,
      title: 'Content Marketing for SEO',
      url: '/services/content-marketing-for-seo',
      description: 'Attract and retain your target audience in Seattle with our content marketing for SEO services. We focus on creating and distributing valuable, relevant, and consistent content. We develop content strategies aligned with your SEO goals, ensuring every piece of content is optimized for target keywords and user intent. This approach not only improves rankings but also establishes your brand as a thought leader in the Seattle market.'
    },
  ],
  whyChooseSectionHeadline: 'TRAC: Your Trusted Seattle SEO Agency for Innovation & Growth',
  whyChooseIntro: 'Partner with TRAC for effective, data-driven SEO services in Seattle. We have a deep understanding of the local market, its highly competitive tech landscape, and the strategies required to make your business succeed online and achieve industry leadership.',
  whyChooseParagraph1: 'Our Seattle SEO team has unparalleled knowledge of the local market dynamics, particularly the influential tech and startup ecosystem (Amazon, Microsoft, and numerous startups), as well as established industries like aerospace, retail, and global health. We tailor our SEO strategies to align with Seattle\'s innovative spirit, its environmentally conscious values, and its global outlook, ensuring we drive significant results for your business.',
  whyChooseParagraph2: 'We employ ethical, cutting-edge SEO techniques, including AI-driven insights, advanced analytics, and comprehensive competitor research, to deliver sustainable growth for Seattle businesses. Our commitment is to transparency, measurable ROI, and helping you navigate the complexities of the modern search landscape in the Emerald City. We believe in building strong, collaborative partnerships.',
  whyChoosePoints: [
    { icon: 'TrendingUp', title: 'Seattle Search Growth & Market Leadership', description: 'Improve your organic rankings, attract high-quality leads from the tech-savvy Seattle populace and global markets, and solidify your market leadership position with our expert SEO services. We focus on future-proofing your online presence and driving substantial business growth.' },
    { icon: 'Lightbulb', title: 'Strategic & Innovative Seattle SEO', description: 'Benefit from targeted SEO campaigns specifically designed for the Seattle, WA audience, adapting to the fast-paced tech environment, local search behaviors (e.g., for coffee shops, outdoor gear), and unique industry demands. We keep you ahead of the curve with advanced SEO tactics.' },
    { icon: 'ShieldCheck', title: 'Reliable & Results-Driven Seattle SEO Partner', description: 'Experience transparent, ethical, and results-oriented SEO services in Seattle. We are focused on building long-term success and a strong online reputation for your brand, using data to guide every decision and providing clear, actionable insights through our reporting.' },
    {
        icon: 'BarChart2',
        title: 'Data-Driven Strategies for Seattle',
        description: 'Our campaigns are built on a foundation of rigorous data analysis and continuous optimization. We provide transparent, detailed reports that clearly demonstrate the return on your SEO investment, ensuring every decision is backed by measurable insights for your Seattle business.',
    },
    {
        icon: 'Users',
        title: 'Dedicated Team of Seattle Experts',
        description: 'Benefit from a dedicated team of SEO experts, content strategists, and web developers committed to your success. Our specialists bring collective expertise and a personalized approach to every aspect of your campaign, ensuring your Seattle business receives the highest level of service and support.',
    },
    {
        icon: 'LineChart',
        title: 'Holistic Approach for Seattle Growth',
        description: 'We adopt a holistic approach to your online growth, seamlessly integrating SEO with other digital marketing channels to create a comprehensive and synergistic strategy. This ensures maximum impact and sustained growth, positioning your Seattle business for long-term success in the digital landscape.',
    },
  ],
  awards: {
    clutch: { headline: 'Top Seattle SEO Agency - Clutch 2024', text: 'Recognized by Clutch for excellence in Seattle SEO, particularly for tech companies, SaaS platforms, e-commerce businesses, and innovative startups. Our forward-thinking strategies and consistent results are acclaimed by clients.' },
    upcity: { headline: 'Seattle SEO Excellence - UpCity 2024', text: 'Awarded by UpCity for top-tier SEO services in Seattle, consistently helping businesses achieve their digital marketing goals in one of the nation\'s most competitive and innovative tech hubs. We drive success in the Pacific Northwest.' },
  },
  location: {
    officeImageUrl: GENERIC_OFFICE_LOCATION_IMAGE_SRC,
    streetAddress: '801 2nd Ave, Suite 400',
    addressLocality: 'Seattle',
    addressRegion: 'WA',
    postalCode: '98104',
    addressCountry: 'US',
    phone: CONTACT_DETAILS.phone,
    email: CONTACT_DETAILS.email,
    hasMap: 'https://goo.gl/maps/oPqR6sT7uV',
    geo: {
      latitude: '47.606200',
      longitude: '-122.332100',
    },
  },
  bottomFormTitle: 'Request Your SEO Consultation',
  faqSectionHeadline: 'Frequently Asked Questions about Seattle SEO',
  faqData: [
    {
      question: 'How much does SEO cost in Seattle, WA?',
      answer: 'SEO pricing in Seattle typically ranges from $1,200 to $2,500 per month. Pricing depends on your website’s existing condition, local competition, and your specific business goals. For example, a single-location tech startup may require a different strategy than a large e-commerce business or a multi-location service provider. We offer flexible plans customized for each Seattle business and provide detailed scopes before we begin.',
    },
    {
      question: 'How long until my Seattle business sees SEO results?',
      answer: 'Generally, Seattle businesses begin seeing measurable SEO traction within 3 to 4 months, depending on competition and industry. Some clients experience faster growth in niche industries, while others—especially those in highly competitive tech sectors—may require longer ramp-up due to keyword competitiveness. Real, sustained results typically compound by months 6 to 9. We provide regular reports and adjust our strategy as your site gains more authority in the Seattle market.',
    },
    {
      question: 'What industries do you specialize in for Seattle SEO?',
      answer: 'TRAC specializes in SEO for service-based businesses including tech startups, e-commerce, aerospace, and local service providers. We build dedicated strategies that align with each niche’s competitive search environment in Seattle. Our team conducts thorough research on both general and hyperlocal terms to help your business earn visibility where it matters most—whether you operate in South Lake Union, Capitol Hill, or Fremont.',
    },
    {
      question: 'Can you help my business rank in multiple Seattle areas?',
      answer: 'Absolutely. We build location-targeted landing pages for each area you serve—whether that’s Bellevue, Redmond, or Tacoma. These pages include unique content, optimized metadata, localized schema markup, and backlinks from trusted regional directories. We also track performance on a neighborhood level, so you know which areas are generating the most traction and which pages need further optimization. Multi-location SEO is one of our specialties.',
    },
    {
      question: 'Is TRAC a good fit for small businesses in Seattle?',
      answer: 'Yes. Our Seattle SEO solutions are perfect for small to mid-sized businesses aiming to generate consistent leads from search. We understand budget constraints and build lean, results-driven campaigns tailored to your service offerings and service radius. Whether you\'re a one-person consulting firm or a small boutique retail shop, our team ensures you get the most SEO value per dollar spent—without overwhelming jargon or bloated contracts.',
    },
    {
      question: 'Do you optimize for Seattle-specific search intent?',
      answer: 'Definitely. Our keyword research is hyper-targeted to how Seattle residents search—from mobile queries like “best coffee shop near me” to long-tail phrases like “top tech SEO agency Seattle”. We use real-time data, local modifiers, and behavioral trends to build content and metadata that reflect Seattle’s unique search landscape. This ensures your site ranks for the exact terms that drive leads—not just vanity keywords.',
    },
    {
      question: 'How do I find the best SEO agency in Seattle?',
      answer: 'TRAC is consistently recognized as a top SEO agency in Seattle, known for delivering measurable results and exceptional client satisfaction. Our data-driven strategies are designed to elevate your business\'s online presence and drive significant growth in the competitive Seattle market.',
    },
    {
      question: 'What are the benefits of local SEO for businesses in Seattle?',
      answer: 'Local SEO for your Seattle business can significantly increase your visibility in local search results, drive more foot traffic to your physical location, and attract highly qualified leads from customers in your immediate area. TRAC specializes in hyper-local strategies that connect you directly with your target audience in Seattle.',
    },
    {
      question: 'How can my business improve its Google ranking in Seattle?',
      answer: 'To improve your Google ranking in Seattle, focus on optimizing your Google Business Profile, creating localized content, building high-quality local backlinks, and ensuring your website is technically sound. TRAC offers comprehensive SEO services that cover all these aspects, helping your Seattle business climb to the top of search results.',
    },
  ],
}
