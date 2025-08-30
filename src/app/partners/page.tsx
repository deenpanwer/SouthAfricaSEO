
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: true,
  },
};

// Placeholder for a skeleton loading component
const SkeletonCard = () => (
  <div className="border border-gray-200 rounded-lg p-4 shadow-sm animate-pulse">
    <div className="w-full h-32 bg-gray-300 rounded-md mb-4"></div>
    <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
    <div className="h-4 bg-gray-300 rounded w-1/2"></div>
  </div>
);

// Placeholder for partner data
const partnerCards = [
  {
    name: 'Google Ads',
    description: 'Leading platform for online advertising.',
    imageUrl: 'https://tse3.mm.bing.net/th/id/OIP.e1-pp0CgXwPGV43U95Aq4wHaHa?pid=Api&P=0&h=220', // Placeholder image
    alt: 'Google Ads logo',
  },
  {
    name: 'SEO Tools',
    description: 'Tools for search engine optimization.',
    imageUrl: 'https://tse2.mm.bing.net/th/id/OIP.tsqiFgk-jto5VIs_qt_QcAHaEK?pid=Api&P=0&h=220', // Placeholder image
    alt: 'SEO icon',
  },
  {
    name: 'PPC Platforms',
    description: 'Platforms for pay-per-click advertising.',
    imageUrl: 'https://tse1.mm.bing.net/th/id/OIP.7JyWgrn80hf8qaiaqsfK-wHaFj?pid=Api&P=0&h=220', // Placeholder image
    alt: 'PPC icon',
  },
  {
    name: 'Marketing Giants',
    description: 'Major players in the marketing industry.',
    imageUrl: 'https://tse1.mm.bing.net/th/id/OIP.WLMfjqFEibPi7_evlh7ZtAHaE3?pid=Api&P=0&h=220', // Placeholder image
    alt: 'Marketing icon',
  },
];

const partnerNames = [
  'SEO List',
  'Digital Marketing Pro',
  'Content Strategy Hub',
  'Analytics Solutions',
  'Social Media Experts',
];

export default function PartnersPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">Our Partners</h1>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-6">Featured Partners</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Skeleton loading example */}
          {false ? ( // Set to true to see skeleton loading
            <>
              <SkeletonCard />
              <SkeletonCard />
              <SkeletonCard />
            </>
          ) : (
            partnerCards.map((partner, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4 shadow-md">
                <div className="relative w-full h-32 mb-4">
                  <Image
                    src={partner.imageUrl}
                    alt={partner.alt}
                    layout="fill"
                    objectFit="contain"
                    className="rounded-md"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">{partner.name}</h3>
                <p className="text-gray-600">{partner.description}</p>
              </div>
            ))
          )}
        </div>
        <p className="text-sm text-gray-500 mt-4">
          Note: Placeholder images are used above. Please replace them with actual partner logos.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-semibold mb-6">Partner List</h2>
        <ul className="list-disc list-inside space-y-2">
          {partnerNames.map((name, index) => (
            <li key={index} className="text-lg text-gray-700">
              {name === 'SEO List' ? (
                <a href="https://www.seolist.org/" rel="nofollow" className="text-blue-600 hover:underline">
                  SEO List
                </a>
              ) : (
                name
              )}
            </li>
          ))}
        </ul>
        <a href="https://www.ontoplist.com/best-seo-companies/" target="_blank"><img src="https://www.ontoplist.com/images/ontoplist51.png?id=68b2a3b1ac288" alt="Best SEO Companies - OnToplist.com" border="0" /></a>
      </section>
    </div>
  );
}
