import Link from 'next/link';
import { Search, TrendingUp, Users, Settings, Briefcase, MailIcon, Award, BarChart2, ChevronRight } from 'lucide-react';
import React from 'react';

// Placeholder for ShoppingBagIcon if not available in lucide-react default export
const ShoppingBagIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
    <line x1="3" y1="6" x2="21" y2="6"/>
    <path d="M16 10a4 4 0 0 1-8 0"/>
  </svg>
);

export const DigitalExpertiseSection = () => {
  const expertiseItems = [
    { title: "SEARCH ENGINE OPTIMIZATION (SEO)", icon: Search, description: "Thrive Internet Marketing Agency is an award-winning SEO company that provides goal-oriented SEO services. Let our SEO experts help your business climb the rankings and attract ready-to-buy customers with on-point keyword research, content creation and on-page optimization." },
    { title: "PAY-PER-CLICK (PPC) MANAGEMENT", icon: TrendingUp, description: "Reach your customers quickly and with precision with a data-driven PPC campaign. Our PPC Specialists are AdWords certified, so you can rest easy knowing your campaign is in the hands of professionals. Thrive is a Google Premier Partner and Microsoft Advertising Select Partner Agency." },
    { title: "SOCIAL MEDIA MARKETING", icon: Users, description: "Ready to expand and market to your audiences on social media? We build social media campaigns to help your business grow and engage your followers. Our digital marketing agency identifies your goals, performs competitor benchmarking and evaluates your customers\' online behavior." },
    { title: "WEB DESIGN AND DEVELOPMENT", icon: Settings, description: "Build a website that drives traffic, leads and sales. Our web design company offers custom web development services tailored to your specific business needs. We provide ongoing website maintenance to ensure your site is secure, backed up and performing optimally." },
    { title: "CONTENT WRITING", icon: Briefcase, description: "Your website\'s content is crucial: it's the foundation of your SEO and the reason many people visit your site. Entrust your content creation with Thrive\'s professional copywriters and reap the benefits of optimized, high-quality web content." },
    { title: "EMAIL MARKETING", icon: MailIcon, description: "How many emails from businesses do you delete every day? Choose Thrive and let's make your email marketing campaigns stand out and work for your business. We create personalized email newsletters to keep your emails out of spam folders and encourage your customers to take your desired action." },
    { title: "REPUTATION MANAGEMENT", icon: Award, description: "Your reviews and online reputation can make or break your success online. Improve your reputation and reap the rewards with help from our internet marketing agency. We partner with top review management software providers to streamline your online reputation management (ORM) processes." },
    { title: "ECOMMERCE OPTIMIZATION", icon: BarChart2, description: "Generate more product sales and revenue through your eCommerce website. Our internet marketing company offers eCommerce SEO and eCommerce PPC solutions to drive top-of-funnel traffic to your website. We generate more product reviews, optimize your product pages and personalize your marketing automation." },
    { title: "AMAZON MARKETING SERVICES (AMS)", icon: ShoppingBagIcon, description: "Are you looking to list your products on the biggest eCommerce website in the world? Thrive is an Amazon marketing agency that can help you take advantage of the growing platform. We offer turnkey Amazon marketing services, including Amazon SEO and Amazon PPC." },
  ];

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">Our Digital Marketing Expertise</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Thrive offers data-driven digital marketing services aimed to deliver results that matter. We have a team of search, social, content, web and creative experts focused on client growth.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {expertiseItems.map((item, index) => (
            <div key={index} className="p-6 border border-gray-200 rounded-lg">
              <div className="flex items-center mb-3">
                <item.icon className="w-8 h-8 text-orange-500 mr-3" />
                <h3 className="text-md font-semibold text-gray-800 hover:text-orange-500 transition-colors"><Link href="#">{item.title} <ChevronRight className="inline w-4 h-4" /></Link></h3>
              </div>
              <p className="text-sm text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};