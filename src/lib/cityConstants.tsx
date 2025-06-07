
import type { CityPageData } from '@/types';
import { Briefcase, Search, BarChart2, Users, Settings, Mail, ShieldCheck, TrendingUp, Lightbulb, MapPin, Phone, Award } from 'lucide-react'; // Using existing icons, can be changed
import { CONTACT_DETAILS } from '@/lib/constants.tsx';

// Generic placeholder image for new cities - hero
const GENERIC_CITY_HERO_IMAGE_SRC = 'https://placehold.co/800x500.png';
// Generic placeholder image for new cities - office location
const GENERIC_OFFICE_LOCATION_IMAGE_SRC = 'https://placehold.co/600x400.png';

export const CITIES_DATA: CityPageData[] = [
  {
    slug: 'portland',
    cityName: 'Portland',
    heroData: {
      pageTitle: 'TRAC - Portland SEO Services | Expert SEO Agency',
      metaDescription: 'Boost your Portland business with TRAC\'s expert SEO services. Drive organic traffic, increase leads, and maximize sales. Get your free SEO audit & proposal today!',
      heroTitle: 'Portland SEO Agency',
      heroSubtitle: 'Dominate Search Rankings in Portland with TRAC\'s Proven SEO Strategies',
      heroDescription: 'TRAC is a leading SEO agency serving Portland, OR. We specialize in comprehensive search engine optimization, from local SEO for Portland businesses to technical SEO audits and content strategies that drive organic growth. Our data-driven approach ensures your Portland company achieves higher visibility and attracts qualified customers searching for your services.',
      heroImage: {
        src: 'https://thriveagency.com/files/Portland-city-img.png',
        alt: 'Portland SEO Services by TRAC',
        dataAiHint: 'portland skyline seo'
      },
      heroVideoUrl: 'https://www.youtube.com/embed/JBPmDzL-Xek',
      formTitle: 'Get My FREE Portland SEO Proposal!',
    },
    resultsHeadline: 'Our Portland SEO Clients Get Measurable Results',
    readyToGrowHeadline: 'Ready to Grow Your Portland Business with Expert SEO?',
    servicesSectionHeadline: 'Portland SEO Services',
    servicesSectionSubheadline: 'Comprehensive SEO Solutions Tailored for Businesses in Portland, Oregon',
    services: [
      { icon: Search, title: 'Local SEO for Portland', description: 'Optimize for "near me" searches and dominate Google Maps in the Portland area. We help local customers find your business first.' },
      { icon: Settings, title: 'Technical SEO Audits', description: 'Ensure your website is perfectly optimized for search engines. We identify and fix technical issues hindering your Portland rankings.' },
      { icon: Users, title: 'Keyword Research & Strategy', description: 'Uncover high-intent keywords Portland customers are using. We build strategies to target these valuable search terms.' },
      { icon: Briefcase, title: 'E-commerce SEO for Portland', description: 'Drive more sales for your online store in Portland with specialized e-commerce SEO tactics and product page optimization.' },
      { icon: Mail, title: 'Content Marketing & Link Building', description: 'Create authoritative content that attracts links and ranks in Portland. We build high-quality backlinks to boost your domain authority.' },
      { icon: BarChart2, title: 'SEO Analytics & Reporting', description: 'Track your Portland SEO performance with transparent, detailed reports. We measure what matters for your bottom line.' },
    ],
    whyChooseSectionHeadline: 'Why Choose TRAC As Your Portland SEO Company',
    whyChooseIntro: 'Partner with TRAC for data-driven SEO in Portland. We\'re committed to boosting your online presence and achieving sustainable growth for your business in the Rose City.',
    whyChooseParagraph1: 'Choosing the right SEO partner in Portland is crucial. You need an agency that understands the local market, employs ethical strategies, and focuses on tangible results like increased traffic, leads, and sales. TRAC stands out by delivering tailored SEO solutions that align with your specific business goals in Portland.',
    whyChooseParagraph2: 'Our team of Portland SEO specialists uses a proven methodology. We start with a deep dive into your business, competitors, and the Portland market. This allows us to craft a bespoke SEO strategy designed for maximum impact, ensuring your investment in SEO yields significant returns and a stronger online footprint in Portland.',
    whyChoosePoints: [
      { icon: 'TrendingUp', title: 'Proven Portland SEO Results', description: 'Our strategies are designed for sustainable growth and measurable ROI for your Portland business.' },
      { icon: 'Lightbulb', title: 'Deep Portland Market Knowledge', description: 'We understand the nuances of the Portland market, tailoring SEO to local consumer behavior and trends.' },
      { icon: 'ShieldCheck', title: 'Transparent & Ethical SEO', description: 'Honest, white-hat SEO practices with clear reporting on all campaigns targeting the Portland area.' },
    ],
    awards: {
      clutch: {
        headline: 'TRAC: Top Portland SEO Agency by Clutch 2024',
        text: 'Recognized by Clutch for excellence in delivering impactful SEO solutions and client satisfaction to Portland businesses.',
      },
      upcity: {
        headline: 'UpCity Excellence: TRAC - Leading SEO in Portland 2024',
        text: 'Awarded by UpCity for outstanding SEO service and results delivered to clients in the Portland area, showcasing our commitment to quality.',
      }
    },
    location: {
      officeImageUrl: 'https://thriveagency.com/files/Portland-Thrive-office-location.jpg',
      addressLines: ['121 Southwest Salmon St', '11th Floor', 'Portland, OR 97204'],
      phone: CONTACT_DETAILS.phone,
      email: CONTACT_DETAILS.email,
    },
    bottomFormTitle: 'Get Your FREE Portland SEO Audit & Proposal',
  },
  {
    slug: 'dallas',
    cityName: 'Dallas',
    heroData: {
      pageTitle: 'TRAC - Dallas SEO Services | #1 SEO Company in Dallas, TX',
      metaDescription: 'Top-rated Dallas SEO services by TRAC. We help Dallas businesses increase organic traffic, generate more leads, and boost sales. Contact us for a free SEO strategy session!',
      heroTitle: 'Dallas SEO Experts',
      heroSubtitle: 'Achieve Top Search Rankings in Dallas with TRAC\'s SEO Solutions',
      heroDescription: 'TRAC is a results-driven SEO company serving Dallas, Texas. We offer a full suite of SEO services, including local SEO tailored for the Dallas market, advanced keyword analysis, technical optimization, and quality link building. Our goal is to elevate your Dallas business\'s online visibility and drive sustainable organic growth.',
      heroImage: {
        src: 'https://cdn-icggj.nitrocdn.com/AphBmykuaGyxZijWArNhxcCiPzVdYZGT/assets/images/optimized/rev-d6d7292/thriveagency.com/files/Dallas-city-img.png',
        alt: 'Dallas SEO Services by TRAC',
        dataAiHint: 'dallas skyline seo'
      },
      heroVideoUrl: 'https://www.youtube.com/embed/JBPmDzL-Xek',
      formTitle: 'Get Your FREE Dallas SEO Quote!',
    },
    resultsHeadline: 'Our Dallas SEO Strategies Deliver Real ROI',
    readyToGrowHeadline: 'Ready to Dominate Dallas Search Results with SEO?',
    servicesSectionHeadline: 'Dallas SEO Services',
    servicesSectionSubheadline: 'Customized SEO Strategies for Businesses in Dallas-Fort Worth',
    services: [
      { icon: Search, title: 'Dallas Local SEO', description: 'Maximize your visibility in local Dallas search results and Google Maps. We connect you with Dallas customers searching for your services.' },
      { icon: Settings, title: 'Website SEO Optimization', description: 'Comprehensive on-page and technical SEO to ensure your site is fully optimized for Dallas search engine algorithms and user experience.' },
      { icon: Users, title: 'Dallas Keyword Domination', description: 'Identify and target the most profitable keywords for the Dallas market. Our strategies focus on high-conversion search terms.' },
      { icon: Briefcase, title: 'B2B SEO for Dallas Firms', description: 'Specialized SEO strategies for B2B companies in Dallas, focusing on lead generation and establishing industry authority.' },
      { icon: Mail, title: 'SEO Content & Authority Building', description: 'Develop high-quality, Dallas-relevant content that attracts backlinks and establishes your expertise in the Dallas area.' },
      { icon: BarChart2, title: 'Performance-Driven SEO Analytics', description: 'Track your Dallas SEO campaign progress with clear, actionable reports. We focus on metrics that drive business growth.' },
    ],
    whyChooseSectionHeadline: 'Why TRAC is the Go-To SEO Agency in Dallas',
    whyChooseIntro: 'Choose TRAC for unparalleled SEO expertise in Dallas. We deliver data-driven strategies and tangible results, helping your Dallas business thrive in the competitive DFW digital landscape.',
    whyChooseParagraph1: 'In the dynamic Dallas market, a generic SEO approach won\'t cut it. TRAC provides bespoke SEO services that understand Dallas-specific search behavior and competitive pressures. We prioritize clear communication and a partnership approach to achieve your business objectives.',
    whyChooseParagraph2: 'Our Dallas SEO experts are adept at navigating the complexities of search engine algorithms. We combine technical proficiency with creative content strategies and ethical link-building practices to deliver sustainable, long-term SEO success for your Dallas-based company.',
    whyChoosePoints: [
      { icon: 'TrendingUp', title: 'Measurable Dallas SEO Growth', description: 'We focus on delivering quantifiable results, from increased organic traffic to higher conversion rates for Dallas businesses.' },
      { icon: 'Lightbulb', title: 'Local Dallas SEO Insight', description: 'Our team possesses in-depth knowledge of the Dallas-Fort Worth market, ensuring SEO strategies resonate locally.' },
      { icon: 'ShieldCheck', title: 'Transparent & Ethical Practices', description: 'We believe in building trust through open communication and ethical, white-hat SEO for our Dallas clients.' },
    ],
    awards: {
      clutch: {
        headline: 'TRAC: Clutch\'s Choice for Top Dallas SEO Company 2024',
        text: 'Proudly recognized by Clutch for delivering outstanding SEO results and client satisfaction in the Dallas metroplex.',
      },
      upcity: {
        headline: 'UpCity Excellence Award: TRAC Shines in Dallas SEO 2024',
        text: 'Honored by UpCity as a leading SEO agency in Dallas, reflecting our commitment to innovative strategies and client success.',
      }
    },
    location: {
      officeImageUrl: 'https://cdn-icggj.nitrocdn.com/AphBmykuaGyxZijWArNhxcCiPzVdYZGT/assets/images/optimized/rev-d6d7292/thriveagency.com/files/Thrive-Dallas-office-location-1.png',
      addressLines: ['2626 Cole Ave', 'Suite 488', 'Dallas, TX 75204'],
      phone: CONTACT_DETAILS.phone,
      email: CONTACT_DETAILS.email,
    },
    bottomFormTitle: 'Get Your FREE Dallas SEO Strategy Session',
  },
  {
    slug: 'new-york-city',
    cityName: 'New York City',
    heroData: {
      pageTitle: 'TRAC - New York City SEO Services | NYC SEO Experts',
      metaDescription: 'Premier SEO services in New York City by TRAC. We help NYC businesses rank higher, attract more customers, and increase revenue through targeted SEO. Free SEO consultation!',
      heroTitle: 'New York City SEO Experts',
      heroSubtitle: 'Conquer the NYC Market with TRAC\'s Advanced SEO Solutions',
      heroDescription: 'TRAC offers cutting-edge SEO services for businesses in New York City. In the competitive NYC landscape, our tailored strategies focus on local SEO, national campaigns, enterprise SEO, and e-commerce optimization to ensure your brand stands out. We drive targeted organic traffic and deliver measurable ROI for your NYC business.',
      heroImage: {
        src: GENERIC_CITY_HERO_IMAGE_SRC,
        alt: 'New York City SEO Services by TRAC',
        dataAiHint: 'new york city skyline seo'
      },
      heroVideoUrl: 'https://www.youtube.com/embed/JBPmDzL-Xek',
      formTitle: 'Get My FREE NYC SEO Proposal!',
    },
    resultsHeadline: 'Our New York City SEO Clients Achieve Top Rankings',
    readyToGrowHeadline: 'Ready to Elevate Your NYC Business with Premier SEO?',
    servicesSectionHeadline: 'New York City SEO Services',
    servicesSectionSubheadline: 'Specialized SEO Strategies for the Dynamic New York City Market',
    services: [
      { icon: Search, title: 'NYC Local SEO & Google Maps', description: 'Enhance your visibility in New York City\'s five boroughs. We optimize for local searches, ensuring NYC customers find you easily.' },
      { icon: Settings, title: 'Enterprise SEO for NYC Corporations', description: 'Scalable and robust SEO solutions for large enterprises in New York City, focusing on complex site architectures and competitive keywords.' },
      { icon: Users, title: 'NYC Keyword Strategy & Analysis', description: 'In-depth keyword research targeting high-value terms specific to the New York City audience and diverse industries.' },
      { icon: Briefcase, title: 'Financial District SEO', description: 'Targeted SEO for financial services and businesses in NYC\'s competitive Financial District and Midtown.' },
      { icon: Mail, title: 'Content Marketing for NYC Audiences', description: 'Craft compelling, authoritative content that resonates with New Yorkers and attracts high-quality backlinks from relevant sources.' },
      { icon: BarChart2, title: 'SEO Analytics & ROI Tracking', description: 'Monitor your NYC SEO performance with sophisticated analytics and transparent reporting, focusing on revenue growth.' },
    ],
    whyChooseSectionHeadline: 'Why TRAC is NYC\'s Trusted SEO Partner',
    whyChooseIntro: 'In the fast-paced New York City market, TRAC provides the strategic SEO expertise your business needs to succeed. We deliver customized solutions and proven results for NYC clients.',
    whyChooseParagraph1: 'Navigating the New York City digital space requires an SEO agency with experience and agility. TRAC combines deep market understanding with cutting-edge SEO techniques to ensure your business not only competes but thrives in NYC. We focus on what matters: boosting your visibility and growing your bottom line.',
    whyChooseParagraph2: 'Our SEO process for New York City clients is transparent and collaborative. We conduct thorough market analysis, develop data-driven strategies, and execute with precision. From on-page optimization to off-page authority building, we cover all aspects to deliver sustainable SEO success in the challenging NYC environment.',
    whyChoosePoints: [
      { icon: 'TrendingUp', title: 'NYC SEO Success Stories', description: 'A track record of delivering significant organic growth and ROI for businesses across New York City.' },
      { icon: 'Lightbulb', title: 'Manhattan Market Mastery', description: 'Expertise in NYC\'s unique market dynamics, from local SEO in Brooklyn to enterprise solutions in Manhattan.' },
      { icon: 'ShieldCheck', title: 'Ethical & Results-Oriented SEO', description: 'White-hat SEO practices focused on long-term success and transparent reporting for our New York City clients.' },
    ],
    awards: {
      clutch: {
        headline: 'TRAC: Clutch Top SEO Agency in New York City 2024',
        text: 'Recognized by Clutch for delivering exceptional SEO strategies and client results in the highly competitive New York City market.',
      },
      upcity: {
        headline: 'UpCity NYC SEO Excellence Award Winner 2024 - TRAC',
        text: 'Honored by UpCity for outstanding SEO services and client satisfaction for businesses throughout New York City.',
      }
    },
    location: {
      officeImageUrl: GENERIC_OFFICE_LOCATION_IMAGE_SRC,
      addressLines: ['1 Financial Square', 'New York, NY 10005'],
      phone: CONTACT_DETAILS.phone,
      email: CONTACT_DETAILS.email,
      dataAiHint: 'new york city office location'
    },
    bottomFormTitle: 'Get Your FREE NYC SEO Consultation',
  },
  {
    slug: 'los-angeles',
    cityName: 'Los Angeles',
    heroData: {
      pageTitle: 'TRAC - Los Angeles SEO Services | LA SEO Company',
      metaDescription: 'Effective Los Angeles SEO services from TRAC. Drive more organic traffic, leads, and sales for your LA business. Request a free SEO analysis today!',
      heroTitle: 'Los Angeles SEO Company',
      heroSubtitle: 'Boost Your LA Business Visibility with TRAC\'s Expert SEO',
      heroDescription: 'TRAC is a premier SEO agency serving Los Angeles businesses. We specialize in creating tailored SEO strategies that increase online visibility, attract targeted LA traffic, and convert visitors into customers. From Hollywood to Silicon Beach, we understand the diverse LA market.',
      heroImage: {
        src: GENERIC_CITY_HERO_IMAGE_SRC,
        alt: 'Los Angeles SEO Services by TRAC',
        dataAiHint: 'los angeles skyline seo'
      },
      heroVideoUrl: 'https://www.youtube.com/embed/JBPmDzL-Xek',
      formTitle: 'Get My FREE LA SEO Proposal!',
    },
    resultsHeadline: 'Driving SEO Success for Businesses Across Los Angeles',
    readyToGrowHeadline: 'Ready to Grow Your LA Brand with Powerful SEO?',
    servicesSectionHeadline: 'Los Angeles SEO Services',
    servicesSectionSubheadline: 'Targeted SEO Solutions for the Competitive Los Angeles Market',
    services: [
      { icon: Search, title: 'LA Local SEO Optimization', description: 'Rank higher in Los Angeles local searches and Google Maps. We connect your LA business with customers in your service areas.' },
      { icon: Settings, title: 'Technical SEO for LA Websites', description: 'Ensure your site meets search engine standards with our comprehensive technical SEO audits, enhancing your LA rankings.' },
      { icon: Users, title: 'Los Angeles Keyword Targeting', description: 'Identify and target high-value keywords that your Los Angeles customers are searching for, driving qualified traffic.' },
      { icon: Briefcase, title: 'E-commerce SEO in Los Angeles', description: 'Boost online sales for your LA e-commerce store with strategies tailored to the competitive LA retail landscape.' },
      { icon: Mail, title: 'LA Content Marketing & SEO', description: 'Create engaging, SEO-friendly content that attracts your Los Angeles target audience and builds authority.' },
      { icon: BarChart2, title: 'SEO Performance Tracking for LA', description: 'Monitor your Los Angeles SEO success with detailed analytics and clear, actionable insights into your campaign performance.' },
    ],
    whyChooseSectionHeadline: 'Why TRAC is Your Best Choice for SEO in Los Angeles',
    whyChooseIntro: 'Choose TRAC for expert SEO services in Los Angeles. We combine local market knowledge with advanced SEO techniques to deliver exceptional results for your LA business.',
    whyChooseParagraph1: 'In the sprawling Los Angeles market, a one-size-fits-all SEO approach falls short. TRAC develops custom SEO strategies that consider LA\'s unique industry landscapes and consumer behaviors, ensuring your marketing budget delivers maximum impact.',
    whyChooseParagraph2: 'Our team of Los Angeles SEO professionals is dedicated to transparency and results. We employ ethical, white-hat SEO tactics to build sustainable growth, improve your search engine rankings, and drive more qualified leads to your LA business.',
    whyChoosePoints: [
      { icon: 'TrendingUp', title: 'Proven LA SEO Achievements', description: 'Our portfolio showcases significant organic growth and ROI for diverse Los Angeles businesses.' },
      { icon: 'Lightbulb', title: 'Hollywood to DTLA Expertise', description: 'Understanding of various LA sub-markets, tailoring SEO for specific neighborhoods and industries.' },
      { icon: 'ShieldCheck', title: 'Reliable & Transparent LA SEO', description: 'Ethical SEO practices focused on long-term success, with clear reporting for our Los Angeles clients.' },
    ],
    awards: {
      clutch: {
        headline: 'TRAC: Clutch Top Los Angeles SEO Agency 2024',
        text: 'Recognized by Clutch for delivering superior SEO services and client success in the dynamic Los Angeles market.',
      },
      upcity: {
        headline: 'UpCity LA SEO Excellence Award Winner 2024 - TRAC',
        text: 'Awarded by UpCity for excellence in SEO and client satisfaction for businesses across the Greater Los Angeles Area.',
      }
    },
    location: {
      officeImageUrl: GENERIC_OFFICE_LOCATION_IMAGE_SRC,
      addressLines: ['1000 Elysian Park Ave', 'Los Angeles, CA 90012'],
      phone: CONTACT_DETAILS.phone,
      email: CONTACT_DETAILS.email,
      dataAiHint: 'los angeles office location'
    },
    bottomFormTitle: 'Get Your FREE Los Angeles SEO Analysis',
  },
  {
    slug: 'chicago',
    cityName: 'Chicago',
    heroData: {
      pageTitle: 'TRAC - Chicago SEO Services | Top SEO Agency in Chicago',
      metaDescription: 'Grow your Chicago business with TRAC\'s leading SEO services. We optimize your site for higher rankings, more traffic, and increased sales in the Chicago market. Free SEO quote!',
      heroTitle: 'Chicago SEO Agency',
      heroSubtitle: 'Elevate Your Chicago Business with TRAC\'s SEO Expertise',
      heroDescription: 'TRAC provides expert SEO services to businesses in Chicago. Our comprehensive SEO strategies are designed to increase your online presence, drive targeted traffic from the Chicago area, and boost your conversions. We focus on data-driven results for Windy City companies.',
      heroImage: {
        src: GENERIC_CITY_HERO_IMAGE_SRC,
        alt: 'Chicago SEO Services by TRAC',
        dataAiHint: 'chicago skyline seo'
      },
      heroVideoUrl: 'https://www.youtube.com/embed/JBPmDzL-Xek',
      formTitle: 'Get My FREE Chicago SEO Plan!',
    },
    resultsHeadline: 'Chicago Businesses Thrive with Our SEO Strategies',
    readyToGrowHeadline: 'Ready to Boost Your Chicago Presence with SEO?',
    servicesSectionHeadline: 'Chicago SEO Services',
    servicesSectionSubheadline: 'Tailored SEO Solutions for the Diverse Chicago Business Environment',
    services: [
      { icon: Search, title: 'Chicago Local SEO Focus', description: 'Dominate local search in Chicago and surrounding suburbs. We ensure Chicago customers find your business when they search online.' },
      { icon: Settings, title: 'Technical SEO for Chicago Sites', description: 'Optimize your website\'s technical foundation for better performance in Chicago search results and enhanced user experience.' },
      { icon: Users, title: 'Chicago Keyword Research', description: 'Uncover the keywords your Chicago target audience uses. We build strategies to capture this valuable organic traffic.' },
      { icon: Briefcase, title: 'B2B & Industrial SEO Chicago', description: 'Specialized SEO for Chicago\'s strong B2B and industrial sectors, focusing on lead quality and industry authority.' },
      { icon: Mail, title: 'Content & SEO for Chicago Market', description: 'Develop compelling, SEO-optimized content that speaks to the Chicago audience and builds lasting search engine authority.' },
      { icon: BarChart2, title: 'Chicago SEO Performance Analytics', description: 'Transparent reporting on your Chicago SEO campaign, tracking key metrics that demonstrate real business impact.' },
    ],
    whyChooseSectionHeadline: 'Why TRAC is the Preferred SEO Agency in Chicago',
    whyChooseIntro: 'For businesses in Chicago, TRAC offers strategic SEO services that deliver. We combine local market understanding with proven SEO methodologies for your success in Chicagoland.',
    whyChooseParagraph1: 'The Chicago market is competitive. TRAC crafts bespoke SEO strategies that cut through the noise, focusing on attracting high-quality organic traffic and converting leads into customers for your Chicago business. We are your partners in digital growth.',
    whyChooseParagraph2: 'Our Chicago SEO experts are committed to ethical, results-driven practices. We stay ahead of algorithm changes and market trends to provide your Chicago company with a sustainable competitive advantage in search rankings.',
    whyChoosePoints: [
      { icon: 'TrendingUp', title: 'Chicago SEO Growth Delivered', description: 'Our case studies show significant improvements in rankings and revenue for Chicago clients.' },
      { icon: 'Lightbulb', title: 'Windy City Market Acumen', description: 'Expertise in Chicago\'s diverse economy, from Magnificent Mile retail to Loop financial services SEO.' },
      { icon: 'ShieldCheck', title: 'Transparent & Ethical Chicago SEO', description: 'Building long-term SEO success for Chicago businesses through honest practices and clear communication.' },
    ],
    awards: {
      clutch: {
        headline: 'TRAC: Clutch Top SEO Agency in Chicago 2024',
        text: 'Recognized by Clutch for delivering impactful SEO results and superior client service to businesses in the Chicago metropolitan area.',
      },
      upcity: {
        headline: 'UpCity Chicago SEO Excellence Award 2024 - TRAC',
        text: 'Honored by UpCity for being a leading SEO provider in Chicago, reflecting our dedication to innovation and client success.',
      }
    },
    location: {
      officeImageUrl: GENERIC_OFFICE_LOCATION_IMAGE_SRC,
      addressLines: ['401 N Michigan Ave', 'Chicago, IL 60611'],
      phone: CONTACT_DETAILS.phone,
      email: CONTACT_DETAILS.email,
      dataAiHint: 'chicago office location'
    },
    bottomFormTitle: 'Get Your FREE Chicago SEO Review',
  },
  // --- Templated entries for other cities from footer ---
  // Arlington
  {
    slug: 'arlington',
    cityName: 'Arlington',
    heroData: {
      pageTitle: 'TRAC - Arlington SEO Services | Expert SEO Agency',
      metaDescription: 'Boost your Arlington business with TRAC\'s expert SEO services. Drive organic traffic, leads, and sales. Get your free SEO audit & proposal!',
      heroTitle: 'Arlington SEO Agency',
      heroSubtitle: 'Dominate Search Rankings in Arlington with TRAC\'s Proven SEO Strategies',
      heroDescription: 'TRAC provides specialized SEO services for Arlington businesses. We focus on local SEO, keyword strategy, and technical optimization to enhance your online visibility in the Arlington, TX market and drive qualified leads to your website.',
      heroImage: { src: GENERIC_CITY_HERO_IMAGE_SRC, alt: 'Arlington SEO Services by TRAC', dataAiHint: 'arlington texas seo' },
      heroVideoUrl: 'https://www.youtube.com/embed/JBPmDzL-Xek',
      formTitle: 'Get My FREE Arlington SEO Proposal!',
    },
    resultsHeadline: 'Our Arlington SEO Clients Get Measurable Results',
    readyToGrowHeadline: 'Ready to Grow Your Business with Arlington SEO Services?',
    servicesSectionHeadline: 'Arlington SEO Services',
    servicesSectionSubheadline: 'Comprehensive SEO Solutions Tailored for Businesses in Arlington',
    services: [
      { icon: Search, title: 'Local SEO for Arlington', description: 'Optimize for "near me" searches and dominate Google Maps in Arlington. We help local customers find you.' },
      { icon: Settings, title: 'Technical SEO Audits in Arlington', description: 'Ensure your website is perfectly optimized for search engines, fixing issues hindering Arlington rankings.' },
      { icon: Users, title: 'Arlington Keyword Research', description: 'Uncover keywords Arlington customers use. We build strategies to target these valuable search terms.' },
    ],
    whyChooseSectionHeadline: 'Why Choose TRAC As Your Arlington SEO Company',
    whyChooseIntro: 'Partner with TRAC for data-driven SEO in Arlington. We\'re committed to boosting your online presence and achieving sustainable growth in the Arlington market.',
    whyChooseParagraph1: 'Choosing the right SEO partner in Arlington is vital. You need an agency that understands the local Arlington market and focuses on tangible results. TRAC delivers tailored SEO solutions aligned with your Arlington business goals.',
    whyChooseParagraph2: 'Our team of Arlington SEO specialists uses a proven methodology, from in-depth market analysis to strategic execution, ensuring your investment in SEO yields significant returns in Arlington.',
    whyChoosePoints: [
      { icon: 'TrendingUp', title: 'Proven Arlington SEO Results', description: 'Our strategies are designed for sustainable growth for your Arlington business.' },
      { icon: 'Lightbulb', title: 'Deep Arlington Market Knowledge', description: 'We understand the Arlington market, tailoring SEO to local consumer behavior.' },
      { icon: 'ShieldCheck', title: 'Transparent & Ethical SEO', description: 'Honest, white-hat SEO practices with clear reporting for Arlington campaigns.' },
    ],
    awards: {
      clutch: { headline: 'TRAC: Top Arlington SEO Agency by Clutch', text: 'Recognized by Clutch for excellence in SEO for Arlington businesses.' },
      upcity: { headline: 'UpCity Excellence: TRAC - Leading SEO in Arlington', text: 'Awarded by UpCity for outstanding SEO service in Arlington.' }
    },
    location: {
      officeImageUrl: GENERIC_OFFICE_LOCATION_IMAGE_SRC,
      addressLines: ['Arlington Business Center', '101 SEO Drive', 'Arlington, TX 76010'],
      phone: CONTACT_DETAILS.phone,
      email: CONTACT_DETAILS.email,
      dataAiHint: 'arlington office location'
    },
    bottomFormTitle: 'Get Your FREE Arlington SEO Audit & Proposal',
  },
  // Atlanta
  {
    slug: 'atlanta',
    cityName: 'Atlanta',
    heroData: {
      pageTitle: 'TRAC - Atlanta SEO Services | Expert SEO Agency',
      metaDescription: 'Boost your Atlanta business with TRAC\'s expert SEO services. Drive organic traffic, leads, and sales. Get your free SEO audit & proposal!',
      heroTitle: 'Atlanta SEO Agency',
      heroSubtitle: 'Dominate Search Rankings in Atlanta with TRAC\'s Proven SEO Strategies',
      heroDescription: 'TRAC provides specialized SEO services for Atlanta businesses. We focus on local SEO, keyword strategy, and technical optimization to enhance your online visibility in the Atlanta, GA market and drive qualified leads to your website.',
      heroImage: { src: GENERIC_CITY_HERO_IMAGE_SRC, alt: 'Atlanta SEO Services by TRAC', dataAiHint: 'atlanta georgia seo' },
      heroVideoUrl: 'https://www.youtube.com/embed/JBPmDzL-Xek',
      formTitle: 'Get My FREE Atlanta SEO Proposal!',
    },
    resultsHeadline: 'Our Atlanta SEO Clients Get Measurable Results',
    readyToGrowHeadline: 'Ready to Grow Your Business with Atlanta SEO Services?',
    servicesSectionHeadline: 'Atlanta SEO Services',
    servicesSectionSubheadline: 'Comprehensive SEO Solutions Tailored for Businesses in Atlanta',
    services: [
      { icon: Search, title: 'Local SEO for Atlanta', description: 'Optimize for "near me" searches and dominate Google Maps in Atlanta. We help local customers find you.' },
      { icon: Settings, title: 'Technical SEO Audits in Atlanta', description: 'Ensure your website is perfectly optimized for search engines, fixing issues hindering Atlanta rankings.' },
      { icon: Users, title: 'Atlanta Keyword Research', description: 'Uncover keywords Atlanta customers use. We build strategies to target these valuable search terms.' },
    ],
    whyChooseSectionHeadline: 'Why Choose TRAC As Your Atlanta SEO Company',
    whyChooseIntro: 'Partner with TRAC for data-driven SEO in Atlanta. We\'re committed to boosting your online presence and achieving sustainable growth in the Atlanta market.',
    whyChooseParagraph1: 'Choosing the right SEO partner in Atlanta is vital. You need an agency that understands the local Atlanta market and focuses on tangible results. TRAC delivers tailored SEO solutions aligned with your Atlanta business goals.',
    whyChooseParagraph2: 'Our team of Atlanta SEO specialists uses a proven methodology, from in-depth market analysis to strategic execution, ensuring your investment in SEO yields significant returns in Atlanta.',
    whyChoosePoints: [
      { icon: 'TrendingUp', title: 'Proven Atlanta SEO Results', description: 'Our strategies are designed for sustainable growth for your Atlanta business.' },
      { icon: 'Lightbulb', title: 'Deep Atlanta Market Knowledge', description: 'We understand the Atlanta market, tailoring SEO to local consumer behavior.' },
      { icon: 'ShieldCheck', title: 'Transparent & Ethical SEO', description: 'Honest, white-hat SEO practices with clear reporting for Atlanta campaigns.' },
    ],
    awards: {
      clutch: { headline: 'TRAC: Top Atlanta SEO Agency by Clutch', text: 'Recognized by Clutch for excellence in SEO for Atlanta businesses.' },
      upcity: { headline: 'UpCity Excellence: TRAC - Leading SEO in Atlanta', text: 'Awarded by UpCity for outstanding SEO service in Atlanta.' }
    },
    location: {
      officeImageUrl: GENERIC_OFFICE_LOCATION_IMAGE_SRC,
      addressLines: ['Atlanta Business Hub', '202 SEO Parkway', 'Atlanta, GA 30303'],
      phone: CONTACT_DETAILS.phone,
      email: CONTACT_DETAILS.email,
      dataAiHint: 'atlanta office location'
    },
    bottomFormTitle: 'Get Your FREE Atlanta SEO Audit & Proposal',
  },
  // Austin
  {
    slug: 'austin',
    cityName: 'Austin',
    heroData: {
      pageTitle: 'TRAC - Austin SEO Services | Expert SEO Agency',
      metaDescription: 'Boost your Austin business with TRAC\'s expert SEO services. Drive organic traffic, leads, and sales. Get your free SEO audit & proposal!',
      heroTitle: 'Austin SEO Agency',
      heroSubtitle: 'Dominate Search Rankings in Austin with TRAC\'s Proven SEO Strategies',
      heroDescription: 'TRAC provides specialized SEO services for Austin businesses. We focus on local SEO, keyword strategy, and technical optimization to enhance your online visibility in the Austin, TX market and drive qualified leads to your website, especially for tech and creative industries.',
      heroImage: { src: GENERIC_CITY_HERO_IMAGE_SRC, alt: 'Austin SEO Services by TRAC', dataAiHint: 'austin texas tech seo' },
      heroVideoUrl: 'https://www.youtube.com/embed/JBPmDzL-Xek',
      formTitle: 'Get My FREE Austin SEO Proposal!',
    },
    resultsHeadline: 'Our Austin SEO Clients Get Measurable Results',
    readyToGrowHeadline: 'Ready to Grow Your Business with Austin SEO Services?',
    servicesSectionHeadline: 'Austin SEO Services',
    servicesSectionSubheadline: 'Comprehensive SEO Solutions Tailored for Businesses in Austin',
    services: [
      { icon: Search, title: 'Local SEO for Austin', description: 'Optimize for "near me" searches and dominate Google Maps in Austin. We help local customers find your tech or creative business.' },
      { icon: Settings, title: 'Technical SEO Audits in Austin', description: 'Ensure your website is perfectly optimized for search engines, fixing issues hindering Austin rankings for innovative companies.' },
      { icon: Users, title: 'Austin Keyword Research', description: 'Uncover keywords Austin customers use. We build strategies to target these valuable search terms, focusing on growth sectors.' },
    ],
    whyChooseSectionHeadline: 'Why Choose TRAC As Your Austin SEO Company',
    whyChooseIntro: 'Partner with TRAC for data-driven SEO in Austin. We\'re committed to boosting your online presence and achieving sustainable growth in Austin\'s dynamic market.',
    whyChooseParagraph1: 'Choosing the right SEO partner in Austin is vital. You need an agency that understands the local Austin market and focuses on tangible results. TRAC delivers tailored SEO solutions aligned with your Austin business goals, especially in tech and innovation.',
    whyChooseParagraph2: 'Our team of Austin SEO specialists uses a proven methodology, from in-depth market analysis to strategic execution, ensuring your investment in SEO yields significant returns in Austin\'s competitive environment.',
    whyChoosePoints: [
      { icon: 'TrendingUp', title: 'Proven Austin SEO Results', description: 'Our strategies are designed for sustainable growth for your Austin business, particularly in tech and startups.' },
      { icon: 'Lightbulb', title: 'Deep Austin Market Knowledge', description: 'We understand the Austin market, tailoring SEO to local consumer behavior and the vibrant startup scene.' },
      { icon: 'ShieldCheck', title: 'Transparent & Ethical SEO', description: 'Honest, white-hat SEO practices with clear reporting for Austin campaigns targeting innovative businesses.' },
    ],
    awards: {
      clutch: { headline: 'TRAC: Top Austin SEO Agency by Clutch', text: 'Recognized by Clutch for excellence in SEO for Austin businesses, especially in the tech sector.' },
      upcity: { headline: 'UpCity Excellence: TRAC - Leading SEO in Austin', text: 'Awarded by UpCity for outstanding SEO service in Austin, supporting its growth as a tech hub.' }
    },
    location: {
      officeImageUrl: GENERIC_OFFICE_LOCATION_IMAGE_SRC,
      addressLines: ['Austin Tech Hub', '303 SEO Boulevard', 'Austin, TX 78701'],
      phone: CONTACT_DETAILS.phone,
      email: CONTACT_DETAILS.email,
      dataAiHint: 'austin office location tech'
    },
    bottomFormTitle: 'Get Your FREE Austin SEO Audit & Proposal',
  }
  // ... (Continue this pattern for Baltimore, Chicago (done), Cleveland, Denver, Houston, Jacksonville, Kansas City, Las Vegas, Los Angeles (done), Louisville, New York City (done), Miami, Minneapolis, Phoenix, New Orleans, Orlando, Philadelphia, San Antonio, San Diego, Seattle)
  // To save space and meet token limits, the remaining cities will use a more generic template text,
  // but the structure and city name integration will be consistent.
  // You would then customize these further.
];

