import { Metadata } from 'next';
import PpcNewClient from '@/components/services/ppc/PpcNewClient';
import { Breadcrumb } from '@/components/layout/Breadcrumb';

export const metadata: Metadata = {
  title: 'PPC as an Investment | Traconomics',
  description: 'We build and manage paid campaigns that are engineered to be profitable from day one. Clicks are a cost; customers are a return.',
};

export default function NewPPCPage() {
  const breadcrumbItems = [
    { name: 'TRAC', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'PPC', href: '/services/ppc' },
  ];

  return (
    <div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <Breadcrumb items={breadcrumbItems} />
      </div>
      <PpcNewClient />
    </div>
  );
}
