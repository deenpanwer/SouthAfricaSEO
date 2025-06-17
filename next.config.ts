import type {NextConfig} from 'next';

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
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'img.favpng.com',
        port: '',
        pathname: '/**',
      },{
        protocol: 'https',
        hostname: 'tse4.mm.bing.net',
        port: '',
        pathname: '/**',
      },{
        protocol: 'https',
        hostname: 'tse3.mm.bing.net',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'tse2.mm.bing.net',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'tse1.mm.bing.net',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'cdn-icggj.nitrocdn.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'thriveagency.com',
        pathname: '/**',
      },
    ],
  },

  async rewrites() {
    const saphirefansHost = 'saphirefans.traconomics.com';
    return [
       // --- Main Domain (traconomics.com) Rewrites (Order is Important) ---
       // These should come first as they are more general city/state patterns
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
       {
         source: '/:citySlug',
         destination: '/city/:citySlug',
       },


      // --- SaphireFans Subdomain Rewrites (Order is Important) ---
      // These should come AFTER the general main domain rules
      // but before any potential fallback routes.
      { // Rule for the root of the saphirefans subdomain
        source: '/',
        has: [{ type: 'host', value: saphirefansHost }],
        destination: '/saphirefans', // Maps to src/app/saphirefans/page.tsx
      },
      { // Rule for sitemap.xml on saphirefans subdomain
        source: '/sitemap.xml',
        has: [{ type: 'host', value: saphirefansHost }],
        destination: '/saphirefans/sitemap.xml', // Maps to src/app/saphirefans/sitemap.xml/route.ts
      },
      { // Rule for robots.txt on saphirefans subdomain
        source: '/robots.txt',
        has: [{ type: 'host', value: saphirefansHost }],
        destination: '/saphirefans/robots.txt', // Maps to src/app/saphirefans/robots.txt/route.ts
      },
      // General rule for other paths on saphirefans subdomain.
      // This needs to avoid Next.js internal paths and paths already handled above.
      {
        source: '/:path((?!_next/|api/|favicon.ico|sitemap.xml|robots.txt).*)',
        has: [{ type: 'host', value: saphirefansHost }],
        destination: '/saphirefans/:path*', // Example: /shop/product1 -> /saphirefans/shop/product1
      },
    ];
  },
};

export default nextConfig;
