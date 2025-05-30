import React from 'react';
import Link from 'next/link';
import { CONTACT_DETAILS } from '@/lib/constants';

export const ReadyToGrowSection = () => (
  <section className="py-16 bg-green-700 text-white">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 className="text-3xl font-bold mb-4">READY TO GROW YOUR BUSINESS?</h2>
      <p className="mb-8 max-w-xl mx-auto">
        If you're looking for the best marketing agency that delivers real results - not just clicks and impressions - you're in the right place. Connect with us to work with a results-driven digital marketing agency.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link href="/contact" passHref>
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-md transition-colors">
            GET FREE PROPOSAL
          </button>
        </Link>
        <a href={`tel:${CONTACT_DETAILS.phone.replace(/\s/g, '')}`} className="inline-block">
          <button className="bg-transparent border-2 border-white hover:bg-white hover:text-green-700 text-white font-semibold py-3 px-6 rounded-md transition-colors">
            CALL {CONTACT_DETAILS.phone}
          </button>
        </a>
      </div>
    </div>
  </section>
);