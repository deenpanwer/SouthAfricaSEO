import type { SVGProps } from 'react';
import type { NavItem, ServicePackage, Testimonial, CaseStudy, BlogPost } from '@/types';
import { BarChart, Search, Users, Briefcase, MessageSquare, Mail, MapPin, Phone, TrendingUp, Target, Award, Lightbulb, Edit3, Link2, BarChart2, Users2, FileText, Settings, HelpCircle, BarChartBig, Zap, Share2 } from 'lucide-react';

export const APP_NAME = "ZA Rank Boost";

export const NAV_ITEMS: NavItem[] = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/services', label: 'Services' },
  { href: '/case-studies', label: 'Case Studies' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact Us' },
];

export const SERVICE_PACKAGES: ServicePackage[] = [
  {
    name: 'Starter Package',
    price: 'R 2,500/mo',
    description: 'Ideal for new businesses looking to establish an online presence.',
    icon: Search,
    features: [
      { name: 'On-Page Optimization', description: 'Meta tags, headings, content for up to 5 keywords' },
      { name: 'Basic Keyword Research', description: 'Identify foundational keywords for your niche' },
      { name: 'Website Audit', description: 'Initial technical and content assessment' },
      { name: 'Monthly Reporting', description: 'Track key performance indicators' },
    ],
    cta: 'Get Started',
  },
  {
    name: 'Growth Package',
    price: 'R 5,500/mo',
    description: 'Perfect for growing businesses aiming to expand their reach.',
    icon: TrendingUp,
    features: [
      { name: 'Everything in Starter', description: 'Includes all Starter Package features' },
      { name: 'On-Page Optimization', description: 'For up to 15 keywords' },
      { name: 'In-depth Keyword Research', description: 'Comprehensive analysis of relevant keywords' },
      { name: 'Link Building', description: '10 high-quality backlinks per month' },
      { name: 'Google My Business Optimization', description: 'Enhance local search visibility' },
      { name: 'Competitor Analysis', description: 'Understand your competitive landscape' },
    ],
    cta: 'Choose Growth',
  },
  {
    name: 'Pro Package',
    price: 'R 9,000/mo',
    description: 'Designed for established businesses seeking to dominate their market.',
    icon: Target,
    features: [
      { name: 'Everything in Growth', description: 'Includes all Growth Package features' },
      { name: 'On-Page Optimization', description: 'For up to 30 keywords' },
      { name: 'Advanced Link Building', description: '25 high-authority backlinks per month' },
      { name: 'Content Creation', description: '2 SEO-optimized blog posts per month' },
      { name: 'Conversion Rate Optimization (CRO)', description: 'Improve website effectiveness' },
      { name: 'Dedicated Account Manager', description: 'Personalized support and strategy' },
    ],
    cta: 'Go Pro',
  },
  {
    name: 'Enterprise Package',
    price: 'Custom Pricing',
    description: 'Tailored solutions for large businesses with specific SEO needs.',
    icon: Award,
    features: [
      { name: 'Customized Strategy & Deliverables', description: 'Bespoke SEO plan for your unique goals' },
      { name: 'Unlimited Keyword Optimization', description: 'Comprehensive keyword targeting' },
      { name: 'High-Authority Link Building', description: '50+ premium backlinks per month' },
      { name: 'Comprehensive Content Marketing Strategy', description: 'Full-funnel content plan' },
      { name: 'A/B Testing & Advanced CRO', description: 'Data-driven optimization for maximum results' },
      { name: 'Customized Reporting Dashboard', description: 'Real-time insights into your SEO performance' },
      { name: 'Bi-weekly Strategy Meetings', description: 'Regular consultations and progress reviews' },
      { name: '24/7 Priority Support', description: 'Round-the-clock assistance' },
    ],
    cta: 'Request Quote',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Thabo Mbeki Jr.',
    company: 'Safari Adventures ZA',
    avatarUrl: 'https://placehold.co/100x100.png',
    quote: "ZA Rank Boost transformed our online presence! We've seen a 150% increase in organic traffic and our bookings have doubled. Their understanding of the South African market is unparalleled.",
    location: 'Johannesburg, SA',
  },
  {
    id: '2',
    name: 'Aisha Patel',
    company: 'Cape Town Crafts Co.',
    avatarUrl: 'https://placehold.co/100x100.png',
    quote: "The team at ZA Rank Boost is professional, knowledgeable, and truly cares about their clients' success. Our local SEO has improved dramatically, and we're now ranking for keywords we never thought possible.",
    location: 'Cape Town, SA',
  },
  {
    id: '3',
    name: 'David Miller',
    company: 'Durban Tech Solutions',
    avatarUrl: 'https://placehold.co/100x100.png',
    quote: "Since partnering with ZA Rank Boost, our lead generation has gone through the roof. Their strategic approach to SEO and content marketing has delivered outstanding ROI. Highly recommended!",
    location: 'Durban, SA',
  },
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'cs1',
    clientName: 'Mzansi Flowers',
    industry: 'E-commerce (Florist)',
    challenge: 'Low online visibility and declining sales in a competitive market.',
    solution: 'Implemented a comprehensive local SEO strategy, optimized product pages, and built high-quality local citations.',
    results: [
      { metric: 'Organic Traffic Increase', value: '+200%', icon: TrendingUp },
      { metric: 'Conversion Rate Boost', value: '+45%', icon: Target },
      { metric: 'Local Keyword Rankings (Top 3)', value: '15', icon: Award },
    ],
    imageUrl: 'https://placehold.co/600x400.png',
    testimonial: "ZA Rank Boost helped us bloom online! We're now reaching more customers in Cape Town than ever before."
  },
  {
    id: 'cs2',
    clientName: 'Gauteng Legal Advisors',
    industry: 'Professional Services (Law Firm)',
    challenge: 'Struggling to attract qualified leads through their website.',
    solution: 'Developed a content marketing strategy focused on South African legal topics, combined with technical SEO improvements and targeted link building.',
    results: [
      { metric: 'Qualified Leads per Month', value: '+120%', icon: Users },
      { metric: 'Website Authority (DA) Increase', value: '+15 points', icon: Link2 },
      { metric: 'Search Visibility for Core Services', value: '+70%', icon: Search },
    ],
    imageUrl: 'https://placehold.co/600x400.png',
    testimonial: "The expertise of ZA Rank Boost has been invaluable. Our firm is now a recognized authority in our practice areas online."
  },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    slug: 'sa-seo-trends-2024',
    title: 'Top SEO Trends in South Africa for 2024',
    date: '2024-07-15',
    excerpt: 'Discover the latest SEO strategies that are shaping the digital landscape in South Africa and how your business can leverage them.',
    imageUrl: 'https://placehold.co/400x250.png',
    author: 'The ZA Rank Boost Team',
    category: 'SEO Trends',
    tags: ['South Africa SEO', 'Digital Marketing', '2024 Trends'],
  },
  {
    id: '2',
    slug: 'local-seo-guide-sa-smes',
    title: 'The Ultimate Guide to Local SEO for South African SMEs',
    date: '2024-06-28',
    excerpt: 'Learn how to optimize your online presence to attract local customers in South Africa, from Google My Business to local link building.',
    imageUrl: 'https://placehold.co/400x250.png',
    author: 'Jane Doe',
    category: 'Local SEO',
    tags: ['Local SEO', 'SMEs', 'South Africa'],
  },
  {
    id: '3',
    slug: 'content-marketing-roi-sa',
    title: 'Maximizing Your Content Marketing ROI in the South African Market',
    date: '2024-06-10',
    excerpt: 'Effective content marketing strategies tailored for South African audiences that drive engagement and conversions.',
    imageUrl: 'https://placehold.co/400x250.png',
    author: 'John Smith',
    category: 'Content Marketing',
    tags: ['Content Strategy', 'ROI', 'South Africa'],
  },
];

