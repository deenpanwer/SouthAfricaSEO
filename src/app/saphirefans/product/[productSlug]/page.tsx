
"use client"; // For useCart and useState

import type { Metadata } from 'next'; // Still use for return type of generateMetadata
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { getProductBySlug, getCategoryBySlug, saphireProducts } from '../../lib/data';
import { Button } from '@/components/ui/button';
import { useCart } from '../../context/CartContext';
import { useState } from 'react';
import { toast } from '@/hooks/use-toast';
import { ShoppingCart, CheckCircle, Home, ChevronRight, PackageCheck, Truck } from 'lucide-react';
import Link from 'next/link';

interface ProductPageProps {
  params: { productSlug: string };
}

// This function now needs to be client-side if we move away from `generateMetadata`
// or we keep `generateMetadata` and accept the client component nature for the rest.
// For simplicity, we'll assume generateMetadata is still desired for static export / initial load.
export async function generateStaticParams() {
  return saphireProducts.map((product) => ({
    productSlug: product.slug,
  }));
}

// `generateMetadata` must be an async Server Component export.
// If the page is "use client", this needs careful handling or separation.
// For this example, we'll assume the page itself is a client component, but `generateMetadata` can still run at build time.
export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const product = getProductBySlug(params.productSlug);
  if (!product) {
    return {
      title: 'Product Not Found | SaphireFans Pakistan',
      description: 'The industrial fan you are looking for could not be found.',
    };
  }
  return {
    title: `${product.name} | SaphireFans Pakistan`,
    description: product.shortDescription + ` Buy ${product.name} in Pakistan. High-quality industrial fan for reliable performance.`,
    keywords: [product.name, product.categorySlug.replace('-', ' '), 'industrial fan Pakistan', 'SaphireFans'],
    alternates: {
      canonical: `/saphirefans/product/${product.slug}`,
    }
  };
}


