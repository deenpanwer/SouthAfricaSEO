
import type { Metadata } from 'next';
import { Shield } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Privacy Policy | SaphireFans Pakistan',
  description: 'SaphireFans Pakistan Privacy Policy. Learn how we collect, use, and protect your personal information when you use our website and services for industrial fans in Pakistan.',
  keywords: ['saphirefans privacy', 'industrial fans data protection', 'Pakistan privacy policy'],
  alternates: {
    canonical: '/saphirefans/privacy',
  }
};

export default function PrivacyPage() {
  const lastUpdated = new Date().toLocaleDateString('en-PK', { year: 'numeric', month: 'long', day: 'numeric' });
  const saphireFansEmail = "privacy.pk@saphirefans.com"; // Placeholder email
  const saphireFansAddress = "123 Industrial Area, S.I.T.E, Karachi, Pakistan";

  return (
    <div className="space-y-8 py-10 bg-white p-6 md:p-10 rounded-lg shadow-md">
      <header className="text-center border-b border-slate-200 pb-6 mb-8">
        <Shield className="h-12 w-12 text-sky-600 mx-auto mb-4" />
        <h1 className="text-3xl md:text-4xl font-bold text-slate-700">Privacy Policy</h1>
        <p className="text-sm text-slate-500 mt-2">Last updated: {lastUpdated}</p>
      </header>

      <div className="prose prose-slate max-w-none text-slate-600">
        <p>SaphireFans Pakistan ("SaphireFans", "we", "us", or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website saphirefans.traconomics.com (the "Site") and purchase our industrial fan products (the "Services"). Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.</p>

        <h2 className="text-sky-700">1. Information We Collect</h2>
        <p>We may collect personal information that you voluntarily provide to us when you place an order, contact us for inquiries, or otherwise interact with our Site and Services. This information may include:</p>
        <ul>
          <li><strong>Personal Identification Information:</strong> Name, shipping address, email address, phone number.</li>
          <li><strong>Order Information:</strong> Details about the products you purchase, order history.</li>
          {/* No payment information is collected directly as card payment is simulated and COD is handled by delivery. */}
        </ul>
        <p>We may also collect non-personal information, such as browser type, operating system, and pages visited to improve our Site and Services.</p>

        <h2 className="text-sky-700">2. How We Use Your Information</h2>
        <p>Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Site or our Services to:</p>
        <ul>
          <li>Process your orders and manage your account.</li>
          <li>Deliver the products and services you requested.</li>
          <li>Communicate with you about your order, products, services, and promotional offers (with your consent).</li>
          <li>Improve our website, products, and customer service.</li>
          <li>Comply with legal obligations in Pakistan.</li>
        </ul>

        <h2 className="text-sky-700">3. Disclosure of Your Information</h2>
        <p>We do not sell, trade, or otherwise transfer to outside parties your personally identifiable information except in the following situations:</p>
        <ul>
          <li><strong>Service Providers:</strong> We may share your information with third-party vendors, service providers, contractors, or agents who perform services for us or on our behalf and require access to such information to do that work (e.g., delivery companies for shipping your order in Pakistan).</li>
          <li><strong>Legal Requirements:</strong> We may disclose your information if required to do so by Pakistani law or in response to valid requests by public authorities.</li>
        </ul>

        <h2 className="text-sky-700">4. Security of Your Information</h2>
        <p>We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.</p>
        
        <h2 className="text-sky-700">5. Your Data Protection Rights (Pakistan)</h2>
        <p>Depending on your location and applicable Pakistani data protection laws, you may have certain rights regarding your personal information, such as the right to access, correct, or request deletion of your personal data. Please contact us to exercise these rights.</p>

        <h2 className="text-sky-700">6. Cookies</h2>
        <p>Our Site may use cookies to help customize the Site and improve your experience. Most browsers are set to accept cookies by default. You can usually choose to set your browser to remove cookies and to reject cookies. If you choose to remove cookies or reject cookies, this could affect certain features or services of our Site.</p>

        <h2 className="text-sky-700">7. Changes to This Privacy Policy</h2>
        <p>We may update this Privacy Policy from time to time. The updated version will be indicated by an updated "Last updated" date and the updated version will be effective as soon as it is accessible. We encourage you to review this privacy policy frequently to be informed of how we are protecting your information.</p>

        <h2 className="text-sky-700">8. Contact Us</h2>
        <p>If you have questions or comments about this Privacy Policy, please contact us at:</p>
        <p>
          SaphireFans Pakistan<br />
          {saphireFansAddress}<br />
          Email: <a href={`mailto:${saphireFansEmail}`} className="text-sky-600 hover:underline">{saphireFansEmail}</a>
        </p>
      </div>
    </div>
  );
}
