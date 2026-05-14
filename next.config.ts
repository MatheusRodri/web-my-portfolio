import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  // @ts-ignore - this is needed for local dev accessibility in some Next.js versions
  allowedDevOrigins: ['192.168.0.4', 'localhost:3001'],
};

export default nextConfig;
