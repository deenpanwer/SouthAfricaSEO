'use client'

import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="bg-ph-black text-ph-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">Company</h3>
            <ul>
              <li><Link href="/automation/about" className="hover:text-ph-light-gray">About</Link></li>
              <li><Link href="/automation/careers" className="hover:text-ph-light-gray">Careers</Link></li>
              <li><Link href="/automation/contact" className="hover:text-ph-light-gray">Contact</Link></li>
              <li><Link href="/automation/newsroom" className="hover:text-ph-light-gray">Newsroom</Link></li>
              <li><Link href="/automation/explained" className="hover:text-ph-light-gray">Explained</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Platforms</h3>
            <ul>
              <li><Link href="/automation/platforms/gotham" className="hover:text-ph-light-gray">Palantir Gotham</Link></li>
              <li><Link href="/automation/platforms/foundry" className="hover:text-ph-light-gray">Palantir Foundry</Link></li>
              <li><Link href="/automation/platforms/apollo" className="hover:text-ph-light-gray">Palantir Apollo</Link></li>
              <li><Link href="/automation/platforms/aip" className="hover:text-ph-light-gray">Palantir AIP</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Offerings</h3>
            <ul>
              <li><Link href="/automation/offerings/anti-money-laundering" className="hover:text-ph-light-gray">Anti-Money Laundering</Link></li>
              <li><Link href="/automation/offerings/customer-intelligence" className="hover:text-ph-light-gray">Customer Intelligence</Link></li>
              <li><Link href="/automation/offerings/ai-ml" className="hover:text-ph-light-gray">AI & Machine Learning</Link></li>
              <li><Link href="/automation/offerings/data-protection" className="hover:text-ph-light-gray">Data Protection</Link></li>
              <li><Link href="/automation/offerings/edge-ai" className="hover:text-ph-light-gray">Edge AI Solutions</Link></li>
              <li><Link href="/automation/offerings/supply-chain" className="hover:text-ph-light-gray">Supply Chain Optimization</Link></li>
              <li><Link href="/automation/offerings/gov-finance" className="hover:text-ph-light-gray">Gov Financial Management</Link></li>
              <li><Link href="/automation/offerings/hospital-ops" className="hover:text-ph-light-gray">Hospital Operations</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Connect</h3>
            <ul>
              <li><a href="#" className="hover:text-ph-light-gray">Twitter</a></li>
              <li><a href="#" className="hover:text-ph-light-gray">LinkedIn</a></li>
              <li><a href="#" className="hover:text-ph-light-gray">YouTube</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-ph-border pt-8 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <p>&copy; 2025 Automation. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="/automation/privacy-policy" className="hover:text-ph-light-gray">Privacy Policy</Link>
            <Link href="/automation/terms-of-service" className="hover:text-ph-light-gray">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;