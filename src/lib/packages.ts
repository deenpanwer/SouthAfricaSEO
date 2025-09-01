import type { ServicePackage, ServicePackageGroup } from '@/types';
import { BarChart, Search, Users, Briefcase, MessageSquare, Mail, MapPin, Phone, TrendingUp, Target, Award, Lightbulb, Edit3, Link2, BarChart2, Users2, FileText, Settings, HelpCircle, BarChartBig, Zap, Share2, Rocket, Code, Smile, CalendarDays, RefreshCw } from 'lucide-react';

export const SPECIAL_OFFER_PACKAGE: ServicePackage = {
  name: 'Web Design & Development',
  price: '$0',
  originalPrice: '$5,000',
  description: 'A professional, custom-built website designed to convert. Free for a limited time with any Pro or Enterprise plan.',
  icon: Code,
  features: [
    { name: 'Custom Design', description: 'Up to 10 pages, tailored to your brand.' },
    { name: 'Mobile-First & Responsive', description: 'Looks great on all devices.' },
    { name: 'SEO-Ready Foundation', description: 'Built for search engine visibility.' },
    { name: 'Basic Content Integration', description: 'We’ll set up your initial pages.' },
  ],
  cta: 'Claim This Offer',
  isSpecialOffer: true,
};

const SEO_PACKAGES: ServicePackage[] = [
  {
    name: 'SEO Starter',
    price: '$499/mo',
    originalPrice: '$1,500/mo',
    description: 'Foundational SEO to build online visibility and authority.',
    icon: Search,
    features: [
      { name: 'Keyword Research', description: 'Up to 20 target keywords' },
      { name: 'On-Page SEO', description: 'Optimization for all core pages' },
      { name: 'Technical Audit', description: 'Full site health check' },
      { name: 'Monthly Reporting', description: 'Performance dashboard' },
    ],
    cta: 'Choose SEO Starter',
    freeTrialOffer: 'First 3 Weeks FREE!',
  },
  {
    name: 'SEO Growth',
    price: '$1,999/mo',
    originalPrice: '$3,000/mo',
    description: 'Comprehensive SEO for competitive markets.',
    icon: TrendingUp,
    features: [
      { name: 'Everything in Starter', description: 'Plus advanced features' },
      { name: 'Content Creation', description: '2 SEO-focused blog posts/mo' },
      { name: 'Link Building', description: 'High-quality backlink acquisition' },
      { name: 'GMB Optimization', description: 'Dominate local search' },
    ],
    cta: 'Choose SEO Growth',
    freeTrialOffer: 'First 3 Weeks FREE!',
  },
  {
    name: 'SEO Pro',
    price: '$3,999/mo',
    originalPrice: '$5,500/mo',
    description: 'Aggressive SEO for market domination.',
    icon: Award,
    features: [
      { name: 'Everything in Growth', description: 'Plus premium services' },
      { name: 'Advanced Content Strategy', description: 'Pillar pages & topic clusters' },
      { name: 'Digital PR', description: 'High-authority media outreach' },
      { name: 'CRO & A/B Testing', description: 'Optimize for conversions' },
    ],
    cta: 'Choose SEO Pro',
    freeTrialOffer: 'First 3 Weeks FREE!',
  }
];

const TECHNICAL_SEO_PACKAGES: ServicePackage[] = [
  {
    name: 'Technical SEO Audit',
    price: '$399/mo',
    description: 'In-depth analysis of your website\'s technical foundation for search engines.',
    icon: Settings,
    features: [
      { name: 'Crawlability & Indexability', description: 'Ensure search engines can access your content' },
      { name: 'Site Speed Optimization', description: 'Improve Core Web Vitals' },
      { name: 'Mobile-Friendliness', description: 'Optimize for all devices' },
      { name: 'Structured Data Review', description: 'Audit existing Schema.org implementation' },
    ],
    cta: 'Get Technical Audit',
    freeTrialOffer: 'First 3 Weeks FREE!',
  },
  {
    name: 'Technical SEO Growth',
    price: '$799/mo',
    description: 'Ongoing technical optimization to maintain and improve search engine performance.',
    icon: Settings,
    features: [
      { name: 'Monthly Technical Scans', description: 'Proactive issue detection' },
      { name: 'Broken Link Fixes', description: 'Maintain site health' },
      { name: 'XML Sitemap Optimization', description: 'Ensure proper indexing' },
      { name: 'Robots.txt Management', description: 'Control crawler access' },
    ],
    cta: 'Choose Technical Growth',
    freeTrialOffer: 'First 3 Weeks FREE!',
  },
  {
    name: 'Technical SEO Pro',
    price: '$1,499/mo',
    description: 'Advanced technical SEO for complex websites and competitive landscapes.',
    icon: Settings,
    features: [
      { name: 'International SEO', description: 'Hreflang implementation and optimization' },
      { name: 'Core Web Vitals Deep Dive', description: 'Advanced performance tuning' },
      { name: 'Log File Analysis', description: 'Understand crawler behavior' },
      { name: 'Custom Technical Solutions', description: 'Tailored for unique website needs' },
    ],
    cta: 'Choose Technical Pro',
    freeTrialOffer: 'First 3 Weeks FREE!',
  }
];

