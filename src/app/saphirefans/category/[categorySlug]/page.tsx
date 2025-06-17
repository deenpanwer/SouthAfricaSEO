
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { saphireCategories, getProductsByCategory, getCategoryBySlug } from '../../lib/data';
import { ProductCard } from '../../components/ProductCard';
import Link from 'next/link';
import { Home, ChevronRight } from 'lucide-react';

interface CategoryPageProps {
  params: { categorySlug: string };
}

export async function generateStaticParams() {
  return saphireCategories.map((category) => ({
    categorySlug: category.slug,
  }));
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const category = getCategoryBySlug(params.categorySlug);
  if (!category) {
    return {
      title: 'Category Not Found | SaphireFans Pakistan',
      description: 'The product category you are looking for could not be found.',
    };
  }
  return {
    title: `${category.name} | SaphireFans Pakistan`,
    description: category.description || `Browse our range of ${category.name.toLowerCase()} for industrial and commercial use in Pakistan.`,
    keywords: [category.name, 'industrial fans Pakistan', category.slug.replace('-', ' '), 'SaphireFans'],
    alternates: {
      canonical: `/saphirefans/category/${category.slug}`,
    }
  };
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const category = getCategoryBySlug(params.categorySlug);
  if (!category) {
    notFound();
  }
  const products = getProductsByCategory(params.categorySlug);

  return (
    <div className="space-y-8">
      <nav className="text-sm text-slate-600 mb-6" aria-label="Breadcrumb">
        <ol className="list-none p-0 inline-flex items-center space-x-2">
          <li>
            <Link href="/saphirefans" className="hover:text-sky-600 flex items-center">
              <Home className="h-4 w-4 mr-1.5" /> Home
            </Link>
          </li>
          <li><ChevronRight className="h-4 w-4 text-slate-400" /></li>
          <li className="font-medium text-sky-700" aria-current="page">
            {category.name}
          </li>
        </ol>
      </nav>

      <header className="pb-4 border-b border-slate-300">
        <h1 className="text-3xl md:text-4xl font-bold text-slate-700 mb-2">{category.name}</h1>
        {category.description && <p className="text-slate-600 max-w-2xl">{category.description}</p>}
      </header>

      {products.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-xl text-slate-500">No products found in this category yet.</p>
          <p className="mt-2 text-slate-500">Please check back later or explore our other <Link href="/saphirefans" className="text-sky-600 hover:underline">categories</Link>.</p>
        </div>
      )}
    </div>
  );
}
