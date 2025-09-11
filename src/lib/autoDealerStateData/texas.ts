
import type { AutoDealerStatePageData } from '@/types';
import { Search, Car, Tag, Users, TrendingUp, Lightbulb, ShieldCheck, Settings, Mail, Wrench } from 'lucide-react';
import { CONTACT_DETAILS } from '@/lib/constants';

const STATE_HERO_IMAGE_SRC = '/trac-seo.jpg';
const STATE_COVERAGE_IMAGE_SRC = 'https://placehold.co/600x400.png';

export const texasAutoDealerData: AutoDealerStatePageData = {
  slug: 'texas',
  stateName: 'Texas',
  heroData: {
    pageTitle: 'Texas Auto Dealer SEO: Drive More Sales, Boost Revenue',
    metaDescription: 'Accelerate your Texas car dealership\'s online presence. Our expert SEO strategies attract more car buyers, boost leads, and significantly increase your sales. Discover the difference.',
    heroTitle: 'Texas Auto Dealer SEO: Dominate the Digital Showroom',
    heroSubtitle: 'Connect with Motivated Car Buyers Across Texas and Maximize Your Sales Potential',
    heroDescription: 'Our specialized SEO services are meticulously crafted for auto dealerships throughout Texas. In a state passionate about vehicles, from powerful trucks and versatile SUVs to luxurious cars, a commanding online presence is vital for dealerships in Houston, Dallas, Austin, San Antonio, and beyond. We empower Texas car dealers to dominate their local search results and attract a consistent flow of qualified leads for new and used vehicles, and significantly boost service department appointments. Texas\'s competitive auto market demands a targeted approach to reach the right consumers. Our comprehensive SEO strategies prioritize local optimization to target car buyers in specific Texan cities and communities, comprehensive inventory optimization, and content marketing that highlights your dealership\'s unique offerings, flexible financing options, and unparalleled service expertise. We understand the nuances of the Texas auto market and the critical importance of reaching consumers researching their next vehicle online. Partner with us to steer your Texas dealership towards unprecedented online success, increased market share, and substantial revenue growth.',
    heroImage: { src: STATE_HERO_IMAGE_SRC, alt: 'Texas car dealership showroom' },
    heroVideoUrl: 'https://www.youtube.com/embed/JBPmDzL-Xek',
    formTitle: 'Free Texas Auto Dealer SEO Quote!',
  },
  resultsHeadline: 'SEO That Accelerates Sales for Texas Car Dealerships to Unprecedented Levels',
  readyToGrowHeadline: 'Ready to Drive More Leads to Your Texas Dealership with Strategic SEO and Unprecedented Sales?',
  servicesSectionHeadline: 'Tailored SEO Solutions for Texas\'s Elite Auto Dealers & Dealership Groups',
  servicesSectionSubheadline: 'Our deep expertise in Texas auto dealer SEO ensures you attract discerning car buyers across the Lone Star State, promoting your diverse inventory of new cars, used vehicles, financing options, and service centers. We don\'t just get you found; we get you chosen.',
  services: [
    { icon: Search, title: 'Local SEO for TX Car Dealers', description: 'Dominate local search results and connect with car shoppers in your Texas service areas (e.g., \'car dealers Houston,\' \'used trucks Dallas\'). We optimize your Google Business Profile and local listings for maximum visibility and lead generation.' },
    { icon: Car, title: 'New & Used Vehicle Inventory SEO', description: 'Achieve unparalleled visibility for your new and pre-owned vehicle inventory pages, targeting specific makes, models, and features sought by Texas buyers. We highlight your diverse offerings to attract high-value customers.' },
    { icon: Tag, title: 'Auto Financing & Lease SEO', description: 'Attract customers actively searching for competitive car financing, flexible lease deals, and advantageous trade-in options at Texas dealerships. We ensure your promotions reach the right audience at the right time.' },
    { icon: Wrench, title: 'Car Service & Parts Department SEO', description: 'Drive significant traffic to your service center by optimizing for maintenance and repair keywords relevant to Texas vehicle owners (e.g., \'Ford service San Antonio\'). We position your service department as the trusted choice for quality care.' },
  ],
  whyChooseSectionHeadline: 'Why Partner with Us for Unmatched Texas Auto Dealer Growth',
  whyChooseIntro: 'We provide unparalleled SEO solutions meticulously tailored for the Texas auto dealership market. Our mission is to empower your dealership to not only navigate but dominate the Lone Star State\'s fiercely competitive digital landscape, achieving sustainable sales growth and an undeniably powerful online presence that translates directly into increased revenue.',
  whyChooseParagraph1: 'Our dedicated specialists possess profound expertise in the Texas auto dealer sector, understanding the unique car buying culture and dynamic market across the state. We don\'t just craft strategies; we engineer bespoke solutions that amplify your dealership\'s inventory, showcase your unparalleled customer service, and reinforce your unwavering commitment to community involvement. We work tirelessly to ensure your brand resonates with your ideal clientele.',
  whyChooseParagraph2: 'We are passionately committed to ethical, results-driven SEO that meticulously builds your dealership\'s online authority and significantly boosts customer traffic across Texas. Our transparent, data-backed approach ensures you witness the tangible, direct impact of our automotive SEO services on your bottom line. We are relentless in our pursuit of your success, working crazy hard to bring you more business and maximize your profitability.',
  whyChoosePoints: [
    { icon: 'TrendingUp', title: 'TX Auto Dealer SEO Growth', description: 'Experience exponential growth in qualified leads, showroom visits, and vehicle sales across Texas. Our SEO strategies are laser-focused on converting online researchers into loyal dealership customers, ensuring a continuous influx of high-value customers.' },
    { icon: 'Lightbulb', title: 'Texas Auto Market Mastery', description: 'Benefit from cutting-edge SEO strategies specifically designed for the dynamic Texas auto industry. We meticulously analyze regional buyer preferences (e.g., trucks in rural areas, luxury cars in cities), and expertly navigate major automotive events, giving you an undeniable edge.' },
    { icon: 'ShieldCheck', title: 'Trusted Growth Partner', description: 'Achieve enduring online success with our ethical, forward-thinking SEO practices, meticulously adapted for Texas car dealerships. We build your brand\'s authority and cultivate a thriving customer base in a highly competitive market, ensuring long-term profitability and market leadership.' },
  ],
  awards: {
    clutch: { headline: 'Top TX Auto Dealer SEO - Industry Excellence Award 2024', text: 'Recognized for consistently driving exceptional SEO results and significant revenue growth for Texas car dealerships, setting new benchmarks for digital success.' },
    upcity: { headline: 'Texas Auto Dealer SEO Leadership - Client Impact Award 2024', text: 'Awarded for unparalleled SEO services and transformative client success in the Texas automotive retail industry, demonstrating profound impact on business expansion.' },
  },
  coverageData: {
    mainHeadline: "Serving Auto Dealerships Across the Lone Star State - Texas",
    points: ["Dallas-Fort Worth Metroplex", "Greater Houston Area", "Austin & Central Texas", "San Antonio Region", "El Paso", "Corpus Christi", "Lubbock", "And more..."],
    mapImageUrl: STATE_COVERAGE_IMAGE_SRC,
    mapImageAlt: "Map of Texas showing service areas for auto dealer SEO"
  },
  bottomFormTitle: 'Get Your Auto Dealer SEO Plan',
};
