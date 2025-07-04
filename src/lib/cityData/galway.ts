import type { CityPageData } from '@/types';
import { Search, Settings, Briefcase, Mail, BarChart2, TrendingUp, Lightbulb, ShieldCheck } from 'lucide-react';
import { CONTACT_DETAILS } from '@/lib/constants.tsx';

const GENERIC_CITY_HERO_IMAGE_SRC = 'https://cdn-icggj.nitrocdn.com/AphBmykuaGyxZijWArNhxcCiPzVdYZGT/assets/images/optimized/rev-d6d7292/thriveagency.com/files/SEO-Company.jpg';
const GENERIC_OFFICE_LOCATION_IMAGE_SRC = 'https://cdn-icggj.nitrocdn.com/AphBmykuaGyxZijWArNhxcCiPzVdYZGT/assets/images/optimized/rev-d6d7292/thriveagency.com/files/Cleveland-Thrive-office-location.jpg';

export const galwayData: CityPageData = {
  slug: 'galway',
  cityName: 'Galway',
  metaKeywords: [
    'Galway SEO agency',
    'SEO services Galway City',
    'local SEO Galway Ireland',
    'Galway tourism SEO',
    'med-tech SEO Galway',
    'Connacht digital marketing',
    'Irish west coast SEO company',
    'SEO for Galway creative industries',
    'Galway business SEO experts',
    'Galway online visibility agency'
  ],
  heroData: {
    pageTitle: 'Galway SEO Services | TRAC - SEO Agency Galway, Ireland',
    metaDescription: 'TRAC offers expert SEO services for Galway businesses. Boost your visibility in Galway City and County with tailored strategies for tourism, med-tech, ICT, and creative industries. Outrank competitors and reach your audience online with TRAC.',
    heroTitle: 'Galway SEO Agency: Amplify Your Presence in the West',
    heroSubtitle: 'Connect with More Customers in Galway with TRAC\'s Creative SEO Strategies',
    heroDescription: `In the vibrant city of Galway—where creativity, tourism, and innovation intersect—your digital presence must stand out. TRAC delivers customized SEO services tailored for Galway's diverse economy, from bustling hospitality venues near the Spanish Arch to rapidly growing med-tech firms in Parkmore.

We help Galway businesses rank higher for hyper-local long-tail search terms like "Galway city festival planner SEO," "Connacht med-tech visibility," or "tourist experience Galway SEO." Our full-stack SEO approach includes:

- On-page and schema optimization to dominate Galway-centric SERPs
- Local GMB enhancements, review schema, and map pack visibility
- Content strategies that highlight Galway's rich cultural events and seasonal trends

TRAC understands the search behavior unique to Ireland's west coast—tourist-driven seasonal peaks, hyper-local service queries, and niche B2B targeting for Galway-based enterprises.

Looking to specialize? We also support:
https://traconomics.com/ireland-tourism-seo-services
https://traconomics.com/ireland-healthcare-seo-strategies
https://traconomics.com/ireland-ecommerce-seo-company`,
    heroImage: { src: GENERIC_CITY_HERO_IMAGE_SRC, alt: 'SEO Services in Galway, Ireland', dataAiHint: 'Galway city arts' },
    heroVideoUrl: 'https://www.youtube.com/embed/JBPmDzL-Xek',
    formTitle: 'Get Your FREE Galway SEO Consultation!',
  },
  resultsHeadline: 'Creative & Effective SEO Results for Galway Businesses',
  readyToGrowHeadline: 'Ready to Grow Your Galway Business with Impactful SEO?',
  servicesSectionHeadline: 'Specialized SEO Services for Galway & Connacht',
  servicesSectionSubheadline: 'Our Galway SEO strategies are tailored to Ireland\'s West Coast, helping businesses leverage digital marketing to reach local, national, and international audiences effectively.',
  services: [
    { icon: Search, title: 'Galway Local SEO & Tourism Focus', description: 'Optimize your online presence for local searches in Galway City and County, including targeting for major events like the Galway Arts Festival. We ensure tourists and locals alike can easily find your Galway business through improved GMB listings and local keyword targeting.' },
    { icon: Settings, title: 'Technical SEO for Galway Websites', description: 'Ensure your Galway-focused website is technically optimized for search engines, providing excellent user experience through fast load times, mobile responsiveness, and clean code. This is crucial for ranking in Galway\'s competitive digital space.' },
    { icon: Mail, title: 'Content Marketing for Galway SEO & Arts Scene', description: 'Create engaging, high-quality content that reflects Galway\'s vibrant culture and attracts your target audience. We develop content strategies that build SEO authority and drive traffic for businesses in Galway, from festival guides to local business spotlights.' },
    { icon: Briefcase, title: 'SEO for Med-Tech, ICT & Creative Industries in Galway', description: 'Tailored SEO for Galway\'s growing med-tech and ICT sectors, as well as its established creative and tourism industries. We understand the specific needs of these dynamic Galway markets and how to reach their target audiences.' },
  ],
  whyChooseSectionHeadline: 'Why Galway Businesses Choose TRAC for SEO',
  whyChooseIntro: 'Our SEO approach is rooted in Galway’s identity—creative, local-first, and globally aware. TRAC brings unmatched precision to search campaigns for western Ireland.',
  whyChooseParagraph1: 'We craft long-tail SEO strategies based on real search data from Galway users—like "SEO for Irish festival vendors," "Connacht property listings visibility," or "Galway clinic appointment bookings via search." Whether you run a B&B in Salthill or a tech firm in Parkmore, we make your SEO journey location-specific and result-driven.',
  whyChooseParagraph2: 'Transparency and long-term ROI are at the heart of our SEO philosophy. Every client in Galway receives custom dashboards, keyword tracking, local citations, and campaign strategies based on performance—not guesswork.',
  whyChoosePoints: [
    { icon: 'TrendingUp', title: 'Galway SEO Growth & Visibility', description: 'Increase your organic search rankings and attract more customers in the competitive Galway market. We focus on delivering measurable results that enhance your online presence in Ireland.' },
    { icon: 'Lightbulb', title: 'West of Ireland SEO Expertise', description: 'Benefit from SEO strategies specifically designed for the Galway market, understanding local search trends, cultural events, and the unique economic drivers of the Connacht region.' },
    { icon: 'ShieldCheck', title: 'Reliable & Creative Galway SEO', description: 'Experience transparent, ethical, and effective SEO services focused on the long-term success of your Galway business. We build strategies that are as creative and resilient as Galway itself.' },
  ],
  awards: {
    clutch: { headline: 'Top Galway SEO Agency - West of Ireland Awards 2024', text: 'Recognized for creative and effective SEO strategies that deliver for businesses in Galway, particularly in the arts, tourism, and tech sectors.' },
    upcity: { headline: 'Galway SEO Leaders - Connacht Region 2024', text: 'Awarded for providing outstanding SEO services and achieving significant online growth for businesses throughout Galway and the West of Ireland.' },
  },
  location: {
    officeImageUrl: GENERIC_OFFICE_LOCATION_IMAGE_SRC,
    streetAddress: '30th Dock',
    addressLocality: 'Galway City',
    addressRegion: 'County Galway',
    postalCode: '',
    addressCountry: 'IE',
    phone: CONTACT_DETAILS.phone,
    email: CONTACT_DETAILS.email,
  },
  bottomFormTitle: 'Request Your SEO Plan',
  faqSectionHeadline: 'Galway SEO FAQs: What Businesses Want to Know',
  faqData: [
    {
      question: 'How long does SEO take to work for Galway businesses?',
      answer: 'Typically, Galway clients begin seeing early keyword movement within 2–3 months, with tangible traffic and conversion improvements around months 4–6. Tourism and event-based businesses may see spikes faster during peak seasons.'
    },
    {
      question: 'Do you provide SEO services for Galway eCommerce sites?',
      answer: 'Absolutely. Whether you sell Irish crafts, event tickets, or medical devices, our Galway SEO team builds category-focused keyword maps, enhances your Shopify/WooCommerce architecture, and implements structured data for better CTRs.'
    },
    {
      question: 'Can you help rank for Galway festival- or event-related searches?',
      answer: 'Yes. We build topical landing pages and optimized guides to target search traffic around annual Galway events like the Arts Festival, Oyster Festival, and Film Fleadh.'
    },
    {
      question: 'Is international SEO important for Galway businesses?',
      answer: 'Many Galway firms target UK, US, and EU customers. We configure hreflang, subdomain structure, and translation best practices to help you reach international markets.'
    },
    {
      question: 'Do you offer local citation building for Galway businesses?',
      answer: 'Yes. We submit your business details to top Irish directories and location-based citation sources to increase trust and improve local SEO scores.'
    }
  ]
};