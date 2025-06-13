
import type { AutoDealerStatePageData } from '@/types';
import { Search, Car, Tag, Users, TrendingUp, Lightbulb, ShieldCheck, Settings, Mail, Wrench } from 'lucide-react';
import { CONTACT_DETAILS } from '@/lib/constants';

const STATE_HERO_IMAGE_SRC = 'https://placehold.co/800x500.png';
const STATE_COVERAGE_IMAGE_SRC = 'https://placehold.co/600x400.png';

export const texasAutoDealerData: AutoDealerStatePageData = {
  slug: 'texas',
  stateName: 'Texas',
  heroData: {
    pageTitle: 'Texas Auto Dealer SEO | TRAC - SEO for TX Car Dealerships',
    metaDescription: 'Boost your Texas car dealership\'s sales with TRAC\'s expert SEO. Attract more car buyers in TX for new & used vehicles, financing, and service. Get a free SEO proposal!',
    heroTitle: 'Texas Auto Dealer SEO: Drive More Sales Across the Lone Star State',
    heroSubtitle: 'Connect with Car Buyers in Texas with TRAC\'s High-Performance Auto SEO',
    heroDescription: 'TRAC delivers specialized SEO services for auto dealerships throughout Texas. In a state passionate about vehicles, from trucks and SUVs to luxury cars, a commanding online presence is vital for dealerships in Houston, Dallas, Austin, San Antonio, and beyond. We help Texas car dealers increase website traffic, generate more qualified leads for new and used vehicles, and boost service department appointments. Our strategies focus on local SEO to target specific Texan cities and communities, inventory SEO to ensure your vehicles are found by interested buyers, and content marketing that positions your dealership as a trusted automotive resource. We understand the competitive Texas auto market and tailor our SEO approach to highlight your dealership\'s unique selling propositions, whether it\'s extensive inventory, competitive financing, or top-notch service. Partner with TRAC to accelerate your Texas dealership\'s online growth and leave competitors in the dust.',
    heroImage: { src: STATE_HERO_IMAGE_SRC, alt: 'Texas car dealership showroom', dataAiHint: 'car dealership texas' },
    heroVideoUrl: 'https://www.youtube.com/embed/JBPmDzL-Xek',
    formTitle: 'Free Texas Auto Dealer SEO Quote!',
  },
  resultsHeadline: 'SEO That Accelerates Sales for Texas Car Dealerships',
  readyToGrowHeadline: 'Ready to Drive More Leads to Your Texas Dealership with SEO?',
  servicesSectionHeadline: 'Custom SEO for Texas Auto Dealers & Dealership Groups',
  servicesSectionSubheadline: 'Our Texas auto dealer SEO expertise helps you connect with car buyers across the Lone Star State, promoting new cars, used inventory, financing options, and service centers.',
  services: [
    { icon: Search, title: 'Local SEO for TX Car Dealers', description: 'Get found by car shoppers in your Texas service areas (e.g., "car dealers Houston," "used trucks Dallas"). We optimize GMB, local listings, and dealership pages.' },
    { icon: Car, title: 'New & Used Vehicle Inventory SEO', description: 'Improve visibility for your new and pre-owned vehicle inventory pages, targeting specific makes, models, and features sought by Texas buyers.' },
    { icon: Tag, title: 'Auto Financing & Lease SEO', description: 'Attract customers searching for car financing, lease deals, and trade-in options at Texas dealerships through targeted content and keyword optimization.' },
    { icon: Wrench, title: 'Car Service & Parts Department SEO', description: 'Drive traffic to your service center by optimizing for maintenance and repair keywords relevant to Texas vehicle owners (e.g., "Ford service San Antonio").' },
  ],
  whyChooseSectionHeadline: 'Why TRAC is Your Premier Partner for Texas Auto Dealer SEO',
  whyChooseIntro: 'TRAC provides expert SEO solutions tailored for the Texas auto dealership market. We help you navigate the Lone Star State\'s competitive digital landscape to achieve sustainable sales growth.',
  whyChooseParagraph1: 'Our Texas auto dealer SEO specialists understand the unique car buying culture and market dynamics across the state. We craft strategies that highlight your dealership\'s inventory, customer service, and community involvement, resonating with Texan values.',
  whyChooseParagraph2: 'We are committed to ethical, results-focused SEO that builds your dealership\'s brand reputation and online leads across Texas. Our transparent approach and detailed reporting ensure you see the ROI of our automotive SEO services.',
  whyChoosePoints: [
    { icon: 'TrendingUp', title: 'TX Auto Dealer SEO Growth', description: 'Increase qualified leads, showroom visits, and vehicle sales across Texas. We focus on SEO that converts online researchers into dealership customers.' },
    { icon: 'Lightbulb', title: 'Texas Auto Market Expertise', description: 'Benefit from SEO strategies designed for the Texas auto industry, considering regional preferences (e.g., trucks in rural areas, luxury cars in cities), and major automotive events.' },
    { icon: 'ShieldCheck', title: 'Trusted TX Auto Dealer SEO', description: 'Achieve enduring online success with ethical SEO practices adapted for Texas car dealerships, building your brand and customer loyalty in a highly competitive market.' },
  ],
  awards: {
    clutch: { headline: 'Top TX Auto Dealer SEO - Lone Star Automotive Awards 2024', text: 'Recognized for driving exceptional SEO results for Texas car dealerships.' },
    upcity: { headline: 'Texas Auto Dealer SEO Excellence - UpCity 2024', text: 'Awarded for leading SEO services and client success in the Texas automotive retail sector.' },
  },
  coverageData: {
    mainHeadline: "Serving Auto Dealerships Across the Lone Star State - Texas",
    points: ["Dallas-Fort Worth Metroplex", "Greater Houston Area", "Austin & Central Texas", "San Antonio Region", "El Paso", "Corpus Christi", "Lubbock", "And more..."],
    mapImageUrl: STATE_COVERAGE_IMAGE_SRC,
    mapImageAlt: "Map of Texas showing service areas for auto dealer SEO"
  },
  bottomFormTitle: 'Get Your Auto Dealer SEO Plan',
};
