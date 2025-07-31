
import Link from 'next/link';
import { ChevronRight, TrendingUp, ShieldCheck, Lightbulb, Users } from 'lucide-react';
import { Button } from '../ui/button';

export const WhyChooseTracSection = () => {
  const reasons = [ 
    { title: "We Drive Real Results", icon: TrendingUp, description: "Tired of strategies that don't convert? We focus on metrics that matter: revenue, leads, and ROI. Marketing should be an investment, not an expense.", href: "/philosophy/results-driven" },
    { title: "We Are Honest & Ethical", icon: ShieldCheck, description: "We believe in transparency and integrity. We'll never sell you a service you don’t need. Our strategies are built on sustainable, white-hat practices.", href: "/philosophy/ethics" },
    { title: "We Know Digital Marketing", icon: Lightbulb, description: "Expertise isn't about chasing algorithms; it's about understanding first principles. We build strategies that last because they're based on fundamental truths.", href: "/philosophy/expertise" },
    { title: "We Put Customers First", icon: Users, description: "Your success is our success. We operate as an extension of your team, fostering a partnership built on shared goals and radical alignment.", href: "/philosophy/customer-centric" },
  ];
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">Why Choose Trac As Your SEO Partner?</h2>
        <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
         We build systems for growth. Our approach is rooted in a deep understanding of business fundamentals and the first principles of SEO. We focus on creating durable assets that deliver predictable returns, not chasing fleeting trends.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {reasons.map((reason, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-md text-center">
              <div className="bg-yellow-400 inline-block p-3 rounded-full mb-4">
                <reason.icon className="w-8 h-8 text-gray-800" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{reason.title}</h3>
              <p className="text-sm text-gray-600">{reason.description}</p>
              <Link href={reason.href} className="text-sm font-semibold text-orange-500 hover:text-orange-600 mt-4 inline-block">Learn More <ChevronRight className="inline w-4 h-4" /></Link>
            </div>
          ))}
        </div>
        <div className="text-center">
          <Button asChild className="bg-orange-500 text-white font-semibold py-3 px-8 rounded-md hover:bg-orange-600 transition-colors text-lg">
            <Link href="/contact">SPEAK WITH AN EXPERT</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
