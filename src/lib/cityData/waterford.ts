import type { CityPageData } from '@/types';
import { Search, Settings, Users, Mail, TrendingUp, Lightbulb, ShieldCheck, BarChart2, LineChart, MapPinned, Newspaper, Code, FileText, Link as LinkIcon, BarChart, CheckCircle, Edit, Link2 } from 'lucide-react';
import { CONTACT_DETAILS } from '@/lib/constants';

const GENERIC_CITY_HERO_IMAGE_SRC = '/trac-seo.jpg';
const GENERIC_OFFICE_LOCATION_IMAGE_SRC = 'https://cdn-icggj.nitrocdn.com/AphBmykuaGyxZijWArNhxcCiPzVdYZGT/assets/images/optimized/rev-d6d7292/thriveagency.com/files/Arlington-office-location.png';

export const waterfordData: CityPageData = {
  slug: 'waterford',
  cityName: 'Waterford',
  metaKeywords: [
    'Waterford SEO company for small business',
    'local SEO services Waterford city',
    'ecommerce SEO agency Waterford Ireland',
    'Waterford digital marketing for tourism',
    'best SEO experts in Waterford',
    'affordable SEO packages Waterford',
    'Waterford SEO consultant for startups',
    'content marketing services Waterford',
    'Waterford web design and SEO',
    'Google Maps ranking Waterford',
    'Waterford SEO audit and strategy',
    'lead generation for Waterford businesses',
  ],
  teamSectionHeadline: 'Meet Your Founder & CEO, Kaayf',
  teamSectionDescription: 'The visionary leader behind TRAC, dedicated to your success in Waterford.',
  founderBio: 'Kaayf, our Founder & CEO, brings over 15 years of digital marketing expertise to Waterford businesses. He is passionate about driving measurable ROI and building sustainable growth for clients in the local market. His leadership ensures TRAC delivers tailored SEO strategies that resonate with Waterford\'s unique business landscape.',
  roadmapSteps: [
    {
      icon: "Search",
      title: "Step 1: Viking Triangle Deep Dive",
      description: "We begin by exploring Waterford's unique digital landscape, analyzing competitors from the Viking Triangle to the Retail Park, to build a data-driven SEO strategy.",
    },
    {
      icon: "CheckCircle",
      title: "Step 2: Hyper-Local Keyword Crafting",
      description: "Our specialists identify high-intent keywords that your Waterford customers are using, ensuring we attract the most qualified local traffic to your business.",
    },
    {
      icon: "BarChart2",
      title: "Step 3: Google Business Profile Mastery",
      description: "We optimize your Google Business Profile to dominate the local map pack in Waterford, driving direct calls, bookings, and website visits from customers in your area.",
    },
    {
      icon: "Edit",
      title: "Step 4: On-Page & Technical SEO Refinement",
      description: "We enhance your website’s structure, content, and technical health, ensuring it’s perfectly optimized for both search engines and a seamless user experience for your Waterford audience.",
    },
    {
      icon: "Link2",
      title: "Step 5: Local Link Building & Citations",
      description: "We build your online authority by acquiring high-quality backlinks from reputable Waterford and Irish businesses and directories, signaling trust and relevance to Google.",
    },
    {
      icon: "TrendingUp",
      title: "Step 6: Transparent Reporting & Strategy Evolution",
      description: "You receive clear, monthly reports detailing your progress. We continually refine our strategy based on data to maximize your ROI and keep you ahead of the competition in Waterford.",
    },
  ],
  faqSectionHeadline: 'Frequently Asked Questions about Waterford SEO',
  heroData: {
    pageTitle: 'Waterford SEO Services | Expert SEO Agency in Waterford',
    metaDescription: 'Expert SEO services in Waterford. We help local businesses increase their online visibility, attract more customers, and grow their revenue. Contact us today for a free SEO audit.',
    heroTitle: 'Waterford SEO Services: Propel Your Business to the Top',
    heroSubtitle: 'Custom SEO Strategies for Measurable Growth in Waterford',
    heroDescription: `Is your Waterford business struggling to make an impact online? In a city with a rich history and a growing economy, simply having a website is not enough. You need a strategic approach to SEO that connects you with customers actively searching for your services. TRAC provides expert Waterford SEO services designed to elevate your online presence, generate high-quality leads, and deliver a significant return on your investment.

We understand the nuances of the Waterford market, from the bustling city center to the surrounding towns. Our strategies are not generic; they are tailored to capture the specific search intent of your local audience. Imagine your business ranking for high-value terms like "best local SEO services Waterford," "Waterford SEO company for small business," or "affordable SEO packages Waterford." This is the level of visibility that drives real growth.

Our process begins with a comprehensive analysis of your current online performance, your competitors, and the local search landscape. We then implement a robust technical SEO foundation, ensuring your website is fast, mobile-friendly, and easily indexed by search engines. Our content team creates authoritative, engaging content that targets your keywords and establishes your business as a leader in the Waterford market.

Whether you're a tourism operator in the Viking Triangle, a retail store in the city center, or a service provider in the wider Waterford area, TRAC has the expertise to help you succeed. We combine advanced keyword research, local SEO tactics, and transparent reporting to deliver results you can see.

Don't let your competitors dominate the digital space in Waterford. Partner with TRAC, the trusted Waterford SEO agency committed to your success. We specialize in helping businesses like yours increase their online visibility, attract more customers, and achieve sustainable growth. Ready to take your Waterford business to the next level? Contact us today for a free, no-obligation SEO analysis.`,
    heroImage: {
      src: GENERIC_CITY_HERO_IMAGE_SRC,
      alt: 'Waterford SEO Services by TRAC',
    },
    heroVideoUrl: 'https://www.youtube.com/embed/JBPmDzL-Xek',
    formTitle: 'Get Your Free SEO Quote!',
  },
  resultsHeadline: 'SEO Wins That Drive Business in Waterford',
  readyToGrowHeadline: 'Ready to Grow Your Waterford Business with SEO?',
  servicesSectionHeadline: 'SEO Services Tailored for the Waterford Market',
  servicesSectionSubheadline: 'From local search to e-commerce, we offer a full suite of SEO services for Waterford businesses.',
  services: [
    {
      icon: Search,
      title: 'SEO',
      url: '',
      description: 'Our core SEO services are designed to improve your organic rankings in Waterford. We use data-driven strategies to increase your visibility, drive qualified traffic, and generate leads for your business.',
    },
    {
      icon: BarChart2,
      title: 'PPC',
      url: '/services/ppc',
      description: 'Get immediate results with our targeted PPC campaigns. We create and manage high-performing ads on Google and other platforms to drive relevant traffic and maximize your return on investment in Waterford.',
    },
    {
      icon: Newspaper,
      title: 'Content Writing',
      url: '/services/content-writing',
      description: 'Engage your Waterford audience with high-quality, SEO-friendly content. Our writers create compelling blog posts, articles, and website copy that builds trust and converts visitors into customers.',
    },
    {
      icon: LineChart,
      title: 'Web Design and Development',
      url: '/services/web-design-and-development',
      description: 'We build beautiful, responsive websites that are optimized for user experience and conversions. Our web design and development services will help your Waterford business stand out from the competition.',
    },
    {
      icon: Users,
      title: 'Social Media Marketing',
      url: '/services/social-media-marketing',
      description: 'Connect with your Waterford customers on social media. We create and manage engaging social media campaigns that build your brand, foster community, and drive sales.',
    },
    {
      icon: Mail,
      title: 'Email Marketing',
      url: '/services/email-marketing',
      description: 'Nurture leads and build customer loyalty with our email marketing services. We create and manage effective email campaigns that deliver the right message to the right people at the right time in Waterford.',
    },
    {
        icon: ShieldCheck,
        title: 'Reputation Management',
        url: '/services/reputation-management',
        description: 'Protect and enhance your online reputation in Waterford. We monitor your brand, manage reviews, and implement strategies to ensure your business is always seen in a positive light.',
    },
    {
        icon: TrendingUp,
        title: 'eCommerce Optimization',
        url: '/services/ecommerce-optimization',
        description: 'Maximize your online sales with our ecommerce optimization services. We improve your product pages, streamline your checkout process, and increase your conversion rate for your Waterford ecommerce store.',
    },
    {
        icon: MapPinned,
        title: 'Amazon Marketing',
        url: '/services/amazon-marketing',
        description: 'Sell more on Amazon with our expert marketing services. We optimize your product listings, manage your ad campaigns, and help you grow your business on the world’s largest ecommerce platform from Waterford.',
    },
    {
      icon: Code,
      title: 'Technical SEO',
      url: '/services/technical-seo',
      description: 'Our technical SEO services ensure your website is optimized for search engines. We fix errors, improve site speed, and implement structured data to help your Waterford business rank higher.',
    },
    {
      icon: FileText,
      title: 'On-Page SEO',
      url: '/services/on-page-seo',
      description: 'We optimize your website’s content and structure to improve your rankings. Our on-page SEO services include keyword research, content optimization, and internal linking for your Waterford business.',
    },
    {
      icon: LinkIcon,
      title: 'Off-Page SEO / Link Building',
      url: '/services/off-page-seo',
      description: 'Build your website’s authority with our off-page SEO and link building services. We acquire high-quality backlinks from relevant websites to improve your rankings and drive traffic to your Waterford business.',
    },
    {
      icon: Settings,
      title: 'Schema Markup',
      url: '/services/schema-markup',
      description: 'We implement schema markup to help search engines understand your content. This can lead to rich snippets and other features that make your Waterford business stand out in search results.',
    },
    {
      icon: Search,
      title: 'Local SEO',
      url: '/services/local-seo',
      description: 'Our local SEO services help your Waterford business attract more customers from your local area. We optimize your Google Business Profile, build local citations, and create location-specific content.',
    },
    {
      icon: BarChart,
      title: 'SEO Audits',
      url: '/services/seo-audits',
      description: 'Get a comprehensive analysis of your website’s SEO performance. Our SEO audits identify areas for improvement and provide a roadmap for success for your Waterford business.',
    },
    {
      icon: CheckCircle,
      title: 'Content Marketing for SEO',
      url: '/services/content-marketing-for-seo',
      description: 'Our content marketing services are designed to attract, engage, and convert your target audience in Waterford. We create high-quality content that is optimized for search engines and drives results.',
    },
  ],
  whyChooseSectionHeadline: 'Why Choose TRAC for SEO in Waterford?',
  whyChooseIntro: 'Choosing the right SEO partner in Waterford is a critical decision for your business. TRAC combines local market knowledge with a proven track record of delivering exceptional results for businesses in Waterford.',
  whyChooseParagraph1: 'Waterford’s unique blend of history, culture, and commerce requires a nuanced approach to SEO. Our team understands the local market dynamics and can create a strategy that resonates with your target audience. We don’t believe in one-size-fits-all solutions. We take the time to understand your business, your goals, and your customers to create a customized SEO plan that delivers results.',
  whyChooseParagraph2: 'We are committed to transparency and accountability. You will receive regular reports on our progress, and we are always available to answer your questions. Our goal is to become a trusted partner in your success. With TRAC, you get a team of experienced SEO professionals dedicated to helping your Waterford business grow.',
  whyChoosePoints: [
    {
      icon: 'TrendingUp',
      title: 'Growth-Focused Strategies',
      description: 'Our SEO strategies are designed to drive growth for your Waterford business. We focus on generating leads, increasing sales, and maximizing your return on investment.',
    },
    {
      icon: 'Lightbulb',
      title: 'Local Market Expertise',
      description: 'We have a deep understanding of the Waterford market.. We know what it takes to succeed in this competitive landscape, and we use that knowledge to your advantage.',
    },
    {
      icon: 'ShieldCheck',
      title: 'Transparent & Ethical SEO',
      description: 'We believe in transparency and ethical SEO practices. You will always know what we are doing and why we are doing it. We are committed to your long-term success in Waterford.',
    },
    {
        icon: 'BarChart2',
        title: 'Data-Driven Approach',
        description: 'We use data to make informed decisions about your SEO strategy. We track our progress, analyze the results, and make adjustments as needed to ensure we are always on the right track for your Waterford business.',
    },
    {
        icon: 'Users',
        title: 'Dedicated Team of Experts',
        description: 'You will have a dedicated team of SEO experts working on your account. We are passionate about what we do, and we are committed to helping your Waterford business succeed.',
    },
    {
        icon: 'LineChart',
        title: 'Holistic Digital Marketing',
        description: 'We offer a holistic approach to digital marketing. We can help you with all aspects of your online presence, from SEO to PPC to social media, to ensure your Waterford business has a strong and cohesive brand.',
    },
  ],
  awards: {
    clutch: {
      headline: 'Recognized by Clutch: Top Waterford SEO Agency',
      text: 'TRAC was named a leading Waterford SEO provider for client satisfaction, transparent methods, and strong local results.',
    },
    upcity: {
      headline: 'SEO Impact Award – UpCity 2024',
      text: 'UpCity honored our Waterford SEO team for delivering measurable growth to local businesses.',
    },
  },
  location: {
    officeImageUrl: GENERIC_OFFICE_LOCATION_IMAGE_SRC,
    streetAddress: '44 The Quay',
    addressLocality: 'Waterford',
    addressRegion: 'Co. Waterford',
    postalCode: 'X91 D452',
    addressCountry: 'IE',
    phone: CONTACT_DETAILS.phone,
    email: CONTACT_DETAILS.email,
    hasMap: 'https://goo.gl/maps/xHTreDepnQ72',
    geo: {
      latitude: '52.2603',
      longitude: '-7.1094',
    },
  },
  bottomFormTitle: 'Get Your Free SEO Proposal',
  faqData: [
    {
      question: 'How much do SEO services cost in Waterford?',
      answer: 'The cost of SEO services in Waterford can vary depending on your specific needs and goals. We offer a range of packages to fit different budgets. Contact us for a free, no-obligation quote.',
    },
    {
      question: 'How long does it take to see results from SEO in Waterford?',
      answer: 'The timeline for seeing results from SEO can vary, but most of our clients in Waterford start to see improvements within 3-6 months. We focus on sustainable, long-term growth.',
    },
    {
      question: 'What industries do you serve in Waterford?',
      answer: 'We work with a wide range of industries in Waterford, including tourism, retail, hospitality, and professional services. We have the expertise to help any business succeed online.',
    },
    {
      question: 'Do you offer local SEO services in Waterford?',
      answer: 'Yes, we specialize in local SEO for businesses in Waterford. We can help you rank higher in local search results and attract more customers from your community.',
    },
    {
      question: 'Why should I choose TRAC for my Waterford business?',
      answer: 'TRAC is a results-driven SEO agency with a proven track record of success in Waterford. We are committed to helping our clients achieve their goals and grow their businesses.',
    },
    {
      question: 'How can I get started with your Waterford SEO services?',
      answer: 'Getting started is easy. Simply contact us to schedule a free consultation. We will discuss your needs and goals and recommend a customized SEO plan for your Waterford business.',
    },
  ],
};