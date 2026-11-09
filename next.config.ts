import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export for Cloudflare Pages. Keep the site content-driven and static.
  output: "export",
  trailingSlash: true,
  images: {
    // Required for next/image when using static export without an image optimizer.
    unoptimized: true,
  },
  poweredByHeader: false,
  reactStrictMode: true,
};

export default nextConfig;
