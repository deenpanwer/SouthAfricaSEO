
import type { AutoDealerStatePageData } from '@/types';
import { Search, Car, Tag, Users, TrendingUp, Lightbulb, ShieldCheck, Settings, Mail, Wrench } from 'lucide-react';
import { CONTACT_DETAILS } from '@/lib/constants';

const STATE_HERO_IMAGE_SRC = 'https://placehold.co/800x500.png';
const STATE_COVERAGE_IMAGE_SRC = 'https://placehold.co/600x400.png';

export const michiganAutoDealerData: AutoDealerStatePageData = {
  slug: 'michigan',
  stateName: 'Michigan',
  heroData: {
    pageTitle: 'Michigan Auto Dealer SEO | TRAC - SEO for MI Car Dealerships',
    metaDescription: 'Drive more sales for your Michigan car dealership with TRAC\'s expert SEO. Attract car buyers in MI for new, used, and EV vehicles. Get your free SEO proposal!',
    heroTitle: 'Michigan Auto Dealer SEO: Accelerate Your Sales in the Motor City State',
    heroSubtitle: 'Connect with Car Buyers Across Michigan with TRAC\'s Automotive SEO Expertise',
    heroDescription: 'TRAC provides specialized SEO services for auto dealerships throughout Michigan, the heartland of the American automotive industry. From Detroit and Grand Rapids to Lansing and Ann Arbor, we help Michigan car dealers enhance their online visibility, attract more qualified leads for new and used vehicles (including EVs and trucks), and increase sales. Our strategies focus on local SEO to target car buyers in specific Michigan communities, comprehensive inventory optimization, and content marketing that highlights your dealership\'s unique offerings, financing options, and service expertise. We understand the competitive Michigan auto market and the importance of reaching consumers researching their next vehicle online. Partner with TRAC to steer your Michigan dealership towards greater online success and market share.',
    heroImage: { src: STATE_HERO_IMAGE_SRC, alt: 'Michigan car dealership with American cars', dataAiHint: 'car dealership michigan' },
    heroVideoUrl: 'https://www.youtube.com/embed/JBPmDzL-Xek',
    formTitle: 'Free Michigan Auto Dealer SEO Quote!',
  },
  resultsHeadline: 'SEO That Fuels Growth for Michigan Car Dealerships',
  readyToGrowHeadline: 'Ready to Put Your Michigan Dealership in the SEO Fast Lane?',
  servicesSectionHeadline: 'Custom SEO for Michigan Auto Dealers & Dealership Groups',
  servicesSectionSubheadline: 'Our Michigan auto dealer SEO expertise helps you connect with car buyers across the Great Lakes State, promoting your inventory of trucks, SUVs, EVs, and sedans.',
  services: [
    { icon: Search, title: 'Local SEO for MI Car Dealers', description: 'Get found by car shoppers in your Michigan service areas (e.g., "Detroit car dealerships," "used cars Grand Rapids"). We optimize GMB and local pages.' },
    { icon: Car, title: 'EV & Truck Inventory SEO', description: 'Improve visibility for your electric vehicle and truck inventory, targeting Michigan buyers interested in these popular and growing segments.' },
    { icon: Tag, title: 'Special Offers & Incentives SEO', description: 'Attract customers searching for new car incentives, lease deals, and special financing offers available at Michigan dealerships.' },
    { icon: Wrench, title: 'Certified Pre-Owned (CPO) SEO', description: 'Boost visibility for your CPO inventory, highlighting the benefits and reliability for Michigan car buyers seeking value and peace of mind.' },
  ],
  whyChooseSectionHeadline: 'Why TRAC is Your Premier Partner for Michigan Auto Dealer SEO',
  whyChooseIntro: 'TRAC provides expert SEO solutions tailored for the Michigan auto dealership market. We help you navigate the Motor City state\'s digital landscape to achieve sustainable sales growth and brand recognition.',
  whyChooseParagraph1: 'Our Michigan auto dealer SEO specialists understand the heritage and current trends of the automotive industry in the state. We craft strategies that showcase your dealership\'s strengths, whether you sell domestic brands, imports, or emerging EV technologies.',
  whyChooseParagraph2: 'We are committed to ethical, results-focused SEO that builds your dealership\'s online authority and customer traffic across Michigan. Our transparent approach and detailed reporting keep you informed of your success.',
  whyChoosePoints: [
    { icon: 'TrendingUp', title: 'MI Auto Dealer SEO Growth', description: 'Increase qualified leads and vehicle sales across Michigan. We focus on SEO that drives motivated car buyers to your dealership\'s website and showroom.' },
    { icon: 'Lightbulb', title: 'Michigan Auto Market Expertise', description: 'Benefit from SEO strategies designed for the Michigan auto industry, considering regional buyer preferences, OEM incentives, and the competitive dealership landscape.' },
    { icon: 'ShieldCheck', title: 'Trusted MI Auto Dealer SEO', description: 'Achieve enduring online success with ethical SEO practices adapted for Michigan car dealerships, building your brand and customer base in the automotive heartland.' },
  ],
  awards: {
    clutch: { headline: 'Top MI Auto Dealer SEO - Motor City Digital Awards 2024', text: 'Recognized for driving exceptional SEO results for Michigan car dealerships.' },
    upcity: { headline: 'Michigan Auto Dealer SEO Excellence - UpCity 2024', text: 'Awarded for leading SEO services and client success in the Michigan automotive retail industry.' },
  },
  coverageData: {
    mainHeadline: "Serving Auto Dealerships Across the Great Lakes State - Michigan",
    points: ["Metro Detroit (Detroit, Ann Arbor, Warren)", "Grand Rapids & West Michigan", "Lansing Capital Region", "Flint & Saginaw Bay Area", "Kalamazoo", "Traverse City & Northern Michigan", "And more..."],
    mapImageUrl: STATE_COVERAGE_IMAGE_SRC,
    mapImageAlt: "Map of Michigan showing service areas for auto dealer SEO"
  },
  bottomFormTitle: 'Get Your Auto Dealer SEO Plan',
};
