import type { CityPageData } from '@/types';
import { Search, Settings, Users, Mail, TrendingUp, Lightbulb, ShieldCheck } from 'lucide-react';
import { CONTACT_DETAILS } from '@/lib/constants.tsx';

const GENERIC_CITY_HERO_IMAGE_SRC = 'https://cdn-icggj.nitrocdn.com/AphBmykuaGyxZijWArNhxcCiPzVdYZGT/assets/images/optimized/rev-d6d7292/thriveagency-nov.flywheelsites.com/files/770x385-2-1.png';
const GENERIC_OFFICE_LOCATION_IMAGE_SRC = 'https://cdn-icggj.nitrocdn.com/AphBmykuaGyxZijWArNhxcCiPzVdYZGT/assets/images/optimized/rev-d6d7292/thriveagency.com/files/Arlington-office-location.png';

export const arlingtonData: CityPageData = {
  slug: 'arlington',
  cityName: 'Arlington',
  metaKeywords: [
    'SEO agency for contractors in Arlington TX',
    'Arlington TX landscaping SEO company',
    'digital marketing for salons in Arlington Highlands',
    'local SEO specialists for law firms in Arlington',
    'multi-location SEO for Arlington healthcare providers',
    'affordable SEO services Arlington small business',
    'on-page optimization Arlington TX businesses',
    'best Arlington SEO strategy 2025',
    'content marketing for local Arlington shops',
    'technical SEO audits Arlington Texas',
    'google maps ranking boost Arlington area',
    'custom SEO plan for Arlington service companies',
  ],
  faqSectionHeadline: 'Frequently Asked Questions about Arlington SEO',
  heroData: {
    pageTitle: 'Arlington SEO Agency & Company | TRAC - Arlington, TX SEO Experts',
    metaDescription: 'Looking for expert SEO services in Arlington, TX? TRAC delivers industry-specific strategies for salons, auto dealers, contractors, and healthcare businesses. Grow with local SEO that works.',
    heroTitle: 'Top Arlington SEO Agency & Company for Digital Growth',
    heroSubtitle: 'Hyper-Local SEO Strategies for Real Business Impact in Arlington',
    heroDescription: `In a city as competitive and dynamic as Arlington, Texas, your business can’t afford to get lost in search results. At TRAC, we help Arlington-based companies dominate local rankings with SEO strategies tailored to neighborhoods like Dalworthington Gardens, East Arlington, and around The Parks Mall. From startups to seasoned service providers, our clients trust us to grow their presence, drive calls, and fill appointment calendars.

We specialize in working with high-impact verticals such as [landscaping SEO in Texas](https://www.traconomics.com/texas-landscaping-seo-company), [auto dealer SEO in Texas](https://www.traconomics.com/texas-auto-dealer-seo-marketing), [salon SEO in Texas](https://www.traconomics.com/texas-salon-seo-services), and healthcare or legal practices throughout Arlington. Whether you run a contractor business in South Arlington, a medspa off I-20, or a multi-location clinic near UTA, we tailor content and on-page strategy to your niche and audience.

We don’t just optimize for broad terms—we go after exact-match, long-tail phrases like “emergency HVAC repair Arlington TX”, “best criminal defense SEO Arlington”, and “walk-in salon digital marketing Arlington”. These low-competition, high-intent keywords are where your ROI lives.

From improving your Google Business Profile to full technical audits and mobile-first UX, our SEO approach is deeply technical yet conversion-focused. Our campaigns include schema markup, local citations, internal link architecture, and high-quality localized content that establishes topical authority and trust.

Unlike generic agencies, TRAC builds city-specific SEO assets that perform. We work with your Arlington customer base in mind—from Cooper Street to Green Oaks Boulevard—and we create ranking strategies that speak to both Google’s algorithm and your actual audience.

If you're looking for a strategic, transparent, and proven SEO partner in Arlington, we’re ready to show you what’s possible. Let TRAC build your next growth campaign with local precision and real business impact.`,
    heroImage: {
      src: GENERIC_CITY_HERO_IMAGE_SRC,
      alt: 'Arlington SEO Services by TRAC',
      dataAiHint: 'Arlington SEO agency and company',
    },
    heroVideoUrl: 'https://www.youtube.com/embed/JBPmDzL-Xek',
    formTitle: 'Free SEO Quote!',
  },
  resultsHeadline: 'SEO Wins That Drive Business in Arlington',
  readyToGrowHeadline: 'Ready to Elevate Your Arlington Business with SEO?',
  servicesSectionHeadline: 'SEO Services Built for Arlington’s Search Landscape',
  servicesSectionSubheadline: 'From local visibility to lead generation, we tailor every SEO service to Arlington’s unique market.',
  services: [
    {
      icon: Search,
      title: 'Local SEO Optimization',
      description: 'We help your business dominate in Arlington’s most-searched neighborhoods—targeting East Arlington, Southwest Arlington, and Dalworthington Gardens with geo-relevant landing pages, NAP consistency, and Google Maps optimization.',
    },
    {
      icon: Settings,
      title: 'Technical Site SEO',
      description: 'We fix slow load times, crawl issues, broken links, and weak schema structures to make your site technically sound and ready to rank across all Arlington user devices.',
    },
    {
      icon: Users,
      title: 'Keyword Strategy',
      description: 'We build a custom Arlington keyword matrix that targets both high-volume terms and long-tail opportunities—like “contractor SEO near Arlington Highlands” or “salon web optimization South Arlington”.',
    },
    {
      icon: Mail,
      title: 'Content Marketing for Local SEO',
      description: 'We craft local blog posts, service pages, and industry-specific content that targets how real people search in Arlington—earning backlinks and building trust in your niche.',
    },
  ],
  whyChooseSectionHeadline: 'Why Choose TRAC for SEO in Arlington?',
  whyChooseIntro: 'We don’t do cookie-cutter SEO. TRAC’s local-first approach drives sustainable growth and measurable results.',
  whyChooseParagraph1: 'Whether you’re a landscaper based in Southwest Arlington, a boutique law firm downtown, or a home service company near Lake Arlington, we tailor our SEO strategy to how your audience actually searches. We research location-specific behavior and seasonal keyword demand to create campaigns that make your phones ring and inboxes fill up. Our local-first methodology means Arlington-based businesses rank in Arlington—not just regionally.',
  whyChooseParagraph2: 'Our team goes beyond SEO checklists. We run full technical diagnostics, implement advanced on-page structure, optimize site speed, and manage local backlink acquisition—all while reporting clearly and consistently. TRAC believes in long-term SEO wins, not temporary rankings. We bring Arlington business owners a transparent roadmap to organic success—backed by data, insights, and decades of combined digital marketing experience.',
  whyChoosePoints: [
    {
      icon: 'TrendingUp',
      title: 'Search Growth That Converts',
      description: 'We go beyond rankings to focus on actual conversions—form fills, calls, appointment bookings, and direction requests from real Arlington users who need your service now.',
    },
    {
      icon: 'Lightbulb',
      title: 'Deep Local Knowledge',
      description: 'TRAC builds SEO campaigns rooted in Arlington’s neighborhoods, culture, and customer behavior—from UTA students and Cooper Street shoppers to North Arlington homeowners.',
    },
    {
      icon: 'ShieldCheck',
      title: 'Trustworthy SEO Execution',
      description: 'We use white-hat, algorithm-safe SEO practices aligned with Google’s guidelines to protect your site from penalties and help it grow sustainably month over month.',
    },
  ],
  awards: {
    clutch: {
      headline: 'Recognized by Clutch: Top Arlington SEO Agency',
      text: 'TRAC was named a leading Arlington SEO provider for client satisfaction, transparent methods, and strong local results.',
    },
    upcity: {
      headline: 'SEO Impact Award – UpCity 2024',
      text: 'UpCity honored our Arlington SEO team for delivering measurable growth to local businesses.',
    },
  },
  location: {
    officeImageUrl: GENERIC_OFFICE_LOCATION_IMAGE_SRC,
    streetAddress: '4600 Park Springs Blvd, Suite 100',
    addressLocality: 'Arlington',
    addressRegion: 'TX',
    postalCode: '76017',
    addressCountry: 'US',
    phone: CONTACT_DETAILS.phone,
    email: CONTACT_DETAILS.email,
  },
  bottomFormTitle: 'Get Your SEO Proposal',
  faqData: [
    {
      question: 'How much does SEO cost in Arlington, TX?',
      answer: 'SEO pricing in Arlington typically ranges from $1,200 to $2,500 per month. Pricing depends on your website’s existing condition, local competition, and your specific business goals. For example, a single-location salon may require a different strategy than a law firm with multi-location support or an HVAC company targeting multiple zip codes. We offer flexible plans customized for each Arlington business and provide detailed scopes before we begin.',
    },
    {
      question: 'How long until my Arlington business sees SEO results?',
      answer: 'Generally, Arlington businesses begin seeing measurable SEO traction within 3 to 4 months, depending on competition and industry. Some clients experience faster growth in niche industries, while others—especially those in legal or healthcare—may require longer ramp-up due to keyword competitiveness. Real, sustained results typically compound by months 6 to 9. We provide regular reports and adjust our strategy as your site gains more authority in the Arlington market.',
    },
    {
      question: 'What industries do you specialize in for Arlington SEO?',
      answer: 'TRAC specializes in SEO for service-based businesses including landscapers, contractors, law firms, med spas, chiropractors, auto dealers, and more. We build dedicated strategies that align with each niche’s competitive search environment in Arlington. Our team conducts thorough research on both general and hyperlocal terms to help your business earn visibility where it matters most—whether you operate on South Cooper Street, Matlock Road, or near Lake Arlington.',
    },
    {
      question: 'Can you help my business rank in multiple Arlington areas?',
      answer: 'Absolutely. We build location-targeted landing pages for each area you serve—whether that’s North Arlington, Dalworthington Gardens, or the I-20 corridor. These pages include unique content, optimized metadata, localized schema markup, and backlinks from trusted regional directories. We also track performance on a neighborhood level, so you know which areas are generating the most traction and which pages need further optimization. Multi-location SEO is one of our specialties.',
    },
    {
      question: 'Is TRAC a good fit for small businesses in Arlington?',
      answer: 'Yes. Our Arlington SEO solutions are perfect for small to mid-sized businesses aiming to generate consistent leads from search. We understand budget constraints and build lean, results-driven campaigns tailored to your service offerings and service radius. Whether you\'re a one-person roofing company or a small boutique law firm, our team ensures you get the most SEO value per dollar spent—without overwhelming jargon or bloated contracts.',
    },
    {
      question: 'Do you optimize for Arlington-specific search intent?',
      answer: 'Definitely. Our keyword research is hyper-targeted to how Arlington residents search—from mobile queries like “urgent AC repair near me” to long-tail phrases like “best salon near Arlington Highlands open late”. We use real-time data, local modifiers, and behavioral trends to build content and metadata that reflect Arlington’s unique search landscape. This ensures your site ranks for the exact terms that drive leads—not just vanity keywords.',
    },
  ],
};
