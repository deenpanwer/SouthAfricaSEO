
import type { Metadata } from 'next';
import Image from 'next/image';
import { Wind, Users, Target } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About SaphireFans Pakistan',
  description: 'Learn about SaphireFans Pakistan, our mission to provide high-quality industrial fans, and our commitment to Pakistani industries.',
  keywords: ['about saphirefans', 'industrial fans pakistan', 'saphirefans mission', 'quality fans'],
  alternates: {
    canonical: '/saphirefans/about',
  }
};

export default function AboutPage() {
  return (
    <div className="space-y-12 py-10">
      <section className="text-center">
        <Wind className="h-16 w-16 text-sky-600 mx-auto mb-4" />
        <h1 className="text-4xl md:text-5xl font-bold text-slate-700 mb-4">About SaphireFans Pakistan</h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          Your trusted partner for industrial and commercial ventilation solutions across Pakistan.
        </p>
      </section>

      <section className="bg-white p-8 rounded-lg shadow-md">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-semibold text-sky-700 mb-3">Our Mission</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              At SaphireFans Pakistan, our mission is to empower Pakistani industries with durable, efficient, and high-performance industrial fans. We aim to contribute to safer, more productive, and comfortable working environments through reliable ventilation technology.
            </p>
            <p className="text-slate-600 leading-relaxed">
              We are committed to sourcing and providing top-quality axial fans, centrifugal blowers, exhaust systems, and heavy-duty pedestal fans tailored to the specific needs of factories, warehouses, commercial buildings, and agricultural sectors in Pakistan.
            </p>
          </div>
          <div className="relative aspect-video rounded-lg overflow-hidden">
            <Image
              src="https://placehold.co/600x400.png?text=Industrial+Fans+in+Pakistan"
              alt="SaphireFans - Industrial Fans in Pakistan"
              layout="fill"
              objectFit="cover"
              data-ai-hint="industrial fans factory"
            />
          </div>
        </div>
      </section>

      <section className="bg-sky-50 p-8 rounded-lg shadow-md">
        <h2 className="text-3xl font-semibold text-sky-700 mb-6 text-center">Why Choose SaphireFans Pakistan?</h2>
        <div className="grid md:grid-cols-3 gap-8 text-slate-700">
          <div className="text-center">
            <Target className="h-12 w-12 text-sky-600 mx-auto mb-3" />
            <h3 className="text-xl font-semibold mb-2">Quality & Durability</h3>
            <p className="text-sm">Our fans are built to withstand demanding industrial conditions, ensuring long-lasting performance and reliability for Pakistani businesses.</p>
          </div>
          <div className="text-center">
            <Users className="h-12 w-12 text-sky-600 mx-auto mb-3" />
            <h3 className="text-xl font-semibold mb-2">Expert Support</h3>
            <p className="text-sm">Our knowledgeable team in Pakistan is ready to assist you in selecting the right ventilation solutions for your specific application and industry needs.</p>
          </div>
          <div className="text-center">
            <Wind className="h-12 w-12 text-sky-600 mx-auto mb-3" />
            <h3 className="text-xl font-semibold mb-2">Nationwide Availability</h3>
            <p className="text-sm">We strive to make our high-quality industrial fans accessible across Pakistan, with efficient delivery and customer service.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
