import Link from 'next/link';
import { Metadata } from 'next';
import { CITIES_DATA } from '@/lib/cityConstants.tsx';
import { getAllBlogPosts } from '@/lib/blogService';
import { Breadcrumb } from '@/components/layout/Breadcrumb';

// Define metadata for the sitemap page
export const metadata: Metadata = {
    title: 'Website Sitemap | TRAC',
    description: 'Navigate our website easily with this comprehensive sitemap.',
    robots: 'noindex, follow', // Add this line to prevent indexing
};

export default async function HumanReadableSitemap() {
    const blogPosts = await getAllBlogPosts();
    // Define your static pages (can be the same as in sitemap.ts)
    const staticPages = [
        { url: '/', title: 'Home' },
        { url: '/about', title: 'About Us' },
        { url: '/pricing', title: 'Pricing' }, // Assuming /pricing is correct based on sitemap.ts
        { url: '/case-studies', title: 'Case Studies' },
        { url: '/blog', title: 'Blog' },
        { url: '/contact', title: 'Contact Us' },
        { url: '/privacy-policy', title: 'Privacy Policy' },
        { url: '/terms-of-service', title: 'Terms of Service' },
        // Add other static pages here
    ];

    const breadcrumbItems = [
        { name: 'TRAC', href: '/' },
        { name: 'Sitemap', href: '/site-map' },
    ];

    return (
        <div className="container mx-auto px-4 py-10 text-gray-800">
            <Breadcrumb items={breadcrumbItems} />

            <h1 className="text-4xl font-bold text-gray-800 mb-10">Website Sitemap</h1>

            <section className="bg-gray-50 rounded-lg p-6 shadow-sm mb-8">
                <h2 className="text-2xl font-semibold text-gray-700 mb-6 pb-4 border-b border-gray-200">Static Pages</h2>
                <ul className="space-y-3">
                    {staticPages.map((page) => (
                        <li key={page.url}>
                            <Link href={page.url} className="block text-blue-600 hover:text-blue-800 transition-colors text-lg">
                                {page.title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </section>

            <section className="bg-gray-50 rounded-lg p-6 shadow-sm mb-8">
                <h2 className="text-2xl font-semibold text-gray-700 mb-6 pb-4 border-b border-gray-200">City Pages ({CITIES_DATA.length})</h2>
                <ol className="space-y-3 list-decimal pl-5">
                    {CITIES_DATA.map((city, index) => (
                        <li key={city.slug} className="text-lg">
                            {/* Link to the canonical URL format */}
                            <Link href={`/${city.slug}-seo-service-agency`} className="block text-blue-600 hover:text-blue-800 transition-colors text-lg">
                                {city.cityName}
                            </Link>
                        </li>
                    ))}
                </ol>
            </section>

            <section className="bg-gray-50 rounded-lg p-6 shadow-sm">
                <h2 className="text-2xl font-semibold text-gray-700 mb-6 pb-4 border-b border-gray-200">Blog Posts ({blogPosts.length})</h2>
                {/* Sort by date in descending order */}
                <ol className="space-y-3 list-decimal pl-5">
                    {blogPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).map((post, index) => (

                        <li key={post.slug}>
                            <Link href={`/blog/${post.slug}`} className="block text-blue-600 hover:text-blue-800 transition-colors text-lg">
                                {post.title}
                            </Link>
                        </li>
                    ))}
                </ol>
                </section>
        </div>
    );
}
