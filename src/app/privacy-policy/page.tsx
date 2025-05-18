import { Metadata } from 'next';
import { APP_NAME } from '@/lib/constants.tsx';
import { ShieldCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: `Privacy Policy for ${APP_NAME}. Learn how we collect, use, and protect your personal information.`,
};

export default function PrivacyPolicyPage() {
  return (
    <div className="py-12 md:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
        <header className="text-center mb-12">
          <ShieldCheck className="h-16 w-16 text-primary mx-auto mb-4" />
          <h1 className="text-4xl sm:text-5xl font-extrabold text-foreground">
            Privacy Policy
          </h1>
          <p className="mt-2 text-muted-foreground">Last updated: {new Date().toLocaleDateString('en-CA')}</p>
        </header>

        <div className="prose prose-lg dark:prose-invert max-w-none text-foreground/90
                     prose-headings:text-foreground prose-headings:font-semibold
                     prose-a:text-primary hover:prose-a:text-primary/80">
          <p>
            Welcome to {APP_NAME} (&quot;us&quot;, &quot;we&quot;, or &quot;our&quot;). We are committed to protecting your personal information and your right to privacy. If you have any questions or concerns about this privacy notice, or our practices with regards to your personal information, please contact us at info@zarankboost.co.za.
          </p>

          <h2>1. Information We Collect</h2>
          <p>
            We collect personal information that you voluntarily provide to us when you express an interest in obtaining information about us or our products and services, when you participate in activities on the Website or otherwise when you contact us.
          </p>
          <p>
            The personal information that we collect depends on the context of your interactions with us and the Website, the choices you make and the products and features you use. The personal information we collect may include the following: names; phone numbers; email addresses; mailing addresses; job titles; contact preferences; contact or authentication data; and other similar information.
          </p>

          <h2>2. How We Use Your Information</h2>
          <p>
            We use personal information collected via our Website for a variety of business purposes described below. We process your personal information for these purposes in reliance on our legitimate business interests, in order to enter into or perform a contract with you, with your consent, and/or for compliance with our legal obligations.
          </p>
          <ul>
            <li>To facilitate account creation and logon process.</li>
            <li>To post testimonials with your consent.</li>
            <li>Request feedback.</li>
            <li>To enable user-to-user communications.</li>
            <li>To manage user accounts.</li>
            <li>To send administrative information to you.</li>
            <li>To protect our Services.</li>
            <li>To respond to legal requests and prevent harm.</li>
          </ul>

          <h2>3. Will Your Information Be Shared With Anyone?</h2>
          <p>
            We only share information with your consent, to comply with laws, to provide you with services, to protect your rights, or to fulfill business obligations.
          </p>

          <h2>4. How Long Do We Keep Your Information?</h2>
          <p>
            We keep your information for as long as necessary to fulfill the purposes outlined in this privacy notice unless otherwise required by law.
          </p>

          <h2>5. How Do We Keep Your Information Safe?</h2>
          <p>
            We aim to protect your personal information through a system of organizational and technical security measures.
          </p>

          <h2>6. What Are Your Privacy Rights?</h2>
          <p>
            In some regions, such as the European Economic Area (EEA) and United Kingdom (UK), and South Africa (POPIA), you have rights that allow you greater access to and control over your personal information. You may review, change, or terminate your account at any time.
          </p>

          <h2>7. Updates To This Notice</h2>
          <p>
            We may update this privacy notice from time to time. The updated version will be indicated by an updated &quot;Revised&quot; date and the updated version will be effective as soon as it is accessible.
          </p>

          <h2>8. How Can You Contact Us About This Notice?</h2>
          <p>
            If you have questions or comments about this notice, you may email us at info@zarankboost.co.za or by post to:
          </p>
          <p>
            ZA Rank Boost<br />
            123 SEO Street<br />
            Cape Town, 8001<br />
            South Africa
          </p>
        </div>
      </div>
    </div>
  );
}