const ON_PAGE_SEO_PACKAGES: ServicePackage[] = [
  {
    name: 'On-Page SEO Starter',
    price: '$699/mo',
    description: 'Optimize individual web pages for higher rankings and relevant traffic.',
    icon: FileText,
    features: [
      { name: 'Keyword Optimization', description: 'Strategic placement of target keywords' },
      { name: 'Meta Tag Optimization', description: 'Craft compelling titles and descriptions' },
      { name: 'Content Readability', description: 'Improve user engagement' },
      { name: 'Internal Linking Strategy', description: 'Enhance site navigation and authority flow' },
    ],
    cta: 'Optimize On-Page Starter',
    freeTrialOffer: 'First 3 Weeks FREE!',
  },
  {
    name: 'On-Page SEO Growth',
    price: '$1,299/mo',
    description: 'Comprehensive on-page optimization for sustained organic growth.',
    icon: FileText,
    features: [
      { name: 'Content Gap Analysis', description: 'Identify missing content opportunities' },
      { name: 'Competitor Content Analysis', description: 'Benchmark against top performers' },
      { name: 'User Intent Optimization', description: 'Align content with searcher needs' },
      { name: 'Image Optimization', description: 'Compress and alt-tag images for SEO' },
    ],
    cta: 'Optimize On-Page Growth',
    freeTrialOffer: 'First 3 Weeks FREE!',
  },
  {
    name: 'On-Page SEO Pro',
    price: '$2,499/mo',
    description: 'Advanced on-page strategies for market leadership and authority.',
    icon: FileText,
    features: [
      { name: 'Content Silo Structuring', description: 'Organize content for topical authority' },
      { name: 'Semantic SEO', description: 'Optimize for related entities and concepts' },
      { name: 'Featured Snippet Optimization', description: 'Aim for prime SERP real estate' },
      { name: 'Conversion-Focused On-Page', description: 'Optimize content for lead generation' },
    ],
    cta: 'Optimize On-Page Pro',
    freeTrialOffer: 'First 3 Weeks FREE!',
  }
];

const OFF_PAGE_SEO_PACKAGES: ServicePackage[] = [
  {
    name: 'Off-Page SEO Starter',
    price: '$899/mo',
    description: 'Build foundational authority and relevance through external signals.',
    icon: Link2,
    features: [
      { name: 'Backlink Audit', description: 'Analyze current backlink profile' },
      { name: 'Competitor Backlink Analysis', description: 'Identify link opportunities' },
      { name: 'Guest Posting Outreach', description: 'Acquire high-quality backlinks' },
      { name: 'Brand Mentions Monitoring', description: 'Track and leverage online mentions' },
    ],
    cta: 'Start Off-Page SEO',
    freeTrialOffer: 'First 3 Weeks FREE!',
  },
  {
    name: 'Off-Page SEO Growth',
    price: '$1,799/mo',
    description: 'Accelerate your website\'s authority with strategic link building.',
    icon: Link2,
    features: [
      { name: 'Digital PR Campaigns', description: 'Earn media coverage and high-tier links' },
      { name: 'Broken Link Building', description: 'Recover lost link equity' },
      { name: 'Resource Page Link Building', description: 'Get links from valuable resource lists' },
      { name: 'Local Citations Building', description: 'Improve local search visibility' },
    ],
    cta: 'Choose Off-Page Growth',
    freeTrialOffer: 'First 3 Weeks FREE!',
  },
  {
    name: 'Off-Page SEO Pro',
    price: '$3,499/mo',
    description: 'Dominate your market with aggressive and ethical off-page strategies.',
    icon: Link2,
    features: [
      { name: 'Skyscraper Content Promotion', description: 'Amplify high-value content' },
      { name: 'Influencer Outreach', description: 'Collaborate for powerful backlinks' },
      { name: 'Custom Link Acquisition', description: 'Tailored strategies for unique niches' },
      { name: 'Ongoing Link Profile Management', description: 'Monitor and disavow toxic links' },
    ],
    cta: 'Choose Off-Page Pro',
    freeTrialOffer: 'First 3 Weeks FREE!',
  }
];

