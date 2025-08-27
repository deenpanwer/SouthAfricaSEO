import type { CityPageData } from '@/types';
import { Briefcase, Search, BarChart2, Users, Settings, Mail, TrendingUp, Lightbulb, ShieldCheck, Globe, LineChart } from 'lucide-react';
import { CONTACT_DETAILS } from '@/lib/constants.tsx';

const GENERIC_CITY_HERO_IMAGE_SRC = 'https://cdn-icggj.nitrocdn.com/AphBmykuaGyxZijWArNhxcCiPzVdYZGT/assets/images/optimized/rev-d6d7292/thriveagency.com/files/SEO-Company.jpg';
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
  heroData: {
    pageTitle: 'Chicago SEO Agency | TRAC - Expert SEO Services in Chicago, IL',
    metaDescription: 'TRAC is your trusted Chicago SEO agency. We help businesses in Chicago improve search rankings, drive targeted organic traffic, and significantly increase sales. Contact us for a free SEO audit and strategy session!',
    heroTitle: 'Chicago SEO Company: Driving Growth in the Windy City',
    heroSubtitle: 'Boost Your Visibility & Outperform Competitors in Chicago with TRAC\'s Expert SEO Expertise',
    heroDescription: `In a city as vast, competitive, and fast-paced as Chicago, standing out online requires more than just basic SEO—it requires precision, local expertise, and a partner who understands how the Windy City works. At TRAC, we engineer SEO strategies that not only help you rank but dominate local search in areas like the Loop, River North, and Logan Square.

We create custom campaigns designed to outperform your competitors and connect you directly with high-converting, local searchers. Whether you're a restaurant trying to rank for "best brunch in Wicker Park" or a law firm targeting "divorce attorney in Lincoln Park," our keyword targeting, structured content, and on-page optimization drive organic growth that matters.

We specialize in:
- Schema-rich city landing pages
- Review optimization and citation building
- Technical audits that go deep into crawl health and Core Web Vitals
- Location-aware internal linking and service siloing
- Locally-tuned content marketing aligned with Google Trends and event-based search behavior

Clients receive monthly performance dashboards, direct access to our SEO strategists, and a battle-tested roadmap based on real-time Google algorithm shifts. From South Side businesses to North Shore startups, TRAC is the trusted name for long-term SEO wins in Illinois.

Need SEO for specific industries? TRAC provides:
https://traconomics.com/illinois-salon-seo-services
https://traconomics.com/illinois-gym-seo-strategies
https://traconomics.com/illinois-landscaping-seo-company`,
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
      description: 'We optimize GMB listings, citations, and location pages for neighborhood-specific search intent throughout Chicago.'
    },
    {
      icon: Settings,
      title: 'Technical SEO Audits',
      description: 'We ensure Core Web Vitals compliance and clean indexation to boost user experience and crawlability.'
    },
    {
      icon: Users,
      title: 'Keyword & Competitor Research',
      description: 'Targeting what Chicagoans search and where competitors fall short. Data-backed, city-specific keyword clusters.'
    },
    {
      icon: Briefcase,
      title: 'SEO for Finance & Legal Sectors',
      description: 'We help law firms and financial institutions capture high-intent leads through trustworthy SEO architecture.'
    },
    {
      icon: Mail,
      title: 'Content Marketing & Outreach',
      description: 'Guides, FAQs, blogs—all designed around Chicago searches and built to earn links and rankings.'
    },
    {
      icon: BarChart2,
      title: 'SEO KPIs & Performance Tracking',
      description: 'Transparent reporting focused on ROI. Rankings, calls, leads, and revenue tracked monthly.'
    },
    {
      icon: Globe,
      title: 'On-Page SEO',
      description: 'From metadata to internal link flow, we ensure every page is optimized for both bots and humans.'
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
    }
  ]
};
