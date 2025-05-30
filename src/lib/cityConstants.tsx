
import type { CityPageData } from '@/types';
import { Briefcase, Search, BarChart2, Users, Settings, Mail, ShieldCheck, TrendingUp, Lightbulb, MapPin, Phone, Award } from 'lucide-react'; // Using existing icons, can be changed

export const CITIES_DATA: CityPageData[] = [
  {
    slug: 'portland',
    cityName: 'Portland',
    heroData: {
      pageTitle: 'TRAC - Portland Digital Marketing Agency | Drive Growth & Results',
      metaDescription: 'Expert digital marketing services in Portland. TRAC helps businesses increase leads, sales, and online visibility. Get your free proposal today!',
      heroTitle: 'Portland Digital Marketing Agency',
      heroSubtitle: 'Propel Your Business with TRAC & Dominate the Digital Landscape',
      heroDescription: 'Thrive is a full-service digital marketing agency based in Portland. We provide search engine optimization, pay-per-click advertising, social media marketing, web design services and more to businesses of all sizes that are looking to broadcast their messages more efficiently.',
      heroImage: {
        src: 'https://placehold.co/600x400.png?text=Portland+Skyline',
        alt: 'Portland Digital Marketing Experts',
        dataAiHint: 'city business'
      },
      formTitle: 'Get My FREE Proposal!',
    },
    resultsHeadline: 'Our Portland Digital Marketing Clients Get Results',
    readyToGrowHeadline: 'Ready to Grow Your Business With Portland Digital Marketing Services?',
    servicesSectionHeadline: 'Portland Digital Marketing Services',
    servicesSectionSubheadline: 'Explore our Core Digital Marketing Services for Businesses in Portland',
    services: [
      { icon: Search, title: 'Search Engine Optimization (SEO)', description: 'Dominate search rankings and attract organic traffic with our expert SEO strategies tailored for Portland businesses.' },
      { icon: Settings, title: 'Web Design & Development', description: 'User-centric websites designed to convert Portland visitors into loyal customers. Mobile-friendly and performance-optimized.' },
      { icon: Users, title: 'Social Media Marketing', description: 'Engage the Portland community and build brand loyalty with targeted social media campaigns across all relevant platforms.' },
      { icon: Briefcase, title: 'Pay-Per-Click (PPC) Advertising', description: 'Get immediate visibility in Portland with data-driven PPC campaigns on Google Ads and social media.' },
      { icon: Mail, title: 'Email Marketing', description: 'Nurture leads and drive repeat business in the Portland market with personalized email marketing strategies.' },
      { icon: BarChart2, title: 'Content Marketing', description: 'Compelling content that resonates with Portland audiences, establishes authority, and drives conversions.' },
    ],
    whyChooseSectionHeadline: 'Why Choose TRAC As Your Portland Digital Marketing Company',
    whyChooseIntro: 'Partner with TRAC and experience the difference a dedicated, results-oriented Portland digital marketing agency can make. We are committed to your success.',
    whyChoosePoints: [
      { icon: TrendingUp, title: 'We Drive Genuine Growth', description: 'Our strategies are focused on sustainable growth and measurable ROI for your Portland business.' },
      { icon: Lightbulb, title: 'We Know Portland', description: 'Deep understanding of the local Portland market dynamics and consumer behavior.' },
      { icon: ShieldCheck, title: 'We Are Transparent & Ethical', description: 'Honest, ethical practices with clear reporting on all campaigns targeting the Portland area.' },
    ],
    awards: {
      clutch: {
        headline: 'TRAC Named 2025 Top Digital Marketing Agency in Portland by Clutch',
        text: 'Recognized by Clutch for excellence in providing digital marketing solutions to Portland businesses, based on client reviews and market presence.',
        logoUrl: 'https://placehold.co/150x50.png?text=Clutch+Logo',
        logoAlt: 'Clutch Logo',
      },
      upcity: {
        headline: 'TRAC Named 2025 National Excellence Award Winner in Portland by UpCity',
        text: 'Awarded by UpCity for outstanding service and results delivered to clients in the Portland area, highlighting our commitment to quality.',
        logoUrl: 'https://placehold.co/150x50.png?text=UpCity+Logo',
        logoAlt: 'UpCity Logo',
      }
    },
    location: {
      mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d178829.1146250884!2d-122.80000000000001!3d45.523064!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54950b0b7da97427%3A0x1c36b9e6f6d18591!2sPortland%2C%20OR!5e0!3m2!1sen!2sus!4v1670000000000!5m2!1sen!2sus',
      addressLines: ['123 Marketing St', 'Portland, OR 97204', 'United States'],
      phone: '(503) 555-0101',
      email: 'portland@tracprotect.online',
    },
    bottomFormTitle: 'Get My FREE Portland Digital Marketing Proposal',
  },
  {
    slug: 'dallas',
    cityName: 'Dallas',
    heroData: {
      pageTitle: 'TRAC - Dallas Digital Marketing Agency | Boost Your Business',
      metaDescription: 'Leading digital marketing agency in Dallas. TRAC offers SEO, PPC, web design, and more to help Dallas businesses thrive online. Request a free proposal!',
      heroTitle: 'Dallas Digital Marketing Agency',
      heroSubtitle: 'Elevate Your Dallas Business with TRAC\'s Proven Strategies',
      heroDescription: 'TRAC is your dedicated partner for digital marketing in Dallas. From comprehensive SEO and targeted PPC to engaging social media and cutting-edge web design, we empower Dallas businesses to achieve remarkable growth and online success.',
      heroImage: {
        src: 'https://placehold.co/600x400.png?text=Dallas+Skyline',
        alt: 'Dallas Digital Marketing Agency TRAC',
        dataAiHint: 'dallas city'
      },
      formTitle: 'Get Your FREE Dallas Proposal!',
    },
    resultsHeadline: 'Our Dallas Digital Marketing Clients See Real Results',
    readyToGrowHeadline: 'Ready to Amplify Your Business With Dallas Digital Marketing Services?',
    servicesSectionHeadline: 'Dallas Digital Marketing Services',
    servicesSectionSubheadline: 'Comprehensive Digital Solutions for Businesses in Dallas, TX',
    services: [
      { icon: Search, title: 'Dallas SEO Services', description: 'Rank higher in Dallas search results. Our SEO experts optimize your site to attract local Dallas customers actively seeking your services.' },
      { icon: Settings, title: 'Custom Web Design Dallas', description: 'Visually stunning, high-performing websites tailored for Dallas businesses. We focus on user experience and conversion.' },
      { icon: Users, title: 'Social Media Marketing Dallas', description: 'Connect with the Dallas community. We craft engaging social media strategies that build your brand and drive customer loyalty in Dallas.' },
      { icon: Briefcase, title: 'PPC Management Dallas', description: 'Instant impact in the Dallas market. Our targeted PPC campaigns maximize your ad spend for optimal lead generation.' },
      { icon: Mail, title: 'Dallas Email Marketing', description: 'Effective email campaigns to nurture Dallas leads and foster lasting customer relationships.' },
      { icon: BarChart2, title: 'Content Strategy for Dallas', description: 'High-quality content that speaks to your Dallas audience, improves search visibility, and drives engagement.' },
    ],
    whyChooseSectionHeadline: 'Why Partner With TRAC: Your Dallas Digital Marketing Experts',
    whyChooseIntro: 'Choose TRAC for unparalleled digital marketing expertise in Dallas. We deliver data-driven strategies and tangible results, helping your Dallas business thrive in a competitive landscape.',
    whyChoosePoints: [
      { icon: TrendingUp, title: 'Measurable Dallas Growth', description: 'We focus on delivering quantifiable results, from increased traffic to higher conversion rates for Dallas businesses.' },
      { icon: Lightbulb, title: 'Local Dallas Insight', description: 'Our team possesses in-depth knowledge of the Dallas market, ensuring strategies resonate locally.' },
      { icon: ShieldCheck, title: 'Transparent & Ethical Practices', description: 'We believe in building trust through open communication and ethical marketing for our Dallas clients.' },
    ],
    awards: {
      clutch: {
        headline: 'TRAC: Clutch\'s Choice for Top Dallas Digital Marketing in 2025',
        text: 'Proudly recognized by Clutch for delivering outstanding digital marketing results and client satisfaction in the Dallas metroplex.',
         logoUrl: 'https://placehold.co/150x50.png?text=Clutch+Logo',
        logoAlt: 'Clutch Logo',
      },
      upcity: {
        headline: 'UpCity Excellence Award: TRAC Shines in Dallas Digital Marketing 2025',
        text: 'Honored by UpCity as a leading agency in Dallas, reflecting our commitment to innovative strategies and client success.',
        logoUrl: 'https://placehold.co/150x50.png?text=UpCity+Logo',
        logoAlt: 'UpCity Logo',
      }
    },
    location: {
      mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d214723.699809835!2d-96.97700000000001!3d32.776664!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c19f77b45978f%3A0x802a97504ada493a!2sDallas%2C%20TX!5e0!3m2!1sen!2sus!4v1670000001000!5m2!1sen!2sus',
      addressLines: ['456 Commerce Dr', 'Dallas, TX 75201', 'United States'],
      phone: '(214) 555-0102',
      email: 'dallas@tracprotect.online',
    },
    bottomFormTitle: 'Get Your FREE Dallas Digital Marketing Quote',
  }
];

export const getCityData = (slug: string): CityPageData | undefined => {
  return CITIES_DATA.find(city => city.slug === slug);
};
