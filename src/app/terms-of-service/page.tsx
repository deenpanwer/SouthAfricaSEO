
import { Metadata } from 'next';
import { APP_NAME } from '@/lib/constants.tsx';
import { FileText } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: `Terms of Service for ${APP_NAME}. Understand your rights and responsibilities when using our website and services.`,
};

export default function TermsOfServicePage() {
  return (
    <div className="py-12 md:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
        <header className="text-center mb-12">
          <FileText className="h-16 w-16 text-primary mx-auto mb-4" />
          <h1 className="text-4xl sm:text-5xl font-extrabold text-foreground">
            Terms of Service
          </h1>
          <p className="mt-2 text-muted-foreground">Last updated: {new Date().toLocaleDateString('en-CA')}</p>
        </header>

        <div className="prose prose-lg dark:prose-invert max-w-none text-foreground/90
                     prose-headings:text-foreground prose-headings:font-semibold
                     prose-a:text-primary hover:prose-a:text-primary/80">
          <h2>1. Agreement to Terms</h2>
          <p>
            By accessing or using our website and services (collectively, the &quot;Services&quot;), you agree to be bound by these Terms of Service (&quot;Terms&quot;). If you do not agree to these Terms, do not use our Services.
          </p>

          <h2>2. Services Provided</h2>
          <p>
            {APP_NAME} provides business consulting services, strategic planning, and related digital solutions as described on our website. The specifics of services provided to any client will be outlined in a separate service agreement.
          </p>

          <h2>3. User Responsibilities</h2>
          <p>
            You agree to use our Services only for lawful purposes. You are responsible for providing accurate information required for the provision of our services and for maintaining the confidentiality of any account information.
          </p>

          <h2>4. Intellectual Property</h2>
          <p>
            All content on this website, including text, graphics, logos, and images, is the property of {APP_NAME} or its content suppliers and protected by applicable copyright laws.
          </p>

          <h2>5. Fees and Payment</h2>
          <p>
            Fees for our services will be as set out in the applicable service plan or a custom proposal. Payment terms will be specified in the service agreement.
          </p>
          
          <h2>6. Confidentiality</h2>
          <p>
            Both parties agree to keep confidential all non-public information received from the other party in connection with the Services.
          </p>

          <h2>7. Limitation of Liability</h2>
          <p>
            To the fullest extent permitted by applicable law, {APP_NAME} shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses, resulting from (a) your access to or use of or inability to access or use the services; (b) any conduct or content of any third party on the services.
          </p>
          <p>
            Business results can vary and are not guaranteed. While we strive to achieve the best possible outcomes, market conditions and other external factors are beyond our direct control.
          </p>

          <h2>8. Termination</h2>
          <p>
            We may terminate or suspend your access to our Services immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms. Specific termination clauses for service agreements will be detailed therein.
          </p>

          <h2>9. Governing Law</h2>
          <p>
            These Terms shall be governed and construed in accordance with the laws of the jurisdiction in which {APP_NAME} is registered, without regard to its conflict of law provisions.
          </p>

          <h2>10. Changes to Terms</h2>
          <p>
            We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 30 days' notice prior to any new terms taking effect.
          </p>

          <h2>11. Contact Us</h2>
          <p>
            If you have any questions about these Terms, please contact us at info@trac.com.
          </p>
        </div>
      </div>
    </div>
  );
}
