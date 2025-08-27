import React from 'react';
import { InquiryForm } from '@/components/automations/contact/InquiryForm';
import { GeoMapOverlay } from '@/components/automations/contact/GeoMapOverlay';
import { CallToActionCard } from '@/components/automations/contact/CallToActionCard';
import { Breadcrumb } from '@/components/layout/Breadcrumb';

const ContactPage = () => {
  const breadcrumbItems = [
    { name: 'TRAC', href: '/' },
    { name: 'Automations', href: '/automations' },
    { name: 'Contact', href: '/automations/contact' },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <Breadcrumb items={breadcrumbItems} />
        <h1 className="text-5xl font-bold text-center text-white mb-12">
          Connect with Our Ethical AI Team
        </h1>
        <p className="text-lg text-ph-light-gray text-center mb-16">
          Whether you have a question about our ethical AI solutions, a potential collaboration, or simply want to learn more about our responsible approach to technology, we'd love to hear from you.
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
