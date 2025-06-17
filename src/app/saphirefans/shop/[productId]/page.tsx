
import { Metadata } from 'next';

type ProductPageProps = {
  params: { productId: string };
};

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  return {
    title: `Product ${params.productId} | SaphireFans`,
    description: `Details for product ${params.productId} on SaphireFans.`,
  };
}

// For testing, we'll assume any string can be a productId.
// In a real app, you might fetch valid product IDs here for generateStaticParams.
// export async function generateStaticParams() {
//   // Example: const products = await fetch('/api/products').then(res => res.json());
//   // return products.map(product => ({ productId: product.id }));
//   return [{ productId: 'test-product-1' }, { productId: 'another-item' }];
// }

export default function ProductPage({ params }: ProductPageProps) {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Product Details</h1>
      <p className="text-xl">You are viewing product ID: <span className="font-semibold text-blue-600">{params.productId}</span></p>
      <div className="mt-8 p-6 bg-gray-100 rounded-lg">
        <h2 className="text-2xl font-semibold mb-2">Placeholder Product Information</h2>
        <p>This is where the detailed description, images, price, and add-to-cart button for product "{params.productId}" would go.</p>
        <p className="mt-2">For now, this page confirms that dynamic routing for `saphirefans.traconomics.com/shop/[productId]` is working!</p>
      </div>
    </div>
  );
}