export const SEO_BENEFITS_SA = [
  {
    title: "Increased Local Visibility",
    description: "Connect with customers in your immediate area actively searching for your products or services. We optimize your online presence for local search queries, making it easier for South African consumers to find you.",
    icon: MapPin,
  },
  {
    title: "Higher ConversionRates",
    description: "SEO attracts qualified leads – users who are already interested in what you offer. This targeted traffic is more likely to convert into paying customers, boosting your sales and revenue.",
    icon: TrendingUp,
  },
  {
    title: "Competitive Advantage",
    description: "Outrank your competitors in search results and establish your brand as a leader in the South African market. Strong SEO builds credibility and trust with potential customers.",
    icon: Award,
  },
  {
    title: "Cost-Effective Marketing",
    description: "Compared to traditional advertising, SEO offers a higher ROI by providing a sustainable source of organic traffic. Invest in long-term growth without recurring ad spend.",
    icon: BarChartBig,
  },
  {
    title: "Build Brand Credibility",
    description: "Ranking high on Google builds trust and authority. Users perceive top-ranking sites as more credible and reliable, enhancing your brand reputation in South Africa.",
    icon: Zap,
  },
  {
    title: "Understand Your Customers Better",
    description: "SEO analytics provide valuable insights into customer behavior, search trends, and preferences within the South African context, helping you refine your business strategies.",
    icon: Users2,
  }
];

const FacebookIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <title>Facebook</title>
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

const TwitterIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <title>X</title>
    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.931ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/>
  </svg>
);

const LinkedInIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <title>LinkedIn</title>
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/>
  </svg>
);

const InstagramIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
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
  phone: '+27 21 123 4567',
  email: 'info@zarankboost.co.za',
  address: '123 SEO Street, Cape Town, 8001, South Africa',
};

export const COMPANY_MOTTO = "Expert SEO Services to Increase Your Website Traffic, Leads, and Sales";
export const HERO_HEADLINE = "Dominate South African Search Results & Grow Your Business";

export const ABOUT_US_CONTENT = {
  title: "Your Partners in South African SEO Success",
  introduction: "ZA Rank Boost is a premier SEO agency dedicated to helping small to medium-sized businesses (SMEs) in South Africa achieve unparalleled online visibility and growth. We understand the unique challenges and opportunities within the South African digital landscape, and we leverage this expertise to deliver tailored SEO strategies that produce measurable results.",
  mission: {
    title: "Our Mission",
    text: "To empower South African businesses with effective, data-driven SEO solutions that drive sustainable growth, increase brand authority, and maximize return on investment.",
    imageUrl: "https://placehold.co/500x350.png"
  },
  expertise: {
    title: "Our Expertise",
    points: [
      { title: "Local SEO Mastery", text: "Specialized in optimizing for South African cities and regions, ensuring your business connects with local customers.", icon: MapPin},
      { title: "Data-Driven Strategies", text: "Utilizing advanced analytics and market research to inform every decision and maximize impact.", icon: BarChart2 },
      { title: "Transparent Reporting", text: "Providing clear, comprehensive reports on campaign performance and key metrics.", icon: FileText },
      { title: "Client-Centric Approach", text: "Building long-term partnerships through personalized service and a deep understanding of your business goals.", icon: Users2 },
      { title: "Cutting-Edge Techniques", text: "Staying ahead of SEO trends and algorithm updates to keep your business at the forefront.", icon: Lightbulb }
    ],
    imageUrl: "https://placehold.co/500x350.png"
  },
  team: {
    title: "Meet Our Team (Placeholder)",
    members: [
      { name: "Lerato Khumalo", role: "SEO Strategist Lead", imageUrl: "https://placehold.co/150x150.png" },
      { name: "Ben van der Merwe", role: "Technical SEO Specialist", imageUrl: "https://placehold.co/150x150.png" },
      { name: "Sipho Ndlovu", role: "Content Marketing Manager", imageUrl: "https://placehold.co/150x150.png" },
    ],
    description: "Our team comprises passionate SEO professionals, content creators, and digital strategists with years of experience in the South African market. We are committed to your success."
  }
};

export const IMPORTANCE_OF_SEO_SA = {
  title: "Why SEO is Crucial for Your Business in South Africa",
  points: [
    {
      title: "Tap into a Growing Online Market",
      text: "South Africa has a rapidly expanding internet user base. SEO ensures your business is visible to this growing audience actively searching for products and services online.",
      icon: TrendingUp,
    },
    {
      title: "Dominate Local Search",
      text: "For businesses serving specific geographic areas, local SEO is vital. We help you appear in 'near me' searches and on Google Maps, driving foot traffic and local inquiries.",
      icon: MapPin,
    },
    {
      title: "Build Trust and Credibility",
      text: "Users trust websites that rank highly on Google. A strong SEO presence positions your brand as an authority and a reliable choice in your industry.",
      icon: Award,
    },
    {
      title: "Achieve Sustainable ROI",
      text: "Unlike paid ads, organic traffic from SEO is continuous and builds over time, offering a more sustainable and cost-effective return on investment.",
      icon: BarChartBig,
    },
    {
      title: "Understand Your Audience",
      text: "SEO data provides invaluable insights into South African consumer behavior, search trends, and preferences, allowing you to tailor your offerings effectively.",
      icon: Users,
    },
    {
      title: "Stay Ahead of Competitors",
      text: "If your competitors are investing in SEO, you need to as well to maintain and grow your market share. If they aren't, SEO gives you a significant advantage.",
      icon: Zap,
    },
  ],
  imageUrl: "https://placehold.co/500x400.png"
};
