import type { CityPageData } from '@/types';
import {
  Search,
  Settings,
  Briefcase,
  Mail,
  TrendingUp,
  Lightbulb,
  ShieldCheck,
  MapPin,
  LineChart
} from 'lucide-react';
import { CONTACT_DETAILS } from '@/lib/constants.tsx';

const GENERIC_CITY_HERO_IMAGE_SRC = 'https://cdn-icggj.nitrocdn.com/AphBmykuaGyxZijWArNhxcCiPzVdYZGT/assets/images/optimized/rev-d6d7292/thriveagency.com/files/SEO-Company.jpg';
const GENERIC_OFFICE_LOCATION_IMAGE_SRC = 'https://placehold.co/600x400.png';

export const belfastData: CityPageData = {
  slug: 'belfast',
  cityName: 'Belfast',
  metaKeywords: [
    'Belfast SEO company Northern Ireland',
    'SEO services Cathedral Quarter',
    'digital marketing Belfast NI',
    'local SEO expert Titanic Quarter Belfast',
    'technical SEO Northern Ireland businesses',
    'tourism SEO for Belfast attractions',
    'SEO for Belfast startups and tech companies',
    'Northern Ireland small business SEO',
    'affordable Belfast SEO services',
    'content marketing Belfast Northern Ireland'
  ],
  heroData: {
    pageTitle: 'Belfast SEO Services | TRAC - SEO Agency Belfast, NI',
    metaDescription: 'TRAC offers expert SEO services for Belfast businesses. Enhance your online visibility, attract more customers, and grow your business in Northern Ireland. Contact our Belfast SEO team!',
    heroTitle: 'Belfast SEO Agency: Drive Your Success in Northern Ireland',
    heroSubtitle: "Achieve Top Rankings in Belfast with TRAC's Dynamic SEO Strategies",
    heroDescription: `Belfast is a city of contrasts—steeped in history but surging with innovation. At TRAC, we deliver SEO strategies that speak directly to Northern Ireland's digital consumers while helping local businesses thrive. Whether you're a tech startup near Ormeau Baths, a tourism brand near Titanic Quarter, or a professional service firm in Cathedral Quarter, we tailor campaigns that cut through the noise and rank where it matters.

Our SEO methodology begins with local keyword clustering focused on user intent. We enhance your visibility for high-converting searches like “IT services Belfast NI” or “Titanic experience tickets online.” Through content strategy, Core Web Vitals audits, Google Business Profile optimization, and citation building, we make sure you’re found everywhere—from Google Maps to organic listings.

Our campaigns serve:
- Local hospitality and tourism hubs
- Digital firms and startups in NI’s creative economy
- Professional services like law and finance
- Education, events, and community platforms

Every strategy includes transparent KPIs, monthly dashboards, and ROI tracking. TRAC provides clear, actionable SEO you can trust. We combine Northern Irish market context with global SEO best practices to move your rankings forward.

We also provide sector-specific SEO for Belfast’s tourism, tech, education, and service sectors across Northern Ireland, giving your brand long-term visibility and trust.`,
    heroImage: { src: GENERIC_CITY_HERO_IMAGE_SRC, alt: 'SEO Services in Belfast, Northern Ireland', dataAiHint: 'Belfast city UK' },
    heroVideoUrl: 'https://www.youtube.com/embed/JBPmDzL-Xek',
    formTitle: 'Get Your FREE SEO Audit!'
  },
  resultsHeadline: 'Delivering Powerful SEO Results for Belfast & NI Businesses',
  readyToGrowHeadline: 'Ready to Elevate Your Belfast Business with Effective SEO?',
  servicesSectionHeadline: 'Targeted SEO Services for Belfast & Northern Ireland',
  servicesSectionSubheadline: 'Our SEO strategies are designed to help businesses in Northern Ireland capitalize on digital opportunities, reaching local customers and expanding their market presence.',
  services: [
    {
      icon: Search,
      title: 'Local SEO & NI Market Reach',
      description: 'We optimize Google Business Profiles, local pages, and citations to help Belfast businesses stand out in searches like “marketing firm Titanic Quarter” or “restaurants near Cathedral Quarter.”'
    },
    {
      icon: Settings,
      title: 'Technical Website Optimization',
      description: 'Our audits cover Core Web Vitals, mobile indexing, and schema markup. We ensure Belfast sites meet the technical demands of top-ranking SEO.'
    },
    {
      icon: Mail,
      title: 'Content Marketing & Authority Building',
      description: 'We produce city-specific guides, blog content, and linkable assets designed for Belfast’s industries, building trust and driving SEO equity.'
    },
    {
      icon: Briefcase,
      title: 'Industry-Tailored SEO',
      description: 'Custom SEO for Belfast’s creative, tech, hospitality, and tourism sectors—aligning with search behavior and conversion goals.'
    },
    {
      icon: MapPin,
      title: 'GMB & Local Pack Optimization',
      description: 'Improve rankings in Google’s local pack with profile management, geo-tagged media, review strategy, and listing accuracy across Belfast.'
    }
  ],
  whyChooseSectionHeadline: 'TRAC: Your Belfast SEO Agency for Growth in NI',
  whyChooseIntro: 'TRAC delivers results-driven SEO solutions for businesses in Belfast, using local market knowledge and proven digital strategies to help you succeed in Northern Ireland’s evolving economy.',
  whyChooseParagraph1: 'Belfast is more than a capital—it’s a creative engine of Northern Ireland. From the Titanic Quarter’s innovation hubs to family-run shops on Lisburn Road, we adapt SEO strategy to fit each business context. We build visibility where customers are searching and make it easy for Google to understand what you offer.',
  whyChooseParagraph2: 'Our team provides white-hat SEO rooted in transparency and built for longevity. Every tactic is tied to your growth goals, every report is clear, and every piece of content is built to serve users—not just search engines. With TRAC, Belfast businesses gain SEO grounded in trust, backed by data, and executed for lasting results.',
  whyChoosePoints: [
    {
      icon: 'TrendingUp',
      title: 'Local Rankings That Drive Leads',
      description: 'We capture the terms that matter most—so your Belfast business appears when and where customers are looking.'
    },
    {
      icon: 'Lightbulb',
      title: 'Northern Ireland Market Expertise',
      description: 'Our SEO tactics reflect local intent—from Game of Thrones tours to Belfast tech accelerators—tailored to searchers in NI.'
    },
    {
      icon: 'ShieldCheck',
      title: 'Trustworthy, Ethical SEO',
      description: 'We stay aligned with Google’s guidelines while delivering organic growth built to last in Northern Ireland’s evolving digital space.'
    },
    {
      icon: 'LineChart',
      title: 'Results You Can Measure',
      description: 'We tie every campaign to ROI and provide actionable reporting that helps Belfast businesses grow with confidence.'
    }
  ],
  awards: {
    clutch: {
      headline: 'Top Belfast SEO Agency - NI Business Awards 2024',
      text: 'Recognized for delivering exceptional SEO results for businesses in Belfast, particularly in the technology, tourism, and creative sectors in Northern Ireland.'
    },
    upcity: {
      headline: 'Belfast SEO Excellence - UK Digital Awards 2024',
      text: 'Awarded for providing leading SEO services and consistently helping Belfast businesses achieve their online growth targets and enhance their digital presence within Northern Ireland.'
    }
  },
  location: {
    officeImageUrl: GENERIC_OFFICE_LOCATION_IMAGE_SRC,
    streetAddress: '5th Blvd, Titanic Quarter',
    addressLocality: 'Belfast',
    addressRegion: 'Northern Ireland',
    postalCode: 'BT3 9EP',
    addressCountry: 'UK',
    phone: CONTACT_DETAILS.phone,
    email: CONTACT_DETAILS.email,
    hasMap: 'https://goo.gl/maps/c3D4e5F6g7',
    geo: {
      latitude: '54.597300',
      longitude: '-5.930100',
    },
  },
  bottomFormTitle: 'Request Your SEO Strategy Session',
  faqSectionHeadline: 'SEO FAQs for Belfast Businesses',
  faqData: [
    {
      question: 'What’s the cost of SEO services in Belfast?',
      answer: 'Depending on goals and competition, SEO campaigns in Belfast typically range between £750 to £2,500 per month. Custom plans are available for startups and enterprise needs.'
    },
    {
      question: 'Which industries does TRAC specialize in for Belfast SEO?',
      answer: 'We support hospitality, tech, education, tourism, and service-based sectors in Belfast. Each campaign is tailored to fit your market and audience.'
    },
    {
      question: 'How long until I see SEO results in Belfast?',
      answer: 'Most Belfast clients notice growth within 3–4 months, with momentum compounding through strategic content and technical improvements.'
    },
    {
      question: 'Do you manage Google Business Profiles for Belfast clients?',
      answer: 'Yes, from optimization to review strategy—we manage GMB to ensure maximum exposure in local Belfast searches.'
    },
    {
      question: 'Why choose TRAC over other Belfast SEO agencies?',
      answer: 'TRAC combines ethical SEO, deep local knowledge, and transparent reporting. We focus on ROI, not just rankings—delivering campaigns built for measurable growth.'
    }
  ]
};