const SCHEMA_MARKUP_PACKAGES: ServicePackage[] = [
  {
    name: 'Schema Markup Basic',
    price: '$599/mo',
    description: 'Implement essential structured data for enhanced search visibility.',
    icon: Code,
    features: [
      { name: 'Website Schema', description: 'Organization/LocalBusiness schema implementation' },
      { name: 'Breadcrumb Schema', description: 'Improve navigation snippets' },
      { name: 'Article Schema', description: 'For blog posts and articles' },
      { name: 'Schema Validation', description: 'Ensure proper implementation with Google tools' },
    ],
    cta: 'Implement Basic Schema',
    freeTrialOffer: 'First 3 Weeks FREE!',
  },
  {
    name: 'Schema Markup Advanced',
    price: '$1,199/mo',
    description: 'Unlock rich results with advanced structured data implementation.',
    icon: Code,
    features: [
      { name: 'Product Schema', description: 'For e-commerce product pages' },
      { name: 'FAQ Schema', description: 'For FAQ sections and pages' },
      { name: 'How-To Schema', description: 'For step-by-step guides' },
      { name: 'VideoObject Schema', description: 'For embedded videos' },
    ],
    cta: 'Implement Advanced Schema',
    freeTrialOffer: 'First 3 Weeks FREE!',
  },
  {
    name: 'Schema Markup Pro',
    price: '$2,299/mo',
    description: 'Comprehensive schema strategy for maximum rich result potential.',
    icon: Code,
    features: [
      { name: 'Custom Schema Development', description: 'Tailored for unique content types' },
      { name: 'Local Business Schema Optimization', description: 'Enhance local search presence' },
      { name: 'Review Snippet Schema', description: 'Display ratings in SERPs' },
      { name: 'Ongoing Schema Monitoring', description: 'Ensure schema remains valid and effective' },
    ],
    cta: 'Implement Pro Schema',
    freeTrialOffer: 'First 3 Weeks FREE!',
  }
];

const LOCAL_SEO_PACKAGES: ServicePackage[] = [
  {
    name: 'Local SEO Starter',
    price: '$499/mo',
    description: 'Boost your local search presence and attract nearby customers.',
    icon: MapPin,
    features: [
      { name: 'Google Business Profile Optimization', description: 'Enhance your local listing' },
      { name: 'Local Citation Building', description: 'Ensure consistent business information' },
      { name: 'Local Keyword Research', description: 'Target local search terms' },
      { name: 'Basic Local Reporting', description: 'Track local visibility' },
    ],
    cta: 'Start Local SEO',
    freeTrialOffer: 'First 3 Weeks FREE!',
  },
  {
    name: 'Local SEO Growth',
    price: '$999/mo',
    description: 'Dominate local map packs and drive more foot traffic.',
    icon: MapPin,
    features: [
      { name: 'Advanced GMB Optimization', description: 'Posts, Q&A, and service area optimization' },
      { name: 'Local Link Building', description: 'Acquire links from local businesses' },
      { name: 'Geo-Targeted Content Creation', description: 'Create content for local relevance' },
      { name: 'Local Review Management', description: 'Boost your local reputation' },
    ],
    cta: 'Choose Local SEO Growth',
    freeTrialOffer: 'First 3 Weeks FREE!',
  },
  {
    name: 'Local SEO Pro',
    price: '$1,899/mo',
    description: 'Comprehensive local SEO for multi-location businesses and competitive markets.',
    icon: MapPin,
    features: [
      { name: 'Multi-Location GMB Management', description: 'Optimize all business locations' },
      { name: 'Local Schema Markup', description: 'Implement LocalBusiness schema' },
      { name: 'Hyperlocal Content Strategy', description: 'Target specific neighborhoods' },
      { name: 'Advanced Local Analytics', description: 'Track local conversions and ROI' },
    ],
    cta: 'Choose Local SEO Pro',
    freeTrialOffer: 'First 3 Weeks FREE!',
  }
];

