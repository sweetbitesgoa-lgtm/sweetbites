import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/gallery", destination: "/creations", permanent: true },
      {
        source: "/gallery/:path*",
        destination: "/creations/:path*",
        permanent: true,
      },
      { source: "/custom-cakes", destination: "/order", permanent: true },
    ];
  },
};

export default nextConfig;
