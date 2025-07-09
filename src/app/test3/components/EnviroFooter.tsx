
import Link from 'next/link';
import { PaintBucket, Mail, Phone, MapPin } from 'lucide-react';
import { Button } from './ui/Button';

export function EnviroFooter() {
  const navLinks = [
    { href: '/test3/about', label: 'About Us' },
    { href: '/test3/services', label: 'Services' },
    { href: '/test3/projects', label: 'Our Work' },
    { href: '/test3/resources', label: 'Resources' },
    { href: '/test3/contact', label: 'Contact' },
  ];

  return (
    <footer className="bg-white">
      <div className="container mx-auto px-6 pt-16 pb-8">
        
        {/* Footer Callouts */}
        <div className="grid md:grid-cols-2 gap-8 bg-enviro-green text-white p-10 md:p-12 rounded-2xl mb-16">
          <div>
            <h3 className="text-3xl font-bold mb-2">Have a project in mind?</h3>
            <p className="text-white/80 mb-6">Let's talk about how we can bring your vision to life with a beautiful, eco-friendly coat of paint.</p>
            <Button variant="secondary" asChild>
              <Link href="/test3/contact">Get a Quote</Link>
            </Button>
          </div>
          <div>
            <h3 className="text-3xl font-bold mb-2">Stay up to date</h3>
            <p className="text-white/80 mb-6">Join our newsletter for color trends, DIY tips, and special offers.</p>
            <form className="flex gap-2">
              <input type="email" placeholder="Enter your email" className="flex-grow h-12 rounded-full px-4 text-enviro-text placeholder:text-enviro-text/50 focus:outline-none focus:ring-2 focus:ring-enviro-pink" />
              <Button variant="primary" type="submit">Subscribe</Button>
            </form>
          </div>
        </div>

        {/* Main Footer */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <Link href="/test3" className="flex items-center gap-2 text-enviro-green mb-4">
              <PaintBucket className="w-8 h-8" />
              <span className="text-2xl font-extrabold tracking-tight">EnviroPainting</span>
            </Link>
            <p className="text-enviro-text/70 max-w-sm">
              High-quality, eco-friendly residential and commercial painting services. Craftsmanship with a conscience.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-enviro-green mb-3">Navigate</h4>
            <ul className="space-y-2">
              {navLinks.map(link => (
                <li key={link.href}>
                  <Link href={link.href} className="text-enviro-text/80 hover:text-enviro-pink transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-enviro-green mb-3">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-enviro-text/80"><Phone className="w-4 h-4 text-enviro-green"/> 123-456-7890</li>
              <li className="flex items-center gap-2 text-enviro-text/80"><Mail className="w-4 h-4 text-enviro-green"/> contact@enviropainting.co</li>
              <li className="flex items-start gap-2 text-enviro-text/80"><MapPin className="w-4 h-4 text-enviro-green mt-1"/> 123 Eco Way, Green Valley, 12345</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-enviro-green/10 pt-6 text-center text-sm text-enviro-text/60">
          <p>&copy; {new Date().getFullYear()} EnviroPainting. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