const SEO_AUDITS_PACKAGES: ServicePackage[] = [
  {
    name: 'Basic SEO Audit',
    price: '$399 (One-Time)',
    description: 'A foundational review of your website\'s SEO health.',
    icon: BarChart,
    features: [
      { name: 'Technical SEO Scan', description: 'Identify critical crawl errors' },
      { name: 'On-Page Content Review', description: 'Basic keyword and content analysis' },
      { name: 'Backlink Profile Snapshot', description: 'Overview of your link equity' },
      { name: 'Actionable Recommendations', description: 'Prioritized list of improvements' },
    ],
    cta: 'Get Basic Audit',
  },
  {
    name: 'Comprehensive SEO Audit',
    price: '$799 (One-Time)',
    description: 'An in-depth analysis of your entire SEO landscape.',
    icon: BarChart,
    features: [
      { name: 'Full Technical Audit', description: 'Deep dive into site infrastructure' },
      { name: 'Detailed On-Page Analysis', description: 'Content, keyword, and user intent' },
      { name: 'Competitor SEO Analysis', description: 'Benchmark against top performers' },
      { name: 'Custom Strategy Roadmap', description: 'Tailored plan for organic growth' },
    ],
    cta: 'Get Comprehensive Audit',
  },
  {
    name: 'Enterprise SEO Audit',
    price: 'Custom',
    description: 'Tailored audit for large-scale websites and complex SEO challenges.',
    icon: BarChart,
    features: [
      { name: 'Log File Analysis', description: 'Understand Googlebot behavior' },
      { name: 'International SEO Audit', description: 'For multi-regional websites' },
      { name: 'Migration SEO Audit', description: 'Pre/post-migration analysis' },
      { name: 'Dedicated Audit Team', description: 'Expert analysis and consultation' },
    ],
    cta: 'Request Enterprise Audit',
  }
];

const CONTENT_MARKETING_FOR_SEO_PACKAGES: ServicePackage[] = [
  {
    name: 'Content Marketing Starter',
    price: '$799/mo',
    description: 'Begin building your brand authority and attracting organic traffic with content.',
    icon: MessageSquare,
    features: [
      { name: 'Content Strategy Session', description: 'Define your content goals' },
      { name: 'Keyword-Rich Blog Posts', description: '2 x 800-word articles/mo' },
      { name: 'Basic Content Promotion', description: 'Social sharing and distribution' },
      { name: 'Performance Tracking', description: 'Monitor content impact on SEO' },
    ],
    cta: 'Start Content Marketing',
    freeTrialOffer: 'First 3 Weeks FREE!',
  },
  {
    name: 'Content Marketing Growth',
    price: '$1,599/mo',
    description: 'Scale your content efforts to drive significant organic growth and engagement.',
    icon: MessageSquare,
    features: [
      { name: 'Advanced Content Strategy', description: 'Topic clusters and content funnels' },
      { name: 'High-Value Content Creation', description: '4 x 1000-word articles/mo' },
      { name: 'Content Refresh & Optimization', description: 'Update existing content for better performance' },
      { name: 'Guest Post Outreach', description: 'Secure backlinks through content' },
    ],
    cta: 'Choose Content Marketing Growth',
    freeTrialOffer: 'First 3 Weeks FREE!',
  },
  {
    name: 'Content Marketing Pro',
    price: '$2,999/mo',
    description: 'Comprehensive content marketing for market leadership and thought leadership.',
    icon: MessageSquare,
    features: [
      { name: 'Pillar Content Development', description: 'Long-form, authoritative content' },
      { name: 'Video Content Strategy', description: 'Scripting and optimization for video SEO' },
      { name: 'Interactive Content Creation', description: 'Quizzes, calculators, and infographics' },
      { name: 'Digital PR & Syndication', description: 'Amplify content reach and authority' },
    ],
    cta: 'Choose Content Marketing Pro',
    freeTrialOffer: 'First 3 Weeks FREE!',
  }
];

