import type { CityPageData } from '@/types';
import { Search, Settings, Users, Mail, TrendingUp, Lightbulb, ShieldCheck, BarChart2, LineChart, MapPinned, Newspaper, Code, FileText, Link as LinkIcon, BarChart, CheckCircle, Edit, Link2 } from 'lucide-react';
import { CONTACT_DETAILS } from '@/lib/constants';

const GENERIC_CITY_HERO_IMAGE_SRC = '/trac-seo.jpg';
const GENERIC_OFFICE_LOCATION_IMAGE_SRC = 'https://cdn-icggj.nitrocdn.com/AphBmykuaGyxZijWArNhxcCiPzVdYZGT/assets/images/optimized/rev-d6d7292/thriveagency.com/files/Arlington-office-location.png';

export const sligoData: CityPageData = {
  slug: 'sligo',
  cityName: 'Sligo',
  metaKeywords: [
    'Sligo SEO agency for hospitality',
    'local SEO services Sligo town',
    'digital marketing for adventure tourism Sligo',
    'best SEO company in Sligo',
    'Sligo SEO consultant for artists',
    'affordable SEO packages Sligo',
    'Sligo web development and SEO',
    'content marketing for Sligo businesses',
    'Sligo social media marketing',
    'ecommerce SEO solutions Sligo',
    'Sligo SEO strategy 2025',
    'local link building Sligo',
  ],
  teamSectionHeadline: 'Meet Your Founder & CEO, Kaayf',
  teamSectionDescription: 'The visionary leader behind TRAC, dedicated to your success in Sligo.',
  founderBio: 'Kaayf, our Founder & CEO, brings over 15 years of digital marketing expertise to Sligo businesses. He is passionate about driving measurable ROI and building sustainable growth for clients in the local market. His leadership ensures TRAC delivers tailored SEO strategies that resonate with Sligo\'s unique business landscape.',
  roadmapSteps: [
    {
      icon: "Search",
      title: "Step 1: Yeats Country Market Analysis",
      description: "We begin by analyzing the unique Sligo market, identifying your top competitors and local search trends to build a data-driven SEO strategy.",
    },
    {
      icon: "CheckCircle",
      title: "Step 2: Hyper-Local Keyword Targeting",
      description: "Our experts uncover the high-intent keywords your Sligo customers are using, ensuring we attract the most qualified local traffic to your business.",
    },
    {
      icon: "BarChart2",
      title: "Step 3: Google Business Profile Optimization",
      description: "We meticulously optimize your Google Business Profile to dominate the local map pack in Sligo, driving direct calls, bookings, and website visits.",
    },
    {
      icon: "Edit",
      title: "Step 4: On-Page & Technical SEO",
      description: "We enhance your website’s structure, content, and technical health, ensuring it’s perfectly optimized for both search engines and a seamless user experience for your Sligo audience.",
    },
    {
      icon: "Link2",
      title: "Step 5: Local Link Building & Citations",
      description: "We build your online authority by acquiring high-quality backlinks from reputable Sligo and Irish businesses and directories, signaling trust and relevance to Google.",
    },
    {
      icon: "TrendingUp",
      title: "Step 6: Transparent Reporting & Strategy Evolution",
      description: "You receive clear, monthly reports detailing your progress. We continually refine our strategy based on data to maximize your ROI and keep you ahead of the competition in Sligo.",
    },
  ],
  faqSectionHeadline: 'Frequently Asked Questions about Sligo SEO',
  heroData: {
    pageTitle: 'Sligo SEO Services | Expert SEO Agency in Sligo',
    metaDescription: 'Expert SEO services in Sligo. We help local businesses increase their online visibility, attract more customers, and grow their revenue. Contact us today for a free SEO audit.',
    heroTitle: 'Sligo SEO Services: Grow Your Business in the West of Ireland',
    heroSubtitle: 'Tailored SEO Strategies for Sustainable Growth in Sligo',
    heroDescription: `Is your Sligo business getting lost in the digital landscape? In a town known for its vibrant arts scene and stunning natural beauty, standing out online requires a specialized approach. TRAC offers expert Sligo SEO services designed to connect you with your target audience, drive qualified leads, and deliver a tangible return on your investment.

We understand the unique character of the Sligo market. Our strategies are not generic; they are crafted to resonate with the local community and attract visitors interested in what Sligo has to offer. Imagine your business ranking for key phrases like "best SEO company in Sligo," "Sligo SEO agency for hospitality," or "local SEO services Sligo town." This is the kind of visibility that translates into real business growth.

Our process starts with a deep dive into your business, your competitors, and the Sligo search landscape. We then implement a comprehensive SEO strategy that includes technical optimization, content creation, and local link building. Our goal is to make your website a valuable resource for your target audience and a trusted authority in the eyes of search engines.

Whether you're a hotel on the Wild Atlantic Way, a restaurant in the town center, or a creative professional, TRAC has the expertise to help you succeed online. We combine data-driven insights with creative thinking to develop SEO campaigns that deliver results.

Don't let your competitors steal the spotlight in Sligo. Partner with TRAC, the trusted Sligo SEO agency that is committed to your success. We specialize in helping businesses like yours thrive in the digital world. Ready to grow your Sligo business? Contact us today for a free SEO consultation.`,
    heroImage: {
      src: GENERIC_CITY_HERO_IMAGE_SRC,
      alt: 'Sligo SEO Services by TRAC',
    },
    heroVideoUrl: 'https://www.youtube.com/embed/JBPmDzL-Xek',
    formTitle: 'Get Your Free SEO Quote!',
  },
  resultsHeadline: 'SEO Wins That Drive Business in Sligo',
  readyToGrowHeadline: 'Ready to Grow Your Sligo Business with SEO?',
  servicesSectionHeadline: 'SEO Services Tailored for the Sligo Market',
  servicesSectionSubheadline: 'From local search to creative industries, we offer a full suite of SEO services for Sligo businesses.',
  services: [
    {
      icon: Search,
      title: 'SEO',
      url: '/services/seo',
      description: 'Our core SEO services are designed to improve your organic rankings in Sligo. We use data-driven strategies to increase your visibility, drive qualified traffic, and generate leads for your business.',
    },
    {
      icon: BarChart2,
      title: 'PPC',
      url: '/services/ppc',
      description: 'Get immediate results with our targeted PPC campaigns. We create and manage high-performing ads on Google and other platforms to drive relevant traffic and maximize your return on investment in Sligo.',
    },
    {
      icon: Newspaper,
      title: 'Content Writing',
      url: '/services/content-writing',
      description: 'Engage your Sligo audience with high-quality, SEO-friendly content. Our writers create compelling blog posts, articles, and website copy that builds trust and converts visitors into customers.',
    },
    {
      icon: LineChart,
      title: 'Web Design and Development',
      url: '/services/web-design-and-development',
      description: 'We build beautiful, responsive websites that are optimized for user experience and conversions. Our web design and development services will help your Sligo business stand out from the competition.',
    },
    {
      icon: Users,
      title: 'Social Media Marketing',
      url: '/services/social-media-marketing',
      description: 'Connect with your Sligo customers on social media. We create and manage engaging social media campaigns that build your brand, foster community, and drive sales.',
    },
    {
      icon: Mail,
      title: 'Email Marketing',
      url: '/services/email-marketing',
      description: 'Nurture leads and build customer loyalty with our email marketing services. We create and manage effective email campaigns that deliver the right message to the right people at the right time in Sligo.',
    },
    {
        icon: ShieldCheck,
        title: 'Reputation Management',
        url: '/services/reputation-management',
        description: 'Protect and enhance your online reputation in Sligo. We monitor your brand, manage reviews, and implement strategies to ensure your business is always seen in a positive light.',
    },
    {
        icon: TrendingUp,
        title: 'eCommerce Optimization',
        url: '/services/ecommerce-optimization',
        description: 'Maximize your online sales with our ecommerce optimization services. We improve your product pages, streamline your checkout process, and increase your conversion rate for your Sligo ecommerce store.',
    },
    {
        icon: MapPinned,
        title: 'Amazon Marketing',
        url: '/services/amazon-marketing',
        description: 'Sell more on Amazon with our expert marketing services. We optimize your product listings, manage your ad campaigns, and help you grow your business on the world’s largest ecommerce platform from Sligo.',
    },
    {
      icon: Code,
      title: 'Technical SEO',
      url: '/services/technical-seo',
      description: 'Our technical SEO services ensure your website is optimized for search engines. We fix errors, improve site speed, and implement structured data to help your Sligo business rank higher.',
    },
    {
      icon: FileText,
      title: 'On-Page SEO',
      url: '/services/on-page-seo',
      description: 'We optimize your website’s content and structure to improve your rankings. Our on-page SEO services include keyword research, content optimization, and internal linking for your Sligo business.',
    },
    {
      icon: LinkIcon,
      title: 'Off-Page SEO / Link Building',
      url: '/services/off-page-seo',
      description: 'Build your website’s authority with our off-page SEO and link building services. We acquire high-quality backlinks from relevant websites to improve your rankings and drive traffic to your Sligo business.',
    },
    {
      icon: Settings,
      title: 'Schema Markup',
      url: '/services/schema-markup',
      description: 'We implement schema markup to help search engines understand your content. This can lead to rich snippets and other features that make your Sligo business stand out in search results.',
    },
    {
      icon: Search,
      title: 'Local SEO',
      url: '/services/local-seo',
      description: 'Our local SEO services help your Sligo business attract more customers from your local area. We optimize your Google Business Profile, build local citations, and create location-specific content.',
    },
    {
      icon: BarChart,
      title: 'SEO Audits',
      url: '/services/seo-audits',
      description: 'Get a comprehensive analysis of your website’s SEO performance. Our SEO audits identify areas for improvement and provide a roadmap for success for your Sligo business.',
    },
    {
      icon: CheckCircle,
      title: 'Content Marketing for SEO',
      url: '/services/content-marketing-for-seo',
      description: 'Our content marketing services are designed to attract, engage, and convert your target audience in Sligo. We create high-quality content that is optimized for search engines and drives results.',
    },
  ],
  whyChooseSectionHeadline: 'Why Choose TRAC for SEO in Sligo?',
  whyChooseIntro: 'Choosing the right SEO partner in Sligo is a critical decision for your business. TRAC combines local market knowledge with a proven track record of delivering exceptional results for businesses in Sligo.',
  whyChooseParagraph1: 'Sligo’s unique blend of creativity, tourism, and commerce requires a nuanced approach to SEO. Our team understands the local market dynamics and can create a strategy that resonates with your target audience. We don’t believe in one-size-fits-all solutions. We take the time to understand your business, your goals, and your customers to create a customized SEO plan that delivers results.',
  whyChooseParagraph2: 'We are committed to transparency and accountability. You will receive regular reports on our progress, and we are always available to answer your questions. Our goal is to become a trusted partner in your success. With TRAC, you get a team of experienced SEO professionals dedicated to helping your Sligo business grow.',
  whyChoosePoints: [
    {
      icon: 'TrendingUp',
      title: 'Growth-Focused Strategies',
      description: 'Our SEO strategies are designed to drive growth for your Sligo business. We focus on generating leads, increasing sales, and maximizing your return on investment.',
    },
    {
      icon: 'Lightbulb',
      title: 'Local Market Expertise',
      description: 'We have a deep understanding of the Sligo market. We know what it takes to succeed in this competitive landscape, and we use that knowledge to your advantage.',
    },
    {
      icon: 'ShieldCheck',
      title: 'Transparent & Ethical SEO',
      description: 'We believe in transparency and ethical SEO practices. You will always know what we are doing and why we are doing it. We are committed to your long-term success in Sligo.',
    },
    {
        icon: 'BarChart2',
        title: 'Data-Driven Approach',
        description: 'We use data to make informed decisions about your SEO strategy. We track our progress, analyze the results, and make adjustments as needed to ensure we are always on the right track for your Sligo business.',
    },
    {
        icon: 'Users',
        title: 'Dedicated Team of Experts',
        description: 'You will have a dedicated team of SEO experts working on your account. We are passionate about what we do, and we are committed to helping your Sligo business succeed.',
    },
    {
        icon: 'LineChart',
        title: 'Holistic Digital Marketing',
        description: 'We offer a holistic approach to digital marketing. We can help you with all aspects of your online presence, from SEO to PPC to social media, to ensure your Sligo business has a strong and cohesive brand.',
    },
  ],
  awards: {
    clutch: {
      headline: 'Recognized by Clutch: Top Sligo SEO Agency',
      text: 'TRAC was named a leading Sligo SEO provider for client satisfaction, transparent methods, and strong local results.',
    },
    upcity: {
      headline: 'SEO Impact Award – UpCity 2024',
      text: 'UpCity honored our Sligo SEO team for delivering measurable growth to local businesses.',
    },
  },
  location: {
    officeImageUrl: GENERIC_OFFICE_LOCATION_IMAGE_SRC,
    streetAddress: '1 Wine Street',
    addressLocality: 'Sligo',
    addressRegion: 'Co. Sligo',
    postalCode: 'F91 E1XF',
    addressCountry: 'IE',
    phone: CONTACT_DETAILS.phone,
    email: CONTACT_DETAILS.email,
    hasMap: 'https://goo.gl/maps/xHTreDepnQ72',
    geo: {
      latitude: '54.2766',
      longitude: '-8.4761',
    },
  },
  bottomFormTitle: 'Get Your Free SEO Proposal',
  faqData: [
    {
      question: 'How much do SEO services cost in Sligo?',
      answer: 'The cost of SEO services in Sligo can vary depending on your specific needs and goals. We offer a range of packages to fit different budgets. Contact us for a free, no-obligation quote.',
    },
    {
      question: 'How long does it take to see results from SEO in Sligo?',
      answer: 'The timeline for seeing results from SEO can vary, but most of our clients in Sligo start to see improvements within 3-6 months. We focus on sustainable, long-term growth.',
    },
    {
      question: 'What industries do you serve in Sligo?',
      answer: 'We work with a wide range of industries in Sligo, including tourism, hospitality, arts, and retail. We have the expertise to help any business succeed online.',
    },
    {
      question: 'Do you offer local SEO services in Sligo?',
      answer: 'Yes, we specialize in local SEO for businesses in Sligo. We can help you rank higher in local search results and attract more customers from your community.',
    },
    {
      question: 'Why should I choose TRAC for my Sligo business?',
      answer: 'TRAC is a results-driven SEO agency with a proven track record of success in Sligo. We are committed to helping our clients achieve their goals and grow their businesses.',
    },
    {
      question: 'How can I get started with your Sligo SEO services?',
      answer: 'Getting started is easy. Simply contact us to schedule a free consultation. We will discuss your needs and goals and recommend a customized SEO plan for your Sligo business.',
    },
  ],
};