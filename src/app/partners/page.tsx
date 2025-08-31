'use client';

import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Globe, BarChart2, Search, Zap, DollarSign, Code, ShoppingCart, Star } from 'lucide-react';
import { useState, useEffect } from 'react';

const metadata: Metadata = {
  title: 'Our Esteemed Partners in Digital Excellence',
  description: 'Collaborating with the best in the industry to deliver unparalleled results. Explore our network of technology and marketing partners.',
  
};

interface Partner {
  name: string;
  description: string;
  imageUrl: string;
  websiteUrl: string;
  category: 'SEO & Analytics' | 'Content & Marketing' | 'Paid Media (PPC)' | 'Web Development & Hosting' | 'Ecommerce & Conversion' | 'Automation & Integration' | 'Reputation Management';
}

const allPartners: Partner[] = [
  // Existing Partners
  {
    name: 'Semrush',
    description: 'A comprehensive SEO toolkit for keyword research, competitor analysis, and rank tracking.',
    imageUrl: 'https://cdn.brandfetch.io/idt3n8W3ef/theme/dark/logo.svg?c=1bxid64Mup7aczewSAYMX&t=1667587193361',
    websiteUrl: 'https://www.semrush.com/',
    category: 'SEO & Analytics',
  },
  {
    name: 'Ahrefs',
    description: 'Powerful SEO tools for backlink analysis, keyword research, and content exploration.',
    imageUrl: 'https://ahrefs.com/images/logo/logo_180x80.png',
    websiteUrl: 'https://www.ahrefs.com/',
    category: 'SEO & Analytics',
  },
  {
    name: 'Moz',
    description: 'SEO software and data to help you increase traffic, rankings, and visibility in search results.',
    imageUrl: 'https://cdn.brandfetch.io/idv_2PnsOz/theme/dark/logo.svg?c=1bxid64Mup7aczewSAYMX&t=1692371445748',
    websiteUrl: 'https://www.moz.com/',
    category: 'SEO & Analytics',
  },
  {
    name: 'Yoast',
    description: 'The #1 WordPress SEO plugin, helping you optimize your website for search engines.',
    imageUrl: 'https://cdn.brandfetch.io/id64sIHg1M/theme/dark/logo.svg?c=1bxid64Mup7aczewSAYMX&t=1673963454408',
    websiteUrl: 'https://yoast.com/',
    category: 'SEO & Analytics',
  },
  {
    name: 'Surfer SEO',
    description: 'A content intelligence tool that helps you write perfectly optimized articles for Google.',
    imageUrl: 'https://cdn.brandfetch.io/idMI1EQYax/theme/dark/logo.svg?c=1bxid64Mup7aczewSAYMX&t=1748287783360',
    websiteUrl: 'https://surferseo.com/',
    category: 'Content & Marketing',
  },
  {
    name: 'HubSpot',
    description: 'A full platform of marketing, sales, customer service, and CRM software.',
    imageUrl: 'https://cdn.worldvectorlogo.com/logos/hubspot.svg',
    websiteUrl: 'https://www.hubspot.com/',
    category: 'Content & Marketing',
  },

  // New Partners - SEO & Analytics
  { name: 'Screaming Frog', description: 'A desktop program that crawls websites’ URLs and fetches key elements to analyze for SEO issues.', imageUrl: 'https://cdn.worldvectorlogo.com/logos/screaming-frog-1.svg', websiteUrl: 'https://www.screamingfrog.co.uk/', category: 'SEO & Analytics' },
  { name: 'Google Search Console', description: 'Google’s free service that helps you monitor, maintain, and troubleshoot your site’s presence in Google Search results.', imageUrl: 'https://cdn.worldvectorlogo.com/logos/search-console-icon-2025-1.svg', websiteUrl: 'https://search.google.com/search-console/about', category: 'SEO & Analytics' },
  { name: 'Google Tag Manager', description: 'A tag management system that allows you to quickly and easily update tracking codes and related code fragments known as tags on your website or mobile app.', imageUrl: 'https://cdn.worldvectorlogo.com/logos/google-tag-assistant.svg', websiteUrl: 'https://tagmanager.google.com/', category: 'SEO & Analytics' },
  { name: 'SE Ranking', description: 'All-in-one SEO software for keyword research, competitor analysis, website audit, and rank tracking.', imageUrl: 'https://cdn.brandfetch.io/idnPhmbDeQ/theme/dark/logo.svg?c=1bxid64Mup7aczewSAYMX&t=1673965843029', websiteUrl: 'https://seranking.com/', category: 'SEO & Analytics' },

  // New Partners - Content & Marketing
  { name: 'Grammarly', description: 'An AI-powered writing assistant that helps improve grammar, spelling, punctuation, and style.', imageUrl: 'https://cdn.brandfetch.io/iddd_fYAYR/theme/dark/logo.svg?c=1bxid64Mup7aczewSAYMX&t=1712822059334', websiteUrl: 'https://www.grammarly.com/', category: 'Content & Marketing' },
  { name: 'WordPress', description: 'A free and open-source content management system (CMS) for building websites and blogs.', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/WordPress_logo.svg/1200px-WordPress_logo.svg.png', websiteUrl: 'https://wordpress.org/', category: 'Content & Marketing' },
  { name: 'Shutterstock', description: 'A global provider of stock photography, stock footage, stock music, and editing tools.', imageUrl: 'https://cdn.worldvectorlogo.com/logos/shutterstock.svg', websiteUrl: 'https://www.shutterstock.com/', category: 'Content & Marketing' },
  { name: 'Getty Images', description: 'A leading visual content creator and marketplace, offering high-quality stock photos, videos, and music.', imageUrl: 'https://cdn.worldvectorlogo.com/logos/getty-images.svg', websiteUrl: 'https://www.gettyimages.com/', category: 'Content & Marketing' },

  // New Partners - Paid Media (PPC)
  { name: 'Google Ads', description: 'Google’s online advertising platform where advertisers bid to display brief advertisements, service offerings, product listings, or videos to web users.', imageUrl: 'https://cdn.worldvectorlogo.com/logos/google-ads-2.svg', websiteUrl: 'https://ads.google.com/', category: 'Paid Media (PPC)' },
  { name: 'Microsoft Advertising', description: 'Microsoft’s pay-per-click (PPC) advertising platform, formerly known as Bing Ads.', imageUrl: 'https://cdn.worldvectorlogo.com/logos/microsoft-6.svg', websiteUrl: 'https://ads.microsoft.com/', category: 'Paid Media (PPC)' },
  { name: 'Facebook Ads Manager', description: 'The primary tool for creating, managing, and tracking advertising campaigns across Facebook, Instagram, Messenger, and Audience Network.', imageUrl: 'https://cdn.worldvectorlogo.com/logos/facebook-ads.svg', websiteUrl: 'https://adsmanager.facebook.com/', category: 'Paid Media (PPC)' },

  // New Partners - Web Development & Hosting
  { name: 'WP Engine', description: 'A managed WordPress hosting provider offering high performance, security, and support for WordPress websites.', imageUrl: 'https://cdn.worldvectorlogo.com/logos/wordpress-icon-1.svg', websiteUrl: 'https://wpengine.com/', category: 'Web Development & Hosting' },
  { name: 'Kinsta', description: 'Premium managed WordPress hosting known for its speed, security, and excellent customer support.', imageUrl: 'https://cdn.brandfetch.io/id5QJk_Kv4/theme/dark/logo.svg?c=1bxid64Mup7aczewSAYMX&t=1668036787633', websiteUrl: 'https://kinsta.com/', category: 'Web Development & Hosting' },
  { name: 'Figma', description: 'A collaborative web-based interface design tool for creating prototypes, wireframes, and user interfaces.', imageUrl: 'https://cdn.worldvectorlogo.com/logos/figma-icon.svg', websiteUrl: 'https://www.figma.com/', category: 'Web Development & Hosting' },
  { name: 'GitHub', description: 'A platform for version control and collaborative software development, widely used for hosting code repositories.', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg', websiteUrl: 'https://github.com/', category: 'Web Development & Hosting' },
  { name: 'Vercel', description: 'A platform for frontend frameworks and static sites, built to integrate with your headless content, commerce, or database.', imageUrl: 'https://cdn.worldvectorlogo.com/logos/vercel.svg', websiteUrl: 'https://vercel.com/', category: 'Web Development & Hosting' },

  // New Partners - Ecommerce & Conversion
  { name: 'Shopify', description: 'A leading e-commerce platform that allows businesses to create online stores and sell products.', imageUrl: 'https://cdn.worldvectorlogo.com/logos/shopify-2.svg', websiteUrl: 'https://www.shopify.com/', category: 'Ecommerce & Conversion' },
  { name: 'WooCommerce', description: 'A customizable, open-source e-commerce platform built for WordPress.', imageUrl: 'https://cdn.worldvectorlogo.com/logos/woocommerce.svg', websiteUrl: 'https://woocommerce.com/', category: 'Ecommerce & Conversion' },
  { name: 'Hotjar', description: 'Provides heatmaps, session recordings, and surveys to understand user behavior and optimize conversion rates.', imageUrl: 'https://cdn.brandfetch.io/iduokgC8Q7/theme/dark/logo.svg?c=1bxid64Mup7aczewSAYMX&t=1667808156993', websiteUrl: 'https://www.hotjar.com/', category: 'Ecommerce & Conversion' },

  // New Partners - Automation & Integration
  { name: 'Zapier', description: 'Connects apps and automates workflows, allowing you to move information between your web apps automatically.', imageUrl: 'https://cdn.worldvectorlogo.com/logos/zapier-2.svg', websiteUrl: 'https://zapier.com/', category: 'Automation & Integration' },
  { name: 'Make', description: 'A visual platform for automating workflows and integrating apps, formerly known as Integromat.', imageUrl: 'https://cdn.worldvectorlogo.com/logos/make-logo-rgb-3.svg', websiteUrl: 'https://www.make.com/', category: 'Automation & Integration' },
  { name: 'Salesforce', description: 'A leading cloud-based customer relationship management (CRM) software that helps companies manage sales, service, and marketing.', imageUrl: 'https://cdn.worldvectorlogo.com/logos/salesforce-2.svg', websiteUrl: 'https://www.salesforce.com/', category: 'Automation & Integration' },
  { name: 'Zoho CRM', description: 'A cloud-based customer relationship management software that helps businesses manage sales, marketing, and customer support in one system.', imageUrl: 'https://cdn.brandfetch.io/idssig0_jY/theme/dark/logo.svg?c=1bxid64Mup7aczewSAYMX&t=1687855848599', websiteUrl: 'https://www.zoho.com/crm/', category: 'Automation & Integration' },
  { name: 'n8n', description: 'A fair-code workflow automation tool that helps you to connect any app with an API to build powerful automations.', imageUrl: 'https://cdn.brandfetch.io/idO6_6uqJ9/theme/dark/logo.svg?c=1bxid64Mup7aczewSAYMX&t=1667631203558', websiteUrl: 'https://n8n.io/', category: 'Automation & Integration' },

  // New Partners - Reputation Management
  { name: 'Podium', description: 'A platform that helps local businesses get more reviews, collect payments, and communicate with customers.', imageUrl: 'https://cdn.brandfetch.io/idyHlA-TXG/theme/dark/logo.svg?c=1bxid64Mup7aczewSAYMX&t=1667658118567', websiteUrl: 'https://www.podium.com/', category: 'Reputation Management' },
  { name: 'Google My Business', description: 'A free tool that allows businesses and organizations to manage their online presence across Google, including Search and Maps.', imageUrl: 'https://cdn.worldvectorlogo.com/logos/google-my-business-logo.svg', websiteUrl: 'https://www.google.com/business/', category: 'Reputation Management' },
];

const PartnerCard = ({ partner }: { partner: Partner }) => {
  const [isImageLoading, setIsImageLoading] = useState(true);

  return (
    <div className="bg-white dark:bg-gray-800/50 rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl ring-1 ring-gray-200 dark:ring-gray-700">
      <Link href={partner.websiteUrl} target="_blank" rel="noopener noreferrer" className="flex flex-col h-full">
        <div className="relative h-40 w-full bg-gray-50 dark:bg-gray-700/30 flex items-center justify-center p-4">
          {isImageLoading && (
            <div className="absolute inset-0 bg-gray-200 dark:bg-gray-700/50 animate-pulse"></div>
          )}
          <Image
            src={partner.imageUrl}
            alt={`${partner.name} logo`}
            width={150}
            height={60}
            objectFit="contain"
            onLoad={() => setIsImageLoading(false)}
            onError={() => setIsImageLoading(false)}
          />
        </div>
        <div className="p-6 flex-grow">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{partner.name}</h3>
          <p className="text-gray-600 dark:text-gray-300 text-sm">{partner.description}</p>
        </div>
        <div className="p-6 pt-0 text-sm text-primary dark:text-secondary font-semibold flex items-center">
          Visit Website <Globe className="ml-2 h-4 w-4" />
        </div>
      </Link>
    </div>
  );
};

const SkeletonCard = () => (
  <div className="bg-white dark:bg-gray-800/50 rounded-xl shadow-lg overflow-hidden ring-1 ring-gray-200 dark:ring-gray-700 animate-pulse">
    <div className="h-40 w-full bg-gray-200 dark:bg-gray-700/50"></div>
    <div className="p-6">
      <div className="h-6 w-3/4 mb-4 bg-gray-300 dark:bg-gray-600 rounded"></div>
      <div className="h-4 w-full mb-2 bg-gray-200 dark:bg-gray-700 rounded"></div>
      <div className="h-4 w-5/6 bg-gray-200 dark:bg-gray-700 rounded"></div>
    </div>
    <div className="p-6 pt-0">
        <div className="h-5 w-1/3 bg-gray-300 dark:bg-gray-600 rounded"></div>
    </div>
  </div>
);

const SkeletonList = () => (
    <div className="space-y-4 animate-pulse">
        <div className="h-6 w-1/2 bg-gray-300 dark:bg-gray-700 rounded"></div>
        <div className="h-4 w-1/3 bg-gray-200 dark:bg-gray-600 rounded"></div>
        <div className="h-4 w-1/4 bg-gray-200 dark:bg-gray-600 rounded"></div>
    </div>
);

export default function PartnersPage() {
  const [isLoading, setIsLoading] = useState(true);

  const categories = [
    'SEO & Analytics',
    'Content & Marketing',
    'Paid Media (PPC)',
    'Web Development & Hosting',
    'Ecommerce & Conversion',
    'Automation & Integration',
    'Reputation Management',
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 100); // Simulate a very short loading time for overall categories
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-gray-50 dark:bg-black">
      <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight">
            Our Network of Industry Leaders
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300">
            We partner with the best tools and platforms to ensure our clients receive cutting-edge solutions and unparalleled results.
          </p>
        </div>

        {categories.map((category) => (
          <section key={category} className="mb-16">
            <div className="flex items-center mb-8">
              {category === 'SEO & Analytics' && <BarChart2 className="h-8 w-8 mr-3 text-primary" />}
              {category === 'Content & Marketing' && <Search className="h-8 w-8 mr-3 text-primary" />}
              {category === 'Paid Media (PPC)' && <DollarSign className="h-8 w-8 mr-3 text-primary" />}
              {category === 'Web Development & Hosting' && <Code className="h-8 w-8 mr-3 text-primary" />}
              {category === 'Ecommerce & Conversion' && <ShoppingCart className="h-8 w-8 mr-3 text-primary" />}
              {category === 'Automation & Integration' && <Zap className="h-8 w-8 mr-3 text-primary" />}
              {category === 'Reputation Management' && <Star className="h-8 w-8 mr-3 text-primary" />}
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                {category}
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {isLoading
                ? Array.from({ length: allPartners.filter(p => p.category === category).length }).map((_, i) => <SkeletonCard key={i} />)
                : allPartners
                    .filter((partner) => partner.category === category)
                    .map((partner) => (
                      <PartnerCard key={partner.name} partner={partner} />
                    ))}
            </div>
          </section>
        ))}

        <section className="text-center mt-20">
            <h2 className="text-3xl font-semibold mb-6 text-gray-900 dark:text-white">And Many More...</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">We are constantly expanding our network to include the best and brightest in the industry.</p>
            <div className="flex justify-center items-center space-x-8">
                <a href="https://www.ontoplist.com/best-seo-companies/" target="_blank" className="inline-block transition-transform hover:scale-105">
                    <img src="https://www.ontoplist.com/images/ontoplist31.png?id=68b2a6fa69084" alt="Best SEO Companies - OnToplist.com" className="rounded-lg shadow-md" />
                </a>
            </div>
        </section>

        <section className="mt-16">
            {isLoading ? <SkeletonList /> : (
                <div className="text-center">
                    <a href='https://www.seolist.org/' className="text-blue-600 hover:underline text-lg">
                        SEO List
                    </a>
                </div>
            )}
        </section>

      </div>
    </div>
  );
}