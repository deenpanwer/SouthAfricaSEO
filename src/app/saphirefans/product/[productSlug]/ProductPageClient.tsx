
"use client";

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { useCart } from '../../context/CartContext';
import { useState, useEffect } from 'react';
import { toast } from '@/hooks/use-toast';
import { ShoppingCart, CheckCircle, Home, ChevronRight, PackageCheck, Truck, Minus, Plus } from 'lucide-react';
import Link from 'next/link';
import type { SaphireProduct } from '../../types';
import { getCategoryBySlug } from '../../lib/data';

interface ProductPageClientProps {
  product: SaphireProduct;
}

export function ProductPageClient({ product }: ProductPageClientProps) {
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(product.imageUrl);

  const category = getCategoryBySlug(product.categorySlug);

  const handleAddToCart = () => {
    addToCart(product, quantity);
    toast({
      title: "Added to Cart!",
      description: `${quantity} x ${product.name} added to your cart.`,
      action: (
        <Link href="/saphirefans/cart" legacyBehavior passHref>
          <Button variant="outline" size="sm" className="ml-auto">
              View Cart
          </Button>
        </Link>
      ),
    });
  };
  
  const allImages = [product.imageUrl, ...(product.images || [])].filter(Boolean) as string[];

  useEffect(() => {
    setSelectedImage(product.imageUrl);
    setQuantity(1); // Reset quantity when product changes
  }, [product]);

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": product.name,
    "image": product.imageUrl, // Main image
    "description": product.longDescription,
    "sku": product.sku || product.id, // Fallback to id if sku is not present
    "brand": {
      "@type": "Brand",
      "name": "SaphireFans"
    },
    "offers": {
      "@type": "Offer",
      "url": `https://saphirefans.traconomics.com/product/${product.slug}`,
      "priceCurrency": "PKR",
      "price": product.price.toString(),
      "availability": product.availability === 'In Stock' 
                      ? 'https://schema.org/InStock' 
                      : product.availability === 'Out of Stock' 
                      ? 'https://schema.org/OutOfStock' 
                      : product.availability === 'Pre-Order'
                      ? 'https://schema.org/PreOrder'
                      : 'https://schema.org/InStock', // Default to InStock if undefined
      "itemCondition": "https://schema.org/NewCondition"
    },
    // You can add reviews or aggregateRating if you have that data
    // "aggregateRating": {
    //   "@type": "AggregateRating",
    //   "ratingValue": "4.5",
    //   "reviewCount": "120"
    // },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <div className="space-y-10 py-8">
        <nav className="text-sm text-slate-600" aria-label="Breadcrumb">
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
          <div className="space-y-4">
              <div className="relative aspect-square bg-slate-200 rounded-lg shadow-md overflow-hidden">
                <Image
                  src={selectedImage}
                  alt={product.name}
                  layout="fill"
                  objectFit="contain"
                  className="p-4 transition-opacity duration-300"
                  key={selectedImage} 
                  data-ai-hint={product.dataAiHint}
                  priority
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

          <div className="space-y-6">
            <h1 className="text-3xl lg:text-4xl font-bold text-slate-800">{product.name}</h1>
            <p className="text-2xl font-semibold text-sky-700">PKR {product.price.toLocaleString()}</p>
            
            {product.availability && (
              <div className={`flex items-center text-sm font-medium px-3 py-1 rounded-full w-fit ${product.availability === 'In Stock' ? 'bg-green-100 text-green-700' : product.availability === 'Pre-Order' ? 'bg-yellow-100 text-yellow-700' : 'bg-red-100 text-red-700'}`}>
                {product.availability === 'In Stock' ? <PackageCheck className="h-4 w-4 mr-1.5" /> : product.availability === 'Pre-Order' ? <ClockIcon className="h-4 w-4 mr-1.5" /> : <Truck className="h-4 w-4 mr-1.5"/> }
                {product.availability}
              </div>
            )}

            <p className="text-slate-600 leading-relaxed">{product.shortDescription}</p>

            <div className="flex items-center space-x-4">
              <div className="flex items-center border border-slate-300 rounded-md">
                <Button variant="ghost" size="icon" onClick={() => setQuantity(Math.max(1, quantity - 1))} className="h-10 w-10 text-slate-600 hover:bg-slate-200 rounded-r-none"> <Minus className="h-4 w-4"/> </Button>
                <input
                  type="number"
                  value={quantity}
                  onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                  className="h-10 w-16 text-center border-y-0 border-x border-slate-300 focus:ring-sky-500 focus:border-sky-500 text-sm"
                  min="1"
                />
                <Button variant="ghost" size="icon" onClick={() => setQuantity(quantity + 1)} className="h-10 w-10 text-slate-600 hover:bg-slate-200 rounded-l-none"> <Plus className="h-4 w-4"/> </Button>
              </div>
              <Button 
                size="lg" 
                onClick={handleAddToCart} 
                className="bg-sky-600 hover:bg-sky-700 text-white flex-grow sm:flex-grow-0"
                disabled={product.availability === 'Out of Stock'}
              >
                <ShoppingCart className="mr-2 h-5 w-5" /> 
                {product.availability === 'Pre-Order' ? 'Pre-Order Now' : product.availability === 'Out of Stock' ? 'Out of Stock' : 'Add to Cart'}
              </Button>
            </div>
            
            {product.sku && <p className="text-xs text-slate-500">SKU: {product.sku}</p>}
          </div>
        </div>

        <div className="pt-8 border-t border-slate-300">
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
    </>
  );
}

// Simple ClockIcon for Pre-Order status
const ClockIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);
