import type { NextConfig } from "next";

const isProd = process.env.GITHUB_PAGES === "true";
const basePath = isProd ? "/ishan-portfolio" : "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  assetPrefix: isProd ? "/ishan-portfolio/" : "",
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  images: {
    unoptimized: true,
    qualities: [65, 75, 85],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.freepik.com",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
