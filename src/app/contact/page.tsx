
import { Metadata } from 'next';
import { APP_NAME, CONTACT_DETAILS, SOCIAL_LINKS } from '@/lib/constants';
import { Mail, MapPin, Phone, MessageSquare } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { Suspense } from 'react';
import { ContactFormWrapper } from '@/components/contact/ContactFormWrapper';
import { Breadcrumb } from '@/components/layout/Breadcrumb';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: `Get in touch with ${APP_NAME} for expert business solutions. Contact us for a free quote or consultation.`,
};

export default function ContactPage() {
  const breadcrumbItems = [
    { name: 'TRAC', href: '/' },
    { name: 'Contact Us', href: '/contact' },
  ];

  return (
    <div className="py-12 md:py-20 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb items={breadcrumbItems} />
        <section className="text-center mb-12 md:mb-16">
          <MessageSquare className="h-16 w-16 text-primary mx-auto mb-4" />
          <h1 className="text-4xl sm:text-5xl font-extrabold text-foreground mb-6">
            Get in Touch
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            We're here to help your business thrive. Reach out to us with your questions, project ideas, or for a free consultation.
          </p>
        </section>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Contact Form Section */}
          <section className="bg-card p-6 sm:p-8 rounded-lg shadow-xl">
            <h2 className="text-2xl font-semibold text-foreground mb-6">Send Us a Message</h2>
            <Suspense fallback={<div className="text-center py-8">Loading form...</div>}>
              <ContactFormWrapper/>
            </Suspense>
          </section>

          {/* Contact Details Section */}
          <section>
            <div className="bg-card p-6 sm:p-8 rounded-lg shadow-xl mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-6">Contact Information</h2>
              <div className="space-y-4 text-muted-foreground">
                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-primary mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-foreground">Phone</h3>
                    <a href={`tel:${CONTACT_DETAILS.phone}`} className="hover:text-primary transition-colors">{CONTACT_DETAILS.phone}</a>
                  </div>
                </div>
                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-primary mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-foreground">Email</h3>
                    <a href={`mailto:${CONTACT_DETAILS.email}`} className="hover:text-primary transition-colors">{CONTACT_DETAILS.email}</a>
                  </div>
                </div>
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-primary mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-foreground">Address</h3>
                    <p>{CONTACT_DETAILS.address}</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-card p-6 sm:p-8 rounded-lg shadow-xl">
              <h2 className="text-2xl font-semibold text-foreground mb-6">Connect With Us</h2>
              <div className="flex space-x-4">
                {SOCIAL_LINKS.map((social) => (
                  <Link
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className="p-2 bg-muted hover:bg-primary/10 rounded-full transition-colors text-muted-foreground hover:text-primary"
                  >
                    <social.icon className="h-6 w-6" />
                  </Link>
                ))}
              </div>
            </div>
          </section>
        </div>

        {/* Map Placeholder Section */}
        <section className="mt-16 md:mt-20">
          <h2 className="text-2xl font-semibold text-foreground text-center mb-6">Find Us Here</h2>
          {/* The Google Maps iframe */}
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2831.167518058706!2d-106.9575253245888!3d44.79777457765749!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5335fabc2a655555%3A0x7e2c5a74ee73c789!2s30%20N%20Gould%20St%20%236573%2C%20Sheridan%2C%20WY%2082801%2C%20USA!5e0!3m2!1sen!2s!4v1748214785550!5m2!1sen!2s" width="600" height="450" style={{ border: 0 }} allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </section>
      </div>
    </div>
  )
}
