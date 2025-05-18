import { Metadata } from 'next';
import { APP_NAME, CONTACT_DETAILS, SOCIAL_LINKS } from '@/lib/constants.tsx';
import { ContactForm } from '@/components/contact/ContactForm';
import { Mail, MapPin, Phone, MessageSquare } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: `Get in touch with ${APP_NAME} for expert SEO services in South Africa. Contact us for a free quote or consultation.`,
};

export default function ContactPage() {
  return (
    <div className="py-12 md:py-20 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <section className="text-center mb-12 md:mb-16">
          <MessageSquare className="h-16 w-16 text-primary mx-auto mb-4" />
          <h1 className="text-4xl sm:text-5xl font-extrabold text-foreground mb-6">
            Get in Touch
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            We're here to help your South African business thrive online. Reach out to us with your questions, project ideas, or for a free SEO consultation.
          </p>
        </section>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Contact Form Section */}
          <section className="bg-card p-6 sm:p-8 rounded-lg shadow-xl">
            <h2 className="text-2xl font-semibold text-foreground mb-6">Send Us a Message</h2>
            <ContactForm />
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

        {/* Map Placeholder Section - Could integrate @vis.gl/react-google-maps if API key provided */}
        <section className="mt-16 md:mt-20">
          <h2 className="text-2xl font-semibold text-foreground text-center mb-6">Find Us Here</h2>
          <div className="aspect-video bg-muted rounded-lg shadow-lg overflow-hidden">
            {/* Placeholder for map. Replace with actual map component if needed. */}
            <Image 
              src="https://placehold.co/1200x600.png?text=Our+Location+Map+(Placeholder)"
              alt="Map showing ZA Rank Boost location"
              data-ai-hint="city map location"
              width={1200}
              height={600}
              className="w-full h-full object-cover"
            />
          </div>
        </section>
      </div>
    </div>
  );
}
