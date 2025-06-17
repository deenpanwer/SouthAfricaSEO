
import type { Metadata } from 'next';
import { FileText } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Terms & Conditions | SaphireFans Pakistan',
  description: 'Read the terms and conditions for using the SaphireFans Pakistan website and purchasing our industrial fans.',
  keywords: ['saphirefans terms', 'industrial fans conditions', 'fan purchase policy Pakistan'],
  alternates: {
    canonical: '/saphirefans/terms',
  }
};

export default function TermsPage() {
  const lastUpdated = new Date().toLocaleDateString('en-PK', { year: 'numeric', month: 'long', day: 'numeric' });

  return (
    <div className="space-y-8 py-10 bg-white p-6 md:p-10 rounded-lg shadow-md">
      <header className="text-center border-b border-slate-200 pb-6 mb-8">
        <FileText className="h-12 w-12 text-sky-600 mx-auto mb-4" />
        <h1 className="text-3xl md:text-4xl font-bold text-slate-700">Terms & Conditions</h1>
        <p className="text-sm text-slate-500 mt-2">Last updated: {lastUpdated}</p>
      </header>

      <div className="prose prose-slate max-w-none text-slate-600">
        <h2 className="text-sky-700">1. Introduction</h2>
        <p>Welcome to SaphireFans Pakistan ("SaphireFans", "we", "us", or "our"). These Terms & Conditions govern your use of our website (saphirefans.traconomics.com) and the purchase of products from us. By accessing our website or purchasing our products, you agree to be bound by these Terms & Conditions.</p>

        <h2 className="text-sky-700">2. Products & Orders</h2>
        <p>Product descriptions, specifications, and prices are subject to change without notice. We reserve the right to refuse or cancel any order for any reason, including limitations on quantities available, inaccuracies, or errors in product or pricing information. All orders are subject to availability and confirmation of the order price.</p>
        <p>Prices are listed in Pakistani Rupees (PKR) and are inclusive of applicable local taxes unless stated otherwise. Shipping costs will be added to the total price where applicable.</p>

        <h2 className="text-sky-700">3. Payment</h2>
        <p>We offer Cash on Delivery (COD) and simulated Card Payment options for orders within Pakistan. For COD orders, payment must be made in full to the delivery agent upon receipt of the goods. For card payments (simulated), no actual transaction will occur as this is for demonstration purposes on our test site. In a live environment, secure payment gateway terms would apply.</p>

        <h2 className="text-sky-700">4. Shipping & Delivery (Pakistan)</h2>
        <p>We aim to deliver products within the estimated timeframe communicated at checkout. However, delivery times are estimates and not guaranteed. Shipping is currently available within Pakistan. Risk of loss and title for products pass to you upon our delivery to the carrier.</p>

        <h2 className="text-sky-700">5. Returns & Refunds</h2>
        <p>Please inspect your order upon reception. If the item is defective, damaged, or if you receive the wrong item, please contact us immediately so that we can evaluate the issue and make it right. Our return policy and eligibility for refunds will be communicated for specific products/situations. Generally, items must be returned in their original condition and packaging.</p>

        <h2 className="text-sky-700">6. Intellectual Property</h2>
        <p>The SaphireFans Pakistan website and its original content, features, and functionality are and will remain the exclusive property of SaphireFans and its licensors. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of SaphireFans.</p>

        <h2 className="text-sky-700">7. Limitation of Liability</h2>
        <p>To the fullest extent permissible by applicable Pakistani law, SaphireFans shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the products or website.</p>

        <h2 className="text-sky-700">8. Governing Law</h2>
        <p>These Terms & Conditions shall be governed and construed in accordance with the laws of Pakistan, without regard to its conflict of law provisions.</p>

        <h2 className="text-sky-700">9. Changes to Terms</h2>
        <p>We reserve the right, at our sole discretion, to modify or replace these Terms & Conditions at any time. We will provide notice of any changes by posting the new Terms & Conditions on this page.</p>

        <h2 className="text-sky-700">10. Contact Us</h2>
        <p>If you have any questions about these Terms & Conditions, please contact us at <a href="mailto:sales.pk@saphirefans.com" className="text-sky-600 hover:underline">sales.pk@saphirefans.com</a> or call +92 300 1234567.</p>
      </div>
    </div>
  );
}
