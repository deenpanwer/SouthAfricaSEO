import Image from "next/image";
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { BLOG_POSTS } from '@/lib/constants';

export const TracGrowthInsiderSection = ({ numberOfBlogsToShow = 3 }: { numberOfBlogsToShow?: number }) => {
  const displayedBlogs = BLOG_POSTS.slice(0, numberOfBlogsToShow); // This line slices the array

  return (
    <section className="py-16 lg:py-24 bg-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">Trac Growth Insider</h2>
        <p className="text-center text-gray-600 mb-12 max-w-xl mx-auto">
          Discover actionable SEO, web design and digital marketing tips by our leading agency.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {displayedBlogs.map((article, index) => ( // Use displayedBlogs here
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-2 hover:text-orange-500 transition-colors">
                  <Link href={`/blog/${article.slug}`}>{article.title}</Link>
                </h3>
                <p className="text-xs text-gray-500 mb-2">{article.date}</p>
                <p className="text-sm text-gray-600 mb-4">{article.excerpt}</p>
                <Link href={`/blog/${article.slug}`} className="text-sm font-semibold text-orange-500 hover:text-orange-600">
                  Read More <ChevronRight className="inline w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
