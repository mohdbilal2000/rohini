import type { NextConfig } from "next";

// Old URLs from the previous site, sent to their closest new page.
const legacy: [string, string][] = [
  ["/category/:slug*", "/collections/all"],
  ["/product/:slug*", "/collections/all"],
  ["/collections", "/collections/all"],
  ["/products", "/collections/all"],
  ["/stories/:slug*", "/journal"],
  ["/blog", "/journal"],
  ["/artisans", "/about"],
  ["/shipping", "/shipping-returns"],
  ["/returns", "/shipping-returns"],
  ["/privacy", "/privacy-policy"],
];

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: { formats: ["image/avif", "image/webp"] },
  experimental: { optimizePackageImports: ["lucide-react"] },
  async redirects() {
    return legacy.map(([source, destination]) => ({ source, destination, permanent: true }));
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
        ],
      },
    ];
  },
};

export default nextConfig;
