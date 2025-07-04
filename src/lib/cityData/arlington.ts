import type { CityPageData } from '@/types';
import { Search, Settings, Users, Mail, TrendingUp, Lightbulb, ShieldCheck } from 'lucide-react';
import { CONTACT_DETAILS } from '@/lib/constants.tsx';

const GENERIC_CITY_HERO_IMAGE_SRC = 'https://cdn-icggj.nitrocdn.com/AphBmykuaGyxZijWArNhxcCiPzVdYZGT/assets/images/optimized/rev-d6d7292/thriveagency-nov.flywheelsites.com/files/770x385-2-1.pnghttps://cdn-icggj.nitrocdn.com/AphBmykuaGyxZijWArNhxcCiPzVdYZGT/assets/images/optimized/rev-d6d7292/thriveagency.com/files/Arlington-SEO-thumbnail.png';
const GENERIC_OFFICE_LOCATION_IMAGE_SRC = 'https://cdn-icggj.nitrocdn.com/AphBmykuaGyxZijWArNhxcCiPzVdYZGT/assets/images/optimized/rev-d6d7292/thriveagency.com/files/Arlington-office-location.png';

export const arlingtonData: CityPageData = {
  slug: 'arlington',
  cityName: 'Arlington',
  heroData: {
    pageTitle: 'Arlington SEO Agency & Company | TRAC - Arlington, TX SEO Experts',
    metaDescription: 'Looking for a top-rated Arlington SEO agency or Arlington SEO company? TRAC delivers tailored SEO strategies in Arlington, TX to boost organic traffic, leads, and sales. Get your free SEO proposal today!',
    heroTitle: 'Top Arlington SEO Agency & Company for Digital Growth',
    heroSubtitle: 'Arlington SEO Experts Focused on Driving Local Business Success',
    heroDescription: `As an experienced Arlington SEO agency and Arlington SEO company, TRAC crafts data-driven strategies that elevate your local visibility and drive real leads. Whether you’re searching for an Arlington SEO firm, an Arlington SEO consultant, or specialized SEO for landscapers in Arlington TX, our team customizes every campaign to your market and goals.

From optimizing your Google Business Profile for map-pack dominance to implementing precise technical SEO fixes for fast load times, we ensure your site ranks where it matters most. We research long-tail search terms—like “roof repair south Arlington” or “family dentist near UTA”—and weave them into content that resonates with Arlington residents. Our transparent reporting and hands-on approach make TRAC the SEO partner Arlington businesses trust for sustainable growth.

We specialize in delivering SEO for contractors in Arlington TX, healthcare providers, law firms, and retail businesses alike—each with custom keyword targeting and on-page optimization that aligns with your niche. If you're searching for a trusted SEO expert in Arlington or an Arlington TX SEO consultant that understands your market, you're in the right place.

Our Arlington SEO strategies are built around user behavior and search trends in your neighborhoods—from East Arlington and Dalworthington Gardens to businesses around The Parks Mall. Whether you're looking to increase visibility for a new business or need enterprise SEO support for a multi-location company in Arlington, our team has the tools and experience to make it happen.

Explore our SEO services for Arlington small businesses, or contact us today to discuss how we can build a campaign around your brand, your goals, and your location.`,
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
      description:
        'Stand out in Arlington map packs and “near me” searches. As a leading Arlington SEO agency, we fine-tune local listings, boost citations, and enhance your Google Business Profile to connect you with nearby customers.',
    },
    {
      icon: Settings,
      title: 'Technical Site SEO',
      description:
        'We conduct in-depth audits to ensure your site loads quickly for Arlington visitors, is mobile-friendly, and fully crawlable. Every technical fix is prioritized for maximum ROI.',
    },
    {
      icon: Users,
      title: 'Keyword Strategy',
      description:
        'Our Arlington TX SEO consultants identify high-intent keywords and long-tail queries—like “arlington seo agency” and “seo for landscapers Arlington TX”—to guide content and link-building.',
    },
    {
      icon: Mail,
      title: 'Content Marketing for Local SEO',
      description:
        'We create city-specific blog posts, service pages, and FAQs that align with how Arlington residents search, building your authority and keeping your site relevant.',
    },
  ],
  whyChooseSectionHeadline: 'Why Choose TRAC for SEO in Arlington?',
  whyChooseIntro:
    'We don’t do cookie-cutter SEO. TRAC’s local-first approach drives sustainable growth and measurable results.',
  whyChooseParagraph1:
    'Whether you need an Arlington SEO firm to boost foot traffic near AT&T Stadium or an Arlington SEO company to increase high-intent search visibility off Cooper Street, our strategies align with your business goals.',
  whyChooseParagraph2:
    'With transparent reporting and ethical, white-hat methods, we ensure your Arlington business maintains growth and avoids penalties, giving you confidence in long-term SEO success.',
  whyChoosePoints: [
    {
      icon: 'TrendingUp',
      title: 'Search Growth That Converts',
      description:
        'We target clicks and leads—calls, form submissions, and visits—instead of vanity metrics.',
    },
    {
      icon: 'Lightbulb',
      title: 'Deep Local Knowledge',
      description:
        'Our strategies reflect actual Arlington search behavior—from East Arlington homeowners to UTA students.',
    },
    {
      icon: 'ShieldCheck',
      title: 'Trustworthy SEO Execution',
      description:
        'We follow proven, white-hat methods to build lasting authority and protect your rankings.',
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
    addressLines: ['4600 Park Springs Blvd', 'Suite 100', 'Arlington, TX 76017'],
    phone: CONTACT_DETAILS.phone,
    email: CONTACT_DETAILS.email,
  },
  bottomFormTitle: 'Get Your SEO Proposal',
};
