import { Metadata } from 'next';
import PpcNewClient from '@/components/services/ppc/PpcNewClient';

export const metadata: Metadata = {
  title: 'PPC as an Investment | Traconomics',
  description: 'We build and manage paid campaigns that are engineered to be profitable from day one. Clicks are a cost; customers are a return.',
};

export default function NewPPCPage() {
  return <PpcNewClient />;
}
