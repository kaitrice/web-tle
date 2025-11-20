import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.scdn.co',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'cdn.*',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'highwiredaze.b-cdn.net',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
