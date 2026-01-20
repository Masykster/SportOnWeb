import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "be-sporton.agunacourse.com",
        pathname: "/uploads/**",
      },
    ],
    // Bypass private IP restriction for external images
    unoptimized: true,
  },
  // Allow dev origins for hot reload
  allowedDevOrigins: ["http://localhost:3000", "http://localhost:3001"],
};

export default nextConfig;
