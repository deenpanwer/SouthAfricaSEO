
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
    return [
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
      { 
        source: '/:citySlug',
        destination: '/city/:citySlug',
        // Add a condition to prevent this rule from matching our microsite paths.
        // It will only match paths that DO NOT start with /test3, /saphirefans, etc.
        // This is a more future-proof way to handle exclusions.
        has: [
          {
            type: 'path',
            value: '^(?!/test3|/saphirefans|/enviropainting|/blog|/about|/contact|/services|/case-studies|/pricing|/locations|/philosophy|/site-map|/privacy-policy|/terms-of-service)(/.*)',
          },
        ],
      },
      // Default fallback is implicitly handled by Next.js, no need for a catch-all
    ];
  },
};

export default nextConfig;
