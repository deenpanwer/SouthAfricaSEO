
import { Button } from './ui/Button';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export function FinalCTA() {
  return (
    <section className="bg-enviro-green">
      <div className="container mx-auto px-6 py-16 md:py-20 text-center text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to transform your space?</h2>
        <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
          A fresh coat of paint can do wonders. Let's discuss your project and provide you with a free, detailed, and no-obligation quote.
        </p>
        <Button asChild variant="secondary" size="lg">
          <Link href="/test3/contact">
            Get My Free Quote <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </Button>
      </div>
    </section>
  );
}
