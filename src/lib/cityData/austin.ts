import type { CityPageData } from '@/types';
import { Search, Settings, Mail, BarChart2, MapPin, Activity, TrendingUp, Lightbulb, ShieldCheck, Building2, } from 'lucide-react';
import { CONTACT_DETAILS } from '@/lib/constants';

const GENERIC_CITY_HERO_IMAGE_SRC =
  'https://cdn-icggj.nitrocdn.com/AphBmykuaGyxZijWArNhxcCiPzVdYZGT/assets/images/optimized/rev-d6d7292/thriveagency.com/files/Austin-SEO-Company.jpg';
const GENERIC_OFFICE_LOCATION_IMAGE_SRC =
  'https://cdn-icggj.nitrocdn.com/AphBmykuaGyxZijWArNhxcCiPzVdYZGT/assets/images/optimized/rev-d6d7292/thriveagency.com/files/Austin-office-location.png';

export const austinData: CityPageData = {
  slug: 'austin',
  cityName: 'Austin',
  metaKeywords: [
    'SEO company South Congress Austin',
    'Austin TX local SEO experts',
    'SEO for tech startups in Austin Domain',
    'digital marketing for Austin restaurants',
    'Rainey Street SEO specialists',
    'Austin SEO agency for real estate firms',
    'on-page SEO for Austin businesses',
    'Austin SEO for ecommerce brands',
    'best SEO strategy for Austin contractors',
    'Google Business Profile optimization Austin TX',
    'long-tail SEO services Austin',
  ],
  teamSectionHeadline: 'Meet Your Founder & CEO, Kaayf',
  teamSectionDescription: 'The visionary leader behind TRAC, dedicated to your success in Austin.',
  founderBio: 'Kaayf, our Founder & CEO, brings over 15 years of digital marketing expertise to Austin businesses. He is passionate about driving measurable ROI and building sustainable growth for clients in the local market. His leadership ensures TRAC delivers tailored SEO strategies that resonate with Austin\'s unique business landscape.',
  heroData: {
    pageTitle: 'Austin SEO Services | TRAC - SEO Company in Austin, TX',
    metaDescription:
      'TRAC is a trusted SEO company in Austin, TX helping startups, contractors, healthcare, and food brands rank higher. Long-tail SEO built for local intent.',
    heroTitle: 'Austin SEO Company: Fueling Growth in the Live Music Capital',
    heroSubtitle: 'SEO for South Congress, East Austin, Domain & Beyond',
    heroDescription: `In the vibrant heart of Texas, Austin's dynamic business landscape demands more than just a presence; it requires a powerful digital strategy to truly stand out. Is your Austin business struggling to capture the attention of local customers actively searching for your services? In a city renowned for its innovation, culture, and rapid growth, simply existing online isn't enough. You need a hyper-local SEO strategy that connects you directly with customers ready to engage and convert. TRAC offers expert Austin SEO services designed to transform your online visibility, drive qualified leads, and deliver measurable return on investment.

We understand the unique rhythm of Austin, from the bustling tech corridors of The Domain to the eclectic charm of South Congress and the family-friendly communities of Westlake. Our approach goes beyond generic keywords, focusing on high-intent, localized search terms that capture genuine buying intent. Imagine your business appearing at the top of search results for phrases like "best SEO company in Austin," "hire SEO expert Austin," or "Austin digital marketing agency for leads." That's the power of TRAC's tailored SEO solutions.

Our comprehensive Austin SEO campaigns begin with a deep dive into your current online performance and the competitive landscape specific to your industry within Austin. We meticulously optimize your technical SEO, ensuring your website is fast, mobile-friendly, and easily discoverable by search engines. Then, our content specialists craft compelling, authoritative content that not only ranks for critical keywords but also resonates deeply with your target audience, establishing your business as a leader in the Austin market.

Whether you're a burgeoning tech startup near the Capitol, an established law firm in downtown Austin, a thriving restaurant on South Lamar, or a contractor serving the expanding suburbs, TRAC has a proven track record of helping Austin businesses achieve their growth goals. We leverage advanced keyword research, sophisticated local SEO strategies, and transparent reporting to ensure your investment translates into tangible results. Our commitment to ethical, white-hat SEO practices means your online growth is sustainable and built for long-term success.

Don't let your competitors dominate the Austin market. Partner with TRAC, the trusted Austin SEO agency committed to driving your success. We specialize in helping service-based businesses like yours increase online visibility, attract more customers, and ultimately, dominate local search results. Ready to grow your Austin business and secure your position at the forefront of local search? Contact us today for a free SEO analysis and discover how our expertise can elevate your brand.`,
    heroImage: {
      src: GENERIC_CITY_HERO_IMAGE_SRC,
      alt: 'SEO Services in Austin, TX',
      dataAiHint: 'Austin city SEO agency',
    },
    heroVideoUrl: 'https://www.youtube.com/embed/JBPmDzL-Xek',
    formTitle: 'Get Your FREE SEO Audit!',
  },
  resultsHeadline: 'SEO Wins for Austin Startups & Local Icons',
  readyToGrowHeadline: 'Ready to Rank for Austin’s Top Searches?',
  servicesSectionHeadline: 'SEO Services Tailored to Austin’s Neighborhoods',
  servicesSectionSubheadline:
    'From South Congress storefronts to Domain tech hubs, our SEO services align with how Austinites search and buy.',
  services: [
    {
      icon: MapPin,
      title: 'Neighborhood‑Focused SEO',
      url: '/services/local-seo',
      description: 'Dominate local searches in Austin with our neighborhood-focused SEO strategies. We meticulously geo-target every asset, from "East Austin tattoo shops" to "downtown coworking SEO," ensuring your business appears prominently where it matters most. Our approach drives highly qualified local traffic, converting nearby searches into loyal customers and significantly boosting your local market presence in Austin.',
    },
    {
      icon: Settings,
      title: 'Technical SEO & Performance',
      url: '/services/technical-seo',
      description: 'Ensure your Austin website is technically flawless and performs optimally with our comprehensive Technical SEO services. We meticulously handle speed optimization, schema markup, and mobile user experience, ensuring your site passes Core Web Vitals and is efficiently crawled by search engines. Our audits and fixes are designed to enhance your site\'s foundational health, leading to improved search rankings and a seamless experience for your Austin customers.',
    },
    {
      icon: Mail,
      title: 'Localized Content & Link Building',
      url: '/services/content-marketing',
      description: 'Attract high-quality local links and build trust within the Austin community through our specialized Localized Content & Link Building services. We craft Austin-centric guides, engaging event pages, and industry-specific content designed to resonate with your local audience. Our strategic outreach attracts valuable backlinks from relevant local sources, significantly boosting your domain authority and enhancing your online presence in the Austin market.',
    },
    {
      icon: BarChart2,
      title: 'Advanced SEO Reporting',
      url: '/services/seo-reporting',
      description: 'Gain crystal-clear insights into your Austin SEO performance with our Advanced SEO Reporting. We provide comprehensive, actionable data on keyword movement, traffic sources, and ROI-based dashboards, eliminating fluff and focusing on what truly matters for your business growth. Our transparent reports empower you to understand the impact of our strategies and make informed decisions to further dominate the Austin market.',
    },
    {
      icon: Activity,
      title: 'Conversion Optimization',
      url: '/services/conversion-optimization',
      description: 'Beyond just ranking, our Conversion Optimization services ensure your Austin website effectively turns visitors into customers. We meticulously optimize Calls-to-Action (CTAs), streamline lead flows, and refine page structures to significantly improve conversion rates across all devices. Our focus is on maximizing the return from your organic traffic, ensuring every visitor to your Austin site contributes to your business growth and revenue.',
    },
    {
      icon: Building2,
      title: 'Multi‑Location Strategy',
      url: '/services/multi-location-seo',
      description: 'For businesses with multiple branches in Austin or across Texas, our Multi-Location SEO Strategy provides scalable solutions. We deploy structured location pages and interlinked hubs, ensuring each of your sites gains maximum visibility in local search results. Our approach is designed to scale with your growth, effectively capturing leads and driving traffic to all your Austin and regional locations, solidifying your brand\'s presence across the state.',
    },
  ],
  whyChooseSectionHeadline: 'Why Partner with TRAC in Austin?',
  whyChooseIntro:
    'We combine local knowledge, keyword data, and technical execution to deliver SEO strategies that drive Austin growth.',
  whyChooseParagraph1:
    'Choosing the right SEO partner in Austin is paramount for your business\'s success in this competitive and rapidly evolving market. TRAC stands apart as a trusted agency, combining unparalleled local market expertise with a proven track record of delivering tangible, measurable results for businesses like yours. We possess an intimate understanding of Austin’s diverse economic landscape, from the bustling tech hubs in The Domain to the vibrant cultural districts of South Congress and the growing communities around Lake Travis. This deep local insight allows us to craft hyper-localized SEO strategies that precisely target your ideal customers, wherever they are searching within the Austin metropolitan area. We don\'t just understand the algorithms; we understand the unique nuances of the Austin consumer and business environment, ensuring your message resonates with the right audience at the right time.',
  whyChooseParagraph2:
    'We don\'t just promise results; we deliver them through a data-driven, transparent, and ethical process that prioritizes your return on investment. Our methodology is rooted in rigorous analysis of Austin-specific search trends, a thorough examination of your local competitive landscape, and a deep understanding of your unique business objectives. We provide clear, consistent reporting, proactive communication, and a dedicated team committed to your long-term growth. With TRAC, you gain a strategic partner focused on maximizing your online visibility, driving qualified leads, and ensuring a significant return on your SEO investment. Our commitment to white-hat SEO practices means your online growth is sustainable, resilient to algorithm changes, and built for enduring success in the Austin market. We are not just a vendor; we are an extension of your team, invested in your success.',
  whyChoosePoints: [
    {
      icon: 'TrendingUp',
      title: 'Results-Driven Local SEO',
      description:
        'We don’t just aim for page one—we aim for booked appointments, phone calls, and revenue from high-intent searches.',
    },
    {
      icon: 'Lightbulb',
      title: 'Austin-Specific Keyword Research',
      description:
        'From “electricians near Barton Creek” to “yoga SEO Rainey Street,” we focus on search terms that reflect real local behavior.',
    },
    {
      icon: 'ShieldCheck',
      title: 'Sustainable White-Hat SEO',
      description:
        'Our Austin SEO campaigns are algorithm-proof and built for long-term authority with clean techniques.',
    },
    {
      icon: 'Search',
      title: 'Industry Depth & Focus',
      description:
        'We work with Austin businesses in SaaS, food and beverage, trades, legal, and wellness—bringing specialized SEO insights.',
    },
    {
      icon: 'BarChart2',
      title: 'Performance Analytics that Matter',
      description:
        'We go beyond keyword rankings—analyzing bounce rates, CTA clicks, and local conversions to fine-tune strategy.',
    },
    {
      icon: 'Users',
      title: 'Dedicated Team of Experts',
      description:
        'Benefit from a dedicated team of SEO experts, content strategists, and web developers committed to your success. Our specialists bring collective expertise and a personalized approach to every aspect of your campaign, ensuring your Austin business receives the highest level of service and support.',
    },
    {
      icon: 'BarChart',
      title: 'Holistic Approach',
      description:
        'We adopt a holistic approach to your online growth, seamlessly integrating SEO with other digital marketing channels to create a comprehensive and synergistic strategy. This ensures maximum impact and sustained growth, positioning your Austin business for long-term success in the digital landscape.',
    },
  ],
  awards: {
    clutch: {
      headline: 'Clutch Top Austin SEO Agency 2024',
      text:
        'Honored by Clutch for delivering standout SEO results to Austin businesses, from tech startups to eateries on South Congress.',
    },
    upcity: {
      headline: 'UpCity SEO Leader – Austin 2024',
      text:
        'Awarded by UpCity for exceptional local SEO performance and client satisfaction across Austin’s diverse industries.',
    },
  },
  location: {
    officeImageUrl: GENERIC_OFFICE_LOCATION_IMAGE_SRC,
    streetAddress: '106 E 6th Street',
    addressLocality: 'Austin',
    addressRegion: 'TX',
    postalCode: '78701',
    addressCountry: 'US',
    phone: CONTACT_DETAILS.phone,
    email: CONTACT_DETAILS.email,
    hasMap: 'https://goo.gl/maps/b2C3d4E5f6',
    geo: {
      latitude: '30.267200',
      longitude: '-97.743100',
    },
  },
  bottomFormTitle: 'Request Your SEO Plan',
  roadmapSteps: [
    {
      icon: "Search",
      title: "Step 1: Deep Market Analysis",
      description: "We start by analyzing the local Austin market, identifying your top competitors and uncovering local search trends to build a data-driven foundation for your success.",
    },
    {
      icon: "CheckCircle",
      title: "Step 2: Hyper-Local Keyword Targeting",
      description: "Our experts find the high-intent keywords your local Austin customers are using to search for your services, ensuring we attract the most qualified traffic directly to your business.",
    },
    {
      icon: "BarChart2",
      title: "Step 3: Google Business Profile Optimization",
      description: "We meticulously optimize your Google Business Profile to dominate the local map pack in Austin, driving direct calls and website visits from nearby customers.",
    },
    {
      icon: "Edit",
      title: "Step 4: On-Page & Technical SEO",
      description: "We enhance your website's structure, content, and technical health to ensure it's perfectly optimized for both search engines and user experience, specifically for the Austin audience.",
    },
    {
      icon: "Link2",
      title: "Step 5: Local Link Building & Citations",
      description: "We build your authority by acquiring high-quality backlinks from reputable local Austin businesses and online directories, signaling trust to Google and boosting your local relevance.",
    },
    {
      icon: "TrendingUp",
      title: "Step 6: Transparent Reporting & Strategy Refinement",
      description: "You get clear, monthly reports showing your progress in the Austin market. We continually refine our strategy based on the data to maximize your ROI and keep you ahead of the competition.",
    },
  ],
  faqSectionHeadline: 'Frequently Asked Questions About SEO in Austin',
  faqData: [
    {
      question: 'What is the average cost for SEO services in Austin?',
      answer:
        'Austin SEO campaigns typically range from $1,000 to $3,000/month, depending on your goals, competition level, and service scope. TRAC offers flexible, scalable packages for startups and enterprise clients.',
    },
    {
      question: 'How long does it take to see SEO results in Austin?',
      answer:
        'Most Austin clients see movement in 60–90 days, with stronger gains in 4–6 months. Our process targets fast wins while also laying the groundwork for sustainable organic growth.',
    },
    {
      question: 'Do you offer SEO for Austin service businesses?',
      answer:
        'Yes. We work with contractors, HVAC pros, landscapers, medspas, auto shops, and other service providers targeting local leads in Austin.',
    },
    {
      question: 'Can TRAC help me rank in different parts of Austin?',
      answer:
        'Absolutely. We build geo-targeted pages and structured citation networks for areas like South Lamar, The Domain, Zilker, and more.',
    },
    {
      question: 'Does TRAC offer content creation for Austin SEO?',
      answer:
        'Yes. We craft original service pages, blog posts, guides, and linkable assets tailored to your industry and the way people search in Austin.',
    },
    {
      question: 'Is SEO still worth it in a saturated city like Austin?',
      answer:
        'More than ever. Austin’s growth means more searches—but also more competition. With long-tail keyword focus and precise local targeting, SEO becomes your most scalable lead driver.',
    },
    {
      question: 'What makes TRAC different from other SEO companies in Austin?',
      answer:
        'We blend deep technical SEO with local cultural awareness, meaning we don’t just rank you—we connect you with your audience in a way that drives action.',
    },
    {
      question: 'Do you offer multi-location SEO in Austin and beyond?',
      answer:
        'Yes. If you have multiple branches in Austin or operate across Texas, we create scalable SEO architectures with dedicated pages and interlinking that supports regional growth.',
    },
    {
      question: 'How can I find the best local SEO services near me in Austin?',
      answer: 'To find the best local SEO services in Austin, look for agencies with a proven track record of success in your specific industry, strong client testimonials, and a deep understanding of the Austin market. TRAC specializes in hyper-local SEO strategies that connect your business with customers actively searching for your services nearby, ensuring you dominate local search results and drive tangible growth.',
    },
  ],
};