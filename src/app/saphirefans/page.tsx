
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { saphireCategories, saphireProducts } from './lib/data';
import { CategoryCard } from './components/CategoryCard';
import { ProductCard } from './components/ProductCard';
import { ChevronRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'SaphireFans Pakistan - Industrial Fans Supplier',
  description: 'Leading supplier of industrial axial fans, centrifugal blowers, exhaust fans, and heavy-duty pedestal fans in Pakistan. Quality ventilation solutions for your business.',
};

export default function SaphireFansHomePage() {
  const featuredProducts = saphireProducts.slice(0, 4); // Show first 4 products as featured

  return (
    <div className="space-y-12 md:space-y-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-sky-600 to-sky-800 text-white py-16 md:py-24 rounded-lg shadow-xl">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            Industrial Fans Pakistan
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-sky-100">
            Reliable Ventilation Solutions for Factories, Warehouses & Commercial Spaces Across Pakistan.
          </p>
          <Link href="/saphirefans/category/axial-flow-fans" passHref legacyBehavior>
            <Button size="lg" className="bg-yellow-400 hover:bg-yellow-500 text-sky-800 font-semibold px-8 py-3 text-lg">
              Explore Our Fans <ChevronRight className="ml-2 h-5 w-5"/>
            </Button>
          </Link>
        </div>
      </section>

      {/* Categories Section */}
      <section>
        <h2 className="text-3xl font-bold text-center text-slate-700 mb-8">Product Categories</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {saphireCategories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </section>

      {/* Featured Products Section */}
      <section>
        <h2 className="text-3xl font-bold text-center text-slate-700 mb-8">Featured Industrial Fans</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div className="text-center mt-12">
           <Link href="/saphirefans/category/axial-flow-fans" passHref legacyBehavior>
            <Button variant="outline" size="lg" className="border-sky-600 text-sky-600 hover:bg-sky-50 hover:text-sky-700">
                View All Products
            </Button>
          </Link>
        </div>
      </section>

      {/* Why Choose Us Section (Pakistan Focused) */}
      <section className="py-12 bg-slate-200 rounded-lg shadow-lg">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-slate-700 mb-8">Why SaphireFans Pakistan?</h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="text-xl font-semibold text-sky-700 mb-2">Durability for Pakistan Conditions</h3>
              <p className="text-slate-600">Our fans are built to withstand the demanding industrial environments and climate of Pakistan.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-sky-700 mb-2">Nationwide Delivery</h3>
              <p className="text-slate-600">Efficient delivery network covering major cities like Karachi, Lahore, Islamabad, and Faisalabad.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-sky-700 mb-2">Expert Support</h3>
              <p className="text-slate-600">Knowledgeable team ready to assist with selection and technical queries for your Pakistani business.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
