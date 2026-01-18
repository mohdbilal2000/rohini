import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
  },
  // Enable compression
  compress: true,
  // Strict mode for better development
  reactStrictMode: true,
  // Production source maps for debugging
  productionBrowserSourceMaps: false,
  // Optimize packages
  experimental: {
    optimizePackageImports: ["lucide-react"],
  },
};

export default nextConfig;
