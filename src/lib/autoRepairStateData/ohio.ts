
import type { AutoRepairStatePageData } from '@/types';
import { Search, Wrench, Users, Settings, TrendingUp, Lightbulb, ShieldCheck, Mail } from 'lucide-react';
import { CONTACT_DETAILS } from '@/lib/constants';

const STATE_HERO_IMAGE_SRC = '/trac-seo.jpg';
const STATE_COVERAGE_IMAGE_SRC = 'https://placehold.co/600x400.png';

export const ohioAutoRepairData: AutoRepairStatePageData = {
  slug: 'ohio',
  stateName: 'Ohio',
  heroData: {
    pageTitle: 'Ohio Auto Repair SEO: Drive More Business, Boost Revenue',
    metaDescription: 'Accelerate your Ohio auto repair shop\'s online presence. Our expert SEO strategies attract more customers, boost service appointments, and significantly increase your revenue. Discover the difference.',
    heroTitle: 'Ohio Auto Repair SEO: Keep Your Service Bays Thriving',
    heroSubtitle: 'Connect with Car Owners Across Ohio and Maximize Your Shop\'s Potential',
    heroDescription: 'Our specialized SEO services are meticulously crafted for auto repair shops throughout Ohio. Whether your garage is in Cleveland, Columbus, Cincinnati, Toledo, Akron, or any other Ohio community, we empower you to dominate your local search results and attract a consistent flow of new customers needing reliable vehicle maintenance and repair. Ohio drivers face diverse weather conditions and rely on skilled mechanics to keep their cars running smoothly; your digital storefront must not only reflect this but also project unparalleled expertise and trustworthiness. Our comprehensive SEO strategies prioritize local optimization to ensure your shop ranks prominently when vehicle owners in your Ohio service area search for \'best mechanic near me,\' \'oil change Columbus,\' or \'brake repair Cleveland.\' We optimize your website for technical excellence, create informative content about car care and common automotive issues, and highlight your shop\'s unparalleled expertise, certifications, and unwavering commitment to customer satisfaction. Partner with us to drive substantial revenue growth to your Ohio auto repair shop and establish a strong, trusted, and dominant online presence.',
    heroImage: { src: STATE_HERO_IMAGE_SRC, alt: 'Ohio auto repair garage' },
    heroVideoUrl: 'https://www.youtube.com/embed/JBPmDzL-Xek',
    formTitle: 'Free Ohio Auto Repair SEO Quote!',
  },
  resultsHeadline: 'SEO That Drives Consistent, High-Revenue Business to Ohio Auto Repair Shops',
  readyToGrowHeadline: 'Ready to Supercharge Your Ohio Auto Shop\'s SEO Performance for Unprecedented Growth?',
  servicesSectionHeadline: 'Tailored SEO Solutions for Ohio\'s Elite Auto Repair & Mechanic Businesses',
  servicesSectionSubheadline: 'Our deep expertise in Ohio auto repair SEO ensures you attract discerning car owners needing services from routine maintenance like oil changes and tire services to complex engine and transmission repairs across the Buckeye State. We don\'t just get you found; we get you chosen.',
  services: [
    { icon: Search, title: 'Local SEO for OH Auto Shops', description: 'Dominate local search results and connect with drivers in your Ohio service areas (e.g., \'Cleveland auto repair,\' \'mechanic near me Columbus\'). We optimize your Google Business Profile and local directory listings for maximum visibility and lead generation.' },
    { icon: Wrench, title: 'Specific Repair Service SEO', description: 'Achieve unparalleled visibility for high-demand services such as brake repair, engine diagnostics, transmission work, and electrical system repair offered by your Ohio shop. We highlight your specialized expertise to attract high-value customers.' },
    { icon: ShieldCheck, title: 'ASE Certified & Specialty Repair SEO', description: 'Highlight your ASE certifications and any specialty services (e.g., import car repair, classic car restoration) to attract discerning Ohio customers. We showcase your qualifications and unique offerings to build trust and authority.' },
    { icon: Mail, title: 'Content on OH Vehicle Maintenance', description: 'Develop helpful, in-depth content about vehicle maintenance tailored for Ohio seasons (winterization, summer prep), common warning signs of car trouble, and the undeniable benefits of choosing a trusted local mechanic. This positions your shop as an authoritative resource.' },
  ],
    whyChooseSectionHeadline: 'Why Partner with Us for Unmatched Ohio Auto Repair Growth',
  whyChooseIntro: 'TRAC provides expert SEO solutions tailored for the Ohio auto repair market. We help your shop navigate the Buckeye State\'s digital landscape to achieve steady customer growth and enhanced local reputation.',
  whyChooseParagraph1: 'Our Ohio auto repair SEO specialists understand the needs of independent garages and service centers. We craft strategies that emphasize your shop\'s reliability, technical skill, and customer service, appealing to Ohioans looking for dependable auto care.',
  whyChooseParagraph2: 'We are committed to ethical, results-driven SEO that builds your auto repair shop\'s online authority and customer loyalty across Ohio. Our transparent reporting ensures you see the direct value of our services in increased bookings.',
  whyChoosePoints: [
    { icon: 'TrendingUp', title: 'OH Auto Repair SEO Growth', description: 'Increase service appointments and customer inquiries across Ohio. We focus on SEO that connects you with car owners actively seeking quality auto repair and maintenance services.' },
    { icon: 'Lightbulb', title: 'Ohio Auto Care Market Expertise', description: 'Benefit from SEO strategies designed for the Ohio auto service sector, considering regional driving needs, popular vehicle types, and local customer expectations for service and value.' },
    { icon: 'ShieldCheck', title: 'Trusted OH Auto Repair SEO', description: 'Achieve long-term online success with ethical SEO practices adapted for Ohio auto repair shops, building your local reputation and a steady stream of satisfied customers.' },
  ],
  awards: {
    clutch: { headline: 'Top OH Auto Repair SEO - Buckeye Mechanics Choice 2024', text: 'Recognized for driving exceptional SEO results for Ohio auto repair businesses, boosting their local visibility.' },
    upcity: { headline: 'Ohio Auto Repair SEO Excellence - UpCity 2024', text: 'Awarded for leading SEO services and client success in the Ohio automotive aftermarket and repair industry.' },
  },
  coverageData: {
    mainHeadline: "Serving Auto Repair Shops Across the Buckeye State - Ohio",
    points: ["Columbus Metro Area", "Cleveland-Akron-Canton Region", "Cincinnati Metro Area", "Toledo & Northwest Ohio", "Dayton & Miami Valley", "Youngstown & Mahoning Valley", "And more..."],
    mapImageUrl: STATE_COVERAGE_IMAGE_SRC,
    mapImageAlt: "Map of Ohio showing service areas for auto repair SEO"
  },
  bottomFormTitle: 'Get Your Auto Repair SEO Plan',
};
