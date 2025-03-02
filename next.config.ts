import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";
const repoName = "hope"; // Replace with your actual repo name

const nextConfig: NextConfig = {
  basePath: isProd ? `/${repoName}` : "",
  assetPrefix: isProd ? `/${repoName}/` : "",
  images: {
    unoptimized: true, // Disable Next.js image optimization for GitHub Pages
  },
};

export default nextConfig;
