import type { CityPageData } from '@/types';
import { Search, Settings, Mail, BarChart2, MapPin, Activity, TrendingUp, Lightbulb, ShieldCheck, Building2, } from 'lucide-react';
import { CONTACT_DETAILS } from '@/lib/constants.tsx';

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
  heroData: {
    pageTitle: 'Austin SEO Services | TRAC - SEO Company in Austin, TX',
    metaDescription:
      'TRAC is a trusted SEO company in Austin, TX helping startups, contractors, healthcare, and food brands rank higher. Long-tail SEO built for local intent.',
    heroTitle: 'Austin SEO Company: Fueling Growth in the Live Music Capital',
    heroSubtitle: 'SEO for South Congress, East Austin, Domain & Beyond',
    heroDescription: `In a city where tech startups thrive alongside food trucks and festivals, standing out in search requires precision. TRAC builds hyper-local SEO strategies for Austin businesses targeting exact-match long-tail phrases like “mobile pet grooming SEO Austin,” “best HVAC SEO company near South Lamar,” or “digital marketing for East Austin breweries.”

We don’t rely on vague SEO tactics. Our campaigns start with deep keyword research based on how real Austinites search—from Rainey Street nightlife to Steiner Ranch real estate. We optimize your site with fast-loading mobile experiences, GMB enhancements, and neighborhood-focused landing pages to win traffic and trust.

Whether you’re a SaaS company near The Domain, a legal office downtown, or a new cafe off South First, we tailor content and link strategies around your industry and audience intent. You get real leads, not vanity traffic. Our SEO approach combines data, content, and user behavior to build topical authority in your market—sustainably and ethically.

We also offer optimized content hubs across Texas verticals such as [landscaping SEO in Texas](https://www.traconomics.com/texas-landscaping-seo-company), [salon marketing solutions](https://www.traconomics.com/texas-salon-seo-services), and more. If you're looking for an SEO partner who knows Austin inside and out, we’re ready to lead the way.`,
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
      description:
        'Capture local searches like “East Austin tattoo shops” or “downtown coworking SEO.” We geo-target every asset.',
    },
    {
      icon: Settings,
      title: 'Technical SEO & Performance',
      description:
        'Speed, schema, mobile UX—we handle it all. Our audits and fixes help your site pass Core Web Vitals and get crawled efficiently.',
    },
    {
      icon: Mail,
      title: 'Localized Content & Link Building',
      description:
        'We create Austin-centric guides, event pages, and industry content that attract links and trust from relevant local sources.',
    },
    {
      icon: BarChart2,
      title: 'Advanced SEO Reporting',
      description:
        'No fluff. Just real keyword movement, traffic sources, heatmaps, and ROI-based dashboards you can act on.',
    },
    {
      icon: Activity,
      title: 'Conversion Optimization',
      description:
        'Ranking’s only half the battle—we optimize CTAs, lead flows, and page structure to improve conversion rates across devices.',
    },
    {
      icon: Building2,
      title: 'Multi‑Location Strategy',
      description:
        'Have multiple locations in Austin or across Texas? We deploy structured location pages and interlinked hubs that scale with you.',
    },
  ],
  whyChooseSectionHeadline: 'Why Partner with TRAC in Austin?',
  whyChooseIntro:
    'We combine local knowledge, keyword data, and technical execution to deliver SEO strategies that drive Austin growth.',
  whyChooseParagraph1:
    'We know what it takes to rank across Austin’s most-searched neighborhoods—whether it’s for tech startups in North Austin or contractors around Zilker. Our tailored SEO approach helps you reach your ideal customers where they live, search, and buy.',
  whyChooseParagraph2:
    'From the initial audit to ongoing link building and reporting, we keep everything transparent. Our clients trust us because we show our work—and we make it count with results.',
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
  },
  bottomFormTitle: 'Request Your SEO Plan',
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
  ],
};