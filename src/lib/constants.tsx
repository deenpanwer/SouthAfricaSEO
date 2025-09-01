import type { SVGProps } from 'react';
import type { NavItem, ServicePackage, Testimonial, ClientLogo, StatItem, ServicePackageGroup } from '@/types';
import { BarChart, Search, Users, Briefcase, MessageSquare, Mail, MapPin, Phone, TrendingUp, Target, Award, Lightbulb, Edit3, Link2, BarChart2, Users2, FileText, Settings, HelpCircle, BarChartBig, Zap, Share2, Rocket, Code, Smile, CalendarDays, RefreshCw } from 'lucide-react';

export const APP_NAME = "TRAC";

export const REVIEW_COUNT = 10; // Manually adjustable review count for schema

export const NAV_ITEMS: NavItem[] = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  {
    href: '/services',
    label: 'Services',
    children: [
      { href: '/services', label: 'All Services Overview' },
      {
        isSeparator: true,
        href: '',
        label: ''
      },
      { href: '/services/seo', label: 'SEO' },
      { href: '/services/ppc', label: 'PPC Management' },
      { href: '/services/social-media-marketing', label: 'Social Media Marketing' },
      { href: '/services/web-design-and-development', label: 'Web Design & Development' },
      { href: '/services/content-writing', label: 'Content Writing' },
      { href: '/services/email-marketing', label: 'Email Marketing' },
      { href: '/services/reputation-management', label: 'Reputation Management' },
      { href: '/services/ecommerce-optimization', label: 'eCommerce Optimization' },
      { href: '/services/amazon-marketing', label: 'Amazon Marketing (AMS)' },
      { href: '/services/technical-seo', label: 'Technical SEO' },
      { href: '/services/on-page-seo', label: 'On-Page SEO' },
      { href: '/services/off-page-seo', label: 'Off-Page SEO / Link Building' },
      { href: '/services/schema-markup', label: 'Schema Markup' },
      { href: '/services/local-seo', label: 'Local SEO' },
      { href: '/services/seo-audits', label: 'SEO Audits' },
      { href: '/services/content-marketing-for-seo', label: 'Content Marketing for SEO' },
      { href: '/automations', label: 'Automations' },
    ]
  },
  { href: '/pricing', label: 'Pricing' },
  { href: '/case-studies', label: 'Case Studies' },
  { href: '/blog', label: 'Blog' },
];

export const FOOTER_NAV_ITEMS: NavItem[] = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/case-studies', label: 'Case Studies' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact Us' },
  { href: '/services', label: 'Services' },
  { href: '/pay', label: 'How to Pay' },
];




export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Alex Chen',
    company: 'Innovate Solutions Ltd.',
    avatarUrl: 'https://tse2.mm.bing.net/th?id=OIP.8gfW4VLy8s-icI5yOXd4SQHaDE&pid=Api&P=0&h=220',
    dataAiHint: 'happy person',
    quote: "TRAC transformed our online strategy! We've seen a 150% increase in qualified leads and our sales have doubled. Their market understanding is unparalleled.",
    location: 'New York, USA',
  },
  {
    id: '2',
    name: 'Priya Sharma',
    company: 'Global Goods Co.',
    avatarUrl: 'https://tse3.mm.bing.net/th?id=OIP.tzXyry6oTAofbQURf-1OWQAAAA&pid=Api&P=0&h=220',
    dataAiHint: 'business owner',
    quote: "The team at TRAC is professional, knowledgeable, and truly cares about their clients' success. Our conversions have improved dramatically, and we're now achieving goals we never thought possible.",
    location: 'London, UK',
  },
  {
    id: '3',
    name: 'Marcus Johnson',
    company: 'TechForward Inc.',
    avatarUrl: 'https://tse2.mm.bing.net/th?id=OIP.fr6SX0x279_2W-UCrzHp0gHaGF&pid=Api&P=0&h=220',
    dataAiHint: 'smiling professional',
    quote: "Since partnering with TRAC, our lead generation has gone through the roof. Their strategic approach to business growth has delivered outstanding ROI. Highly recommended!",
    location: 'Toronto, CA',
  },
];

const FacebookIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} fill="currentColor" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <title>Facebook</title>
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

const TwitterIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} fill="currentColor" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <title>X</title>
    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.931ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/>
  </svg>
);

const LinkedInIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} fill="currentColor" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <title>LinkedIn</title>
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/>
  </svg>
);

const InstagramIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} fill="currentColor" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <title>Instagram</title>
    <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.314 1.647 20.644 1.233 19.86.93c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.056 1.17-.249 1.805-.413 2.227-.217.562-.477.96-.896 1.382-.42.419-.819-.679-1.381.896-.422-.164-1.057.36-2.227.413-1.266.057-1.646.07-4.85.07s-3.585-.015-4.85-.074c-1.17-.056-1.805-.249-2.227-.413-.562-.217-.96-.477-1.382-.896-.419-.42-.679-.819-.896-1.381-.164-.422-.36-1.057-.413-2.227-.057-1.266-.07-1.646-.07-4.85s.015-3.585.071-4.85c.055-1.17.249-1.805.415-2.227.217-.562.477.96.896-1.382.42-.419.819-.679 1.381-.896.422-.164 1.057.36 2.227-.413C8.415 2.176 8.797 2.16 12 2.16zm0 9.004c-2.193 0-3.972 1.779-3.972 3.972s1.779 3.972 3.972 3.972 3.972-1.779 3.972-3.972c0-2.193-1.779-3.972-3.972-3.972zm0 6.369c-1.325 0-2.396-1.071-2.396-2.396s1.071-2.396 2.396-2.396 2.396 1.071 2.396 2.396c0 1.325-1.071 2.396-2.396 2.396zm6.369-9.517c0 .762-.617 1.379-1.378 1.379s-1.379-.617-1.379-1.379.617-1.379 1.379-1.379 1.378.617 1.378 1.379z"/>
  </svg>
);


export const SOCIAL_LINKS = [
  { name: 'Facebook', href: 'https://www.facebook.com/profile.php?id=61560557825807', icon: FacebookIcon },
  { name: 'Twitter', href: 'https://x.com/TRACPakistan?t=jAC22ELlFjQrtrfYjWmnxQ&s=09', icon: TwitterIcon },
  { name: 'LinkedIn', href: '#', icon: LinkedInIcon },
  { name: 'Instagram', href: 'https://www.instagram.com/tracprotect?igsh=ZGZ0azBteWprMHYx', icon: InstagramIcon },
];

export const CONTACT_DETAILS = {
  phone: '+1 (646) 814-3789',
  email: 'info@traconomics.com',
  address: '30 N Gould St St #6573, Sheridan, WY 82801, United States',
};

export const COMPANY_MOTTO = "Strategic Business Solutions to Amplify Your Revenue and Drive Sales.";
export const HERO_HEADLINE = "Increase Revenue & Sales. Unlock Your Business Potential.";

export const ABOUT_US_CONTENT = {
  title: "Your Partners in Business Growth",
  introduction: "TRAC is a premier consultancy dedicated to helping small to medium-sized businesses (SMEs) achieve unparalleled growth and operational excellence. We understand the unique challenges and opportunities within the modern business landscape, and we leverage this expertise to deliver tailored strategies that produce measurable results.",
  mission: {
    title: "Our Mission",
    text: "To empower businesses with effective, data-driven solutions that drive sustainable growth, increase brand authority, and maximize return on investment.",
    imageUrl: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    dataAiHint: "team meeting"
  },
  expertise: {
    title: "Our Expertise",
    points: [
      { title: "Market Strategy Mastery", text: "Specialized in optimizing for various markets, ensuring your business connects with target customers.", icon: MapPin},
      { title: "Data-Driven Strategies", text: "Utilizing advanced analytics and market research to inform every decision and maximize impact.", icon: BarChart2 },
      { title: "Transparent Reporting", text: "Providing clear, comprehensive reports on campaign performance and key metrics.", icon: FileText },
      { title: "Client-Centric Approach", text: "Building long-term partnerships through personalized service and a deep understanding of your business goals.", icon: Users2 },
      { title: "Cutting-Edge Techniques", text: "Staying ahead of market trends and technological updates to keep your business at the forefront.", icon: Lightbulb }
    ],
    imageUrl: "https://images.pexels.com/photos/6476787/pexels-photo-6476787.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    dataAiHint: "business analytics"
  },
  team: {
    title: "Meet Our Team (Placeholder)",
    members: [
      { name: "Eleanor Vance", role: "Lead Strategist", imageUrl: "https://tse4.mm.bing.net/th?id=OIP.Nw1A3CGvx46PBqyzaRirGQHaKs&pid=Api&P=0&h=220", dataAiHint: "professional woman portrait" },
      { name: "Marcus Bellwether", role: "Technical Analyst", imageUrl: "https://tse4.mm.bing.net/th?id=OIP.0ruIqpQD6EIyDpmrYzOsCQHaKR&pid=Api&P=0&h=220", dataAiHint: "professional man portrait" },
      { name: "Sarah Chen", role: "Growth Marketing Manager", imageUrl: "https://tse4.mm.bing.net/th?id=OIP.A1CwO5Q3kquQPVeE9y4WWgHaJ9&pid=Api&P=0&h=220", dataAiHint: "creative professional portrait" },
    ],
    description: "Our team comprises passionate professionals, content creators, and digital strategists with years of experience in various markets. We are committed to your success."
  }
};

