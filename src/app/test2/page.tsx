"use client";

import Image from "next/image";
import Link from 'next/link';
import { CheckCircle, ChevronRight, Search, ShieldCheck, Star, TrendingUp, Users, MessageCircle, Award, Lightbulb, Settings, BarChart2, Briefcase, CalendarDays, Phone as PhoneIcon, Mail as MailIcon, MapPin as MapPinIcon } from 'lucide-react';

// Helper component for star ratings
import { useState } from 'react';

const StarRating = ({ rating, count }: { rating: number; count?: number }) => (
  <div className="flex items-center">
    {[...Array(5)].map((_, i) => (
      <Star key={i} className={`w-5 h-5 ${i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} />
    ))}
    {count && <span className="ml-2 text-sm text-gray-600">{count} Reviews</span>}
  </div>
);

const ThriveHeader = () => (
  <header className="bg-white border-b border-gray-200">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between h-20">
        <Link href="#" className="flex items-center">
          <Image src="https://cdn-icggj.nitrocdn.com/AphBmykuaGyxZijWArNhxcCiPzVdYZGT/assets/images/optimized/rev-d6d7292/thriveagency.com/wp-content/themes/thrive-agency/images/thrive-logo.svg" alt="Thrive Logo" width={120} height={35} />
        </Link>
        <nav className="hidden md:flex space-x-6 items-center">
          {['SERVICES', 'WORK', 'RESULTS', 'ABOUT', 'LEARN', 'SUPPORT'].map((item) => (
            <Link key={item} href="#" className="text-sm font-medium text-gray-600 hover:text-green-600 transition-colors">
              {item}
            </Link>
          ))}
          <div className="flex items-center space-x-2 text-sm text-green-600">
            <PhoneIcon className="w-4 h-4" />
            <span>888-888-8888</span>
          </div>
          <Link href="#">
            <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center text-white">
              <Users className="w-5 h-5" />
            </div>
          </Link>
        </nav>
        <div className="md:hidden">
          {/* Mobile menu button can be added here */}
        </div>
      </div>
    </div>
  </header>
);

const HeroSection = () => (
  <section className="py-16 lg:py-24 bg-gray-50">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-800 leading-tight mb-6">
            DIGITAL MARKETING AGENCY DRIVEN BY <br />
            <span className="text-green-600">RELATIONSHIPS</span> & <span className="text-green-600">RESULTS</span>
          </h1>
          <div className="flex flex-col sm:flex-row gap-3 mb-8">
            <input
              type="text"
              placeholder="Enter Your Website"
              className="flex-grow p-3 border border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500"
            />
            <button className="bg-orange-500 text-white font-semibold py-3 px-6 rounded-md hover:bg-orange-600 transition-colors">
              GET MY FREE PROPOSAL
            </button>
          </div>
          <div>
            <Image src="https://cdn-icggj.nitrocdn.com/AphBmykuaGyxZijWArNhxcCiPzVdYZGT/assets/images/optimized/rev-d6d7292/thriveagency.com/files/Badge-Strip-670X60.png" alt="Client Badges" width={670} height={60} />
          </div>
        </div>
        <div className="relative">
          <Image 
            src="https://cdn-icggj.nitrocdn.com/AphBmykuaGyxZijWArNhxcCiPzVdYZGT/assets/images/optimized/rev-d6d7292/thriveagency.com/files/Amit-Cro.jpg" 
            alt="Amit Sharma" 
            width={450} 
            height={500} 
            className="rounded-lg shadow-xl object-cover mx-auto"
            data-ai-hint="person portrait"
          />
        </div>
      </div>
    </div>
  </section>
);

const PartnerLogosSection = () => (
  <section className="py-12 bg-green-700 text-white">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        <div className="flex flex-col items-center">
          <Image src="https://cdn-icggj.nitrocdn.com/AphBmykuaGyxZijWArNhxcCiPzVdYZGT/assets/images/optimized/rev-d6d7292/thriveagency.com/wp-content/themes/thrive-agency/images/google-reviews-stats-new.svg" alt="Google Reviews" width={150} height={50} className="mx-auto mb-2" />
          <StarRating rating={5} />
          <p className="text-sm mt-1 text-yellow-400">500+ Reviews</p>
        </div>
        <div className="flex flex-col items-center">
          <Image src="https://cdn-icggj.nitrocdn.com/AphBmykuaGyxZijWArNhxcCiPzVdYZGT/assets/images/optimized/rev-d6d7292/thriveagency.com/wp-content/themes/thrive-agency/images/clutch-reviews-stats-new.svg" alt="Clutch" width={120} height={40} className="mx-auto mb-2" />
           <StarRating rating={5} />
          <p className="text-sm mt-1 text-yellow-400">200+ Reviews</p>
        </div>
        <div className="flex flex-col items-center">
          <Image src="https://cdn-icggj.nitrocdn.com/AphBmykuaGyxZijWArNhxcCiPzVdYZGT/assets/images/optimized/rev-d6d7292/thriveagency.com/wp-content/themes/thrive-agency/images/upcity-reviews-logo-new.svg" alt="UpCity" width={130} height={45} className="mx-auto mb-2" />
           <StarRating rating={5} />
          <p className="text-sm mt-1 text-yellow-400">150+ Reviews</p>
        </div>
      </div>
    </div>
  </section>
);

const ClientResultsSection = () => {
  const [isModalOpen1, setIsModalOpen1] = useState(false);
  const [isModalOpen2, setIsModalOpen2] = useState(false);

  const Modal = ({ isOpen, onClose, children }: { isOpen: boolean; onClose: () => void; children: React.ReactNode }) => {
    if (!isOpen) return null;

    return (
      <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50" onClick={onClose}>
        <div className="relative w-full max-w-3xl mx-auto p-4" onClick={(e) => e.stopPropagation()}>
          <button className="absolute top-0 right-0 m-4 text-white text-2xl" onClick={onClose}>&times;</button>
          {children}
        </div>
      </div>
    );
  };

  return (
  <section className="py-16 lg:py-24 bg-white">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">Our Clients Get Results</h2>
      <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
        Thrive is a full-service digital marketing agency. We’ve been providing a wide array of services to clients of all industries since 2005. Our digital marketing services include consulting and management options for a variety of online marketing tactics including search engine optimization (SEO), pay-per-click (PPC) ads, Amazon store optimization, copywriting, conversion rate optimization (CRO), and more. We also offer expert web design and development services for both eCommerce and B2B companies. Don’t just partner with any digital marketing agency; work with a company you can trust.
      </p>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="border border-gray-200 rounded-lg shadow-lg overflow-hidden">
          <div className="cursor-pointer" onClick={() => setIsModalOpen1(true)}>
            <Image
              src="https://cdn-icggj.nitrocdn.com/AphBmykuaGyxZijWArNhxcCiPzVdYZGT/assets/images/optimized/rev-d6d7292/thriveagency.com/files/home-group.png"
              alt="Client Results 1"
              width={600}
              height={300}
              className="w-full object-cover"
            />
          </div>
          <Modal isOpen={isModalOpen1} onClose={() => setIsModalOpen1(false)}>
            <iframe
              className="w-full aspect-video"
              src="https://www.youtube.com/embed/--5lHRSfLZg?rel=0&showinfo=0&autoplay=1"
              frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
          </Modal>
          <div className="bg-yellow-400 p-4">
            <h3 className="font-semibold text-gray-800">"The results speak for themselves"</h3>
          </div>
          <div className="p-6 grid grid-cols-2 gap-4">
            <div>
              {/* Example: <p className="text-4xl font-bold text-green-600">Client Leads: +664%</p> */}
              <p className="text-4xl font-bold text-green-600">+664%</p>
              <p className="text-sm text-gray-500">CLIENT LEADS</p>
            </div>
            <div>
               {/* Example: <p className="text-4xl font-bold text-green-600">Conversion Rate: +360%</p> */}
              <p className="text-4xl font-bold text-green-600">+360%</p>
              <p className="text-sm text-gray-500">CONVERSION RATE</p>
            </div>
          </div>
          <div className="p-6 border-t border-gray-200">
            <p className="text-sm text-gray-600 mb-2">CHOOSE MANDING CATEGORY AND PLATFORM. BUILT FOR THE FUTURE OF THEIR BUSINESS AND THEIRS NOW.</p>
            <Link href="#" className="text-sm font-semibold text-orange-500 hover:text-orange-600">View Full Case Study <ChevronRight className="inline w-4 h-4" /></Link>
          </div>
        </div>
        <div className="border border-gray-200 rounded-lg shadow-lg overflow-hidden">
           <div className="cursor-pointer" onClick={() => setIsModalOpen2(true)}>
            <Image
              src="https://cdn-icggj.nitrocdn.com/AphBmykuaGyxZijWArNhxcCiPzVdYZGT/assets/images/optimized/rev-d6d7292/thriveagency.com/wp-content/themes/thrive-agency/images/home-group-4866.png"
              alt="Client Results 2"
              width={600}
              height={300}
              className="w-full object-cover"
            />
          </div>
           <Modal isOpen={isModalOpen2} onClose={() => setIsModalOpen2(false)}>
            <iframe
              className="w-full aspect-video"
              src="https://www.youtube.com/embed/0cWlf1BmUMw?rel=0&showinfo=0&autoplay=1"
              frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
          </Modal>



          <div className="bg-yellow-400 p-4">
            <h3 className="font-semibold text-gray-800">"Thrive goes above and beyond"</h3>
          </div>
          <div className="p-6 grid grid-cols-2 gap-4">
            <div>
              <p className="text-4xl font-bold text-green-600">+800%</p>
              <p className="text-sm text-gray-500">CLIENT LEADS</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-green-600">+640%</p>
              <p className="text-sm text-gray-500">CONVERSION RATE</p>
            </div>
          </div>
          <div className="p-6 border-t border-gray-200">
            <p className="text-sm text-gray-600 mb-2">THRIVE IS A DIGITAL MARKETING EXPERT & DEVELOPED A ROBUST REPORTING MODEL.</p>
            <Link href="#" className="text-sm font-semibold text-orange-500 hover:text-orange-600">View Full Case Study <ChevronRight className="inline w-4 h-4" /></Link>
          </div>
        </div>
      </div>
      <div className="text-center mt-12">
        <button className="bg-orange-500 text-white font-semibold py-3 px-8 rounded-md hover:bg-orange-600 transition-colors text-lg">
          WORK WITH A TRUSTED MARKETING AGENCY
        </button>
      </div>
    </div>
  </section>
  );};

const TestimonialsSection = () => {
  const testimonials = [
    { name: "Marco Montemayor", company: "Director - Almond Tree Clinic", quote: "They hit everything they told me.", highlighted: "They hit everything they told me.", imageUrl: "https://cdn-icggj.nitrocdn.com/AphBmykuaGyxZijWArNhxcCiPzVdYZGT/assets/desktop/optimized/rev-d6d7292/thriveagency.com/files/marci-wiersma" },
    { name: "Whitney Wells Lewis", company: "Air Integrity A/C - HVAC Company", quote: "Thrive is transparent.", highlighted: "Thrive is transparent.", imageUrl: "https://cdn-icggj.nitrocdn.com/AphBmykuaGyxZijWArNhxcCiPzVdYZGT/assets/images/optimized/rev-d6d7292/thriveagency.com/files/whitney-wells-lewis.jpg" },
    { name: "Chad Montgomery", company: "CEO - Accurate Leak and Line", quote: "Informative and transparent.", highlighted: "Informative and transparent.", imageUrl: "https://cdn-icggj.nitrocdn.com/AphBmykuaGyxZijWArNhxcCiPzVdYZGT/assets/images/optimized/rev-d6d7292/thriveagency.com/files/chad-montgomery.jpg" },

  ];

  const TestimonialCard = ({ testimonial }: { testimonial: typeof testimonials[0] }) => (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      {testimonial.imageUrl && (
        <Image
          src={testimonial.imageUrl}
          alt={`Photo of ${testimonial.name}`}
          width={100} // Adjust width and height as needed
          height={100} // Adjust width and height as needed
          className="rounded-full mx-auto mb-4"
        />
      )}
      <p className="text-gray-600 italic">"{testimonial.quote}"</p>
      <div className="mt-4">
        <p className="font-semibold text-gray-800">{testimonial.name}</p>
        <p className="text-sm text-gray-500">{testimonial.company}</p>
      </div>
      <div className="mt-3 pt-3 border-t border-gray-200">
        <span className="text-sm bg-yellow-300 px-2 py-1 rounded text-gray-800">{testimonial.highlighted}</span>
      </div>
    </div>
  )
  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">What Our Clients Are Saying</h2>
        <p className="text-center text-gray-600 mb-12 max-w-xl mx-auto">
          Our testimonials speak for themselves. Every day, we work diligently to ensure our clients are satisfied and remain an integral part of our growth.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

const WhyChooseThriveSection = () => {
  const reasons = [
    { title: "We Drive Real Results", icon: TrendingUp, description: "Why waste time with an SEO company that can’t deliver on their promises? Stop throwing away your hard-earned money on a strategy that isn’t converting." },
    { title: "We Are Honest & Ethical", icon: ShieldCheck, description: "At Thrive, we believe in honesty, integrity, and respecting our clients. We don’t believe in “selling” a service that you don’t need or applying a one-size-fits-all approach to each client." },
    { title: "We Know Digital Marketing", icon: Lightbulb, description: "Working with a digital marketing agency that actually knows digital marketing seems obvious, but unfortunately, many firms fail to deliver positive results." },
    { title: "We Put Customers First", icon: Users, description: "Maintaining a customer-centric focus is a priority for many marketing agencies, however, few actually follow through. At Thrive, we are different." },
  ];
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">Why Choose Thrive For Your Digital Marketing Agency?</h2>
        <p className="text-center text-gray-600 mb-6 max-w-3xl mx-auto">
          We’ve been providing a wide range of digital marketing services to our clients since 2005.
        </p>
        <p className="text-center text-gray-600 mb-6 max-w-3xl mx-auto">
          The digital marketing services we provide involve crafting custom strategies for our clients based on their needs and goals. Our team is made up of award-winning marketers, designers, and developers, and we know what it takes to get real results online. We also keep the focus on the metrics that mean the most, like leads and revenue generated. We know that hitting these goals is what moves businesses forward, and we believe that our clients’ success is the best measure of our own performance.
        </p>
        <p className="text-center text-gray-600 font-semibold mb-12 max-w-3xl mx-auto">
          Meet our team of digital marketing experts.
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
            SPEAK WITH AN EXPERT MARKETING CONSULTANT
          </button>
        </div>
      </div>
    </section>
  );
};

const AwardWinningSection = () => (
  <section className="py-16 bg-gray-50">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 className="text-3xl font-bold text-gray-800 mb-4">Award-winning digital marketing agency</h2>
      <p className="text-gray-600 max-w-2xl mx-auto mb-4">
        Thrive is a Dallas web design company, an Austin web design company, a Houston web design company, and a national web design company. We are a full-service digital marketing agency that provides everything to take a business from concept to launch.
      </p>
      <Link href="#" className="text-orange-500 font-semibold hover:text-orange-600">Read More <ChevronRight className="inline w-4 h-4" /></Link>
    </div>
  </section>
);

const AwardStripSection = () => (
  <section className="py-8 bg-white">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <Image
        src="https://cdn-icggj.nitrocdn.com/AphBmykuaGyxZijWArNhxcCiPzVdYZGT/assets/images/optimized/rev-d6d7292/thriveagency.com/files/awardimage2020.jpg"
        alt="Award Strip"
        width={1000} // Adjust width and height as needed
        height={50} // Adjust width and height as needed
        className="mx-auto"
      />
    </div>
  </section>
);

const ThriveGrowthInsiderSection = () => {
  const articles = [
    { title: "10 Reasons Why You Should Transition Your Business to Our Platform", date: "Jan 15, 2024", excerpt: "Businesses are moving their operations and sales platforms more rapidly than ever before. And for...", image: "https://placehold.co/350x200.png?text=Article+1"},
    { title: "How To Build Your First B2B Web Design That Actually Converts", date: "Jan 18, 2024", excerpt: "If your B2B web design is not properly structured and optimized for conversions, it’s time for a...", image: "https://placehold.co/350x200.png?text=Article+2" },
    { title: "8 Strategies To Get More Direct Bookings and Boost Your Online...", date: "Jan 21, 2024", excerpt: "Is your direct booking channel underperforming? If you are tired of paying high commission rates to...", image: "https://placehold.co/350x200.png?text=Article+3" },
  ];
  return (
    <section className="py-16 lg:py-24 bg-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">Thrive Growth Insider</h2>
        <p className="text-center text-gray-600 mb-12 max-w-xl mx-auto">
          Discover actionable SEO, web design and digital marketing tips by our leading agency.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-2 hover:text-orange-500 transition-colors"><Link href="#">{article.title}</Link></h3>
                <p className="text-xs text-gray-500 mb-2">{article.date}</p>
                <p className="text-sm text-gray-600 mb-4">{article.excerpt}</p>
                <Link href="#" className="text-sm font-semibold text-orange-500 hover:text-orange-600">Read More <ChevronRight className="inline w-4 h-4" /></Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const DigitalExpertiseSection = () => {
  const expertiseItems = [
    { title: "SEARCH ENGINE OPTIMIZATION (SEO)", icon: Search, description: "Thrive Internet Marketing Agency is an award-winning SEO company that provides goal-oriented SEO services. Let our SEO experts help your business climb the rankings and attract ready-to-buy customers with on-point keyword research, content creation and on-page optimization." },
    { title: "PAY-PER-CLICK (PPC) MANAGEMENT", icon: TrendingUp, description: "Reach your customers quickly and with precision with a data-driven PPC campaign. Our PPC Specialists are AdWords certified, so you can rest easy knowing your campaign is in the hands of professionals. Thrive is a Google Premier Partner and Microsoft Advertising Select Partner Agency." },
    { title: "SOCIAL MEDIA MARKETING", icon: Users, description: "Ready to expand and market to your audiences on social media? We build social media campaigns to help your business grow and engage your followers. Our digital marketing agency identifies your goals, performs competitor benchmarking and evaluates your customers' online behavior." },
    { title: "WEB DESIGN AND DEVELOPMENT", icon: Settings, description: "Build a website that drives traffic, leads and sales. Our web design company offers custom web development services tailored to your specific business needs. We provide ongoing website maintenance to ensure your site is secure, backed up and performing optimally." },
    { title: "CONTENT WRITING", icon: Briefcase, description: "Your website's content is crucial: it's the foundation of your SEO and the reason many people visit your site. Entrust your content creation with Thrive's professional copywriters and reap the benefits of optimized, high-quality web content." },
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

const ReadyToGrowSection = () => (
  <section className="py-16 bg-green-700 text-white">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 className="text-3xl font-bold mb-4">READY TO GROW YOUR BUSINESS?</h2>
      <p className="mb-8 max-w-xl mx-auto">
        If you're looking for the best marketing agency that delivers real results - not just clicks and impressions - you're in the right place. Connect with us to work with a results-driven digital marketing agency.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-md transition-colors">
          GET FREE PROPOSAL
        </button>
        <button className="bg-transparent border-2 border-white hover:bg-white hover:text-green-700 text-white font-semibold py-3 px-6 rounded-md transition-colors">
          CALL 888.888.8888
        </button>
      </div>
    </div>
  </section>
);

const ThriveFooter = () => (
  <>
    <footer className="py-12 bg-white border-t border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 items-start">
          <div>
            <Image src="https://cdn-icggj.nitrocdn.com/AphBmykuaGyxZijWArNhxcCiPzVdYZGT/assets/images/optimized/rev-d6d7292/thriveagency.com/wp-content/themes/thrive-agency/images/thrive-logo.svg" alt="Thrive Tree Logo" width={80} height={100} data-ai-hint="tree logo" />
            <p className="text-sm text-gray-600 mt-4">
              Thrive Internet Marketing Agency is a dynamic, versatile and full-service digital marketing agency that doesn’t rely on smoke and mirrors to attract new clients.
            </p>
          </div>
          <div className="md:col-span-2 flex justify-around">
             {/* Placeholder for social icons */}
          </div>
          <div className="text-right">
            <div className="flex items-center justify-end space-x-2 mb-2">
                <FacebookIcon className="w-6 h-6 text-gray-500 hover:text-orange-500"/>
                <TwitterIcon className="w-6 h-6 text-gray-500 hover:text-orange-500"/>
                <LinkedInIcon className="w-6 h-6 text-gray-500 hover:text-orange-500"/>
                <InstagramIcon className="w-6 h-6 text-gray-500 hover:text-orange-500"/>
                <YoutubeIcon className="w-6 h-6 text-gray-500 hover:text-orange-500"/>
            </div>
            <p className="text-xl font-bold text-orange-500">CALL 888.888.8888</p>
            <Link href="#" className="text-sm text-green-600 hover:underline">Contact Us (View Global Sites)</Link>
          </div>
        </div>
      </div>
    </footer>
    <footer className="py-8 bg-gray-800 text-gray-400">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-center text-lg font-semibold text-white mb-6">Growing Businesses Since 2005</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 text-sm mb-8">
          {['ARLINGTON', 'ATLANTA', 'AUSTIN', 'BALTIMORE', 'CHICAGO', 'CLEVELAND', 'DALLAS', 'DENVER', 'DETROIT', 'FORT WORTH', 'HOUSTON', 'INDIANAPOLIS', 'KANSAS CITY', 'LAS VEGAS', 'LOS ANGELES', 'LOUISVILLE', 'MEMPHIS', 'MIAMI', 'MINNEAPOLIS', 'NASHVILLE', 'NEW ORLEANS', 'NEW YORK CITY', 'ORLANDO', 'PHILADELPHIA', 'PHOENIX', 'PITTSBURGH', 'PORTLAND', 'SACRAMENTO', 'SAN ANTONIO', 'SAN DIEGO', 'SAN FRANCISCO', 'SEATTLE', 'ST. LOUIS', 'TAMPA', 'WASHINGTON DC'].map(city => (
            <Link key={city} href="#" className="hover:text-white">{city}</Link>
          ))}
        </div>
        <div className="text-center text-xs border-t border-gray-700 pt-6">
          <p className="mb-2">© 2024 Thrive Internet Marketing Agency • Powered by Thrive • <Link href="#" className="hover:text-white">Sitemap</Link> • <Link href="#" className="hover:text-white">Privacy Policy</Link> • <Link href="#" className="hover:text-white">Terms of Service</Link></p>
          <p>Serving the U.S.A. • Canada • Europe</p>
        </div>
      </div>
    </footer>
  </>
);

// Placeholder icons for social media, replace with actual SVGs or a library if needed
const FacebookIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg fill="currentColor" viewBox="0 0 24 24" {...props}><path d="M22.003 2H2C.897 2 0 2.897 0 4v16c0 1.103.897 2 2 2h8.662v-6.961h-2.343v-2.725h2.343V9.95c0-2.324 1.421-3.591 3.495-3.591.699 0 1.397.053 2.094.109v2.43h-1.449c-1.13 0-1.35.537-1.35 1.326v1.734h2.697l-.35 2.725h-2.348V22h4.537c1.103 0 2-.897 2-2V4c0-1.103-.897-2-1.997-2z" /></svg>
);
const TwitterIcon = (props: React.SVGProps<SVGSVGElement>) => (
 <svg fill="currentColor" viewBox="0 0 24 24" {...props}><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
);
const LinkedInIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg fill="currentColor" viewBox="0 0 24 24" {...props}><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" /></svg>
);
const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg fill="currentColor" viewBox="0 0 24 24" {...props}><path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.314 1.647 20.644 1.233 19.86.93c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.056 1.17-.249 1.805-.413 2.227-.217.562-.477.96-.896 1.382-.42.419-.819.679-1.381.896-.422.164-1.057.36-2.227.413-1.266.057-1.646.07-4.85.07s-3.585-.015-4.85-.074c-1.17-.056-1.805-.249-2.227-.413-.562-.217-.96-.477-1.382-.896-.419-.42-.679-.819-.896-1.381-.164-.422-.36-1.057-.413-2.227-.057-1.266-.07-1.646-.07-4.85s.015-3.585.071-4.85c.055-1.17.249-1.805.415-2.227.217-.562.477.96.896-1.382.42-.419.819-.679 1.381-.896.422-.164 1.057.36 2.227-.413C8.415 2.176 8.797 2.16 12 2.16zm0 9.004c-2.193 0-3.972 1.779-3.972 3.972s1.779 3.972 3.972 3.972 3.972-1.779 3.972-3.972c0-2.193-1.779-3.972-3.972-3.972zm0 6.369c-1.325 0-2.396-1.071-2.396-2.396s1.071-2.396 2.396-2.396 2.396 1.071 2.396 2.396c0 1.325-1.071 2.396-2.396 2.396zm6.369-9.517c0 .762-.617 1.379-1.378 1.379s-1.379-.617-1.379-1.379.617-1.379 1.379-1.379 1.378.617 1.378 1.379z" /></svg>
);
const YoutubeIcon = (props: React.SVGProps<SVGSVGElement>) => (
 <svg fill="currentColor" viewBox="0 0 24 24" {...props}><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg>
);

// Placeholder for ShoppingBagIcon if not available in lucide-react default export
const ShoppingBagIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
    <line x1="3" y1="6" x2="21" y2="6"/>
    <path d="M16 10a4 4 0 0 1-8 0"/>
  </svg>
);


export default function Test2Page() {
  return (
    <div className="bg-white text-gray-700 font-sans">
      <ThriveHeader />
      <main>
        <HeroSection />
        <PartnerLogosSection />
        <ClientResultsSection />
        <TestimonialsSection />
        <WhyChooseThriveSection />
        <AwardWinningSection />
        <AwardStripSection />
        <ThriveGrowthInsiderSection />
        <DigitalExpertiseSection />
        <ReadyToGrowSection />
      </main>
      <ThriveFooter />
    </div>
  );
}
