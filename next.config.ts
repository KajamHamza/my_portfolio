// next.config.js
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,

  images: {

    // Configure device sizes for responsive images
    deviceSizes: [320, 420, 768, 1024, 1200],

    // Configure image sizes for responsive images
    imageSizes: [16, 32, 48, 64, 96],
  },

  eslint: {
    ignoreDuringBuilds: true, // Ignore ESLint warnings during build
  },
  typescript: {
    ignoreBuildErrors: true, // Ignore TypeScript errors during build
  },
};

export default nextConfig;