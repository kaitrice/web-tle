import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  matcher: ['/', '/preview/:path*'],
};

export default nextConfig;
