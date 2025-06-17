// next.config.ts
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
      { // Rule for the root of the saphirefans subdomain
        source: '/',
        has: [{ type: 'host', value: saphirefansHost }],
        destination: '/saphirefans', // Maps to src/app/saphirefans/page.tsx
      },
       // Remove or comment out ALL other rewrite rules for this test
    ];
  },
};

export default nextConfig;
