
import Link from 'next/link';
import { Wind } from 'lucide-react';

export function SaphireFooter() {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = [
    { href: '/saphirefans/about', label: 'About Us' },
    { href: '/saphirefans/contact', label: 'Contact Us' },
    { href: '/saphirefans/terms', label: 'Terms & Conditions' },
    { href: '/saphirefans/privacy', label: 'Privacy Policy' },
  ];

  return (
    <footer className="bg-slate-800 text-slate-300 py-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <Link href="/saphirefans" className="flex items-center space-x-2 text-xl font-bold text-white mb-2">
              <Wind className="h-7 w-7 text-sky-400" />
              <span>SaphireFans Pakistan</span>
            </Link>
            <p className="text-sm text-slate-400">
              Your trusted source for high-quality industrial fans in Pakistan.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">Customer Service</h3>
            <ul className="space-y-2 text-sm">
              {footerLinks.map(link => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-sky-400 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
               <li><Link href="/saphirefans/sitemap.xml" className="hover:text-sky-400 transition-colors">Sitemap</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">Contact Us (Pakistan)</h3>
            <ul className="space-y-2 text-sm">
              <li className="text-slate-400">Phone: +92 300 1234567</li>
              <li className="text-slate-400">Email: sales.pk@saphirefans.com</li>
              <li className="text-slate-400">Karachi, Pakistan</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-700 pt-8 text-center text-sm text-slate-400">
          <p>&copy; {currentYear} SaphireFans Pakistan. All rights reserved.</p>
          <p className="mt-1">A part of Traconomics Global. Industrial solutions for a better Pakistan.</p>
        </div>
      </div>
    </footer>
  );
}
