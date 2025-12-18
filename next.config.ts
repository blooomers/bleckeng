import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "pub-69400ea9236340e29bb7494ac2f4a975.r2.dev",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "upload.wikimedia.org",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "www.shadedrelief.com",
        pathname: "**",
      },
    ],
  },
};

export default nextConfig;
