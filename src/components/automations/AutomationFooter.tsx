"use client";

import Link from "next/link";
import { Github, Twitter, Linkedin, Rss } from "lucide-react";

const FooterColumn = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <div className="flex flex-col space-y-3">
    <h3 className="text-lg font-semibold text-primary mb-2">{title}</h3>
    {children}
  </div>
);

const SocialIconRow = () => (
  <div className="flex space-x-4 mt-4">
    <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
      <Github size={24} />
    </a>
    <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
      <Twitter size={24} />
    </a>
    <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
      <Linkedin size={24} />
    </a>
    <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
      <Rss size={24} />
    </a>
  </div>
);

const MapOverlayFooterBG = () => (
  <div className="absolute inset-0 z-0 opacity-10">
    {/* Placeholder for a faint world map or drone outlines */}
    <img src="https://tse4.mm.bing.net/th/id/OIP.RUTyLwJkfb4aWWQvk-VMtAHaEo?pid=Api&P=0&h=220" alt="World Map Overlay" className="w-full h-full object-cover" />
  </div>
);

export const AutomationFooter = () => {
  return (
    <footer className="relative bg-ph-dark-gray text-ph-light-gray py-16 px-6 md:px-12 overflow-hidden">
      <MapOverlayFooterBG />
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* About Snippet */}
        <div className="col-span-full md:col-span-1 flex flex-col space-y-4">
          <h2 className="text-2xl font-bold text-white">
            <span className="text-primary">AI</span><span className="text-secondary">Lab</span>
          </h2>
          <p className="text-sm">
            Pakistan's premier AI research and development agency, driving innovation for national security, government efficiency, and enterprise transformation.
          </p>
          <p className="text-sm">
            &copy; {new Date().getFullYear()} AILab. All rights reserved.
          </p>
        </div>

        {/* Quick Links */}
        <FooterColumn title="Quick Links">
          <Link href="/automations" className="hover:text-white transition-colors">Home</Link>
          <Link href="/automations/blog" className="hover:text-white transition-colors">Blog</Link>
          <Link href="/automations/news" className="hover:text-white transition-colors">News</Link>
          <Link href="/automations/case-studies" className="hover:text-white transition-colors">Case Studies</Link>
          <Link href="/automations/careers" className="hover:text-white transition-colors">Careers</Link>
          <Link href="/automations/contact" className="hover:text-white transition-colors">Contact</Link>
        </FooterColumn>

        {/* Resources */}
        <FooterColumn title="Resources">
          <Link href="/automations/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
          <Link href="/automations/terms-of-service" className="hover:text-white transition-colors">Terms of Service</Link>
          <Link href="/automations/sitemap.xml" className="hover:text-white transition-colors">Sitemap</Link>
        </FooterColumn>

        {/* Contact & Social */}
        <FooterColumn title="Connect">
          <p>Email: <a href="mailto:info@ailab.pk" className="hover:text-white transition-colors">info@ailab.pk</a></p>
          <SocialIconRow />
        </FooterColumn>
      </div>
    </footer>
  );
};
