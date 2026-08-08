import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true
  },
  // Ensure strict paths for subfolders if needed, but since it's custom domain base path is '/'
  reactStrictMode: true
};

export default nextConfig;