const PPC_PACKAGES: ServicePackage[] = [
  {
    name: 'PPC Launch',
    price: '$799/mo',
    originalPrice: '$1,000/mo',
    description: 'For businesses new to PPC, focused on one platform.',
    icon: Rocket,
    features: [
      { name: 'Ad Spend Limit', description: 'Up to $5,000/mo' },
      { name: 'Platform', description: 'Google Ads or Meta Ads' },
      { name: 'Campaign Setup', description: 'Full account & campaign build' },
      { name: 'Monthly Reporting', description: 'Key performance metrics' },
    ],
    cta: 'Choose PPC Launch',
    freeTrialOffer: 'First 3 Weeks FREE!',
  },
  {
    name: 'PPC Scale',
    price: '$1,999/mo',
    originalPrice: '$2,500/mo',
    description: 'Multi-platform advertising for growing brands.',
    icon: TrendingUp,
    features: [
      { name: 'Ad Spend Limit', description: 'Up to $15,000/mo' },
      { name: 'Platforms', description: 'Google Ads & Meta Ads' },
      { name: 'A/B Testing', description: 'Ad copy & landing page tests' },
      { name: 'Dedicated Manager', description: 'Weekly performance check-ins' },
    ],
    cta: 'Choose PPC Scale',
    freeTrialOffer: 'First 3 Weeks FREE!',
  },
  {
    name: 'PPC Dominate',
    price: 'Custom',
    description: 'Aggressive, multi-channel campaigns for market leaders.',
    icon: Award,
    features: [
      { name: 'Ad Spend Limit', description: '$15,000+/mo' },
      { name: 'All Platforms', description: 'Google, Meta, LinkedIn, etc.' },
      { name: 'Advanced CRO', description: 'Full funnel optimization' },
      { name: 'Custom Dashboards', description: 'Real-time ROI tracking' },
    ],
    cta: 'Request Quote',
  }
];

const SOCIAL_MEDIA_PACKAGES: ServicePackage[] = [
  {
    name: 'Social Starter',
    price: '$599/mo',
    originalPrice: '$800/mo',
    description: 'Establish a professional presence on key social platforms.',
    icon: Users,
    features: [
      { name: 'Platforms', description: 'Up to 2 social media platforms' },
      { name: 'Posting Frequency', description: '3 posts per week per platform' },
      { name: 'Content Creation', description: 'Basic graphic design & copywriting' },
      { name: 'Monthly Reporting', description: 'Follower growth & engagement' },
    ],
    cta: 'Choose Social Starter',
    freeTrialOffer: 'First 3 Weeks FREE!',
  },
  {
    name: 'Social Growth',
    price: '$1,299/mo',
    originalPrice: '$1,800/mo',
    description: 'Build an engaged community and drive traffic.',
    icon: TrendingUp,
    features: [
      { name: 'Platforms', description: 'Up to 3 platforms' },
      { name: 'Posting Frequency', description: '5 posts per week per platform' },
      { name: 'Community Management', description: 'Proactive engagement' },
      { name: 'Ad Campaign', description: 'Includes basic ad management' },
    ],
    cta: 'Choose Social Growth',
    freeTrialOffer: 'First 3 Weeks FREE!',
  },
  {
    name: 'Social Pro',
    price: '$2,999/mo',
    originalPrice: '$3,500/mo',
    description: 'Comprehensive social media and influencer marketing.',
    icon: Award,
    features: [
      { name: 'Platforms', description: 'Up to 4 platforms' },
      { name: 'Content', description: 'Includes video & stories' },
      { name: 'Influencer Outreach', description: 'Partnerships with micro-influencers' },
      { name: 'Advanced Analytics', description: 'Full-funnel ROI tracking' },
    ],
    cta: 'Choose Social Pro',
    freeTrialOffer: 'First 3 Weeks FREE!',
  }
];

