
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
      {
        source: '/:citySlug-seo-service-agency', // This will match URLs like /portland-seo-service-agency
        destination: '/city/:citySlug',          // And map them to /city/portland (if citySlug is 'portland')
      },
      // Optional: if you still want /dallas to work directly, keep this or a more specific one.
      // However, the above rewrite is more robust for the {cityname}-seo-service-agency format.
      // Consider if you need both. If all city links use the -seo-service-agency format,
      // this second rewrite might become redundant or only serve old/direct links.
      {
        source: '/:citySlug', // Matches /portland, /dallas etc.
        destination: '/city/:citySlug', // Maps to /city/portland, /city/dallas
      },
    ];
  },
};

export default nextConfig;
