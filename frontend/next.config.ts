import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Added froom docs: https://chakra-ui.com/docs/get-started/frameworks/next-app#optimize-bundle
  experimental: {
    optimizePackageImports: ["@chakra-ui/react"],
  },
};

export default nextConfig;
