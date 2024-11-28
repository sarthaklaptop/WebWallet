import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'api.microlink.io', // replace with your domain
        pathname: '/**',         // match all paths
      }
    ],
  },
};

export default nextConfig;