const CONTENT_WRITING_PACKAGES: ServicePackage[] = [
  {
    name: 'Content Starter',
    price: '$699/mo',
    originalPrice: '$750/mo',
    description: 'Foundational content to establish online presence and authority.',
    icon: Edit3,
    features: [
      { name: 'Blog Posts', description: '2 x 1000-word SEO-optimized articles/mo' },
      { name: 'Keyword Research', description: 'Basic content keyword analysis' },
      { name: 'Content Calendar', description: 'Monthly content planning' },
      { name: 'Performance Report', description: 'Monthly content engagement report' },
    ],
    cta: 'Choose Content Starter',
    freeTrialOffer: 'First 3 Weeks FREE!',
  },
  {
    name: 'Content Growth',
    price: '$1,499/mo',
    originalPrice: '$1,800/mo',
    description: 'Expand your content reach and drive organic traffic.',
    icon: Edit3,
    features: [
      { name: 'Blog Posts', description: '4 x 1000-word SEO-optimized articles/mo' },
      { name: 'Content Strategy', description: 'Advanced topic cluster development' },
      { name: 'On-Page SEO', description: 'Optimization for all new content' },
      { name: 'Content Promotion', description: 'Basic social sharing & outreach' },
    ],
    cta: 'Choose Content Growth',
    freeTrialOffer: 'First 3 Weeks FREE!',
  },
  {
    name: 'Content Pro',
    price: '$2,999/mo',
    originalPrice: '$3,500/mo',
    description: 'Dominate your niche with comprehensive content marketing.',
    icon: Edit3,
    features: [
      { name: 'Pillar Pages', description: '1 x 2000-word pillar page/quarter' },
      { name: 'Case Studies', description: '1 x case study/quarter' },
      { name: 'Content Audit', description: 'Annual content performance audit' },
      { name: 'Digital PR', description: 'Advanced content outreach & link building' },
    ],
    cta: 'Choose Content Pro',
    freeTrialOffer: 'First 3 Weeks FREE!',
  }
];

const EMAIL_MARKETING_PACKAGES: ServicePackage[] = [
  {
    name: 'Email Starter',
    price: '$549/mo',
    originalPrice: '$600/mo',
    description: 'Engage your audience and nurture leads with essential email campaigns.',
    icon: Mail,
    features: [
      { name: 'List Setup', description: 'Audience segmentation & CRM integration' },
      { name: 'Welcome Sequence', description: 'Automated onboarding for new subscribers' },
      { name: 'Newsletter Campaigns', description: '2 x monthly email newsletters' },
      { name: 'Basic Reporting', description: 'Open, click, and conversion rates' },
    ],
    cta: 'Start Email Starter',
    freeTrialOffer: 'First 3 Weeks FREE!',
  },
  {
    name: 'Email Growth',
    price: '$1,199/mo',
    originalPrice: '$1,500/mo',
    description: 'Automate and optimize your email funnels for increased conversions.',
    icon: Mail,
    features: [
      { name: 'Advanced Automation', description: 'Cart abandonment, re-engagement flows' },
      { name: 'Newsletter Campaigns', description: '4 x monthly email newsletters' },
      { name: 'A/B Testing', description: 'Subject lines, content, and CTAs' },
      { name: 'Segmentation Strategy', description: 'Targeted campaigns for specific audiences' },
    ],
    cta: 'Start Email Growth',
    freeTrialOffer: 'First 3 Weeks FREE!',
  },
  {
    name: 'Email Pro',
    price: '$2,499/mo',
    originalPrice: '$3,000/mo',
    description: 'Comprehensive email marketing for maximum ROI and customer retention.',
    icon: Mail,
    features: [
      { name: 'Full Funnel Automation', description: 'Custom flows for every customer journey stage' },
      { name: 'Dedicated Manager', description: 'Weekly strategy calls & optimization' },
      { name: 'Advanced Analytics', description: 'LTV, churn, and customer behavior insights' },
      { name: 'Integrations', description: 'Seamless integration with CRM & e-commerce platforms' },
    ],
    cta: 'Start Email Pro',
    freeTrialOffer: 'First 3 Weeks FREE!',
  }
];

