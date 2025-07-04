import type { CityPageData } from '@/types';
import { Search, Settings, Mail, BarChart2, TrendingUp, Lightbulb, ShieldCheck, MapPinned, Newspaper, Globe, PencilRuler } from 'lucide-react';
import { CONTACT_DETAILS } from '@/lib/constants.tsx';

const GENERIC_CITY_HERO_IMAGE_SRC = 'https://cdn-icggj.nitrocdn.com/AphBmykuaGyxZijWArNhxcCiPzVdYZGT/assets/images/optimized/rev-d6d7292/thriveagency.com/files/cleveland-seo.jpg';
const GENERIC_OFFICE_LOCATION_IMAGE_SRC = 'https://cdn-icggj.nitrocdn.com/AphBmykuaGyxZijWArNhxcCiPzVdYZGT/assets/images/optimized/rev-d6d7292/thriveagency.com/files/Cleveland-Thrive-office-location.jpg';

export const clevelandData: CityPageData = {
  slug: 'cleveland',
  cityName: 'Cleveland',
  metaKeywords: [
    'Cleveland SEO services',
    'local SEO company Cleveland',
    'SEO for contractors in Cleveland',
    'law firm SEO Cleveland OH',
    'restaurant SEO Cleveland Heights',
    'Cleveland small business SEO experts',
    'best SEO agency in Northeast Ohio',
    'SEO for gyms in Parma Ohio',
    'Google Business optimization Cleveland',
    'Cleveland ecommerce SEO company'
  ],
  heroData: {
    pageTitle: 'Cleveland SEO Services | TRAC - SEO Company Cleveland, OH',
    metaDescription: 'TRAC is a Cleveland SEO company helping businesses boost online visibility and organic traffic. Contact our Cleveland SEO experts for a free SEO strategy session.',
    heroTitle: 'Cleveland SEO Company: Driving Your Digital Success',
    heroSubtitle: "Rank Higher in Cleveland and Attract More Customers with TRAC's Expert SEO",
    heroDescription: `Looking to dominate long-tail local keywords like "affordable HVAC SEO in Cleveland Heights" or "top-rated personal injury lawyer in downtown Cleveland"? TRAC provides advanced, Cleveland-specific SEO strategies designed to help your business rise above the competition in local and regional search.

Whether you're targeting searches like "vegan bakery near Ohio City," "reliable electrician in Shaker Heights," or "commercial gym SEO Cleveland OH," we build campaigns around the phrases your customers are actually Googling. Our deep local market research includes:

- Mapping keyword intent to hyperlocal search areas (Tremont, Lakewood, Parma, University Circle)
- Building out content hubs and internal link networks tied to Northeast Ohio’s business needs
- Optimizing your Google Business Profile to dominate local map listings
- Conducting technical audits for Core Web Vitals, indexation, schema, and crawl depth
- Creating schema-enhanced location pages for every major Cleveland neighborhood you serve

But we don't stop at visibility—we build SEO infrastructure that scales with you. TRAC’s Cleveland SEO methodology includes dynamic content calendars tied to seasonal Cleveland searches like "tax consultant Cleveland OH April 2025" or "best summer camps in Lakewood." Our internal linking strategy connects city landing pages, blog posts, and services, reinforcing authority for local niche topics like "eco-friendly office cleaning Parma OH" or "24/7 plumbing repair near West Park."

We don’t just get you clicks—we bring in qualified leads ready to convert. From law firms on Euclid Ave to HVAC contractors serving the suburbs, TRAC helps Cleveland businesses own their space online.

Explore our tailored SEO services for Ohio:
https://traconomics.com/ohio-landscaping-seo-company
https://traconomics.com/ohio-salon-seo-services
https://traconomics.com/ohio-gym-seo-strategies

We also help Cleveland-based ecommerce stores and SaaS platforms compete nationally with city-enhanced product landing pages, CRO-optimized blog funnels, and competitive SERP analysis. Whether you’re launching a Shopify store in Glenville or scaling a tech solution from Midtown, our campaigns adapt to your growth phase and audience.

We also provide regional content planning and copywriting that highlights community values unique to Cleveland—from showcasing Lake Erie waterfront businesses to embedding cultural relevance around landmarks like the Rock and Roll Hall of Fame or West Side Market. If your SEO partner doesn’t understand your geography, they can’t build authority the way we do.

Cleveland SEO isn’t just about being seen—it’s about being trusted. That’s why our strategies incorporate brand-building via review schema, business citations on Cleveland directories, and storytelling content designed for humans and search engines alike. At TRAC, we build SEO that earns clicks, keeps users engaged, and drives loyalty.`,
    heroImage: {
      src: GENERIC_CITY_HERO_IMAGE_SRC,
      alt: 'SEO Services in Cleveland, OH',
      dataAiHint: 'Cleveland city business'
    },
    heroVideoUrl: 'https://www.youtube.com/embed/JBPmDzL-Xek',
    formTitle: 'Get Your FREE SEO Review!'
  },
  resultsHeadline: 'Delivering SEO Results for Cleveland Businesses: Proven Success',
  readyToGrowHeadline: 'Ready for SEO Growth in Cleveland?',
  servicesSectionHeadline: 'SEO Solutions: Tailored for Your Cleveland Success',
  servicesSectionSubheadline: 'Our SEO services help your Cleveland business climb the rankings and capture targeted leads across Northeast Ohio.',
  services: [
    {
      icon: Search,
      title: 'Cleveland Local SEO',
      description: 'Hyper-targeted local search optimization for neighborhoods like Ohio City, Tremont, and Parma. We localize your presence with citations and GBP enhancements.'
    },
    {
      icon: Settings,
      title: 'Technical SEO Audits',
      description: 'Full technical diagnostics for Cleveland business sites—Core Web Vitals, schema health, crawlability, and indexation to power your organic reach.'
    },
    {
      icon: Mail,
      title: 'SEO Content Marketing',
      description: 'Create geo-specific landing pages, blog content, and conversion copy for Cleveland audiences. Speak directly to Northeast Ohio’s search behavior.'
    },
    {
      icon: BarChart2,
      title: 'Keyword Performance & Reporting',
      description: 'Track ROI on every keyword group—from "custom signs near Cleveland State" to "eco-friendly landscaper Cleveland Heights." Get clarity and conversion data.'
    },
    {
      icon: PencilRuler,
      title: 'Content Architecture Design',
      description: 'We build SEO content frameworks around Cleveland business niches—giving you structured visibility across services, locations, and customer intents.'
    },
    {
      icon: Globe,
      title: 'Regional SEO for Ohio Businesses',
      description: 'Expand your Cleveland business presence to Akron, Canton, and Columbus with our regional SEO strategy hubs designed to scale your reach.'
    }
  ],
  whyChooseSectionHeadline: 'TRAC: Your Cleveland SEO Experts & Growth Partner',
  whyChooseIntro: 'Choose TRAC for effective, long-lasting SEO built specifically for Cleveland’s evolving search landscape.',
  whyChooseParagraph1: 'From industrial firms in the Flats to healthcare clinics in University Circle, we build city-specific SEO blueprints based on long-tail keyword data and regional competition. Our strategies resonate with what Clevelanders are actually searching.',
  whyChooseParagraph2: 'Every Cleveland client benefits from hands-on support, ethical optimization, and measurable results. We avoid generic templates and instead build custom SEO architectures mapped to your local service footprint.',
  whyChoosePoints: [
    {
      icon: 'TrendingUp',
      title: 'Long-Tail Keyword Growth',
      description: 'We target ultra-specific Cleveland queries to connect you with high-intent searchers and drive conversions.'
    },
    {
      icon: 'Lightbulb',
      title: 'Local Market Strategy',
      description: 'Custom-built SEO campaigns reflecting real-time Cleveland search behavior, industry competition, and community language.'
    },
    {
      icon: 'ShieldCheck',
      title: 'Transparent Partnership',
      description: 'We provide clear reporting, collaborative insights, and no black-box tactics—just Cleveland SEO that works.'
    },
    {
      icon: 'MapPinned',
      title: 'Geo-Targeted SEO Systems',
      description: 'Multi-location Cleveland businesses benefit from our proprietary approach to managing zip-code-level content silos and local map packs.'
    },
    {
      icon: 'Newspaper',
      title: 'Cleveland-Centric Content',
      description: 'We write copy and campaigns that match how people talk, search, and buy in Cleveland—from community language to event-based triggers.'
    }
  ],
  awards: {
    clutch: {
      headline: 'Top Cleveland SEO Agency - Clutch 2024',
      text: 'Recognized for data-driven SEO excellence and superior client results in Northeast Ohio.'
    },
    upcity: {
      headline: 'Cleveland SEO Excellence - UpCity 2024',
      text: 'UpCity honors TRAC for leading SEO innovation and client success in the Cleveland business community.'
    }
  },
  location: {
    officeImageUrl: GENERIC_OFFICE_LOCATION_IMAGE_SRC,
    streetAddress: '600 Superior Ave E, Suite 1300',
    addressLocality: 'Cleveland',
    addressRegion: 'OH',
    postalCode: '44114',
    addressCountry: 'US',
    phone: CONTACT_DETAILS.phone,
    email: CONTACT_DETAILS.email
  },
  bottomFormTitle: 'Request Your SEO Strategy',
  faqSectionHeadline: 'SEO FAQs for Cleveland Businesses',
  faqData: [
    {
      question: 'What SEO industries do you specialize in for Cleveland?',
      answer: 'We work with Cleveland firms in home services, legal, manufacturing, gyms, and retail—creating content that captures regional search intent.'
    },
    {
      question: 'How long does it take to see results?',
      answer: 'Most Cleveland clients start seeing traction in 90–120 days. Long-tail keywords often show movement faster due to lower competition.'
    },
    {
      question: 'Can you optimize our Google Business Profile?',
      answer: 'Yes—this is a core part of our local strategy. We improve GMB signals, citations, and proximity relevance.'
    },
    {
      question: 'Are your SEO methods safe and compliant?',
      answer: 'Absolutely. All our work is white-hat and aligns with Google’s Webmaster Guidelines.'
    },
    {
      question: 'Do you help with Cleveland-specific backlinks?',
      answer: 'Yes, we build backlinks through local content outreach, citations, directories, and niche partnerships across Cleveland and Northeast Ohio.'
    }
  ]
};
