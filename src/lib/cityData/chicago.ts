import type { CityPageData } from '@/types';
import { Briefcase, Search, BarChart2, Users, Settings, Mail, TrendingUp, Lightbulb, ShieldCheck, Globe, LineChart } from 'lucide-react';
import { CONTACT_DETAILS } from '@/lib/constants';

const GENERIC_CITY_HERO_IMAGE_SRC = '/trac-seo.jpg';
const GENERIC_OFFICE_LOCATION_IMAGE_SRC = 'https://cdn-icggj.nitrocdn.com/AphBmykuaGyxZijWArNhxcCiPzVdYZGT/assets/images/optimized/rev-d6d7292/thriveagency.com/files/Chicago-Thrive-office-location.jpg';

export const chicagoData: CityPageData = {
  slug: 'chicago',
  cityName: 'Chicago',
  metaKeywords: [
    'Chicago SEO agency',
    'local SEO company Chicago',
    'SEO for law firms Chicago',
    'restaurant SEO in Chicago',
    'Windy City SEO consultants',
    'Chicago digital marketing firm',
    'affordable SEO Chicago IL',
    'technical SEO audit Chicago',
    'Chicago local search optimization',
    'SEO experts for Chicago startups'
  ],
  teamSectionHeadline: 'Meet Your Founder & CEO, Kaayf',
  teamSectionDescription: 'The visionary leader behind TRAC, dedicated to your success in Chicago.',
  founderBio: 'Kaayf, our Founder & CEO, brings over 15 years of digital marketing expertise to Chicago businesses. He is passionate about driving measurable ROI and building sustainable growth for clients in the local market. His leadership ensures TRAC delivers tailored SEO strategies that resonate with Chicago\'s unique business landscape.',
  heroData: {
    pageTitle: 'Chicago SEO Agency | TRAC - Expert SEO Services in Chicago, IL',
    metaDescription: 'TRAC is your trusted Chicago SEO agency. We help businesses in Chicago improve search rankings, drive targeted organic traffic, and significantly increase sales. Contact us for a free SEO audit and strategy session!',
    heroTitle: 'Chicago SEO Company: Driving Growth in the Windy City',
    heroSubtitle: 'Boost Your Visibility & Outperform Competitors in Chicago with TRAC\'s Expert SEO Expertise',
    heroDescription: `In a city as vast, competitive, and fast-paced as Chicago, standing out online requires more than just basic SEO—it demands precision, deep local expertise, and a partner who truly understands the pulse of the Windy City. Is your Chicago business struggling to capture the attention of local customers actively searching for your services? In a market renowned for its iconic skyline, diverse neighborhoods, and thriving industries, simply existing online isn't enough. You need a hyper-local SEO strategy that connects you directly with customers ready to engage and convert. TRAC offers expert Chicago SEO services designed to transform your online visibility, drive qualified leads, and deliver measurable return on investment.

We understand the unique rhythm of Chicago, from the bustling Loop to the vibrant River North and the historic charm of Lincoln Park. Our approach goes beyond generic keywords, focusing on high-intent, localized search terms that capture genuine buying intent. Imagine your business appearing at the top of search results for phrases like "best SEO company in Chicago," "hire SEO expert Chicago," or "Chicago digital marketing agency for leads." That's the power of TRAC's tailored SEO solutions.

Our comprehensive Chicago SEO campaigns begin with a deep dive into your current online performance and the competitive landscape specific to your industry within Chicago. We meticulously optimize your technical SEO, ensuring your website is fast, mobile-friendly, and easily discoverable by search engines. Then, our content specialists craft compelling, authoritative content that not only ranks for critical keywords but also resonates deeply with your target audience, establishing your business as a leader in the Chicago market.

Whether you're a burgeoning startup in Fulton Market, an established law firm in the financial district, a thriving restaurant in West Loop, or a service provider in Andersonville, TRAC has a proven track record of helping Chicago businesses achieve their growth goals. We leverage advanced keyword research, sophisticated local SEO strategies, and transparent reporting to ensure your investment translates into tangible results. Our commitment to ethical, white-hat SEO practices means your online growth is sustainable and built for long-term success.

Don't let your competitors dominate the Chicago market. Partner with TRAC, the trusted Chicago SEO agency committed to driving your success. We specialize in helping service-based businesses like yours increase online visibility, attract more customers, and ultimately, dominate local search results. Ready to grow your Chicago business and secure your position at the forefront of local search? Contact us today for a free SEO analysis and discover how our expertise can elevate your brand.`,
    heroImage: {
      src: GENERIC_CITY_HERO_IMAGE_SRC,
      alt: "Chicago city skyline, illustrating TRAC's SEO services",
      dataAiHint: 'chicago skyline buildings'
    },
    heroVideoUrl: 'https://www.youtube.com/embed/JBPmDzL-Xek',
    formTitle: 'Get Your FREE SEO Plan!'
  },
  resultsHeadline: 'Driving Verifiable SEO Success & ROI for Chicago Businesses',
  readyToGrowHeadline: 'Ready to Elevate Your Chicago SEO Game & Market Reach?',
  servicesSectionHeadline: 'Specialized & Comprehensive SEO Services for Chicago',
  servicesSectionSubheadline: 'Our SEO services are carefully designed to meet the unique challenges and seize the opportunities presented by the Windy City\'s dynamic market, delivering strong search engine performance and business growth across all key industries.',
  services: [
    {
      icon: Search,
      title: 'Local SEO Services & Optimization',
      url: '/services/local-seo',
      description: 'Dominate local searches in Chicago with our specialized Local SEO Services & Optimization. We meticulously optimize Google Business Profile listings, citations, and location pages for neighborhood-specific search intent throughout Chicago. Our strategies drive highly qualified local traffic, converting nearby searches into loyal customers and significantly boosting your local market presence in the Windy City.',
    },
    {
      icon: Settings,
      title: 'Technical SEO Audits',
      url: '/services/technical-seo',
      description: 'Ensure your Chicago website is technically flawless and performs optimally with our comprehensive Technical SEO Audits. We meticulously ensure Core Web Vitals compliance and clean indexation, boosting user experience and crawlability. Our audits and fixes are designed to enhance your site\'s foundational health, leading to improved search rankings and a seamless experience for your Chicago customers, ultimately driving more organic traffic and conversions.',
    },
    {
      icon: Users,
      title: 'Keyword & Competitor Research',
      url: '/services/keyword-research',
      description: 'Gain a decisive advantage in the Chicago market with our in-depth Keyword & Competitor Research. We meticulously identify what Chicagoans search for and where your competitors fall short, providing data-backed, city-specific keyword clusters. This strategic insight ensures your SEO efforts are highly targeted, attracting the most qualified leads and maximizing your online visibility in the competitive Chicago landscape.',
    },
    {
      icon: Briefcase,
      title: 'SEO for Finance & Legal Sectors',
      url: '/services/industry-seo',
      description: 'Specializing in the highly regulated Finance & Legal Sectors in Chicago, we help law firms and financial institutions capture high-intent leads through robust, trustworthy SEO architecture. Our strategies are designed to navigate complex industry landscapes, ensuring compliance while maximizing online visibility and establishing your authority. We drive qualified traffic that converts, building a strong digital presence for your Chicago-based practice.',
    },
    {
      icon: Mail,
      title: 'Content Marketing & Outreach',
      url: '/services/content-marketing',
      description: 'Establish your brand as a thought leader in Chicago with our specialized Content Marketing & Outreach services. We craft engaging guides, informative FAQs, and compelling blog posts—all designed around Chicago-specific searches and built to earn valuable backlinks and improve rankings. Our strategic content not only attracts search engines but also resonates deeply with your target audience, driving significant SEO equity and converting visitors into loyal clients in the Chicago market.',
    },
    {
      icon: BarChart2,
      title: 'SEO KPIs & Performance Tracking',
      url: '/services/seo-reporting',
      description: 'Gain crystal-clear insights into your Chicago SEO performance with our SEO KPIs & Performance Tracking. We provide comprehensive, actionable data on keyword movement, traffic sources, and ROI-based dashboards, eliminating fluff and focusing on what truly matters for your business growth. Our transparent reports empower you to understand the impact of our strategies and make informed decisions to further dominate the Chicago market.',
    },
    {
      icon: Globe,
      title: 'On-Page SEO',
      url: '/services/on-page-seo',
      description: 'Optimize individual web pages to rank higher and earn more relevant traffic from search engines with our On-Page SEO services. Our process includes meticulous keyword research, compelling content optimization, strategic internal linking, and meta tag enhancements. By aligning your page content with user intent and search engine best practices, we ensure your pages are highly visible and attractive to both users and algorithms, driving targeted traffic to your Chicago business.',
    }
  ],
  whyChooseSectionHeadline: 'Choose TRAC: Your Dedicated Partner for SEO Success in Chicago',
  whyChooseIntro: 'TRAC is the SEO agency Chicago businesses trust for lasting growth and digital dominance. Our unwavering commitment to data-driven strategies, clear communication, and delivering measurable results sets us apart in the competitive Chicago SEO landscape.',
  whyChooseParagraph1: 'Chicago’s diversity and density demand precision. We map our campaigns to the city’s rhythm—from Lakeview nightlife to West Loop startups. Our strategies balance structured content with authentic relevance, resulting in trust, authority, and lead generation that scales with your growth.',
  whyChooseParagraph2: 'With TRAC, you get a team that delivers clarity and performance. Our approach is iterative, proactive, and aligned with your revenue targets. Whether it’s gaining 3-pack visibility or competing nationally from a Chicago base—we help you dominate with purpose-driven SEO.',
  whyChoosePoints: [
    {
      icon: 'TrendingUp',
      title: 'City-Tuned Growth Strategy',
      description: 'We combine SEO strategy with neighborhood data to capture the Chicago market block by block.'
    },
    {
      icon: 'Lightbulb',
      title: 'Chicago Local Market Intelligence',
      description: 'From CTA traffic trends to local SERP intent—we design around what drives searchers here.'
    },
    {
      icon: 'ShieldCheck',
      title: 'Trust-Centric SEO Delivery',
      description: 'No shortcuts. Just sustainable, white-hat SEO built for algorithm changes and long-term growth.'
    },
    {
      icon: 'LineChart',
      title: 'ROI-Based Reporting',
      description: 'We focus on leads and revenue, not just vanity rankings—so you see SEO value clearly.'
    },
    {
      icon: 'Users',
      title: 'Dedicated Team of Experts',
      description:
        'Benefit from a dedicated team of SEO experts, content strategists, and web developers committed to your success. Our specialists bring collective expertise and a personalized approach to every aspect of your campaign, ensuring your Chicago business receives the highest level of service and support.',
    },
    {
      icon: 'BarChart',
      title: 'Holistic Approach',
      description:
        'We adopt a holistic approach to your online growth, seamlessly integrating SEO with other digital marketing channels to create a comprehensive and synergistic strategy. This ensures maximum impact and sustained growth, positioning your Chicago business for long-term success in the digital landscape.',
    }
  ],
  awards: {
    clutch: {
      headline: 'TRAC: A Top-Ranked & Reviewed Chicago SEO Company by Clutch for 2024',
      text: 'Clutch, a leading B2B review platform, consistently recognizes TRAC for delivering exceptional SEO results and maintaining superior client service standards for businesses across the Chicagoland area. Our clients\' success stories speak for themselves.'
    },
    upcity: {
      headline: 'UpCity National Excellence Award: TRAC - Premier Chicago SEO Agency 2024',
      text: 'TRAC has been proudly awarded by UpCity for our outstanding SEO performance, strategic innovation, and unwavering dedication to client success in the dynamic Chicago digital marketplace. We are committed to leading the way in Chicago SEO.'
    }
  },
  location: {
    officeImageUrl: GENERIC_OFFICE_LOCATION_IMAGE_SRC,
    streetAddress: '70 W Madison St, Suite 1400',
    addressLocality: 'Chicago',
    addressRegion: 'IL',
    postalCode: '60602',
    addressCountry: 'US',
    phone: CONTACT_DETAILS.phone,
    email: CONTACT_DETAILS.email,
    hasMap: 'https://goo.gl/maps/d5E6f7G8h9',
    geo: {
      latitude: '41.878100',
      longitude: '-87.629800',
    },
  },
  bottomFormTitle: 'Get Your FREE, No-Obligation SEO Consultation',
  roadmapSteps: [
    {
      icon: "Search",
      title: "Step 1: Deep Market Analysis",
      description: "We start by analyzing the local Chicago market, identifying your top competitors and uncovering local search trends to build a data-driven foundation for your success.",
    },
    {
      icon: "CheckCircle",
      title: "Step 2: Hyper-Local Keyword Targeting",
      description: "Our experts find the high-intent keywords your local Chicago customers are using to search for your services, ensuring we attract the most qualified traffic directly to your business.",
    },
    {
      icon: "BarChart2",
      title: "Step 3: Google Business Profile Optimization",
      description: "We meticulously optimize your Google Business Profile to dominate the local map pack in Chicago, driving direct calls and website visits from nearby customers.",
    },
    {
      icon: "Edit",
      title: "Step 4: On-Page & Technical SEO",
      description: "We enhance your website's structure, content, and technical health to ensure it's perfectly optimized for both search engines and user experience, specifically for the Chicago audience.",
    },
    {
      icon: "Link2",
      title: "Step 5: Local Link Building & Citations",
      description: "We build your authority by acquiring high-quality backlinks from reputable local Chicago businesses and online directories, signaling trust to Google and boosting your local relevance.",
    },
    {
      icon: "TrendingUp",
      title: "Step 6: Transparent Reporting & Strategy Refinement",
      description: "You get clear, monthly reports showing your progress in the Chicago market. We continually refine our strategy based on the data to maximize your ROI and keep you ahead of the competition.",
    },
  ],
  faqSectionHeadline: 'SEO FAQs for Chicago Businesses',
  faqData: [
    {
      question: 'How long does SEO take in the Chicago market?',
      answer: 'On average, clients begin seeing measurable SEO improvements within 3–5 months. Competitive niches may take longer, but momentum builds steadily.'
    },
    {
      question: 'What industries does TRAC specialize in for Chicago?',
      answer: 'We support legal, financial, hospitality, fitness, tech, and local services—building Chicago-specific content and search visibility tailored to each.'
    },
    {
      question: 'Do you offer Google Business Profile optimization?',
      answer: 'Yes, we optimize your GBP to boost map pack visibility, improve reviews, and strengthen local SEO across Chicago neighborhoods.'
    },
    {
      question: 'Are your SEO strategies compliant with Google?',
      answer: 'Absolutely. We use ethical, white-hat SEO methods aligned with Google’s guidelines to deliver safe, long-lasting growth.'
    },
    {
      question: 'How do I know your SEO is working?',
      answer: 'You’ll get monthly reports tracking rankings, leads, calls, and conversions—plus access to our strategists for campaign reviews.'
    },
    {
      question: 'How can I find the best local SEO services near me in Chicago?',
      answer: 'To find the best local SEO services in Chicago, look for agencies with a proven track record of success in your specific industry, strong client testimonials, and a deep understanding of the Chicago market. TRAC specializes in hyper-local SEO strategies that connect your business with customers actively searching for your services nearby, ensuring you dominate local search results and drive tangible growth.',
    }
  ]
};
