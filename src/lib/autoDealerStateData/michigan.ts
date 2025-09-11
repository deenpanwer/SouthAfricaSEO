
import type { AutoDealerStatePageData } from '@/types';
import { Search, Car, Tag, Users, TrendingUp, Lightbulb, ShieldCheck, Settings, Mail, Wrench } from 'lucide-react';
import { CONTACT_DETAILS } from '@/lib/constants';

const STATE_HERO_IMAGE_SRC = '/trac-seo.jpg';
const STATE_COVERAGE_IMAGE_SRC = 'https://placehold.co/600x400.png';

export const michiganAutoDealerData: AutoDealerStatePageData = {
  slug: 'michigan',
  stateName: 'Michigan',
  heroData: {
    pageTitle: 'Michigan Auto Dealer SEO: Drive More Sales, Boost Revenue',
    metaDescription: 'Accelerate your Michigan car dealership\'s online presence. Our expert SEO strategies attract more car buyers, boost leads, and significantly increase your sales. Discover the difference.',
    heroTitle: 'Michigan Auto Dealer SEO: Dominate the Digital Showroom',
    heroSubtitle: 'Connect with Motivated Car Buyers Across Michigan and Maximize Your Sales Potential',
    heroDescription: 'Our specialized SEO services are meticulously crafted for auto dealerships throughout Michigan, the heartland of the American automotive industry. From Detroit and Grand Rapids to Lansing and Ann Arbor, we empower Michigan car dealers to dominate their local search results and attract a consistent flow of qualified leads for new and used vehicles (including EVs and trucks). Michigan\'s competitive auto market demands a targeted approach to reach the right consumers. Our comprehensive SEO strategies prioritize local optimization to target car buyers in specific Michigan communities, comprehensive inventory optimization, and content marketing that highlights your dealership\'s unique offerings, flexible financing options, and unparalleled service expertise. We understand the nuances of the Michigan auto market and the critical importance of reaching consumers researching their next vehicle online. Partner with us to steer your Michigan dealership towards unprecedented online success, increased market share, and substantial revenue growth.',
    heroImage: { src: STATE_HERO_IMAGE_SRC, alt: 'Michigan car dealership with American cars' },
    heroVideoUrl: 'https://www.youtube.com/embed/JBPmDzL-Xek',
    formTitle: 'Free Michigan Auto Dealer SEO Quote!',
  },
  resultsHeadline: 'SEO That Fuels Unprecedented Growth for Michigan Car Dealerships',
  readyToGrowHeadline: 'Ready to Put Your Michigan Dealership in the SEO Fast Lane for Unprecedented Sales?',
  servicesSectionHeadline: 'Tailored SEO Solutions for Michigan\'s Elite Auto Dealers & Dealership Groups',
  servicesSectionSubheadline: 'Our deep expertise in Michigan auto dealer SEO ensures you attract discerning car buyers across the Great Lakes State, promoting your diverse inventory of trucks, SUVs, EVs, and sedans. We don\'t just get you found; we get you chosen.',
  services: [
    { icon: Search, title: 'Local SEO for MI Car Dealers', description: 'Dominate local search results and connect with car shoppers in your Michigan service areas (e.g., \'Detroit car dealerships,\' \'used cars Grand Rapids\'). We optimize your Google Business Profile and local pages for maximum visibility and lead generation.' },
    { icon: Car, title: 'EV & Truck Inventory SEO', description: 'Achieve unparalleled visibility for your electric vehicle and truck inventory, targeting Michigan buyers interested in these popular and growing segments. We highlight your specialized offerings to attract high-value customers.' },
    { icon: Tag, title: 'Special Offers & Incentives SEO', description: 'Attract customers actively searching for new car incentives, competitive lease deals, and flexible financing offers available at Michigan dealerships. We ensure your promotions reach the right audience at the right time.' },
    { icon: Wrench, title: 'Certified Pre-Owned (CPO) SEO', description: 'Boost visibility for your Certified Pre-Owned inventory, highlighting the benefits and reliability for Michigan car buyers seeking value and peace of mind. We showcase the quality and assurance of your CPO vehicles.' },
  ],
  whyChooseSectionHeadline: 'Why Partner with Us for Unmatched Michigan Auto Dealer Growth',
  whyChooseIntro: 'We provide unparalleled SEO solutions meticulously tailored for the Michigan auto dealership market. Our mission is to empower your dealership to not only navigate but dominate the Motor City state\'s fiercely competitive digital landscape, achieving sustainable sales growth and an undeniably powerful online presence that translates directly into increased revenue.',
  whyChooseParagraph1: 'Our dedicated specialists possess profound expertise in the Michigan auto dealer sector, understanding the heritage and current trends of the automotive industry in the state. We don\'t just craft strategies; we engineer bespoke solutions that amplify your dealership\'s strengths, whether you specialize in domestic brands, imports, or emerging EV technologies. We work tirelessly to ensure your brand resonates with your ideal clientele.',
  whyChooseParagraph2: 'We are passionately committed to ethical, results-driven SEO that meticulously builds your dealership\'s online authority and significantly boosts customer traffic across Michigan. Our transparent, data-backed approach ensures you witness the tangible, direct impact of our automotive SEO services on your bottom line. We are relentless in our pursuit of your success, working crazy hard to bring you more business and maximize your profitability.',
  whyChoosePoints: [
    { icon: 'TrendingUp', title: 'MI Auto Dealer SEO Growth', description: 'Experience exponential growth in qualified leads and vehicle sales across Michigan. Our SEO strategies are laser-focused on driving motivated car buyers directly to your dealership\'s website and showroom, ensuring a continuous influx of high-value customers.' },
    { icon: 'Lightbulb', title: 'Michigan Auto Market Mastery', description: 'Benefit from cutting-edge SEO strategies specifically designed for the dynamic Michigan auto industry. We meticulously analyze regional buyer preferences, OEM incentives, and expertly navigate the competitive dealership landscape, giving you an undeniable edge.' },
    { icon: 'ShieldCheck', title: 'Trusted Growth Partner', description: 'Achieve enduring online success with our ethical, forward-thinking SEO practices, meticulously adapted for Michigan car dealerships. We build your brand\'s authority and cultivate a thriving customer base in the automotive heartland, ensuring long-term profitability and market leadership.' },
  ],
  awards: {
    clutch: { headline: 'Top MI Auto Dealer SEO - Industry Excellence Award 2024', text: 'Recognized for consistently driving exceptional SEO results and significant revenue growth for Michigan car dealerships, setting new benchmarks for digital success.' },
    upcity: { headline: 'Michigan Auto Dealer SEO Leadership - Client Impact Award 2024', text: 'Awarded for unparalleled SEO services and transformative client success in the Michigan automotive retail industry, demonstrating profound impact on business expansion.' },
  },
  coverageData: {
    mainHeadline: "Serving Auto Dealerships Across the Great Lakes State - Michigan",
    points: ["Metro Detroit (Detroit, Ann Arbor, Warren)", "Grand Rapids & West Michigan", "Lansing Capital Region", "Flint & Saginaw Bay Area", "Kalamazoo", "Traverse City & Northern Michigan", "And more..."],
    mapImageUrl: STATE_COVERAGE_IMAGE_SRC,
    mapImageAlt: "Map of Michigan showing service areas for auto dealer SEO"
  },
  bottomFormTitle: 'Get Your Auto Dealer SEO Plan',
};
