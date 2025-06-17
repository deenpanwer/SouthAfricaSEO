
import Link from 'next/link';
import { Wind } from 'lucide-react';

export function SaphireFooter() {
  const currentYear = new Date().getFullYear();
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
            <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/saphirefans" className="hover:text-sky-400 transition-colors">Home</Link></li>
              {/* Add links to category pages once structure is final */}
              <li><Link href="/saphirefans/category/axial-flow-fans" className="hover:text-sky-400 transition-colors">Axial Fans</Link></li>
              <li><Link href="/saphirefans/category/centrifugal-fans" className="hover:text-sky-400 transition-colors">Centrifugal Fans</Link></li>
              <li><Link href="/saphirefans/cart" className="hover:text-sky-400 transition-colors">Your Cart</Link></li>
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
          <p className="mt-1">A subsidiary of Traconomics Global.</p>
        </div>
      </div>
    </footer>
  );
}
