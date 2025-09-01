import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "moatzzp6qk.ufs.sh",
      },
      {
        hostname: "utfs.io",
      },
    ],
  },
  extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended"],
  ignorePatterns: ["node_modules/", ".next/", "app/generated/prisma/**"],
};

export default nextConfig;
