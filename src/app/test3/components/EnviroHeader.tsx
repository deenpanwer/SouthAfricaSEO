
"use client";

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, PaintBucket } from 'lucide-react';
import { Button } from './ui/Button';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

export function EnviroHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: '/test3/services', label: 'Services' },
    { href: '/test3/projects', label: 'Our Work' },
    { href: '/test3/about', label: 'About Us' },
    { href: '/test3/resources', label: 'Resources' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-enviro-background/80 backdrop-blur-lg">
      <div className="container mx-auto px-6">
        <div className="flex h-20 items-center justify-between">
          <Link href="/test3" className="flex items-center gap-2 text-enviro-green">
            <PaintBucket className="w-7 h-7" />
            <span className="text-xl font-extrabold tracking-tight">EnviroPainting</span>
          </Link>

          <nav className="hidden md:flex items-center gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "px-4 py-2 text-sm font-semibold rounded-full transition-colors",
                  pathname === link.href ? "bg-enviro-green/10 text-enviro-green" : "text-enviro-text/70 hover:text-enviro-green"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <div className="hidden md:block">
              <Button asChild>
                <Link href="/test3/contact">Get a Free Quote</Link>
              </Button>
            </div>
            <div className="md:hidden">
              <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(true)}>
                <Menu className="w-6 h-6" />
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div className={`fixed inset-0 z-50 bg-enviro-background p-6 transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out md:hidden`}>
        <div className="flex justify-between items-center mb-10">
           <Link href="/test3" className="flex items-center gap-2 text-enviro-green" onClick={() => setIsMenuOpen(false)}>
            <PaintBucket className="w-7 h-7" />
            <span className="text-xl font-extrabold tracking-tight">EnviroPainting</span>
          </Link>
          <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(false)}>
            <X className="w-6 h-6" />
          </Button>
        </div>
        <nav className="flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-2xl font-semibold text-enviro-green/80 hover:text-enviro-green transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
           <Button asChild size="lg" className="mt-6">
            <Link href="/test3/contact">Get a Free Quote</Link>
          </Button>
        </nav>
      </div>
    </header>
  );
}
