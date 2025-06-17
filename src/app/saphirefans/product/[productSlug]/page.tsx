
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getProductBySlug, saphireProducts, getCategoryBySlug } from '../../lib/data';
import { ProductPageClient } from './ProductPageClient'; // Import the new client component
import type { SaphireProduct } from '../../types';

interface ProductPageProps {
  params: { productSlug: string };
}

export async function generateStaticParams() {
  return saphireProducts.map((product) => ({
    productSlug: product.slug,
  }));
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const product = getProductBySlug(params.productSlug);
  if (!product) {
    return {
      title: 'Product Not Found | SaphireFans Pakistan',
      description: 'The industrial fan you are looking for could not be found.',
    };
  }
  const category = getCategoryBySlug(product.categorySlug);
  const categoryName = category ? category.name : 'Industrial Fans';

  return {
    title: `${product.name} | ${categoryName} | SaphireFans Pakistan`,
    description: product.shortDescription + ` Buy ${product.name}, a high-quality industrial fan for reliable performance in Pakistan. Part of our ${categoryName} range.`,
    keywords: [product.name, categoryName, product.categorySlug.replace('-', ' '), 'industrial fan Pakistan', 'SaphireFans'],
    alternates: {
      canonical: `/saphirefans/product/${product.slug}`,
    }
  };
}

export default function ProductPage({ params }: ProductPageProps) {
  const product = getProductBySlug(params.productSlug);

  if (!product) {
    notFound();
  }

  // Pass the product data to the Client Component
  return <ProductPageClient product={product} />;
}
