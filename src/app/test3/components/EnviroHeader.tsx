
"use client";

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, PaintBucket } from 'lucide-react';
import { Button } from './ui/Button';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { ScrollArea } from '@/components/ui/scroll-area';

export function EnviroHeader() {
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
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Menu className="w-6 h-6" />
                    <span className="sr-only">Open menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-full max-w-xs bg-enviro-background p-6">
                   <div className="flex justify-between items-center mb-10">
                    <SheetClose asChild>
                      <Link href="/test3" className="flex items-center gap-2 text-enviro-green">
                        <PaintBucket className="w-7 h-7" />
                        <span className="text-xl font-extrabold tracking-tight">EnviroPainting</span>
                      </Link>
                    </SheetClose>
                  </div>
                  <nav className="flex flex-col gap-4">
                    {navLinks.map((link) => (
                      <SheetClose asChild key={link.href}>
                        <Link
                          href={link.href}
                          className="text-2xl font-semibold text-enviro-green/80 hover:text-enviro-green transition-colors"
                        >
                          {link.label}
                        </Link>
                      </SheetClose>
                    ))}
                    <SheetClose asChild>
                      <Button asChild size="lg" className="mt-6">
                        <Link href="/test3/contact">Get a Free Quote</Link>
                      </Button>
                    </SheetClose>
                  </nav>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