export default function ProductPage({ params }: ProductPageProps) {
  const product = getProductBySlug(params.productSlug);
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(product?.imageUrl || '');

  if (!product) {
    notFound();
  }

  const category = getCategoryBySlug(product.categorySlug);

  const handleAddToCart = () => {
    addToCart(product, quantity);
    toast({
      title: "Added to Cart!",
      description: `${quantity} x ${product.name} added to your cart.`,
      action: (
        <Link href="/saphirefans/cart">
          <Button variant="outline" size="sm">
            View Cart
          </Button>
        </Link>
      ),
    });
  };
  
  const allImages = [product.imageUrl, ...(product.images || [])].filter(Boolean) as string[];
   useEffect(() => { // Ensure selectedImage is updated if product changes
    if (product) {
      setSelectedImage(product.imageUrl);
    }
  }, [product]);


  return (
    <div className="space-y-10">
      <nav className="text-sm text-slate-600 mb-6" aria-label="Breadcrumb">
        <ol className="list-none p-0 inline-flex items-center space-x-2">
          <li><Link href="/saphirefans" className="hover:text-sky-600 flex items-center"><Home className="h-4 w-4 mr-1.5" />Home</Link></li>
          {category && (
            <>
              <li><ChevronRight className="h-4 w-4 text-slate-400" /></li>
              <li><Link href={`/saphirefans/category/${category.slug}`} className="hover:text-sky-600">{category.name}</Link></li>
            </>
          )}
          <li><ChevronRight className="h-4 w-4 text-slate-400" /></li>
          <li className="font-medium text-sky-700" aria-current="page">{product.name}</li>
        </ol>
      </nav>

      <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
        {/* Image Gallery */}
        <div className="space-y-4">
            <div className="relative aspect-square bg-slate-200 rounded-lg shadow-md overflow-hidden">
              <Image
                src={selectedImage}
                alt={product.name}
                layout="fill"
                objectFit="contain"
                className="p-4 transition-opacity duration-300"
                key={selectedImage} // For re-triggering animation on image change
                data-ai-hint={product.dataAiHint}
              />
            </div>
            {allImages.length > 1 && (
              <div className="flex space-x-2 overflow-x-auto pb-2">
                {allImages.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(img)}
                    className={`block w-20 h-20 rounded-md border-2 overflow-hidden transition-all
                                ${selectedImage === img ? 'border-sky-500 ring-2 ring-sky-500' : 'border-slate-300 hover:border-sky-400'}`}
                  >
                    <Image src={img} alt={`${product.name} thumbnail ${index + 1}`} width={80} height={80} objectFit="cover" />
                  </button>
                ))}
              </div>
            )}
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <h1 className="text-3xl lg:text-4xl font-bold text-slate-800">{product.name}</h1>
          <p className="text-2xl font-semibold text-sky-700">PKR {product.price.toLocaleString()}</p>
          
          {product.availability && (
            <div className={`flex items-center text-sm font-medium px-3 py-1 rounded-full w-fit ${product.availability === 'In Stock' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
              {product.availability === 'In Stock' ? <PackageCheck className="h-4 w-4 mr-1.5" /> : <Truck className="h-4 w-4 mr-1.5"/> }
              {product.availability}
            </div>
          )}

          <p className="text-slate-600 leading-relaxed">{product.shortDescription}</p>

          <div className="flex items-center space-x-4">
            <div className="flex items-center border border-slate-300 rounded-md">
              <Button variant="ghost" size="icon" onClick={() => setQuantity(Math.max(1, quantity - 1))} className="h-10 w-10 text-slate-600 hover:bg-slate-200 rounded-r-none"> – </Button>
              <input
                type="number"
                value={quantity}
                onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                className="h-10 w-16 text-center border-y-0 border-x border-slate-300 focus:ring-sky-500 focus:border-sky-500"
                min="1"
              />
              <Button variant="ghost" size="icon" onClick={() => setQuantity(quantity + 1)} className="h-10 w-10 text-slate-600 hover:bg-slate-200 rounded-l-none"> + </Button>
            </div>
            <Button size="lg" onClick={handleAddToCart} className="bg-sky-600 hover:bg-sky-700 text-white flex-grow sm:flex-grow-0">
              <ShoppingCart className="mr-2 h-5 w-5" /> Add to Cart
            </Button>
          </div>
          
          {product.sku && <p className="text-xs text-slate-500">SKU: {product.sku}</p>}
        </div>
      </div>

      {/* Tabs for Description, Specifications, Features */}
      <div className="pt-8 border-t border-slate-300">
        {/* Basic Tabs Implementation (can be replaced with ShadCN Tabs if preferred) */}
        {/* For simplicity, using basic sections here. ShadCN Tabs could be added later. */}
        <div className="space-y-8">
            {product.longDescription && (
                <section>
                    <h2 className="text-2xl font-semibold text-slate-700 mb-3">Product Details</h2>
                    <div className="prose prose-slate max-w-none text-slate-600" dangerouslySetInnerHTML={{ __html: product.longDescription.replace(/\n/g, '<br />') }} />
                </section>
            )}

            {product.specifications && product.specifications.length > 0 && (
                <section>
                    <h2 className="text-2xl font-semibold text-slate-700 mb-3">Specifications</h2>
                    <ul className="list-disc list-inside space-y-1 text-slate-600 pl-5">
                        {product.specifications.map(spec => (
                        <li key={spec.name}><strong>{spec.name}:</strong> {spec.value}</li>
                        ))}
                    </ul>
                </section>
            )}

            {product.features && product.features.length > 0 && (
                 <section>
                    <h2 className="text-2xl font-semibold text-slate-700 mb-3">Key Features</h2>
                    <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2 text-slate-600">
                        {product.features.map(feature => (
                        <li key={feature} className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                           <span>{feature}</span>
                        </li>
                        ))}
                    </ul>
                </section>
            )}
        </div>
      </div>
    </div>
  );
}

// Dummy useEffect to satisfy client component requirement if needed by bundler
// but not strictly necessary if generateStaticParams/generateMetadata are the only server parts.
// React.useEffect(() => {}, []);
