
import type { SVGProps } from 'react';
import type { NavItem, ServicePackage, Testimonial, CaseStudy, BlogPost, ClientLogo, StatItem } from '@/types';
import { BarChart, Search, Users, Briefcase, MessageSquare, Mail, MapPin, Phone, TrendingUp, Target, Award, Lightbulb, Edit3, Link2, BarChart2, Users2, FileText, Settings, HelpCircle, BarChartBig, Zap, Building, DollarSign, LineChart, Smile, CalendarDays, RefreshCw, Percent, BriefcaseBusiness, Rocket } from 'lucide-react';

export const APP_NAME = "TRAC";

export const NAV_ITEMS: NavItem[] = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/pricing', label: 'Pricing' },
  // { href: '/industry-seo', label: 'Industry SEO' }, // Placeholder for potential dropdown
  { href: '/case-studies', label: 'Case Studies' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact Us' },
];

export const SERVICE_PACKAGES: ServicePackage[] = [
  {
    name: 'Starter Plan',
    price: '$250/mo',
    description: 'Ideal for new businesses looking to establish a foundational presence.',
    icon: Search,
    features: [
      { name: 'Core Strategy Setup', description: 'Initial analysis and planning for up to 5 key objectives' },
      { name: 'Basic Metric Tracking', description: 'Identify foundational performance indicators' },
      { name: 'Initial Audit', description: 'Technical and content assessment' },
      { name: 'Monthly Reporting', description: 'Track key performance indicators' },
    ],
    cta: 'Get Started',
  },
  {
    name: 'Growth Plan',
    price: '$550/mo',
    description: 'Perfect for growing businesses aiming to expand their market reach.',
    icon: TrendingUp,
    features: [
      { name: 'Everything in Starter', description: 'Includes all Starter Plan features' },
      { name: 'Advanced Strategy', description: 'For up to 15 key objectives' },
      { name: 'In-depth Analysis', description: 'Comprehensive review of relevant growth levers' },
      { name: 'Performance Optimization', description: 'Targeted improvements for better results' },
      { name: 'Online Presence Enhancement', description: 'Boost visibility across key channels' },
      { name: 'Competitive Landscape Review', description: 'Understand your market position' },
    ],
    cta: 'Choose Growth',
  },
  {
    name: 'Pro Plan',
    price: '$900/mo',
    description: 'Designed for established businesses seeking to dominate their market.',
    icon: Target,
    features: [
      { name: 'Everything in Growth', description: 'Includes all Growth Plan features' },
      { name: 'Comprehensive Strategy', description: 'For up to 30 key objectives' },
      { name: 'Advanced Optimization Techniques', description: 'High-impact performance enhancements' },
      { name: 'Content Development', description: '2 impactful content pieces per month' },
      { name: 'Conversion Analysis', description: 'Improve overall effectiveness' },
      { name: 'Dedicated Consultant', description: 'Personalized support and strategy' },
    ],
    cta: 'Go Pro',
  },
  {
    name: 'Enterprise Solution',
    price: 'Custom Pricing',
    description: 'Tailored solutions for large businesses with specific growth needs.',
    icon: Award,
    features: [
      { name: 'Customized Strategy & Deliverables', description: 'Bespoke plan for your unique goals' },
      { name: 'Unlimited Objective Optimization', description: 'Comprehensive strategic targeting' },
      { name: 'Premium Growth Tactics', description: 'High-authority actions and integrations' },
      { name: 'Full-Scale Content Strategy', description: 'Comprehensive content plan for all funnels' },
      { name: 'A/B Testing & Advanced Analytics', description: 'Data-driven optimization for maximum results' },
      { name: 'Customized Reporting Dashboard', description: 'Real-time insights into your performance' },
      { name: 'Bi-weekly Strategy Meetings', description: 'Regular consultations and progress reviews' },
      { name: '24/7 Priority Support', description: 'Round-the-clock assistance' },
    ],
    cta: 'Request Quote',
  },
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

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'cs1',
    clientName: 'Bloom & Grow Online',
    industry: 'E-commerce (Retail)',
    challenge: 'Low online visibility and declining sales in a competitive market.',
    solution: 'Implemented a comprehensive digital strategy, optimized product funnels, and built high-quality marketing assets.',
    results: [
      { metric: 'Lead Increase', value: '+200%', icon: TrendingUp },
      { metric: 'Conversion Rate Boost', value: '+45%', icon: Target },
      { metric: 'Key Metric Rankings (Top 3)', value: '15', icon: Award },
    ],
    imageUrl: 'https://tse1.mm.bing.net/th?id=OIP.LcStDzwsaSmmZr2LMov7AAHaFj&pid=Api&P=0&h=220',
    dataAiHint: 'ecommerce growth',
    testimonial: "TRAC helped us bloom online! We're now reaching more customers than ever before."
  },
  {
    id: 'cs2',
    clientName: 'Alpha Legal Services',
    industry: 'Professional Services',
    challenge: 'Struggling to attract qualified leads through their website.',
    solution: 'Developed a content marketing strategy focused on key industry topics, combined with technical optimizations and targeted outreach.',
    results: [
      { metric: 'Qualified Leads per Month', value: '+120%', icon: Users },
      { metric: 'Brand Authority Increase', value: '+15 points', icon: Link2 },
      { metric: 'Visibility for Core Services', value: '+70%', icon: Search },
    ],
    imageUrl: 'https://tse2.mm.bing.net/th?id=OIP.LqI7gVBNpVDmcEaOVfvGIAHaEK&pid=Api&P=0&h=220',
    dataAiHint: 'professional services chart',
    testimonial: "The expertise of TRAC has been invaluable. Our firm is now a recognized authority in our practice areas online."
  },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    slug: 'business-trends-2024',
    title: 'Top Business Growth Trends for 2024',
    date: '2024-07-15',
    excerpt: 'Discover the latest strategies that are shaping the business landscape and how your company can leverage them for growth.',
    imageUrl: 'https://images.pexels.com/photos/7793692/pexels-photo-7793692.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    dataAiHint: 'business strategy meeting',
    author: 'The TRAC Team',
    category: 'Business Trends',
    tags: ['Business Growth', 'Digital Strategy', '2024 Trends'],
  },
  {
    id: '2',
    slug: 'conversion-optimization-guide',
    title: 'The Ultimate Guide to Conversion Optimization for SMEs',
    date: '2024-06-28',
    excerpt: 'Learn how to optimize your online presence to attract and convert customers, from website design to effective CTAs.',
    imageUrl: 'https://images.pexels.com/photos/590014/pexels-photo-590014.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    dataAiHint: 'website analytics graph',
    author: 'Jane Doe',
    category: 'Conversion Optimization',
    tags: ['CRO', 'SMEs', 'Lead Generation'],
  },
  {
    id: '3',
    slug: 'content-marketing-roi',
    title: 'Maximizing Your Content Marketing ROI in a Competitive Market',
    date: '2024-06-10',
    excerpt: 'Effective content marketing strategies tailored for diverse audiences that drive engagement and conversions.',
    imageUrl: 'https://images.pexels.com/photos/1766604/pexels-photo-1766604.jpeg?auto=compress&cs=tinysrgb&w=600',
    dataAiHint: 'content marketing design',
    author: 'John Smith',
    category: 'Content Marketing',
    tags: ['Content Strategy', 'ROI', 'Marketing'],
  },
  {
    id: '4',
    slug: 'transition-to-our-platform',
    title: '10 Reasons Why You Should Transition Your Business to Our Platform',
    date: '2024-01-15',
    excerpt: 'Businesses are moving their operations and sales platforms more rapidly than ever before. And for...',
    imageUrl: 'https://images.pexels.com/photos/12935074/pexels-photo-12935074.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    author: 'Placeholder Author',
    category: 'Placeholder Category',
    tags: ['Placeholder Tag'],
  },
  {
    id: '5',
    slug: 'b2b-web-design-that-converts',
    title: 'How To Build Your First B2B Web Design That Actually Converts',
    date: '2024-01-18',
    excerpt: 'If your B2B web design is not properly structured and optimized for conversions, it’s time for a...',
    imageUrl: 'https://images.pexels.com/photos/7693153/pexels-photo-7693153.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    author: 'Placeholder Author',
    category: 'Placeholder Category',
    tags: ['Placeholder Tag'],
  },
  {
    id: '6',
    slug: 'strategies-for-direct-bookings',
    title: '8 Strategies To Get More Direct Bookings and Boost Your Online...',
    date: '2024-01-21',
    excerpt: 'Is your direct booking channel underperforming? If you are tired of paying high commission rates to...',
    imageUrl: 'https://images.pexels.com/photos/6229/marketing-board-strategy.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    author: 'Placeholder Author',
    category: 'Placeholder Category',
    tags: ['Placeholder Tag'],
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
    <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.314 1.647 20.644 1.233 19.86.93c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.056 1.17-.249 1.805-.413 2.227-.217.562-.477.96-.896 1.382-.42.419-.819.679-1.381.896-.422.164-1.057.36-2.227.413-1.266.057-1.646.07-4.85.07s-3.585-.015-4.85-.074c-1.17-.056-1.805-.249-2.227-.413-.562-.217-.96-.477-1.382-.896-.419-.42-.679-.819-.896-1.381-.164-.422-.36-1.057-.413-2.227-.057-1.266-.07-1.646-.07-4.85s.015-3.585.071-4.85c.055-1.17.249-1.805.415-2.227.217-.562.477.96.896-1.382.42-.419.819-.679 1.381-.896.422-.164 1.057.36 2.227-.413C8.415 2.176 8.797 2.16 12 2.16zm0 9.004c-2.193 0-3.972 1.779-3.972 3.972s1.779 3.972 3.972 3.972 3.972-1.779 3.972-3.972c0-2.193-1.779-3.972-3.972-3.972zm0 6.369c-1.325 0-2.396-1.071-2.396-2.396s1.071-2.396 2.396-2.396 2.396 1.071 2.396 2.396c0 1.325-1.071 2.396-2.396 2.396zm6.369-9.517c0 .762-.617 1.379-1.378 1.379s-1.379-.617-1.379-1.379.617-1.379 1.379-1.379 1.378.617 1.378 1.379z"/>
  </svg>
);


export const SOCIAL_LINKS = [
  { name: 'Facebook', href: '#', icon: FacebookIcon },
  { name: 'Twitter', href: '#', icon: TwitterIcon },
  { name: 'LinkedIn', href: '#', icon: LinkedInIcon },
  { name: 'Instagram', href: '#', icon: InstagramIcon },
];

export const CONTACT_DETAILS = {
  phone: '+1 (646) 814-3789',
  email: 'traconomics@gmail.com',
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
      icon: LineChart,
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
      text: "Strategic data provides invaluable insights into consumer behavior, market trends, and preferences, helping you refine your business strategies.",
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
