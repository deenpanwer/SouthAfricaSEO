
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'placehold.co', port: '', pathname: '/**' },
      { protocol: 'https', hostname: 'img.favpng.com', port: '', pathname: '/**' },
      { protocol: 'https', hostname: 'tse4.mm.bing.net', port: '', pathname: '/**' },
      { protocol: 'https', hostname: 'tse3.mm.bing.net', port: '', pathname: '/**' },
      { protocol: 'https', hostname: 'tse2.mm.bing.net', port: '', pathname: '/**' },
      { protocol: 'https', hostname: 'tse1.mm.bing.net', port: '', pathname: '/**' },
      { protocol: 'https', hostname: 'images.pexels.com', pathname: '/**' },
      { protocol: 'https', hostname: 'cdn-icggj.nitrocdn.com', pathname: '/**' },
      { protocol: 'https', hostname: 'thriveagency.com', pathname: '/**' },
    ],
  },

  async rewrites() {
    // Subdomain-specific rewrites for saphirefans.traconomics.com have been removed
    // as this logic is now handled by src/middleware.ts.
    return [
      // --- Main Domain (traconomics.com) Rewrites (After subdomain rules) ---
      // These rules apply when the host is *not* saphirefans.traconomics.com
      // (because the middleware handles saphirefans, and for other hosts, these are evaluated).
      // Keep the specific ones before the general ones.

      {
        source: '/:citySlug-seo-service-agency',
        destination: '/city/:citySlug',
      },
      {
        source: '/:stateSlug-landscaping-seo-company',
        destination: '/landscaping-seo/:stateSlug',
      },
      {
        source: '/:stateSlug-veterinary-seo-clinic',
        destination: '/veterinary-seo/:stateSlug',
      },
      {
        source: '/:stateSlug-auto-dealer-seo-marketing',
        destination: '/auto-dealer-seo/:stateSlug',
      },
      {
        source: '/:stateSlug-auto-repair-seo-shop',
        destination: '/auto-repair-seo/:stateSlug',
      },
      {
        source: '/:stateSlug-salon-seo-services',
        destination: '/salon-seo/:stateSlug',
      },
      {
        source: '/:stateSlug-gym-seo-strategies',
        destination: '/gym-seo/:stateSlug',
      },
      // This more general rewrite should come after specific ones on the main domain.
      // It should *still* come before the subdomain-specific rules.
      { // General city slug, catches things like /new-york
        source: '/:citySlug',
        destination: '/city/:citySlug',
      },

      // --- Default Fallback (Highly Recommended as the LAST rule) ---
      // This ensures any path not caught by the above rules falls back to the default
      // Next.js routing (e.g., your root index.js or app/page.tsx).
      // If you omit this, unhandled paths might lead to 404s or unexpected behavior.
      {
        source: '/:path*',
        destination: '/:path*',
      },
    ];
  },
};

export default nextConfig;