export const IMPORTANCE_OF_STRATEGY = {
  title: "Why Strategic Planning is Crucial for Your Business",
  points: [
    {
      title: "Tap into a Growing Online Market",
      text: "The internet user base is constantly expanding. Effective strategy ensures your business is visible to this growing audience actively searching for products and services online.",
      icon: TrendingUp,
    },
    {
      title: "Dominate Your Niche",
      text: "For businesses serving specific markets, targeted strategies are vital. We help you appear in relevant searches and platforms, driving traffic and inquiries.",
      icon: Target,
    },
    {
      title: "Build Trust and Credibility",
      text: "Users trust businesses that have a strong, professional online presence. A solid strategy positions your brand as an authority and a reliable choice.",
      icon: Award,
    },
    {
      title: "Achieve Sustainable ROI",
      text: "Unlike short-term paid campaigns, well-planned strategies build organic growth over time, offering a more sustainable and cost-effective return on investment.",
      icon: BarChartBig,
    },
    {
      title: "Understand Your Audience",
      text: "Strategic data provides invaluable insights into consumer behavior, market trends, and preferences, allowing you to tailor your offerings effectively.",
      icon: Users,
    },
    {
      title: "Stay Ahead of Competitors",
      text: "If your competitors are investing in strategy, you need to as well to maintain and grow your market share. If they aren't, it gives you a significant advantage.",
      icon: Zap,
    },
  ],
};


export const CLIENT_LOGOS: ClientLogo[] = [
  { name: "Stripe", imageUrl: "https://tse2.mm.bing.net/th?id=OIP.d7mpW7AVZHnqXoWiBgkCygHaEC&pid=Api&P=0&h=220", dataAiHint: "Stripe logo" },
  { name: "Shopify", imageUrl: "https://tse2.mm.bing.net/th?id=OIP.aRtM1aecf3rhXfOiCns0KgHaHa&pid=Api&P=0&h=220", dataAiHint: "Shopify logo" },
  { name: "Slack", imageUrl: "https://tse1.mm.bing.net/th?id=OIP.WETwKh7Ac2sdebsjlGJpvAHaHa&pid=Api&P=0&h=220", dataAiHint: "Slack logo" },
  { name: "Notion", imageUrl: "https://tse2.mm.bing.net/th?id=OIP.6oungoYf52D38a_1sksuPQHaHa&pid=Api&P=0&h=220", dataAiHint: "Notion logo" },
  { name: "Figma", imageUrl: "https://tse4.mm.bing.net/th?id=OIP.4NOdRAXrmLTpCETPXn946QHaHa&pid=Api&P=0&h=220", dataAiHint: "Figma logo" },
  { name: "Airbnb", imageUrl: "https://tse4.mm.bing.net/th?id=OIP.iCWL9J0ViHJP3TWfgRyHUAHaHa&pid=Api&P=0&h=220", dataAiHint: "Airbnb logo" },
  { name: "Asana", imageUrl: "https://tse3.mm.bing.net/th?id=OIP.jGfiSLa32Cr_WNRoesUIPAHaG8&pid=Api&P=0&h=220", dataAiHint: "Asana logo" },
  { name: "Zoom", imageUrl: "https://tse1.mm.bing.net/th?id=OIP.ehJr3lVyQCfrDNpCi8AE5QHaGo&pid=Api&P=0&h=220", dataAiHint: "Zoom logo" },
  { name: "Intercom", imageUrl: "https://tse3.mm.bing.net/th?id=OIP.aZourqZHtinlXtgxi-E4FwHaH-&pid=Api&P=0&h=220", dataAiHint: "Intercom logo" },
  { name: "Dropbox", imageUrl: "https://tse2.mm.bing.net/th?id=OIP.BK-Ix8qMi__ka6NDk2OOLwHaFZ&pid=Api&P=0&h=220", dataAiHint: "Dropbox logo" },
];

export const PARTNER_LOGOS: ClientLogo[] = [
  { name: "Google Reviews", imageUrl: "https://tse1.mm.bing.net/th?id=OIP.GJAOB-_MyXKLOBPd1AEpNgHaEK&pid=Api&P=0&h=220", dataAiHint: "Google Reviews logo" },
  { name: "Clutch", imageUrl: "https://tse4.mm.bing.net/th?id=OIP.KarYa2qk0vIUK3imqEd33QHaHa&pid=Api&P=0&h=220", dataAiHint: "Clutch logo" },
  { name: "G2", imageUrl: "https://tse2.mm.bing.net/th?id=OIP.BQI4Vfrnz19kbl-HGmS-DQAAAA&pid=Api&P=0&h=220", dataAiHint: "G2 logo" },
  { name: "Trustpilot", imageUrl: "https://tse2.mm.bing.net/th?id=OIP.QgS4nIqcKaCdNj0D6fAX9wHaEK&pid=Api&P=0&h=220", dataAiHint: "Trustpilot logo" },
];

export const STATS_DATA: StatItem[] = [
  { value: "500+", label: "Clients Served", icon: Users2 },
  { value: "95%", label: "Client Retention", icon: RefreshCw },
  { value: "2015", label: "Established Since", icon: CalendarDays },
  { value: "4.9/5", label: "Satisfaction Score", icon: Smile}
];
