import React from 'react';
import Image from 'next/image';

const NewPage: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gray-100 py-16 px-4">
        <div className="container mx-auto flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4 font-sans">
              DIGITAL MARKETING AGENCY DRIVEN BY
              <br />
              <span className="text-orange-700">RELATIONSHIPS</span> & <span className="text-orange-700">RESULTS</span>
            </h1>
            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4 mt-6">
              <input type="text" placeholder="Enter your email" className="border rounded-md p-3 flex-grow max-w-sm" />
              <button className="bg-orange-600 text-white py-3 px-6 rounded-md font-semibold">Get your free proposal!</button>
            </div>
            {/* Placeholder for Logo Strip below CTA */}
            <div className="mt-8 flex justify-center md:justify-start space-x-8">
              <Image src="https://cdn-icggj.nitrocdn.com/AphBmykuaGyxZijWArNhxcCiPzVdYZGT/assets/images/optimized/rev-d6d7292/thriveagency.com/files/Badge-Strip-670X60.png" alt="Client Logos" width={670} height={60} />
            </div>
          </div>
          <div className="md:w-1/2 relative mt-8 md:mt-0">
            {/* Placeholder Hero Image */}
            <div className="w-full h-auto rounded-lg shadow-lg flex items-center justify-center">
              <Image src="https://cdn-icggj.nitrocdn.com/AphBmykuaGyxZijWArNhxcCiPzVdYZGT/assets/images/optimized/rev-d6d7292/thriveagency.com/files/Amit-Cro.jpg" alt="Hero Image" width={500} height={300} className="rounded-lg object-contain" />
            </div>
          </div>
        </div>
      </section>

      {/* Partnered With */}
      <section className="py-8 bg-gray-100 text-center">
        <div className="container mx-auto">
          <p>Placeholder for Partnered With Section</p>
        </div>
      </section>

      {/* Client Results */}
      <section className="py-16 bg-white text-center">
        <div className="container mx-auto">
          <p>Placeholder for Client Results Section</p>
        </div>
      </section>

      {/* Testimonial Reviews */}
      <section className="py-16 bg-gray-100 text-center">
        <div className="container mx-auto">
          <p>Placeholder for Testimonial Reviews Section</p>
        </div>
      </section>

      {/* Digital Agency */}
      <section className="py-16 bg-white text-center">
        <div className="container mx-auto">
          <p>Placeholder for Digital Agency Section</p>
        </div>
      </section>

      {/* Award-Winning */}
      <section className="py-8 bg-gray-100 text-center">
        <div className="container mx-auto">
          <p>Placeholder for Award-Winning Section</p>
        </div>
      </section>

      {/* Thrive Growth Insider */}
      <section className="py-16 bg-white text-center">
        <div className="container mx-auto">
          <p>Placeholder for Thrive Growth Insider Section</p>
        </div>
      </section>

      {/* Our Digital Marketing Expertise */}
      <section className="py-16 bg-gray-100 text-center">
        <div className="container mx-auto">
          <p>Placeholder for Our Digital Marketing Expertise Section</p>
        </div>
      </section>

      {/* Ready to Grow */}
      <section className="py-16 bg-white text-center">
        <div className="container mx-auto">
          <p>Placeholder for Ready to Grow Section with CTA</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-800 text-white text-center">
        <div className="container mx-auto">
          <p>Placeholder for Footer</p>
        </div>
      </footer>
    </div>
  );
};

export default NewPage;