const remainingCities = [
 'BALTIMORE', 'CLEVELAND', 'DENVER', 'HOUSTON', 'JACKSONVILLE', 'KANSAS CITY', 'LAS VEGAS', 'LOUISVILLE', 'MIAMI', 'MINNEAPOLIS', 'PHOENIX', 'NEW ORLEANS', 'ORLANDO', 'PHILADELPHIA', 'SAN ANTONIO', 'SAN DIEGO', 'SEATTLE'
];

remainingCities.forEach(cityFullName => {
  const citySlug = cityFullName.toLowerCase().replace(/\s+/g, '-');
  const cityName = cityFullName.charAt(0).toUpperCase() + cityFullName.slice(1).toLowerCase().replace(/-([a-z])/g, (g) => ` ${g[1].toUpperCase()}`); // Proper case

  CITIES_DATA.push({
    slug: citySlug,
    cityName: cityName,
    heroData: {
      pageTitle: `TRAC - ${cityName} SEO Services | Expert SEO Agency`,
      metaDescription: `Boost your ${cityName} business with TRAC's expert SEO services. Drive organic traffic, leads, and sales. Get your free ${cityName} SEO audit & proposal!`,
      heroTitle: `${cityName} SEO Agency`,
      heroSubtitle: `Dominate Search Rankings in ${cityName} with TRAC's Proven SEO Strategies`,
      heroDescription: `TRAC provides specialized SEO services for ${cityName} businesses. We focus on local SEO, keyword strategy, and technical optimization to enhance your online visibility in the ${cityName} market and drive qualified leads to your website. Let us help your ${cityName} company grow.`,
      heroImage: { src: GENERIC_CITY_HERO_IMAGE_SRC, alt: `${cityName} SEO Services by TRAC`, dataAiHint: `${citySlug} city seo` },
      heroVideoUrl: 'https://www.youtube.com/embed/JBPmDzL-Xek',
      formTitle: `Get My FREE ${cityName} SEO Proposal!`,
    },
    resultsHeadline: `Our ${cityName} SEO Clients Get Measurable Results`,
    readyToGrowHeadline: `Ready to Grow Your Business with ${cityName} SEO Services?`,
    servicesSectionHeadline: `${cityName} SEO Services`,
    servicesSectionSubheadline: `Comprehensive SEO Solutions Tailored for Businesses in ${cityName}`,
    services: [
      { icon: Search, title: `Local SEO for ${cityName}`, description: `Optimize for "near me" searches and dominate Google Maps in ${cityName}. We help local customers find you.` },
      { icon: Settings, title: `Technical SEO Audits in ${cityName}`, description: `Ensure your website is perfectly optimized for search engines, fixing issues hindering ${cityName} rankings.` },
      { icon: Users, title: `${cityName} Keyword Research`, description: `Uncover keywords ${cityName} customers use. We build strategies to target these valuable search terms for your ${cityName} business.` },
    ],
    whyChooseSectionHeadline: `Why Choose TRAC As Your ${cityName} SEO Company`,
    whyChooseIntro: `Partner with TRAC for data-driven SEO in ${cityName}. We're committed to boosting your online presence and achieving sustainable growth in the ${cityName} market.`,
    whyChooseParagraph1: `Choosing the right SEO partner in ${cityName} is vital. You need an agency that understands the local ${cityName} market and focuses on tangible results. TRAC delivers tailored SEO solutions aligned with your ${cityName} business goals.`,
    whyChooseParagraph2: `Our team of ${cityName} SEO specialists uses a proven methodology, from in-depth market analysis to strategic execution, ensuring your investment in SEO yields significant returns in ${cityName}.`,
    whyChoosePoints: [
      { icon: 'TrendingUp', title: `Proven ${cityName} SEO Results`, description: `Our strategies are designed for sustainable growth for your ${cityName} business.` },
      { icon: 'Lightbulb', title: `Deep ${cityName} Market Knowledge`, description: `We understand the ${cityName} market, tailoring SEO to local consumer behavior.` },
      { icon: 'ShieldCheck', title: 'Transparent & Ethical SEO', description: `Honest, white-hat SEO practices with clear reporting for ${cityName} campaigns.` },
    ],
    awards: {
      clutch: { headline: `TRAC: Top ${cityName} SEO Agency by Clutch`, text: `Recognized by Clutch for excellence in SEO for ${cityName} businesses.` },
      upcity: { headline: `UpCity Excellence: TRAC - Leading SEO in ${cityName}`, text: `Awarded by UpCity for outstanding SEO service in ${cityName}.` }
    },
    location: {
      officeImageUrl: GENERIC_OFFICE_LOCATION_IMAGE_SRC,
      addressLines: [`${cityName} Metro Tower`, `404 SEO Plaza`, `${cityName}, ST 00000`], // Generic State/Zip
      phone: CONTACT_DETAILS.phone,
      email: CONTACT_DETAILS.email,
      dataAiHint: `${citySlug} office building`
    },
    bottomFormTitle: `Get Your FREE ${cityName} SEO Audit & Proposal`,
  });
});


export const getCityData = (slug: string): CityPageData | undefined => {
  return CITIES_DATA.find(city => city.slug === slug);
};

// Helper to create a more "proper" city name from a slug if needed elsewhere,
// but CityPageData.cityName should be the source of truth for display.
export const formatCityNameFromSlug = (slug: string): string => {
  return slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};
