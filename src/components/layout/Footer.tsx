
import Link from 'next/link';
import { APP_NAME, FOOTER_NAV_ITEMS, SOCIAL_LINKS, CONTACT_DETAILS } from '@/lib/constants.tsx';
import { Zap } from 'lucide-react'; 

export function Footer() {
  const currentYear = new Date().getFullYear();

  // Updated to include only US cities. International cities are on the /locations page.
  const usCities = [
    'Arlington', 'Atlanta', 'Austin', 'Baltimore', 'Chicago',
    'Cleveland', 'Dallas', 'Denver', 'Houston', 'Jacksonville',
    'Kansas City', 'Las Vegas', 'Los Angeles', 'Louisville', 'Miami', 
    'Minneapolis', 'New Orleans', 'New York City', 'Orlando', 'Philadelphia', 
    'Phoenix', 'Portland', 'San Antonio', 'San Diego', 'Seattle',
  ].sort(); 

  const footerNavItems = FOOTER_NAV_ITEMS;

  return (
    <footer className="bg-muted text-muted-foreground border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="flex items-center space-x-2 text-primary mb-4">
              <Zap className="h-8 w-8" />
              <span className="font-bold text-xl text-foreground">{APP_NAME}</span>
            </Link>
            <p className="text-sm">
              Empowering businesses with expert SEO strategies for sustainable growth and market dominance.
            </p>
          </div>

          <div>
            <h3 className="text-md font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {footerNavItems.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="text-sm hover:text-primary transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-md font-semibold text-foreground mb-4">Contact Us</h3>
            <ul className="space-y-2 text-sm">
              <li><a href={`tel:${CONTACT_DETAILS.phone}`} className="hover:text-primary transition-colors">{CONTACT_DETAILS.phone}</a></li>
              <li><a href={`mailto:${CONTACT_DETAILS.email}`} className="hover:text-primary transition-colors">{CONTACT_DETAILS.email}</a></li>
              <li>{CONTACT_DETAILS.address}</li>
            </ul>
          </div>

          <div>
            <h3 className="text-md font-semibold text-foreground mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              {SOCIAL_LINKS.map((social) => (
                <Link key={social.name} href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.name} className="text-muted-foreground hover:text-primary transition-colors">
                  <social.icon className="h-6 w-6" />
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-12 border-t border-muted-foreground/20">
          <div className="text-center text-foreground mb-8"> 
            <h2 className="text-2xl md:text-3xl font-bold mb-2">Growing Businesses Since 2005 with Expert SEO</h2>
            <p className="text-md">Local SEO expertise in {usCities.length} US cities. <Link href="/locations" className="text-primary hover:underline">View all international & US locations</Link>.</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 text-sm font-semibold text-foreground">
            {usCities.map((city) => {
              const citySlug = city.toLowerCase().replace(/\s+/g, '-').replace(/-e-/g, '-e-'); 
              const displayName = city.replace(/-/g, ' '); 
              return (
                <div key={citySlug} className="text-center">
                  <Link href={`/${citySlug}-seo-service-agency`} className="hover:underline hover:text-primary transition-colors">
                    {displayName}
                  </Link>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-12 border-t pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
          <p>&copy; {currentYear} {APP_NAME}. All rights reserved.</p>
          <div className="flex flex-wrap justify-center md:justify-start space-x-2 md:space-x-4 mt-4 md:mt-0">
            <Link href="/locations" className="hover:text-primary transition-colors">Locations</Link>
            <span className="text-muted-foreground/50">|</span>
            <Link href="/site-map" className="hover:text-primary transition-colors">Sitemap</Link>
            <span className="text-muted-foreground/50">|</span>
            <Link href="/llm.txt" className="hover:text-primary transition-colors">LLM File</Link>
            <span className="text-muted-foreground/50">|</span>
            <Link href="/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <span className="text-muted-foreground/50">|</span>
            <Link href="/terms-of-service" className="hover:text-primary transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
    