
import { Button } from './ui/Button';
import Link from 'next/link';
import Image from 'next/image';

export function HeroSection() {
  return (
    <section className="bg-enviro-green text-white">
      <div className="container mx-auto px-6 py-20 md:py-28 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            A FLAWLESS FINISH,
            <br />
            <span className="text-enviro-pink bg-enviro-pink/20 px-4 rounded-md">A CLEAR CONSCIENCE.</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
            Experience a premium painting service that's better for your home and the planet. We use high-quality, eco-friendly paints for a beautiful, long-lasting result you can feel good about.
          </p>
          <div className="mt-8 flex flex-col md:flex-row justify-center gap-4">
            <Button asChild variant="primary" size="lg">
              <Link href="/test3/contact">Get Your Free Quote</Link>
            </Button>
            <Button asChild variant="secondary" size="lg">
              <Link href="/test3/services">Explore Services</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
