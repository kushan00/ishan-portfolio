import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
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
