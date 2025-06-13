
import type { SalonStatePageData } from '@/types';
import { Search, Scissors, Sparkles, Users, TrendingUp, Lightbulb, ShieldCheck, Settings, Mail, CalendarDays } from 'lucide-react';
import { CONTACT_DETAILS } from '@/lib/constants';

const STATE_HERO_IMAGE_SRC = 'https://placehold.co/800x500.png';
const STATE_COVERAGE_IMAGE_SRC = 'https://placehold.co/600x400.png';

export const georgiaSalonData: SalonStatePageData = {
  slug: 'georgia',
  stateName: 'Georgia',
  heroData: {
    pageTitle: 'Georgia Salon SEO | TRAC - SEO for GA Beauty Salons & Spas',
    metaDescription: 'Attract more clients to your Georgia salon or spa with TRAC\'s expert SEO. Rank higher for hair styling, nail services, and spa treatments in GA. Get a free SEO proposal!',
    heroTitle: 'Georgia Salon & Spa SEO: Enhance Your Southern Charm Online',
    heroSubtitle: 'Connect with Beauty Clients Across Georgia with TRAC\'s Stylish SEO',
    heroDescription: 'TRAC offers specialized SEO services for beauty salons, hair studios, nail bars, and spas throughout Georgia. From the bustling Atlanta metro area to charming historic cities like Savannah and Athens, we help Georgia beauty businesses boost their online presence and attract a loyal clientele. Georgians appreciate style and quality service, and your digital storefront needs to reflect that. Our SEO strategies focus on local search optimization to ensure clients in your specific Georgia community can find you easily when searching for "best hair salon Atlanta," "nail spa Savannah," or "spa day deals near me." We optimize your website for an excellent user experience, showcase your salon\'s unique atmosphere and talented team through captivating content and visuals, and help manage your online reviews to build a stellar reputation. Partner with TRAC to make your Georgia salon or spa the preferred choice for beauty and relaxation in the Peach State.',
    heroImage: { src: STATE_HERO_IMAGE_SRC, alt: 'Elegant Georgia salon setting', dataAiHint: 'salon interior georgia' },
    heroVideoUrl: 'https://www.youtube.com/embed/JBPmDzL-Xek',
    formTitle: 'Free Georgia Salon SEO Quote!',
  },
  resultsHeadline: 'SEO That Helps Georgia Salons & Spas Radiate Success Online',
  readyToGrowHeadline: 'Ready to Beautify Your Georgia Salon\'s SEO & Client List?',
  servicesSectionHeadline: 'Custom SEO for Georgia Salons, Spas & Beauty Professionals',
  servicesSectionSubheadline: 'Our Georgia salon SEO expertise helps you attract clients seeking haircuts, color treatments, manicures, pedicures, facials, massages, and other pampering services across the Peach State.',
  services: [
    { icon: Search, title: 'Local SEO for GA Salons & Spas', description: 'Get found by clients in your Georgia service areas (e.g., "Atlanta beauty salon," "spa in Athens GA"). We optimize GMB, local directories, and appointment booking systems.' },
    { icon: Scissors, title: 'Hair & Nail Service SEO', description: 'Improve visibility for your salon\'s specific offerings, such as haircuts, coloring, extensions, manicures, pedicures, and nail art in Georgia.' },
    { icon: CalendarDays, title: 'Spa & Wellness Treatment SEO', description: 'Target clients searching for facials, massages, body wraps, and other wellness treatments available at your Georgia spa, highlighting unique services and packages.' },
    { icon: Sparkles, title: 'Bridal & Event Styling SEO', description: 'Attract clients looking for bridal hair and makeup, prom styling, and special event beauty services offered by your Georgia salon professionals.' },
  ],
  whyChooseSectionHeadline: 'Why TRAC is Your Premier Partner for Georgia Salon & Spa SEO',
  whyChooseIntro: 'TRAC provides expert SEO solutions tailored for the Georgia beauty and wellness industry. We help your salon or spa navigate the Peach State\'s digital landscape to achieve sustainable client growth and enhanced brand prestige.',
  whyChooseParagraph1: 'Our Georgia salon SEO specialists understand the local beauty trends and client expectations. We craft strategies that showcase your salon\'s unique ambiance, skilled technicians, and commitment to delivering exceptional experiences, resonating with discerning Georgians.',
  whyChooseParagraph2: 'We are committed to ethical, results-focused SEO that builds your salon\'s online authority and appointment book across Georgia. Our transparent approach means you\'re always aware of your campaign\'s progress and success.',
  whyChoosePoints: [
    { icon: 'TrendingUp', title: 'GA Salon SEO Growth', description: 'Increase appointment bookings and attract new, loyal clients across Georgia. We focus on SEO that highlights your salon\'s quality and unique offerings.' },
    { icon: 'Lightbulb', title: 'Georgia Beauty Market Expertise', description: 'Benefit from SEO strategies designed for the GA salon industry, considering regional style preferences, popular treatments, and the competitive environment from metro Atlanta to coastal cities.' },
    { icon: 'ShieldCheck', title: 'Trusted GA Salon SEO Partner', description: 'Achieve lasting online success with ethical SEO practices adapted for Georgia salons and spas, building your brand and a devoted clientele in a competitive market.' },
  ],
  awards: {
    clutch: { headline: 'Top GA Salon SEO - Peach Beauty Awards 2024', text: 'Recognized for driving exceptional SEO results for Georgia salons and spas, enhancing their local visibility and client bookings.' },
    upcity: { headline: 'Georgia Salon SEO Excellence - UpCity 2024', text: 'Awarded for leading SEO services and client success in the Georgia beauty and wellness sector, helping businesses shine.' },
  },
  coverageData: {
    mainHeadline: "Serving Salons & Spas Across the Peach State - Georgia",
    points: ["Atlanta Metro Area", "Augusta-Richmond County", "Columbus Area", "Savannah & Coastal Georgia", "Macon-Bibb County", "Athens-Clarke County", "Gainesville", "And more..."],
    mapImageUrl: STATE_COVERAGE_IMAGE_SRC,
    mapImageAlt: "Map of Georgia showing service areas for salon and spa SEO"
  },
  bottomFormTitle: 'Get Your Salon & Spa SEO Plan',
};
