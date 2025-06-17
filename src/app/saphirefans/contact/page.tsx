
import type { Metadata } from 'next';
import { Mail, Phone, MapPin, MessageSquare } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact SaphireFans Pakistan',
  description: 'Get in touch with SaphireFans Pakistan for inquiries about industrial fans, quotes, or support. We serve businesses across Pakistan.',
  keywords: ['contact saphirefans', 'industrial fans inquiry Pakistan', 'fan quotes Pakistan', 'SaphireFans support'],
  alternates: {
    canonical: '/saphirefans/contact',
  }
};

// Placeholder contact details - these should be SaphireFans specific
const SAPHIREFANS_CONTACT_DETAILS = {
  phone: '+92 300 1234567',
  email: 'sales.pk@saphirefans.com',
  address: '123 Industrial Area, S.I.T.E, Karachi, Pakistan',
  whatsapp: '+92 300 1234567', // Example
};


export default function ContactPage() {
  return (
    <div className="space-y-12 py-10">
      <section className="text-center">
        <MessageSquare className="h-16 w-16 text-sky-600 mx-auto mb-4" />
        <h1 className="text-4xl md:text-5xl font-bold text-slate-700 mb-4">Contact SaphireFans Pakistan</h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          We're here to assist with your industrial ventilation needs. Reach out for product information, quotes, or support.
        </p>
      </section>

      <div className="grid md:grid-cols-2 gap-8 items-start">
        <section className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-sky-700 mb-6">Get in Touch Directly</h2>
          <div className="space-y-5 text-slate-600">
            <div className="flex items-start">
              <Phone className="h-6 w-6 text-sky-600 mr-3 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-medium text-slate-700">Phone (Pakistan Sales & Support)</h3>
                <a href={`tel:${SAPHIREFANS_CONTACT_DETAILS.phone}`} className="hover:text-sky-700 transition-colors">{SAPHIREFANS_CONTACT_DETAILS.phone}</a>
              </div>
            </div>
            <div className="flex items-start">
              <Mail className="h-6 w-6 text-sky-600 mr-3 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-medium text-slate-700">Email</h3>
                <a href={`mailto:${SAPHIREFANS_CONTACT_DETAILS.email}`} className="hover:text-sky-700 transition-colors">{SAPHIREFANS_CONTACT_DETAILS.email}</a>
              </div>
            </div>
             <div className="flex items-start">
                {/* Placeholder for WhatsApp Icon - Lucide doesn't have one directly */}
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6 text-green-500 mr-3 mt-1 flex-shrink-0"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.47.074-.72.372-.25.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.626.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.289.173-1.413z"/></svg>
              <div>
                <h3 className="font-medium text-slate-700">WhatsApp (Quick Inquiries)</h3>
                 <a href={`https://wa.me/${SAPHIREFANS_CONTACT_DETAILS.whatsapp.replace('+', '')}`} target="_blank" rel="noopener noreferrer" className="hover:text-sky-700 transition-colors">{SAPHIREFANS_CONTACT_DETAILS.whatsapp}</a>
              </div>
            </div>
            <div className="flex items-start">
              <MapPin className="h-6 w-6 text-sky-600 mr-3 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-medium text-slate-700">Office Address (Pakistan)</h3>
                <p>{SAPHIREFANS_CONTACT_DETAILS.address}</p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-sky-700 mb-6">Send Us Your Requirements</h2>
          <p className="text-slate-600 mb-4">
            For detailed project discussions, custom quotes, or specific fan requirements, please email us or call our sales team. We are ready to help you find the perfect ventilation solution for your industrial needs in Pakistan.
          </p>
          {/* Placeholder for a future contact form component */}
          <div className="text-center p-6 border-2 border-dashed border-slate-300 rounded-md">
            <p className="text-slate-500">A contact form can be added here in the future for direct submissions.</p>
          </div>
        </section>
      </div>

    </div>
  );
}
