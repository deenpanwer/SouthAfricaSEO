
import { QuoteForm } from '../components/QuoteForm';
import { Mail, Phone, MapPin } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with EnviroPainting for a free, no-obligation quote on your next painting project. We serve the greater metro area with high-quality, eco-friendly painting services.',
};

export default function ContactPage() {
  return (
    <div className="bg-enviro-background text-enviro-text">
      <div className="container mx-auto px-6 py-16 md:py-24">
        
        <section className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-enviro-green mb-4">Get a Free Quote</h1>
          <p className="text-lg text-enviro-text/80">
            Ready to transform your space? Fill out the form below or contact us directly. We're excited to hear about your project and provide a detailed, no-obligation estimate.
          </p>
        </section>

        <div className="grid lg:grid-cols-5 gap-16 items-start">
          <div className="lg:col-span-3">
            <QuoteForm />
          </div>
          <div className="lg:col-span-2 bg-white p-8 rounded-2xl shadow-soft">
            <h2 className="text-2xl font-bold text-enviro-green mb-6">Contact Information</h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-enviro-green/10 rounded-lg flex items-center justify-center">
                  <Mail className="w-6 h-6 text-enviro-green" />
                </div>
                <div>
                  <h3 className="font-semibold text-enviro-green">Email</h3>
                  <a href="mailto:quote@enviropainting.co" className="text-enviro-text/80 hover:text-enviro-pink">quote@enviropainting.co</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-enviro-green/10 rounded-lg flex items-center justify-center">
                  <Phone className="w-6 h-6 text-enviro-green" />
                </div>
                <div>
                  <h3 className="font-semibold text-enviro-green">Phone</h3>
                  <a href="tel:123-456-7890" className="text-enviro-text/80 hover:text-enviro-pink">123-456-7890</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-enviro-green/10 rounded-lg flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-enviro-green" />
                </div>
                <div>
                  <h3 className="font-semibold text-enviro-green">Address</h3>
                  <p className="text-enviro-text/80">123 Eco Way, Green Valley, 12345</p>
                </div>
              </div>
            </div>
            <div className="mt-8 border-t border-enviro-green/10 pt-6">
              <h3 className="font-semibold text-enviro-green mb-2">Business Hours</h3>
              <p className="text-enviro-text/80">Monday - Friday: 8:00 AM - 5:00 PM</p>
              <p className="text-enviro-text/80">Saturday: 9:00 AM - 1:00 PM</p>
              <p className="text-enviro-text/80">Sunday: Closed</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
