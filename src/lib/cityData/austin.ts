import type { CityPageData } from '@/types';
import { Search, Settings, Mail, BarChart2, TrendingUp, Lightbulb, ShieldCheck } from 'lucide-react';
import { CONTACT_DETAILS } from '@/lib/constants.tsx';

const GENERIC_CITY_HERO_IMAGE_SRC = 'https://cdn-icggj.nitrocdn.com/AphBmykuaGyxZijWArNhxcCiPzVdYZGT/assets/images/optimized/rev-d6d7292/thriveagency.com/files/Austin-SEO-Company.jpg';
const GENERIC_OFFICE_LOCATION_IMAGE_SRC = 'https://cdn-icggj.nitrocdn.com/AphBmykuaGyxZijWArNhxcCiPzVdYZGT/assets/images/optimized/rev-d6d7292/thriveagency.com/files/Austin-office-location.png';

export const austinData: CityPageData = {
  slug: 'austin',
  cityName: 'Austin',
  heroData: {
    pageTitle: 'Austin SEO Services | TRAC - SEO Company in Austin, TX',
    metaDescription: 'TRAC is a leading Austin SEO company helping businesses improve search rankings and drive organic traffic. Contact our Austin SEO experts today for a free quote!',
    heroTitle: 'Austin SEO Company: Fueling Growth in the Live Music Capital',
    heroSubtitle: 'Custom SEO Strategies for South Congress, Rainey Street, Domain, and Beyond',
    heroDescription: `In a city where startups rub shoulders with thriving live‑music venues, TRAC delivers SEO solutions tuned to Austin’s unique energy. We dive into local patterns—from Barton Springs weekend searches to “best tacos” in East Austin—and build campaigns that connect you with customers who are ready to act. Our full‑spectrum approach covers on‑page optimization, Google Business enhancements, and technical audits that ensure your site loads quickly for Austinites on the go.

We then craft content that resonates with your audience—whether you’re a tech innovator near The Domain or a family‑owned café on South First. By blending data‑backed keyword research with deep local insights, we help your business rank for long‑tail phrases like “vegan brunch Rainey Street” or “B2B software SEO in Austin.” Throughout our partnership, TRAC provides transparent reporting so you can see real progress in traffic, leads, and revenue.`,
    heroImage: { src: GENERIC_CITY_HERO_IMAGE_SRC, alt: 'SEO Services in Austin, TX', dataAiHint: 'Austin city tech' },
    heroVideoUrl: 'https://www.youtube.com/embed/JBPmDzL-Xek',
    formTitle: 'Get Your FREE SEO Audit!',
  },
  resultsHeadline: 'SEO Wins for Austin Startups & Local Icons',
  readyToGrowHeadline: 'Ready to Rank for Austin’s Top Searches?',
  servicesSectionHeadline: 'SEO Services Tailored to Austin’s Neighborhoods',
  servicesSectionSubheadline: 'From South Congress storefronts to Domain tech hubs, our SEO services align with how Austinites search and buy.',
  services: [
    {
      icon: Search,
      title: 'Neighborhood‑Focused SEO',
      description: 'Capture searches like “coffee shop near Lady Bird Lake” or “coworking space in East Austin.” We optimize for local intent so your business shows up where it matters.',
    },
    {
      icon: Settings,
      title: 'Technical SEO & Performance',
      description: 'We audit Core Web Vitals, mobile indexing, and site structure—ensuring fast load times for on‑the‑move Austinites and crawlability that keeps your rankings stable.',
    },
    {
      icon: Mail,
      title: 'Content & Authority Building',
      description: 'Our writers produce neighborhood guides, event round‑ups, and service pages that reflect Austin’s culture, building trust and backlinks from local sites.',
    },
    {
      icon: BarChart2,
      title: 'Analytics & Transparent Reporting',
      description: 'Receive clear dashboards tracking organic traffic, keyword movement, and lead quality. We highlight the metrics that show your ROI in Austin’s competitive market.',
    },
  ],
  whyChooseSectionHeadline: 'Why Partner with TRAC in Austin?',
  whyChooseIntro: 'We blend technical expertise with local know‑how to help you outrank competitors in Austin’s fast‑moving digital landscape.',
  whyChooseParagraph1: 'Austin’s diverse neighborhoods—from the live‑music venues of Sixth Street to the tech campuses around Mueller—require a nuanced SEO approach. We tailor strategies that meet your audience where they search and shop.',
  whyChooseParagraph2: 'Our process is collaborative and transparent. You’ll see regular updates on rankings, traffic, and leads, and we adjust tactics as trends shift—keeping your SEO ahead of the curve.',
  whyChoosePoints: [
    {
      icon: 'TrendingUp',
      title: 'Results that Convert',
      description: 'We focus on the search terms and metrics that drive calls, form fills, and foot traffic—not just rankings.',
    },
    {
      icon: 'Lightbulb',
      title: 'Local Market Expertise',
      description: 'Our team understands Austin’s culture and search behavior—from SXSW buzz to UT game‑day queries.',
    },
    {
      icon: 'ShieldCheck',
      title: 'Ethical, Sustainable Growth',
      description: 'We use white‑hat techniques that build lasting authority and protect your site from algorithm shifts.',
    },
  ],
  awards: {
    clutch: {
      headline: 'Clutch Top Austin SEO Agency 2024',
      text: 'Honored by Clutch for delivering standout SEO results to Austin businesses, from tech startups to eateries on South Congress.',
    },
    upcity: {
      headline: 'UpCity SEO Leader – Austin 2024',
      text: 'Awarded by UpCity for exceptional local SEO performance and client satisfaction across Austin’s diverse industries.',
    },
  },
  location: {
    officeImageUrl: GENERIC_OFFICE_LOCATION_IMAGE_SRC,
    addressLines: ['106 E 6th Street', 'Suite 900', 'Austin, TX 78701'],
    phone: CONTACT_DETAILS.phone,
    email: CONTACT_DETAILS.email,
  },
  bottomFormTitle: 'Request Your SEO Plan',
};
