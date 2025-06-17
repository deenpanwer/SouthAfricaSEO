
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Welcome to SaphireFans!',
  description: 'Your new e-commerce experience on SaphireFans.',
};

export default function SaphireFansHomePage() {
  return (
    <div className="container mx-auto p-8 text-center">
      <h1 className="text-4xl font-bold text-blue-700 mb-6">Welcome to SaphireFans!</h1>
      <p className="text-lg text-gray-700 mb-4">
        This is the home page for the SaphireFans e-commerce subdomain.
      </p>
      <p className="text-md text-gray-600">
        We're excited to build out this shopping experience. Stay tuned for amazing products!
      </p>
      <div className="mt-10">
        <img 
          src="https://placehold.co/600x300.png" 
          alt="E-commerce placeholder" 
          data-ai-hint="store shopping cart" 
          className="mx-auto rounded-lg shadow-md"
        />
      </div>
    </div>
  );
}
