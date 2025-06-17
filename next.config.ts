
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
    return [
      // E-commerce Subdomain Rewrite
      {
        source: '/:path*', // Match any path on the subdomain
        has: [
          {
            type: 'host',
            value: 'saphirefans.traconomics.com',
          },
        ],
        destination: '/saphirefans/:path*', // Rewrite to an internal App Router path
      },
      // Existing Rewrites
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
      // This more general rewrite should come after specific ones.
      {
        source: '/:citySlug',
        destination: '/city/:citySlug',
      },
    ];
  },
};

export default nextConfig;
