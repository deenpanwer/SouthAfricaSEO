
import type { CityPageData } from '@/types';
import { Search, Settings, Users, Mail, BarChart2, TrendingUp, Lightbulb, ShieldCheck, LineChart, MapPinned, Newspaper, Code, FileText, Link as LinkIcon, BarChart, CheckCircle } from 'lucide-react';
import { CONTACT_DETAILS } from '@/lib/constants';

const GENERIC_CITY_HERO_IMAGE_SRC = 'https://cdn-icggj.nitrocdn.com/AphBmykuaGyxZijWArNhxcCiPzVdYZGT/assets/images/optimized/rev-d6d7292/thriveagency.com/files/SEO-Company.jpg';
const GENERIC_OFFICE_LOCATION_IMAGE_SRC = 'https://cdn-icggj.nitrocdn.com/AphBmykuaGyxZijWArNhxcCiPzVdYZGT/assets/images/optimized/rev-d6d7292/thriveagency.com/files/Cleveland-Thrive-office-location.jpg';

export const louisvilleData: CityPageData = {
  slug: 'louisville',
  cityName: 'Louisville',
  metaKeywords: [
    'Louisville SEO services for small businesses',
    'local SEO company Louisville',
    'SEO for healthcare in Louisville',
    'Bourbon Trail SEO experts',
    'Churchill Downs SEO Louisville',
    'Louisville small business SEO experts',
    'best SEO agency in Louisville',
    'SEO for logistics companies in Louisville',
    'Google Business optimization Louisville',
    'Louisville e-commerce SEO company'
  ],
  teamSectionHeadline: 'Meet Your Founder & CEO, Kaayf',
  teamSectionDescription: 'The visionary leader behind TRAC, dedicated to your success in Louisville.',
  founderBio: 'Kaayf, our Founder & CEO, brings over 15 years of digital marketing expertise to Louisville businesses. He is passionate about driving measurable ROI and building sustainable growth for clients in the local market. His leadership ensures TRAC delivers tailored SEO strategies that resonate with Louisville\'s unique business landscape.',
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
    pageTitle: 'Louisville SEO Services | TRAC - SEO Company Louisville, KY',
    metaDescription: 'TRAC is a Louisville SEO company boosting online visibility and organic traffic. Contact our Louisville SEO experts for a free SEO strategy session.',
    heroTitle: 'Louisville SEO Company: Gallop Ahead of the Competition',
    heroSubtitle: 'Rank Higher in Louisville with TRAC\'s Winning SEO Strategies',
    heroDescription: `Is your Louisville business struggling to capture the attention of local customers online? In a city as vibrant and diverse as Louisville, standing out requires more than just a website—it demands a strategic, results-driven SEO approach. TRAC offers expert Louisville SEO services designed to elevate your online presence, connect you with high-intent local searchers, and drive tangible growth for your business.

### Why Louisville Businesses Need Specialized SEO

Louisville's unique blend of historic charm and modern industry creates a distinct digital landscape. From the bustling downtown to the serene parks, and the academic hubs near the University of Louisville, each neighborhood presents unique opportunities and challenges. Generic SEO strategies simply won't cut it. You need a partner who understands the nuances of Louisville's market, the local search behavior, and how to position your business to attract customers actively seeking your services.

At TRAC, we specialize in crafting hyper-local SEO campaigns that resonate with the Louisville audience. We go beyond basic keyword targeting, delving into the specific phrases and questions your potential customers are using when they're ready to make a purchasing decision. Imagine your business appearing prominently for searches like "best SEO company Louisville," "hire SEO expert Louisville," "Louisville digital marketing agency for leads," or "local SEO services Louisville for small business." This is the power of our tailored approach.

### Our Comprehensive Louisville SEO Approach

Our process begins with a deep dive into your current online performance and the competitive landscape within Louisville. We analyze your website's technical health, ensuring it's fast, mobile-friendly, and easily discoverable by search engines. A strong technical foundation is crucial for ranking success.

Next, our content specialists develop compelling, authoritative content that not only ranks for critical local keywords but also establishes your business as a trusted authority in the Louisville market. We focus on creating content that answers user questions, addresses pain points, and guides them towards a conversion. This includes optimizing your Google Business Profile to dominate local map pack results, ensuring your business is the first one local customers see.

### Driving Measurable Results for Your Louisville Business

Whether you're a growing startup in NuLu, an established healthcare provider in the Medical Center, a thriving restaurant in The Highlands, or a service-based business expanding across Jefferson County, TRAC has a proven track record of helping Louisville businesses achieve their growth goals. We leverage advanced keyword research, local SEO strategies, and transparent reporting to ensure your investment translates into measurable ROI.

We don't just promise results; we deliver them. Our team provides monthly strategy sessions, detailed performance dashboards, and content calendars, keeping you informed and involved every step of the way. Our ethical, white-hat SEO tactics build long-term equity, protecting your rankings and fostering trust with both search engines and your customers.

Don't let your competitors capture the Louisville market. Partner with TRAC, the trusted Louisville SEO agency committed to driving your success. We specialize in helping businesses like yours increase online visibility, attract more qualified leads, and ultimately, dominate local search results. Ready to transform your online presence and achieve sustainable growth in Louisville? Contact us today for a free SEO analysis and discover the TRAC difference.`,
    heroImage: { src: GENERIC_CITY_HERO_IMAGE_SRC, alt: 'SEO Services in Louisville, KY', dataAiHint: 'Louisville city business' },
    heroVideoUrl: 'https://www.youtube.com/embed/JBPmDzL-Xek',
    formTitle: 'Get Your FREE Louisville SEO Review!',
  },
  resultsHeadline: 'Delivering Winning SEO Results for Louisville Businesses',
  readyToGrowHeadline: 'Ready to Elevate Your Louisville Business with SEO?',
  servicesSectionHeadline: 'Louisville SEO Solutions: Tailored for the Bluegrass State',
  servicesSectionSubheadline: 'Our SEO services are designed to help your Louisville business succeed online through better search visibility and targeted local strategies, maximizing your reach in Kentucky.',
  services: [
    {
      icon: Search,
      title: 'SEO',
      url: '/services/seo',
      description: 'Elevate your website\'s visibility in Louisville\'s competitive search landscape with our core SEO services. We employ advanced, data-driven strategies to significantly improve your organic rankings, driving a consistent flow of qualified traffic and generating valuable leads for your business. Our comprehensive approach ensures sustainable growth and a strong online presence tailored to the Louisville market.',
    },
    {
      icon: BarChart2,
      title: 'PPC',
      url: '/services/ppc',
      description: 'Maximize your immediate online impact in Louisville with our expertly managed Pay-Per-Click (PPC) campaigns. We specialize in creating high-performing ads across major platforms like Google Ads, delivering highly targeted traffic directly to your website. Our continuous optimization of bids, keywords, and ad copy ensures your campaigns are efficient, effective, and drive maximum return on ad spend for your Louisville business.',
    },
    {
      icon: Newspaper,
      title: 'Content Writing',
      url: '/services/content-writing',
      description: 'Engage your Louisville audience and establish your brand as an authority with our compelling, SEO-friendly content writing services. Our experienced team crafts high-quality blog posts, articles, website copy, and landing pages that not only attract search engines but also resonate with your target customers, building trust and credibility while converting visitors into loyal clients in the Louisville market.',
    },
    {
      icon: LineChart,
      title: 'Web Design and Development',
      url: '/services/web-design-and-development',
      description: 'Transform your online presence with our expert web design and development services. We create beautiful, responsive, and high-performing websites meticulously optimized for exceptional user experience and maximum conversions. Our focus is on delivering visually appealing and functionally robust platforms that reflect your brand identity and drive business growth through intuitive navigation, fast loading times, and seamless interactions for your Louisville customers.',
    },
    {
      icon: Users,
      title: 'Social Media Marketing',
      url: '/services/social-media-marketing',
      description: 'Forge meaningful connections with your Louisville audience across various social media platforms with our expert marketing strategies. We design campaigns to build a strong brand presence, foster community engagement, and drive measurable results. Our team manages your social channels, create compelling content, and run targeted campaigns to expand your reach and cultivate a loyal customer base within the Louisville community.',
    },
    {
      icon: Mail,
      title: 'Email Marketing',
      url: '/services/email-marketing',
      description: 'Nurture leads and drive conversions with our highly effective email marketing campaigns. We develop and manage engaging newsletters and automated personalized drip campaigns designed to keep your audience informed, interested, and ready to take action. Our strategies focus on delivering the right message to the right person at the right time, building customer loyalty and driving business growth for your Louisville enterprise.',
    },
    {
        icon: ShieldCheck,
        title: 'Reputation Management',
        url: '/services/reputation-management',
        description: 'Proactively build and maintain a stellar online reputation in Louisville with our comprehensive reputation management services. We ensure your customers consistently see the best of your brand across all digital channels, addressing feedback, highlighting positive reviews, and implementing proactive measures to safeguard your brand’s image. Foster trust and credibility among your target audience and enhance your business standing in the Louisville community.',
    },
    {
        icon: TrendingUp,
        title: 'eCommerce Optimization',
        url: '/services/ecommerce-optimization',
        description: 'Maximize sales and profitability for your e-commerce store with our specialized optimization services. Our comprehensive approach enhances product pages, streamlines the checkout process, and improves site speed and mobile responsiveness. We focus on creating a seamless shopping experience that encourages conversions and drives significant revenue growth for your online business, ensuring your Louisville-based e-commerce venture thrives.',
    },
    {
        icon: MapPinned,
        title: 'Amazon Marketing',
        url: '/services/amazon-marketing',
        description: 'Empower your success on the world\'s largest online marketplace with our expert Amazon marketing services. Our team develops and executes tailored strategies to boost your product visibility, drive sales, and maximize your return on investment. From optimizing product listings to managing Amazon PPC campaigns, we help your Louisville-based business dominate the competitive Amazon landscape and reach millions of potential customers.',
    },
    {
      icon: Code,
      title: 'Technical SEO',
      url: '',
      description: 'Our technical SEO services focus on optimizing your website\'s infrastructure to ensure seamless crawling and indexing by search engines. We address critical elements like site speed, mobile-friendliness, structured data, and site architecture. A robust technical foundation is crucial for search engine visibility, allowing your content to be discovered and ranked effectively, ultimately improving your organic performance and ensuring your Louisville business is easily found online.',
    },
    {
      icon: FileText,
      title: 'On-Page SEO',
      url: '',
      description: 'Optimize individual web pages to rank higher and earn more relevant traffic from search engines with our on-page SEO services. Our process includes meticulous keyword research, compelling content optimization, strategic internal linking, and meta tag enhancements. By aligning your page content with user intent and search engine best practices, we ensure your pages are highly visible and attractive to both users and algorithms, driving targeted traffic to your Louisville business.',
    },
    {
      icon: LinkIcon,
      title: 'Off-Page SEO / Link Building',
      url: '',
      description: 'Significantly improve your website\'s authority and relevance through external signals with our off-page SEO and link building strategies. We focus on acquiring high-quality, natural backlinks from reputable sources, enhancing your domain authority and search engine trust. This crucial aspect of SEO helps your website rank higher for competitive keywords and drives more referral traffic, solidifying your online presence in Louisville.',
    },
    {
      icon: Settings,
      title: 'Schema Markup',
      url: '',
      description: 'Enhance search engine understanding of your content and achieve rich results in SERPs with our Schema Markup implementation. We meticulously apply relevant schema types to your website, providing search engines with explicit clues about your page’s meaning. This can lead to enhanced listings like star ratings, product information, or event details, significantly boosting click-through rates and improving your visibility in Louisville search results.',
    },
    {
      icon: Search,
      title: 'Local SEO',
      url: '',
      description: 'Optimize your online presence to attract more business from local searches in Louisville with our dedicated local SEO services. We focus on Google Business Profile optimization, local citation building, and geo-targeted content creation. This ensures your business appears prominently in local map packs and search results, connecting you directly with nearby customers actively seeking your products or services in Louisville.',
    },
    {
      icon: BarChart,
      title: 'SEO Audits',
      url: '',
      description: 'Gain a clear understanding of your website\'s current performance and identify critical areas for improvement with our comprehensive SEO audits. We meticulously examine technical aspects, on-page elements, off-page factors, and content quality. Our audit delivers actionable recommendations and a clear roadmap to address deficiencies, capitalize on opportunities, and significantly enhance your overall search engine visibility and organic traffic for your Louisville business.',
    },
    {
      icon: CheckCircle,
      title: 'Content Marketing for SEO',
      url: '',
      description: 'Attract and retain your target audience in Louisville with our content marketing for SEO services. We focus on creating and distributing valuable, relevant, and consistent content. We develop content strategies aligned with your SEO goals, ensuring every piece of content is optimized for target keywords and user intent. This approach not only improves rankings but also establishes your brand as a thought leader in the Louisville market.',
    },
  ],
  whyChooseSectionHeadline: 'TRAC: Your Louisville SEO Experts for a Strong Finish',
  whyChooseIntro: 'Choose TRAC for effective SEO strategies tailored to the Louisville market. We understand the local business landscape and are committed to helping you cross the finish line first in search rankings through proven, data-driven techniques.',
  whyChooseParagraph1: 'Our team understands the Louisville business environment, from its historic roots and iconic industries like bourbon and horse racing to its modern growth in healthcare and logistics. We know how to craft SEO strategies that resonate with the local community and achieve tangible success for businesses of all sizes in Louisville. Our approach is data-driven and client-focused.',
  whyChooseParagraph2: 'We use ethical, cutting-edge SEO techniques to deliver sustainable results for our Louisville clients. Our focus is on transparency, collaboration, and achieving your specific business goals through targeted search engine optimization that makes a real difference in the competitive Louisville market. We stay ahead of algorithm changes to ensure your continued success.',
  whyChoosePoints: [
    {
      icon: 'TrendingUp',
      title: 'Search Growth That Converts',
      description: 'Our strategies are meticulously designed to go beyond mere rankings, focusing on generating high-quality leads, increasing bookings, and driving substantial revenue for your Louisville business through precise, high-intent keyword targeting and conversion optimization.',
    },
    {
      icon: 'Lightbulb',
      title: 'Deep Local Knowledge',
      description: 'Leverage our profound understanding of Louisville’s dynamic digital patterns. From emerging businesses in NuLu to established healthcare providers and thriving bourbon distilleries, we utilize deep market intelligence to shape SEO campaigns that resonate specifically with your local audience and competitive landscape.',
    },
    {
      icon: 'ShieldCheck',
      title: 'Trustworthy SEO Execution',
      description: 'Experience complete peace of mind with our fully transparent SEO services. We provide clear, accessible dashboards, regular performance reports, and open communication, ensuring you always know the exact status of your campaign and the tangible results we are achieving for your Louisville business.',
    },
    {
        icon: 'BarChart2',
        title: 'Data-Driven Strategies',
        description: 'Our campaigns are built on a foundation of rigorous data analysis and continuous optimization. We provide transparent, detailed reports that clearly demonstrate the return on your SEO investment, ensuring every decision is backed by measurable insights for your Louisville business.',
    },
    {
        icon: 'Users',
        title: 'Dedicated Team of Experts',
        description: 'Benefit from a dedicated team of SEO experts, content strategists, and web developers committed to your success. Our specialists bring collective expertise and a personalized approach to every aspect of your campaign, ensuring your Louisville business receives the highest level of service and support.',
    },
    {
        icon: 'LineChart',
        title: 'Holistic Approach',
        description: 'We adopt a holistic approach to your online growth, seamlessly integrating SEO with other digital marketing channels to create a comprehensive and synergistic strategy. This ensures maximum impact and sustained growth, positioning your Louisville business for long-term success in the digital landscape.',
    },
  ],
  awards: {
    clutch: { headline: 'Top Louisville SEO Agency - Clutch 2024', text: 'Recognized by Clutch for delivering exceptional SEO excellence and client satisfaction to businesses in the Louisville area. Our strategic approach and focus on results are consistently praised.' },
    upcity: { headline: 'Louisville SEO Excellence - UpCity 2024', text: 'Awarded by UpCity for top-tier SEO services and consistent success in helping Louisville businesses achieve their online goals and improve their digital presence in Kentucky and beyond.' },
  },
  location: {
    officeImageUrl: GENERIC_OFFICE_LOCATION_IMAGE_SRC,
    streetAddress: '1111 St, Suite 120',
    addressLocality: 'Louisville',
    addressRegion: 'KY',
    postalCode: '40201',
    addressCountry: 'US',
    phone: CONTACT_DETAILS.phone,
    email: CONTACT_DETAILS.email,
    hasMap: 'https://goo.gl/maps/qRsTuVwXyZ',
    geo: {
      latitude: '38.252700',
      longitude: '-85.758500',
    },
  },
  bottomFormTitle: 'Request Your SEO Strategy',
  faqSectionHeadline: 'Louisville SEO FAQs: What Local Businesses Need to Know',
  faqData: [
    {
      question: 'How much does SEO cost in Louisville, KY?',
      answer: 'SEO pricing in Louisville typically ranges from $1,200 to $2,500 per month. Pricing depends on your website’s existing condition, local competition, and your specific business goals. For example, a single-location boutique may require a different strategy than a large healthcare system with multiple facilities or a logistics company targeting various sectors. We offer flexible plans customized for each Louisville business and provide detailed scopes before we begin.',
    },
    {
      question: 'How long until my Louisville business sees SEO results?',
      answer: 'Generally, Louisville businesses begin seeing measurable SEO traction within 3 to 4 months, depending on competition and industry. Some clients experience faster growth in niche industries, while others—especially those in healthcare or legal—may require longer ramp-up due to keyword competitiveness. Real, sustained results typically compound by months 6 to 9. We provide regular reports and adjust our strategy as your site gains more authority in the Louisville market.',
    },
    {
      question: 'What industries do you specialize in for Louisville SEO?',
      answer: 'TRAC specializes in SEO for service-based businesses including healthcare, logistics, manufacturing, bourbon distilleries, retail, and more. We build dedicated strategies that align with each niche’s competitive search environment in Louisville. Our team conducts thorough research on both general and hyperlocal terms to help your business earn visibility where it matters most—whether you operate in NuLu, The Highlands, or near Churchill Downs.',
    },
    {
      question: 'Can you help my business rank in multiple Louisville areas?',
      answer: 'Absolutely. We build location-targeted landing pages for each area you serve—whether that’s downtown Louisville, East Market District, or St. Matthews. These pages include unique content, optimized metadata, localized schema markup, and backlinks from trusted regional directories. We also track performance on a neighborhood level, so you know which areas are generating the most traction and which pages need further optimization. Multi-location SEO is one of our specialties.',
    },
    {
      question: 'Is TRAC a good fit for small businesses in Louisville?',
      answer: 'Yes. Our Louisville SEO solutions are perfect for small to mid-sized businesses aiming to generate consistent leads from search. We understand budget constraints and build lean, results-driven campaigns tailored to your service offerings and service radius. Whether you\'re a one-person cafe or a small boutique law firm, our team ensures you get the most SEO value per dollar spent—without overwhelming jargon or bloated contracts.',
    },
    {
      question: 'Do you optimize for Louisville-specific search intent?',
      answer: 'Definitely. Our keyword research is hyper-targeted to how Louisville residents search—from mobile queries like “best bourbon tour near me” to long-tail phrases like “top restaurants in The Highlands”. We use real-time data, local modifiers, and behavioral trends to build content and metadata that reflect Louisville’s unique search landscape. This ensures your site ranks for the exact terms that drive leads—not just vanity keywords.',
    },
    {
      question: 'How do I find the best SEO agency in Louisville?',
      answer: 'TRAC is consistently recognized as a top SEO agency in Louisville, known for delivering measurable results and exceptional client satisfaction. Our data-driven strategies are designed to elevate your business\'s online presence and drive significant growth in the competitive Louisville market.',
    },
    {
      question: 'What are the benefits of local SEO for businesses in Louisville?',
      answer: 'Local SEO for your Louisville business can significantly increase your visibility in local search results, drive more foot traffic to your physical location, and attract highly qualified leads from customers in your immediate area. TRAC specializes in hyper-local strategies that connect you directly with your target audience in Louisville.',
    },
    {
      question: 'How can my business improve its Google ranking in Louisville?',
      answer: 'To improve your Google ranking in Louisville, focus on optimizing your Google Business Profile, creating localized content, building high-quality local backlinks, and ensuring your website is technically sound. TRAC offers comprehensive SEO services that cover all these aspects, helping your Louisville business climb to the top of search results.',
    },
  ]
};
