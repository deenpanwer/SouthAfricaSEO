'use client';

import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Globe, BarChart2, Search, Zap } from 'lucide-react';
import { useState, useEffect } from 'react';

const metadata: Metadata = {
  title: 'Our Esteemed Partners in Digital Excellence',
  description: 'Collaborating with the best in the industry to deliver unparalleled results. Explore our network of technology and marketing partners.',
  robots: {
    index: true,
    follow: true,
  },
};

interface Partner {
  name: string;
  description: string;
  imageUrl: string;
  websiteUrl: string;
  category: 'SEO & Analytics' | 'Content & Marketing' | 'Infrastructure & Platforms';
}

const seoLeaders: Partner[] = [
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
    name: 'Vercel',
    description: 'A platform for frontend frameworks and static sites, built to integrate with your headless content, commerce, or database.',
    imageUrl: 'https://cdn.worldvectorlogo.com/logos/vercel.svg',
    websiteUrl: 'https://vercel.com/',
    category: 'Infrastructure & Platforms',
  },
  {
    name: 'HubSpot',
    description: 'A full platform of marketing, sales, customer service, and CRM software.',
    imageUrl: 'https://cdn.worldvectorlogo.com/logos/hubspot.svg',
    websiteUrl: 'https://www.hubspot.com/',
    category: 'Content & Marketing',
  },
];

const PartnerCard = ({ partner }: { partner: Partner }) => (
  <div className="bg-white dark:bg-gray-800/50 rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl ring-1 ring-gray-200 dark:ring-gray-700">
    <Link href={partner.websiteUrl} target="_blank" rel="noopener noreferrer" className="flex flex-col h-full">
      <div className="relative h-40 w-full bg-gray-50 dark:bg-gray-700/30 flex items-center justify-center p-4">
        <Image
          src={partner.imageUrl}
          alt={`${partner.name} logo`}
          width={150}
          height={60}
          objectFit="contain"
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
  const categories = ['SEO & Analytics', 'Content & Marketing', 'Infrastructure & Platforms'];

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500); // Simulate a 1.5 second loading time
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
              {category === 'Infrastructure & Platforms' && <Zap className="h-8 w-8 mr-3 text-primary" />}
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">{category}</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {isLoading
                ? Array.from({ length: seoLeaders.filter(p => p.category === category).length || 2 }).map((_, i) => <SkeletonCard key={i} />)
                : seoLeaders
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