const ECOMMERCE_OPTIMIZATION_PACKAGES: ServicePackage[] = [
  {
    name: 'eCommerce Starter',
    price: '$1,899/mo',
    originalPrice: '$2,000/mo',
    description: 'Optimize your online store for better performance and initial sales growth.',
    icon: BarChart2,
    features: [
      { name: 'CRO Audit', description: 'Identify conversion bottlenecks on key pages' },
      { name: 'Product Page Optimization', description: 'Enhance product descriptions & images' },
      { name: 'Basic Site Speed', description: 'Initial performance improvements' },
      { name: 'Monthly Reporting', description: 'Sales, conversion rate, and traffic' },
    ],
    cta: 'Optimize Starter',
    freeTrialOffer: 'First 3 Weeks FREE!',
  },
  {
    name: 'eCommerce Growth',
    price: '$3,499/mo',
    originalPrice: '$4,000/mo',
    description: 'Accelerate your e-commerce sales with advanced optimization strategies.',
    icon: BarChart2,
    features: [
      { name: 'A/B Testing', description: 'Product pages, checkout flow, and landing pages' },
      { name: 'eCommerce SEO', description: 'Optimize product & category pages for search' },
      { name: 'User Experience (UX) Audit', description: 'Improve site navigation and usability' },
      { name: 'Abandoned Cart Recovery', description: 'Implement and optimize recovery flows' },
    ],
    cta: 'Optimize Growth',
    freeTrialOffer: 'First 3 Weeks FREE!',
  },
  {
    name: 'eCommerce Pro',
    price: '$5,999/mo',
    originalPrice: '$7,000/mo',
    description: 'Maximized e-commerce profitability and market leadership.',
    icon: BarChart2,
    features: [
      { name: 'Full Funnel CRO', description: 'End-to-end conversion rate optimization' },
      { name: 'Personalization', description: 'Dynamic content and product recommendations' },
      { name: 'Advanced Analytics', description: 'Deep dive into customer behavior and LTV' },
      { name: 'Integrations', description: 'CRM, ERP, and marketing automation platforms' },
    ],
    cta: 'Optimize Pro',
    freeTrialOffer: 'First 3 Weeks FREE!',
  }
];


export const SERVICE_PACKAGE_GROUPS: ServicePackageGroup[] = [
  {
    title: "Affordable SEO Packages",
    description: "Build a durable, organic growth engine by becoming the best answer for what your customers are searching for.",
    icon: Search,
    packages: SEO_PACKAGES,
  },
  {
    title: "Affordable Technical SEO Packages",
    description: "Optimize your website's technical foundation for superior search engine performance.",
    icon: Settings,
    packages: TECHNICAL_SEO_PACKAGES,
  },
  {
    title: "Affordable On-Page SEO Packages",
    description: "Enhance individual web pages to rank higher and attract more relevant traffic.",
    icon: FileText,
    packages: ON_PAGE_SEO_PACKAGES,
  },
  {
    title: "Affordable Off-Page SEO & Link Building Packages",
    description: "Build your website's authority and relevance through strategic external signals.",
    icon: Link2,
    packages: OFF_PAGE_SEO_PACKAGES,
  },
  {
    title: "Affordable Schema Markup Packages",
    description: "Implement structured data to enhance search engine understanding and unlock rich results.",
    icon: Code,
    packages: SCHEMA_MARKUP_PACKAGES,
  },
  {
    title: "Affordable Local SEO Packages",
    description: "Boost your local search presence and attract nearby customers with targeted strategies.",
    icon: MapPin,
    packages: LOCAL_SEO_PACKAGES,
  },
  {
    title: "Affordable SEO Audit Packages",
    description: "Comprehensive analysis of your website's SEO performance with actionable recommendations.",
    icon: BarChart,
    packages: SEO_AUDITS_PACKAGES,
  },
  {
    title: "Affordable Content Marketing for SEO Packages",
    description: "Create and distribute valuable content to attract and engage your target audience.",
    icon: MessageSquare,
    packages: CONTENT_MARKETING_FOR_SEO_PACKAGES,
  },
  {
    title: "Affordable PPC Management Packages",
    description: "Treat ad spend as a high-return investment with campaigns engineered for profitability, not just clicks.",
    icon: TrendingUp,
    packages: PPC_PACKAGES,
  },
  {
    title: "Affordable Social Media Packages",
    description: "Cultivate a loyal community of brand advocates, not just a passive audience of followers.",
    icon: Users,
    packages: SOCIAL_MEDIA_PACKAGES,
  },
  {
    title: "Affordable Content Writing Packages",
    description: "Drive growth with expert content strategies that build authority and engage your audience.",
    icon: Edit3,
    packages: CONTENT_WRITING_PACKAGES,
  },
  {
    title: "Affordable Email Marketing Packages",
    description: "Engage your audience and drive sales with highly effective email marketing campaigns.",
    icon: Mail,
    packages: EMAIL_MARKETING_PACKAGES,
  },
  {
    title: "Affordable eCommerce Optimization Packages",
    description: "Turn your online store into a selling machine with scientifically optimized performance.",
    icon: BarChart2,
    packages: ECOMMERCE_OPTIMIZATION_PACKAGES,
  },
];
