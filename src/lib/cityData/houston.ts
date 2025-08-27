import type { CityPageData } from '@/types';
import { Search, Settings, Briefcase, Mail, BarChart2, TrendingUp, Lightbulb, ShieldCheck, MapPin, Globe2 } from 'lucide-react';
import { CONTACT_DETAILS } from '@/lib/constants.tsx';

const GENERIC_CITY_HERO_IMAGE_SRC = 'https://cdn-icggj.nitrocdn.com/AphBmykuaGyxZijWArNhxcCiPzVdYZGT/assets/images/optimized/rev-d6d7292/thriveagency.com/files/Houston-SEO-Company.jpg';
const GENERIC_OFFICE_LOCATION_IMAGE_SRC = 'https://cdn-icggj.nitrocdn.com/AphBmykuaGyxZijWArNhxcCiPzVdYZGT/assets/images/optimized/rev-d6d7292/thriveagency.com/files/Houston-Office-Location.png';

export const houstonData: CityPageData = {
  slug: 'houston',
  cityName: 'Houston',
  metaKeywords: [
    'Houston SEO company',
    'energy sector SEO Houston',
    'medical center SEO Houston TX',
    'Houston B2B marketing SEO',
    'local SEO agency Houston suburbs',
    'voice search optimization Houston',
    'ecommerce SEO Houston Texas',
    'Houston map pack optimization',
    'technical SEO audit Houston',
    'multilingual SEO Houston analytics'
  ],
  heroData: {
    pageTitle: 'Houston SEO Services | TRAC - SEO Experts Houston, TX',
    metaDescription: 'Partner with TRAC, the leading Houston SEO agency, to boost rankings for long-tail queries in energy, healthcare, logistics, and tech. Capture more qualified traffic with our tailored SEO solutions.',
    heroTitle: 'Houston SEO Experts: Propel Your Business Forward',
    heroSubtitle: 'Launch Your Houston Business to New Heights with TRAC\'s Strategic SEO',
    heroDescription: `In a city as vast and diverse as Houston—where oil and gas giants, the Texas Medical Center, tech startups, and retail powerhouses all compete—effective SEO must be precise. TRAC crafts hyper-local, industry-specific campaigns targeting long-tail phrases such as "Houston cardiology website optimization", "oilfield equipment SEO Houston TX", and "Houston retail eCommerce SEO strategies".

Our approach begins with in-depth keyword research and competitor gap analysis: uncovering niche queries like "Fort Bend county legal SEO consultant" or "Midtown Houston restaurant digital marketing SEO". We then implement:

- Advanced local SEO to dominate Google Maps and 3-pack features in neighborhoods like The Woodlands, Sugar Land, and Pearland.
- Comprehensive technical audits focusing on Core Web Vitals, crawl budget optimization, and JavaScript rendering issues unique to enterprise platforms.
- Schema markup tailored for Houston industries—medical, legal, energy—to secure rich snippets and voice search compatibility.
- Content architectures that support both short-tail and long-tail user intent, from "Houston pipe fabrication lead generation" to "best pediatric dentistry SEO Houston TX".

TRAC’s content team produces authoritative blog posts, localized landing pages, and downloadable resources—each designed to resonate with Houston audiences and convert them into qualified leads. Monthly strategy sessions and transparent analytics dashboards ensure your campaign adapts to evolving trends and algorithm shifts.

Ready to capture the search traffic that matters? Explore our specialized Houston services:
https://traconomics.com/texas-medical-seo-services
https://traconomics.com/texas-oil-and-gas-seo
https://traconomics.com/texas-ecommerce-seo-company`,
    heroImage: { src: GENERIC_CITY_HERO_IMAGE_SRC, alt: 'SEO Services in Houston, TX', dataAiHint: 'Houston skyline and SEO concept' },
    heroVideoUrl: 'https://www.youtube.com/embed/JBPmDzL-Xek',
    formTitle: 'Get Your FREE Houston SEO Strategy!',
  },
  resultsHeadline: 'Delivering Stellar SEO Results in Houston',
  readyToGrowHeadline: 'Ready to Skyrocket Your Houston SEO?',
  servicesSectionHeadline: 'Customized Houston SEO Solutions',
  servicesSectionSubheadline: 'From energy corridors to medical districts, our SEO services connect you with high-value Houston audiences and drive measurable ROI.',
  services: [
    { icon: Search, title: 'Hyper-Local Houston Neighborhood SEO', description: 'Crafted landing pages and map optimizations for neighborhoods like Montrose, Heights, and River Oaks to capture local search intent and drive foot traffic.' },
    { icon: Settings, title: 'Enterprise-Grade Technical SEO Audits', description: 'Full-site audits addressing speed, mobile indexing, crawlability, and advanced schema tailored for Houston´s largest organizations.' },
    { icon: Mail, title: 'Industry-Focused Content & Link Building', description: 'White-glove outreach securing backlinks from local Houston news sites, industry associations, and municipal resources to boost domain authority.' },
    { icon: BarChart2, title: 'ROI-Driven Analytics & Reporting', description: 'Custom dashboards tracking keyword gains, organic lead volume, conversion rates, and revenue attribution for your Houston operations.' },
    { icon: Briefcase, title: 'Sector-Specific SEO Strategies', description: 'Energy, healthcare, legal, and logistics SEO playbooks designed for Houston´s top industries with compliance to sector regulations and best practices.' }
  ],
  whyChooseSectionHeadline: 'Why Choose TRAC as Your Houston SEO Partner?',
  whyChooseIntro: 'Our Houston SEO methodology blends deep local market insights with technical expertise to deliver growth that scales.',
  whyChooseParagraph1: `Houston businesses face unique challenges from sprawling metro geography to industry-specific compliance demands. TRAC partners with you to navigate these complexities—conducting localized keyword research, competitor benchmarking, and customer journey mapping to ensure every SEO tactic aligns with your bottom-line goals.`,
  whyChooseParagraph2: `We believe in transparency and collaboration. You receive detailed monthly reports, access to our SEO platform, and quarterly strategy meetings. Our proactive team stays ahead of algorithm changes and Houston market shifts to keep your SEO performance accelerating.`,
  whyChoosePoints: [
    { icon: 'TrendingUp', title: 'Measurable Houston Growth', description: 'From targeted keyword rankings to organic lead generation and revenue growth—every metric ties back to your success.' },
    { icon: 'Lightbulb', title: 'Local Market Intelligence', description: 'Insight-driven campaigns leveraging Houston-specific data on search trends, competitor activity, and regional events.' },
    { icon: 'ShieldCheck', title: 'Ethical & Sustainable SEO', description: 'We follow white-hat practices, ensuring long-term stability and compliance with search engine guidelines.' }
  ],
  awards: {
    clutch: { headline: 'Top Houston SEO Agency - Clutch 2024', text: 'Recognized by Clutch for delivering consistent excellence and measurable results in Houston SEO for diverse industries.' },
    upcity: { headline: 'Houston SEO Excellence Award - UpCity 2024', text: 'Awarded by UpCity for providing top-tier SEO services and strategic leadership in the Houston market.' },
  },
  location: {
    officeImageUrl: GENERIC_OFFICE_LOCATION_IMAGE_SRC,
    streetAddress: '707 Ln',
    addressLocality: 'Houston',
    addressRegion: 'TX',
    postalCode: '77019',
    addressCountry: 'US',
    phone: CONTACT_DETAILS.phone,
    email: CONTACT_DETAILS.email,
    hasMap: 'https://goo.gl/maps/jK1lM2nO3p',
    geo: {
      latitude: '29.760400',
      longitude: '-95.369800',
    },
  },
  bottomFormTitle: 'Request Your SEO Consultation',
  faqSectionHeadline: 'Houston SEO FAQs: Your Top Questions Answered',
  faqData: [
    { question: 'How long until I see SEO results in Houston?', answer: 'Local improvements often surface in 3 months, while competitive, long-tail terms may take 4–8 months to rank consistently. Ongoing content and link efforts accelerate progress.' },
    { question: 'Can TRAC optimize my Google Business Profile for Houston?', answer: 'Yes—our GMB package includes profile optimization, review management, and local citation building to boost map pack visibility across Houston neighborhoods.' },
    { question: 'Do you handle SEO for Houston\'s regulated industries?', answer: 'Absolutely.We have experience with medical, legal, and energy sectors, ensuring compliance with HIPAA, E- A - T guidelines, and industry - specific regulations.' },
    { question: 'Is bilingual SEO available for Houston?', answer: 'Yes. We offer English-Spanish keyword research, content translation, and hreflang setup to reach Houston’s bilingual audience effectively.' },
    { question: 'How do you measure SEO ROI in Houston?', answer: 'We track conversions, call tracking, form fills, and revenue attribution alongside keyword and traffic metrics—providing a holistic view of your SEO investment.' },
    { question: 'Can you support multi-location Houston businesses?', answer: 'Yes, we create location-specific landing pages, citation clusters, and GMB profiles for each branch to maximize local visibility and lead flow.' }
  ]
};
