import Link from 'next/link';
import { ChevronRight, TrendingUp, ShieldCheck, Lightbulb, Users } from 'lucide-react';

export const WhyChooseThriveSection = () => {
  const reasons = [
    { title: "We Drive Real Results", icon: TrendingUp, description: "Why waste time with an SEO company that can’t deliver on their promises? Stop throwing away your hard-earned money on a strategy that isn’t converting." },
    { title: "We Are Honest & Ethical", icon: ShieldCheck, description: "At Thrive, we believe in honesty, integrity, and respecting our clients. We don’t believe in “selling” a service that you don’t need or applying a one-size-fits-all approach to each client." },
    { title: "We Know Digital Marketing", icon: Lightbulb, description: "Working with a digital marketing agency that actually knows digital marketing seems obvious, but unfortunately, many firms fail to deliver positive results." },
    { title: "We Put Customers First", icon: Users, description: "Maintaining a customer-centric focus is a priority for many marketing agencies, however, few actually follow through. At Thrive, we are different." },
  ];
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">Why Choose Trac As Your SEO Agency?</h2>
        <p className="text-center text-gray-600 mb-6 max-w-3xl mx-auto">
          We’ve been providing a wide range of search engine related services to our clients since 2005.
        </p>
        <p className="text-center text-gray-600 mb-6 max-w-3xl mx-auto">
          The SEO services we provide involve crafting custom strategies for our clients based on their needs and goals. Our team is made up of award-winning marketers, designers, and developers, and we know what it takes to get real results online. We also keep the focus on the metrics that mean the most, like leads and revenue generated. We know that hitting these goals is what moves businesses forward, and we believe that our clients’ success is the best measure of our own performance.
        </p>
        <p className="text-center text-gray-600 font-semibold mb-12 max-w-3xl mx-auto">
          Meet our team of SEO experts.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {reasons.map((reason, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-md text-center">
              <div className="bg-yellow-400 inline-block p-3 rounded-full mb-4">
                <reason.icon className="w-8 h-8 text-gray-800" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{reason.title}</h3>
              <p className="text-sm text-gray-600">{reason.description}</p>
              <Link href="#" className="text-sm font-semibold text-orange-500 hover:text-orange-600 mt-4 inline-block">Read More <ChevronRight className="inline w-4 h-4" /></Link>
            </div>
          ))}
        </div>
        <div className="text-center">
          <button className="bg-orange-500 text-white font-semibold py-3 px-8 rounded-md hover:bg-orange-600 transition-colors text-lg">
            SPEAK WITH AN SEO EXPERT CONSULTANT
          </button>
        </div>
      </div>
    </section>
  );
};