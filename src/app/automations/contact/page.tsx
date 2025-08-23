import React from 'react';
import { InquiryForm } from '@/components/automations/contact/InquiryForm';
import { GeoMapOverlay } from '@/components/automations/contact/GeoMapOverlay';
import { CallToActionCard } from '@/components/automations/contact/CallToActionCard';

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <h1 className="text-5xl font-bold text-center text-white mb-12">
          Get in Touch
        </h1>
        <p className="text-lg text-ph-light-gray text-center mb-16">
          Have a question, a project idea, or want to collaborate? Reach out to us.
        </p>

        <section className="mb-16">
          <InquiryForm />
        </section>

        <section className="mb-16">
          <GeoMapOverlay />
        </section>

        <section>
          <CallToActionCard />
        </section>
      </div>
    </div>
  );
};

export default ContactPage;
