import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        destination: "https://webnotes.ge/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
