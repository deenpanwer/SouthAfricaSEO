import { Metadata } from 'next';
import { APP_NAME, CONTACT_DETAILS } from '@/lib/constants.tsx';
import { ShieldCheck } from 'lucide-react';
import { Breadcrumb } from '@/components/layout/Breadcrumb';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: `Privacy Policy for ${APP_NAME}. Learn how we collect, use, and protect your personal information.`,
};

export default function PrivacyPolicyPage() {
  const breadcrumbItems = [
    { name: 'TRAC', href: '/' },
    { name: 'Privacy Policy', href: '/privacy-policy' },
  ];

  return (
    <div className="py-12 md:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
        <Breadcrumb items={breadcrumbItems} />
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
            Welcome to {APP_NAME} (&quot;us&quot;, &quot;we&quot;, or &quot;our&quot;). We are committed to protecting your personal information and your right to privacy. If you have any questions or concerns about this privacy notice, or our practices with regards to your personal information, please contact us at {CONTACT_DETAILS.email}.
          </p>

          <h2>1. Information We Collect</h2>
          <p>
            We collect personal information that you voluntarily provide to us when you express an interest in obtaining information about us or our products and services, when you participate in activities on the Website or otherwise when you contact us.
          </p>
          <p>
            The personal information that we collect depends on the context of your interactions with us and the Website, the choices you make and the products and features you use. The personal information we collect may include the following: names; phone numbers; email addresses; website URLs; mailing addresses; job titles; contact preferences; contact or authentication data; and other similar information.
          </p>

          <h2>2. How We Use Your Information</h2>
          <p>
            We use personal information collected via our Website for a variety of business purposes described below. We process your personal information for these purposes in reliance on our legitimate business interests, in order to enter into or perform a contract with you, with your consent, and/or for compliance with our legal obligations.
          </p>
          <ul>
            <li>To facilitate account creation and logon process.</li>
            <li>To post testimonials with your consent.</li>
            <li>Request feedback.</li>
            <li>To enable user-to-user communications (if applicable).</li>
            <li>To manage user accounts.</li>
            <li>To send administrative information to you.</li>
            <li>To protect our Services.</li>
            <li>To respond to legal requests and prevent harm.</li>
            <li>To provide you with requested services or information.</li>
            <li>To send you marketing and promotional communications (with your consent).</li>
          </ul>

          <h2>3. Information for Meta Ads</h2>
          <p>
            We use tracking technologies, such as the Meta Pixel (formerly Facebook Pixel), on our website to collect information about your actions on our site. This data is used to measure the effectiveness of our advertising campaigns, to understand how you interact with our website, and to deliver targeted advertisements to you on Meta platforms (Facebook and Instagram).
          </p>
          <p>
            The types of data collected through the Meta Pixel may include: actions taken on our website (e.g., page views, button clicks), device information, and other data related to your online behavior. This data is anonymized and aggregated where possible, but may also be used to create custom audiences for advertising purposes.
          </p>
          <p>
            You can manage your advertising preferences on Meta platforms by visiting your ad settings on Facebook and Instagram. You can also limit tracking by clearing cookies in your browser settings or using browser extensions designed to block tracking.
          </p>
          <p>
            For more information on how Meta collects, uses, and protects your data, please refer to <a href="https://www.facebook.com/privacy/policy" target="_blank" rel="noopener noreferrer">Meta's Privacy Policy</a>.
          </p>

          <h2>4. Will Your Information Be Shared With Anyone?</h2>
          <p>
            We only share information with your consent, to comply with laws, to provide you with services, to protect your rights, or to fulfill business obligations. We may share your data with third-party vendors, service providers, contractors, or agents who perform services for us or on our behalf and require access to such information to do that work.
          </p>

          <h2>5. How Long Do We Keep Your Information?</h2>
          <p>
            We keep your information for as long as necessary to fulfill the purposes outlined in this privacy notice unless otherwise required by law.
          </p>

          <h2>6. How Do We Keep Your Information Safe?</h2>
          <p>
            We aim to protect your personal information through a system of organizational and technical security measures. However, no electronic transmission over the internet or information storage technology can be guaranteed to be 100% secure.
          </p>

          <h2>7. What Are Your Privacy Rights?</h2>
          <p>
            Depending on your location, you may have certain rights regarding your personal information, such as the right to access, correct, or delete your data. Please contact us to exercise these rights.
          </p>

          <h2>8. Updates To This Notice</h2>
          <p>
            We may update this privacy notice from time to time. The updated version will be indicated by an updated &quot;Last updated&quot; date and the updated version will be effective as soon as it is accessible.
          </p>

          <h2>9. How Can You Contact Us About This Notice?</h2>
          <p>
            If you have questions or comments about this notice, you may email us at {CONTACT_DETAILS.email} or by post to:
          </p>
          <p>{APP_NAME}<br />{CONTACT_DETAILS.address}</p>
        </div>
      </div>
    </div>
  );
}
