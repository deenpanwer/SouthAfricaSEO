import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Highlight } from '@/components/ui/highlight';
import { PlatformIconGrid } from '@/components/services/amazon-marketing/platform-icon-grid';
import { AmazonProcessVisual } from '@/components/services/amazon-marketing/amazon-process-visual';
import { CaseStudyCard } from '@/components/services/amazon-marketing/case-study-card';
import { WhyChooseUs } from '@/components/services/amazon-marketing/why-choose-us';
import { CallToAction } from '@/components/services/amazon-marketing/call-to-action';
import { FeatureCard } from '@/components/ui/feature-card'; // New import
import { ServiceCard } from '@/components/ui/service-card'; // New import
import { AlertTriangle, DollarSign, TrendingUp, Search, BarChart2, Store } from 'lucide-react'; // Icons for FeatureCard and ServiceCard
import { Breadcrumb } from '@/components/layout/Breadcrumb';


export const metadata: Metadata = {
  title: 'New Amazon Marketing Services',
  description: 'Comprehensive Amazon marketing services to boost your sales and presence.',
};

export default function NewAmazonMarketingPage() {
  const dummyCaseStudies = [
    {
      clientName: "Client A",
      clientAvatar: "/path/to/clientA-avatar.jpg", // Placeholder
      industry: "E-commerce",
      quote: "TRAC's Amazon strategy was a game-changer. They didn't just increase our sales; they gave us a dominant position in our category. Their systematic approach is unmatched.",
      results: [
        { label: "Sales Growth", value: "200%" },
        { label: "ACOS", value: "15%" },
      ],
    },
    {
      clientName: "Client B",
      clientAvatar: "/path/to/clientB-avatar.jpg", // Placeholder
      industry: "Retail",
      quote: "We saw incredible results with TRAC. Our organic rankings soared, and our traffic increased significantly. Highly recommend their Amazon expertise.",
      results: [
        { label: "Keyword Rank", value: "#3" },
        { label: "Organic Traffic", value: "+150%" },
      ],
    },
  ];

  const dummyFeatures = [
    {
      title: "Low Visibility",
      description: "Your products are lost in the Amazon search results, leading to missed sales opportunities.",
      icon: <AlertTriangle className="h-8 w-8 text-red-500" />,
    },
    {
      title: "Wasted Ad Spend",
      description: "Ineffective PPC campaigns are draining your budget without generating profitable returns.",
      icon: <DollarSign className="h-8 w-8 text-green-500" />,
    },
    {
      title: "Stagnant Growth",
      description: "Your sales have plateaued, and you're struggling to scale your Amazon business.",
      icon: <TrendingUp className="h-8 w-8 text-blue-500" />,
    },
  ];

  const dummyServices = [
    {
      title: "Amazon SEO & Listing Optimization",
      description: "Rank higher and convert more with expert keyword research, compelling copy, and A+ Content.",
      icon: <Search className="h-8 w-8 text-orange-500" />,
    },
    {
      title: "Amazon PPC Management",
      description: "Maximize your ROI with data-driven Amazon PPC campaigns that drive profitable sales.",
      icon: <BarChart2 className="h-8 w-8 text-orange-500" />,
    },
    {
      title: "Amazon Storefront & Brand Registry",
      description: "Build a powerful brand presence with a custom Amazon Storefront and Brand Registry support.",
      icon: <Store className="h-8 w-8 text-orange-500" />,
    },
  ];

  const breadcrumbItems = [
    { name: 'TRAC', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Amazon Marketing', href: '/services/amazon-marketing' },
  ];

  return (
    <main>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <Breadcrumb items={breadcrumbItems} />
      </div>
      {/* Component 1: Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center text-center bg-gradient-to-r from-orange-500 to-yellow-600 overflow-hidden">
        <Image
          src="/dallas-local-leads-seo.png" // Placeholder image
          alt="Amazon Marketing Background"
          fill={true}
          objectFit="cover"
          className="absolute z-0 opacity-30"
        />
        <div className="absolute inset-0 bg-black/60 z-10" />
        <div className="relative z-20 p-4 text-white max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold">
            <Highlight text="Dominate Amazon: Your Partner for E-commerce Growth" words={["Dominate Amazon", "E-commerce Growth"]} />
          </h1>
          <p className="mt-4 text-lg sm:text-xl">
            We help brands like yours unlock their full potential on Amazon, driving sales, increasing visibility, and maximizing profitability.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Button size="lg" asChild>
              <Link href="/contact?service=Amazon">Get a Free Amazon Audit</Link>
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-black">
              <Link href="#services">Explore Our Services</Link>
            </Button>
          </div>
          <PlatformIconGrid
            icons={[
              { src: "https://tse4.mm.bing.net/th/id/OIP.fQkwX1ZDIGJdxn8gBQ43GwHaE8?pid=Api&P=0&h=220", alt: "Amazon" }, // Placeholder, need actual logos
              { src: "https://tse1.mm.bing.net/th/id/OIP.u_dVishNAQYCWvKO1ox7GQHaHa?pid=Api&P=0&h=220", alt: "Walmart" },
              { src: "https://tse1.mm.bing.net/th/id/OIP.i3lQOJ82UU61iGfJMPcf0QHaHa?pid=Api&P=0&h=220", alt: "eBay" },
            ]}
          />
        </div>
      </section>

      {/* Component 2: Amazon Seller Pain Points */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-8">Amazon Seller Pain Points</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {dummyFeatures.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>
      </section>

      {/* New Component: Our Amazon Services */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-8">Our Amazon Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {dummyServices.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Component 3: Our Amazon Process */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AmazonProcessVisual />
        </div>
      </section>

      {/* Component 4: Amazon Case Studies & Results */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-8">Amazon Case Studies & Results</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {dummyCaseStudies.map((study, index) => (
              <CaseStudyCard key={index} {...study} />
            ))}
          </div>
        </div>
      </section>

      {/* Component 5: Why Choose Us */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <WhyChooseUs />
        </div>
      </section>

      {/* Component 6: Call to Action */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <CallToAction />
        </div>
      </section>

      {/* Placeholder for other components */}
      <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center my-12">More Amazon Marketing Components Coming Soon...</h2>
      </div>
    </main>
  );
}